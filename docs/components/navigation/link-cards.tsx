import type { GridProps } from "@yamada-ui/react"
import { forwardRef, Grid, GridItem } from "@yamada-ui/react"
import { usePage } from "contexts"
import { memo } from "react"
import { LinkCard } from "./link-card"

export interface LinkCardsProps extends GridProps {
  with_description?: boolean
}

export const LinkCards = memo(
  forwardRef<LinkCardsProps, "div">(
    ({ with_description = true, ...rest }, ref) => {
      const { documentChildrenTree } = usePage()

      return (
        <CardContainer ref={ref} {...rest}>
          {documentChildrenTree?.map(({ description, label, slug, title }) => (
            <GridItem key={slug}>
              <LinkCard
                {...{
                  href: slug,
                  description,
                  label,
                  title,
                  with_description,
                }}
              />
            </GridItem>
          ))}
        </CardContainer>
      )
    },
  ),
)

export const CardContainer = memo(
  forwardRef<GridProps, "div">(({ ...rest }, ref) => {
    return (
      <Grid
        ref={ref}
        gap="normal"
        my="xl"
        templateColumns={{ base: "repeat(2, 1fr)", md: "1fr" }}
        {...rest}
      />
    )
  }),
)
