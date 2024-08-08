from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500, blank=True)
    original_price = models.DecimalField(blank=True, max_digits=7, decimal_places=2)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    validate_data = models.DateField()
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    