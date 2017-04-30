from flask import Blueprint, jsonify, request
from database.db import connect, r
from time import time
from server_utils.ranking.weightCalc import weight
import os

api = Blueprint("api", __name__, static_folder=None, template_folder=None)

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
        
        currentTime = lambda: int(round(time() * 1000))
        nowTime = currentTime()

        inserted = posts.insert({
            "title":req["title"],
            "description":req["description"],
            "timeCreated":nowTime,
            "comments":None,
            "upvotes":1,
            "downvotes":0,
            "weight":weight(1, 0, nowTime) #To be changed
        }).run(cn)

    return jsonify({ "post-created":True })

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