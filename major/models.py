
from django.db import models

# Create your models here.


class Post(models.Model):
    name= models.CharField(max_length=300, unique=True)
    email= models.TextField(max_length=70)
    Subject=models.TextField(max_length=50)
    message=models.TextField(max_length=300)