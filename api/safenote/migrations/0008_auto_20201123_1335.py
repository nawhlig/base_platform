# Generated by Django 3.1.1 on 2020-11-23 04:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('safenote', '0007_auto_20201123_1330'),
    ]

    operations = [
        migrations.AlterField(
            model_name='helpcall',
            name='seq',
            field=models.IntegerField(default=0, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='medical',
            name='seq',
            field=models.IntegerField(default=0, primary_key=True, serialize=False),
        ),
    ]
