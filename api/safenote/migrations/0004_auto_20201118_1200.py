# Generated by Django 3.1.1 on 2020-11-18 03:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('safenote', '0003_auto_20201117_1229'),
    ]

    operations = [
        migrations.AlterField(
            model_name='embassy',
            name='contact_notice',
            field=models.TextField(null=True, verbose_name='대사관정보'),
        ),
    ]
