import { Center, GithubIcon, HStack, Text } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { DiscordIcon, NextLink, XIcon } from "@/components"
import { CONSTANTS } from "@/constants"

export function Footer() {
  const t = useTranslations()

  return (
    <Center
      as="footer"
      flexDir="column"
      gap="md"
      position="sticky"
      px="{space}"
      py="xl"
      top="100vh"
      w="full"
    >
      <Text
        as="small"
        color="fg.muted"
        fontSize={{ base: "md", sm: "sm" }}
        textAlign="center"
      >
        {t.rich("component.footer.copyright", {
          contributors: (chunks) => (
            <NextLink
              href={CONSTANTS.SNS.GITHUB.PROJECT + "/graphs/contributors"}
              color={{ base: "fg.muted", _hover: "fg" }}
              external
              textDecoration="underline"
              textUnderlineOffset="4px"
              transitionDuration="moderate"
              transitionProperty="colors"
            >
              {chunks}
            </NextLink>
          ),
          owner: (chunks) => (
            <NextLink
              href={CONSTANTS.SNS.GITHUB.HIROTOMO_YAMADA}
              color={{ base: "fg.muted", _hover: "fg" }}
              external
              textDecoration="underline"
              textUnderlineOffset="4px"
              transitionDuration="moderate"
              transitionProperty="colors"
            >
              {chunks}
            </NextLink>
          ),
        })}
      </Text>

      <HStack fontSize="2xl">
        <NextLink
          href={CONSTANTS.SNS.GITHUB.HIROTOMO_YAMADA}
          aria-label={t("common.github", { name: "Hirotomo Yamada" })}
          color={{ base: "fg.muted", _hover: "fg" }}
          external
          transitionDuration="moderate"
          transitionProperty="colors"
        >
          <GithubIcon />
        </NextLink>

        <NextLink
          href={CONSTANTS.SNS.DISCORD}
          aria-label={t("common.discord")}
          color={{ base: "fg.muted", _hover: "fg" }}
          external
          transitionDuration="moderate"
          transitionProperty="colors"
        >
          <DiscordIcon />
        </NextLink>

        <NextLink
          href={CONSTANTS.SNS.X.HIROTOMO_YAMADA}
          aria-label={t("common.x", { name: "Hirotomo Yamada" })}
          color={{ base: "fg.muted", _hover: "fg" }}
          external
          transitionDuration="moderate"
          transitionProperty="colors"
        >
          <XIcon />
        </NextLink>
      </HStack>
    </Center>
  )
}
