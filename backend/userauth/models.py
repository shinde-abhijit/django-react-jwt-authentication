from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Todo(models.Model):
    PRIORITY = [
        ('', 'Select Priority'), ('High', 'HIGH'),
        ('Low', 'LOW'),('Medium', 'MEDIUM'),
    ]
    title = models.CharField(max_length=100)
    content = models.TextField()
    priority = models.CharField(max_length=50, choices=PRIORITY, default='Medium')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="todos")
    def __str__(self):
        return self.title

class ExpenseTracker(models.Model):
    CATEGORY = [
        ('', 'Select Category'), ('HOME', 'HOME'), ('MEDICINE', 'MEDICINE'), 
        ('FARM', 'FARM'), ('TRAVEL', 'TRAVEL'), ('OTHER', 'OTHER'),
    ]
    METHOD = [
        ('', 'Select Method'), ('CASH', 'CASH'), ('CREDIT', 'CREDIT'), 
        ('DEBIT', 'DEBIT'), ('OTHER', 'OTHER'),
    ]
    spent_date = models.DateField(default=timezone.now().today)
    spent_by = models.CharField(max_length=100)
    spent_category = models.CharField(max_length=100, choices=CATEGORY)
    spent_method = models.CharField(max_length=100, choices=METHOD)
    spent_amount = models.PositiveIntegerField()
    spent_note = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="expenses")
    def __str__(self):
        return self.spent_by    


