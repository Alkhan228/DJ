# Generated by Django 3.0.14 on 2023-04-26 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wtch', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='About_news',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='images')),
                ('date', models.DateField()),
                ('title', models.CharField(max_length=150)),
                ('anons', models.CharField(max_length=50)),
            ],
        ),
    ]
