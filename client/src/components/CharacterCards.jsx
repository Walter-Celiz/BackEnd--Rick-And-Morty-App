import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CHARACTER_URL } from "../constants"

function CharacterCards() {
    const [characters, setCharacters] = useState([]);

    function getCharacters() {
        return axios.get(CHARACTER_URL)
            .then(characters => setCharacters(characters.data))
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <div>
            {characters.map((character) => {
                return <div>
                    <p>{character.name}</p>
                    <img src={character.image} alt="characterImage" />
                </div>
            })}
        </div>
    )
}

export default CharacterCards