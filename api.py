from flask import Blueprint, jsonify, request
import os

api = Blueprint("api", __name__, static_folder=None, template_folder=None)

@api.route("/test", methods=["GET"])
def test():
    return jsonify({ "test":"yes" })

@api.route("/<path:path>")
def not_found(path):
    return jsonify({ "Not Found":path })