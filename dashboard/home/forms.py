from django import forms 
#from .models import Cryptocurrency, Investment_Plan, Investment
from .models import Investment, Withdraw, AccountVerification
#from usersbank.models import UserTradingAccount

choice_list = ['basic', 'advanced']

class InvestmentForm(forms.ModelForm):
	class Meta:
		model = Investment
		fields = ('investor', 'investment_plan',  'amount_in_USD', 'cryptocurrency')

		widgets = {
			'investor': forms.TextInput(attrs={'class': 'form-control', 'value': '', 'id': 'elder', 'type': 'hidden'}),
			'investment_plan': forms.Select(attrs={'class': 'form-control'}),
			'cryptocurrency': forms.Select(attrs={'class': 'form-control'}),
			'amount_in_USD': forms.TextInput({'class': 'form-control'}),
		}


class AccountVerificationForm(forms.ModelForm):
	class Meta:
		model = AccountVerification
		fields = ('profile_image', 'name', 'city', 'id_image',  'state', 'country', 'postal_code')

		widgets = {
			#'image': forms.(attrs={'class': 'form-control'}),
			'name': forms.TextInput(attrs={'class': 'form-control', 'value': '', 'id': 'elder', 'type': 'hidden'}),
			'city': forms.TextInput({'class': 'form-control'}),
			'state': forms.TextInput({'class': 'form-control'}),
			'country': forms.TextInput(attrs={'class': 'form-control'}),
			'postal_code': forms.TextInput({'class': 'form-control'}),
			
		}
	

class WithdrawForm(forms.ModelForm):
	class Meta:
		model = Withdraw
		fields = ('investor', 'payment_gateway', 'amount_in_USD', 'wallet_address',)

		widgets = {
			'investor': forms.TextInput(attrs={'class': 'form-control', 'value': '', 'id': 'elder', 'type': 'hidden'}),
			'amount_in_USD': forms.TextInput({'class': 'form-control'}),
			'payment_gateway': forms.Select(attrs={'class': 'form-control'}),
			'wallet_address': forms.TextInput(attrs={'class': 'form-control'}),
			
		}

