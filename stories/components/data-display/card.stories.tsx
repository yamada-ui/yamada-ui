import type { Meta, StoryFn } from "@storybook/react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Grid,
  Button,
  Image,
  VStack,
} from "@yamada-ui/react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Card>

const meta: Meta<typeof Card> = {
  title: "Components / Data Display / Card",
  component: Card,
}

export default meta

export const basic: Story = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
      </CardHeader>

      <CardBody>
        <Text>
          『SLAM
          DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
        </Text>
      </CardBody>
    </Card>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Card size="sm">
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>
      </Card>

      <Card size="md">
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>
      </Card>

      <Card size="normal">
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>
      </Card>

      <Card size="lg">
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>
      </Card>
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Card variant="elevated">
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>
      </Card>

      <Card variant="outline">
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>
      </Card>

      <Card variant="subtle">
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>
      </Card>

      <Card variant="solid">
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>
      </Card>

      <Card variant="unstyled">
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>
      </Card>
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Subtle</Heading>

      <Grid w="full" templateColumns="repeat(4, 1fr)" gap="md">
        {colorSchemes.map((colorScheme) => (
          <Card key={colorScheme} variant="subtle" colorScheme={colorScheme}>
            <CardHeader>
              <Heading size="md">{colorScheme}</Heading>
            </CardHeader>
            <CardBody>
              <Text>ColorScheme is {colorScheme}</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>

      <Heading size="xl">Solid</Heading>

      <Grid w="full" templateColumns="repeat(4, 1fr)" gap="md">
        {colorSchemes.map((colorScheme) => (
          <Card key={colorScheme} variant="solid" colorScheme={colorScheme}>
            <CardHeader>
              <Heading size="md">{colorScheme}</Heading>
            </CardHeader>
            <CardBody>
              <Text>ColorScheme is {colorScheme}</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </>
  )
}

export const withImage: Story = () => {
  return (
    <Card maxW="md">
      <CardHeader justifyContent="center">
        <Image
          src="https://slamdunk-movie.jp/files/images/p_gallery_03.jpg"
          w="full"
          rounded="md"
          alt="SLAM DUNK"
        />
      </CardHeader>

      <CardBody>
        <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>

        <Text>
          『SLAM
          DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
        </Text>
      </CardBody>

      <CardFooter>
        <Button colorScheme="primary">Wikipedia</Button>
      </CardFooter>
    </Card>
  )
}

export const horizonCard: Story = () => {
  return (
    <Card
      direction={{ base: "row", md: "column" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        src="https://slamdunk-movie.jp/files/images/p_gallery_03.jpg"
        objectFit="cover"
        maxW={{ base: "30%", md: "100%" }}
        alt="SLAM DUNK"
      />

      <VStack gap="0">
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </VStack>
    </Card>
  )
}

export const multiCards: Story = () => {
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(320px, 1fr))" gap="md">
      <Card>
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="md">『SLAM DUNK』（スラムダンク）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </Card>
    </Grid>
  )
}
