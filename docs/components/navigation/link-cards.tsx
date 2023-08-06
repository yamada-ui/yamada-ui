import { forwardRef, Grid, GridItem, GridProps } from '@yamada-ui/react'
import { memo } from 'react'
import { LinkCard } from './link-card'
import { usePage } from 'contexts/page-context'

export type LinkCardsProps = GridProps

export const LinkCards = memo(
  forwardRef<LinkCardsProps, 'div'>(({ ...rest }, ref) => {
    const { childrenTree } = usePage()

    return (
      <CardContainer ref={ref} {...rest}>
        {childrenTree.map(({ title, menu, description, label, slug }) => (
          <GridItem key={slug}>
            <LinkCard {...{ href: slug, title: menu ?? title, description, label }} />
          </GridItem>
        ))}
      </CardContainer>
    )
  }),
)

export const CardContainer = memo(
  forwardRef<GridProps, 'div'>(({ ...rest }, ref) => {
    return (
      <Grid
        ref={ref}
        templateColumns={{ base: 'repeat(2, 1fr)', md: '1fr' }}
        gap='normal'
        mt='xl'
        {...rest}
      />
    )
  }),
)
