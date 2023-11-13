import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import CharactersList from "./components/CharactersList";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-crud-api.herokuapp.com/characters/")
      .then((response) => {
        //console.log(response.data)
        setCharacters(response.data);
      })
      .catch((error) => {
        console.log("error!");
        console.log(error);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<CharactersList charactersArray={characters} />}
        />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
      </Routes>
    </>
  );
}

export default App;
