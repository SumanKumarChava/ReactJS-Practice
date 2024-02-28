import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restList, setRestList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect (() => {
        FetchDataFromAPI();
    }, []);

    const FetchDataFromAPI = async() => {
        var data = await fetch(SWIGGY_URL);
        var json = await data.json();

        // Optional chaining
        setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onFilterButtonClicked = () => {
        const filteredList = restList.filter(r => r.info.avgRating > 4.0);
        setFilteredRestList(filteredList);
    }

    const OnSearchClicked = () => {
        let result = restList.filter(t => t.info?.name?.includes(searchText));
        setFilteredRestList(result);
    }

    // conditional rendering
    if(restList.length === 0){
        return <Shimmer/>
    }

    return (restList.length === 0)? <Shimmer/>:(
        <div>
            <div className="btn-group">
                    <input type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}></input>
                    <button className="search-btn" onClick={OnSearchClicked}>Search</button>
                    <button className="filter-btn" onClick={onFilterButtonClicked}>Filter Top rated Restuarants</button>
            </div>
            <div className="res-container">
                {filteredRestList.map((resturant) => <RestuarantCard restData = {resturant.info} key={resturant.info.id}/>)}
            </div>
        </div>
        
    )
}

export default Body;