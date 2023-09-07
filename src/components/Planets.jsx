import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Planets = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then((response) => { setPlanet(response.data); })
            .catch(() => navigate("/error"));
    }, [id]);

    if (planet == null) {
        return <h3>Loading!</h3>
    };

    return (
        <div className="container">
            <div className="card-shadow">
                <div className="card-body">
                    <h2>{planet.name}</h2>
                    <br></br>
                    <h3> Climate: {planet.climate} </h3>
                    <h3> Terrain: {planet.terrain}</h3>
                    <h3> Surface Water: {planet.surfaceWater}</h3>
                    <h3> Population: {planet.population}</h3>
                </div>
            </div>
        </div>
    );
};

export default Planets;