import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/constants";
import Shimmer from "../components/Shimmer";

const RestaurantMenu = () => {

    const [restData, setRestData] = useState([]);
    const [restName, setRestName] = useState("");

    const {resId} = useParams();
    const FetchData = async () => {
        var result = await fetch(MENU_URL + resId);
        var data = await result.json();
        setRestName(data?.data?.cards[0]?.card?.card?.info?.name);
        setRestData(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
    }
    useEffect(() => {
        FetchData();
    },[])

    return (restData === undefined || restData == []) ? <Shimmer/> : (
        <div>
            <h2>Restaurant Menu</h2>
            <h3>{restName}</h3>
            {
                restData?.map(t => (
                    <p key={t?.card?.info?.id}> {t?.card?.info?.name + " - Rs." + (t?.card?.info?.price)/100}</p>
                ))
            }
        </div>)
}
export default RestaurantMenu;