import type {
  ColorModeToken,
  CSS,
  CSSUIObject,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { LoadingProps } from "@yamada-ui/loading"
import type { FadeProps } from "@yamada-ui/transitions"
import type { Merge } from "@yamada-ui/utils"
import type { ForwardedRef, PropsWithChildren } from "react"
import type {
  Accept,
  DropzoneOptions as ReactDropzoneOptions,
} from "react-dropzone-esm"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { Loading } from "@yamada-ui/loading"
import { Fade } from "@yamada-ui/transitions"
import {
  assignRef,
  createContext,
  cx,
  dataAttr,
  isArray,
  splitObject,
} from "@yamada-ui/utils"
import { useId } from "react"
import { useDropzone } from "react-dropzone-esm"

interface DropzoneContext {
  dragAccept: boolean
  dragIdle: boolean
  dragReject: boolean
  styles: { [key: string]: CSSUIObject | undefined }
  loading?: boolean
}

const [DropzoneProvider, useDropzoneContext] = createContext<DropzoneContext>({
  name: "DropzoneContext",
  errorMessage: `useDropzoneContext returned is 'undefined'. Seems you forgot to wrap the components in "<Dropzone />"`,
})

interface DropzoneOptions {
  /**
   * File types to accept.
   */
  accept?: Accept | string[]
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * If `true`, display the dropzone loading icon.
   *
   * @default false
   *
   * @deprecated Use `loading` instead.
   */
  isLoading?: boolean
  /**
   * If `true`, display the dropzone loading icon.
   *
   * @default false
   */
  loading?: boolean
  /**
   * Ref to a open function.
   */
  openRef?: ForwardedRef<() => undefined | void>
  /**
   * Props for dropzone loading icon element.
   */
  loadingProps?: LoadingProps
  /**
   * Props for dropzone overlay element.
   */
  overlayProps?: FadeProps
}

export interface DropzoneProps
  extends Merge<HTMLUIProps, Omit<ReactDropzoneOptions, "accept">>,
    ThemeProps<"Dropzone">,
    DropzoneOptions,
    FormControlOptions {}

/**
 * `Dropzone` is a component used for uploading files via drag and drop.
 *
 * @see Docs https://yamada-ui.com/components/forms/dropzone
 */
export const Dropzone = forwardRef<DropzoneProps, "input">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Dropzone", props)
  const {
    id,
    name,
    className,
    accept,
    autoFocus,
    children,
    isLoading,
    loading = isLoading,
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
    overlayProps,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onDropAccepted,
    onDropRejected,
    onFileDialogCancel,
    onFileDialogOpen,
    ...rest
  } = useFormControlProps(omitThemeProps(mergedProps))
  const labelledbyId = useId()
  const disabled = loading || rest.disabled || rest.readOnly
  const [
    { "aria-readonly": ariaReadOnly, ...formControlProps },
    containerProps,
  ] = splitObject(rest, formControlProperties)
  const {
    isDragAccept: dragAccept,
    isDragReject: dragReject,
    open,
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
  const css: CSSUIObject = {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    ...styles.container,
  }

  assignRef(openRef, open)

  return (
    <DropzoneProvider
      value={{
        dragAccept,
        dragIdle,
        dragReject,
        loading,
        styles,
      }}
    >
      <ui.div
        id={labelledbyId}
        className={cx("ui-dropzone", className)}
        __css={css}
        {...formControlProps}
        {...containerProps}
        {...getRootProps({})}
        data-accept={dataAttr(dragAccept)}
        data-idle={dataAttr(dragIdle)}
        data-loading={dataAttr(loading)}
        data-reject={dataAttr(dragReject)}
      >
        <DropzoneLoadingOverlay loadingProps={loadingProps} {...overlayProps} />

        <ui.input
          id={id}
          ref={ref}
          name={name}
          aria-labelledby={labelledbyId}
          aria-readonly={ariaReadOnly}
          {...formControlProps}
          {...getInputProps()}
        />
        {children}
      </ui.div>
    </DropzoneProvider>
  )
})

Dropzone.displayName = "Dropzone"
Dropzone.__ui__ = "Dropzone"

interface DropzoneLoadingOverlayProps extends FadeProps {
  loadingProps?: LoadingProps
}

const DropzoneLoadingOverlay: FC<DropzoneLoadingOverlayProps> = ({
  loadingProps,
  ...rest
}) => {
  const { loading, styles } = useDropzoneContext()

  const css: CSSUIObject = {
    alignItems: "center",
    display: "flex",
    h: "100%",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    top: 0,
    w: "100%",
    ...styles.overlay,
  }

  return (
    <Fade
      className="ui-dropzone__overlay"
      open={loading}
      unmountOnExit
      __css={css}
      {...rest}
    >
      <Loading
        className="ui-dropzone__overlay__loading"
        fontSize="4xl"
        {...loadingProps}
      />
    </Fade>
  )
}

DropzoneLoadingOverlay.displayName = "DropzoneLoadingOverlay"
DropzoneLoadingOverlay.__ui__ = "DropzoneLoadingOverlay"

export const DropzoneAccept: FC<PropsWithChildren> = ({ children }) => {
  const { dragAccept } = useDropzoneContext()

  return dragAccept ? children : null
}

DropzoneAccept.displayName = "DropzoneAccept"
DropzoneAccept.__ui__ = "DropzoneAccept"

export const DropzoneReject: FC<PropsWithChildren> = ({ children }) => {
  const { dragReject } = useDropzoneContext()

  return dragReject ? children : null
}

DropzoneReject.displayName = "DropzoneReject"
DropzoneReject.__ui__ = "DropzoneReject"

export const DropzoneIdle: FC<PropsWithChildren> = ({ children }) => {
  const { dragIdle } = useDropzoneContext()

  return dragIdle ? children : null
}

DropzoneIdle.displayName = "DropzoneIdle"
DropzoneIdle.__ui__ = "DropzoneIdle"
