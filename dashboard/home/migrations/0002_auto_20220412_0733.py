# Generated by Django 3.2.11 on 2022-04-12 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usertradingaccount',
            name='balance',
        ),
        migrations.AddField(
            model_name='usertradingaccount',
            name='total_balance',
            field=models.CharField(default='0', max_length=255),
        ),
    ]
