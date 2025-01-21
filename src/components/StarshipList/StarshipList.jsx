import StarshipCard from "../StarshipCard/StarshipCard";

export default function StarshipList(props) {
    return (
        <>
            <h2>starship lists:</h2>
            <h3>Number of starships: {props.displayedStarships.length}</h3>
            {props.displayedStarships.map((item)=>(
                <StarshipCard key={item.name} item={item}/>
            ))}

            
            
        </>
    )
}