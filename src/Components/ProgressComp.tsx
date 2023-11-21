import { Box, HStack, Progress, Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  title: string;
  value: string;
  range: string;
  icon?: ReactElement;
}
const ProgressComp = ({ title, value, range, icon }: Props) => {
  return (
    <Box w="100%">
      <VStack align="end">
        <HStack>
          <Text>{icon}</Text>

          <Text fontSize="16px" fontWeight="500">
            {title}
          </Text>
        </HStack>

        <Text fontSize="24px" fontWeight="600">
          {Number(value).toLocaleString()} / {Number(range).toLocaleString()}
        </Text>
      </VStack>
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
