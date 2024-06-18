from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Profile
# Create your views here.

def my_recommendations_view(request):
    profile = Profile.objects.get(user=request.user)
    my_recs = profile.get_recommened_profiles()
    context = {'my_recs': my_recs}
    return render(request, 'profiles/main.html', context)


