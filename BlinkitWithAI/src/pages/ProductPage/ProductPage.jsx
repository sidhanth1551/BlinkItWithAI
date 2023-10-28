import { Divider, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const ProductPage = () => {
  const noOfImages = [1, 2, 3, 4, 5];
  return (
    <Flex h={"80vh"} justifyContent={"center"} alignItems={"center"}>
      <Flex w={"50%"} p={20} flexDirection={"column"}>
        <Image
          h={"480px"}
          w={"480px"}
          src="https://www.bigbasket.com/media/uploads/p/l/40003792_3-amul-cheese-cubes-processed.jpg"
        />
        <Flex mt={7}>
          {noOfImages.map((item, index) => {
            return (
              <Button
                variant="outline"
                h={"60px"}
                w={"90px"}
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
      <Flex w={"50%"}>
        <Heading>Product Name</Heading>
      </Flex>
    </Flex>
  );
};

export default ProductPage;
