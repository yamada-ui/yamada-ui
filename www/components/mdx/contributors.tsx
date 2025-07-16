import {
  Avatar,
  Box,
  GithubIcon,
  Grid,
  HStack,
  Text,
  VStack,
  Wrap,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import NextLink from "next/link"
import contributors from "@/data/contributors.json"
import emeriti from "@/data/emeriti.json"
import maintainers from "@/data/maintainers.json"
import { useLocale } from "@/i18n"
import { XIcon } from "../x-icon"

export interface ContributorsProps {
  type?: "emeriti" | "maintainers"
}

export function Contributors({ type, ...rest }: ContributorsProps) {
  const { lang } = useLocale()
  const t = useTranslations()

  if (!type) {
    return (
      <Wrap gap="sm" my="lg">
        {contributors.map(({ id, avatar_url, html_url, login }) => (
          <Box
            key={id}
            as={NextLink}
            href={html_url}
            target="_blank"
            rounded="full"
          >
            <Avatar
              name={login}
              src={avatar_url}
              aria-label={t("common.github", { name: login })}
            />
          </Box>
        ))}
      </Wrap>
    )
  } else {
    const users = type === "maintainers" ? maintainers : emeriti

    return (
      <Grid
        gap="lg"
        my="lg"
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(1, 1fr)" }}
        {...rest}
      >
        {users.map(({ name, description, github, x }) => (
          <HStack key={github.id} alignItems="flex-start" gap="lg">
            <Avatar name={name[lang]} src={github.icon} boxSize="20" />

            <VStack gap="sm">
              <Text fontWeight="semibold">{name[lang]}</Text>

              <HStack fontSize="sm" gap="xs">
                <Box
                  as={NextLink}
                  href={github.url}
                  target="_blank"
                  rounded="l1"
                >
                  <GithubIcon
                    aria-label={t("common.github", { name: name[lang] })}
                    color={{ base: "fg.muted", _hover: "fg" }}
                    fontSize="lg"
                    transitionDuration="moderate"
                    transitionProperty="colors"
                  />
                </Box>

                {x ? (
                  <Box as={NextLink} href={x.url} target="_blank" rounded="l1">
                    <XIcon
                      aria-label={t("common.x", { name: name[lang] })}
                      color={{ base: "fg.muted", _hover: "fg" }}
                      fontSize="lg"
                      transitionDuration="moderate"
                      transitionProperty="colors"
                    />
                  </Box>
                ) : null}
              </HStack>

              <Text color="fg.muted" fontSize="sm" lineClamp={2}>
                {description[lang]}
              </Text>
            </VStack>
          </HStack>
        ))}
      </Grid>
    )
  }
}
