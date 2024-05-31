import { VStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Link as={NavLink} to="/" exact activeClassName="active" color="white">
        Home
      </Link>
      <Link as={NavLink} to="/trending" activeClassName="active" color="white">
        Trending
      </Link>
      <Link as={NavLink} to="/notes" activeClassName="active" color="white">
        Notes
      </Link>
    </VStack>
  );
};

export default Navigation;
