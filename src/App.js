import "./App.css"
import { useState, useEffect } from "react";
import Weather from "./component/Weather";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };

    fetchData();

    return () => {
      setData([]);
    };
  }, [lat, long]);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div
          style={{
            fontSize: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "#fff",
            background: "linear-gradient(to bottom, rgb(124, 102, 74),rgb(66, 69, 42))"
          }}
        >
          <p>loading...</p>
        </div>
      )}
    </div>
  );
}

export default App;
