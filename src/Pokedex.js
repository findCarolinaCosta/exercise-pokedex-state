import React, { Component } from 'react';
import Pokemon from './Pokemon';
// import { pokemons } from "../data.js";


class Pokedex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            next: 0,
            type: this.props.pokemons,
        };
    }

    getPokemonByTypeBtn = (elem) => {
        const { pokemons } = this.props;
        const pokemonsbyType = pokemons.filter((pokemon) => pokemon.type === elem);
        this.setState((_prevState, _props) => ({
            type: pokemonsbyType,
            next: 0,
        }));
    }

    getNextPokemonBtn = () => {
        this.setState((prevState, _props) => ({
            next: prevState.next + 1 === this.state.type.length ?
                0 : prevState.next + 1,
        }))
    }

    getAllPokemonsBtn = () => {
        const { pokemons } = this.props;
        this.setState((_prevState, _props) => ({
            type: pokemons,
            next: 0,
        }))
    }

    render() {
        const type = this.props.pokemons.map((pokemon) => pokemon.type);
        const arrayDefault = type.filter((elem, index, array) => index === array.indexOf(elem));

        return (
            <section>
                <div className="pokedex">
                    <Pokemon key={this.props.pokemons.id} pokemon={this.state.type[this.state.next]} />
                </div>
                <div>
                    <button onClick={this.getAllPokemonsBtn}>All</button>
                    {arrayDefault.map((type, index) =>
                        <button key={index}
                            onClick={() => this.getPokemonByTypeBtn(type)}>
                            {type}
                        </button>
                    )
                    }
                    <button onClick={this.getNextPokemonBtn}>Proximo pokemon</button>
                </div>
            </section>
        );
    }
}

export default Pokedex;
