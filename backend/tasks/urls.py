from django.urls import path, re_path
from . import views

urlpatterns = [
    re_path(r'^api/tasks/$', views.tasks_list),
    re_path(r'^api/tasks/(\d+)$', views.tasks_detail),

]