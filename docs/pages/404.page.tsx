import { Text, VStack } from "@yamada-ui/react"
import type { InferGetStaticPropsType, NextPage } from "next"
import { Section } from "components/layouts"
import { SEO } from "components/media-and-icons"
import { NextLinkButton } from "components/navigation"
import { useI18n, PageProvider } from "contexts"
import { TopLayout } from "layouts"
import { getStaticCommonProps } from "utils/next"

export const getStaticProps = getStaticCommonProps

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({ currentVersion, documentTree }) => {
  const { tc } = useI18n()

  return (
    <PageProvider {...{ currentVersion, documentTree }}>
      <TopLayout>
        <SEO
          title={tc("not-found.title") as string}
          description={tc("not-found.description") as string}
        />

        <Section alignItems="center">
          <VStack alignItems="center">
            <Text
              as="h1"
              fontSize={{ base: "5xl", md: "3xl", sm: "2xl" }}
              fontFamily="heading"
              fontWeight="bold"
              textAlign="center"
            >
              {tc("not-found.heading")}
            </Text>

            <Text
              w="full"
              maxW="2xl"
              fontSize={{ base: "xl", sm: "lg" }}
              textAlign="center"
            >
              {tc("not-found.message")}
            </Text>
          </VStack>

          <NextLinkButton href="/" size="lg">
            {tc("not-found.back-to-home")}
          </NextLinkButton>
        </Section>
      </TopLayout>
    </PageProvider>
  )
}

export default Page
