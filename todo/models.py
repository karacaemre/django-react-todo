from django.db import models

class Todo(models.Model):
    title=models.CharField(max_length=50)
    description=models.CharField(max_length=300)
    completed= models.BooleanField(default=False)