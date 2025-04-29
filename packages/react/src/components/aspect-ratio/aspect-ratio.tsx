import type { FC, HTMLStyledProps, StyleValue } from "../../core"
import type { AspectRatioStyle } from "./aspect-ratio.style"
import { Children } from "react"
import { createComponent } from "../../core"
import { replaceObject } from "../../utils"
import { aspectRatioStyle } from "./aspect-ratio.style"

export interface AspectRatioProps extends HTMLStyledProps {
  /**
   * The aspect ratio of the Box.
   *
   * @default '4 / 3'
   */
  ratio?: StyleValue<number>
}

export const {
  PropsContext: AspectRatioPropsContext,
  usePropsContext: useAspectRatioPropsContext,
  withContext,
} = createComponent<AspectRatioProps, AspectRatioStyle>(
  "aspect-ratio",
  aspectRatioStyle,
)

/**
 * `AspectRatio` is a component for embedding things like videos and maps while maintaining the aspect ratio.
 *
 * @see https://yamada-ui.com/components/aspect-ratio
 */
export const AspectRatio: FC<AspectRatioProps> = withContext("div")(
  undefined,
  ({ children, ratio = 4 / 3, ...rest }) => {
    const child = Children.only(children)

    return {
      ...rest,
      children: child,
      _before: {
        display: "block",
        h: 0,
        pb: replaceObject(ratio, (r) => `${(1 / r) * 100}%`),
      },
    }
  },
)
