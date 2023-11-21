import { Box, HStack, Progress, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  value: string;
  range: string;
}
const ProgressComp = ({ title, value, range }: Props) => {
  return (
    <Box w="100%">
      <HStack justifyContent="space-between" mb="16px">
        <Text fontSize="16px" fontWeight="500">
          {title}
        </Text>
        <Text fontSize="24px" fontWeight="600">
          {value} / {range}
        </Text>
      </HStack>
      <Progress
        value={(Number(value) / Number(range)) * 100}
        colorScheme="green"
        w="100%"
        rounded="full"
      />
    </Box>
  );
};

export default ProgressComp;
