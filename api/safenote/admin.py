from django.contrib import admin
from .models import Country, HelpCall, Medical, Embassy

from import_export.admin import ImportExportActionModelAdmin
from .file_import_export_resource import CountryResource, HelpCallResource, MedicalResource, EmbassyResource

# Register your models here.
@admin.register(Country)
class CountryAdmin(ImportExportActionModelAdmin):
    resource_class = CountryResource
    list_display = [  "country_ID"
                    , "iso_code"
                    , "cname_en"
                    , "cname_kr"
                    , "continent_code"
                    , "continent_en"
                    , "continent_kr"
                    , "phone_code"
                    , "country_img1"
                    , "country_img2"  ]
    list_display_links = ["cname_en", "cname_kr"] 

@admin.register(HelpCall)
class HelpCallAdmin(ImportExportActionModelAdmin):
    resource_class = HelpCallResource
    list_display = [  "seq", "country_ID", "crime", "fire", "ambulance"  ]

@admin.register(Medical)
class MedicalAdmin(ImportExportActionModelAdmin):
    resource_class = MedicalResource
    list_display = [  "seq"
                    , "country_ID"
                    , "hospital_name"
                    , "hospital_addr"
                    , "hospital_tel"
                    , "hospital_web"
                    , "hospital_lati"
                    , "hospital_logi"  ]

@admin.register(Embassy)
class EmbassyAdmin(ImportExportActionModelAdmin):
    resource_class = EmbassyResource
    list_display = [  "seq"
                    , "country_ID"
                    , "embassy_name"
                    , "embassy_lati"
                    , "embassy_logi"
                    , "embassy_addr"
                    , "embassy_tel"
                    , "embassy_telsos"
                    , "embassy_email"
                    , "contact_notice"  ]