import { useEffect, useState } from 'react';
import CardItem from './cardItem';
import './fectchApi.css'


function Character() {

  const [characters, setCharacter] = useState([]);

  const fetchCharacter = ()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then(response=>response.json())
    .then(data => setCharacter(data.results) )
    .catch(error=>console.log(error));
  };

useEffect(()=>{
  fetchCharacter();
},[]);

  return (
    
    <div id='card'>
      {characters.map((character , index)=>(
        <CardItem  character={character} key={index}/>
      ))}
      
    </div>
  
  );
}
  
 

export default Character;