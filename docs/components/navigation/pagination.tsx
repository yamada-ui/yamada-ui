import {
  Box,
  ChevronIcon,
  Grid,
  GridItem,
  GridItemProps,
  GridProps,
  Text,
  forwardRef,
} from '@yamada-ui/react'
import Link from 'next/link'
import { FC, memo } from 'react'
import { DocumentTypes } from 'contentlayer/generated'
import { useI18n } from 'contexts/i18n-context'
import { usePage } from 'contexts/page-context'

export type PaginationProps = GridProps

export const Pagination = memo(
  forwardRef<PaginationProps, 'div'>(({ ...rest }, ref) => {
    const { documentPagination } = usePage()
    const { prevDocument, nextDocument } = documentPagination

    if (!prevDocument && !nextDocument) return

    return (
      <Grid
        ref={ref}
        templateColumns='repeat(2, 1fr)'
        gap={{ base: 'lg', sm: 'md' }}
        mt='xl'
        {...rest}
      >
        <PaginationItem document={prevDocument} isPrev />

        <PaginationItem document={nextDocument} alignItems='flex-end' />
      </Grid>
    )
  }),
)

type PaginationItemProps = GridItemProps & { document?: DocumentTypes; isPrev?: boolean }

const PaginationItem: FC<PaginationItemProps> = ({ document, isPrev, ...rest }) => {
  const { t } = useI18n()

  if (!document) return <Box />

  const { slug, menu, title } = document

  return (
    <GridItem
      as={Link}
      href={slug}
      display='flex'
      flexDirection='column'
      gap='sm'
      rounded='md'
      _focus={{ outline: 'none' }}
      _focusVisible={{ boxShadow: 'outline' }}
      {...rest}
    >
      <Text as='span' fontSize='sm' color='muted' {...(isPrev ? { ms: '1' } : { me: '1' })}>
        {t(`component.pagination.${isPrev ? 'prev' : 'next'}`)}
      </Text>

      <Text
        as='span'
        display='flex'
        alignItems='center'
        gap='0'
        fontSize={{ base: 'lg', sm: 'md' }}
        fontWeight='semibold'
        transitionProperty='colors'
        transitionDuration='fast'
        color={[`primary.500`, `primary.400`]}
        _hover={{
          color: [`primary.600`, `primary.500`],
        }}
        _active={{
          color: [`primary.700`, `primary.600`],
        }}
      >
        {isPrev ? <ChevronIcon transform='rotate(90deg)' fontSize='1.3em' /> : null}

        <Text as='span' noOfLines={1}>
          {menu ?? title}
        </Text>

        {!isPrev ? <ChevronIcon transform='rotate(-90deg)' fontSize='1.3em' /> : null}
      </Text>
    </GridItem>
  )
}
