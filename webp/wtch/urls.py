from django.urls import path
from .views import *

urlpatterns = [
    path('', main_page, name='main'),
    path('about/', about_page, name='about'),
    path('news/', news_page, name='news'),
    path('thanks_pagee/',thanks_pagee,name = 'thanks_pagee')
]
