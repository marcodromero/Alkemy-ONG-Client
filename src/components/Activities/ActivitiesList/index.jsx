import React, { useEffect, useState } from "react";
import LoaderWrapper from "../ActivityDetails/LoaderWrapper";
import ActivitiesListWrapper from "./ActivitiesListWrapper";
import httpService from "../../../services/httpService";
export default function ActivitiesList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const activities = await httpService.get("/activities");
        setData(activities.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <>
      {loading ? (
        <LoaderWrapper />
      ) : (
        <ActivitiesListWrapper data={data} setData={setData} />
      )}
    </>
  );
}
