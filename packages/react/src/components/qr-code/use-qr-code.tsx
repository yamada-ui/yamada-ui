import type { QrCodeGenerateResult } from "uqr"
import type { HTMLProps, PropGetter } from "../../core"
import { useCallback, useMemo } from "react"
import { encode } from "uqr"

export interface UseQrCodeProps extends HTMLProps {
  /**
   * The value to encode as a QR code.
   */
  value: string
  /**
   * The error correction level to boost the error correction level to the maximum allowed by the version and size.
   *
   * @default false
   */
  boostEcc?: boolean
  /**
   * The border width around the QR code.
   *
   * @default 1
   */
  border?: number
  /**
   * The error correction level.
   *
   * - `L` allows for up to 7% error correction,
   * - `M` allows for up to 15% error correction,
   * - `Q` allows for up to 25% error correction,
   * - `H` allows for up to 30% error correction.
   *
   * @default 'L'
   */
  ecc?: "H" | "L" | "M" | "Q"
  /**
   * Inverts the black and white of the QR code.
   *
   * @default false
   */
  invert?: boolean
  /**
   * The mask pattern to use.
   *
   * @default -1
   */
  maskPattern?: number
  /**
   * The maximum version of the QR code (1-40).
   *
   * @default 40
   */
  maxVersion?: number
  /**
   * The minimum version of the QR code (1-40).
   *
   * @default 1
   */
  minVersion?: number
  /**
   * The pixel size of the QR code.
   *
   * @default 10
   */
  pixelSize?: number
  /**
   * Callback function to receive the generated QR Code.
   */
  onEncoded?: (qr: QrCodeGenerateResult) => void
}

export const useQrCode = ({
  boostEcc,
  border,
  ecc,
  invert,
  maskPattern,
  maxVersion,
  minVersion,
  pixelSize = 10,
  value,
  onEncoded,
  ...rest
}: UseQrCodeProps) => {
  const encoded = useMemo(
    () =>
      encode(value, {
        boostEcc,
        border,
        ecc,
        invert,
        maskPattern,
        maxVersion,
        minVersion,
        onEncoded,
      }),
    [
      value,
      border,
      ecc,
      boostEcc,
      maskPattern,
      maxVersion,
      minVersion,
      invert,
      onEncoded,
    ],
  )
  const height = encoded.size * pixelSize
  const width = encoded.size * pixelSize
  const viewBox = `0 0 ${width} ${height}`
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

  const getRootProps: PropGetter = useCallback(
    (props = {}) => ({ ...rest, ...props }),
    [rest],
  )

  const getFrameProps: PropGetter<"svg"> = useCallback(
    (props = {}) => ({ viewBox: `0 0 ${width} ${height}`, ...props }),
    [height, width],
  )

  const getOverlayProps: PropGetter = useCallback(
    (props = {}) => ({ ...props }),
    [],
  )

  const getPatternProps: PropGetter<"path"> = useCallback(
    (props) => ({ ...props, d: paths.join(" ") }),
    [paths],
  )

  return {
    height,
    paths,
    viewBox,
    width,
    getFrameProps,
    getOverlayProps,
    getPatternProps,
    getRootProps,
  }
}

export type UseQrCodeReturn = ReturnType<typeof useQrCode>
