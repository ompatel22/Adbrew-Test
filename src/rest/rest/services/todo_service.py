from bson import ObjectId
from pymongo import errors
from ..db.mongo_client import get_db

db = get_db()

def get_all_todos():
    try:
        todos_cursor = db.todos.find({}, {'_id': 1, 'description': 1, 'completed': 1})
        todos = []
        for todo in todos_cursor:
            todo["_id"] = str(todo["_id"])
            todos.append(todo)
        return todos
    except errors.PyMongoError as e:
        raise Exception(f"Database error: {e}")

def create_todo(description):
    try:
        todo_doc = {
            "description": description.strip(),
            "completed": False
        }
        result = db.todos.insert_one(todo_doc)
        return {
            "_id": str(result.inserted_id),
            "description": todo_doc["description"],
            "completed": todo_doc["completed"]
        }
    except errors.PyMongoError as e:
        raise Exception(f"Database error: {e}")
