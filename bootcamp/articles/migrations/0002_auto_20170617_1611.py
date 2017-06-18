# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-06-17 10:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='status',
            field=models.CharField(choices=[('D', 'Draft'), ('P', 'Published')], default='D', max_length=1),
        ),
    ]
