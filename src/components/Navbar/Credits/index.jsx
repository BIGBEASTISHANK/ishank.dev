import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  useDisclosure,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Credits() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modeBtnBg = useColorModeValue("white", "dark");
  const modeBtnClr = useColorModeValue("dark", "white");
  const modeBtnBgHov = useColorModeValue("dark", "white");
  const modeBtnClrHov = useColorModeValue("white", "dark");

  return (
    <>
      <Text
        id={"nav-item"}
        fontSize={{ xl: "18px", md: "15px" }}
        color={"light"}
        ml={{ md: "2.5px", base: "0px" }}
        mr={"2.5px"}
        pl={"10px"}
        pr={"10px"}
        _hover={{ bg: "#D51B90", borderRadius: "25px" }}
        onClick={onOpen}
        cursor={"pointer"}
      >
        Credits
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent ml="19px" mr="19px" bg="transparent">
          <ModalHeader
            className="credit-header"
            fontSize={"29px"}
            fontWeight={"1000"}
            p="12px"
            borderTopRadius={"20px"}
            color={"white"}
          >
            Credit
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            bg="#1A202C"
            pt={7}
            pb={7}
            fontSize={{ lg: "20px", md: "18px", sm: "16px", base: "13px" }}
            fontWeight="700"
            borderBottomRadius={"20px"}
          >
            <Accordion allowToggle>
              <AccordionItem mb={5}>
                <h1 className="c-item-header">
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontWeight={"1000"}
                      fontSize={{ md: "25px", sm: "19px", base: "15px" }}
                      color={"white"}
                    >
                      Tanmay Sinha
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h1>
                <AccordionPanel
                  className="c-item-content"
                  pb={4}
                  borderBottomRadius={"20px"}
                  color={"white"}
                >
                  You see this guy, number one... CSS expert guy, CSS expert guy
                  🤣. He helped me in making this website animations and
                  designs. A huge shout out to him. I request you all to check
                  his developer profile if youu have any CSS work he is a
                  freelancer so he can help you 😃
                  <Text userSelect={"none"}>
                    <br />
                  </Text>
                  <Button
                    bg={modeBtnBg}
                    _hover={{ bg: modeBtnBgHov, color: modeBtnClrHov }}
                    borderRadius={"full"}
                    color={modeBtnClr}
                  >
                    <a
                      href="https://github.com/tanmaysinha14/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Dev Profile
                    </a>
                  </Button>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h1 className="c-item-header">
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontWeight={"1000"}
                      fontSize={{ md: "25px", sm: "19px", base: "15px" }}
                      color={"white"}
                    >
                      Kushagra Raj
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h1>
                <AccordionPanel
                  className="c-item-content"
                  pb={4}
                  borderBottomRadius={"20px"}
                  color={"white"}
                >
                  His nickname is Bruce Mac Gary. He is the person who helped in
                  my web development career, he introduced me to GitHub,
                  Javacript, React, Next.js and many more thing he is a great
                  guy. Surely check his profile 😃
                  <Text userSelect={"none"}>
                    <br />
                  </Text>
                  <Button
                    bg={modeBtnBg}
                    _hover={{ bg: modeBtnBgHov, color: modeBtnClrHov }}
                    borderRadius={"full"}
                    color={modeBtnClr}
                  >
                    <a
                      href="https://github.com/BruceMacGary/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Dev Profile
                    </a>
                  </Button>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
