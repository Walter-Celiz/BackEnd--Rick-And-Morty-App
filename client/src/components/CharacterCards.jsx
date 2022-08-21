import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../redux/actions/charactersActions";

function CharacterCards({ characters, getCharacters }) {
    function getCharactersFunction() {
        getCharacters();
    }

    useEffect(() => {
        getCharactersFunction();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {characters.map((character) => {
                return (
                    <div>
                        <p>{character.name}</p>
                        <img src={character.image} alt="characterImage" />
                    </div>
                );
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCharacters: (character) => {
            dispatch(getCharacters(character));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCards);
