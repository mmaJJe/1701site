from django.db import models

# Create your models here.
class Timetable(models.Model):
    def __str__(self):
        return self.days

    MONDAY = '1'
    TUESDAY = '2'
    WEDNESDAY = '3'
    THURSDAY = '4'
    FRIDAY = '5'
    SATURDAY = '6'
    SUNDAY = '0'
    DAYS_CHOICES = [
        (MONDAY,'Monday'),
        (TUESDAY,'Tuesday'),
        (WEDNESDAY,'Wednesday'),
        (THURSDAY,'Thursday'),
        (FRIDAY,'Friday'),
        (SATURDAY,'Saturday'),
        (SUNDAY,'Sunday'),
    ]
    days = models.CharField(
        max_length=3,
        choices=DAYS_CHOICES,
        default=MONDAY,
    )
    
    am_workers = models.CharField(max_length=100,default="ooo")
    pm_workers = models.CharField(max_length=100,default="ooo")

class TimeChangePost(models.Model):
    def __str__(self):
        return self.content
    content = models.TextField()
