# Generated by Django 4.2 on 2023-04-28 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wtch', '0002_about_news'),
    ]

    operations = [
        migrations.CreateModel(
            name='About_comments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('text', models.TextField()),
            ],
        ),
    ]
