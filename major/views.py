from email import message
from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView, TemplateView
from django.urls import reverse_lazy, reverse
from django.http import HttpResponseRedirect
from .models import Post
from django.shortcuts import render
from profiles.models import Profile


# Create your views here.
# class HomeView(TemplateView):
#     template_name = 'index.html'
  
def Home_View(request, *args, **kwargs):
    code = str(kwargs.get('ref_code'))
    try:
        profile = Profile.objects.get(code=code)
        request.session['ref_profile'] = profile.id
        print('id', profile.id)
    except:
        pass
    print(request.session.get_expiry_age())
    return render(request, 'index.html', {})

class AboutView(TemplateView):
    template_name = 'aboutus.html'

class PlanView(TemplateView):
    template_name = 'plan.html'

class ServicesView(TemplateView):
    template_name = 'services.html'

class RoleView(TemplateView):
    template_name = 'rules.html'

class ContactView(TemplateView):
    template_name = 'contact.html'





def createpost(request):
        if request.method == 'POST':
            if request.POST.get('name') and request.POST.get('email') and request.POST.get('subject') and request.POST.get('message') :
                post=Post()
                post.name= request.POST.get('name')
                post.email= request.POST.get('email')
                post.Subject= request.POST.get('Subject')
                post.message= request.POST.get('message')
                post.save()
                
                return render(request, 'posts/create.html')  

        else:
                return render(request,'posts/create.html')
