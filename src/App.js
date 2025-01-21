import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        This project was coded by Alia McAfee and is open-sourced on{" "}
        <a href="https://github.com/AliaMcAfee/React-Weather-App.git">GitHub</a>
      </p>
    </div>
  );
}
