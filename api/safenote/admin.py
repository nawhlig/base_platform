from django.contrib import admin
from .models import Country, HelpCall, Medical, Embassy

from import_export import resources, fields
from import_export.admin import ImportExportActionModelAdmin
from import_export.widgets import ForeignKeyWidget

# Register your models here.

class CountryResource(resources.ModelResource):
    def before_import(self, dataset, using_transactions, dry_run, **kwargs):
        print("INside BEfore IMport")
        dataset.headers = (  "country_ID", "iso_code", "cname_en", "cname_kr", "continent_code"
                            , "continent_en", "continent_kr", "phone_code", "country_img1", "country_img2"  )
        #del dataset[0]

    def get_instance(self, instance_loader, row):
        print("Inside get instance")
        return False

    def get_or_init_instance(self, instance_loader, row):
        print("INside Get or init")
        instance = self.get_instance(instance_loader, row)
        if instance:
            return (instance, False)
        else:
            return (self.init_instance(row), True)
    class Meta:
        model = Country
        exclude = ('id', 'dev_ip',)



# class BoardAdmin(ImportExportMixin, admin.ModelAdmin):

@admin.register(Country)
# class CountryAdmin(ImportExportMixin, admin.ModelAdmin):
#     resource_class = Country
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

@admin.register(HelpCall)
class HelpCallAdmin(admin.ModelAdmin):
    list_display = ["country_ID", "crime", "fire", "ambulance"]

@admin.register(Medical)
class MedicalAdmin(admin.ModelAdmin):
    list_display = [  "country_ID"
                    , "hospital_name"
                    , "hospital_addr"
                    , "hospital_tel"
                    , "hospital_web"
                    , "hospital_lati"
                    , "hospital_logi"  ]

@admin.register(Embassy)
class EmbassyAdmin(admin.ModelAdmin):
    list_display = [  "country_ID"
                    , "embassy_name"
                    , "embassy_lati"
                    , "embassy_logi"
                    , "embassy_addr"
                    , "embassy_tel"
                    , "embassy_telsos"
                    , "embassy_email"
                    , "contact_notice"  ]