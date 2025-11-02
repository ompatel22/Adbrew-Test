"""
URL configuration for rest project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
"""
from django.contrib import admin
from django.urls import path
from .views.todo_views import TodoListView  # Import the view from views.py

urlpatterns = [
    path('admin/', admin.site.urls),
    # This line connects the /todos URL to your TodoListView
    path('todos', TodoListView.as_view(), name='todo-list'),
]