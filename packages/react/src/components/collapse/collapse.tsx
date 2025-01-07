import type { ThemeProps } from "../../core"
import type { CollapseStyle } from "./collapse.style"
import type { UseCollapseProps } from "./use-collapse"
import { AnimatePresence } from "motion/react"
import { createComponent } from "../../core"
import { motion } from "../motion"
import { collapseStyle } from "./collapse.style"
import { useCollapse } from "./use-collapse"

export interface CollapseProps
  extends UseCollapseProps,
    ThemeProps<CollapseStyle> {}

export const {
  PropsContext: CollapsePropsContext,
  usePropsContext: useCollapsePropsContext,
  withContext,
} = createComponent<CollapseProps, CollapseStyle>("collapse", collapseStyle)

/**
 * `Collapse` is a component that allows you to expand or collapse an element for display.
 *
 * @see Docs https://yamada-ui.com/components/transitions/collapse
 */
export const Collapse = withContext((props) => {
  const { custom, open, getRootProps } = useCollapse(props)

  return (
    <AnimatePresence custom={custom} initial={false}>
      {open ? <motion.div {...getRootProps()} /> : null}
    </AnimatePresence>
  )
})()
