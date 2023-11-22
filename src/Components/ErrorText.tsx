import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ErrorText = ({ children }: Props) => {
  return (
    <Text color="#FF5050" mt="10px" fontFamily="Readex Pro" fontSize="10px">
      {children}
    </Text>
  );
};

export default ErrorText;
