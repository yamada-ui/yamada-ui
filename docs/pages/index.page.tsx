import {
  Center,
  HStack,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
  Wrap,
} from "@yamada-ui/react"
import type { InferGetStaticPropsType, NextPage } from "next"
import { Section } from "components/layouts"
import {
  SEO,
  Arrow,
  Github,
  OpenCollective,
  Patreon,
} from "components/media-and-icons"
import { NextLinkButton } from "components/navigation"
import { CONSTANT } from "constant"
import { useI18n } from "contexts/i18n-context"
import { PageProvider } from "contexts/page-context"
import { TopLayout } from "layouts/top-layout"
import { getStaticCommonProps } from "utils/next"

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({ documentTree }) => {
  const { t, tc } = useI18n()

  return (
    <PageProvider {...{ documentTree }}>
      <TopLayout>
        <SEO title={t("home.title")} description={t("home.description")} />

        <Section>
          <VStack alignItems="center">
            <Heading
              as="h1"
              fontSize={{ base: "7xl", lg: "6xl", md: "5xl", sm: "4xl" }}
              fontFamily="heading"
              fontWeight="extrabold"
              textAlign="center"
            >
              {tc("home.hero.heading", (str) => (
                <Text as="span" color="primary">
                  {str}
                </Text>
              ))}
            </Heading>

            <Text
              w="full"
              maxW="2xl"
              fontSize={{ base: "xl", sm: "lg" }}
              color={["blackAlpha.600", "whiteAlpha.600"]}
              textAlign="center"
            >
              {tc("home.hero.message")}
            </Text>
          </VStack>

          <HStack
            flexDirection={{ base: "row", md: "column" }}
            justifyContent="center"
          >
            <NextLinkButton
              size="xl"
              colorScheme="primary"
              w={{ base: "auto", md: "full" }}
              rightIcon={<Arrow />}
              href="/getting-started"
            >
              {tc("home.hero.started")}
            </NextLinkButton>

            <NextLinkButton
              size="xl"
              w={{ base: "auto", md: "full" }}
              leftIcon={<Github />}
              href={CONSTANT.SNS.GITHUB.YAMADA_UI}
              isExternal
            >
              {tc("home.hero.github")}
            </NextLinkButton>
          </HStack>
        </Section>

        <Center bg={["primary.500", "primary.600"]} m="0 calc(50% - 50vw)">
          <Section maxW="9xl" px={{ base: "lg", md: "md" }}>
            <VStack alignItems="center" gap="lg">
              <VStack alignItems="center" maxW="2xl" color="white">
                <Heading size="2xl">{t("home.support.title")}</Heading>
                <Text textAlign="center">{t("home.support.description")}</Text>
              </VStack>

              <VStack
                alignItems="center"
                maxW="2xl"
                gap={{ base: "lg", md: "md" }}
              >
                <HStack
                  w="full"
                  p={{ base: "normal", md: "md" }}
                  bg="white"
                  rounded="md"
                  flexDirection={{ base: "row", sm: "column" }}
                >
                  <HStack color="black">
                    <OpenCollective boxSize="12" />

                    <VStack gap="0">
                      <Heading as="h2" fontSize="lg">
                        Open Collective
                      </Heading>

                      <Text color="blackAlpha.700">
                        {t("home.support.open-collective")}
                      </Text>
                    </VStack>
                  </HStack>

                  <Spacer display={{ base: "block", sm: "none" }} />

                  <NextLinkButton
                    w={{ base: "auto", sm: "full" }}
                    href="https://opencollective.com/yamada-ui"
                    isExternal
                    colorScheme="primary"
                    px="lg"
                  >
                    Sponsor
                  </NextLinkButton>
                </HStack>

                <HStack
                  w="full"
                  p={{ base: "normal", md: "md" }}
                  bg="white"
                  rounded="md"
                  flexDirection={{ base: "row", sm: "column" }}
                >
                  <HStack color="black">
                    <Patreon boxSize="12" />

                    <VStack gap="0">
                      <Heading as="h2" fontSize="lg">
                        Patreon
                      </Heading>

                      <Text color="blackAlpha.700">
                        {t("home.support.patreon")}
                      </Text>
                    </VStack>
                  </HStack>

                  <Spacer display={{ base: "block", sm: "none" }} />

                  <NextLinkButton
                    w={{ base: "auto", sm: "full" }}
                    href="https://www.patreon.com/hirotomoyamada"
                    isExternal
                    colorScheme="primary"
                    px="lg"
                  >
                    Sponsor
                  </NextLinkButton>
                </HStack>
              </VStack>

              {CONSTANT.SPONSORS.PLATINUM.length ? (
                <>
                  <Heading as="h3" size="lg">
                    {t("home.support.platinum-sponsors")}
                  </Heading>

                  <Wrap
                    w="full"
                    maxW="6xl"
                    justifyContent="center"
                    gap={{ base: "lg", md: "md" }}
                    var={[
                      {
                        name: "space",
                        token: "spaces",
                        value: { base: "lg", md: "md" },
                      },
                    ]}
                  >
                    {CONSTANT.SPONSORS.PLATINUM.map(
                      ({ href, src, alt, ...rest }, index) => (
                        <Center
                          key={index}
                          as="a"
                          href={href}
                          target="_blank"
                          flexBasis={{
                            base: "calc((100% - var(--ui-space) * 2) / 3)",
                            md: "calc((100% - var(--ui-space) * 1) / 2)",
                            sm: "100%",
                          }}
                          maxW={{
                            base: "calc((100% - var(--ui-space) * 2) / 3)",
                            md: "calc((100% - var(--ui-space) * 1) / 2)",
                            sm: "100%",
                          }}
                          bg="white"
                          rounded="md"
                          p="normal"
                        >
                          <Image
                            boxSize="full"
                            src={src}
                            alt={alt}
                            {...rest}
                            colorMode="light"
                          />
                        </Center>
                      ),
                    )}
                  </Wrap>
                </>
              ) : null}

              {CONSTANT.SPONSORS.GOLD.length ? (
                <>
                  <Heading as="h3" size="lg">
                    {t("home.support.gold-sponsors")}
                  </Heading>

                  <Wrap
                    w="full"
                    maxW="6xl"
                    justifyContent="center"
                    gap={{ base: "lg", md: "md" }}
                    var={[
                      {
                        name: "space",
                        token: "spaces",
                        value: { base: "lg", md: "md" },
                      },
                    ]}
                  >
                    {CONSTANT.SPONSORS.GOLD.map(
                      ({ href, src, alt, ...rest }, index) => (
                        <Center
                          key={index}
                          as="a"
                          href={href}
                          target="_blank"
                          flexBasis={{
                            base: "calc((100% - var(--ui-space) * 3) / 4)",
                            md: "calc((100% - var(--ui-space) * 2) / 3)",
                            sm: "calc((100% - var(--ui-space) * 1) / 2)",
                          }}
                          maxW={{
                            base: "calc((100% - var(--ui-space) * 3) / 4)",
                            md: "calc((100% - var(--ui-space) * 2) / 3)",
                            sm: "calc((100% - var(--ui-space) * 1) / 2)",
                          }}
                          bg="white"
                          rounded="md"
                          p="normal"
                        >
                          <Image
                            boxSize="full"
                            src={src}
                            alt={alt}
                            {...rest}
                            colorMode="light"
                          />
                        </Center>
                      ),
                    )}
                  </Wrap>
                </>
              ) : null}
            </VStack>
          </Section>
        </Center>
      </TopLayout>
    </PageProvider>
  )
}

export default Page

export const getStaticProps = getStaticCommonProps
