import { useSelector } from "react-redux"

const Error = () => {
     const error = useSelector(state=>state.error);
    
     return (
          <>
               <div className="card w-96 bg-base-100 card-xs shadow-sm flex items-center justify-center">
                    <div className="card-body">
                         {
                           error?.response?.data?.message ?  <h1 className="card-title">{error?.response?.data?.message}</h1> : <h1 className="card-title">{error?.message}</h1> 
                         }
                         
                    </div>
               </div>
          </>
     )
}

export default Error
