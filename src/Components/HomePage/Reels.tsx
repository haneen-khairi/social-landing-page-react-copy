import { Box } from "@chakra-ui/react";
import { useGetReels } from "../../hooks/useCore";
import { Swiper, SwiperSlide } from "swiper/react";
import ReelItem from "./Reels/ReelItem";

import "swiper/css";

export default function Reels() {
  const { data } = useGetReels();

  return (
    <Box p="40px" w="60%">
      <Swiper spaceBetween="40px" slidesPerView={4}>
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <ReelItem reel={item} reels={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
