from userauth import urls
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("user/", include('userauth.urls')),
    path("__reload__/", include("django_browser_reload.urls")),
]
