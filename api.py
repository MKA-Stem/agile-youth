from flask import Blueprint, jsonify, request
import os

api = Blueprint("api", __name__, static_folder=None, template_folder=None)

#API TEST
@api.route("/test", methods=["GET"])
def test():
    return jsonify({ "test":"yes" })

#404
@api.route("/<path:path>")
def not_found(path):
    return jsonify({ "Not Found":path })