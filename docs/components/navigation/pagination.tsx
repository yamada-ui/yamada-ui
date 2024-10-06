import type { GridItemProps, GridProps } from "@yamada-ui/react"
import type { DocumentNavigation } from "mdx"
import type { FC } from "react"
import {
  Box,
  ChevronIcon,
  forwardRef,
  Grid,
  GridItem,
  Text,
} from "@yamada-ui/react"
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
      _focus={{ outline: "none" }}
      _focusVisible={{ boxShadow: "outline" }}
      display="flex"
      flexDirection="column"
      gap="sm"
      href={slug}
      rounded="md"
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
        _active={{
          color: [`primary.700`, `primary.700`],
        }}
        _hover={{
          color: [`primary.600`, `primary.600`],
        }}
        alignItems="center"
        color={[`primary.500`, `primary.500`]}
        display="flex"
        fontSize={{ base: "lg", sm: "md" }}
        fontWeight="semibold"
        gap="0"
        transitionDuration="fast"
        transitionProperty="colors"
      >
        {isPrev ? (
          <ChevronIcon fontSize="1.3em" transform="rotate(90deg)" />
        ) : null}

        <Text as="span" lineClamp={1}>
          {title}
        </Text>

        {!isPrev ? (
          <ChevronIcon fontSize="1.3em" transform="rotate(-90deg)" />
        ) : null}
      </Text>
    </GridItem>
  )
}
