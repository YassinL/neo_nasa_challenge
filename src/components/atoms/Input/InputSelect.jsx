import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const InputSelect = ({ options }) => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={[
        ...new Set(
          options.map((option) => option.close_approach_data[0].orbiting_body)
        ),
      ]}
      renderInput={(params) => (
        <TextField {...params} label="Orbital body" variant="outlined" />
      )}
    />
  );
};
export default InputSelect;

InputSelect.propTypes = {
  InputSelect: PropTypes.object.isRequired,
};
