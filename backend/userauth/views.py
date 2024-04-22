from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, TodoSerializer, ExpenseTrackerSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Todo, ExpenseTracker

class TodoListCreate(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class TodoDelete(generics.DestroyAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(author=user)


class ExpenseTrackerListCreate(generics.ListCreateAPIView):
    serializer_class = ExpenseTrackerSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(author=user)
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class ExpenseTrackerDelete(generics.DestroyAPIView):
    serializer_class = ExpenseTrackerSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [ AllowAny ]








