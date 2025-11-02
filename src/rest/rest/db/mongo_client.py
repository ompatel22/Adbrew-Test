import os
from pymongo import MongoClient

def get_db():
    mongo_uri = f"mongodb://{os.environ['MONGO_HOST']}:{os.environ['MONGO_PORT']}"
    client = MongoClient(mongo_uri)
    return client.adbrew_test  # Return the database handle
