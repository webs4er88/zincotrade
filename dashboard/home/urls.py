# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.urls import path, re_path
from dashboard.home import views
from .views import InvestView, VerificationView, AccountVer, InvestmentDetailView, ProfileView, ChartView, WithdrawalListView, WithdrawView, InvestmentView

urlpatterns = [

    # The home page
    path('user', views.index, name='user-home'),
    path('user/invest', InvestView.as_view(), name='invest'),
    path('user/investmentdetail/<int:pk>', InvestmentDetailView.as_view(), name='investment-details'),
    path('user/investments', InvestmentView.as_view(), name="investments"),
    path('user/withdraw', WithdrawView.as_view(), name="withdraw"),
    #path('user/<int:id>/createtradingaccount/', CreateBankView.as_view(), name='create-trading-account'),
    #path('user/<int:pk>/edittradingaccount/', EditBankView.as_view(), name='edit-trading-account'),
   # path('user/account_manager', AccountManagerView.as_view(), name='account_manager'),
    path('user/withdraw/withdrawal-list', WithdrawalListView.as_view(), name='withdraw-list'),
    path('user/chart', ChartView.as_view(), name='chart'),
    path('user/Account-Verification', AccountVer.as_view(), name='verify'),
    path('user/verification-sent', VerificationView.as_view(), name='verification-sent'),
    path('user/profile', ProfileView.as_view(), name='profile'),
    # Matches any html file
    re_path(r'^.*\.*', views.pages, name='pages'),

]
