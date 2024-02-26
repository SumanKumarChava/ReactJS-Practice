import {IMG_URL_PREFIX} from '../utils/constants';

const RestuarantCard = (restData) => {
    console.log(restData);
    const {name, cloudinaryImageId, cuisines, avgRatingString, costForTwo } = restData?.restData;
    return (
        <div className="res-item-card">
            <img className="food-item-image" src={IMG_URL_PREFIX+cloudinaryImageId}
             alt="food-item-image"/>
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRatingString} stars</h5>
            <h5>{costForTwo}</h5>
        </div>
    );
}

export default RestuarantCard;