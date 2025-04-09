from django.urls import path
from . import views 



urlpatterns = [
    path('', views.Login_view , name='login'),
    path('signup/', views.login_signup, name='signup'),
    path('logout/', views.logout_view, name='logout'),
    path('home/', views.login_home, name='home'),
    
    # path('error/home', views.error_page, name='error_page'),
    # path('permission/', views.require_permission, name='permission'),
    # path('password/reset/',views.password_reset_view,name='reset' ),
    # path('password/reset/<str:token>',views.password_reset_token,name='resettoken' ),
    # path('terms-and-conditions/', views.terms_and_conditions, name='terms_and_conditions'),
    # path('privacy-policy/', views.privacy_policy, name='privacy_policy'),
    
    
]