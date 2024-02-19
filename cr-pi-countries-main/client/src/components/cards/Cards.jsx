import Card from "../card/Card";


function Cards(props){
   const { countries, onClose } = props
   return(
    <div>
        {
            countries.map(char => (
                <Card
                key={char.name}
                id={char.id}
                name={char.name}
                flags={char.flags.svg}
                continent={char.continent}
                capital={char.capital?.[0]}
                subregion={char.subregion}
                area={char.area}
                population={char.population}
                onClose={onClose}
                
                />
            ))
        }
    </div>
   )

}

export default Cards;