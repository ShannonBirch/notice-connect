from django.db import models
from rest_framework import serializers


class Firm(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    email = models.EmailField()
    firm = models.ForeignKey(Firm, blank=False, on_delete=models.CASCADE)

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=10, decimal_places=2)

class Transaction(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, blank=False, on_delete=models.CASCADE) #Should this be a ManyToMany? Are y'all selling houses/cars?
    total = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(User, blank=True, on_delete=models.CASCADE) # Should probably use models.PROTECT to prevent losing order information



class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'firm', 'url')


class FirmSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Firm
        fields = ('id', 'name', 'url')

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'url')

class TransactionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Transaction
        fields = ('id', 'product', 'total', 'user')


class Message(models.Model):
    subject = models.CharField(max_length=200)
    body = models.TextField()


class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Message
        fields = ('url', 'subject', 'body', 'pk')
