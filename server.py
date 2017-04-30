from flask import Flask, send_from_directory
from werkzeug.exceptions import NotFound

app = Flask(__name__, static_folder=None)

# API blueprint
# Loads api.py and mounts all of its routes
# at /api. This happens before the SPA index because
# these routes take precedence over serving static files.
from api import api as api_blueprint
app.register_blueprint(api_blueprint, url_prefix="/api")

# Serve stuff for SPA
@app.route("/", defaults={"path":"index.html"})
@app.route("/<path:path>")

def index(path):
    """Serve the SPA index route
    Webpack builds the frontend into `client/dist`.
    This should end up with `index.html`, which loads `bundle.js`
    and starts React pointed at a root div.
    If the file is found, send it.
    If the file is not found:
        If the file is a resource (css, svg, js, etc) send a 404.
        If the file is anything else, send the index.html so we can do pretty SPA routing.
    """
    result = None

    try:
        result = send_from_directory("client/dist", path)
    except NotFound as e:
        if path.endswith(".js") or path.endswith(".css") or path.endswith(".svg"):
            raise NotFound
        else:
            result = send_from_directory("client/dist", "index.html")

    return result