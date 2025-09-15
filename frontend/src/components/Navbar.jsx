import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("whiteAlpha.900", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="nav"
      w="100%"
      bg={navBg}
      px={0}
      py={2}
      shadow="sm"
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={100}
      mb={2}
    >
      <Container maxW="1140px" px={4}>
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          flexDir={{ base: "column", sm: "row" }}
        >
          <Text
            fontSize={{ base: "2xl", sm: "2xl" }}
            fontWeight="extrabold"
            textTransform="uppercase"
            textAlign="center"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            letterSpacing="wider"
            as={Link}
            to="/"
            _hover={{ textDecoration: "none" }}
          >
            Product Store 🛒
          </Text>

          <HStack spacing={2} alignItems="center" mt={{ base: 2, sm: 0 }}>
            <Button
              as={Link}
              to="/create"
              leftIcon={<PlusSquareIcon fontSize={20} />}
              colorScheme="cyan"
              variant="outline"
              size="md"
              _hover={{ bg: "cyan.50" }}
            >
              Add
            </Button>
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
              variant="ghost"
              colorScheme="cyan"
              size="md"
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
export default Navbar;
