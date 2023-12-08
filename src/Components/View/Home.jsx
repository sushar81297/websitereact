import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { defaultImage, imageRoute, placeList } from "../../Api";
import SecondHeader from "../Layout/SecondHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlace, filterPlace } from "../../feature/counter/placeSlice";
import {
  increment,
  first,
  last,
  incrementByAmount,
  decrement,
} from "../../feature/counter/pageSlice";
import Loading from "./Loading";

function Home() {
  const page = useSelector((state) => state.page.page);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.places.status);
  let Place = useSelector((state) => state.places.data);
  const last_page = useSelector((state) => state.places.last_page);
  const filterTSP = useSelector((state) => state.township.filterTSP);
  const filterType = useSelector((state) => state.township.filterType);

  useEffect(() => {
    if (filterTSP || filterType) {
      dispatch(
        filterPlace({ page: page, type: filterType, township: filterTSP })
      );
    } else {
      dispatch(fetchPlace(page));
    }
  }, [dispatch, page, filterTSP, filterType]);

  return (
    <div className="container d-flex flex-wrap">
      <SecondHeader />
      {status === "loading" ? (
        <Loading />
      ) : status === "succeeded" && Place.length > 0 ? (
        Place.map((m) => {
          return (
            <Card
              key={m.id}
              imageRoute={imageRoute}
              defaultImage={defaultImage({ long: m.long, lat: m.lat })}
              detail={m}
            />
          );
        })
      ) : (
        ""
      )}
      <div className="d-flex col-lg-12 justify-content-end">
        <div className="btn-group btn ">
          <button
            disabled={page === 1}
            className="btn btn-outline-primary"
            onClick={() => dispatch(decrement())}
          >
            prev
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => dispatch(first())}
          >
            First
          </button>
          <button
            disabled={page === last_page}
            className="btn btn-outline-primary"
            onClick={() => dispatch(incrementByAmount(1))}
          >
            {" "}
            {page + 1}{" "}
          </button>
          <button
            disabled={page === last_page}
            className="btn btn-outline-primary"
            onClick={() => dispatch(incrementByAmount(2))}
          >
            {" "}
            {page + 2}{" "}
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => dispatch(last(last_page))}
          >
            last
          </button>
          <button
            disabled={page === last_page}
            className="btn btn-outline-primary"
            onClick={() => dispatch(increment())}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
