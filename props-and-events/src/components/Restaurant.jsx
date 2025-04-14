// renders a Restaurant with the given props
const Restaurant = (props) => {
    const {name, address, phone, cuisine, rating, image} = props.restaurant;
    return (
        <div className="restaurant">
            <img src={image}></img>
        
            <div>
                <h1>{name} ⭐{rating}</h1>
                <h2>{cuisine}</h2>
                
                <p>{address}</p>
                <p>{phone}</p>
                
                
            </div>
            
        </div>
    )
}

export default Restaurant;