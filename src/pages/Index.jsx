import { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, Spinner, useToast, IconButton, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("");
  const [temperature, setTemperature] = useState(30);
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState(null);
  const toast = useToast();

  const handleSearch = async () => {
    if (!query) {
      toast({
        title: "Error",
        description: "Please enter a search query.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    setResults(null);

    try {
      const response = await fetch("https://api.ollama.com/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch results");
      }

      const data = await response.json();
      setResults(data);
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

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">SEO Interface with Ollama Integration</Text>
        <Input placeholder="Enter your search query" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Select placeholder="Select AI Model" onChange={(e) => setModel(e.target.value)}>
          <option value="model1">Model 1</option>
          <option value="model2">Model 2</option>
        </Select>
        <Slider defaultValue={30} min={0} max={100} step={1} onChange={(val) => setTemperature(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Input placeholder="Enter prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <Select placeholder="Select AI Model" onChange={(e) => setModel(e.target.value)}>
          <option value="model1">Model 1</option>
          <option value="model2">Model 2</option>
        </Select>
        <Slider defaultValue={30} min={0} max={100} step={1} onChange={(val) => setTemperature(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Input placeholder="Enter prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handleSearch} isLoading={loading}>
          Search
        </Button>
        {loading && <Spinner />}
        {results && (
          <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
            <Text fontSize="lg" fontWeight="bold">
              Results:
            </Text>
            <pre>{JSON.stringify(results, null, 2)}</pre>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
