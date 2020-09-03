import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
const FilterSubcategoryItem = () => {
  const [subcategories, setSubcategories] = useState([]);
  useEffect(() => {
    (async function () {
      const {
        data: { subcategories },
      } = await axios.get("http://localhost:3124/api/subcategory/all");
      console.log(subcategories);
      setSubcategories(subcategories);
    })();
  }, []);
  return (
    <Fragment>
      <ul>
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          style={{ border: "0px", paddingTop: "1px", paddingBottom: "1px" }}
        >
          Sub Categories{" "}
          {/* <span className="badge badge-primary badge-pill">5</span> */}
        </li>
        {subcategories.map((s) => (
          <li
            className="list-group-item d-flex justify-content align-items-center"
            style={{
              border: "0px",
              paddingTop: "1px",
              paddingBottom: "1px",
            }}
            key={s._id}
          >
            <input type="checkbox" style={{ marginRight: "25px" }} />
            {s.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default FilterSubcategoryItem;
