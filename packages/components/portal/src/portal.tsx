import type { ReactNode, RefObject } from "react"
import { ContainerPortal, DefaultPortal } from "./"

export type PortalProps = {
  /**
   * The `ref` to the component where the portal will be attached to.
   */
  containerRef?: RefObject<HTMLElement | null>
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
   * If `true`, the forwarding will be disabled.
   */
  isDisabled?: boolean
}

export const Portal = ({
  containerRef,
  appendToParentPortal = true,
  isDisabled,
  children,
}: PortalProps) => {
  if (isDisabled) return children

  return containerRef ? (
    <ContainerPortal containerRef={containerRef} {...{ children }} />
  ) : (
    <DefaultPortal
      appendToParentPortal={appendToParentPortal}
      {...{ children }}
    />
  )
}

Portal.className = "ui-portal"
Portal.selector = ".ui-portal"
