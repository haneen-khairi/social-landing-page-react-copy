import { Box } from "@chakra-ui/react";
import { useGetReels } from "../../hooks/useCore";
import { Swiper, SwiperSlide } from "swiper/react";
import ReelItem from "./Reels/ReelItem";
import 'swiper/css/navigation';
import "swiper/css";
import { Navigation } from 'swiper/modules';


export default function Reels() {
  const { data } = useGetReels();

  return (
    <Box p="40px" w="100%">
      <Swiper spaceBetween="40px" slidesPerView={6}
        navigation={true}
        modules={[Navigation]}>
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="slide-reels">
            <ReelItem  reel={item} reels={data}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
