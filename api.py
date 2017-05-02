from flask import Blueprint, jsonify, request
from database.db import connect, r
from time import time
from server_utils.ranking.weightCalc import weight
import os

api = Blueprint("api", __name__, static_folder=None, template_folder=None)

currentTime = lambda: int(round(time() * 1000))
startTime = currentTime()

class ERRORS():
    """400 Errors"""
    BAD_CREDS = ('{"error":"Bad credentials"}', 400)
    BAD_REQ = ('{"error":"Bad request"})', 400)
    BAD_AUTH = ('{"error":"Bad authentication"}', 400)

#Post Creation
# Requires the following arguments:
#   title
#   description
@api.route("/make-post", methods=["POST"])
def make_post(req=None):
    if(req is None):
        req = request.json
    
    with connect() as cn:
        posts = r.table("posts")
        
        nowTime = currentTime()

        inserted = posts.insert({
            "title":req["title"],
            "description":req["description"],
            "timeCreated":nowTime,
            "comments":[],
            "upvotes":1,
            "downvotes":0,
            "weight":weight(1, 0, nowTime, startTime) #To be changed
        }).run(cn)

    return jsonify({ "post creation":"ok" })

@api.route("/upvote", methods=["POST"])
def upvote(req=None):
    if(req is None):
        req = request.json

    with connect() as cn:
        posts = r.table("posts")

        post = posts.get(req["id"])
        post.update({
            "upvotes":post["upvotes"].run(cn) + 1,
            "weight":weight(
                 post["upvotes"].run(cn) + 1, 
                 post["downvotes"].run(cn), 
                 post["timeCreated"].run(cn),
                 startTime)
            }, non_atomic=True).run(cn)

    return jsonify({ "post upvotation":"ok" })

@api.route("/downvote", methods=["POST"])
def downvote(req=None):
    if(req is None):
        req = request.json

    with connect() as cn:
        posts = r.table("posts")

        post = posts.get(req["id"])
        post.update({
            "downvotes":post["downvotes"].run(cn) + 1,
            "weight":weight(
                 post["upvotes"].run(cn), 
                 post["downvotes"].run(cn) + 1, 
                 post["timeCreated"].run(cn),
                 startTime)
            }, non_atomic=True).run(cn)

    return jsonify({ "post downvotation":"ok" })

@api.route("/comment", methods=["POST"])
def comment(req=None):
    if(req is None):
        req = request.json

    with connect() as cn:
        posts = r.table("posts")

        post = posts.get(req["id"])
        post.update({
            "comments": post["comments"].append({
                "comment":req["comment"],
                "timeCreated":currentTime(),
            })
        }, non_atomic=True).run(cn)

    return jsonify({ "comment creation":"ok" })

#return posts from database
@api.route("/posts", methods=["GET"])
def list_posts():
    with connect() as cn:
        posts = r.table("posts").run(cn)

        postsList = []
        for post in posts:
            postsList.append(post)

        return jsonify({"posts":postsList})

#404
@api.route("/<path:path>")
def not_found(path):
    return jsonify({ "Not Found":path }), 404
