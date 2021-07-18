import React,{ useContext, useEffect,useState } from 'react'
import ApiContext from '../context/getdetails/apiContext'

const Details = () => {

    const apiContext = useContext(ApiContext);

    const {data,api} = apiContext;


    // useEffect(() => {
    //   api()
    // }, [])



    return (
        <div>
       
        <div className="button text-center m-5">
            <button 
            className="btn  btn-lg btn-custom"
            onClick = { () => api() }
            >
             Get Users
            </button>
       </div>
       <div className =" overlay ">
       {data !== null && (
               <div className = "total-box" >
               {
                   data.data.map((data,index) => 
                   
                       <div key={index} className="box1 text-center justify-content-center">
                       <div class="card ">
                           <img src={data.avatar} class="card-img-top" alt="..."/>
                           <div class="card-body">
                               <h5 class="card-title">{data.first_name + '  ' + data.last_name}</h5>
                               <div>
                                <span style={{fontWeight:"500"}}>About me</span>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisici
                                    g elit. Doloremque, tempore
                                 </p>
                               </div>
                               <div>
                                <span style={{fontWeight:"500"}}>Email</span>
                                <p>
                                   {data.email}
                                 </p>
                               </div>
                           </div>
                       </div>
                   </div>
               )
              }
            </div>
           )}

       </div>
           
        </div>
    )
}

export default Details
