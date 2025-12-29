import type { HTMLProps, PropGetter } from "../../core"
import { useCallback, useMemo } from "react"
import { encode } from "uqr"

export interface UseQrCodeProps {
  /**
   * The value to encode as a QR code.
   */
  value: string
  /**
   * The border width.
   *
   * @default 2
   */
  border?: number
  /**
   * The error correction level.
   *
   * @default 'L'
   */
  ecc?: "H" | "L" | "M" | "Q"
  /**
   * The pixel size.
   *
   * @default 10
   */
  pixelSize?: number
}

export const useQrCode = ({
  border,
  ecc,
  pixelSize = 10,
  value,
}: UseQrCodeProps) => {
  const encoded = useMemo(
    () => encode(value, { border, ecc }),
    [value, border, ecc],
  )

  const height = encoded.size * pixelSize
  const width = encoded.size * pixelSize

  const paths: string[] = useMemo(() => {
    const result: string[] = []

    for (let row = 0; row < encoded.size; row++) {
      for (let col = 0; col < encoded.size; col++) {
        const x = col * pixelSize
        const y = row * pixelSize
        if (encoded.data[row]?.[col]) {
          result.push(`M${x},${y}h${pixelSize}v${pixelSize}h-${pixelSize}z`)
        }
      }
    }
    return result
  }, [encoded.data, encoded.size, pixelSize])

  const getFrameProps: PropGetter<"svg"> = useCallback(
    (props = {}) => ({ viewBox: `0 0 ${width} ${height}`, ...props }),
    [height, width],
  )

  const getOverlayProps: PropGetter = useCallback(
    (props = {}) => ({ ...props }),
    [],
  )

  const getPatternProps = useCallback(
    (props: HTMLProps<"path">) => ({
      ...props,
      d: paths.join(" "),
    }),
    [paths],
  )

  const getRootProps: PropGetter = useCallback(
    (props = {}) => ({ ...props }),
    [],
  )

  return { getFrameProps, getOverlayProps, getPatternProps, getRootProps }
}
