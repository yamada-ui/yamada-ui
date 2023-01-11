import { ContainerPortal, DefaultPortal } from './'

export type PortalProps = {
  containerRef?: React.RefObject<HTMLElement | null>
  children: React.ReactNode
  appendToParentPortal?: boolean
}

export const Portal = ({ containerRef, appendToParentPortal = true, children }: PortalProps) => {
  return containerRef ? (
    <ContainerPortal containerRef={containerRef} {...{ children }} />
  ) : (
    <DefaultPortal appendToParentPortal={appendToParentPortal} {...{ children }} />
  )
}

Portal.className = 'ui-portal'
Portal.selector = '.ui-portal'
