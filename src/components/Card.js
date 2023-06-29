import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align="start"
      spacing={4}
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      width="300px"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />

      <VStack align="start" spacing={2}>
        <Heading as="h3" size="md">
          {title}
        </Heading>

        <Text>{description}</Text>
      </VStack>

      <HStack justifyContent="flex-end">
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>
  );
};

export default Card;

