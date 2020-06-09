from rest_framework import viewsets
from django.shortcuts import render
from .serializers import BlogSerializer, CommentSerializer, ContactSerializer
from .models import Blog, Comment, Contact
from .filters import BlogFilter



class BlogView(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['filter'] = BlogFilter(self.request.GET, queryset=self.get_queryset())
        return context

class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class ContactView(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer