# Generated by Django 3.0.6 on 2020-05-17 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0002_auto_20200507_1425'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='post',
            field=models.CharField(max_length=5000),
        ),
    ]
