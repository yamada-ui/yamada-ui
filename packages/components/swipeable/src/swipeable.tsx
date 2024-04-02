import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { createContext, cx } from "@yamada-ui/utils"

type SwipeableContext = Record<string, CSSUIObject>

const [SwipeableProvider, useSwipeable] = createContext<SwipeableContext>({
  strict: false,
  name: "SwipeableContext",
})
useSwipeable()

type SwipeableOptions = {}

export type SwipeableProps = HTMLUIProps<"div"> &
  ThemeProps<"Swipeable"> &
  SwipeableOptions

export const Swipeable = forwardRef<SwipeableProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Swipeable", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {}

  return (
    <SwipeableProvider value={styles}>
      <ui.div
        ref={ref}
        className={cx("ui-swipeable", className)}
        __css={css}
        {...rest}
      />
    </SwipeableProvider>
  )
})
