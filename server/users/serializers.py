from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers
from core.models import User

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password','last_name','first_name']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_email(self, value):
        # Validación para asegurarse de que el email no esté en uso
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este email ya está en uso.")
        return value

    def create(self, validated_data):
        # Crear el usuario con la función del CustomUserManager
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()