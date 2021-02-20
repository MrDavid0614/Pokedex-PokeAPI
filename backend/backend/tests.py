from django.test import TestCase
from .settings import BASE_URL
from .apicall import get_pokemons, get_pokemon_by_id
from random import randint
import requests

class TestApiCall(TestCase):

    def setUp(self):
        self.url = f'{BASE_URL}/pokemon'

    def test_get_pokemons(self):
        response = requests.get(f'{self.url}?limit=151').json()
        pokemons = response['results']
        pokemonsList = get_pokemons()

        self.assertEqual(pokemons, pokemonsList)

    def test_get_pokemon_by_id(self):
        id = randint(1, 151)
        response = requests.get(f'{self.url}/{id}/').json()
        pokemon_test = {
            'id': response['id'],
            'name': response['name'],
            'image': response['sprites']['other']['official-artwork']['front_default'],
            'type': response['types'][0]['type']['name']
        }
        pokemon = get_pokemon_by_id(id)

        self.assertEqual(pokemon_test, pokemon)