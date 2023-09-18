import {
  Avatar,
  AvatarProps,
  Grid,
  GridProps,
  HStack,
  Link,
  StackProps,
  Text,
  VStack,
} from '@yamada-ui/react'
import { FC } from 'react'
import { Github, Twitter } from 'components/media-and-icons'
import { useConfigs } from 'contexts/configs-context'

export type MemberProps = StackProps &
  Pick<AvatarProps, 'name' | 'src'> & { description: string; github?: string; twitter?: string }

export const Member: FC<MemberProps> = ({ name, src, description, github, twitter, ...rest }) => {
  const { colorScheme } = useConfigs()
  return (
    <HStack alignItems='flex-start' gap='6' {...rest}>
      <Avatar name={name} size='xl' src={src} />

      <VStack gap='2'>
        <Text fontWeight='semibold'>{name}</Text>

        <HStack fontSize='sm' gap='2'>
          {github ? (
            <Link
              href={github}
              target='_blank'
              aria-label={`GitHub profile of ${name}`}
              color={[`${colorScheme}.600`, `${colorScheme}.400`]}
              _hover={{
                color: [`${colorScheme}.500`, `${colorScheme}.300`],
              }}
              _active={{
                color: [`${colorScheme}.700`, `${colorScheme}.500`],
              }}
            >
              <Github />
            </Link>
          ) : null}

          {twitter ? (
            <Link
              href={twitter}
              target='_blank'
              aria-label={`Twitter ${name}`}
              color={[`${colorScheme}.600`, `${colorScheme}.400`]}
              _hover={{
                color: [`${colorScheme}.500`, `${colorScheme}.300`],
              }}
              _active={{
                color: [`${colorScheme}.700`, `${colorScheme}.500`],
              }}
            >
              <Twitter />
            </Link>
          ) : null}
        </HStack>

        <Text fontSize='sm' noOfLines={2} color='muted'>
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
      my='6'
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }}
      gap='6'
      {...rest}
    />
  )
}
