"use client"

import { useState } from "react"
import { isArray, isRefObject, useSafeLayoutEffect } from "../../utils"

interface Size {
  height: number
  width: number
}

export const trackElementSize = (
  el: HTMLElement | null,
  cb: (size: Size | undefined) => void,
) => {
  if (!el) {
    cb(undefined)

    return
  }

  cb({ height: el.offsetHeight, width: el.offsetWidth })

  const win = el.ownerDocument.defaultView ?? window

  const observer = new win.ResizeObserver((entries) => {
    if (!isArray(entries) || !entries.length) return

    const [entry] = entries
    let width: number
    let height: number

    if (entry && "borderBoxSize" in entry) {
      const borderSizeEntry = entry.borderBoxSize
      const borderSize = isArray(borderSizeEntry)
        ? borderSizeEntry[0]
        : borderSizeEntry

      width = borderSize.inlineSize
      height = borderSize.blockSize
    } else {
      width = el.offsetWidth
      height = el.offsetHeight
    }

    cb({ height, width })
  })

  observer.observe(el, { box: "border-box" })

  return () => observer.unobserve(el)
}

const trackMutation = (el: HTMLElement | null | undefined, cb: () => void) => {
  if (!el?.parentElement) return

  const win = el.ownerDocument.defaultView ?? window

  const observer = new win.MutationObserver(() => {
    cb()
  })

  observer.observe(el.parentElement, { childList: true })

  return () => {
    observer.disconnect()
  }
}

export const useSizes = <T extends HTMLElement | null>({
  getNodes,
  observeMutation = true,
}: {
  getNodes: () => T[]
  observeMutation?: boolean
}) => {
  const [sizes, setSizes] = useState<Size[]>([])
  const [count, setCount] = useState(0)

  useSafeLayoutEffect(() => {
    const elements = getNodes()

    const cleanups = elements.map((element, index) =>
      trackElementSize(element, (size) => {
        setSizes((sizes) => {
          return [
            ...sizes.slice(0, index),
            size,
            ...sizes.slice(index + 1),
          ] as Size[]
        })
      }),
    )

    if (observeMutation) {
      const firstNode = elements[0]

      cleanups.push(
        trackMutation(firstNode, () => {
          setCount((count) => count + 1)
        }),
      )
    }

    return () => {
      cleanups.forEach((cleanup) => {
        cleanup?.()
      })
    }
  }, [count])

  return sizes as (Size | undefined)[]
}

export const useSize = <T extends HTMLElement | null>(
  refOrEl: React.RefObject<T> | T,
) => {
  const [size] = useSizes({
    getNodes: () => {
      const node = isRefObject(refOrEl) ? refOrEl.current : refOrEl

      return [node]
    },

    observeMutation: false,
  })

  return size as Size | undefined
}
