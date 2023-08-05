import {
  Breadcrumb as UIBreadcrumb,
  BreadcrumbProps as UIBreadcrumbProps,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  ChevronIcon,
  forwardRef,
} from '@yamada-ui/react'
import Link from 'next/link'
import { memo } from 'react'
import { usePage } from 'contexts'

export type BreadcrumbProps = UIBreadcrumbProps

export const Breadcrumb = memo(
  forwardRef<BreadcrumbProps, 'div'>(({ ...rest }, ref) => {
    const { breadcrumbs = [] } = usePage()

    return breadcrumbs.length ? (
      <UIBreadcrumb
        ref={ref}
        separator={<ChevronIcon fontSize='1rem' transform='rotate(-90deg)' />}
        mb='sm'
        gap='1'
        fontSize='sm'
        color='muted'
        listProps={{ h: 6 }}
        {...rest}
      >
        {breadcrumbs.map(({ title, menu, slug }, index) => (
          <BreadcrumbItem key={slug}>
            <BreadcrumbLink as={Link} href={slug}>
              {menu ?? title}
            </BreadcrumbLink>

            {breadcrumbs.length === index + 1 ? (
              <BreadcrumbSeparator ms='1'>
                <ChevronIcon fontSize='1rem' transform='rotate(-90deg)' />
              </BreadcrumbSeparator>
            ) : null}
          </BreadcrumbItem>
        ))}
      </UIBreadcrumb>
    ) : null
  }),
)
