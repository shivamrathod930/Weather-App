import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchweather } from "./store/Actions/WeatherAction";
import Current from "./component/Current";
import ForCast from "./component/ForCast";
import Search from "./component/Search";
import Loadar from "./component/Loadar";
import Error from "./component/Error";

function App() {


  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const city = useSelector(state => state.city)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchweather(city))
  }, [])


  return (
    <>

      <Search />

      <div className="flex atems-center justify-center">

        {error
          ?
          <Error />
          :
          loading
            ?
            <Loadar />
            :
            <div className="flex flex-col gap-3">
              <Current />
              <ForCast />
            </div>
        }
      </div>
      <h1>hello</h1>
    </>
  );
}

export default App;
