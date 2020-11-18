from .models import Country, HelpCall, Medical, Embassy

from import_export import resources, fields
from import_export.widgets import ForeignKeyWidget


# function of file loder

# import or export module define

class CountryResource(resources.ModelResource):
    class Meta:
        model = Country
        exclude = ('id', 'dev_ip',)
        
    def before_import(self, dataset, using_transactions, dry_run, **kwargs):
        print("Inside Before Import")
        dataset.headers = (  "country_ID", "iso_code", "cname_en", "cname_kr", "continent_code"
                            , "continent_en", "continent_kr", "phone_code", "country_img1", "country_img2"  )
        #로드된 특정 행을 지우고 싶을 때는  del dataset[인덱스번호]
    def get_instance(self, instance_loader, row):
        print("Inside get instance")
        return False

    def get_or_init_instance(self, instance_loader, row):
        print("Loding... Get or init")
        instance = self.get_instance(instance_loader, row)
        if instance:
            return (instance, False)
        else:
            return (self.init_instance(row), True)

class HelpCallResource(resources.ModelResource):
    class Meta:
        model = HelpCall
        exclude = ('id', 'dev_ip',)
        
    def before_import(self, dataset, using_transactions, dry_run, **kwargs):
        print("Inside Before Import")
        dataset.headers = (  "country_ID", "crime", "fire", "ambulance"  )
        #로드된 특정 행을 지우고 싶을 때는  del dataset[인덱스번호]
    def get_instance(self, instance_loader, row):
        print("Inside get instance")
        return False

    def get_or_init_instance(self, instance_loader, row):
        print("Loding... Get or init")
        instance = self.get_instance(instance_loader, row)
        if instance:
            return (instance, False)
        else:
            return (self.init_instance(row), True)    

class MedicalResource(resources.ModelResource):
    class Meta:
        model = Medical
        exclude = ('id', 'dev_ip',)
        
    def before_import(self, dataset, using_transactions, dry_run, **kwargs):
        print("Inside Before Import")
        dataset.headers = (  "country_ID", "hospital_name", "hospital_addr", "hospital_tel", "hospital_web"
                            , "hospital_lati", "hospital_logi"  )
        #로드된 특정 행을 지우고 싶을 때는  del dataset[인덱스번호]
    def get_instance(self, instance_loader, row):
        print("Inside get instance")
        return False

    def get_or_init_instance(self, instance_loader, row):
        print("Loding... Get or init")
        instance = self.get_instance(instance_loader, row)
        if instance:
            return (instance, False)
        else:
            return (self.init_instance(row), True)

class EmbassyResource(resources.ModelResource):
    class Meta:
        model = Embassy
        exclude = ('id', 'dev_ip',)
        
    def before_import(self, dataset, using_transactions, dry_run, **kwargs):
        print("Inside Before Import")
        dataset.headers = (  "country_ID", "embassy_name", "embassy_lati", "embassy_logi", "embassy_addr"
                            , "embassy_tel", "embassy_telsos", "embassy_email", "contact_notice"  )
        #로드된 특정 행을 지우고 싶을 때는  del dataset[인덱스번호]
    def get_instance(self, instance_loader, row):
        print("Inside get instance")
        return False

    def get_or_init_instance(self, instance_loader, row):
        print("Loding... Get or init")
        instance = self.get_instance(instance_loader, row)
        if instance:
            return (instance, False)
        else:
            return (self.init_instance(row), True)