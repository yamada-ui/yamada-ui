import type { CSSUIObject, HTMLUIProps, Token } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx, replaceObject } from "@yamada-ui/utils"
import { Children } from "react"

interface AspectRatioOptions {
  /**
   * The aspect ratio of the Box.
   *
   * @default '4 / 3'
   */
  ratio?: Token<number>
}

export interface AspectRatioProps extends AspectRatioOptions, HTMLUIProps {}

/**
 * `AspectRatio` is a component for embedding things like videos and maps while maintaining the aspect ratio.
 *
 * @see Docs https://yamada-ui.com/components/layouts/aspect-ratio
 */
export const AspectRatio = forwardRef<AspectRatioProps, "div">(
  ({ className, children, ratio = 4 / 3, ...rest }, ref) => {
    const child = Children.only(children)

    const css: CSSUIObject = {
      "& > *:not(style)": {
        alignItems: "center",
        bottom: "0",
        display: "flex",
        h: "100%",
        justifyContent: "center",
        left: "0",
        overflow: "hidden",
        position: "absolute",
        right: "0",
        top: "0",
        w: "100%",
      },
      "& > img, & > video": {
        objectFit: "cover",
      },
      position: "relative",
      _before: {
        content: `""`,
        display: "block",
        h: 0,
        pb: replaceObject(ratio, (r) => `${(1 / r) * 100}%`),
      },
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-aspect-ratio", className)}
        __css={css}
        {...rest}
      >
        {child}
      </ui.div>
    )
  },
)
