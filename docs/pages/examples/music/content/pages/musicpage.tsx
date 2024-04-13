import {
  Box,
  Text,
  ScrollArea,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Image,
  Center,
} from "@yamada-ui/react"
import TitleBlockComponent from "../components/titleblock"

const Musicpage = () => {
  return (
    <ScrollArea h="90vh">
      <Box>
        <TitleBlockComponent
          title="Listen Now"
          outline="Top picks for you. Updated daily."
        />

        <Box p={4} overflowX="scroll" maxW="6xl">
          <Flex gap="4">
            <Card variant="elevated" maxW="xs">
              <CardHeader>
                <Center>
                  <Image
                    src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
                    maxW="xs"
                    alt="CardImage"
                  />
                </Center>
              </CardHeader>
              <CardBody>
                <Flex direction="column">
                  <Text as="b" fontSize="md">
                    YamadaUI
                  </Text>
                  <Text fontSize="sm">Hirotomo Yamada</Text>
                </Flex>
              </CardBody>
            </Card>

            <Card variant="elevated" maxW="xs">
              <CardHeader>
                <Center>
                  <Image
                    src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
                    maxW="xs"
                    alt="CardImage"
                  />
                </Center>
              </CardHeader>
              <CardBody>
                <Flex direction="column">
                  <Text as="b">YamadaUI</Text>
                  <Text>Hirotomo Yamada</Text>
                </Flex>
              </CardBody>
            </Card>

            <Card variant="elevated" maxW="xs">
              <CardHeader>
                <Center>
                  <Image
                    src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
                    maxW="xs"
                    alt="CardImage"
                  />
                </Center>
              </CardHeader>
              <CardBody>
                <Flex direction="column">
                  <Text as="b">YamadaUI</Text>
                  <Text>Hirotomo Yamada</Text>
                </Flex>
              </CardBody>
            </Card>

            <Card variant="elevated" maxW="xs">
              <CardHeader>
                <Center>
                  <Image
                    src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
                    maxW="xs"
                    alt="CardImage"
                  />
                </Center>
              </CardHeader>
              <CardBody>
                <Flex direction="column">
                  <Text as="b">YamadaUI</Text>
                  <Text>Hirotomo Yamada</Text>
                </Flex>
              </CardBody>
            </Card>
          </Flex>
        </Box>
      </Box>

      <Box pt={8}>
        <TitleBlockComponent
          title="Made for You"
          outline="Your personal playlists. Updated daily."
        />

        <Box p={4}>
          <Flex gap="4">
            <Card variant="elevated" maxW="xs">
              <CardHeader>
                <Center>
                  <Image
                    src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
                    size="xs"
                    alt="CardImage"
                  />
                </Center>
              </CardHeader>
              <CardBody>
                <Flex direction="column">
                  <Text as="b">YamadaUI</Text>
                  <Text>Hirotomo Yamada</Text>
                </Flex>
              </CardBody>
            </Card>

            <Card variant="elevated" maxW="xs">
              <CardHeader>
                <Center>
                  <Image
                    src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
                    size="xs"
                    alt="CardImage"
                  />
                </Center>
              </CardHeader>
              <CardBody>
                <Flex direction="column">
                  <Text as="b">YamadaUI</Text>
                  <Text>Hirotomo Yamada</Text>
                </Flex>
              </CardBody>
            </Card>

            <Card variant="elevated" maxW="xs">
              <CardHeader>
                <Center>
                  <Image
                    src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
                    size="xs"
                    alt="CardImage"
                  />
                </Center>
              </CardHeader>
              <CardBody>
                <Flex direction="column">
                  <Text as="b">YamadaUI</Text>
                  <Text>Hirotomo Yamada</Text>
                </Flex>
              </CardBody>
            </Card>

            <Card variant="elevated" maxW="xs">
              <CardHeader>
                <Center>
                  <Image
                    src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
                    size="xs"
                    alt="CardImage"
                  />
                </Center>
              </CardHeader>
              <CardBody>
                <Flex direction="column">
                  <Text as="b">YamadaUI</Text>
                  <Text>Hirotomo Yamada</Text>
                </Flex>
              </CardBody>
            </Card>
          </Flex>
        </Box>
      </Box>
    </ScrollArea>
  )
}

export default Musicpage
