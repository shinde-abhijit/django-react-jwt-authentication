from userauth import urls
from django.urls import path, include
from userauth.views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView 


urlpatterns = [
    path("signup/", CreateUserView.as_view(), name="signup"),
    path("todo/", TodoListCreate.as_view(), name="todo_list"),
    path("expense/", ExpenseTrackerListCreate.as_view(), name="todo_list"),
    path("todo/delete/<int:pk>/", TodoDelete.as_view(), name="todo_list"),
    path("expense/<int:pk>/delete/", ExpenseTrackerDelete.as_view(), name="todo_list"),
    path("token/", TokenObtainPairView.as_view(), name="get_token"),
    path("token/refresh/", TokenRefreshView.as_view(), name="refresh_token"),
    path("api-auth/", include("rest_framework.urls")),
]
