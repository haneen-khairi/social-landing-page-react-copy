import { AspectRatio, Box, Image, useDisclosure } from "@chakra-ui/react";
import Reel from "../../../entities/Core/Reels";
import { FaRegCirclePlay } from "react-icons/fa6";
import ViewReelModal from "./ViewReelModal";

interface Props {
  reel: Reel;
  reels: Reel[];
}

const ReelItem = ({ reel, reels }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ViewReelModal
        isOpen={isOpen}
        onClose={onClose}
        reel={reel}
        reels={reels}
      />

      <AspectRatio ratio={9 / 16} onClick={() => onOpen()}>
        <>
          <Image rounded="8px" src={reel.thumbnail} />
          <Box
            position="relative"
            cursor="pointer"
            _hover={{
              ".playIcon": {
                color: "#13C27A",
              },
            }}
          >
            <Box
              position="absolute"
              zIndex={4}
              fontSize="50px"
              color="white"
              className="playIcon"
              transition="0.3s"
            >
              <FaRegCirclePlay />
            </Box>
            <Box
              w="100%"
              h="100%"
              bg="black"
              opacity="0.4"
              position="absolute"
              rounded="8px"
            ></Box>
          </Box>
        </>
      </AspectRatio>
    </>
  );
};

export default ReelItem;
