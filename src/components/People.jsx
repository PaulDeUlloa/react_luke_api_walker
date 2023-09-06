import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const People = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState(null);

    const navigate = useNavigate();

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/people/${id}/`)
        .then((response) => {setCharacter(response.data);})
        .catch(() => navigate("/error"));
    }, [ id, navigate ]);

    if (character == null){
        return <h3>Loading!</h3>
    };

    return(
        <div className="container">
            <div className="card-shadow">
                <div className="card-body">
                    <h2>{character.name}</h2>
                    <br></br>
                    <h3> Height: {character.height} </h3>
                    <h3> Mass: {character.mass}</h3>
                    <h3> Hair Color: {character.hairColor}</h3>
                    <h3> Skin Color: {character.skinColor}</h3>
                </div>
            </div>
        </div>
    );
};

export default People;