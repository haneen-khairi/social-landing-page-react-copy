import { Box, HStack, Progress, Text, VStack } from "@chakra-ui/react";
import { useCountryIntrest } from "../../hooks/useCore";

const Statistics = () => {
  const { data, isLoading } = useCountryIntrest();

  return (
    <Box p="80px">
      <Text fontFamily="Alexandria" fontSize="35px" mb="20px" fontWeight="500">
        عدد المهتمين حسب الدول ({data?.data.total_interests_count})
      </Text>
      <VStack spacing="10px" align="stretch">
        {!isLoading &&
          data?.data.countries?.map(
            (item, index) =>
              item.interests_count && (
                <Box key={index}>
                  <HStack spacing="2px" mb="5px" fontFamily="Alexandria">
                    <Text>{item.name}</Text>
                    <Text>({item.interests_count})</Text>
                  </HStack>

                  <Progress
                    value={item.interests_count}
                    max={data.data.total_interests_count}
                    height="35px"
                    rounded="lg"
                    colorScheme="green"
                  />
                </Box>
              )
          )}
      </VStack>
    </Box>
  );
};

export default Statistics;
