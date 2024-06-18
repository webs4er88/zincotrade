# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.contrib import admin
from .models import Investment, Withdraw, TradingOptions, TradingOptionsChoice, UserTradingAccount
# Register your models here.

#admin.site.register(AccountType)
admin.site.register(Investment)
#admin.site.register(AccountManager)
admin.site.register(TradingOptions)
admin.site.register(TradingOptionsChoice)
admin.site.register(Withdraw)
admin.site.register(UserTradingAccount)
#.site.register(AccountVerification)