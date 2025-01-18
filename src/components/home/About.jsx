import Image from "next/image";
import { Typography, Box, Grid2 as Grid } from "@mui/material";
const AboutSection = () => {
  return (
    <Box className="mt-60">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5, lg: 5 }}>
          <Image
            src="/assets/about.png"
            alt="About Us"
            width={400}
            height={300}
            className="rounded-xl shadow-md"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 7, lg: 7 }}>
          <Typography
            variant="h4"
            className="font-semibold mb-10 text-[#B7B7B7] text-6xl"
          >
            Innovative Design, Transforming Businesses
          </Typography>
          <Typography
            variant="body1"
            className="font-normal mb-10 text-[#DEDEDC] text-[18.594px] leading-[30px]"
          >
            Welcome to Protoja, where creativity meets strategy! We are a team
            of passionate UI/UX designers and branding experts dedicated to
            crafting intuitive, user-centered digital experiences that drive
            results. With years of expertise, we’ve perfected the art of
            designing interfaces and brands that are not only visually stunning
            but also highly functional. Whether you’re a startup or an
            established business, our mission is to reshape your digital
            presence and empower your growth through innovative design
            solutions.
          </Typography>
          <Typography
            variant="body1"
            className="font-normal mb-10 text-[#DEDEDC] text-[18.594px] leading-[30px]"
          >
            Let’s create something extraordinary together.
          </Typography>
          <button className="w-[140px] p-2 rounded-full bg-[#F76F00] text-black">
            More About us
          </button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
