# Generated by Django 3.1.1 on 2020-11-18 03:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('safenote', '0005_auto_20201118_1202'),
    ]

    operations = [
        migrations.AlterField(
            model_name='embassy',
            name='embassy_addr',
            field=models.CharField(max_length=150, null=True, verbose_name='대사관 주소'),
        ),
        migrations.AlterField(
            model_name='embassy',
            name='embassy_tel',
            field=models.CharField(max_length=100, null=True, verbose_name='대사관 전화'),
        ),
        migrations.AlterField(
            model_name='embassy',
            name='embassy_telsos',
            field=models.CharField(max_length=100, null=True, verbose_name='대사관 비상전화'),
        ),
    ]