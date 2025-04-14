import Restaurant from "./Restaurant.jsx";
import { restaurants } from '../data/data.js';


const RestaurantsContainer = () => {
    return(
        <div>
            <Restaurant />
            { restaurants.map((restaurant) => <Restaurant />)}
            
        </div>
        
    )
}

export default RestaurantsContainer;

