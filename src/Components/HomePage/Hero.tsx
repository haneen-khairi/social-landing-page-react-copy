import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  useDisclosure,

} from "@chakra-ui/react";
import ChartImage from "../../assets/chart.png";
import VolunteerModal from "./Modals/VolunteerModal/VolunteerModal";
import IntrestModal from "./Modals/InterestModal/IntrestModal";
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const {
    isOpen: isVOpen,
    onOpen: onVOpen,
    onClose: onVClose,
  } = useDisclosure();
  const { t } = useTranslation();
  const {
    isOpen: isIOpen,
    onOpen: onIOpen,
    onClose: onIClose,
  } = useDisclosure();
  return (
    <>
      <VolunteerModal isOpen={isVOpen} onClose={onVClose} />
      <IntrestModal isOpen={isIOpen} onClose={onIClose} />
      <Box
        bgImage={`url(${ChartImage})`}
        bgSize="contain"
        bgClip="content-box"
        bgPosition="center"
        bgRepeat="no-repeat"
        px="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontFamily="Alexandria"
      >
        <VStack spacing="40px" py="40px">
          <Text
            fontSize="18px"
            fontWeight="700"
            fontFamily="Readex Pro"
            textAlign="center"
          >
           {t('hero.welcomeText')}
          </Text>
          <Text
            fontSize="30px"
            fontWeight="700"
            w={{ base: "100%", lg: "500px" }}
            textAlign="center"
            lineHeight="51.2px"
          >
             {t('hero.timeForVoice')}
          </Text>
          <Text color="#5AA48A" fontSize="40px" fontWeight="700">
          {t('hero.joinThem')}
          </Text>
          <HStack justifyContent="center" w="100%" spacing="15px">
            <Button
              bg="#194430"
              rounded="full"
              color="white"
              _hover={{ opacity: "0.8" }}
              onClick={() => onIOpen()}
              w="100%"
            fontSize="25px"
            p={3}
            >
                {t('hero.interested')}
            </Button>
            <Button
              bg="#194430"
              color="white"
              rounded="full"
              _hover={{ opacity: "0.8" }}
              onClick={() => onVOpen()}
              w="100%"
              fontSize="25px"
              p={3}
            >
               {t('hero.volunteerNow')}
            </Button>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Hero;
