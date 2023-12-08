import React, { useEffect, useCallback, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { detailPlace, imageRoute, defaultImg } from "../../Api";
import axios from "axios";
import Slide from "./Slide";
import Loading from "./Loading";
import Contact from "./Contact";
import ImageViewer from "react-simple-image-viewer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { fetchNearLocation } from "../../feature/counter/nearLocationSlice";
import { useDispatch, useSelector } from "react-redux";
function Detailview() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [place, setPlace] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [Photos, setPhotos] = useState([]);
  const nearPlace = useSelector((state) => state.nearLocation.data);

  useEffect(() => {
    fetchData();
  }, [id]);

  useEffect(() => {
    if (place.length !== 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }

    if (place.length > 0) {
      dispatch(fetchNearLocation({ long: place[0].long, lat: place[0].lat }));
      setPhotos([...JSON.parse(place[0].photos)]);
    }
  }, [place]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${detailPlace}?id=${id}`);
      setPlace([response.data.data]);
    } catch (err) {
      console.error(err);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="container-fluid  ">
      <span className="d-inline-block ms-lg-5 ms-md-3  mt-3 ">
        <KeyboardBackspaceIcon
          onClick={() => navigate(-1)}
          sx={{ cursor: "pointer", fontSize: "45px" }}
        />
      </span>
      <div className="container mt-4">
        <div className="row g-3">
          <div className="col col-lg-7 col-md-12  " style={{ height: 500 }}>
            <div onClick={() => openImageViewer(0)} className="  h-100 rounded">
              <img
                src={place.length > 0 ? `${imageRoute}/${place[0].image}` : ""}
                alt="nayar"
                className="w-100 h-100 images rounded"
                onError={(e) => {
                  e.target.src = `${defaultImg}`;
                }}
              />
            </div>
          </div>
          <div
            onClick={() => openImageViewer(0)}
            className="col-12 col-lg-5 col-md-12 "
          >
            <div className="box-content">
              <div className="col col-lg-12 p-0 mb-1 images  rounded">
                {Photos.length > 0 ? (
                  <img
                    src={place.length > 0 ? `${Photos[0]}` : ""}
                    alt="nayar"
                    style={{ height: 247 }}
                    onError={(e) => {
                      e.target.src = `${defaultImg}`;
                    }}
                    className="w-100 rounded"
                  />
                ) : (
                  ""
                )}
              </div>
              <div
                onClick={() => openImageViewer(1)}
                className="col col-lg-12 p-0 mb-1  images rounded"
              >
                {Photos.length > 0 ? (
                  <img
                    src={place.length > 0 ? `${Photos[1]}` : ""}
                    alt="nayar"
                    style={{ height: 247 }}
                    onError={(e) => {
                      e.target.src = `${defaultImg}`;
                    }}
                    className=" w-100 rounded"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 row g-3 ">
          {Photos.length > 0
            ? Photos.map((m, index) =>
                index === 0 || index === 1 ? (
                  ""
                ) : (
                  <div
                    onClick={() => openImageViewer(index)}
                    key={index}
                    className="d-flex flex-wrap w-25 images p-1   text-decoration-none"
                    style={{ height: 200 }}
                  >
                    <img
                      src={m}
                      className="w-100 h-100 img-fluid  rounded"
                      onError={(e) => {
                        e.target.src = `${defaultImg}`;
                      }}
                    />
                  </div>
                )
              )
            : ""}
        </div>
        <div className="mt-5 g-3 row">
          <div className="col-12 col-lg-8 col-md-12 ">
            <div class="mb-md-0 mb-4 col-md-7">
              <div className="d-flex w-100">
                <div className="me-auto">
                  {/* <span className="me-2 mb-3 badge bg-success">Verified</span> */}
                  {/* <span className="me-2 mb-3 badge bg-info">New</span> */}
                  <h2 className="h3 mb-4 pb-4 border-bottom">
                    {place.length !== 0 ? place[0].price : null}
                    <span className="d-inline-block ms-1 fs-base fw-normal text-body">
                      {place.length !== 0
                        ? place[0].type === 1
                          ? "/month"
                          : null
                        : null}
                    </span>
                  </h2>
                </div>
                <span className="d-inline-block mt-4 pt-4  ">
                  <Link
                    to={
                      place.length !== 0
                        ? `/map/${place[0].lat}/${place[0].long}`
                        : ""
                    }
                  >
                    <button
                      className="btn btn-dark border-0 bg-primary rounded-pill"
                      type="button"
                    >
                      Show Map
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi  bi-map"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                        />
                      </svg>
                    </button>
                  </Link>
                </span>
              </div>
              <div className="mb-4 pb-md-3">
                <h3 className="h4">Overview</h3>
                <p className="mb-1">
                  {place.length > 0 ? place[0].description : ""}
                  {/* Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet
                non scelerisque turpis sed etiam ultrices. Blandit mollis
                dignissim egestas consectetur porttitor. Vulputate dolor
                pretium, dignissim eu augue sit ut convallis. Lectus est, magna
                urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id
                pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu. */}
                </p>
                {/* <div id="moreOverview" className="collapse">
                <p className="mb-1">
                  Asperiores eos molestias, aspernatur assumenda vel corporis
                  ex, magni excepturi totam exercitationem quia inventore quod
                  amet labore impedit quae distinctio? Officiis blanditiis
                  consequatur alias, atque, sed est incidunt accusamus
                  repudiandae tempora repellendus obcaecati delectus ducimus
                  inventore tempore harum numquam autem eligendi culpa.
                </p>
              </div>
              <a
                href="#"
                aria-controls="moreOverview"
                aria-expanded="false"
                className="collapse-label collapsed"
              >
                Show more
              </a> */}
              </div>
              <div className="mb-4 pb-md-3">
                <h3 className="h4">Property Details</h3>
                <ul className="list-unstyled mb-0">
                  <li>
                    <b>Division: </b>
                    {place.length > 0 ? place[0].division : ""}
                  </li>
                  <li>
                    <b>Address: </b>
                    {place.length > 0 ? place[0].address : ""}
                  </li>
                  <li>
                    <b>Ward: </b>
                    {place.length > 0 ? place[0].ward : ""}
                  </li>
                  <li>
                    <b>Street: </b>
                    {place.length > 0 ? place[0].street : ""}
                  </li>

                  <li>
                    <b>Type: </b>
                    {place.length > 0 ? place[0].building_info : ""}
                  </li>
                  <li>
                    <b>Apartment area: </b>
                    {place.length > 0 ? place[0].sqft : ""}
                  </li>
                  <li>
                    <b>Floor: </b>
                    {place.length > 0 ? place[0].floor : ""}
                  </li>
                  <li>
                    <b>Householding Size: </b>
                    {place.length > 0 ? place[0].householding_size : ""}
                  </li>
                  <li>
                    <b>Near Hosptial: </b>
                    {place.length > 0 ? place[0].near_hosptial : ""}
                  </li>
                  <li>
                    <b>Near Market: </b>
                    {place.length > 0 ? place[0].near_market : ""}
                  </li>
                  <li>
                    <b>Near Bus Stop: </b>
                    {place.length > 0 ? place[0].near_bus_stop : ""}
                  </li>
                  <li>
                    <b>Payment Term: </b>
                    {place.length > 0 ? place[0].payment_term : ""}
                  </li>
                  <li>
                    <b>Contract Term: </b>
                    {place.length > 0 ? place[0].contract_term : ""}
                  </li>
                  <li>
                    <b>Deposite: </b>
                    {place.length > 0 ? place[0].deposite_amt : ""}
                  </li>
                  <li>
                    <b>Payment: </b>
                    {place.length > 0 ? place[0].payment : ""}
                  </li>
                  <li>
                    <b>Agent Fee: </b>
                    {place.length > 0 ? place[0].agent_fee : ""}
                  </li>
                </ul>
              </div>
              <div className="mb-4 pb-md-3">
                <h3 className="h4">Amenities</h3>
                <ul className="list-unstyled gy-1 mb-1 text-nowrap row row-cols-lg-3 row-cols-md-2 row-cols-1">
                  <li className="col">
                    <i className="fi-wifi mt-n1 me-2 fs-lg align-middle"></i>
                    Air conditioning:{" "}
                    {place.length > 0 ? place[0].aircon & place[0].aircon : ""}
                  </li>
                  <li className="col">
                    <i className="fi-thermometer mt-n1 me-2 fs-lg align-middle"></i>
                    Parking place:
                    {place.length > 0
                      ? place[0].parking & place[0].parking
                      : ""}
                  </li>
                  <li className="col">
                    <i className="fi-dish mt-n1 me-2 fs-lg align-middle"></i>
                    Bedroom:{" "}
                    {place.length > 0
                      ? place[0].bedroom & place[0].bedroom
                      : ""}
                  </li>
                  <li className="col">
                    <i className="fi-parking mt-n1 me-2 fs-lg align-middle"></i>
                    Bath/Toilet:
                    {place.length > 0
                      ? place[0].bath_toilet & place[0].bath_toilet
                      : ""}
                  </li>
                </ul>
                {/* <div id="moreAmenities" className="collapse">
                <ul className="list-unstyled gy-1 mb-1 text-nowrap row row-cols-lg-3 row-cols-md-2 row-cols-1">
                  <li className="col">
                    <i className="fi-no-smoke mt-n1 me-2 fs-lg align-middle"></i>No
                    smocking
                  </li>
                  <li className="col">
                    <i className="fi-pet mt-n1 me-2 fs-lg align-middle"></i>Cats
                  </li>
                  <li className="col">
                    <i className="fi-swimming-pool mt-n1 me-2 fs-lg align-middle"></i>
                    Swimming pool
                  </li>
                  <li className="col">
                    <i className="fi-double-bed mt-n1 me-2 fs-lg align-middle"></i>
                    Double bed
                  </li>
                  <li className="col">
                    <i className="fi-bed mt-n1 me-2 fs-lg align-middle"></i>Single
                    bed
                  </li>
                </ul>
              </div> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-12 ">
            <Contact />
          </div>
        </div>

        {isViewerOpen && (
          <ImageViewer
            src={Photos}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
        {nearPlace.length > 0 ? <Slide /> : ""}
      </div>
    </div>
  );
}

export default Detailview;
