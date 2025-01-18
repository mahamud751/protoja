import { Box, Container } from "@mui/material";
import Offer from "../components/home/Offer";
import Top from "../components/home/Top";
import AboutSection from "../components/home/About";
import Faq from "../components/home/Faq";
import Question from "../components/home/Question";
import Company from "../components/home/Company";
import StatsSection from "../components/home/StatsSection";
import ExpandingGallery from "../components/home/Carousel";
import Workspace from "../components/home/Workspace";

export default function Home() {
  return (
    <>
      <Top />
      <Company />
      <Workspace />
      <ExpandingGallery />
      <StatsSection />
      <Box className="w-full mt-20 px-4 sm:px-6 lg:px-16 bg-[#202124] p-16 mb-20">
        <Container>
          <Offer />
          <AboutSection />
          <Faq />
        </Container>
      </Box>

      <Question />
    </>
  );
}
