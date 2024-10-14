
import PropTypes from "prop-types";

function CardItem({character}) {
  return (
    <div id="cardItem">
     <h6 id='title'> {character.name} </h6>
     <img src={character.image} alt="character image" id='img' />
     <div>
     <span id='status'> {character.status} </span>
     <p id='description'> {character.species} </p>
     </div>
    </div>
  );
}

CardItem.propTypes = {
    character: PropTypes.shape(
       
            {name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            species: PropTypes.string.isRequired,}
        ).isRequired
    
   
 
}

export default CardItem;