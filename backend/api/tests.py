from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model
from .models import Product
from rest_framework import status


class APITests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            username='testuser',
            password='testpass',
            nickname='testnick',
            email='test@example.com'
        )
        self.client.force_authenticate(user=self.user)
        self.product = Product.objects.create(
            name='Existing Product',
            description='This is an existing product',
            price='19.99',
            stock=5
        )

    def test_create_product(self):
        data = {
            'name': 'Test Product',
            'description': 'Test Description',
            'price': '9.99',
            'stock': 10
        }
        response = self.client.post('/api/products/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Product.objects.count(), 2)

    def test_get_products(self):
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_get_single_product(self):
        response = self.client.get(f'/api/products/{self.product.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], 'Existing Product')

    def test_update_product(self):
        data = {'name': 'Updated Product'}
        response = self.client.patch(f'/api/products/{self.product.id}/', data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Product.objects.get(
            id=self.product.id).name, 'Updated Product')

    def test_delete_product(self):
        response = self.client.delete(f'/api/products/{self.product.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Product.objects.count(), 0)

    def test_create_user(self):
        data = {
            'username': 'newuser',
            'password': 'newpass',
            'nickname': 'newnick',
            'email': 'new@example.com'
        }
        response = self.client.post('/api/users/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(get_user_model().objects.count(), 2)

    def test_get_users(self):
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_unauthorized_access(self):
        self.client.force_authenticate(user=None)
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
