"use client";

import { Typography } from "@mui/material";
import Slider from "./Slider";
import Slider2 from "./Slider2";

const Company = () => {
  return (
    <div className="mt-48 mb-36">
      <Typography
        variant="h6"
        color="initial"
        className="text-center font-semibold"
      >
        UX Design studio Trusted by 200+ Global Brand
      </Typography>

      <Slider />
      <Slider2 />
      <Slider />
    </div>
  );
};

export default Company;
