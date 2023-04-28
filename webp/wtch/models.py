from django.db import models


class About_leadership(models.Model):
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    position = models.CharField(max_length=30)
    img = models.ImageField(upload_to='images')

    def __str__(self):
        return f'{self.surname} {self.name}'


class About_news(models.Model):
    img = models.ImageField(upload_to='images')
    date = models.DateField()
    title = models.CharField(max_length=150)
    anons = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class About_comments(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    text = models.TextField()

    def __str__(self):
        return f"{self.name} ({self.email}): {self.text}"
    # Create your models here.
