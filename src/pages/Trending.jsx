import { useState, useEffect } from "react";
import { Container, VStack, Text, Box, Spinner, useToast, Input, Button } from "@chakra-ui/react";

const Trending = () => {
  const [loading, setLoading] = useState(false);
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const toast = useToast();

  useEffect(() => {
    const fetchTrendingTopics = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.ollama.com/trending", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch trending topics: ${errorText}`);
        }
        const data = await response.json();
        setTrendingTopics(data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingTopics();
  }, [toast]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Trending Topics</Text>
        <Input placeholder="Search trending topics" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <Button
          onClick={() => {
            const filteredTopics = trendingTopics.filter((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase()));
            setTrendingTopics(filteredTopics);
          }}
        >
          Search
        </Button>
        {loading && <Spinner />}
        {!loading && trendingTopics.length > 0 && (
          <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
            <Text fontSize="lg" fontWeight="bold">
              Trending:
            </Text>
            <ul>
              {trendingTopics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Trending;
