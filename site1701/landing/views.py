from django.shortcuts import render, get_object_or_404
from .models import TimeChangePost, Timetable
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

def landing(request):
     timetable = Timetable.objects.all()
     timeChangePost = TimeChangePost.objects.all()
     context = {"timetable":timetable,"timeChangePosts":timeChangePost}
     return render(request, "land/landing.html",context)


@csrf_exempt
def createPost(request):
     content = request.POST["content"]
     TimeChangePost.objects.create(content=content)
     return JsonResponse(request.POST)

@csrf_exempt
def delPost(request):
     content = request.POST["content"]
     delPost = TimeChangePost.objects.filter(content=content)
     delPost.delete()
     return JsonResponse(request.POST)

@csrf_exempt
def editPost(request):
     print(request.POST)
     content = request.POST["origincontent"]
     editPost = TimeChangePost.objects.get(content=content)
     editcontent = request.POST["editcontent"]
     editPost.content = editcontent
     editPost.save()
     return JsonResponse(request.POST)