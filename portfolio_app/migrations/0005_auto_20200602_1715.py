# Generated by Django 3.0.6 on 2020-06-02 17:15

from django.db import migrations
import djrichtextfield.models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0004_auto_20200531_0220'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='post',
            field=djrichtextfield.models.RichTextField(max_length=5000),
        ),
    ]