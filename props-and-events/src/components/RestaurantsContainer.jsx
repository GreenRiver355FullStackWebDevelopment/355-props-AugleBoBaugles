import Restaurant from "./Restaurant.jsx";
import { restaurants } from '../data/data.js';

// renders each Restaurant component (restaurants in the data set)

const RestaurantsContainer = () => {
    return(
        <div className="restaurants">
            { restaurants.map((restaurant) => <Restaurant restaurant={restaurant}
                
            />)}
        </div>
        
    )
}

export default RestaurantsContainer;

