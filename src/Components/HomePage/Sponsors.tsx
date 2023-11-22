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
      <SectionTitle title="الجهات الداعمة" />

      {!isLoading && (
        <Box>
          <Swiper
            spaceBetween="40px"
            slidesPerView={7}
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
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
