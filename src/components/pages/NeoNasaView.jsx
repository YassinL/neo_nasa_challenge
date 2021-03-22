import axios from "axios";
import React, { useEffect, useState } from "react";

// Style
import styled from "styled-components";
import color from "../../styles/variables";

// Components
import GoogleChart from "../molecules/GoogleChart";
import InputSelect from "../atoms/Input/InputSelect";

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

  // const [search, setSearch] = useState("");
  // const filter = useMemo(() => {
  //   if (!search) return data.near_earth_objects;
  //   return data.near_earth_objects.filter((d) => {
  //     return d.close_approach_data[0].orbiting_body
  //       .toLowerCase()
  //       .includes(search.toLowerCase());
  //   });
  // }, [search, data.near_earth_objects]);

  return (
    <ViewContainer>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <ChartContainer>
            <GoogleChart earthObjects={data.near_earth_objects} />
          </ChartContainer>
          <InputContainer>
            <InputSelect options={data.near_earth_objects} />
          </InputContainer>
        </>
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

const InputContainer = styled.div`
  position: absolute;
  top: 120px;
  right: 10%;
  width: 200px;
`;

export default NeoNasaView;
