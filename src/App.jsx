import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [sensorVals, setSensorVals] = useState({
    sensor1: null,
    chlorophyll: null,
    phosphorus: null,
    potassium: null,
    humidity: null,
    nitrogen: null,
  });

  const getSensorValues = async () => {
    try {
      const fetchTemperatureValue1 = await fetch(
        "https://api.waziup.io/api/v2/devices/bootstrap/sensors/TC/values"
      );

      const res1 = await fetchTemperatureValue1.json();

      const randomphosphorus = (Math.random() * 100).toFixed(2);
      const randomchlorophyll = (Math.random() * (20 - 5) + 5).toFixed(2);
      const randompotassium = (Math.random() * 100).toFixed(2);
      const randomHumidity = (Math.random() * 100).toFixed(2);
      const randomNitrogen = (Math.random() * 50).toFixed(2);

      setSensorVals({
        sensor1: res1[0].value,
        chlorophyll: randomchlorophyll,
        phosphorus: randomphosphorus,
        potassium: randompotassium,
        humidity: randomHumidity,
        nitrogen: randomNitrogen,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSensorValues();
  }, []); 

  return (
    <>
      <h1>React Waziup Application</h1>
      <div className="card">
        <div className="row p-2">
          <div className="col-sm-4">
            <h2>Temperature</h2>
            <p id="t1">
              {sensorVals.sensor1 ? `${sensorVals.sensor1}` : "---"} &deg;C
            </p>
          </div>
          <div className="col-sm-4">
            <h2>Chrolophyll</h2>
            <p id="t2">
              {sensorVals.chlorophyll ? `${sensorVals.chlorophyll}` : "---"} µmol m-2
            </p>
          </div>
          <div className="col-sm-4">
            <h2>Humidity</h2>
            <p id="random-humidity">
              {sensorVals.humidity ? `${sensorVals.humidity}` : "---"} %
            </p>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-sm-4">
            <h2>Potassium</h2>
            <p id="random-potassium">
              {sensorVals.potassium ? `${sensorVals.potassium}` : "---"} %
            </p>
          </div>
          <div className="col-sm-4">
            <h2>Phosphorus</h2>
            <p id="random-phosphorus">
              {sensorVals.phosphorus ? `${sensorVals.phosphorus}` : "---"} %
            </p>
          </div>
          <div className="col-sm-4">
            <h2>Nitrogen</h2>
            <p id="random-nitrogen">
              {sensorVals.nitrogen ? `${sensorVals.nitrogen}` : "---"} ppm
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;