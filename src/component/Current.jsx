import React from 'react'
import { useSelector } from 'react-redux'
import Loadar from './Loadar'

const Current = () => {

  
  const current = useSelector(state => state.current)
  const loading = useSelector(state=>state.loading)

  let ctemp = current?.main.temp-273;


  if (loading) {
    return <Loadar/>
  }else
  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md">

        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Current Weather</li>

        <li className="list-row">
          <div>
            <div className='text-xl'>humidity : {current?.main.humidity}</div>
            <div className='text-pink-700 text-xl'>temp : {ctemp?.toFixed(2)} °C</div>
          </div>
        </li>

      </ul>
    </>
  )
}

export default Current

