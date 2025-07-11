import type { AvatarProps, GridProps, StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { Avatar, Grid, HStack, Link, Text, VStack } from "@yamada-ui/react"
import { GithubIcon, XIcon } from "components/media-and-icons"
import { CONSTANT } from "constant"
import { useI18n } from "contexts"

export interface UserProps extends StackProps, Pick<AvatarProps, "name"> {
  description: string
  github?: string
  icon?: string
  x?: string
}

export const User: FC<UserProps> = ({
  name,
  description,
  github,
  icon,
  x,
  ...rest
}) => {
  return (
    <HStack alignItems="flex-start" gap="6" {...rest}>
      <Avatar name={name} src={icon} boxSize="20" />

      <VStack gap="2">
        <Text fontWeight="semibold">{name}</Text>

        <HStack fontSize="sm" gap="2">
          {github ? (
            <Link
              href={github}
              target="_blank"
              aria-label={`GitHub profile of ${name}`}
              color={[`primary.600`, `primary.400`]}
              _active={{
                color: [`primary.700`, `primary.500`],
              }}
              _hover={{
                color: [`primary.500`, `primary.300`],
              }}
            >
              <GithubIcon />
            </Link>
          ) : null}

          {x ? (
            <Link
              href={x}
              target="_blank"
              aria-label={`X ${name}`}
              color={[`primary.600`, `primary.400`]}
              _active={{
                color: [`primary.700`, `primary.500`],
              }}
              _hover={{
                color: [`primary.500`, `primary.300`],
              }}
            >
              <XIcon />
            </Link>
          ) : null}
        </HStack>

        <Text color="muted" fontSize="sm" lineClamp={2}>
          {description}
        </Text>
      </VStack>
    </HStack>
  )
}

export interface UsersProps extends GridProps {
  type: "emeriti" | "maintainers"
}

export const Users: FC<UsersProps> = ({ type, ...rest }) => {
  const { locale } = useI18n()

  const users = type === "maintainers" ? CONSTANT.MAINTAINERS : CONSTANT.EMERITI

  return (
    <Grid
      gap="6"
      my="6"
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
      {...rest}
    >
      {users.map(({ name, description, github, x }) => (
        <User
          key={github.id}
          name={name[locale]}
          description={description[locale]}
          github={github.url}
          icon={github.icon}
          x={x?.url}
        />
      ))}
    </Grid>
  )
}
