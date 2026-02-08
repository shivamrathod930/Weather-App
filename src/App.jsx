import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchweather, setcity } from "./store/Actions/WeatherAction";
import Current from "./component/Current";
import ForCast from "./component/ForCast";

function App() {

  const city = useSelector(state => state.city)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchweather(city))
  }, [])

  const handalInput = (e) => {
    dispatch(setcity(e.target.value))
  }

  const handalclick = () => {
    dispatch(fetchweather(city))
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-10 gap-2">
        <div className="flex gap-1">

          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={handalInput}
              type="search"
              required placeholder="Search" />
          </label>

          <button
            onClick={handalclick}
            className="btn btn-primary"
          >search</button>
        </div>

        <h1>{city}</h1>

      </div>


      <div className="flex flex-col gap-3">
        <Current  />
        <ForCast />
      </div>
    </>
  );
}

export default App;
