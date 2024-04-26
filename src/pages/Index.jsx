// Complete the Index page component here
// Use chakra-ui
import { Box, VStack, HStack, Text, Input, Button, IconButton, useColorMode, useColorModeValue, Image } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPaperPlane, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <VStack p={4}>
      <HStack w="full" justifyContent="space-between">
        <HStack>
          <Image src="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGF0JTIwYXBwJTIwbG9nb3xlbnwwfHx8fDE3MTQxNjEzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="40px" borderRadius="full" />
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>
            ChatApp
          </Text>
        </HStack>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="lg" alignSelf="flex-start" onClick={toggleColorMode} />
      </HStack>
      <Box bg={bgColor} w="full" h="80vh" p={4} borderRadius="lg" overflowY="scroll">
        {/* Messages will be displayed here */}
        <VStack spacing={4} align="stretch">
          <HStack alignSelf="flex-start">
            <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZXxlbnwwfHx8fDE3MTQxNjEzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="30px" borderRadius="full" />
            <Text bg="blue.100" p={2} borderRadius="lg" color="blue.800">
              Hello, how are you?
            </Text>
          </HStack>
          <HStack alignSelf="flex-end">
            <Text bg="green.100" p={2} borderRadius="lg" color="green.800">
              I'm fine, thanks for asking!
            </Text>
            <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwcHJvZmlsZXxlbnwwfHx8fDE3MTQxNjEzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="30px" borderRadius="full" />
          </HStack>
        </VStack>
      </Box>
      <HStack w="full">
        <Input placeholder="Type a message..." flexGrow={1} />
        <IconButton icon={<FaPaperPlane />} isRound={true} colorScheme="blue" onClick={() => {}} />
      </HStack>
    </VStack>
  );
};

export default Index;
