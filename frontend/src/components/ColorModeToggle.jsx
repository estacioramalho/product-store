import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box position="fixed" bottom={8} left={8} zIndex={200}>
      <IconButton
        aria-label="Toggle color mode"
        icon={
          colorMode === "light" ? (
            <IoMoon size={22} />
          ) : (
            <LuSun size={22} color="white" />
          )
        }
        onClick={toggleColorMode}
        bg={bgColor}
        border="1px solid"
        borderColor={borderColor}
        _hover={{
          bg: useColorModeValue("gray.100", "gray.600"),
        }}
        size="lg"
        rounded="full"
        shadow="md"
      />
    </Box>
  );
};

export default ColorModeToggle;
