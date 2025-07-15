"use client"

import type { RefObject } from "react"
import type { Accept, DropzoneOptions } from "react-dropzone"
import type { HTMLProps, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { fromEvent } from "file-selector"
import { useCallback, useId } from "react"
import { useDropzone as useOriginalDropzone } from "react-dropzone"
import {
  ariaAttr,
  assignRef,
  cx,
  dataAttr,
  isArray,
  mergeRefs,
} from "../../utils"
import { useFieldProps } from "../field"

export interface UseDropzoneProps
  extends Omit<HTMLProps, "onDrop" | "onError">,
    FieldProps {
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * Set accepted file types.
   */
  accept?: Accept | string[]
  /**
   * Set to true to focus the root element on render.
   *
   * @default false
   */
  autoFocus?: boolean
  /**
   * Use this to provide a custom file aggregator.
   */
  getFilesFromEvent?: DropzoneOptions["getFilesFromEvent"]
  /**
   * If `true`, display the dropzone loading icon.
   *
   * @default false
   */
  loading?: boolean
  /**
   * Maximum accepted number of files.
   * The default value is 0 which means there is no limitation to how many files are accepted.
   *
   * @default 0
   */
  maxFiles?: number
  /**
   * Maximum file size (in bytes).
   *
   * @default Infinity
   */
  maxSize?: number
  /**
   * Minimum file size (in bytes).
   *
   * @default 0
   */
  minSize?: number
  /**
   * Allow drag and drop (or selection from the file dialog) of multiple files.
   *
   * @default false
   */
  multiple?: boolean
  /**
   * If true, disables click to open the native file selection dialog.
   *
   * @default false
   */
  noClick?: boolean
  /**
   * If true, disables drag and drop.
   *
   * @default false
   */
  noDrag?: boolean
  /**
   * If true, stops drag event propagation to parents.
   *
   * @default false
   */
  noDragEventsBubbling?: boolean
  /**
   * If true, disables `space` and `enter` to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   *
   * @default false
   */
  noKeyboard?: boolean
  /**
   * Ref to a open function.
   */
  openRef?: RefObject<() => void>
  /**
   * If false, allow dropped items to take over the current browser window.
   *
   * @default true
   */
  preventDropOnDocument?: boolean
  /**
   * If true, use the [File System API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API) to read files.
   *
   * @default false
   */
  useFsAccessApi?: boolean
  /**
   * Custom validation function.
   * It must return null if there's no errors.
   */
  validator?: DropzoneOptions["validator"]
  /**
   * Callback for when the dragenter event occurs.
   */
  onDragEnter?: DropzoneOptions["onDragEnter"]
  /**
   * Callback for when the dragleave event occurs.
   */
  onDragLeave?: DropzoneOptions["onDragLeave"]
  /**
   * Callback for when the dragover event occurs.
   */
  onDragOver?: DropzoneOptions["onDragOver"]
  /**
   * Callback for when the drop event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   */
  onDrop?: DropzoneOptions["onDrop"]
  /**
   * Callback for when the drop event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   */
  onDropAccepted?: DropzoneOptions["onDropAccepted"]
  /**
   * Callback for when the drop event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   */
  onDropRejected?: DropzoneOptions["onDropRejected"]
  /**
   * Callback for when there's some error from any of the promises.
   */
  onError?: DropzoneOptions["onError"]
  /**
   * Callback for when closing the file dialog with no selection.
   */
  onFileDialogCancel?: DropzoneOptions["onFileDialogCancel"]
  /**
   * Callback for when opening the file dialog.
   */
  onFileDialogOpen?: DropzoneOptions["onFileDialogOpen"]
}

export const useDropzone = (props: UseDropzoneProps = {}) => {
  const {
    props: {
      id,
      name,
      accept,
      autoFocus = false,
      disabled,
      getFilesFromEvent = fromEvent,
      loading,
      maxFiles = 0,
      maxSize = Infinity,
      minSize = 0,
      multiple = false,
      noClick = false,
      noDrag = false,
      noDragEventsBubbling = false,
      noKeyboard = false,
      openRef,
      preventDropOnDocument = true,
      readOnly,
      useFsAccessApi = false,
      validator,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDrop,
      onDropAccepted,
      onDropRejected,
      onError,
      onFileDialogCancel,
      onFileDialogOpen,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const labelledbyId = useId()
  const interactive = !(loading || readOnly || disabled)
  const {
    acceptedFiles,
    fileRejections,
    isDragAccept: dragAccept,
    isDragActive: dragActive,
    isDragReject: dragReject,
    isFocused: focused,
    open,
    getInputProps: getOriginalInputProps,
    getRootProps: getOriginalRootProps,
  } = useOriginalDropzone({
    accept: isArray(accept)
      ? accept.reduce((prev, current) => ({ ...prev, [current]: [] }), {})
      : accept,
    autoFocus,
    disabled: !interactive,
    getFilesFromEvent,
    maxFiles,
    maxSize,
    minSize,
    multiple,
    noClick,
    noDrag,
    noDragEventsBubbling,
    noKeyboard,
    preventDropOnDocument,
    useFsAccessApi,
    validator,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onDropAccepted,
    onDropRejected,
    onError,
    onFileDialogCancel,
    onFileDialogOpen,
  })
  const dragIdle = !dragAccept && !dragReject

  assignRef(openRef, open)

  const getRootProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) =>
      getOriginalRootProps({
        id: labelledbyId,
        ...dataProps,
        ...eventProps,
        "aria-disabled": ariaAttr(!interactive),
        "data-accept": dataAttr(dragAccept),
        "data-idle": dataAttr(dragIdle),
        "data-loading": dataAttr(loading),
        "data-reject": dataAttr(dragReject),
        ...rest,
        ...props,
        ref: mergeRefs(ref, rest.ref),
      }),
    [
      getOriginalRootProps,
      labelledbyId,
      dataProps,
      eventProps,
      interactive,
      dragAccept,
      dragIdle,
      loading,
      dragReject,
      rest,
    ],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    ({ "aria-labelledby": ariaLabelledby, ...props } = {}) =>
      getOriginalInputProps({
        id,
        name,
        disabled,
        readOnly,
        ...ariaProps,
        ...dataProps,
        ...props,
        "aria-labelledby": cx(ariaLabelledby, labelledbyId),
      }),
    [
      getOriginalInputProps,
      id,
      name,
      disabled,
      readOnly,
      ariaProps,
      dataProps,
      labelledbyId,
    ],
  )

  return {
    acceptedFiles,
    dragAccept,
    dragActive,
    dragIdle,
    dragReject,
    fileRejections,
    focused,
    loading,
    open,
    getInputProps,
    getRootProps,
  }
}

export type UseDropzoneReturn = ReturnType<typeof useDropzone>
