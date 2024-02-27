import { resturantList } from "../utils/mockData";
import RestuarantCard from "./RestuarantCard";
import { useState } from "react";

const Body = () => {

    const [restList, setRestList] = useState(resturantList);

    const onFilterButtonClicked = () => {
        const filteredList = restList.filter(r => r.info.avgRating > 4.0);
        setRestList(filteredList);
    }

    return (
        <div>
            <div class="btn-group">
                    <button class="filter-btn" onClick={onFilterButtonClicked}>Filter Top rated Restuarants</button>
            </div>
            <div class="res-container">
                {restList.map((resturant) => <RestuarantCard restData = {resturant.info} key={resturant.info.id}/>)}
            </div>
        </div>
        
    )
}

export default Body;