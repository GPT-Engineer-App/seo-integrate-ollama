import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Trending from "./pages/Trending.jsx";
import Notes from "./pages/Notes.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Flex>
        <Sidebar />
        <Box flex="1" bg="gray.800" color="white" p={4}>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
