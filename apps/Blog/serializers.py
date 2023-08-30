from rest_framework import serializers
from .models import *
from apps.Category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    get_status=serializers.CharField(source='status')

    class Meta():
        model = Post
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'views',
            'description',
            'content',
            'time_read',
            'published',
            'views',
            'category',
            'status',
            'get_status'
            
        ]
        
class PostListSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    class Meta():
        model = Post
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'views',
            'description',
            'time_read',
            'published',
            'views',
            'category',
            'status'
            
        ]