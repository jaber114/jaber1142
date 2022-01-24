import React, { useState, useEffect } from "react";
import Axios from "axios";
const Addcar = () => {
  const url = "http://localhost:8000/login";
  const models = ["Hyndai", "Skoda", "Fiat", "Seat"];
  const years = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014,
  ];
  const [cartype, settype] = useState("");
  const [caryear, setyear] = useState(years[0]);
  const [carpricestart, setprice] = useState("");
  const [carpriceend, setprc] = useState();
  const yearchange = (event) => {
    setyear(event.target.value);
  };
  const type1 = (event) => {
    settype(event.target.value);
  };
  const carprice = (event) => {
    setprice(event.target.value);
  };
  const submitted = (event) => {
    console.log(cartype);
    Axios.post(url, {
      params: {
        cartype: cartype,
        carprice: carpricestart,
      },
    });
    event.preventDefault();
  };
  useEffect(() => {
    return () => {
      "cleaned";
    };
  }, [cartype]);
  return (
    <form onSubmit={submitted}>
      <h1 style={{ color: "black" }}>enter car type</h1>
      <center>
        <h4>Select your car type</h4>
        <select
          id="type"
          className="cartype"
          value={cartype}
          name="type"
          onChange={type1}
        >
          {models.map((m, index) => {
            return (
              <option key={index} value={m}>
                {m}
              </option>
            );
          })}
        </select>
        <select className="caryear" value={caryear} onChange={yearchange}>
          <option disabled>Car Year</option>
          {years.map((y, index) => {
            return (
              <option key={index} value={y}>
                {y}
              </option>
            );
          })}
        </select>
        <label htmlFor="input">Start price</label>
        <input
          style={{ width: "40px" }}
          type="text"
          value={carpricestart}
          onChange={carprice}
        />
        <label htmlFor="input">End price</label>
        <input
          type="text"
          style={{ width: "40px" }}
          value={carpriceend}
          onChange={(e) => {
            setprc(e.value);
          }}
        />

        <button>click me now</button>
      </center>
    </form>
  );
};
export default Addcar;
