import type { GridItemProps, GridProps } from "@yamada-ui/react"
import type { DocumentNavigation } from "mdx"
import type { FC } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@yamada-ui/lucide"
import { Box, forwardRef, Grid, GridItem, Text } from "@yamada-ui/react"
import { useI18n, usePage } from "contexts"
import Link from "next/link"
import { memo } from "react"

export interface PaginationProps extends GridProps {}

export const Pagination = memo(
  forwardRef<PaginationProps, "div">(({ ...rest }, ref) => {
    const { documentPagination } = usePage()
    const { next, prev } = documentPagination ?? {}

    if (!prev && !next) return

    return (
      <Grid
        ref={ref}
        gap={{ base: "lg", sm: "md" }}
        mt="xl"
        templateColumns="repeat(2, 1fr)"
        {...rest}
      >
        {prev ? <PaginationItem {...prev} isPrev /> : <Box />}

        {next ? <PaginationItem {...next} alignItems="flex-end" /> : <Box />}
      </Grid>
    )
  }),
)

export interface PaginationItemProps
  extends Omit<GridItemProps, "title">,
    DocumentNavigation {
  isPrev?: boolean
}

const PaginationItem: FC<PaginationItemProps> = ({
  isPrev,
  slug,
  title,
  ...rest
}) => {
  const { t } = useI18n()

  if (!title || !slug) return <Box />

  return (
    <GridItem
      as={Link}
      href={slug}
      display="flex"
      flexDirection="column"
      gap="sm"
      rounded="md"
      _focus={{ outline: "none" }}
      _focusVisible={{ boxShadow: "outline" }}
      {...rest}
    >
      <Text
        as="span"
        color="muted"
        fontSize="sm"
        {...(isPrev ? { ms: "1" } : { me: "1" })}
      >
        {t(`component.pagination.${isPrev ? "prev" : "next"}`)}
      </Text>

      <Text
        as="span"
        alignItems="center"
        color={[`primary.500`, `primary.500`]}
        display="flex"
        fontSize={{ base: "lg", sm: "md" }}
        fontWeight="semibold"
        gap="0"
        transitionDuration="fast"
        transitionProperty="colors"
        _active={{
          color: [`primary.700`, `primary.700`],
        }}
        _hover={{
          color: [`primary.600`, `primary.600`],
        }}
      >
        {isPrev ? <ChevronLeftIcon fontSize="1.3em" /> : null}

        <Text as="span" lineClamp={1}>
          {title}
        </Text>

        {!isPrev ? <ChevronRightIcon fontSize="1.3em" /> : null}
      </Text>
    </GridItem>
  )
}
