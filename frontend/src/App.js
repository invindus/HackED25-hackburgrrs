import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/hello")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Recipe Search based from Ingredients on hand</h1>
      <SearchForm />
  </div>
  );
}

export default App;
