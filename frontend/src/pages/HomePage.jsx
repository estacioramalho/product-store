import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { PlusSquareIcon } from "@chakra-ui/icons";
import ColorModeToggle from "../components/ColorModeToggle";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.900")}
      position="relative"
    >
      <ColorModeToggle />
      <Box
        bgGradient="linear(to-r, cyan.400, blue.500)"
        py={{ base: 12, md: 20 }}
        mb={10}
        color="white"
        textAlign="center"
        rounded="xl"
        mx={{ base: 2, md: 8 }}
        mt={8}
        shadow="2xl"
      >
        <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="extrabold">
          Welcome to Product Store 🛒
        </Heading>
        <Text fontSize={{ base: "lg", md: "2xl" }} mt={4} opacity={0.9}>
          Discover, create, and manage your products with style!
        </Text>
        <Button
          as={Link}
          to="/create"
          leftIcon={<PlusSquareIcon />}
          colorScheme="cyan"
          variant="solid"
          mt={8}
          size="lg"
          _hover={{ bg: "cyan.600" }}
        >
          Add New Product
        </Button>
      </Box>

      <Container maxW="container.xl" py={8}>
        <VStack spacing={8}>
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            textAlign="center"
          >
            Current Products 🚀
          </Heading>

          {products.length === 0 ? (
            <Flex
              direction="column"
              align="center"
              justify="center"
              w="full"
              minH="200px"
              bg={useColorModeValue("white", "gray.800")}
              rounded="lg"
              shadow="md"
              p={10}
            >
              <Text fontSize="xl" fontWeight="bold" color="gray.500" mb={4}>
                No products found 😢
              </Text>
            </Flex>
          ) : (
            <SimpleGrid
              minChildWidth="300px"
              columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
              spacing={8}
              w="full"
            >
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default HomePage;
