# Generated by Django 4.2.4 on 2023-08-22 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Blog', '0002_remove_post_excerpt_post_content_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='description',
            field=models.TextField(max_length=255),
        ),
    ]
