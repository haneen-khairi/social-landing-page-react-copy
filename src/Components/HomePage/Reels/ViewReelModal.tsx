import {
  AspectRatio,
  Modal,
  ModalContent,
  ModalOverlay,
  VStack,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Reel from "../../../entities/Core/Reels";

interface Props {
  isOpen: boolean;
  reel: Reel;
  reels: Reel[];
  onClose: () => void;
}
function ViewReelModal({ isOpen, onClose, reel: r, reels }: Props) {
  const [reel, setReel] = useState<Reel>({
    video: r.video,
    thumbnail: r.thumbnail,
  });
  const handleNext = () => {
    const currentIndex = reels.findIndex((item) => item.video === reel.video);
    if (currentIndex < reels.length - 1) {
      setReel(reels[currentIndex + 1]);
      console.log(reels[currentIndex + 1]);
    } else {
      setReel(reels[0]);
    }
  };
  const handlePrevious = () => {
    const currentIndex = reels.findIndex((item) => item.video === reel.video);
    if (currentIndex > 0) {
      setReel(reels[currentIndex - 1]);
    } else {
      setReel(reels[reels.length - 1]);
    }
  };
  return (
    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="#000000E6" />
      <ModalContent
        rounded="50px"
        dir="rtl"
        fontFamily="Noto Kufi Arabic,cairo"
        w="25%"
        h="70%"
      >
        <VStack align="stretch">
          <AspectRatio ratio={9 / 16}>
            <Box position="relative">
              <Box
                bg="#13C27A66"
                w="50px"
                h="50px"
                position="absolute"
                rounded="full"
                right="2"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                cursor="pointer"
                _hover={{
                  bg: "#13C27A",
                }}
                transition="0.3s"
                onClick={() => handlePrevious()}
              >
                <FaAngleRight />
              </Box>
              <iframe
                id="brightcove-iframe"
                style={{ borderRadius: "24px", width: "100%", height: "100%" }}
                title="reel"
                src={reel.video}
                allowFullScreen
                allow="autoplay"
              ></iframe>
              <Box
                bg="#13C27A66"
                w="50px"
                h="50px"
                position="absolute"
                rounded="full"
                left="2"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                cursor="pointer"
                _hover={{
                  bg: "#13C27A",
                }}
                transition="0.3s"
                onClick={() => handleNext()}
              >
                <FaAngleLeft />
              </Box>
            </Box>
          </AspectRatio>
        </VStack>
      </ModalContent>
    </Modal>
  );
}

export default ViewReelModal;
