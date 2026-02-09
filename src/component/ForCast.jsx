import { useSelector } from 'react-redux'
import Loadar from './Loadar'

const ForCast = () => {
     const forcast = useSelector(state => state.forcast)
     const loading = useSelector(state=>state.loading)


     if (loading) {
          return <Loadar/>
     }else{
          
     return (
          <>
               <ul className="list bg-base-100 rounded-box shadow-md">

                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">30 day ForCast Weather</li>

                    {
                         forcast?.list.map((item,index) => {
                              let ctem = item?.main.temp - 273
                              return <li key={index} className="list-row">
                                   <div>
                                        <div >City : {forcast?.city.name}</div>

                                        <div className='text-amber-500'>date : {item?.dt_txt} </div>

                                        <div className='text-emerald-500'>country : {forcast?.city.country}</div>
                                        <div className='text-sky-500'>humidity : {item?.main.humidity}</div>
                                        <div className='text-sky-500'>temp : {ctem.toFixed(2)} °C</div>
                                   </div>
                              </li>
                         })
                    }

               </ul>
          </>
     )
}
}

export default ForCast
