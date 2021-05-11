export default function Activity({id, name, description, price, location, nbpax }) {
//nbpax = nb de personnes 
    return(
        <>
        <h1>(name}</h1>
        <p>{description}</p>
        <div>{price}</div>
        <p>{location}</p>
         <div>{nbpax}</div>   
        </>
    )
}