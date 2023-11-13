import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function CharacterDetails() {
  const { characterId } = useParams({});

  const [characterDetails, setCharacterDetails] = useState(null);
  axios
    .get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
    .then((response) => {
      setCharacterDetails(response.data);
    })
    .catch((error) => console.log(error));
  useEffect(() => {}, []);

  return (
    <>
      {characterDetails === null ? (
        <p>Loading</p>
      ) : (
        <div>
          <h1>Character details of character {characterId}</h1>
          <h2>{characterDetails.name}</h2>
          <h3>Occupation : {characterDetails.occupation}</h3>
          <h3>Weapon : {characterDetails.weapon}</h3>
          <Link to={`/`}>Back</Link>
        </div>
      )}
    </>
  );
}

export default CharacterDetails;
