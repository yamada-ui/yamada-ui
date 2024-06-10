import {
  Avatar,
  AvatarGroup,
  Box,
  Center,
  HStack,
  Heading,
  ScrollArea,
  SegmentedControl,
  SegmentedControlButton,
  Text,
  Tooltip,
  VStack,
} from "@yamada-ui/react"
import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next"
import Link from "next/link"
import { useMemo } from "react"
import { Section } from "components/layouts"
import { SEO } from "components/media-and-icons"
import { NextLinkButton } from "components/navigation"
import { CONSTANT } from "constant"
import { useI18n } from "contexts/i18n-context"
import { PageProvider } from "contexts/page-context"
import { TopLayout } from "layouts/top-layout"
import { getStaticCommonProps } from "utils/next"
import { Authentication } from "./authentication"
import { Cards } from "./cards"
import { Dashboard } from "./dashboard"
import { SLUGS, AUTHORS } from "./data"
import type { Slug } from "./data"
import { Forms } from "./forms"
import { Mail } from "./mail"
import { Music } from "./music"
import { Playground } from "./playground"
import { Tasks } from "./tasks"
import { ArrowRight, Blocks } from "@yamada-ui/lucide"

type Paths = GetStaticPathsResult["paths"]

const generatePaths = (slug: Slug): Paths =>
  CONSTANT.I18N.LOCALES.map(({ value }) => ({
    params: { slug },
    locale: value,
  }))

export const getStaticPaths = async ({}: GetStaticPathsContext) => {
  const paths: Paths = SLUGS.flatMap((slug) => generatePaths(slug))

  return { paths, fallback: false }
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
  slug: currentSlug,
  documentTree,
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
        <SEO
          title={t(`examples.${currentSlug}.title`)}
          description={t("examples.description")}
        />

        <Section pt="xl" pb="0">
          <VStack alignItems="center">
            <Heading
              as="h1"
              fontSize={{ base: "7xl", lg: "6xl", md: "5xl", sm: "4xl" }}
              fontFamily="heading"
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
              w="full"
              maxW="3xl"
              fontSize={{ base: "xl", sm: "lg" }}
              color={["blackAlpha.600", "whiteAlpha.600"]}
              textAlign="center"
            >
              {t("examples.hero.message")}
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
              rightIcon={<ArrowRight />}
              href="/getting-started"
            >
              {t("examples.hero.started")}
            </NextLinkButton>

            <NextLinkButton
              size="xl"
              w={{ base: "auto", md: "full" }}
              rightIcon={<Blocks />}
              href="/components"
            >
              {t("examples.hero.components")}
            </NextLinkButton>
          </HStack>
        </Section>

        <Section display="block" pt="xl" pb="0">
          <ScrollArea as={Center} type="never" tabIndex={-1} m="0 auto">
            <SegmentedControl as="nav" variant="simple" value={currentSlug}>
              {SLUGS.map((slug) => {
                return (
                  <SegmentedControlButton
                    key={slug}
                    as={Link}
                    tabIndex={-1}
                    value={slug}
                    href={`/examples/${slug}`}
                  >
                    {t(`examples.${slug}.title`)}
                  </SegmentedControlButton>
                )
              })}
            </SegmentedControl>
          </ScrollArea>

          <Box mt="normal" borderWidth="1px" rounded="md" overflow="hidden">
            {examples}
          </Box>
        </Section>

        {AUTHORS[currentSlug].length ? (
          <Center mt="normal" gap="sm">
            <Text color="muted">{t("examples.author.description")}</Text>

            <AvatarGroup borderColor={["white", "black"]} gap="-3">
              {AUTHORS[currentSlug].map(({ name, src, href }) => (
                <Box
                  key={name}
                  position="relative"
                  borderRadius="full"
                  sx={{ borderWidth: { base: "5px", sm: "3px" } }}
                >
                  <Tooltip label={name} placement="top" flexShrink="0">
                    <Avatar
                      as="a"
                      target="_blank"
                      href={href}
                      name={name}
                      src={src}
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
