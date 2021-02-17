import requests

def get_pokemons():
    url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    response = requests.get(url).json()
    pokemons = response['results']
    
    pokemons_list = []
    for pokemon in pokemons:
        pokemons_list.append(pokemon['name'])
    
    return pokemons_list

def get_pokemon_by_id(id):
    url = f'https://pokeapi.co/api/v2/pokemon/{id}/'
    response = requests.get(url).json()
    pokemon = {
        'id': response['id'],
        'name': response['name'],
        'image': response['sprites']['other']['official-artwork']['front_default']
        }
    return pokemon

print(get_pokemon_by_id(1))