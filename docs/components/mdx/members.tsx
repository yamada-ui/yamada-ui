import type { AvatarProps, GridProps, StackProps } from "@yamada-ui/react"
import { Avatar, Grid, HStack, Link, Text, VStack } from "@yamada-ui/react"
import type { FC } from "react"
import { Github, Twitter } from "components/media-and-icons"

export type MemberProps = StackProps &
  Pick<AvatarProps, "name" | "src"> & {
    description: string
    github?: string
    twitter?: string
  }

export const Member: FC<MemberProps> = ({
  name,
  src,
  description,
  github,
  twitter,
  ...rest
}) => {
  return (
    <HStack alignItems="flex-start" gap="6" {...rest}>
      <Avatar name={name} size="xl" src={src} />

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
              aria-label={`Twitter ${name}`}
              color={[`primary.600`, `primary.400`]}
              _hover={{
                color: [`primary.500`, `primary.300`],
              }}
              _active={{
                color: [`primary.700`, `primary.500`],
              }}
            >
              <Twitter />
            </Link>
          ) : null}
        </HStack>

        <Text fontSize="sm" noOfLines={2} color="muted">
          {description}
        </Text>
      </VStack>
    </HStack>
  )
}

export type MemberContainerProps = GridProps

export const MemberContainer: FC<MemberContainerProps> = ({ ...rest }) => {
  return (
    <Grid
      my="6"
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
      gap="6"
      {...rest}
    />
  )
}
