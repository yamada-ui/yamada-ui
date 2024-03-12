import { forwardRef, ui } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { useTooltip } from "./use-chart"

export type ChartTooltipProps = {
  label: string
  payload: Dict[] | undefined
  valueFormatter?: (value: number) => string
}

export const ChartTooltip = forwardRef<ChartTooltipProps, "div">(
  ({ label, payload = [], valueFormatter }, ref) => {
    const { styles } = useTooltip()

    const items = payload.map(({ color, name, value: _value } = {}, index) => {
      const value = valueFormatter ? valueFormatter(_value) : _value

      return (
        <ui.div key={`tooltip-payload-${index}`} __css={styles.tooltipContent}>
          <ui.p __css={styles.tooltipLabel}>
            <ui.div background={color} __css={styles.tooltipColorTip} />

            <ui.span __css={styles.tooltipLabelText}>{name}</ui.span>
          </ui.p>

          <ui.span __css={styles.tooltipValue}>{value}</ui.span>
        </ui.div>
      )
    })

    return (
      <ui.div ref={ref} __css={styles.tooltip}>
        <ui.p __css={styles.tooltipTitle}>{label}</ui.p>

        {items}
      </ui.div>
    )
  },
)
