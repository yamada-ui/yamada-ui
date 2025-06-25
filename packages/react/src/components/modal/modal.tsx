"use client"

import type { PropsWithChildren, ReactNode } from "react"
import type { FC, HTMLProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { ButtonProps } from "../button"
import type { CloseButtonProps } from "../button"
import type { FocusLockProps } from "../focus-lock"
import type { HTMLMotionProps, HTMLMotionPropsWithoutAs } from "../motion"
import type { PopupAnimationProps } from "../popover"
import type { PortalProps } from "../portal"
import type { ModalStyle } from "./modal.style"
import type { UseModalProps, UseModalReturn } from "./use-modal"
import { AnimatePresence } from "motion/react"
import { useMemo } from "react"
import { RemoveScroll } from "react-remove-scroll"
import { createSlotComponent, styled } from "../../core"
import {
  cast,
  findChildren,
  getValidChildren,
  wrapOrPassProps,
} from "../../utils"
import { Button } from "../button"
import { CloseButton } from "../button"
import { fadeVariants } from "../fade"
import { FocusLock } from "../focus-lock"
import { motion } from "../motion"
import { getPopupAnimationProps } from "../popover"
import { Portal } from "../portal"
import { modalStyle } from "./modal.style"
import { useModal } from "./use-modal"

interface ComponentContext
  extends Omit<UseModalReturn, "getRootProps">,
    PopupAnimationProps,
    Pick<ModalRootProps, "withCloseButton"> {}

export interface ModalRootProps
  extends ThemeProps<ModalStyle>,
    Omit<UseModalProps, "title">,
    Pick<
      FocusLockProps,
      | "autoFocus"
      | "finalFocusRef"
      | "initialFocusRef"
      | "lockFocusAcrossFrames"
      | "restoreFocus"
    >,
    PopupAnimationProps,
    ShorthandModalContentProps {
  /**
   * Handle zoom or pinch gestures on iOS devices when scroll locking is enabled.
   *
   * @default false.
   */
  allowPinchZoom?: boolean
  /**
   * If `true`, scrolling will be disabled on the `body` when the modal opens.
   *
   * @default true
   */
  blockScrollOnMount?: boolean
  /**
   * The modal trigger to use.
   */
  trigger?: ReactNode
  /**
   * If `true`, display the modal close button.
   *
   * @default true
   */
  withCloseButton?: boolean
  /**
   * If `true`, display the modal overlay.
   *
   * @default true
   */
  withOverlay?: boolean
  /**
   * Props to be forwarded to the portal component.
   */
  portalProps?: Omit<PortalProps, "children">
  /**
   * Callback function to run side effects after the modal has closed.
   */
  onCloseComplete?: () => void
}

export const {
  ComponentContext,
  PropsContext: ModalPropsContext,
  useComponentContext,
  usePropsContext: useModalPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ModalRootProps, ModalStyle, ComponentContext>(
  "modal",
  modalStyle,
)

/**
 * `Modal` is a component that is displayed over the main content to focus the user's attention solely on the information.
 *
 * @see https://yamada-ui.com/components/overlay/modal
 */
export const ModalRoot = withProvider<"div", ModalRootProps>(
  ({
    allowPinchZoom = false,
    animationScheme = "scale",
    autoFocus,
    blockScrollOnMount = true,
    body,
    cancel,
    children,
    duration,
    finalFocusRef,
    footer,
    header,
    initialFocusRef,
    lockFocusAcrossFrames = true,
    middle,
    restoreFocus,
    success,
    title,
    trigger,
    withCloseButton = true,
    withOverlay = true,
    portalProps,
    onCancel,
    onCloseComplete,
    onMiddle,
    onSuccess,
    ...props
  }) => {
    const validChildren = getValidChildren(children)
    const [openTrigger, ...omittedChildren] = findChildren(
      validChildren,
      ModalOpenTrigger,
    )
    const [customOverlay, ...cloneChildren] = findChildren(
      omittedChildren,
      ModalOverlay,
    )
    const { open, getRootProps, ...rest } = useModal(props)
    const hasChildren = !!cloneChildren.length
    const customOpenTrigger = trigger ? (
      <ModalOpenTrigger>{trigger}</ModalOpenTrigger>
    ) : null

    const context = useMemo(
      () => ({
        animationScheme,
        duration,
        open,
        withCloseButton,
        ...rest,
      }),
      [animationScheme, duration, open, withCloseButton, rest],
    )

    return (
      <ComponentContext value={context}>
        {openTrigger ?? customOpenTrigger}

        <AnimatePresence onExitComplete={onCloseComplete}>
          {open ? (
            <Portal {...portalProps}>
              <FocusLock
                autoFocus={autoFocus}
                finalFocusRef={finalFocusRef}
                initialFocusRef={initialFocusRef}
                lockFocusAcrossFrames={lockFocusAcrossFrames}
                restoreFocus={restoreFocus}
              >
                <RemoveScroll
                  allowPinchZoom={allowPinchZoom}
                  enabled={blockScrollOnMount}
                  forwardProps
                >
                  <styled.div {...getRootProps()}>
                    {customOverlay ?? (withOverlay ? <ModalOverlay /> : null)}

                    {hasChildren ? (
                      cloneChildren
                    ) : (
                      <ShorthandModalContent
                        body={body}
                        cancel={cancel}
                        footer={footer}
                        header={header}
                        middle={middle}
                        success={success}
                        title={title}
                        onCancel={onCancel}
                        onMiddle={onMiddle}
                        onSuccess={onSuccess}
                      />
                    )}
                  </styled.div>
                </RemoveScroll>
              </FocusLock>
            </Portal>
          ) : null}
        </AnimatePresence>
      </ComponentContext>
    )
  },
  "root",
)()

export interface ModalOpenTriggerProps extends HTMLStyledProps<"button"> {}

export const ModalOpenTrigger = withContext<"button", ModalOpenTriggerProps>(
  "button",
  { name: "OpenTrigger", slot: ["trigger", "open"] },
)(undefined, (props) => {
  const { getOpenTriggerProps } = useComponentContext()

  return { asChild: true, ...getOpenTriggerProps(props) }
})

export interface ModalCloseTriggerProps extends HTMLStyledProps<"button"> {}

export const ModalCloseTrigger = withContext<"button", ModalCloseTriggerProps>(
  "button",
  { name: "CloseTrigger", slot: ["trigger", "close"] },
)(undefined, (props) => {
  const { getCloseTriggerProps } = useComponentContext()

  return { asChild: true, ...getCloseTriggerProps(props) }
})

export interface ModalCloseButtonProps extends CloseButtonProps {}

export const ModalCloseButton = withContext<"button", ModalCloseButtonProps>(
  CloseButton,
  "closeButton",
)(undefined, (props) => {
  const { getCloseButtonProps } = useComponentContext()

  return { ...getCloseButtonProps(props) }
})

export interface ModalOverlayProps extends HTMLMotionProps {}

export const ModalOverlay = withContext<"div", ModalOverlayProps>((props) => {
  const { animationScheme, duration, getOverlayProps } = useComponentContext()

  return (
    <motion.div
      custom={{ duration }}
      {...(animationScheme !== "none"
        ? {
            animate: "enter",
            exit: "exit",
            initial: "exit",
            variants: fadeVariants,
          }
        : {})}
      {...cast<HTMLMotionProps>(getOverlayProps(cast<HTMLProps>(props)))}
    />
  )
}, "overlay")()

export interface ModalContentProps
  extends Omit<HTMLMotionProps<"section">, "children">,
    PropsWithChildren {}

export const ModalContent = withContext<"section", ModalContentProps>(
  ({ children, ...rest }) => {
    const { animationScheme, duration, withCloseButton, getContentProps } =
      useComponentContext()
    const validChildren = getValidChildren(children)
    const [customCloseButton, ...cloneChildren] = findChildren(
      validChildren,
      ModalCloseButton,
    )

    return (
      <motion.section
        {...getPopupAnimationProps(animationScheme, duration)}
        {...cast<HTMLMotionPropsWithoutAs<"section">>(
          getContentProps(cast<HTMLProps<"section">>(rest)),
        )}
      >
        {customCloseButton ?? (withCloseButton ? <ModalCloseButton /> : null)}

        {cloneChildren}
      </motion.section>
    )
  },
  "content",
)()

interface ShorthandModalContentProps {
  /**
   * The modal body to use.
   */
  body?: ModalBodyProps | ReactNode
  /**
   * The modal cancel button to use.
   */
  cancel?: ButtonProps | ReactNode
  /**
   * The modal footer to use.
   */
  footer?: ModalFooterProps | ReactNode
  /**
   * The modal header to use.
   */
  header?: ModalHeaderProps | ReactNode
  /**
   * The modal middle button to use.
   */
  middle?: ButtonProps | ReactNode
  /**
   * The modal success button to use.
   */
  success?: ButtonProps | ReactNode
  /**
   * The modal title to use.
   */
  title?: ModalTitleProps | ReactNode
  /**
   * The callback invoked when cancel button clicked.
   */
  onCancel?: (onClose: () => void) => void
  /**
   * The callback invoked when middle button clicked.
   */
  onMiddle?: (onClose: () => void) => void
  /**
   * The callback invoked when success button clicked.
   */
  onSuccess?: (onClose: () => void) => void
}

export const ShorthandModalContent: FC<ShorthandModalContentProps> = ({
  body,
  cancel,
  footer,
  header,
  middle,
  success,
  title,
  onCancel,
  onMiddle,
  onSuccess,
}) => {
  const { onClose } = useComponentContext()
  const customHeader = wrapOrPassProps(ModalHeader, header)
  const customTitle = wrapOrPassProps(ModalTitle, title)
  const customBody = wrapOrPassProps(ModalBody, body)
  const customFooter = wrapOrPassProps(ModalFooter, footer)
  const customCancel = wrapOrPassProps(Button, cancel, {
    variant: "ghost",
    onClick: () => (onCancel ? onCancel(onClose) : onClose()),
  })
  const customMiddle = wrapOrPassProps(Button, middle, {
    colorScheme: "secondary",
    onClick: () => (onMiddle ? onMiddle(onClose) : onClose()),
  })
  const customSuccess = wrapOrPassProps(Button, success, {
    colorScheme: "primary",
    onClick: () => (onSuccess ? onSuccess(onClose) : onClose()),
  })

  return (
    <ModalContent>
      {customHeader ??
        (customTitle ? <ModalHeader>{customTitle}</ModalHeader> : null)}
      {customBody}
      {customFooter ??
        (customCancel || customMiddle || customSuccess ? (
          <ModalFooter>
            {customCancel}
            {customMiddle}
            {customSuccess}
          </ModalFooter>
        ) : null)}
    </ModalContent>
  )
}

export interface ModalHeaderProps extends HTMLStyledProps<"header"> {}

export const ModalHeader = withContext<"header", ModalHeaderProps>(
  "header",
  "header",
)(undefined, (props) => {
  const { getHeaderProps } = useComponentContext()

  return { ...getHeaderProps(props) }
})

export interface ModalTitleProps extends HTMLStyledProps<"h2"> {}

export const ModalTitle = withContext<"h2", ModalTitleProps>("h2", "title")(
  undefined,
  (props) => {
    const { getTitleProps } = useComponentContext()

    return { ...getTitleProps(props) }
  },
)

export interface ModalBodyProps extends HTMLStyledProps {}

export const ModalBody = withContext<"div", ModalBodyProps>("div", "body")(
  undefined,
  (props) => {
    const { getBodyProps } = useComponentContext()

    return { ...getBodyProps(props) }
  },
)

export interface ModalFooterProps extends HTMLStyledProps<"footer"> {}

export const ModalFooter = withContext<"footer", ModalFooterProps>(
  "footer",
  "footer",
)(undefined, (props) => {
  const { getFooterProps } = useComponentContext()

  return { ...getFooterProps(props) }
})
