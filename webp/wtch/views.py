from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect
from .models import About_leadership, About_news,About_comments
from .forms import AboutCommentsForm

def main_page(request):
    return render(request, 'wtch/index.html')


def about_page(request):
    data = About_leadership.objects.all()
    return render(request, 'wtch/about.html', {'data': data})


def news_page(request):
    nudes = About_news.objects.all()
    return render(request, 'wtch/news.html', {'nudes': nudes})

def thanks_pagee(request):
    if request.method == 'POST':
        form = AboutCommentsForm(request.POST)
        if form.is_valid():
            form.save()
            context = {'success': True}
        else:
            context = {'success': False, 'errors': form.errors}
            form = AboutCommentsForm()
            context = {'form': form}
        return render(request, 'wtch/index.html', context)
# Nudes are very useful
# Create your views here.


