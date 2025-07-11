import type { ForwardedRef, ReactNode } from "react"
import type {
  Accept,
  DropzoneOptions as ReactDropzoneOptions,
} from "react-dropzone-esm"
import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { FadeProps } from "../fade"
import type { FieldProps } from "../field"
import type { Loading } from "../loading"
import type { DropzoneStyle } from "./dropzone.style"
import { useMemo } from "react"
import { useId } from "react"
import { useDropzone } from "react-dropzone-esm"
import { createSlotComponent, styled } from "../../core"
import { assignRef, dataAttr, isArray } from "../../utils"
import { Fade } from "../fade"
import { useFieldProps } from "../field"
import { useLoadingComponent } from "../loading"
import { dropzoneStyle } from "./dropzone.style"
import { DropzoneContext, useDropzoneContext } from "./use-dropzone"
import { useDropzoneBorder } from "./use-dropzone-border"

// Array of property names that conflict with standard HTML event handlers (these require prefix changes)
type ConflictingEventProps =
  | "onDragEnter"
  | "onDragLeave"
  | "onDragOver"
  | "onDrop"
  | "onError"

export interface DropzoneRootProps
  extends Omit<HTMLStyledProps, "onDrop">,
    ThemeProps<DropzoneStyle>,
    FieldProps,
    Omit<ReactDropzoneOptions, "accept" | ConflictingEventProps> {
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * File types to accept.
   */
  accept?: Accept | string[]
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: CSSProps["borderColor"]
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: CSSProps["borderColor"]
  /**
   * If `true`, display the dropzone loading icon.
   *
   * @default false
   */
  loading?: boolean
  /**
   * The loading scheme.
   *
   * @default 'oval'
   */
  loadingScheme?: Loading.Scheme
  /**
   * Ref to a open function.
   */
  openRef?: ForwardedRef<() => undefined | void>
  /**
   * Props for dropzone loading icon element.
   */
  loadingProps?: Loading.Props
  /**
   * Called when the user drags files over the dropzone.
   */
  onDragEnter?: ReactDropzoneOptions["onDragEnter"]
  /**
   * Called when the user leaves the dropzone.
   */
  onDragLeave?: ReactDropzoneOptions["onDragLeave"]
  /**
   * Called when the user drags over the dropzone.
   */
  onDragOver?: ReactDropzoneOptions["onDragOver"]
  /**
   * Called when files are dropped on the dropzone.
   */
  onDrop?: ReactDropzoneOptions["onDrop"]
  /**
   * Called when accepted files are dropped on the dropzone.
   */
  onDropAccepted?: ReactDropzoneOptions["onDropAccepted"]
  /**
   * Called when rejected files are dropped on the dropzone.
   */
  onDropRejected?: ReactDropzoneOptions["onDropRejected"]
  /**
   * Called when an error occurs during file dropzone operations.
   */
  onDropzoneError?: ReactDropzoneOptions["onError"]
  /**
   * Called when the file dialog is canceled.
   */
  onFileDialogCancel?: ReactDropzoneOptions["onFileDialogCancel"]
  /**
   * Called when the file dialog is opened.
   */
  onFileDialogOpen?: ReactDropzoneOptions["onFileDialogOpen"]
}

export const {
  component,
  PropsContext: DropzonePropsContext,
  usePropsContext: useDropzonePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<DropzoneRootProps, DropzoneStyle>(
  "dropzone",
  dropzoneStyle,
)

/**
 * `Dropzone` is a component used for uploading files via drag and drop.
 *
 * @see https://yamada-ui.com/components/dropzone
 */
export const DropzoneRoot = withProvider((props) => {
  const {
    props: {
      id,
      name,
      accept,
      autoFocus,
      children,
      errorBorderColor,
      focusBorderColor,
      loading,
      loadingScheme,
      maxFiles,
      maxSize,
      multiple,
      noClick,
      noDrag,
      noDragEventsBubbling,
      noKeyboard,
      openRef,
      preventDropOnDocument,
      useFsAccessApi,
      loadingProps,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDrop,
      onDropAccepted,
      onDropRejected,
      onFileDialogCancel,
      onFileDialogOpen,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)

  const labelledbyId = useId()
  const disabled =
    loading || rest.disabled || ariaProps["aria-readonly"] === true
  const borderProps = useDropzoneBorder({
    errorBorderColor,
    focusBorderColor,
  })

  const {
    acceptedFiles,
    fileRejections,
    inputRef,
    isDragAccept: dragAccept,
    isDragActive,
    isDragReject: dragReject,
    isFileDialogActive,
    isFocused,
    open,
    rootRef,
    getInputProps,
    getRootProps,
  } = useDropzone({
    accept: isArray(accept)
      ? accept.reduce((prev, current) => ({ ...prev, [current]: [] }), {})
      : accept,
    autoFocus,
    disabled,
    maxFiles,
    maxSize,
    multiple,
    noClick,
    noDrag,
    noDragEventsBubbling,
    noKeyboard,
    preventDropOnDocument,
    useFsAccessApi,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onDropAccepted,
    onDropRejected,
    onFileDialogCancel,
    onFileDialogOpen,
  })
  const dragIdle = !dragAccept && !dragReject

  assignRef(openRef, open)

  const context = useMemo(
    () => ({
      acceptedFiles,
      dragAccept,
      dragIdle,
      dragReject,
      fileRejections,
      inputRef,
      isDragAccept: dragAccept,
      isDragActive,
      isDragReject: dragReject,
      isFileDialogActive,
      isFocused,
      loading,
      open,
      rootRef,
      getInputProps,
    }),
    [
      dragAccept,
      dragIdle,
      loading,
      dragReject,
      isDragActive,
      isFocused,
      isFileDialogActive,
      acceptedFiles,
      fileRejections,
      rootRef,
      inputRef,
      open,
      getInputProps,
    ],
  )

  return (
    <DropzoneContext value={context}>
      <styled.div
        id={labelledbyId}
        {...getRootProps()}
        {...ariaProps}
        {...dataProps}
        {...eventProps}
        data-accept={dataAttr(dragAccept)}
        data-idle={dataAttr(dragIdle)}
        data-loading={dataAttr(loading)}
        data-reject={dataAttr(dragReject)}
        {...borderProps}
        {...rest}
      >
        <DropzoneLoadingOverlay
          loadingScheme={loadingScheme}
          loadingProps={loadingProps}
        />

        <styled.input
          id={id}
          name={name}
          aria-labelledby={labelledbyId}
          disabled={ariaProps["aria-disabled"] === true}
          readOnly={ariaProps["aria-readonly"] === true}
          {...ariaProps}
          {...getInputProps()}
        />
        {children}
      </styled.div>
    </DropzoneContext>
  )
}, "root")()

export interface DropzoneAcceptProps {
  /**
   * The content to display when files are being dragged over the dropzone and are accepted.
   */
  children: ReactNode
}

/**
 * A component that renders its children only when files are being dragged over the dropzone and are accepted.
 */
export const DropzoneAccept = ({ children }: DropzoneAcceptProps) => {
  const { dragAccept } = useDropzoneContext()

  return dragAccept ? children : null
}

DropzoneAccept.displayName = "DropzoneAccept"

export interface DropzoneLoadingOverlayProps extends FadeProps {
  loadingScheme?: Loading.Scheme
  loadingProps?: Loading.Props
}

/**
 * A component that renders a loading overlay when the dropzone is in a loading state.
 */
export const DropzoneLoadingOverlay = withContext<
  "div",
  DropzoneLoadingOverlayProps
>(({ loadingScheme = "oval", loadingProps, ...props }) => {
  const { loading } = useDropzoneContext()
  const LoadingComponent = useLoadingComponent(loadingScheme)

  return (
    <Fade open={loading} unmountOnExit {...props}>
      <LoadingComponent colorScheme="info" fontSize="4xl" {...loadingProps} />
    </Fade>
  )
}, "overlay")()

export interface DropzoneRejectProps {
  /**
   * The content to display when files are being dragged over the dropzone and are rejected.
   */
  children: ReactNode
}

/**
 * A component that renders its children only when files are being dragged over the dropzone and are rejected.
 */
export const DropzoneReject = ({ children }: DropzoneRejectProps) => {
  const { dragReject } = useDropzoneContext()

  return dragReject ? children : null
}

DropzoneReject.displayName = "DropzoneReject"

export interface DropzoneIdleProps {
  /**
   * The content to display when no files are being dragged over the dropzone.
   */
  children: ReactNode
}

/**
 * A component that renders its children only when no files are being dragged over the dropzone.
 */
export const DropzoneIdle = ({ children }: DropzoneIdleProps) => {
  const { dragIdle } = useDropzoneContext()

  return dragIdle ? children : null
}

DropzoneIdle.displayName = "DropzoneIdle"
