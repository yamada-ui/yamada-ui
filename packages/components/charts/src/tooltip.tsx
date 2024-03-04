import { forwardRef, ui } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { useTooltip } from "./use-chart"

export type ChartTooltipProps = {
  label: string
  payload: Dict[] | undefined
}

export const ChartTooltip = forwardRef<ChartTooltipProps, "div">(
  (props, ref) => {
    const { label, payload } = props

    const { styles } = useTooltip()

    const items = payload?.map((value, index) => (
      <ui.div key={`tooltip-payload-${index}`} __css={styles.tooltipContent}>
        <ui.div __css={styles.tooltipLabel}>
          <ui.div background={value?.color} __css={styles.tooltipColorTip} />
          <ui.div __css={styles.tooltipLabelText}>{value?.name}</ui.div>
        </ui.div>
        <ui.div __css={styles.tooltipValue}>{value?.value}</ui.div>
      </ui.div>
    ))

    return (
      <ui.div ref={ref} __css={styles.tooltip}>
        <ui.div __css={styles.tooltipTitle}>{label}</ui.div>
        {items}
      </ui.div>
    )
  },
)
