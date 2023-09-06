import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [resource, setResource] = useState({option: "people", id:""});

    const navigate = useNavigate();

    const handleChange = (e) => {
        setResource({...resource, [e.target.name]: e.target.value});
    };

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/${resource.option}/${resource.id}/`);
    };

    return(
        <div className="container">
            <h1>The Star Wars API</h1>
            <form onSubmit={handleSearch}>
                <label>Search for: </label>
                <select
                name="option"
                value={resource.option}
                onChange={handleChange}
                >
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID:</label>
                <input className="btn btn-success">Search</input>
            </form>
        </div>
    );
}

export default Home;