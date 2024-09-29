import { forwardRef, Grid, GridItem } from "@yamada-ui/react"
import type { GridProps } from "@yamada-ui/react"
import { memo } from "react"
import { LinkCard } from "./link-card"
import { usePage } from "contexts"

export interface LinkCardsProps extends GridProps {
  with_description?: boolean
}

export const LinkCards = memo(
  forwardRef<LinkCardsProps, "div">(
    ({ with_description = true, ...rest }, ref) => {
      const { documentChildrenTree } = usePage()

      return (
        <CardContainer ref={ref} {...rest}>
          {documentChildrenTree?.map(({ title, description, label, slug }) => (
            <GridItem key={slug}>
              <LinkCard
                {...{
                  href: slug,
                  title,
                  description,
                  label,
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
        my="xl"
        templateColumns={{ base: "repeat(2, 1fr)", md: "1fr" }}
        gap="normal"
        {...rest}
      />
    )
  }),
)
