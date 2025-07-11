import type { InferGetStaticPropsType, NextPage } from "next"
import { Text, VStack } from "@yamada-ui/react"
import { Section } from "components/layouts"
import { Seo } from "components/media-and-icons"
import { NextLinkButton } from "components/navigation"
import { PageProvider, useI18n } from "contexts"
import { TopLayout } from "layouts"
import { getStaticCommonProps } from "utils/next"

export const getStaticProps = getStaticCommonProps

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({ currentVersion, documentTree }) => {
  const { tc } = useI18n()

  return (
    <PageProvider {...{ currentVersion, documentTree }}>
      <TopLayout>
        <Seo
          description={tc("not-found.description") as string}
          title={tc("not-found.title") as string}
        />

        <Section alignItems="center">
          <VStack alignItems="center">
            <Text
              as="h1"
              fontFamily="heading"
              fontSize={{ base: "5xl", sm: "2xl", md: "3xl" }}
              fontWeight="bold"
              textAlign="center"
            >
              {tc("not-found.heading")}
            </Text>

            <Text
              fontSize={{ base: "xl", sm: "lg" }}
              maxW="2xl"
              textAlign="center"
              w="full"
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
