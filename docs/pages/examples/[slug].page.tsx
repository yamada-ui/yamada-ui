import type {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next"
import type { Slug } from "./data"
import { ArrowRightIcon, BlocksIcon } from "@yamada-ui/lucide"
import {
  Avatar,
  AvatarGroup,
  Box,
  Center,
  Heading,
  HStack,
  ScrollArea,
  SegmentedControl,
  SegmentedControlButton,
  Text,
  Tooltip,
  VStack,
} from "@yamada-ui/react"
import { Section } from "components/layouts"
import { Seo } from "components/media-and-icons"
import { NextLinkButton } from "components/navigation"
import { CONSTANT } from "constant"
import { PageProvider, useI18n } from "contexts"
import { TopLayout } from "layouts"
import Link from "next/link"
import { useMemo } from "react"
import { getStaticCommonProps } from "utils/next"
import { Authentication } from "./authentication"
import { Cards } from "./cards"
import { Dashboard } from "./dashboard"
import { AUTHORS, SLUGS } from "./data"
import { Forms } from "./forms"
import { Mail } from "./mail"
import { Music } from "./music"
import { Playground } from "./playground"
import { Tasks } from "./tasks"

type Paths = GetStaticPathsResult["paths"]

const generatePaths = (slug: Slug): Paths =>
  CONSTANT.I18N.LOCALES.map(({ value }) => ({
    locale: value,
    params: { slug },
  }))

export const getStaticPaths = () => {
  const paths: Paths = SLUGS.flatMap((slug) => generatePaths(slug))

  return { fallback: false, paths }
}

export const getStaticProps = async ({
  locale,
  params,
}: GetStaticPropsContext) => {
  const {
    props: { currentVersion, documentTree },
  } = await getStaticCommonProps({ locale })
  const slug = params?.slug as Slug

  const props = { currentVersion, documentTree, slug }

  return { props }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({
  currentVersion,
  documentTree,
  slug: currentSlug,
}) => {
  const { t, tc } = useI18n()

  const examples = useMemo(() => {
    switch (currentSlug) {
      case "mail":
        return <Mail />

      case "dashboard":
        return <Dashboard />

      case "cards":
        return <Cards />

      case "tasks":
        return <Tasks />

      case "playground":
        return <Playground />

      case "forms":
        return <Forms />

      case "music":
        return <Music />

      case "authentication":
        return <Authentication />

      default:
        return <Mail />
    }
  }, [currentSlug])

  return (
    <PageProvider {...{ currentVersion, documentTree }}>
      <TopLayout>
        <Seo
          description={t("examples.description")}
          title={t(`examples.${currentSlug}.title`)}
        />

        <Section pb="0" pt="xl">
          <VStack alignItems="center">
            <Heading
              as="h1"
              fontFamily="heading"
              fontSize={{ base: "7xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="extrabold"
              textAlign="center"
              textTransform={{ base: "inherit", md: "capitalize" }}
            >
              {tc("examples.hero.heading", (str) => (
                <Text as="span" display={{ base: "inline", md: "none" }}>
                  {str}
                </Text>
              ))}
            </Heading>

            <Text
              color={["blackAlpha.600", "whiteAlpha.600"]}
              fontSize={{ base: "xl", sm: "lg" }}
              maxW="3xl"
              textAlign="center"
              w="full"
            >
              {t("examples.hero.message")}
            </Text>
          </VStack>

          <HStack
            flexDirection={{ base: "row", md: "column" }}
            justifyContent="center"
          >
            <NextLinkButton
              href="/getting-started"
              colorScheme="primary"
              size="xl"
              rightIcon={<ArrowRightIcon />}
              w={{ base: "auto", md: "full" }}
            >
              {t("examples.hero.started")}
            </NextLinkButton>

            <NextLinkButton
              href="/components"
              size="xl"
              rightIcon={<BlocksIcon />}
              w={{ base: "auto", md: "full" }}
            >
              {t("examples.hero.components")}
            </NextLinkButton>
          </HStack>
        </Section>

        <Section display="block" pb="0" pt="xl">
          <ScrollArea as={Center} type="never" m="0 auto" tabIndex={-1}>
            <SegmentedControl as="nav" variant="tabs" value={currentSlug}>
              {SLUGS.map((slug) => {
                return (
                  <SegmentedControlButton
                    key={slug}
                    as={Link}
                    href={`/examples/${slug}`}
                    tabIndex={-1}
                    value={slug}
                  >
                    {t(`examples.${slug}.title`)}
                  </SegmentedControlButton>
                )
              })}
            </SegmentedControl>
          </ScrollArea>

          <Box borderWidth="1px" mt="normal" overflow="hidden" rounded="md">
            {examples}
          </Box>
        </Section>

        {AUTHORS[currentSlug].length ? (
          <Center gap="sm" mt="normal">
            <Text color="muted">{t("examples.author.description")}</Text>

            <AvatarGroup borderColor={["white", "black"]} gap="-3">
              {AUTHORS[currentSlug].map(({ href, name, src }) => (
                <Box
                  key={name}
                  sx={{ borderWidth: { base: "5px", sm: "3px" } }}
                  borderRadius="full"
                  position="relative"
                >
                  <Tooltip flexShrink="0" label={name} placement="top">
                    <Avatar
                      as="a"
                      href={href}
                      name={name}
                      src={src}
                      target="_blank"
                      boxSize="10"
                    />
                  </Tooltip>
                </Box>
              ))}
            </AvatarGroup>
          </Center>
        ) : null}
      </TopLayout>
    </PageProvider>
  )
}

export default Page
