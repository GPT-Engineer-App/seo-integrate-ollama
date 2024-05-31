import React from "react";
import { Box, Textarea, Heading } from "@chakra-ui/react";

function Notes() {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Notes
      </Heading>
      <Textarea placeholder="Write your notes here..." size="lg" />
    </Box>
  );
}

export default Notes;
