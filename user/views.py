from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import authenticate, login , logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import LoginForm , SignupForm
from django.contrib.auth import get_user_model

# Create your views here.

def Login_view(request):
    if request.user.is_authenticated:
        rol = request.session.get('usuario', {}).get('rol')
        return False
    else:
        if request.method == 'POST':
            form = LoginForm(request.POST)
            if form.is_valid():
                email = form.cleaned_data['email']
                password = form.cleaned_data['password']
                user = authenticate(request, email=email, password=password)
                if user is not None:
                    login(request, user)
                    complements = {
                        'id': user.id,
                        'rol': user.tipo_user,
                        'name': f"{user.first_name} {user.last_name}",
                        'idempleado': user.id_empleado.idempleado if user.id_empleado else None ,
                        'idempresa': user.id_empresa.idempresa if user.id_empresa else None
                    }
                    request.session['usuario'] = complements
                    return False
                else:
                    messages.error(request, 'Usuario o contraseña incorrectos.')
        else:
            form = LoginForm()
        return render(request, './user/login.html', {'form': form})




def login_signup(request):
    form = SignupForm()
    return render(request, './user/signup.html', {'form': form})

def login_home(request):
    
    return render(request, './user/index.html')


@login_required
def logout_view(request):
    logout(request)
    return redirect('login:login')
