import React, { useState, useEffect } from 'react';
import { Slider } from "@material-ui/core" ;

const DoubleRangeSlider = ({value, onChange, min, max}) => {
  const updateRange = (e, data) => {
  onChange(data)
  };
  return (
  <>
    <div>
      <Slider style={{color: "#2A2A2A"}} value={[value.min,value.max]} onChange={updateRange} min={min} max={max}/>
    </div>
  </>
  );
}
 
export default DoubleRangeSlider;