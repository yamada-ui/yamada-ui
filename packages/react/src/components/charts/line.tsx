import type { HTMLStyledProps } from "../../core"
import type { Merge } from "../../utils"
import type { LineStyle } from "./line.style"
import type { UseLineProps } from "./use-line"
import { Line as RechartsLine } from "recharts"
import { createComponent } from "../../core"
import { lineStyle } from "./line.style"
import { useLine } from "./use-line"

export interface LineProps
  extends Merge<HTMLStyledProps<"svg">, UseLineProps> {}

const {
  ComponentContext: LineComponentContext,
  PropsContext: LinePropsContext,
  useComponentContext: useLineComponentContext,
  usePropsContext: useLinePropsContext,
  withContext,
} = createComponent<LineProps, LineStyle>("chart-line", lineStyle)

export {
  LineComponentContext,
  LinePropsContext,
  useLineComponentContext,
  useLinePropsContext,
}

// NOTE: When processed with the second argument, properties such as `stroke` are absorbed by YamadaUI.
export const Line = withContext<"svg", LineProps>((props) => {
  const customProps = useLineComponentContext()
  const { getLineProps } = useLine({ ...customProps, ...props })

  return <RechartsLine {...getLineProps()} />
})()
