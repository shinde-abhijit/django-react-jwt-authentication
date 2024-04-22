from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Todo, ExpenseTracker


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =[ 'id', 'username', 'password' ]
        extra_kwargs = { 'password': {'write_only': True} }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields =[ 'id', 'title', 'content', 'priority', 'author', 'created_at' ]
        extra_kwargs = { 'author': {'read_only': True} }

class ExpenseTrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseTracker
        fields =[ 'spent_date', 'spent_by', 'spent_category', 'spent_method', 'spent_amount', 'spent_note', 'author', 'created_at', 'updated_at'  ]
        extra_kwargs = { 'author': {'read_only': True} }





