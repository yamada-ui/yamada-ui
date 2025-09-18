import type { ThemeToken } from "@yamada-ui/react"
import {
  Box,
  Center,
  COLOR_SCHEMES,
  Container,
  DEFAULT_COLOR_SCHEMES,
  theme as defaultTheme,
  For,
  Grid,
  Heading,
  isSize,
  SEMANTIC_COLOR_SCHEMES,
  Text,
  TONES,
  toTitleCase,
  VStack,
} from "@yamada-ui/react"
import { Fragment } from "react"

export interface TokensPreviewProps {
  token: ThemeToken
  fractional?: boolean
  semantic?: boolean
}

export function TokensPreview({
  fractional,
  semantic,
  token,
}: TokensPreviewProps) {
  switch (token) {
    case "aspectRatios": {
      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="repeat(auto-fill, minmax({sizes.2xs}, 1fr))"
          >
            <For each={Object.keys(defaultTheme.aspectRatios)}>
              {(token, index) => (
                <Center
                  key={index}
                  aspectRatio={token}
                  bg="bg"
                  borderColor="border.subtle"
                  borderWidth="1px"
                  flexDirection="column"
                  rounded="l2"
                >
                  <Text color="fg.muted" fontSize="sm">
                    {token}
                  </Text>
                </Center>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "blurs": {
      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="repeat(auto-fill, minmax({sizes.2xs}, 1fr))"
          >
            <For each={Object.keys(defaultTheme.blurs)}>
              {(token, index) => (
                <Center
                  key={index}
                  aspectRatio={1}
                  bg="bg"
                  bgImage="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90"
                  bgSize="cover"
                  borderColor="border.subtle"
                  borderWidth="1px"
                  overflow="hidden"
                  rounded="l2"
                >
                  <Center
                    backdropBlur={token}
                    boxSize="full"
                    flexDirection="column"
                  >
                    <Text color="white" fontSize="sm">
                      {token}
                    </Text>
                  </Center>
                </Center>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "borders": {
      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="auto 1fr"
          >
            <For each={Object.keys(defaultTheme.borders)}>
              {(token, index) => (
                <Fragment key={index}>
                  <Text color="fg.muted" fontSize="sm">
                    {token}
                  </Text>
                  <Box borderTop={token} />
                </Fragment>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "durations": {
      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))"
          >
            <For each={Object.keys(defaultTheme.durations)}>
              {(token, index) => (
                <VStack key={index} alignItems="center">
                  <Center aspectRatio={1} w="full">
                    <Box
                      animationDirection="alternate"
                      animationDuration={token}
                      animationIterationCount="infinite"
                      animationName="spin"
                      animationTimingFunction="ease-in-out"
                      bg="green"
                      h="1"
                      w="full"
                    />
                  </Center>

                  <Text color="fg.muted" fontSize="sm">
                    {token}
                  </Text>
                </VStack>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "easings": {
      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="auto 1fr"
          >
            <For each={Object.keys(defaultTheme.easings)}>
              {(token, index) => (
                <Fragment key={index}>
                  <Text color="fg.muted" fontSize="sm">
                    {token}
                  </Text>
                  <Box h="10" position="relative">
                    <Box
                      css={{
                        "--animation-from-x": "0%",
                        "--animation-to-x": "calc(100% - {spaces.10})",
                      }}
                      animationDirection="alternate"
                      animationDuration="1s"
                      animationIterationCount="infinite"
                      animationName="position"
                      animationTimingFunction={token}
                      bg="green"
                      boxSize="10"
                      position="absolute"
                      rounded="l2"
                    />
                  </Box>
                </Fragment>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "fonts": {
      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="auto 1fr"
          >
            <For each={Object.keys(defaultTheme.fonts)}>
              {(token, index) => (
                <Fragment key={index}>
                  <Text color="fg.muted" fontSize="sm">
                    {token}
                  </Text>
                  <Text fontFamily={token} fontSize="2xl">
                    Ag
                  </Text>
                </Fragment>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "fontSizes": {
      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="auto 1fr"
          >
            <For each={Object.keys(defaultTheme.fontSizes)}>
              {(token, index) => (
                <Fragment key={index}>
                  <Text color="fg.muted" fontSize="sm">
                    {token}
                  </Text>
                  <Text fontSize={token}>Ag</Text>
                </Fragment>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "fontWeights": {
      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="auto 1fr"
          >
            <For each={Object.keys(defaultTheme.fontWeights)}>
              {(token, index) => (
                <Fragment key={index}>
                  <Text color="fg.muted" fontSize="sm">
                    {token}
                  </Text>
                  <Text fontSize="2xl" fontWeight={token}>
                    Ag
                  </Text>
                </Fragment>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "lineHeights": {
      return (
        <Container.Root my="lg">
          <Container.Body gap="lg">
            <For each={Object.keys(defaultTheme.lineHeights)}>
              {(token, index) => (
                <VStack key={index} gap="xs">
                  <Text color="fg.muted" fontSize="sm">
                    {token}
                  </Text>

                  <Text fontSize="sm" lineHeight={token}>
                    『ドラゴンボール』（DRAGON
                    BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                  </Text>
                </VStack>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "letterSpacings": {
      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="auto 1fr"
          >
            <For each={Object.keys(defaultTheme.letterSpacings)}>
              {(token, index) => (
                <Fragment key={index}>
                  <Text color="fg.muted" fontSize="sm">
                    {token}
                  </Text>
                  <Text fontSize="2xl" letterSpacing={token}>
                    Hirotomo Yamada
                  </Text>
                </Fragment>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "shadows": {
      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))"
          >
            <For each={Object.entries(defaultTheme.shadows)}>
              {([token], index) => (
                <Center
                  key={index}
                  aspectRatio={1}
                  bg="bg"
                  borderColor="border.subtle"
                  borderWidth="1px"
                  boxShadow={token}
                  flexDirection="column"
                  rounded="l2"
                >
                  <Text color="fg.muted" fontSize="sm">
                    {token}
                  </Text>
                </Center>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "radii": {
      const tokens = semantic
        ? defaultTheme.semanticTokens.radii
        : defaultTheme.radii

      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))"
          >
            <For each={Object.keys(tokens)}>
              {(token, index) => (
                <Center
                  key={index}
                  aspectRatio={1}
                  bg="bg"
                  borderColor="border.subtle"
                  borderWidth="1px"
                  flexDirection="column"
                  rounded={token}
                >
                  <Text color="fg.muted" fontSize="sm">
                    {token}
                  </Text>
                </Center>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "spaces": {
      if (semantic) {
        return (
          <Container.Root my="lg">
            <Container.Body
              alignItems="center"
              display="grid"
              gapX="lg"
              gapY={{ base: "md", sm: "sm" }}
              gridTemplateColumns="auto 1fr"
            >
              <For each={Object.entries(defaultTheme.semanticTokens.spaces)}>
                {([token, value], index) => (
                  <Fragment key={index}>
                    <Text color="fg.muted" fontSize="sm" lineHeight="1">
                      {token}
                    </Text>
                    <Box bg="green" h="4" maxW="full" rounded="l1" w={value} />
                  </Fragment>
                )}
              </For>
            </Container.Body>
          </Container.Root>
        )
      } else {
        return (
          <Container.Root my="lg">
            <Container.Body
              alignItems="center"
              display="grid"
              gapX="lg"
              gapY={{ base: "md", sm: "sm" }}
              gridTemplateColumns="auto 1fr"
            >
              <For
                each={Object.keys(defaultTheme.spaces)
                  .filter((key) => !isNaN(Number(key)))
                  .sort((a, b) => parseInt(a) - parseInt(b))}
              >
                {(token, index) => (
                  <Fragment key={index}>
                    <Text color="fg.muted" fontSize="sm" lineHeight="1">
                      {token}
                    </Text>
                    <Box bg="green" h="4" maxW={token} rounded="l1" />
                  </Fragment>
                )}
              </For>
            </Container.Body>
          </Container.Root>
        )
      }
    }

    case "sizes": {
      const tokens = semantic
        ? fractional
          ? Object.entries(defaultTheme.semanticTokens.sizes).filter(([key]) =>
              key.includes("/"),
            )
          : Object.entries(defaultTheme.semanticTokens.sizes).filter(([key]) =>
              isSize(key),
            )
        : Object.entries(defaultTheme.sizes)
            .filter(([key]) => !isNaN(Number(key)))
            .sort(([a], [b]) => parseInt(a) - parseInt(b))

      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gapX="lg"
            gapY={{ base: "md", sm: "sm" }}
            gridTemplateColumns="auto 1fr"
          >
            <For each={tokens}>
              {([token], index) => (
                <Fragment key={index}>
                  <Text color="fg.muted" fontSize="sm" lineHeight="1">
                    {token}
                  </Text>
                  <Box bg="green" h="4" maxW={token} rounded="l1" />
                </Fragment>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    case "colors": {
      if (semantic) {
        return (
          <VStack my="lg">
            <Container.Root>
              <Container.Body
                alignItems="center"
                display="grid"
                gapX="md"
                gapY={{ base: "sm", sm: "xs" }}
                gridTemplateColumns="auto 1fr"
              >
                <For each={SEMANTIC_COLOR_SCHEMES}>
                  {(token, index) => (
                    <Fragment key={index}>
                      <Text color="fg.muted" fontSize="sm" lineHeight="1">
                        {token}
                      </Text>

                      <Grid
                        gap={{ base: "sm", sm: "xs" }}
                        templateColumns={`repeat(${TONES.length}, 1fr)`}
                      >
                        {TONES.map((tone, index) => (
                          <Box
                            key={index}
                            bg={`${token}.${tone}`}
                            h={{ base: "10", sm: "6" }}
                            rounded={{ base: "l2", sm: "l1" }}
                            w="full"
                          />
                        ))}
                      </Grid>
                    </Fragment>
                  )}
                </For>
              </Container.Body>
            </Container.Root>

            <Container.Root>
              <Container.Header>
                <Heading as="h3" size="2xl">
                  Background
                </Heading>
              </Container.Header>

              <Container.Body
                display="grid"
                gap="md"
                gridTemplateColumns={{
                  base: "repeat(4, 1fr)",
                  sm: "repeat(2, 1fr)",
                }}
              >
                <For
                  each={[
                    "",
                    "subtle",
                    "overlay",
                    "ghost",
                    "muted",
                    "emphasized",
                    "contrast",
                    "panel",
                    "float",
                    "info",
                    "success",
                    "warning",
                    "error",
                  ]}
                >
                  {(value, index) => (
                    <Grid key={index} gap="xs">
                      <Box
                        bg={value ? `bg.${value}` : "bg"}
                        borderColor="border.muted"
                        borderWidth="1px"
                        h="24"
                        rounded="l2"
                        w="full"
                      />

                      <Text
                        color="fg.muted"
                        fontSize="sm"
                        lineClamp={1}
                        textAlign="center"
                      >
                        {value ? `bg.${value}` : "bg"}
                      </Text>
                    </Grid>
                  )}
                </For>
              </Container.Body>
            </Container.Root>

            <Container.Root>
              <Container.Header>
                <Heading as="h3" size="2xl">
                  Foreground
                </Heading>
              </Container.Header>

              <Container.Body
                display="grid"
                gap="md"
                gridTemplateColumns={{
                  base: "repeat(4, 1fr)",
                  sm: "repeat(2, 1fr)",
                }}
              >
                <For
                  each={[
                    "",
                    "subtle",
                    "muted",
                    "emphasized",
                    "contrast",
                    "info",
                    "success",
                    "warning",
                    "error",
                  ]}
                >
                  {(value, index) => (
                    <Grid key={index} gap="xs">
                      <Center
                        bg={value === "contrast" ? "bg.contrast" : "bg"}
                        borderColor="border.muted"
                        borderWidth="1px"
                        h="24"
                        rounded="l2"
                        w="full"
                      >
                        <Text color={value ? `fg.${value}` : "fg"}>Ag</Text>
                      </Center>

                      <Text
                        color="fg.muted"
                        fontSize="sm"
                        lineClamp={1}
                        textAlign="center"
                      >
                        {value ? `fg.${value}` : "fg"}
                      </Text>
                    </Grid>
                  )}
                </For>
              </Container.Body>
            </Container.Root>

            <Container.Root>
              <Container.Header>
                <Heading as="h3" size="2xl">
                  Border
                </Heading>
              </Container.Header>

              <Container.Body
                display="grid"
                gap="md"
                gridTemplateColumns={{
                  base: "repeat(4, 1fr)",
                  sm: "repeat(2, 1fr)",
                }}
              >
                <For
                  each={[
                    "",
                    "subtle",
                    "muted",
                    "emphasized",
                    "contrast",
                    "info",
                    "success",
                    "warning",
                    "error",
                  ]}
                >
                  {(value, index) => (
                    <Grid key={index} gap="xs">
                      <Box
                        bg="bg"
                        borderColor={value ? `border.${value}` : "border"}
                        borderWidth="3px"
                        h="24"
                        rounded="l2"
                        w="full"
                      />

                      <Text
                        color="fg.muted"
                        fontSize="sm"
                        lineClamp={1}
                        textAlign="center"
                      >
                        {value ? `border.${value}` : "border"}
                      </Text>
                    </Grid>
                  )}
                </For>
              </Container.Body>
            </Container.Root>

            <For each={COLOR_SCHEMES}>
              {(token, index) => (
                <Container.Root key={index}>
                  <Container.Header>
                    <Heading as="h3" size="2xl">
                      {toTitleCase(token)}
                    </Heading>
                  </Container.Header>

                  <Container.Body
                    display="grid"
                    gap="md"
                    gridTemplateColumns={{
                      base: "repeat(4, 1fr)",
                      sm: "repeat(2, 1fr)",
                    }}
                  >
                    <For
                      each={[
                        "",
                        "contrast",
                        "fg",
                        "bg",
                        "ghost",
                        "subtle",
                        "muted",
                        "emphasized",
                        "solid",
                        "outline",
                      ]}
                    >
                      {(value, index) => (
                        <Grid key={index} gap="xs">
                          <Box
                            bg={value ? `${token}.${value}` : token}
                            borderColor="border.muted"
                            borderWidth="1px"
                            h="24"
                            rounded="l2"
                            w="full"
                          />

                          <Text
                            color="fg.muted"
                            fontSize="xs"
                            lineClamp={1}
                            textAlign="center"
                          >
                            {value ? `${token}.${value}` : token}
                          </Text>
                        </Grid>
                      )}
                    </For>
                  </Container.Body>
                </Container.Root>
              )}
            </For>
          </VStack>
        )
      } else {
        return (
          <Container.Root my="lg">
            <Container.Body
              alignItems="center"
              display="grid"
              gapX="md"
              gapY={{ base: "sm", sm: "xs" }}
              gridTemplateColumns="auto 1fr"
            >
              <For each={DEFAULT_COLOR_SCHEMES}>
                {(token, index) => (
                  <Fragment key={index}>
                    <Text color="fg.muted" fontSize="sm" lineHeight="1">
                      {token}
                    </Text>

                    <Grid
                      gap={{ base: "sm", sm: "xs" }}
                      templateColumns={`repeat(${TONES.length}, 1fr)`}
                    >
                      {TONES.map((tone, index) => (
                        <Box
                          key={index}
                          bg={`${token}.${tone}`}
                          h={{ base: "10", sm: "6" }}
                          rounded={{ base: "l2", sm: "l1" }}
                          w="full"
                        />
                      ))}
                    </Grid>
                  </Fragment>
                )}
              </For>
            </Container.Body>
          </Container.Root>
        )
      }
    }

    case "keyframes": {
      return (
        <Container.Root my="lg">
          <Container.Body
            alignItems="center"
            display="grid"
            gap="lg"
            gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))"
          >
            <For each={Object.entries(defaultTheme.keyframes)}>
              {([token], index) => (
                <VStack key={index} alignItems="center" gap="sm">
                  <Center
                    aspectRatio={1}
                    bg="bg"
                    borderColor="border.subtle"
                    borderWidth="1px"
                    boxSize="full"
                    flexDirection="column"
                    overflow="hidden"
                    position="relative"
                    rounded="l2"
                  >
                    <Box
                      css={{
                        "--animation-from-x": "25%",
                        "--animation-from-y": "25%",
                        "--animation-height": "{sizes.12}",
                        "--animation-to-x": "50%",
                        "--animation-to-y": "50%",
                        "--animation-width": "{sizes.12}",
                        "--stripe-color": [
                          "rgba(255, 255, 255, 0.3)",
                          "rgba(0, 0, 0, 0.3)",
                        ],
                      }}
                      animationDirection={
                        token === "bg-position" ? "normal" : "alternate"
                      }
                      animationDuration="1s"
                      animationIterationCount="infinite"
                      animationName={token}
                      animationTimingFunction={
                        token === "bg-position" ? "linear" : "ease-in-out"
                      }
                      bg="green"
                      bgImage={
                        token === "bg-position"
                          ? `linear-gradient(
                      45deg,
                      {stripe-color} 25%,
                      transparent 25%,
                      transparent 50%,
                      {stripe-color} 50%,
                      {stripe-color} 75%,
                      transparent 75%,
                      transparent
                    )`
                          : undefined
                      }
                      bgSize="1rem 1rem"
                      boxSize="12"
                      position="absolute"
                      rounded="l2"
                    />
                  </Center>

                  <Text color="fg.muted" fontSize="sm" lineClamp={1}>
                    {token}
                  </Text>
                </VStack>
              )}
            </For>
          </Container.Body>
        </Container.Root>
      )
    }

    default:
      return null
  }
}
