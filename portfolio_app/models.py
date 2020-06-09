from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from djrichtextfield.models import RichTextField
from django.db import models
from tinymce.models import HTMLField

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=255)
    post = HTMLField(max_length=5000)

    def __str__(self):
        return self.title

class Comment(models.Model):
    body = models.CharField(max_length=200)
    name = models.CharField(max_length=40, default="name")
    blog = models.ForeignKey(
        Blog, on_delete=models.CASCADE, related_name='comments')
    

    def __str__(self):
        return self.body

class Contact(models.Model):
    firstname = models.CharField(max_length=25)
    lastname = models.CharField(max_length=25)
    company = models.CharField(max_length=50)
    phone = PhoneNumberField(blank=True)
    email = models.EmailField()
    topic = models.CharField(max_length=250)
    message = models.CharField(max_length=400)

    def __str__(self):
        return self.topic