import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPokemonsAction, nextPokemonAction} from '../redux/pokeDucks'

export default function Pokemons() {
    const dispatch = useDispatch()
    const pokemons = useSelector(store => store.pokemons.array)

    return (
        <div>
            list pokemos
            <button onClick={() => dispatch(getPokemonsAction())}> Get pokemons</button>
            <button onClick={() => dispatch(nextPokemonAction(20))}> Next pokemons</button>
            <ul>
                {
                    pokemons.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
