import type { BreadcrumbProps as UIBreadcrumbProps } from "@yamada-ui/react"
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbDivider,
  ChevronIcon,
  forwardRef,
  Breadcrumb as UIBreadcrumb,
} from "@yamada-ui/react"
import { usePage } from "contexts"
import Link from "next/link"
import { memo } from "react"

export interface BreadcrumbProps extends UIBreadcrumbProps {}

export const Breadcrumb = memo(
  forwardRef<BreadcrumbProps, "div">(({ ...rest }, ref) => {
    const { documentBreadcrumbs = [] } = usePage()

    return documentBreadcrumbs.length ? (
      <UIBreadcrumb
        ref={ref}
        color="muted"
        fontSize="sm"
        gap="1"
        mb="sm"
        divider={<ChevronIcon fontSize="1rem" transform="rotate(-90deg)" />}
        listProps={{ h: 6 }}
        {...rest}
      >
        {documentBreadcrumbs.map(({ slug, title }, index) => (
          <BreadcrumbItem key={slug}>
            <BreadcrumbLink as={Link} href={slug}>
              {title}
            </BreadcrumbLink>

            {documentBreadcrumbs.length === index + 1 ? (
              <BreadcrumbDivider ms="1">
                <ChevronIcon fontSize="1rem" transform="rotate(-90deg)" />
              </BreadcrumbDivider>
            ) : null}
          </BreadcrumbItem>
        ))}
      </UIBreadcrumb>
    ) : null
  }),
)
