"use client"

import type { BoxProps } from "@yamada-ui/react"
import type { MouseEventHandler, RefObject } from "react"
import { Box, styled } from "@yamada-ui/react"
import { useCallback, useEffect, useRef } from "react"
import { usePlaygroundLayout } from "../use-playground-layout"

interface ResizablePreviewProps extends BoxProps {
  children: React.ReactNode
  skeletonRef: RefObject<HTMLDivElement | null>
  minHeight?: number
  minWidth?: number
}

export const ResizablePreview = ({
  children,
  minHeight = 200,
  minWidth = 200,
  skeletonRef,
  ...rest
}: ResizablePreviewProps) => {
  const { size, isAuto, setSize } = usePlaygroundLayout()
  const containerRef = useRef<HTMLDivElement>(null)

  const defaultSize = { x: 800, y: 600 }
  const currentSize = isAuto ? defaultSize : (size as { x: number; y: number })

  const getConstraints = useCallback(() => {
    const maxWidth = (skeletonRef.current?.clientWidth ?? 0) - 32
    return { maxWidth }
  }, [skeletonRef])

  const constrainDimensions = useCallback(
    (x: number, y: number) => {
      const { maxWidth } = getConstraints()
      return {
        x: Math.min(maxWidth > 0 ? maxWidth : x, Math.max(minWidth, x)),
        y: Math.max(minHeight, y),
      }
    },
    [getConstraints, minWidth, minHeight],
  )

  const updateConstrainedSize = useCallback(() => {
    if (skeletonRef.current && !isAuto) {
      const constrainedDimensions = constrainDimensions(
        currentSize.x,
        currentSize.y,
      )
      if (
        constrainedDimensions.x !== currentSize.x ||
        constrainedDimensions.y !== currentSize.y
      ) {
        setSize(constrainedDimensions.x, constrainedDimensions.y)
      }
    }
  }, [
    skeletonRef,
    constrainDimensions,
    currentSize.x,
    currentSize.y,
    setSize,
    isAuto,
  ])

  useEffect(() => {
    updateConstrainedSize()
  }, [updateConstrainedSize])

  useEffect(() => {
    if (!skeletonRef.current) return

    const resizeObserver = new ResizeObserver(() => {
      updateConstrainedSize()
    })

    resizeObserver.observe(skeletonRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [updateConstrainedSize, skeletonRef])

  const handleMouseDown = useCallback<
    (
      position: "bottom" | "bottom-left" | "bottom-right" | "left" | "right",
    ) => MouseEventHandler<HTMLDivElement>
  >(
    (position) => (ev) => {
      if (isAuto) return

      ev.preventDefault()
      const startX = ev.clientX
      const startY = ev.clientY
      const startWidth = currentSize.x
      const startHeight = currentSize.y

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.clientX - startX
        const deltaY = moveEvent.clientY - startY

        let newWidth = startWidth
        let newHeight = startHeight

        if (position === "left" || position === "bottom-left") {
          newWidth = startWidth - deltaX * 2
        } else if (position === "right" || position === "bottom-right") {
          newWidth = startWidth + deltaX * 2
        }

        if (
          position === "bottom" ||
          position === "bottom-left" ||
          position === "bottom-right"
        ) {
          newHeight = startHeight + deltaY
        }

        const constrained = constrainDimensions(newWidth, newHeight)
        setSize(constrained.x, constrained.y)
      }

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    },
    [currentSize, constrainDimensions, setSize, isAuto],
  )

  return (
    <Box
      display="grid"
      flex="auto"
      gridTemplateColumns="1.0625em min-content 1.0625em"
      gridTemplateRows="min-content 1.0625em"
      justifyContent="center"
      {...rest}
    >
      <ResizeHandle
        variant="vertical"
        cursor="ew-resize"
        onMouseDown={handleMouseDown("left")}
      />

      <Box
        ref={containerRef}
        h={`${currentSize.y}px`}
        overflow="hidden"
        position="relative"
        w={`${currentSize.x}px`}
      >
        {children}
      </Box>

      <ResizeHandle
        variant="vertical"
        cursor="ew-resize"
        onMouseDown={handleMouseDown("right")}
      />

      <ResizeHandle
        variant="corner"
        cursor="nesw-resize"
        rotate={45}
        onMouseDown={handleMouseDown("bottom-left")}
      />

      <ResizeHandle
        variant="horizontal"
        cursor="ns-resize"
        onMouseDown={handleMouseDown("bottom")}
      />

      <ResizeHandle
        variant="corner"
        cursor="nwse-resize"
        rotate={-45}
        onMouseDown={handleMouseDown("bottom-right")}
      />
    </Box>
  )
}

interface ResizeHandleProps extends Omit<BoxProps, "rotate"> {
  variant: "corner" | "horizontal" | "vertical"
  cursor: string
  rotate?: number
}

const ResizeHandle = ({
  variant,
  cursor,
  rotate,
  onMouseDown,
  ...rest
}: ResizeHandleProps) => {
  return (
    <Box
      alignItems="center"
      bg="bg.panel"
      color={{ base: "border.emphasized", _hover: "border.emphasized" }}
      cursor={cursor}
      display="flex"
      justifyContent="center"
      transitionDuration="150ms"
      transitionProperty="colors"
      userSelect="none"
      onMouseDown={onMouseDown}
      {...rest}
    >
      <Knob variant={variant} rotate={rotate} />
    </Box>
  )
}

interface KnobProps {
  variant: "corner" | "horizontal" | "vertical"
  rotate?: number
}

const Knob = ({ variant, rotate }: KnobProps) => {
  switch (variant) {
    case "vertical":
      return (
        <svg
          fill="none"
          height="16"
          stroke="currentColor"
          viewBox="0 0 6 16"
          width="6"
        >
          <path d="M 0.5 0 V 16 M 5.5 0 V 16" />
        </svg>
      )
    case "horizontal":
      return (
        <svg
          fill="none"
          height="6"
          stroke="currentColor"
          viewBox="0 0 16 6"
          width="16"
        >
          <path d="M 0 0.5 H 16 M 0 5.5 H 16" />
        </svg>
      )
    case "corner":
      return (
        <styled.svg
          fill="none"
          height="6"
          stroke="currentColor"
          transform={`rotate(${rotate}deg) ${rotate === 45 ? "translate(0.125em, -0.125em)" : "translate(-0.125em, -0.125em)"}`}
          viewBox="0 0 16 6"
          width="16"
        >
          <path d="M 0 0.5 H 16 M 0 5.5 H 16" />
        </styled.svg>
      )
  }
}
