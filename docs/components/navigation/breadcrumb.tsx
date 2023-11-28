import type { BreadcrumbProps as UIBreadcrumbProps } from "@yamada-ui/react"
import {
  Breadcrumb as UIBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  ChevronIcon,
  forwardRef,
} from "@yamada-ui/react"
import Link from "next/link"
import { memo } from "react"
import { usePage } from "contexts/page-context"

export type BreadcrumbProps = UIBreadcrumbProps

export const Breadcrumb = memo(
  forwardRef<BreadcrumbProps, "div">(({ ...rest }, ref) => {
    const { documentBreadcrumbs = [] } = usePage()

    return documentBreadcrumbs.length ? (
      <UIBreadcrumb
        ref={ref}
        separator={<ChevronIcon fontSize="1rem" transform="rotate(-90deg)" />}
        mb="sm"
        gap="1"
        fontSize="sm"
        color="muted"
        listProps={{ h: 6 }}
        {...rest}
      >
        {documentBreadcrumbs.map(({ title, menu, slug }, index) => (
          <BreadcrumbItem key={slug}>
            <BreadcrumbLink as={Link} href={slug}>
              {menu ?? title}
            </BreadcrumbLink>

            {documentBreadcrumbs.length === index + 1 ? (
              <BreadcrumbSeparator ms="1">
                <ChevronIcon fontSize="1rem" transform="rotate(-90deg)" />
              </BreadcrumbSeparator>
            ) : null}
          </BreadcrumbItem>
        ))}
      </UIBreadcrumb>
    ) : null
  }),
)
