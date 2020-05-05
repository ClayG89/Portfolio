from django.contrib import admin
from .models import Blog, Comment, Contact
# Register your models here.

admin.site.register([Blog, Comment, Contact])