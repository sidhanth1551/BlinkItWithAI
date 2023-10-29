import {
  Divider,
  Text,
  Button,
  Flex,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProductPage = () => {
  const noOfImages = [1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1];
  return (
    <Flex h={"80vh"} justifyContent={"center"} alignItems={"center"}>
      <Flex w={"50%"} p={20} flexDirection={"column"}>
        <Image
          h={"480px"}
          w={"480px"}
          src="https://www.bigbasket.com/media/uploads/p/l/40003792_3-amul-cheese-cubes-processed.jpg"
        />
        <Flex mt={7} overflowX={"scroll"}>
          {noOfImages.map((item, index) => {
            return (
              <Button
                variant="outline"
                h={"60px"}
                minW={"90px"}
                key={index}
                p={5}
                m={3}
              >
                <Image
                  h={"40px"}
                  w={"70px"}
                  src="https://www.bigbasket.com/media/uploads/p/l/40003792_3-amul-cheese-cubes-processed.jpg"
                />
              </Button>
            );
          })}
        </Flex>
      </Flex>
      <Divider orientation="vertical" alignSelf="stretch" />
      <Flex w={"50%"} p={35} flexDirection={"column"}>
        <Heading>Product Name</Heading>

        <Divider alignSelf="stretch" />
        <Text fontSize={"14px"} m={3} fontWeight={700} color={"gray.600"}>
          Available Unit
        </Text>
        <Button
          variant="outline"
          w="150px"
          h="60px"
          m={3}
          alignItems="center"
          justifyContent="center"
        >
          <VStack>
            <Text fontSize="14px" fontWeight="bold">
              1Kg
            </Text>
            <Text fontSize="17px" color="gray.600">
              MRP Rs.350/-
            </Text>
          </VStack>
        </Button>

        <Button
          variant={"outline"}
          color={"green"}
          colorScheme={"green"}
          w={20}
          m={3}
          bg={"green.50"}
        >
          ADD
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProductPage;
