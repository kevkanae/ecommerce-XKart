import { useNavigate } from "react-router-dom";
import Img from "../../assets/auth/landing.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box w="full" position="relative" bg={"bg.main"} h="100vh">
        <Flex
          h={"100vh"}
          justifyContent="space-between"
          alignItems={"center"}
          gap="2rem"
        >
          <Box
            pb={"5rem"}
            alignSelf={"flex-end"}
            w={"40%"}
            color="white"
            pl="10"
          >
            <Text fontSize={"2rem"} fontWeight="900">
              Get all your dressing needs at one stop
            </Text>
            <Box pt={7}>
              <Text lineHeight={"6rem"} fontSize={"6rem"} fontWeight="900">
                SHOP
              </Text>
              <Text
                display={"inline-block"}
                lineHeight={"4.6875rem"}
                bg={"button"}
                fontSize={"6rem"}
                color="black"
                fontWeight="900"
              >
                NOW
              </Text>
            </Box>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
              mt={2}
              onClick={() => navigate("/home")}
            >
              Take me there
            </Button>
          </Box>
          <Flex justifyContent={"flex-end"} alignSelf={"flex-end"} w={"60%"}>
            <Image w="90%" src={Img} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Landing;
