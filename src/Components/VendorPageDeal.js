import React, { Fragment, useState } from "react";

const VendorPageDeal = ({ deal, qty, addToCart, removeFromCart, type }) => {
  const [datalist, setDatalist] = useState(["A1", "A2", "A3"]);
  const [tickets, setTickets] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [slots, setSlots] = useState([
    "aug 25: 1pm to 2pm",
    "aug 27: 1pm to 3pm",
    "aug 27: 4pm to 9pm",
  ]);
  const [currentSlot, setCurrentSlot] = useState(slots[0]);

  const ActivityDeal = () => {
    return (
      <div className="row">
        <div className="col-6 col-lg-12">
          <small>
            Price:
            <del>{deal.price}</del>
          </small>
          <p>
            <strong>
              After discount:{" "}
              {deal.price - (deal.price * deal.discountPercent) / 100}
            </strong>
          </p>
        </div>
        <div className="col-6 col-lg-12">
          <h1>Package details</h1>
          <div className="col-6 col-lg-12">
            <div className="d-flex justify-content-end">
              <label>
                select slot:
                <select
                  value={currentSlot}
                  onChange={(e) => setCurrentSlot(e.target.value)}
                  onBlur={(e) => setCurrentSlot(e.target.value)}
                  disabled={!slots.length}
                >
                  {slots.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="col-6 col-lg-12">
              <div className="d-flex justify-content-end">
                <p>Number of tickets: </p>
                <div className="p-2">
                  <button
                    onClick={() => removeFromCart(deal._id)}
                    className="btn btn-sm btn-primary"
                    style={{
                      backgroundColor: "purple",
                      border: "purple",
                    }}
                  >
                    -
                  </button>
                </div>
                <div className="p-2" style={{ paddingTop: "10px !important" }}>
                  {qty}
                </div>
                <div className="p-2">
                  <button
                    onClick={() =>
                      addToCart(
                        deal._id,
                        deal.name,
                        deal.price - (deal.price * deal.discountPercent) / 100,
                        currentSlot
                      )
                    }
                    className="btn btn-sm btn-primary"
                    style={{
                      backgroundColor: "purple",
                      border: "purple",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const HotelDeal = () => {
    return (
      <div className="row">
        <div className="col-6 col-lg-12">
          <small>
            Price:
            <del>{deal.price}</del>
          </small>
          <p>
            <strong>
              After discount:{" "}
              {deal.price - (deal.price * deal.discountPercent) / 100}
            </strong>
          </p>
        </div>
        <div className="col-6 col-lg-12">
          <h1>Package details</h1>
          <div className="col-6 col-lg-12">
            <div className="d-flex justify-content-end">
              <h4>Rooms: </h4>
              <div className="p-2">
                <button
                  onClick={() => removeFromCart(deal._id)}
                  className="btn btn-sm btn-primary"
                  style={{
                    backgroundColor: "purple",
                    border: "purple",
                  }}
                >
                  -
                </button>
              </div>
              <div className="p-2" style={{ paddingTop: "10px !important" }}>
                {qty}
              </div>
              <div className="p-2">
                <button
                  onClick={() =>
                    addToCart(
                      deal._id,
                      deal.name,
                      deal.price - (deal.price * deal.discountPercent) / 100
                    )
                  }
                  className="btn btn-sm btn-primary"
                  style={{
                    backgroundColor: "purple",
                    border: "purple",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const MovieDeal = () => {
    return (
      <div className="row">
        <div className="col-6 col-lg-12">
          <small>
            Price:
            <del>{deal.price}</del>
          </small>
          <p>
            <strong>
              After discount:{" "}
              {deal.price - (deal.price * deal.discountPercent) / 100}
            </strong>
          </p>
        </div>
        <div className="col-6 col-lg-12">
          <div className="p-2" style={{ paddingTop: "10px !important" }}>
            Seats:
          </div>
          {tickets.map((t) => (
            <span
              className="badge badge-primary"
              key={t}
              style={{ margin: "2px" }}
            >
              {t}

              <button
                className="close"
                aria-label="Close"
                style={{ fontSize: "100%", fontWeight: 1000 }}
                type="click"
                onClick={() => {
                  let ticketArr = [...tickets];
                  ticketArr = ticketArr.filter((ele) => ele !== t);
                  setTickets(ticketArr);
                  let remaining = [...datalist];
                  remaining.push(t);
                  remaining.sort();
                  setDatalist(remaining);
                  ticketArr = ticketArr.filter((ele) => ele !== t);
                  setTickets(ticketArr);
                  removeFromCart(t);
                }}
              >
                <i className="fa fa-times" aria-hidden="true "></i>
              </button>

              {/* </i> */}
            </span>
          ))}

          <input
            type="search"
            list="ticketsListData"
            value={searchVal}
            className="form-control prompt"
            onChange={(e) => setSearchVal(e.target.value)}
            autoComplete="on"
            style={{ width: "100px" }}
          />
          <datalist id="ticketsListData">
            {datalist.map((item) => (
              <option value={item} key={item} />
            ))}
          </datalist>
          <span className="input-group-btn">
            <input
              className="btn btn-default search-btn"
              type="submit"
              onClick={(e) => {
                if (!searchVal) return;
                const ticketArr = [...tickets];
                ticketArr.push(searchVal);
                addToCart(
                  searchVal,
                  deal.name + " " + searchVal,
                  deal.price - (deal.price * deal.discountPercent) / 100
                );
                setTickets(ticketArr);

                let remaining = [...datalist];
                remaining = remaining.filter((t) => t !== searchVal);
                setDatalist(remaining);
                setSearchVal("");
              }}
            />
          </span>
        </div>
      </div>
    );
  };
  const DefaultDeal = () => (
    <div className="col-12 col-lg-3">
      <div className="row">
        <div className="col-6 col-lg-12">
          <small>
            Price:
            <del>{deal.price}</del>
          </small>
          <p>
            <strong>
              After discount:{" "}
              {deal.price - (deal.price * deal.discountPercent) / 100}
            </strong>
          </p>
        </div>
        <div className="col-6 col-lg-12">
          <div className="d-flex justify-content-end">
            <div className="p-2">
              <button
                onClick={() => removeFromCart(deal._id)}
                className="btn btn-sm btn-primary"
                style={{
                  backgroundColor: "purple",
                  border: "purple",
                }}
              >
                -
              </button>
            </div>
            <div className="p-2" style={{ paddingTop: "10px !important" }}>
              {qty}
            </div>
            <div className="p-2">
              <button
                onClick={() =>
                  addToCart(
                    deal._id,
                    deal.name,
                    deal.price - (deal.price * deal.discountPercent) / 100
                  )
                }
                className="btn btn-sm btn-primary"
                style={{
                  backgroundColor: "purple",
                  border: "purple",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Fragment>
      <div style={{ marginBottom: "10px" }}>
        <div
          className="row"
          style={{
            backgroundColor: "white",
            padding: "10px 5px 10px 5px",
            borderRadius: "10px",
            border: "1px solid #E0DEDE",
            boxShadow: "-6px -6px 16px #fff, 6px 6px 16px #d1cdc7",
          }}
        >
          <div className="col-12 col-lg-3">
            <img
              alt={deal.name}
              src={`http://localhost:3124/deals/${deal.img}`}
              className="img-fluid"
              style={{ borderRadius: "10px", width: "100%" }}
            />
          </div>
          <div className="col-12 col-lg-9">
            <h5 className="text-muted">
              <strong>{deal.name}</strong>
              <p style={{ marginBottom: "10px" }}>{deal.description}</p>
            </h5>
            <div className="row">
              <div className="col-12 col-lg-9">
                <p style={{ marginBottom: "10px" }}>Free Cancellation</p>
                <small>
                  <strong>Valid For :</strong> all |
                  <strong>Valid from :</strong> {deal.valid.from}
                  <strong>Valid to :</strong> {deal.valid.to}
                  <strong>Timings :</strong> all days
                </small>
                <br />

                {type === "Movies" && <MovieDeal />}
                {type === "Hotels" && <HotelDeal />}
                {type === "Activity" && <ActivityDeal />}
              </div>
              {type !== "Movies" &&
                type !== "Hotels" &&
                type !== "Activity" && <DefaultDeal />}
            </div>
            <div className="dropdown-divider"></div>
            <div className="d-flex justify-content-end">
              <div className="p-2">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "purple", border: "0px" }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VendorPageDeal;
