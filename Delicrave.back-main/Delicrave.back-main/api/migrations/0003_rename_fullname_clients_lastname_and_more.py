# Generated by Django 5.0.6 on 2024-07-07 20:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_home'),
    ]

    operations = [
        migrations.RenameField(
            model_name='clients',
            old_name='fullname',
            new_name='lastname',
        ),
        migrations.RenameField(
            model_name='contacts',
            old_name='fullname',
            new_name='lastname',
        ),
    ]
