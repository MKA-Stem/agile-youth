from flask import Blueprint, jsonify, request
from database.db import connect, r
import os

api = Blueprint("api", __name__, static_folder=None, template_folder=None)

#API TEST
@api.route("/test", methods=["GET"])
def test():
    return jsonify({ "test":"yes" }), 200

#Post Creation
# Requires the following arguments:
#   Title
#   Description
@api.route("/make-post", methods=["POST"])
def make_post(req=None):
    if(req is None):
        req = request.json
    
    with connect() as cn:
        posts = r.table("posts")
        



#return posts from database
@api.route("/posts", methods=["GET"])
def post():
    return jsonify(
        {"posts":[{"title":"No More Vegetarian Food", "desc":"we need normal people food!","score":1000, "id":69},
        {"title":"Vote Cole", "desc":"Cole for prez!","score":345, "id":420}]} # dummy values
    )

#404
@api.route("/<path:path>")
def not_found(path):
    return jsonify({ "Not Found":path }), 404

class ERRORS():
    """400 Errors"""
    BAD_CREDS = ('{"error":"Bad credentials"}', 400)
    BAD_REQ = ('{"error":"Bad request"})', 400)
    BAD_AUTH = ('{"error":"Bad authentication"}', 400)