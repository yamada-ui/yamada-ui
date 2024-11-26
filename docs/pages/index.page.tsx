import type { InferGetStaticPropsType, NextPage } from "next"
import { ArrowRightIcon } from "@yamada-ui/lucide"
import {
  Center,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
  Wrap,
} from "@yamada-ui/react"
import { Section } from "components/layouts"
import {
  OpenCollectiveIcon,
  PatreonIcon,
  Seo,
} from "components/media-and-icons"
import { NextLinkButton } from "components/navigation"
import { CONSTANT } from "constant"
import { PageProvider, useI18n } from "contexts"
import { TopLayout } from "layouts"
import { getStaticCommonProps } from "utils/next"

export const getStaticProps = getStaticCommonProps

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({ currentVersion, documentTree }) => {
  const { t, tc } = useI18n()

  return (
    <PageProvider {...{ currentVersion, documentTree }}>
      <TopLayout>
        <Seo
          description={t("home.description")}
          disableTitleTemplate
          title={t("home.title")}
        />

        <Section>
          <VStack alignItems="center">
            <Heading
              as="h1"
              fontFamily="heading"
              fontSize={{ base: "7xl", sm: "4xl", md: "5xl", lg: "6xl" }}
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
              color={["blackAlpha.600", "whiteAlpha.600"]}
              fontSize={{ base: "xl", sm: "lg" }}
              maxW="2xl"
              textAlign="center"
              w="full"
            >
              {tc("home.hero.message")}
            </Text>
          </VStack>

          <HStack
            flexDirection={{ base: "row", md: "column" }}
            justifyContent="center"
          >
            <NextLinkButton
              href="/getting-started"
              colorScheme="primary"
              size="2xl"
              rightIcon={<ArrowRightIcon />}
              w={{ base: "auto", md: "full" }}
            >
              {tc("home.hero.started")}
            </NextLinkButton>

            <NextLinkButton
              href="/examples/mail"
              size="2xl"
              w={{ base: "auto", md: "full" }}
            >
              {tc("home.hero.examples")}
            </NextLinkButton>
          </HStack>
        </Section>

        <Center bg={["primary.500", "primary.600"]} m="0 calc(50% - 50vw)">
          <Section maxW="9xl" px={{ base: "lg", md: "md" }}>
            <VStack alignItems="center" gap="lg">
              <VStack alignItems="center" color="white" maxW="2xl">
                <Heading size="2xl">{t("home.support.title")}</Heading>
                <Text textAlign="center">{t("home.support.description")}</Text>
              </VStack>

              <VStack
                alignItems="center"
                gap={{ base: "lg", md: "md" }}
                maxW="2xl"
              >
                <HStack
                  bg="white"
                  flexDirection={{ base: "row", sm: "column" }}
                  p={{ base: "normal", md: "md" }}
                  rounded="md"
                  w="full"
                >
                  <HStack color="black">
                    <OpenCollectiveIcon boxSize="12" />

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
                    href="https://opencollective.com/yamada-ui"
                    colorScheme="primary"
                    isExternal
                    px="lg"
                    w={{ base: "auto", sm: "full" }}
                  >
                    Sponsor
                  </NextLinkButton>
                </HStack>

                <HStack
                  bg="white"
                  flexDirection={{ base: "row", sm: "column" }}
                  p={{ base: "normal", md: "md" }}
                  rounded="md"
                  w="full"
                >
                  <HStack color="black">
                    <PatreonIcon boxSize="12" />

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
                    href="https://www.patreon.com/hirotomoyamada"
                    colorScheme="primary"
                    isExternal
                    px="lg"
                    w={{ base: "auto", sm: "full" }}
                  >
                    Sponsor
                  </NextLinkButton>
                </HStack>
              </VStack>

              {CONSTANT.SPONSORS.PLATINUM.length ? (
                <>
                  <Heading as="h3" size="lg" color="white">
                    {t("home.support.platinum-sponsors")}
                  </Heading>

                  <Wrap
                    gap={{ base: "lg", md: "md" }}
                    justifyContent="center"
                    maxW="6xl"
                    vars={[
                      {
                        name: "space",
                        token: "spaces",
                        value: { base: "lg", md: "md" },
                      },
                    ]}
                    w="full"
                  >
                    {CONSTANT.SPONSORS.PLATINUM.map(
                      ({ href, src, alt, ...rest }, index) => (
                        <Center
                          key={index}
                          as="a"
                          href={href}
                          target="_blank"
                          bg="white"
                          flexBasis={{
                            base: "calc((100% - $space * 2) / 3)",
                            sm: "100%",
                            md: "calc((100% - $space * 1) / 2)",
                          }}
                          maxW={{
                            base: "calc((100% - $space * 2) / 3)",
                            sm: "100%",
                            md: "calc((100% - $space * 1) / 2)",
                          }}
                          p="normal"
                          rounded="md"
                        >
                          <Image
                            src={src}
                            alt={alt}
                            boxSize="full"
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
                  <Heading as="h3" size="lg" color="white">
                    {t("home.support.gold-sponsors")}
                  </Heading>

                  {/* <Wrap
                    w="full"
                    maxW="6xl"
                    justifyContent="center"
                    gap={{ base: "lg", md: "md" }}
                    vars={[
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
                            base: "calc((100% - $space * 3) / 4)",
                            md: "calc((100% - $space * 2) / 3)",
                            sm: "calc((100% - $space * 1) / 2)",
                          }}
                          maxW={{
                            base: "calc((100% - $space * 3) / 4)",
                            md: "calc((100% - $space * 2) / 3)",
                            sm: "calc((100% - $space * 1) / 2)",
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
                  </Wrap> */}
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
