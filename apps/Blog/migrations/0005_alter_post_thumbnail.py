# Generated by Django 4.2.4 on 2023-08-22 11:29

import apps.Blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Blog', '0004_alter_post_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='thumbnail',
            field=models.ImageField(max_length=500, upload_to=apps.Blog.models.blog_thumbnail_directory),
        ),
    ]
