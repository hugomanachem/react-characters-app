import { Link } from "react-router-dom";

function CharactersList(props) {

return(
    <>
    {props.charactersArray.map((character,i) => {
        return (
          <section className="character" key={character[i]}>
            <h2>{character.name}</h2>
            <p>Occupation : {character.occupation}</p>
            <Link to={`/characters/${character.id}`}>See details</Link>
          </section>
        );
      })}
    </>
    
);
}
export default CharactersList;