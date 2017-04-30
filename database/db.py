# /usr/bin/env python3

# This has the rethink connection stuff.

import rethinkdb as r
import os

DB_NAME = "SGO"


def connect():
    """Returns a rethink connection"""

    RDB_HOST = os.environ.get('RDB_HOST') or 'localhost'
    RDB_PORT = os.environ.get('RDB_PORT') or 28015
    return r.connect(host=RDB_HOST, port=RDB_PORT, db=DB_NAME)


def setup():
    cn = connect()

    def maketable(name):
        if name not in r.table_list().run(cn):
            r.table_create(name).run(cn)

    def makeindex(table, index):
        if index not in r.table(table).index_list().run(cn):
            r.table(table).index_create(index).run(cn)

    if DB_NAME not in r.db_list().run(cn):
        r.db_create(DB_NAME).run(cn)

    maketable("posts")
    makeindex("posts", "title")
    makeindex("posts", "desc")
    makeindex("posts", "score")
    makeindex("posts", "id")
    makeindex("posts", "timeCreated")
    makeindex("posts", "comments")


r = r

# Setup db if run
if __name__ == "__main__": setup()