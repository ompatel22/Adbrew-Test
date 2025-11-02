from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..services.todo_service import get_all_todos, create_todo

class TodoListView(APIView):
    def get(self, request, format=None):
        try:
            todos = get_all_todos()
            return Response(todos, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request, format=None):
        description = request.data.get("description")
        if not description or not isinstance(description, str) or not description.strip():
            return Response(
                {"error": "Invalid 'description' provided"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            new_todo = create_todo(description)
            return Response(new_todo, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
