# Generated by Django 3.1.1 on 2020-11-17 03:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('safenote', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='HelpCall',
            fields=[
                ('seq', models.AutoField(primary_key=True, serialize=False)),
                ('crime', models.CharField(max_length=200, verbose_name='범죄신고')),
                ('fire', models.CharField(max_length=200, verbose_name='화재신고')),
                ('ambulance', models.TextField(verbose_name='구급차')),
                ('country_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='help_calls', to='safenote.country')),
            ],
        ),
        migrations.DeleteModel(
            name='help_call',
        ),
    ]
