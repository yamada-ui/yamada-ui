"use client"

import type { FC, PropsWithChildren } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { FadeProps } from "../fade"
import type { UseInputBorderProps } from "../input"
import type { Loading } from "../loading"
import type { DropzoneStyle } from "./dropzone.style"
import type { UseDropzoneProps, UseDropzoneReturn } from "./use-dropzone"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { Fade } from "../fade"
import { useInputBorder } from "../input"
import { useLoadingComponent } from "../loading"
import { Portal } from "../portal"
import { dropzoneStyle } from "./dropzone.style"
import { useDropzone } from "./use-dropzone"

interface ComponentContext
  extends Pick<
    UseDropzoneReturn,
    "dragAccept" | "dragIdle" | "dragReject" | "loading"
  > {}

export interface DropzoneRootProps
  extends Merge<HTMLStyledProps, UseDropzoneProps>,
    UseInputBorderProps,
    ThemeProps<DropzoneStyle>,
    Pick<DropzoneLoadingProps, "loadingScheme"> {
  /**
   * Props for dropzone input element.
   */
  inputProps?: HTMLStyledProps<"input">
  /**
   * Props for dropzone loading icon element.
   */
  loadingProps?: DropzoneLoadingProps
  /**
   * Props for dropzone overlay element.
   */
  overlayProps?: DropzoneOverlayProps
}

const {
  ComponentContext,
  PropsContext: DropzonePropsContext,
  useComponentContext,
  usePropsContext: useDropzonePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<DropzoneRootProps, DropzoneStyle>(
  "dropzone",
  dropzoneStyle,
)

export { DropzonePropsContext, useDropzonePropsContext }

/**
 * `Dropzone` is a component used for uploading files via drag and drop.
 *
 * @see https://yamada-ui.com/docs/components/dropzone
 */
export const DropzoneRoot = withProvider(
  ({
    children,
    errorBorderColor,
    focusBorderColor,
    loadingScheme,
    inputProps,
    loadingProps,
    overlayProps,
    ...rest
  }) => {
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })
    const {
      dragAccept,
      dragIdle,
      dragReject,
      loading,
      getInputProps,
      getRootProps,
    } = useDropzone(rest)
    const context = useMemo(
      () => ({
        dragAccept,
        dragIdle,
        dragReject,
        loading,
      }),
      [dragAccept, dragIdle, dragReject, loading],
    )

    return (
      <ComponentContext value={context}>
        <Portal>
          <styled.input {...getInputProps(inputProps)} />
        </Portal>

        <styled.div data-group {...varProps} {...getRootProps()}>
          <DropzoneOverlay {...overlayProps}>
            <DropzoneLoading loadingScheme={loadingScheme} {...loadingProps} />
          </DropzoneOverlay>

          {children}
        </styled.div>
      </ComponentContext>
    )
  },
  "root",
)()

export interface DropzoneIconProps extends HTMLStyledProps<"svg"> {}

export const DropzoneIcon = withContext<"svg", DropzoneIconProps>(
  "svg",
  "icon",
)()

export interface DropzoneTitleProps extends HTMLStyledProps<"p"> {}

export const DropzoneTitle = withContext<"p", DropzoneTitleProps>(
  "p",
  "title",
)()

export interface DropzoneDescriptionProps extends HTMLStyledProps<"p"> {}

export const DropzoneDescription = withContext<"p", DropzoneDescriptionProps>(
  "p",
  "description",
)()

export interface DropzoneDescriptionProps extends HTMLStyledProps<"p"> {}

interface DropzoneOverlayProps extends FadeProps {
  loadingProps?: DropzoneLoadingProps
}

const DropzoneOverlay = withContext<"div", DropzoneOverlayProps>(
  Fade,
  "overlay",
)(undefined, (props) => {
  const { loading } = useComponentContext()

  return { open: loading, unmountOnExit: true, ...props }
})

interface DropzoneLoadingProps extends Loading.Props {
  /**
   * The loading scheme.
   *
   * @default 'oval'
   */
  loadingScheme?: Loading.Scheme
}

const DropzoneLoading = withContext<"svg", DropzoneLoadingProps>(
  ({ loadingScheme = "oval", ...rest }) => {
    const Component = useLoadingComponent(loadingScheme)

    return <Component {...rest} />
  },
  "loading",
)()

export interface DropzoneAcceptProps extends PropsWithChildren {}

export const DropzoneAccept: FC<DropzoneAcceptProps> = ({ children }) => {
  const { dragAccept } = useComponentContext()

  return dragAccept ? children : null
}

export interface DropzoneRejectProps extends PropsWithChildren {}

export const DropzoneReject: FC<DropzoneRejectProps> = ({ children }) => {
  const { dragReject } = useComponentContext()

  return dragReject ? children : null
}

export interface DropzoneIdleProps extends PropsWithChildren {}

export const DropzoneIdle: FC<DropzoneIdleProps> = ({ children }) => {
  const { dragIdle } = useComponentContext()

  return dragIdle ? children : null
}
