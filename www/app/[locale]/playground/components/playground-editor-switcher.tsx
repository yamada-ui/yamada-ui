"use client"

import type { RefObject } from "react"
import {
  CodeIcon,
  EyeIcon,
  IconButton,
  LayoutPanelLeftIcon,
  Popover,
  RadioCardGroup,
} from "@yamada-ui/react"
import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from "react"

type EditorVisibility = "both" | "editor" | "preview"

interface PlaygroundEditorSwitcherController {
  switchMode: RefObject<(() => void) | null>
}

interface PlaygroundEditorSwitcherProps {
  editorRef: RefObject<null | {
    toggleVisibility: { current: (() => void) | null }
  }>
}

export const PlaygroundEditorSwitcher = memo(
  forwardRef<PlaygroundEditorSwitcherController, PlaygroundEditorSwitcherProps>(
    function PlaygroundEditorSwitcher({ editorRef }, ref) {
      const [editorVisibility, setEditorVisibility] =
        useState<EditorVisibility>("both")

      const items = useMemo(
        () => [
          {
            label: "Both",
            value: "both" as EditorVisibility,
          },
          {
            label: "Editor",
            value: "editor" as EditorVisibility,
          },
          {
            label: "Preview",
            value: "preview" as EditorVisibility,
          },
        ],
        [],
      )

      const getCurrentIcon = useCallback(() => {
        switch (editorVisibility) {
          case "both":
            return LayoutPanelLeftIcon
          case "editor":
            return CodeIcon
          case "preview":
            return EyeIcon
          default:
            return LayoutPanelLeftIcon
        }
      }, [editorVisibility])

      const switchMode = useCallback(() => {
        editorRef.current?.toggleVisibility.current?.()
        setEditorVisibility((prev) => {
          switch (prev) {
            case "both":
              return "editor"
            case "editor":
              return "preview"
            case "preview":
              return "both"
            default:
              return "both"
          }
        })
      }, [editorRef])

      const handleVisibilityChange = useCallback(
        (value: EditorVisibility) => {
          setEditorVisibility(value)
          // Trigger the editor's visibility change
          editorRef.current?.toggleVisibility.current?.()
        },
        [editorRef],
      )

      useImperativeHandle(
        ref,
        () => ({
          switchMode: { current: switchMode },
        }),
        [switchMode],
      )

      return (
        <Popover.Root>
          <Popover.Trigger asChild>
            <IconButton
              size="sm"
              variant="ghost"
              aria-label="Switch Editor Visibility"
            >
              {(() => {
                const IconComponent = getCurrentIcon()
                return <IconComponent />
              })()}
            </IconButton>
          </Popover.Trigger>
          <Popover.Content p="0">
            <Popover.Body>
              <RadioCardGroup.Root
                direction="column"
                items={items}
                value={editorVisibility}
                onChange={handleVisibilityChange}
              />
            </Popover.Body>
          </Popover.Content>
        </Popover.Root>
      )
    },
  ),
)
