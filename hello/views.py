from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,"hello/index.html")

def mason(request):
    return HttpResponse("Hello Mason. Have a nice day~")
