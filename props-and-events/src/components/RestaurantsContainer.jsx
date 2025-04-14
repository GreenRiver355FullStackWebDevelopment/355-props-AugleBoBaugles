import Restaurant from "./Restaurant.jsx";
import { restaurants } from '../data/data.js';


const RestaurantsContainer = () => {
    return(
        <div>
            <Restaurant />
            { restaurants.map((restaurant) => <Restaurant restaurant={restaurant}
                // name={restaurant.name} 
                // address={restaurant.address} 
                // phone={restaurant.phone} 
                // cuisine={restaurant.cuisine} 
                // rating={restaurant.rating} 
                // image={restaurant.image} 
                // hours={restaurant.hours}
                // menu={restaurant.menu}
            />)}
        </div>
        
    )
}

export default RestaurantsContainer;

