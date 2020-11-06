#######################################################################################
#                       유저계정 조인할 때  임포트 방법                                 #
# 일반적으로 조인하기 위해서 모델스의 유저 테이블 추가 하는 방법도 있지만                  #
# 예)from account.models import User                                                  #
# 장고에서 유저모델이 변경되는것을 고려해 만든 계정관련 모듈을 추가하면                    #
# settings.py 나 common.py 에 AUTH_USER_MODEL 에 정의해논 유저모델을 가져올 수 있음      #
# 예) AUTH_USER_MODEL = account.USER 로 정의하면                                      #
#     from django.contrib.auth import get_user_model 로 선언해서 사용가능              #
#######################################################################################
from django.db import models
# from django.contrib.auth import get_user_model


# Create your models here.


# class TodoGroup(models.Model):
#     seq = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=50)
#     reg_date = models.DateField(auto_now_add=True)
#     del_yn = models.BooleanField(default=False)
    
#     #관리자 페이지에서 드롭메뉴 object 뜨는것 값으로 바꾸기
#     def __str__(self):
#         return self.name;

# class Todo(models.Model):
#     seq = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=50)
#     status = models.CharField(max_length=10)
#     reg_date = models.DateField(auto_now_add=True)
#     end_date = models.DateField(blank=True)
#     image = models.ImageField(null=True)
#     del_yn = models.BooleanField(default=False)
#     group = models.ForeignKey(TodoGroup, on_delete=models.CASCADE) #외래키사용

# class FavouriteGroup(models.Model):
#     seq = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=50)
#     reg_date = models.DateField(auto_now_add=True)
#     #관리자 페이지에서 드롭메뉴 object 뜨는것 값으로 바꾸기
#     def __str__(self):
#         return self.name;

# class Favourite(models.Model):
#     seq = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=50)
#     url = models.CharField(max_length=100)
#     memo = models.TextField()
#     reg_date = models.DateField(auto_now_add=True)
#     group = models.ForeignKey(FavouriteGroup, on_delete=models.CASCADE)
