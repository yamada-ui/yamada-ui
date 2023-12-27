import type { TagProps } from "@yamada-ui/react"
import { forwardRef, Tag } from "@yamada-ui/react"
import { memo } from "react"

export type LabelProps = TagProps

export const Label = memo(
  forwardRef<LabelProps, "div">(({ children, ...rest }, ref) => {
    let colorScheme: TagProps["colorScheme"] = "gray"

    switch (children) {
      case "New":
        colorScheme = "blue"
        break

      case "Experimental":
        colorScheme = "purple"
        break

      case "Planned":
        colorScheme = "orange"
        break

      case "Updated":
        colorScheme = "green"
        break

      default:
        break
    }

    return children ? (
      <Tag ref={ref} size="sm" colorScheme={colorScheme} {...rest}>
        {children}
      </Tag>
    ) : null
  }),
)
