"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .api.views import index_view, MessageViewSet, FirmViewSet, UserViewSet , ProductViewSet, TransactionViewSet

router = routers.DefaultRouter()
router.register('messages', MessageViewSet)
router.register('firms', FirmViewSet)
router.register('users', UserViewSet)
router.register('products', ProductViewSet)
router.register('transactions', TransactionViewSet)


urlpatterns = [

    # http://localhost:8000/
    path('', index_view, name='index'),

    # http://localhost:8000/api/<router-viewsets>
    path('api/', include(router.urls)),

    # http://localhost:8000/api/admin/
    path('api/admin/', admin.site.urls),
]


