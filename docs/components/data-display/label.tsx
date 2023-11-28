import type { TagProps } from "@yamada-ui/react"
import { forwardRef, Tag } from "@yamada-ui/react"
import { memo } from "react"

export type LabelProps = TagProps

export const Label = memo(
  forwardRef<LabelProps, "div">(({ children, ...rest }, ref) => {
    return children ? (
      <Tag
        ref={ref}
        size="sm"
        colorScheme={
          children === "New"
            ? "blue"
            : children === "Experimental"
              ? "purple"
              : children === "Planned"
                ? "orange"
                : "gray"
        }
        {...rest}
      >
        {children}
      </Tag>
    ) : null
  }),
)
