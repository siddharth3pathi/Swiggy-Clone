import { IMG_CDN_LINK } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, costForTwo } = resData?.info;
  return (
    <div className="res-card">
      <img src={IMG_CDN_LINK + resData.info.cloudinaryImageId} />
      <h3>{name}</h3>
      <span>{cuisines.join(", ")}</span>
      <h5>{avgRatingString} stars</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default ResCard;
