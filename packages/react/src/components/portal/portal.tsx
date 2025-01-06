import type { ReactNode, RefObject } from "react"
import type { FC } from "../../core"
import { ContainerPortal } from "./container-portal"
import { DefaultPortal } from "./default-portal"

export interface PortalProps {
  children: ReactNode
  /**
   * If `true`, the portal will check if it is within a parent portal
   * and append itself to the parent's portal node.
   * This provides nesting for portals.
   *
   * If `false`, the portal will always append to `document.body`
   * regardless of nesting. It is used to opt out of portal nesting.
   *
   * @default true
   */
  appendToParentPortal?: boolean
  /**
   * The `ref` to the component where the portal will be attached to.
   */
  containerRef?: RefObject<HTMLElement | null>
  /**
   * If `true`, the forwarding will be disabled.
   */
  disabled?: boolean
}

/**
 * `Portal` is a component that renders elements outside of the current `DOM` hierarchy.
 *
 * @see Docs https://yamada-ui.com/components/other/portal
 */
export const Portal: FC<PortalProps> = ({
  appendToParentPortal = true,
  children,
  containerRef,
  disabled,
}) => {
  if (disabled) return children

  return containerRef ? (
    <ContainerPortal
      containerRef={containerRef}
      {...{ appendToParentPortal, children }}
    />
  ) : (
    <DefaultPortal {...{ appendToParentPortal, children }} />
  )
}

Portal.__ui__ = "Portal"
