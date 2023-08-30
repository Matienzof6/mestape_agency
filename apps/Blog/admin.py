from django.contrib import admin
from .models import *
# Register your models here.


class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', )
    list_display_link = ('title', )
    list_per_page = 25


admin.site.register(Post, PostAdmin)
admin.site.register(ViewCount)