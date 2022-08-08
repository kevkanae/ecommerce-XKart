import { Text, Flex, IconButton, useColorMode, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { BiCart } from "react-icons/bi";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { userLogOut } from "../redux/reducers/AuthUser";
import { useRouter } from "next/router";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Flex
      h="10vh"
      w="100vw"
      px={4}
      direction="row"
      align="center"
      justify="space-between"
      className="nav"
      position={"fixed"}
      top={0}
      zIndex={4}
      backgroundColor={colorMode === "light" ? "white" : "blackk"}
    >
      <Flex
        w="50%"
        align="center"
        justify="space-between"
        className="nav__items"
      >
        <Text fontFamily="Pacifico" fontSize="2xl" textAlign="start">
          X • Kart
        </Text>
      </Flex>
      <Flex
        w={["46%", "35%", "25%", "17%"]}
        align="center"
        justify="space-between"
        className="nav__items"
      >
        {isAuthenticated ? (
          <Button
            onClick={() => {
              dispatch(userLogOut());
            }}
            letterSpacing={1}
            variant="secondary"
          >
            Logout
          </Button>
        ) : (
          <Button
            letterSpacing={1}
            variant="secondary"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        )}

        <IconButton aria-label="Cart" icon={<BiCart />} variant="secondary" />
        <IconButton
          aria-label="Theme Switcher"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          variant="primary"
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
