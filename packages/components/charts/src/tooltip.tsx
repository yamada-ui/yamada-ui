import { forwardRef, ui } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"

export type ChartTooltipProps = {
  label: string
  payload: Dict[] | undefined
}

export const ChartTooltip = forwardRef<ChartTooltipProps, "div">(
  (props, ref) => {
    const { label, payload } = props

    return (
      <ui.div
        ref={ref}
        bgColor="Background"
        border="solid 1px gray"
        rounded="5px"
        padding={4}
      >
        <ui.div fontSize={18} marginBottom={2}>
          {label}
        </ui.div>
        {payload?.map((value, index) => (
          <ui.div
            key={`tooltip-payload-${index}`}
            __css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <ui.div
              __css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <ui.div rounded="9999px" background={value?.color} boxSize={3} />
              <ui.div color="gray">{value?.name}</ui.div>
            </ui.div>
            <ui.div>{value?.value}</ui.div>
          </ui.div>
        ))}
      </ui.div>
    )
  },
)
