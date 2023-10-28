import React from "react";
import {
  Card,
  CardHeader,
  Image,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import ItemCard from "../../components/ItemCard/ItemCard";
const LandingPage = () => {
    const arr=[1,2,3,4,5,6,7,8,9,1,2,9]
  return (
    <SimpleGrid spacing={4} mt={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          {arr.map((item, index) => (
              <ItemCard key={index} />
          ))}

      </SimpleGrid>
  );
};

export default LandingPage;
