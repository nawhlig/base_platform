from django.shortcuts import render
from .models import Country, HelpCall, Medical, Embassy
from rest_framework import status, viewsets
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response    #함수뷰 Response기능
from rest_framework.decorators import api_view #인증
from .serializers import (
    CountrySerializer
    ,MedicalSerializer
    ,HelpCallSerializer
    ,EmbassySerializer 
)

# Create your views here.


# @api_view(['GET'])
# def safenote_All_SelectView(request):
#     if request.method == 'GET':
#         country = Country.objects.all()
#         pending = TodoSerializer(todo.filter(status="pending"), many=True)
#         inprogress = TodoSerializer(todo.filter(status="inprogress"), many=True)
#         end = TodoSerializer(todo.filter(status="end"), many=True)
#         return Response({
#             "inprogress": inprogress.data,
#             "pending": pending.data,
#             "end": end.data
#         })



class CountryView(ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class HelpCallView(ModelViewSet):
    queryset = HelpCall.objects.all()
    serializer_class = HelpCallSerializer

    # def get_queryset(self):
    #     qs = super().get_queryset()
    #     status = self.request.query_params.get('status')
    #     if status:
    #         qs = qs.filter(status=status)
    #     return qs


class MedicalView(ModelViewSet):
    queryset = Medical.objects.all()
    serializer_class = MedicalSerializer

class EmbassyView(ModelViewSet):
    queryset = Embassy.objects.all()
    serializer_class = EmbassySerializer
