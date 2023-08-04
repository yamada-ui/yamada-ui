import {
  Box,
  ChevronIcon,
  Grid,
  GridItem,
  GridItemProps,
  GridProps,
  Text,
  forwardRef,
  toneColor,
  useColorMode,
  useTheme,
} from '@yamada-ui/react'
import Link from 'next/link'
import { FC, memo } from 'react'
import { Doc, DocPagination } from 'contentlayer/generated'
import { useI18n } from 'contexts'

type PaginationItemProps = GridItemProps & { doc?: Doc; isPrev?: boolean }

const PaginationItem: FC<PaginationItemProps> = ({ doc, isPrev, ...rest }) => {
  const { t } = useI18n()
  const { theme } = useTheme()
  const { colorMode } = useColorMode()

  return doc ? (
    <GridItem
      as={Link}
      href={doc.slug}
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
        gap='xs'
        fontSize='lg'
        fontWeight='semibold'
        color={[
          toneColor('brand', 500)(theme, colorMode),
          toneColor('brand', 400)(theme, colorMode),
        ]}
        _hover={{
          color: [
            toneColor('brand', 400)(theme, colorMode),
            toneColor('brand', 300)(theme, colorMode),
          ],
        }}
        _active={{
          color: [
            toneColor('brand', 600)(theme, colorMode),
            toneColor('brand', 500)(theme, colorMode),
          ],
        }}
      >
        {isPrev ? <ChevronIcon transform='rotate(90deg)' fontSize='1.3em' /> : null}

        {doc.menu ?? doc.title}

        {!isPrev ? <ChevronIcon transform='rotate(-90deg)' fontSize='1.3em' /> : null}
      </Text>
    </GridItem>
  ) : (
    <Box />
  )
}

export type PaginationProps = GridProps & DocPagination

export const Pagination = memo(
  forwardRef<PaginationProps, 'div'>(({ prev, next, ...rest }, ref) => {
    if (!prev && !next) return

    return (
      <Grid ref={ref} templateColumns='repeat(2, 1fr)' gap='3xl' mt='xl' {...rest}>
        <PaginationItem doc={prev} isPrev />

        <PaginationItem doc={next} alignItems='flex-end' />
      </Grid>
    )
  }),
)
