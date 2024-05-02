import { Avatar, Grid, HStack, Link, Text, VStack } from "@yamada-ui/react"
import type { AvatarProps, GridProps, StackProps } from "@yamada-ui/react"
import { Github, X } from "components/media-and-icons"
import { CONSTANT } from "constant"
import { useI18n } from "contexts/i18n-context"
import type { FC } from "react"

export type MemberProps = StackProps &
  Pick<AvatarProps, "name"> & {
    icon?: string
    description: string
    github?: string
    twitter?: string
  }

export const Member: FC<MemberProps> = ({
  name,
  icon,
  description,
  github,
  twitter,
  ...rest
}) => {
  return (
    <HStack alignItems="flex-start" gap="6" {...rest}>
      <Avatar name={name} boxSize="20" src={icon} />

      <VStack gap="2">
        <Text fontWeight="semibold">{name}</Text>

        <HStack fontSize="sm" gap="2">
          {github ? (
            <Link
              href={github}
              target="_blank"
              aria-label={`GitHub profile of ${name}`}
              color={[`primary.600`, `primary.400`]}
              _hover={{
                color: [`primary.500`, `primary.300`],
              }}
              _active={{
                color: [`primary.700`, `primary.500`],
              }}
            >
              <Github />
            </Link>
          ) : null}

          {twitter ? (
            <Link
              href={twitter}
              target="_blank"
              aria-label={`X ${name}`}
              color={[`primary.600`, `primary.400`]}
              _hover={{
                color: [`primary.500`, `primary.300`],
              }}
              _active={{
                color: [`primary.700`, `primary.500`],
              }}
            >
              <X />
            </Link>
          ) : null}
        </HStack>

        <Text fontSize="sm" lineClamp={2} color="muted">
          {description}
        </Text>
      </VStack>
    </HStack>
  )
}

export type MembersProps = GridProps

export const Members: FC<MembersProps> = ({ ...rest }) => {
  const { locale } = useI18n()
  return (
    <Grid
      my="6"
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
      gap="6"
      {...rest}
    >
      {CONSTANT.CORE_MEMBERS.map(
        ({ id, name, icon, description, github, twitter }) => (
          <Member
            key={id}
            name={name[locale]}
            icon={icon}
            description={description[locale]}
            github={github}
            twitter={twitter}
          />
        ),
      )}
    </Grid>
  )
}
