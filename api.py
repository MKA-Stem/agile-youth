from flask import Blueprint, jsonify, request
from database.db import connect, r
from time import time
import os

api = Blueprint("api", __name__, static_folder=None, template_folder=None)

class ERRORS():
    """400 Errors"""
    BAD_CREDS = ('{"error":"Bad credentials"}', 400)
    BAD_REQ = ('{"error":"Bad request"})', 400)
    BAD_AUTH = ('{"error":"Bad authentication"}', 400)

#API TEST
@api.route("/test", methods=["GET"])
def test():
    return jsonify({ "test":"yes" }), 200

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
        
        inserted = posts.insert({
            "title":req["title"],
            "description":req["description"],
            "score":1,
            "timeCreated":time(),
            "comments":None,
            "weight":100 #To be changed
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