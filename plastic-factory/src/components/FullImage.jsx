/* eslint-disable react/prop-types */
import "../css/Fullimage.css";

const FullImage = ({ image }) => {
  return (
    <>
      <div className="fullimage">
        <img src={image} alt="IMAGE" />
      </div>
    </>
  );
};

export default FullImage;
