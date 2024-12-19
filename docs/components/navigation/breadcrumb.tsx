import type { BreadcrumbProps as UIBreadcrumbProps } from "@yamada-ui/react"
import { ChevronRightIcon } from "@yamada-ui/lucide"
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
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
        separator={<ChevronRightIcon fontSize="1rem" />}
        listProps={{ h: 6 }}
        separatorProps={{
          alignItems: "center",
          display: "inline-flex",
          justifyContent: "center",
        }}
        {...rest}
      >
        {documentBreadcrumbs.map(({ slug, title }, index) => (
          <BreadcrumbItem key={slug}>
            <BreadcrumbLink as={Link} href={slug}>
              {title}
            </BreadcrumbLink>

            {documentBreadcrumbs.length === index + 1 ? (
              <BreadcrumbSeparator ms="1">
                <ChevronRightIcon fontSize="1rem" />
              </BreadcrumbSeparator>
            ) : null}
          </BreadcrumbItem>
        ))}
      </UIBreadcrumb>
    ) : null
  }),
)
