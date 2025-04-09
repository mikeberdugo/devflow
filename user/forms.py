from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Div, Submit, HTML, Field ,Row , Column 

ROLE_CHOICES = [
        ('', ''),
        ('developer', 'Developer'),
        ('scrum_master', 'Scrum Master'),
        ('admin', 'Admin'),
        ('project_manager', 'Project Manager'),
        ('business_analyst', 'Business Analyst'),
        ('qa_engineer', 'QA Engineer'),
        ('ux_designer', 'UX Designer'),
        ('ui_designer', 'UI Designer'),
        ('devops_engineer', 'DevOps Engineer'),
        ('systems_architect', 'Systems Architect'),
        ('software_engineer', 'Software Engineer'),
        ('data_scientist', 'Data Scientist'),
        ('product_owner', 'Product Owner'),
        ('technical_writer', 'Technical Writer'),
        ('support_engineer', 'Support Engineer'),
        ('network_engineer', 'Network Engineer'),
        ('security_specialist', 'Security Specialist'),
        ('database_administrator', 'Database Administrator'),
        ('frontend_developer', 'Frontend Developer'),
        ('backend_developer', 'Backend Developer'),
        ('full_stack_developer', 'Full Stack Developer'),
        ('cloud_engineer', 'Cloud Engineer'),
    ]

class LoginForm(forms.Form):
    email = forms.CharField(label='Correo electronico:', widget=forms.TextInput(attrs={'placeholder': 'Ingrese su Correo electronico'}))
    password = forms.CharField(label='Contraseña:', max_length=30, widget=forms.PasswordInput(attrs={'placeholder': 'Ingrese su contraseña'}))

    def __init__(self, *args, **kwargs):
        super(LoginForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_method = 'post'
        self.helper.layout = Layout(
            Row(
                Column('email', css_class='form-group col-md-12 mb-0'),
                css_class='form-row'
            ),
            Row(
                Column('password', css_class='form-group col-md-12 mb-0'),
                css_class='form-row'
            ),
            Submit('submit', 'Ingresar', css_class='btn btn-light-success w-100')
        )
        

    

class SignupForm(forms.Form):
    email = forms.EmailField(label='', widget=forms.EmailInput(attrs={'placeholder': 'Correo electrónico'}))
    password1 = forms.CharField(label='', widget=forms.PasswordInput(attrs={'placeholder': 'Contraseña'}))
    password2 = forms.CharField(label='', widget=forms.PasswordInput(attrs={'placeholder': 'Confirmar contraseña'}))
    

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)


        self.fields['rol'] = forms.ChoiceField(
            choices= ROLE_CHOICES ,
            label='',
            widget=forms.Select(attrs={
                'data-control': 'select2',
                'data-tags': 'true',
                'class': 'form-select',
                'data-placeholder':"Seleccione un Rol",
                'data-hide-search': "true",
            })
        )

        self.helper = FormHelper()
        self.helper.layout = Layout(
            Row(
                Column('email', css_class='form-group col-md-12 mb-0'),
                css_class='row'
            ),
            Row(
                Column('password1', css_class='form-group col-md-6 mb-0'),
                Column('password2', css_class='form-group col-md-6 mb-0'),
                css_class='row'
            ),
            Row(
                
                css_class='row'
            ),
            Row(
                Column('rol', css_class='form-group col-md-12 mb-0'),
                css_class='row'
            ),
            
            Submit('submit', 'Registrarse', css_class='btn btn-light-success w-100')
        )
                
        
        
class PasswordResetForm(forms.Form):
    email = forms.EmailField()
    
    def __init__(self, *args, **kwargs):
        super(PasswordResetForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_method = 'post'
        self.helper.layout = Layout(
            Row(
                Column('email', css_class='form-group mb-2'),
                css_class='form-row'
            ),
            Submit('submit', 'Enviar', css_class='btn btn-light-success w-100')
        )
    