import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  forwardRef,
  Heading,
  StringLiteral,
  Text,
} from '@yamada-ui/react'
import Link from 'next/link'
import { memo, ReactNode } from 'react'
import { Label } from 'components/data-display'

export type LinkCardProps = CardProps & {
  href: string
  title: ReactNode
  label: StringLiteral
  description: ReactNode
}

export const LinkCard = memo(
  forwardRef<LinkCardProps, 'div'>(({ title, label, description, ...rest }, ref) => {
    return (
      <Card
        as={Link}
        ref={ref}
        variant='outline'
        h={{ base: '40', md: 'auto' }}
        size='normal'
        bg={['gray.100', 'whiteAlpha.50']}
        _focus={{ outline: 'none' }}
        _focusVisible={{ boxShadow: 'outline' }}
        _hover={{ bg: ['gray.200', 'whiteAlpha.100'] }}
        _active={{ bg: ['gray.300', 'whiteAlpha.200'] }}
        transitionProperty='colors'
        transitionDuration='normal'
        {...rest}
      >
        <CardHeader pt='md' gap='sm'>
          <Heading size='md' noOfLines={1}>
            {title}
          </Heading>

          <Label>{label}</Label>
        </CardHeader>

        <CardBody pt='md'>
          <Text color='muted' noOfLines={3}>
            {description}
          </Text>
        </CardBody>
      </Card>
    )
  }),
)
