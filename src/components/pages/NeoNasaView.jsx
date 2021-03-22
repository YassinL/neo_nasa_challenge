import axios from "axios";
import React, { useEffect, useState } from "react";

// Style
import styled from "styled-components";
import color from "../../styles/variables";

// Components
import GoogleChart from "../molecules/GoogleChart";

const NeoNasaView = () => {
  // Init the state of data and set a loading
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Update the state and fetch the data from API Neo Nasa
  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`
      );
      setData(result.data);
      setLoading(false);
    };
    fetchdata();
  }, []);

  console.log(data.near_earth_objects);

  return (
    <ViewContainer>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <ChartContainer>
          <GoogleChart earthObjects={data.near_earth_objects} />
        </ChartContainer>
      )}
    </ViewContainer>
  );
};

const ViewContainer = styled.div`
  position: relative;
`;

const Loading = styled.h1`
  text-align: center;
  margin-top: 5%;
`;

const ChartContainer = styled.div`
  background-color: ${color.blueNasa};
`;

export default NeoNasaView;
