
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo
from rest_framework.filters import SearchFilter

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    filter_backends = [SearchFilter]
    search_fields = ['title', 'description', 'priority']
