import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";

const Body = () => {

    const [restList, setRestList] = useState([]);

    useEffect (() => {
        FetchDataFromAPI();
    });

    const FetchDataFromAPI = async() => {
        var data = await fetch(SWIGGY_URL);
        var json = await data.json();
        setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onFilterButtonClicked = () => {
        const filteredList = restList.filter(r => r.info.avgRating > 4.0);
        setRestList(filteredList);
    }

    return (
        <div>
            <div className="btn-group">
                    <button className="filter-btn" onClick={onFilterButtonClicked}>Filter Top rated Restuarants</button>
            </div>
            <div className="res-container">
                {restList.map((resturant) => <RestuarantCard restData = {resturant.info} key={resturant.info.id}/>)}
            </div>
        </div>
        
    )
}

export default Body;