import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "native-base";

import bgDesktop from "./assets/bg-intro-desktop.png";
import bgMobile from "./assets/bg-intro-mobile.png";
import StyledInput from "./components/StyledInput";

const App = () => {
  const bg = useBreakpointValue({ base: bgMobile, lg: bgDesktop });

  const { handleSubmit, control } = useForm({
    defaultValues: { firstName: "", lastName: "", email: "", password: "" },
  });

  const onSubmit = () => {};

  return (
    <Box minHeight={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Image
        source={{ uri: bg }}
        resizeMode={"repeat"}
        alt={"background-image"}
        size={"full"}
        top={0}
        right={0}
        left={0}
        bottom={0}
        position={"absolute"}
        bg={"Red"}
      />
      <Stack
        direction={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        w={"full"}
        py={5}
      >
        <VStack
          space={5}
          pl={{ base: 0, lg: 40 }}
          w={{ base: "full", lg: "1/2" }}
          pr={{ base: 0, lg: 10 }}
          alignItems={"center"}
        >
          <Heading
            fontSize={"5xl"}
            color={"white"}
            lineHeight={"xs"}
            textAlign={{ base: "center", lg: "start" }}
          >
            Learn to code by watching others
          </Heading>
          <Text
            fontSize={"md"}
            color={"white"}
            fontWeight={500}
            textAlign={{ base: "center", lg: "start" }}
            mx={{ base: 4, lg: 0 }}
          >
            See how experienced developers solve problems in real-time. Watching scripted tutorials
            is great, but understanding how developers think is invaluable.
          </Text>
        </VStack>
        <Box
          pr={{ base: 0, lg: 40 }}
          w={{ base: "full", lg: "1/2" }}
          mt={{ base: 10, lg: 0 }}
          alignItems={{ base: "center", lg: "flex-start" }}
        >
          <VStack space={7} minW={{ base: "xs", lg: "lg" }} mx={{ base: 4, lg: 0 }}>
            <Button
              bg={"Blue"}
              rounded={"lg"}
              py={4}
              _pressed={{ bg: "Blue", opacity: 0.7 }}
              _hover={{ bg: "Blue", opacity: 0.9 }}
              style={{
                shadowColor: `hsl(249, 10%, 26%)`,
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.3,
                shadowRadius: 0,
              }}
            >
              <Text fontSize={{ base: "xs", sx: "xs", lg: "md" }} color={"white"}>
                <Text fontWeight={700}>Try it free 7 days</Text> then $20/mo. thereafter
              </Text>
            </Button>
            <Card
              rounded={"lg"}
              bg={"white"}
              style={{
                shadowColor: `hsl(249, 10%, 26%)`,
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.3,
                shadowRadius: 0,
              }}
              py={10}
              px={8}
            >
              <VStack space={4}>
                <StyledInput
                  control={control}
                  name={"firstName"}
                  placeholder={"First Name"}
                  rules={{ required: "First Name cannot be empty" }}
                />
                <StyledInput
                  control={control}
                  name={"lastName"}
                  placeholder={"Last Name"}
                  rules={{ required: "Last Name cannot be empty" }}
                />
                <StyledInput
                  control={control}
                  name={"email"}
                  placeholder={"Email Address"}
                  rules={{
                    pattern: {
                      value: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
                      message: "Looks like this is not an email",
                    },
                  }}
                />
                <StyledInput
                  control={control}
                  name={"password"}
                  placeholder={"Password"}
                  rules={{ required: "Password cannot be empty" }}
                />
                <Button
                  bg={"Green"}
                  py={4}
                  _pressed={{ bg: "Green", opacity: 0.7 }}
                  _hover={{ bg: "Green", opacity: 0.9 }}
                  onPress={handleSubmit(onSubmit)}
                >
                  <Text fontWeight={600} color={"white"}>
                    CLAIM YOUR FREE TRIAL
                  </Text>
                </Button>
                <Text fontSize={11} textAlign={"center"}>
                  <Text color={"GrayishBlue"} fontWeight={600}>
                    By clicking the button, you are agreeing to our
                  </Text>{" "}
                  <Link href={"#"} isUnderlined={false} color={"Red"} fontWeight={700}>
                    Terms and Services
                  </Link>
                </Text>
              </VStack>
            </Card>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default App;
