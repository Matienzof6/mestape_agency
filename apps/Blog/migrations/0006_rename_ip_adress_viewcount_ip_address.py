# Generated by Django 4.2.4 on 2023-08-22 14:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Blog', '0005_alter_post_thumbnail'),
    ]

    operations = [
        migrations.RenameField(
            model_name='viewcount',
            old_name='ip_adress',
            new_name='ip_address',
        ),
    ]
