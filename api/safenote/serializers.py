from rest_framework.fields import ReadOnlyField
from .models import Country, HelpCall, Medical, Embassy
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, Serializer

# from account.models import User
# from django.contrib.auth import get_user_model

# from rest_framework.validators import ValidationError
# import re

# class UserSerializer(ModelSerializer):
#     class Meta:
#         model = User #get_user_model()
#         fields = ['username','email','phone_number']


class CountrySerializer(ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class HelpCallSerializer(ModelSerializer):
#    country_ID = CountrySerializer(read_only = True)
    class Meta:
        model = HelpCall
        fields = '__all__'

class MedicalSerializer(ModelSerializer):
#    country_ID = CountrySerializer(read_only = True)
    class Meta:
        model = Medical
        fields = '__all__'

class EmbassySerializer(ModelSerializer):
#    country_ID = CountrySerializer(read_only = True)
    class Meta:
        model = Embassy
        fields = '__all__'