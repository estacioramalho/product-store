import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ColorModeToggle from "../components/ColorModeToggle";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const navigate = useNavigate();
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const productToSend = {
      ...newProduct,
      price: Number(newProduct.price),
    };
    const { success, message } = await createProduct(productToSend);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
      setTimeout(() => navigate("/"), 1200);
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW="container.sm" py={12} position="relative">
      <ColorModeToggle />
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={{ base: 6, md: 10 }}
        rounded="2xl"
        shadow="2xl"
        mt={10}
      >
        <VStack spacing={8}>
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
          >
            Create New Product
          </Heading>
          <VStack spacing={6} w="full">
            <FormControl isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder="Product Name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                size="lg"
                rounded="lg"
                bg={useColorModeValue("gray.50", "gray.700")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                size="lg"
                rounded="lg"
                bg={useColorModeValue("gray.50", "gray.700")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Image URL</FormLabel>
              <Input
                placeholder="Image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                size="lg"
                rounded="lg"
                bg={useColorModeValue("gray.50", "gray.700")}
              />
            </FormControl>
            <Button
              colorScheme="cyan"
              size="lg"
              w="full"
              rounded="lg"
              shadow="md"
              onClick={handleAddProduct}
              variant="solid"
            >
              Add Product
            </Button>
            <Button
              variant="ghost"
              leftIcon={<Icon as={ArrowBackIcon} />}
              onClick={() => navigate("/")}
              w="full"
            >
              Back to Home
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default CreatePage;
