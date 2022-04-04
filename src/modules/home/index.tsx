import React, { useEffect, useState } from "react"
import SearchBar from "@/modules/home/components/SearchBar"
import { useGQLQuery } from "@/modules/home/hooks/useGQLQuery";

interface Pokemon {
  id: number;
  name: string;
}

const listPokemonsQuery = `query samplePokeAPIquery {
  gen3_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_eq: "generation-iii"}}}, order_by: {id: asc}) {
    name
    id
  }
}`;

export default function Home() {
  const { data, isLoading } = useGQLQuery('pokemons', listPokemonsQuery)
  console.log(data)

  if (isLoading || !data) {
    return <h1>Loading pokemons list...</h1>
  }

  return (
    <div>
      <h1>Pokemons List</h1>
      <SearchBar />
      {data.gen3_species.map((pokemon: Pokemon) => (
        <tr key={pokemon.id}>
          <td>{pokemon.id}</td>
          <td>{pokemon.name}</td>
        </tr>
      ))}
    </div>
  )
}
