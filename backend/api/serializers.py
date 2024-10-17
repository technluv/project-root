from rest_framework import serializers
from .models import User, Product


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'name', 'nickname', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = User(**validated_data)
        if password:
            user.set_password(password)
        user.save()
        return user


class ProductSerializer(serializers.ModelSerializer):
    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError(
                "Price must be a positive number.")
        return value

    def validate_stock(self, value):
        if value < 0:
            raise serializers.ValidationError("Stock cannot be negative.")
        return value

    class Meta:
        model = Product
        fields = '__all__'
