import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  ColorModeToken,
  CSS,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import type { LoadingProps } from "@yamada-ui/loading"
import { Loading } from "@yamada-ui/loading"
import type { FadeProps } from "@yamada-ui/transitions"
import { Fade } from "@yamada-ui/transitions"
import {
  assignRef,
  createContext,
  cx,
  dataAttr,
  isArray,
  splitObject,
} from "@yamada-ui/utils"
import type { FC, ForwardedRef, PropsWithChildren } from "react"
import { Fragment } from "react"
import type {
  Accept,
  DropzoneOptions as ReactDropzoneOptions,
} from "react-dropzone-esm"
import { useDropzone } from "react-dropzone-esm"

type DropzoneContext = {
  isLoading?: boolean
  isDragAccept: boolean
  isDragReject: boolean
  isDragIdle: boolean
  styles: Record<string, CSSUIObject>
}

const [DropzoneProvider, useDropzoneContext] = createContext<DropzoneContext>({
  name: "DropzoneContext",
  errorMessage: `useDropzoneContext returned is 'undefined'. Seems you forgot to wrap the components in "<Dropzone />"`,
})

type DropzoneOptions = {
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * If `true`, display the dropzone loading icon.
   *
   * @default false
   */
  isLoading?: boolean
  /**
   * Props for dropzone overlay element.
   */
  overlayProps?: FadeProps
  /**
   * Props for dropzone loading icon element.
   */
  loadingProps?: LoadingProps
  /**
   * File types to accept.
   */
  accept?: Accept | string[]
  /**
   * Ref to a open function.
   */
  openRef?: ForwardedRef<() => void | undefined>
}

export type DropzoneProps = Omit<HTMLUIProps<"div">, "onDrop"> &
  ThemeProps<"Dropzone"> &
  DropzoneOptions &
  FormControlOptions &
  Omit<ReactDropzoneOptions, "accept">

/**
 * `Dropzone` is a component used for uploading files via drag and drop.
 *
 * @see Docs https://yamada-ui.com/components/forms/dropzone
 */
export const Dropzone = forwardRef<DropzoneProps, "input">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Dropzone", props)
  const {
    id,
    name,
    className,
    isLoading,
    overlayProps,
    loadingProps,
    openRef,
    accept,
    onDrop,
    onDropAccepted,
    onDropRejected,
    multiple,
    maxSize,
    maxFiles,
    autoFocus,
    noClick,
    noDrag,
    noDragEventsBubbling,
    noKeyboard,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onFileDialogCancel,
    onFileDialogOpen,
    preventDropOnDocument,
    useFsAccessApi,
    children,
    ...rest
  } = useFormControlProps(omitThemeProps(mergedProps))

  const disabled = isLoading || rest.disabled || rest.readOnly

  const [formControlProps, containerProps] = splitObject(
    rest,
    formControlProperties,
  )

  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } =
    useDropzone({
      disabled,
      accept: isArray(accept)
        ? accept.reduce((prev, current) => ({ ...prev, [current]: [] }), {})
        : accept,
      onDrop,
      onDropAccepted,
      onDropRejected,
      multiple,
      maxSize,
      maxFiles,
      autoFocus,
      noClick,
      noDrag,
      noDragEventsBubbling,
      noKeyboard,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onFileDialogCancel,
      onFileDialogOpen,
      preventDropOnDocument,
      useFsAccessApi,
    })

  assignRef(openRef, open)

  const isDragIdle = !isDragAccept && !isDragReject

  const css: CSSUIObject = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...styles.container,
  }

  return (
    <DropzoneProvider
      value={{ isLoading, isDragAccept, isDragReject, isDragIdle, styles }}
    >
      <ui.div
        className={cx("ui-dropzone", className)}
        __css={css}
        {...containerProps}
        {...getRootProps()}
        data-accept={dataAttr(isDragAccept)}
        data-reject={dataAttr(isDragReject)}
        data-idle={dataAttr(isDragIdle)}
        data-loading={dataAttr(isLoading)}
      >
        <LoadingOverlay loadingProps={loadingProps} {...overlayProps} />
        <ui.input
          ref={ref}
          id={id}
          name={name}
          {...formControlProps}
          {...getInputProps()}
        />
        {children}
      </ui.div>
    </DropzoneProvider>
  )
})

type LoadingOverlayProps = FadeProps & { loadingProps?: LoadingProps }

const LoadingOverlay: FC<LoadingOverlayProps> = ({ loadingProps, ...rest }) => {
  const { isLoading, styles } = useDropzoneContext()

  const css: CSSUIObject = {
    position: "absolute",
    top: 0,
    left: 0,
    w: "100%",
    h: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...styles.overlay,
  }

  return (
    <Fade
      isOpen={isLoading}
      unmountOnExit
      className="ui-dropzone__overlay"
      __css={css}
      {...rest}
    >
      <Loading className="ui-dropzone__loading" size="4xl" {...loadingProps} />
    </Fade>
  )
}

export const DropzoneAccept: FC<PropsWithChildren> = ({ children }) => {
  const { isDragAccept } = useDropzoneContext()

  return isDragAccept ? <Fragment>{children}</Fragment> : null
}

export const DropzoneReject: FC<PropsWithChildren> = ({ children }) => {
  const { isDragReject } = useDropzoneContext()

  return isDragReject ? <Fragment>{children}</Fragment> : null
}

export const DropzoneIdle: FC<PropsWithChildren> = ({ children }) => {
  const { isDragIdle } = useDropzoneContext()

  return isDragIdle ? <Fragment>{children}</Fragment> : null
}
