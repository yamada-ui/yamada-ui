import type { ReactElement } from "react"
import type { ThemeProps } from "../../core"
import type { AiryStyle } from "./airy.style"
import type { UseAiryProps } from "./use-airy"
import { createComponent } from "../../core"
import { motion } from "../motion"
import { airyStyle } from "./airy.style"
import { useAiry } from "./use-airy"

export interface AiryProps extends UseAiryProps, ThemeProps<AiryStyle> {
  /**
   * Passing React elements to "from" is required.
   */
  from: ReactElement
  /**
   * Passing React elements to "to" is required.
   */
  to: ReactElement
}

export const {
  PropsContext: AiryPropsContext,
  usePropsContext: useAiryPropsContext,
  withContext,
} = createComponent<AiryProps, AiryStyle>("airy", airyStyle)

/**
 * `Airy` is a component that creates an airy animation, switching between two elements when one is clicked.
 *
 * @see Docs https://yamada-ui.com/components/transitions/airy
 */
export const Airy = withContext(({ from, to, ...rest }) => {
  const { value, getRootProps } = useAiry(rest)

  return (
    <motion.button {...getRootProps()}>
      {value === "from" ? from : to}
    </motion.button>
  )
})()
