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
from django.contrib.auth import get_user_model
from django.db.models.fields.related import create_many_to_many_intermediary_model


# Create your models here.


class Country(models.Model):
    country_ID = models.PositiveSmallIntegerField('국가코드(숫자)', primary_key=True)
    iso_code = models.CharField('국가코드(ABC)', max_length=3)
    cname_en = models.CharField('국가명(영어)', max_length=32)
    cname_kr = models.CharField('국가명(한글)', max_length=22)
    continent_code = models.CharField('대륙코드(ABC)', max_length=2)
    continent_en = models.CharField('대륙명(영어)', max_length=13)
    continent_kr = models.CharField('대륙명(한글)', max_length=10)
    phone_code = models.CharField('국가번호',max_length=20)
    country_img1 = models.URLField('국기 이미지 주소', max_length=200)
    country_img2 = models.URLField('국토 이미지 주소', max_length=200)


class HelpCall(models.Model):
    seq = models.AutoField(primary_key=True)
    country_ID = models.ForeignKey('safenote.Country',  related_name='helpcalls', on_delete=models.CASCADE)
    #외래키사용
    crime = models.CharField('범죄신고', max_length=200)
    fire = models.CharField('화재신고', max_length=200)
    ambulance = models.TextField('구급차')

class Medical(models.Model):
    seq = models.AutoField(primary_key=True)
    country_ID = models.ForeignKey('safenote.Country',  related_name='medical', on_delete=models.CASCADE)
    #외래키사용
    hospital_name = models.CharField('병원 이름', max_length=200)
    hospital_addr = models.CharField('병원 주소', max_length=200)
    hospital_tel = models.CharField('병원 전화', max_length=200)
    hospital_web = models.URLField('병원 웹사이트', max_length=200)
    hospital_lati = models.DecimalField('병원 위도', max_digits=9, decimal_places=6, null=True)
    hospital_logi = models.DecimalField('병원 경도', max_digits=9, decimal_places=6, null=True)

class Embassy(models.Model):
    seq = models.AutoField(primary_key=True)
    country_ID = models.ForeignKey('safenote.Country',  related_name='embassy', on_delete=models.CASCADE)
    #외래키사용
    embassy_name = models.CharField('대사관 이름', max_length=32)
    embassy_lati = models.DecimalField('대사관 위도', max_digits=9, decimal_places=6, null=True)
    embassy_logi = models.DecimalField('대사관 경도', max_digits=9, decimal_places=6, null=True)
    embassy_addr = models.CharField('대사관 주소', max_length=150, null=True)
    embassy_tel = models.CharField('대사관 전화', max_length=100, null=True)
    embassy_telsos = models.CharField('대사관 비상전화', max_length=100, null=True)
    embassy_email = models.EmailField('대사관 이메일', max_length=254, null=True)
    contact_notice = models.TextField('대사관정보', null=True)
