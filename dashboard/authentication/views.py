# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import LoginForm, SignUpForm, EditProfileForm, PasswordChangingForm
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm
from django.views import generic
from django.urls import reverse_lazy
from django.contrib.auth.views import PasswordChangeView
#from dashboard.home.models import Trading
#from .forms import EditTradingForm
from django.views.generic import View, ListView, DetailView, CreateView, UpdateView, DeleteView, TemplateView
from django.core.mail import send_mail
from django.conf import settings
from profiles.models import Profile
from django.contrib.auth.models import User

def login_view(request):
    form = LoginForm(request.POST or None)

    msg = None

    if request.method == "POST":

        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("user-home")
            else:
                msg = 'Invalid credentials'
        else:
            msg = 'Error validating the form'

    return render(request, "accounts/login.html", {"form": form, "msg": msg})

def register_user(request):
    msg = None
    success = False
    profile_id = request.session.get('ref_profile')
    print('profile_id', profile_id)
    form = SignUpForm(request.POST or None)
 
    if form.is_valid():
        if profile_id is not None:
            recommended_by_profile = Profile.objects.get(id=profile_id)

            instance = form.save()
            registered_user = User.objects.get(id=instance.id)
            registered_profile = Profile.objects.get(user=registered_user)
            registered_profile.recommended_by = recommended_by_profile.user
            registered_profile.save()
        else:
            form.save()
        username = form.cleaned_data.get("username")
        email = form.cleaned_data.get("email")
        raw_password = form.cleaned_data.get("password1")
        user = authenticate(username=username, password=raw_password, email=email)
        login(request, user)
        return redirect("user-home")
    context = {'form':form}
    return render(request, 'accounts/register.html', context)
    



# def register_user(request):
#     msg = None
#     success = False
#     profile_id = request.session.get('ref_profile')
#     print('profile_id', profile_id)
#     if request.method == "POST":
#         form = SignUpForm(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data.get("username")
#             email = form.cleaned_data.get("email")
#             raw_password = form.cleaned_data.get("password1")
#             user = authenticate(username=username, password=raw_password, email=email)
#             msg = 'User created - please --> '
#             success = True

#            # return redirect({% url 'login' %})

#         else:
#             msg = 'Form is not valid'
#     else:
#         form = SignUpForm()

#     return render(request, "accounts/register.html", {"form": form, "msg": msg, "success": success})

class UserEditView(generic.UpdateView):
    form_class =  EditProfileForm
    template_name = "accounts/edit_profile.html"
    success_url = reverse_lazy('profile')

    def get_object(self):
        return self.request.user

def password_success(request):
    return render(request, 'accounts/password_success.html', {})


class PasswordsChangeView(PasswordChangeView):
    from_class = PasswordChangingForm
    #from_class = PasswordChangeForm
    success_url = reverse_lazy('password_success')

