# Generated by Django 4.2.4 on 2023-08-27 20:13

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=100)),
                ('subject', models.CharField(max_length=100)),
                ('message', models.TextField(blank=True)),
                ('budget', models.CharField(blank=True, max_length=100)),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'ordering': ('-date_created',),
            },
        ),
    ]
