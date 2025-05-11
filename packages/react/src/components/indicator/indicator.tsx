import type { HTMLStyledProps, PropGetter, ThemeProps } from "../../core"
import type { IndicatorStyle } from "./indicator.style"
import type { UseIndicatorProps } from "./use-indicator"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { indicatorStyle } from "./indicator.style"
import { useIndicator } from "./use-indicator"

interface IndicatorContext {
  getIconProps: PropGetter
  getPingProps: PropGetter
}

export interface IndicatorProps
  extends Omit<HTMLStyledProps, "offset">,
    ThemeProps<IndicatorStyle>,
    UseIndicatorProps {
  /**
   * If `true`, the indicator will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `label` is of type number, the maximum number displayed.
   *
   * @default 99
   */
  overflowCount?: number
  /**
   * If `true`, make an element scale and fade like a radar ping or ripple of water.
   *
   * @default false
   */
  ping?: boolean
  /**
   * If `true`, display 0.
   *
   * @default true
   */
  showZero?: boolean
}

export const {
  ComponentContext: IndicatorContext,
  PropsContext: IndicatorPropsContext,
  useComponentContext: useIndicatorContext,
  usePropsContext: useIndicatorPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<IndicatorProps, IndicatorStyle, IndicatorContext>(
  "indicator",
  indicatorStyle,
)

/**
 * `Indicator` is a component that displays at the corner of elements such as avatars.
 *
 * @see Docs https://yamada-ui.com/components/indicator
 */
export const Indicator = withProvider<"div", IndicatorProps>(
  ({
    children,
    disabled,
    overflowCount = 99,
    ping,
    showZero = true,
    ...rest
  }) => {
    const { label, numeric, getIconProps, getPingProps, getRootProps } =
      useIndicator(rest)

    const trulyDisabled =
      disabled ?? (numeric && !showZero && (label as number) <= 0)

    const renderLabel = useMemo(() => {
      if (numeric) {
        if ((label as number) > overflowCount) {
          return (
            <>
              {overflowCount}
              <styled.span lineHeight={1}>+</styled.span>
            </>
          )
        } else {
          return label
        }
      } else {
        return label
      }
    }, [numeric, label, overflowCount])

    const context = useMemo(
      () => ({
        getIconProps,
        getPingProps,
      }),
      [getIconProps, getPingProps],
    )

    return (
      <IndicatorContext value={context}>
        <styled.div {...getRootProps()}>
          {!trulyDisabled ? (
            <IndicatorIcon>
              {renderLabel}
              {ping ? <IndicatorPing /> : null}
            </IndicatorIcon>
          ) : null}
          {children}
        </styled.div>
      </IndicatorContext>
    )
  },
  "root",
)()

interface IndicatorIconProps extends HTMLStyledProps {}

const IndicatorIcon = withContext<"div", IndicatorIconProps>("div", "icon")(
  undefined,
  (props) => {
    const { getIconProps } = useIndicatorContext()

    return { ...getIconProps(props) }
  },
)

interface IndicatorPingProps extends HTMLStyledProps {}

const IndicatorPing = withContext<"div", IndicatorPingProps>("div", "ping")(
  undefined,
  (props) => {
    const { getPingProps } = useIndicatorContext()

    return { ...getPingProps(props) }
  },
)
