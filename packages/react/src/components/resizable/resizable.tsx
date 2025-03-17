import type {
  ForwardedRef,
  ReactElement,
  Ref,
  RefAttributes,
  RefObject,
} from "react"
import type {
  ComponentArgs,
  FC,
  HTMLStyledProps,
  HTMLStyledPropsWithoutAs,
  ThemeProps,
} from "../../core"
import type { Merge } from "../../utils"
import type { ResizableStyle } from "./resizable.style"
import type {
  ResizableGroupControl,
  ResizableOrientation,
  UseResizableItemProps,
  UseResizableProps,
  UseResizableTriggerProps,
} from "./use-resizable"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { createSlotComponent, styled } from "../../core"
import { useValue } from "../../hooks/use-value"
import { resizableStyle } from "./resizable.style"
import {
  useResizable,
  useResizableItem,
  useResizableTrigger,
} from "./use-resizable"

/**
 * `Resizable` is accessible resizable panel groups and layouts with keyboard support.
 *
 * @see Docs https://yamada-ui.com/components/resizable
 */
export interface ResizableRootProps
  extends HTMLStyledProps,
    ThemeProps<ResizableStyle>,
    Omit<UseResizableProps, "orientation" | "ref"> {
  /**
   * Ref for resizable container element.
   */
  containerRef?: ForwardedRef<HTMLDivElement>
}

interface ResizableContext {
  controlRef: RefObject<null | ResizableGroupControl>
  orientation: ResizableOrientation
  disabled?: boolean
}

export const {
  ComponentContext: ResizableContext,
  PropsContext: ResizablePropsContext,
  useComponentContext: useResizableContext,
  usePropsContext: useResizablePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ResizableRootProps, ResizableStyle, ResizableContext>(
  "resizable",
  resizableStyle,
)

export const ResizableRoot: FC<ResizableRootProps> = withProvider(
  ({ ref, children, containerRef, ...props }) => {
    const orientation = useValue(props.orientation)

    const { getGroupProps, getRootProps, ...rest } = useResizable({
      ref,
      ...props,
      orientation,
    })

    return (
      <ResizableContext value={rest}>
        <styled.div {...getRootProps({ ref: containerRef })}>
          <PanelGroup {...getGroupProps()}>{children}</PanelGroup>
        </styled.div>
      </ResizableContext>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)()

const forwardProps = ["order"]

const UIPanel = styled(Panel, { forwardProps })

export interface ResizableItemProps extends UseResizableItemProps {
  /**
   * Ref for resizable item inner element.
   */
  innerRef?: Ref<HTMLDivElement>
}

export const ResizableItem = withContext<"div", ResizableItemProps>(
  ({
    boxSize,
    children,
    h,
    height,
    innerRef,
    maxH,
    maxHeight,
    maxW,
    maxWidth,
    minH,
    minHeight,
    minW,
    minWidth,
    w,
    width,
    ...rest
  }) => {
    const { getItemProps, getPanelProps } = useResizableItem(rest)

    return (
      <UIPanel
        {...getPanelProps({
          boxSize,
          h,
          height,
          maxH,
          maxHeight,
          maxW,
          maxWidth,
          minH,
          minHeight,
          minW,
          minWidth,
          w,
          width,
        })}
      >
        <styled.div {...getItemProps({ ref: innerRef })}>{children}</styled.div>
      </UIPanel>
    )
  },
  "item",
)()

export interface ResizableTriggerProps
  extends Merge<
    Omit<UseResizableTriggerProps, "ref">,
    Omit<HTMLStyledPropsWithoutAs, "id" | "onBlur" | "onFocus">
  > {
  /**
   * The resizable trigger icon to use.
   */
  icon?: ReactElement
  /**
   * Props for resizable trigger icon component.
   */
  iconProps?: HTMLStyledProps
}

export const ResizableTrigger = withContext<"div", ResizableTriggerProps>(
  ({ children, icon, iconProps, ...rest }) => {
    const { getIconProps, getTriggerProps } = useResizableTrigger(rest)

    return (
      <styled.div as={PanelResizeHandle} {...getTriggerProps()}>
        {icon ? (
          <ResizableIcon {...getIconProps(iconProps)}>{icon}</ResizableIcon>
        ) : null}

        {children}
      </styled.div>
    )
  },
  "trigger",
)() as ComponentArgs & {
  (props: RefAttributes<HTMLElement> & ResizableTriggerProps): ReactElement
}

interface ResizableIconProps extends HTMLStyledProps {}

const ResizableIcon = withContext<"div", ResizableIconProps>("div", "icon")()
