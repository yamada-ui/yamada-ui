import { forwardRef, Grid, GridItem, GridProps } from "@yamada-ui/react"
import { memo } from "react"
import { LinkCard } from "./link-card"
import { usePage } from "contexts/page-context"

export type LinkCardsProps = GridProps & { with_description?: boolean }

export const LinkCards = memo(
  forwardRef<LinkCardsProps, "div">(({ with_description = true, ...rest }, ref) => {
    const { documentChildrenTree } = usePage()

    return (
      <CardContainer ref={ref} {...rest}>
        {documentChildrenTree.map(({ title, menu, description, label, slug }) => (
          <GridItem key={slug}>
            <LinkCard
              {...{ href: slug, title: menu ?? title, description, label, with_description }}
            />
          </GridItem>
        ))}
      </CardContainer>
    )
  }),
)

export const CardContainer = memo(
  forwardRef<GridProps, "div">(({ ...rest }, ref) => {
    return (
      <Grid
        ref={ref}
        my="xl"
        templateColumns={{ base: "repeat(2, 1fr)", md: "1fr" }}
        gap="normal"
        {...rest}
      />
    )
  }),
)
