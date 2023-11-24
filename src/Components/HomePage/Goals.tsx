import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import {
  BusinessShip,
  Campaign,
  Congnition,
  FamilyHome,
  Globe,
  PartnerExchange,
  Storage,
  SubTitle,
} from "../../assets/icons";
import { useTranslation } from 'react-i18next';

function Goals() {
  const { t } = useTranslation();
  const createGoal = (description: string, icon: React.ReactNode) => ({ description, icon });

  const goals = [
    createGoal(t('goal.text1'), <Campaign />),
    createGoal(t('goal.text2'), <FamilyHome />),
    createGoal(t('goal.text3'), <PartnerExchange />),
    createGoal(t('goal.text4'), <SubTitle />),
    createGoal(t('goal.text5'), <Storage />),
    createGoal(t('goal.text6'), <BusinessShip />),
    createGoal(t('goal.text7'), <Congnition />),
    createGoal(t('goal.text8'), <Globe />),
    
  ];
  return (
    <Box px={{ base: "40px", lg: "80px" }} py="30px" id="goals">
      <SectionTitle title={t('navbar.goals')} />
      <VStack spacing={{ base: "50px", lg: "24px" }} align="stretch">
        {goals.map((item, index) => (
          <HStack
          className="stack-hover"
            spacing="24px"
            key={index}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              bg="primary"
              w="120px"
              h="120px"
              rounded="4px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              className="icon-hover"
            >
              {item.icon}
            </Box>
            <Box
              bg="#F3F3F3"
              p="24px"
              h={{ base: "100%", lg: "120px" }}
              display="flex"
              justifyContent="start"
              alignItems="center"
              rounded="4px"
              w="100%"
            >
              <Text fontSize="20px" fontWeight="400" fontFamily="Readex Pro">
                {item.description}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

export default Goals;
