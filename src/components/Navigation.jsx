import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Link as={NavLink} to="/" exact activeClassName="active" color="white">
          Home
        </Link>
        <Link as={NavLink} to="/trending" activeClassName="active" color="white">
          Trending
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
