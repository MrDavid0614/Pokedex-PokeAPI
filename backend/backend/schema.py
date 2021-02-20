import graphene
from .apicall import get_pokemons, get_pokemon_by_id

class Pokemon(graphene.ObjectType):
    id = graphene.Int()
    name = graphene.String()
    image = graphene.String()

class Query(graphene.ObjectType):
    pokemons = graphene.List(graphene.JSONString)
    pokemon = graphene.Field(Pokemon, id=graphene.Int())

    def resolve_pokemons(root, info):
        pokemons = get_pokemons()
        return pokemons

    def resolve_pokemon(root, info, id):
        pokemon = get_pokemon_by_id(id)
        return pokemon

schema = graphene.Schema(query=Query)