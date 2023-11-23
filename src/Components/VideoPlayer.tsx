import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa6";

interface Props {
  url?: string;
  name?: string;
  thumbnail?: string;
}

const VideoPlayer: React.FC<Props> = ({ url, name, thumbnail }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  const renderThumbnail = () => (
    <Box
      bgImage={`url(${thumbnail})`}
      bgSize="cover"
      w="100%"
      h="100%"
      objectFit="cover"
      rounded="8px"
      position="relative"
      display={isPlaying ? "none" : "flex"}
      justifyContent="center"
      alignItems="center"
      onClick={handleThumbnailClick}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Box
          className="circle"
          w="64px"
          h="64px"
          bg="white"
          rounded="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="primary"
          cursor="pointer"
        >
          <FaPlay className="icon" />
        </Box>
      </Box>
    </Box>
  );

  const renderVideoIframe = () => (
    <Box
      bg="black"
      w="100%"
      h="100%"
      rounded="24px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
    >
      <iframe
        id="brightcove-iframe"
        style={{ borderRadius: "24px" }}
        width="100%"
        height="100%"
        title={name}
        src={url}
        allowFullScreen
        allow="autoplay" 
      />
    </Box>
  );

  return isPlaying ? (
    renderVideoIframe()
  ) : url?.split("/")[4]?.split("?")[0] !== "null" ? (
    renderThumbnail()
  ) : (
    <Box
      bgImage={`url(${thumbnail})`}
      bgSize="cover"
      w="100%"
      h="100%"
      objectFit="cover"
      rounded="24px"
      position="relative"
      display={isPlaying ? "none" : "flex"}
      justifyContent="center"
      alignItems="center"
      cursor="auto"
      
    ></Box>
  );
};

export default VideoPlayer;
