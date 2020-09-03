import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
const FilterLocationItem = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        "http://localhost:3124/api/location/all"
      );
      console.log(data);
      setLocations(data);
    })();
  }, []);
  return (
    <Fragment>
      {locations.map((l) => (
        <li
          className="list-group-item d-flex  align-items-center"
          style={{ border: "0px", paddingTop: "1px", paddingBottom: "1px" }}
          key={l._id}
        >
          <input style={{ marginRight: "25px" }} type="checkbox" />
          {l.location}
        </li>
      ))}
    </Fragment>
  );
};

export default FilterLocationItem;
