import React from "react";
import Cover from "../../components/Cover";
import LastNews from "../../components/news/LastNews";

const Home = () => {
  return (
    <>
      {/*header*/}
      <Cover />
      {/*slider*/}
      <LastNews />
    </>
  );
};

export default Home;
