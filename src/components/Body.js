import { resturantList } from "../utils/mockData";
import RestuarantCard from "./RestuarantCard";

const Body = () => {
    return (
        <div class="res-container">
            {resturantList.map((resturant) => <RestuarantCard restData = {resturant.info} key={resturant.info.id}/>)}
        </div>
    )
}

export default Body;