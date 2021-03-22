import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Chart } from "react-google-charts";

const GoogleChart = ({ earthObjects }) => {
  // Map on the earthObjects to get the name, the diameter min, and the diameter max
  const data = earthObjects
    .map((earthObject) => {
      return [
        earthObject.name,
        earthObject.estimated_diameter.kilometers.estimated_diameter_min,
        earthObject.estimated_diameter.kilometers.estimated_diameter_max,
      ];
    })
    .sort();

  // Sorted data by estimed diameter descending
  const sortedData = data.sort((a, b) => {
    return b[1] - a[1];
  });

  return (
    <ChartContainer>
      <Chart
        width={"100%"}
        height={"100%"}
        chartType="BarChart"
        loader={<div>Loading Chart...</div>}
        data={[
          ["Name", "Min Estimed Diameter (km)", "Max Estimed Diameter"],
          ...sortedData,
        ]}
        options={{
          title: "Earth Object's Chart ",
          chartArea: { width: "40%", height: "80%" },
          hAxis: {
            title: "Min Estimated Diameter (km)",
            minValue: 0,
          },
          vAxis: {
            title: "Neo Name",
            textPosition: "out",
          },
        }}
        legendToggle
      />
    </ChartContainer>
  );
};

export default GoogleChart;

const ChartContainer = styled.div`
  padding: 1%;
  height: 65vh;
`;
GoogleChart.propTypes = {
  earthObjects: PropTypes.object.isRequired,
};
