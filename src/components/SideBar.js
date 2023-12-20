import React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import "../styling/sidebar.css";

function SideBar({ handleMaxPrice, handleMinPrice, handleRating }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeRating(newValue);
  };
  const valuetext = (value) => `${value} or more`;

  const changeMinPrice = ({ target }) => {
    handleMinPrice(target.value);
  };

  const changeMaxPrice = ({ target }) => {
    handleMaxPrice(target.value);
  };

  const changeRating = (value) => {
    handleRating(value);
  };

  return (
    <div>
      <div className="price">
        <h2> Filter by:</h2>
        <h3> Price </h3>
        <div className="price-boxes">
          <TextField
            id="outlined-basic"
            label="Min Price"
            variant="outlined"
            onChange={(e) => changeMinPrice(e)}
          />

          <TextField
            style={{ marginLeft: 10 }}
            id="outlined-basic"
            label="Max Price"
            variant="outlined"
            onChange={(e) => changeMaxPrice(e)}
          />
        </div>
      </div>
      <div className="rating-box">
        <h3> Rating </h3>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Rating"
            defaultValue={0}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={5}
            color="secondary"
            value={value}
            onChange={handleChange}
          />
        </Box>
      </div>
    </div>
  );
}

export default SideBar;
