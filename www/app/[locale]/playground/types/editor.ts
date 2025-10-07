import type { Ref } from "react"

/**
 * Common interface for editor components that can update code
 */
export interface CodeUpdater {
  updateCode: (code: string) => void
}

/**
 * Interface for preview components that can refresh and update code
 */
export interface PreviewController extends CodeUpdater {
  refresh: () => void
}

/**
 * Common props for editor components
 */
export interface BaseEditorProps {
  initialValue?: string
  onChange?: (value: string) => void
}

/**
 * Props for components that accept a code updater ref
 */
export interface WithCodeUpdaterRef {
  codeUpdaterRef?: Ref<CodeUpdater>
}

/**
 * Props for components that accept a preview controller ref
 */
export interface WithPreviewControllerRef {
  previewRef?: Ref<PreviewController>
}
