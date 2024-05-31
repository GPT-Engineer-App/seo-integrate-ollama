import { Box } from "@chakra-ui/react";
import Navigation from "./Navigation.jsx";

const Sidebar = () => {
  return (
    <Box bg="red.800" width="250px" p={4} height="100vh" position="fixed">
      <Navigation />
    </Box>
  );
};

export default Sidebar;
