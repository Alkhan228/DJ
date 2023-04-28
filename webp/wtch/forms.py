from django import forms
from .models import About_comments

class AboutCommentsForm(forms.ModelForm):
    class Meta:
        model = About_comments
        fields = ['name', 'email', 'text']
