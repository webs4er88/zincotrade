from django.urls import path
from .views import Home_View, AboutView, PlanView, ServicesView, RoleView, ContactView

urlpatterns = [
    path('', Home_View, name='home'),
    path('<str:ref_code>/', Home_View, name='home'),
    path('about', AboutView.as_view(), name='about'),
    path('plans', PlanView.as_view(), name='plans'),
    path('services', ServicesView.as_view(), name='services'),
    path('role', RoleView.as_view(), name='role'),
    path('contact', ContactView.as_view(), name='contact'),
]

