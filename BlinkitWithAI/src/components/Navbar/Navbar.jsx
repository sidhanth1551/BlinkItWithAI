import React from "react";
import {
  Card,
  CardHeader,
  Image,
  HStack,
  CardBody,
  CardFooter,
  Heading,
  Text,
  InputLeftElement,
  InputGroup,
  Flex,
  Input,
  Button,
  Select,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      h={20}
      variant="outline"
      mt={0}
    >
      <Flex w="20%" justifyContent={"space-around"}>
        <Image
          w="140px"
          h="80px"
          p={5}
          objectFit="inherit"
          src="https://cdn1.desidime.com/topics/photos/1414800/original/blinkit-logo-header-05a0b5f.png?1647490076"
          alt="Caffe Latte"
        />
        <Divider orientation="vertical" />
      </Flex>
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        
          <Flex justifyContent={"center"} wrap={"wrap"} mr={10}>
            <Heading size="20px">Deliver in 10 minutes</Heading>
            <Select placeholder="Select option" size="xs" h={4}>
              <option value="option1">Mumbai</option>
              <option value="option2">Delhi</option>
              <option value="option3">Pune</option>
            </Select>
          </Flex>

          <InputGroup>
            <InputLeftElement pointerEvents="none" mt={1}>
              <Search2Icon color="gray.300" />
            </InputLeftElement>
            <Input placeholder="large size" size="lg" w="600px" />
          </InputGroup>
         
        <Button variant="outline" w={'160px'} mr={10}>
         Login
        </Button>

        <Button variant="solid" w={'160px'} colorScheme="green" mr={10}>
         My Cart
        </Button>
      </Flex>
    </Card>
  );
};

export default Navbar;
