import {
  Card,
  CardBody,
  CardHeader,
  forwardRef,
  Grid,
  GridItem,
  GridProps,
  Heading,
  Tag,
  Text,
} from '@yamada-ui/react'
import Link from 'next/link'
import { memo } from 'react'
import { usePage } from 'contexts/page-context'

export type CardsProps = GridProps

export const Cards = memo(
  forwardRef<CardsProps, 'div'>(({ ...rest }, ref) => {
    const { childrenTree } = usePage()

    return (
      <Grid
        ref={ref}
        templateColumns={{ base: 'repeat(2, 1fr)', md: '1fr' }}
        gap='normal'
        mt='xl'
        {...rest}
      >
        {childrenTree.map(({ title, menu, description, label, slug }) => (
          <GridItem key={slug}>
            <Card
              as={Link}
              href={slug}
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
            >
              <CardHeader pt='md' gap='sm'>
                <Heading size='md' noOfLines={1}>
                  {menu ?? title}
                </Heading>

                {label ? (
                  <Tag
                    size='sm'
                    colorScheme={
                      label === 'New'
                        ? 'blue'
                        : label === 'Experimental'
                        ? 'purple'
                        : label === 'Planned'
                        ? 'orange'
                        : 'gray'
                    }
                  >
                    {label}
                  </Tag>
                ) : null}
              </CardHeader>

              <CardBody pt='md'>
                <Text color='muted' noOfLines={3}>
                  {description}
                </Text>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    )
  }),
)
