# # from account.models import User
# from .models import TodoGroup, Todo, FavouriteGroup, Favourite
# # from django.contrib.auth import get_user_model
# from rest_framework import serializers
# from rest_framework.serializers import ModelSerializer, Serializer
# # from rest_framework.validators import ValidationError
# # import re

# # class UserSerializer(ModelSerializer):
# #     class Meta:
# #         model = User #get_user_model()
# #         fields = ['username','email','phone_number']


# class TodoGroupSerializer(ModelSerializer):
#         class Meta:
#             model = TodoGroup
#             fields = '__all__'


# class TodoSerializer(ModelSerializer):
#     group_name = serializers.ReadOnlyField(source='group.name')
#     class Meta:
#         model = Todo
#         fields = '__all__'
        

# class FavouriteGroupSerializer(ModelSerializer):
#     class Meta:
#         model = FavouriteGroup
#         fields = '__all__'


# class FavouriteSerializer(ModelSerializer):
#     group_name = serializers.ReadOnlyField(source='group.name')
#     class Meta:
#         model = Favourite
#         fields = '__all__'