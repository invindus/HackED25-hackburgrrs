import { useState } from "react";

export default function SearchForm() {
    const [formData, setFormData] = useState({
        search: "",
        calories_min: "",
        calories_max: "",
        carb_min: 0,
        carb_max: 100,
        protein_min: 0,
        protein_max: 100,
        fat_min: 0,
        fat_max: 100
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Ingredients on hand:</label>
            <input type="text" name="search" onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    );
}
