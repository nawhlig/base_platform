# Generated by Django 3.1.1 on 2020-11-23 04:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('safenote', '0009_auto_20201123_1349'),
    ]

    operations = [
        migrations.AlterField(
            model_name='helpcall',
            name='ambulance',
            field=models.TextField(null=True, verbose_name='구급차'),
        ),
    ]
