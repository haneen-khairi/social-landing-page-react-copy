import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
}
const SectionTitle = ({ title }: Props) => {
  return (
    <VStack align="center">
      <Box
        fontSize="32px"
        fontWeight="500"
        w="fit-content"
        mb="40px"
        fontFamily="Alexandria"
      >
        <HStack>
          <Text fontWeight="500"> {title}</Text>
        </HStack>
        <Divider
          border="4px solid #205F45"
          opacity="1"
          rounded="full"
          mt="5px"
        />
      </Box>
    </VStack>
  );
};

export default SectionTitle;
