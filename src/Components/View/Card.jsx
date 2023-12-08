import React, { useEffect, useState } from "react";
import "../../Style/Style.css";
import { Tokens } from "../../Theme/Themesetup";
import { useTheme } from "@emotion/react";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import { Link } from "react-router-dom";
import { imageRoute } from "../../Api";
function Card(props) {
  const theme = useTheme();
  const colors = Tokens(theme).palette;
  const timeDifference = new Date() - new Date(props.detail.updated_at);
  const hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
  const [status, setStatus] = useState(null);
  const [imageSrc, setImageSrc] = useState(
    `${imageRoute}/${props.detail.image}`
  );
  const handleCardClick = () => {};
  const location = props.detail.address;
  const price = props.detail.price;
  const defaultImage = props.defaultImage;
  const buildingInfo = props.detail.building_info;
  const addToFavourite = (e) => {
    e.preventDefault();
  };
  const formattedTimeDifference = `${days} days, ${hours} hours ago`;

  const handleImageError = () => {
    setImageSrc(defaultImage);
  };

  const type =
    props.detail.type === 1
      ? "For Rent"
      : props.detail.type === 2
      ? "For Sale"
      : "Hostel";
  const description = props.detail.description;
  useEffect(() => {
    if (days < 2) {
      setStatus("New");
    }
  }, [days]);

  return (
    <Link
      to={`/place/${props.detail.id}`}
      className={`card cards position-realtive mx-md-2 mx-lg-2 mx-auto my-4 `}
      onClick={handleCardClick}
    >
      <div className="card-image-box">
        {status ? (
          <span
            className="btn-primary disabled btn position-absolute status"
            style={{ left: 5, top: 5 }}
          >
            {status}
          </span>
        ) : (
          ""
        )}
        <span
          onClick={addToFavourite}
          tabindex="0"
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-content="add to favourite"
          className="d-inline-block btn btn-outline-danger rounded-circle  content-overlay position-absolute wish-list"
          style={{ right: 20, top: 10, color: colors.secondary.main }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </span>
        <img
          src={imageSrc}
          className="card-img-top card-image mx-auto  "
          // alt={props.alt}
          onError={handleImageError}
        />
      </div>
      <div className="card-body">
        <div className="d-flex flex-column ">
          <span className="h6 mt-2" style={{ color: colors.secondary.main }}>
            {type ? `${type}` : ""}
          </span>
          <div className="card-title d-flex ">
            <span className="text-muted me-lg-2 me-md-2 ">
              <HomeWorkOutlinedIcon />
            </span>
            <span className="h6 me-lg-2 me-md-2 ms-1 mt-1">{buildingInfo}</span>
          </div>
          <span className="d-block me-lg-2 me-md-2">
            <svg
              style={{ color: colors.primary.light }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <small className="text-muted  ms-2 ">{location}</small>
          </span>
          <span className="d-block ">
            <svg
              style={{ color: colors.primary.light }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-coin"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <small className="text-muted ms-2">{price} MMK</small>
          </span>
        </div>

        <p className="card-text">{description}</p>
        <div className="d-flex w-100 mb-1">
          <span className="me-1 mt-1">{formattedTimeDifference}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
