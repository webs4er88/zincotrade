# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""
from django import template
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.views.generic import View, ListView, DetailView, CreateView, UpdateView, DeleteView, TemplateView
from django.template import loader 
from django.urls import reverse_lazy, reverse
from django.views import generic
from django.urls import reverse
from .models import Investment,  Withdraw, AccountVerification
from .forms import InvestmentForm, WithdrawForm, AccountVerificationForm



@login_required(login_url="/login/")
def index(request):
    context = {'segment': 'index'}

    html_template = loader.get_template('home/index.html')
    return HttpResponse(html_template.render(context, request))


@login_required(login_url="/login/")
def pages(request):
    context = {}
    # All resource paths end in .html.
    # Pick out the html file name from the url. And load that template.
    try:

        load_template = request.path.split('/')[-1]

        if load_template == 'admin':
            return HttpResponseRedirect(reverse('admin:index'))
        context['segment'] = load_template

        html_template = loader.get_template('home/' + load_template)
        return HttpResponse(html_template.render(context, request))

    except template.TemplateDoesNotExist:

        html_template = loader.get_template('home/page-404.html')
        return HttpResponse(html_template.render(context, request))

    except:
        html_template = loader.get_template('home/page-500.html')
        return HttpResponse(html_template.render(context, request))

class InvestmentView(ListView):
    model = Investment
    template_name = "home/investments.html"

#####------------------ invest view
#class InvestView(View):
 #   model =  Investment
  #  def get(self, request, *args, **kwargs):
   #     form = InvestmentForm()
    #    return render(request, 'home/invest.html')

    #def post(self, request, *args, **kwargs):
     #   form = InvestmentForm(request.POST)
      #  if form.is_valid():
       #     form.save()
        #    return redirect('user-home')
#        return render(request, 'home/invest.html', {'form': form})

 ###################################################################################################


class InvestView(CreateView):
    model = Investment
    form_class = InvestmentForm
    template_name = 'home/invest.html'

  #  investor = request.POST["investor"]
   # investment_plan = request.POST["investment_plan"]
    #amount_in_USD = request.POST["amount_in_USD"]
   # cryptocurrency = request.POST["cryptocurrency"]

    #investment = Investment(investor=investor,investment_plan=investment_plan,amount_in_USD=amount_in_USD,cryptocurrency=cryptocurrency)
    #investment.save()
    #return render(request, "home/invest.html")


class InvestmentDetailView(DetailView):
    model = Investment
    template_name = 'home/payment.html'

class WithdrawView(CreateView):
    model = Withdraw
    form_class = WithdrawForm
    template_name = 'home/withdraw.html'
    success_url = reverse_lazy('withdraw-list')

class WithdrawalListView(ListView):
    model = Withdraw
    template_name = "home/withdrawal-list.html"

class ChartView(TemplateView):
    template_name= 'home/charts.html'

class VerificationView(TemplateView):
    template_name = 'home/verification_sent.html'

class AccountVer(CreateView):
    model = AccountVerification
    form_class = AccountVerificationForm
    template_name = 'home/account_verification.html'
    success_url = reverse_lazy('verification-sent')


class ProfileView(TemplateView):
    template_name = 'home/profile.html'