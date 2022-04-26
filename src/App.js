import React from "react";
import Map from "./Components/Map";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();
      setData(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return <div>{loading ? <Loader /> : <Map data={data} />}</div>;
};

export default App;
