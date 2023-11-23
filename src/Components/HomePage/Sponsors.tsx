import { Box, Image } from "@chakra-ui/react";
import { useGetSponsors } from "../../hooks/useCore";
import SectionTitle from "../SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Sponsors = () => {
  const { data, isLoading } = useGetSponsors();

  return (
    <Box fontFamily="Noto Kufi Arabic" pt="64px" id="sponsors">
      <SectionTitle title="الداعمون الإعلاميون" />

      {!isLoading && (
        <Box>
          <Swiper
            spaceBetween={40}
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 7,
                spaceBetween: 40,
              },
            }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <Image src={item.icon_url} w="142px" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
      {/* {isLoading && <LoadingCircle />}  */}
    </Box>
  );
};

export default Sponsors;
