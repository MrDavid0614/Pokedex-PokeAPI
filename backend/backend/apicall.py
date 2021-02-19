import requests
from backend.settings import BASE_URL

url = f'{BASE_URL}/pokemon'

def get_pokemons():
    response = requests.get(f'{url}?limit=151').json()
    pokemons = response['results']
    
    pokemons_list = []
    for pokemon in pokemons:
        pokemons_list.append(pokemon['name'])
    
    return pokemons_list

def get_pokemon_by_id(id):
    response = requests.get(f'{url}/{id}/').json()
    pokemon = {
        'id': response['id'],
        'name': response['name'],
        'image': response['sprites']['other']['official-artwork']['front_default']
        }
    return pokemon