import React from 'react'
import {
    Card,
    CardHeader,
    Image,
    Stack,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Flex,
    Button,
  } from "@chakra-ui/react";

const ItemCard = () => {
  return (
    <Card h={'280px'} w={'190px'} flexDirection='column'>
       <Image
          p={5}
          objectFit="cover"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/category/cms_images/icon/332_1680269002502.png"
          alt="Caffe Latte"
        />
    <Flex flexDirection='column' justifyContent={'center'} alignItems={'center'}>
       <Text fontSize={'12px'} fontWeight={600}>Cold Drinks & Juices</Text> 
       <Flex justifyContent={'space-between'} alignItems={'center'} mt={2} w="100%">
        <Text fontSize={'13px'} ml={6}>Rs 100/-</Text>
        <Button variant="outline" size={'sm'} color={'green'} mr={5}>ADD</Button>
       </Flex>

    </Flex>
  </Card>
  )
}

export default ItemCard
