from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from datetime import datetime, date
from cloudinary.models import CloudinaryField

# Create your models here.

################# investment ##############################################
class Investment(models.Model):
	CRYPTO = (
		('BITCOIN', 'BITCOIN'),
		('ETHEREUM', 'ETHEREUM'),
		('TETHER', 'TETHER')
		)
	STATUS = (
		('PENDING', 'PENDING'),
		('CONFIRMED', 'CONFIRMED')
		)
	PLAN = (
		('GOLD PLAN', 'GOLD PLAN'),
		('NICE PLAN', 'NICE PLAN'),
		('ADVANCED PLAN', 'ADVANCED PLAN'),
		('BRONZE PLAN', 'BRONZE PLAN'),
		)
	investor = models.ForeignKey(User, on_delete=models.CASCADE)
	investment_plan = models.CharField(max_length=255, default='CLASSIC', choices= PLAN)
	amount_in_USD = models.IntegerField(null=False)
	cryptocurrency = models.CharField(max_length=255, default='Bitcoin', choices= CRYPTO)
	investment_status = models.CharField(max_length=255, default='Pending', choices= STATUS)
	date = models.DateField(auto_now_add=True)

	def __str__(self):
		return str(self.investor) + ' | ' +  '$' + str(self.amount_in_USD)

	def get_absolute_url(self):
		return reverse('investment-details', kwargs={'pk': self.pk})

###############################################################

class TradingOptions(models.Model):
	name =  models.CharField(max_length=128)

	def __str__(self):
		return self.name 

class TradingOptionsChoice(models.Model):
	trade = models.ForeignKey(TradingOptions, on_delete=models.CASCADE)
	name = models.CharField(max_length=128)

	def __str__(self):
		return str(self.name) + ' | ' + str(self.trade)


class Withdraw(models.Model):
	CRYPTO = (
		('BITCOIN', 'BITCOIN'),
		('ETHEREUM', 'ETHEREUM'),
		('USDT', 'USDT'),
		)
	STATUS = (
		('PENDING', 'PENDING'),
		('CONFIRMED', 'CONFIRMED')
		)
	investor = models.ForeignKey(User, on_delete=models.CASCADE)
	payment_gateway = models.CharField(max_length=255, default='Bitcoin', choices= CRYPTO)
	amount_in_USD = models.IntegerField()
	wallet_address = models.CharField(max_length=400, default="null")
	withdrawal_status = models.CharField(max_length=255, default='Pending', choices= STATUS)
	date = models.DateField(auto_now_add=True)

	def __str__(self):
		return str(self.investor) + ' | ' + str(self.amount_in_USD)


class UserTradingAccount(models.Model):
	client = models.OneToOneField(User, related_name='account', on_delete=models.CASCADE)
	total_profit = models.CharField(default='0', max_length=255)
	total_deposit = models.CharField(default='0', max_length=255)
	btc_balance_equivalent = models.CharField(max_length=255, null=True, blank=True)
	
	def __str__(self):
		return str(self.client) + ' | ' + 'Balance'

class AccountVerification(models.Model):
	STATUS = (
		('NOT VERIFIED', 'NOT VERIFIED'),
		('VERIFIED', 'VERIFIED')
		)
	name  = models.OneToOneField(User, related_name='verify', on_delete=models.CASCADE)
	profile_image = CloudinaryField('Profile image', null=True, blank=True)
	id_image = CloudinaryField('ID image', null=True, blank=True)
	city = models.CharField(max_length=255)
	state =  models.CharField(max_length=255)
	country =  models.CharField(max_length=255)
	postal_code =  models.IntegerField()
	account_status = models.CharField(max_length=255, default='Not Verified', choices= STATUS)

	def __str__(self):
		return str(self.name) + ' | ' + str(self.account_status)
