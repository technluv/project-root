from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model
from api.models import Product

User = get_user_model()


class UserAPITest(APITestCase):
    def test_user_creation(self):
        url = reverse('user-list')
        data = {'username': 'newuser',
                'password': 'newpass', 'name': 'New User'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class ProductAPITest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser', password='testpass')
        self.client.force_authenticate(user=self.user)

    def test_product_creation(self):
        url = reverse('product-list')
        data = {'name': 'New Product',
                'description': 'New Description', 'price': 20.0, 'stock': 10}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
