from django.urls import path
from . import views
urlpatterns = [
    path('', views.landing, name="landing"),
    path('createPost/', views.createPost, name="createPost"),
    path('delPost/', views.delPost, name="delPost"),
    path('editPost/', views.editPost, name="editPost"),
]
