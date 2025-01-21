// src/App.jsx

import { useState } from "react";
import StarshipList from "./components/StarshipList/StarshipList";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import { getStarships } from "./services/starshipService";
import { useEffect } from "react";




const App = () => {
  //const starships =getStarships();
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  function searchByName(searchValue) {
    console.log('searched for: ', searchValue);
    // filter the display to only contain item whose name includes some part of the search value
    // case and space insensitive by using .trim() and .toLowerCase()
    const filteredResult = displayedStarships.filter((item)=>item.name.trim().toLowerCase().includes(searchValue.trim().toLowerCase()))
    setDisplayedStarships(filteredResult);
  }
  function searchByClass(searchValue) {
    console.log('searched for: ', searchValue);
    const filteredResult = displayedStarships.filter((item)=>item.starship_class.trim().toLowerCase().includes(searchValue.trim().toLowerCase()))
    setDisplayedStarships(filteredResult);

  }
  function searchByModel(searchValue) {
    console.log('searched for: ', searchValue);
    const filteredResult = displayedStarships.filter((item)=>item.model.trim().toLowerCase().includes(searchValue.trim().toLowerCase()))
    setDisplayedStarships(filteredResult);

  } 
  function searchByManufacturer(searchValue) {
    console.log('searched for: ', searchValue);
    const filteredResult = displayedStarships.filter((item)=>item.manufacturer.trim().toLowerCase().includes(searchValue.trim().toLowerCase()))
    setDisplayedStarships(filteredResult);

  }
  function handleReset () {
    setDisplayedStarships(starshipsData);
  }

useEffect(()=>{
  const getData = async () => {
    const starships = await getStarships();
    setStarshipsData(starships);
    setDisplayedStarships(starships)
  };
  getData();
},[])


  return (
    <>
    <h1>Hello world!</h1>
    
    <StarshipSearch searchByName={searchByName} searchByClass={searchByClass} searchByModel={searchByModel} searchByManufacturer={searchByManufacturer}/>
    <button onClick={handleReset}>Reset all filters</button>
    <StarshipList displayedStarships={displayedStarships}/>
    
    </>
    
  );
}

export default App
