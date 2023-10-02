from rest_framework import serializers
from .models import Task


class TasksSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('pk', 'first_name', 'last_name', 'email', 'document', 'phone', 'registrationDate', 'photo')
