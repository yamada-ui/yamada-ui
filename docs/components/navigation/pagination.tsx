import {
  Box,
  ChevronIcon,
  Grid,
  GridItem,
  Text,
  forwardRef,
} from "@yamada-ui/react"
import type { GridItemProps, GridProps } from "@yamada-ui/react"
import { useI18n, usePage } from "contexts"
import type { DocumentNavigation } from "mdx"
import Link from "next/link"
import { memo } from "react"
import type { FC } from "react"

export interface PaginationProps extends GridProps {}

export const Pagination = memo(
  forwardRef<PaginationProps, "div">(({ ...rest }, ref) => {
    const { documentPagination } = usePage()
    const { prev, next } = documentPagination ?? {}

    if (!prev && !next) return

    return (
      <Grid
        ref={ref}
        templateColumns="repeat(2, 1fr)"
        gap={{ base: "lg", sm: "md" }}
        mt="xl"
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
  title,
  slug,
  isPrev,
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
        fontSize="sm"
        color="muted"
        {...(isPrev ? { ms: "1" } : { me: "1" })}
      >
        {t(`component.pagination.${isPrev ? "prev" : "next"}`)}
      </Text>

      <Text
        as="span"
        display="flex"
        alignItems="center"
        gap="0"
        fontSize={{ base: "lg", sm: "md" }}
        fontWeight="semibold"
        transitionProperty="colors"
        transitionDuration="fast"
        color={[`primary.500`, `primary.500`]}
        _hover={{
          color: [`primary.600`, `primary.600`],
        }}
        _active={{
          color: [`primary.700`, `primary.700`],
        }}
      >
        {isPrev ? (
          <ChevronIcon transform="rotate(90deg)" fontSize="1.3em" />
        ) : null}

        <Text as="span" lineClamp={1}>
          {title}
        </Text>

        {!isPrev ? (
          <ChevronIcon transform="rotate(-90deg)" fontSize="1.3em" />
        ) : null}
      </Text>
    </GridItem>
  )
}
