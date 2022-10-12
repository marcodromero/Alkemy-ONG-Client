
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpService from "../../../services/httpService";
import ActivityWrapper from "./ActivityWrapper";

import LoaderWrapper from "./LoaderWrapper";
export default function ActivityDetails() {
  const [content, setContent ] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams();
  useEffect(()=>{
    (async function() {
      try{
        const activity = await httpService.get(`/activities/${id}`)
        
          setContent(activity)
          setLoading(false)
        
      }catch(e){
        if(e.response.status === 404){
          window.location = '/404?errorMessage=No se ha podido encontrar esta actividad&sourceParentRoute=activities'

        }else{
          console.log(e)
        }
      }
    })()
  },[id])
  return (<>
    {loading ? <LoaderWrapper/> : <ActivityWrapper name={content.data.name} image={content.data.image} content={content.data.content} />}
    </>
  );
}
