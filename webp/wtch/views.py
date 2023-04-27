from django.shortcuts import render
from .models import About_leadership, About_news


def main_page(request):
    return render(request, 'wtch/index.html')


def about_page(request):
    data = About_leadership.objects.all()
    return render(request, 'wtch/about.html', {'data': data})


def news_page(request):
    nudes = About_news.objects.all()
    return render(request, 'wtch/news.html', {'nudes': nudes})
# Nudes are very useful
# Create your views here.
