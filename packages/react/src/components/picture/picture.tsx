import type { FC } from "react"
import type { HTMLStyledProps, ThemeTokens } from "../../core"
import type { AnyString } from "../../utils"
import type { ImageProps } from "../image"
import { useCallback, useMemo } from "react"
import { styled, tokenToValue, useSystem } from "../../core"
import { getPx, isUndefined } from "../../utils"
import { Image } from "../image"

const createQuery = (
  minW: number | string | undefined,
  maxW: number | string | undefined,
) => {
  let media = ""

  if (minW) {
    media = `(min-width: ${minW}px)`

    if (maxW) media += ` and (max-width: ${maxW}px)`
  } else {
    media = `(max-width: ${maxW}px)`
  }

  return media
}

export interface PictureSource extends SourceProps {
  /**
   * The source set for the source element.
   */
  srcSet?: string
  /**
   * The maximum width for the source.
   *
   * If media is set, media takes precedence.
   */
  maxW?: AnyString | number | ThemeTokens["sizes"]
  /**
   * The minimum width for the source.
   *
   * If media is set, media takes precedence.
   */
  minW?: AnyString | number | ThemeTokens["sizes"]
}

export interface PictureProps extends ImageProps {
  /**
   * If `true`, the sources will be sorted by the `minW` and `maxW` properties.
   *
   * @default true
   */
  enableSorting?: boolean
  /**
   * The sources for the picture element.
   */
  sources?: PictureSource[]
  /**
   * The props for the picture element.
   */
  pictureProps?: HTMLStyledProps<"picture">
}

/**
 * `Picture` is a component that uses the `picture` element to provide alternative images for different display or device scenarios.
 *
 * @see https://yamada-ui.com/docs/components/picture
 */
export const Picture: FC<PictureProps> = ({
  children,
  enableSorting = true,
  sources: sourcesProp = [],
  pictureProps,
  ...rest
}) => {
  const system = useSystem()
  const { queriesObj } = system.breakpoints
  const { direction = "down", identifier = "@media screen" } =
    system.config.breakpoint ?? {}
  const searchValue =
    identifier === "@media screen" ? "@media screen and " : `${identifier} `

  const compareSources = useCallback(
    (a: PictureSource, b: PictureSource) => {
      const k = direction === "down" ? "maxW" : "minW"

      if (isUndefined(a[k]) && !isUndefined(b[k])) return -1

      if (!isUndefined(a[k]) && isUndefined(b[k])) return 1

      return direction === "down"
        ? Number(a.maxW) - Number(b.maxW)
        : Number(b.minW) - Number(a.minW)
    },
    [direction],
  )

  const sources = useMemo(() => {
    const computedSources = sourcesProp.map(
      ({ maxW, media, minW, ...rest }) => {
        if (!media) {
          if (minW) minW = getPx(tokenToValue(system)("sizes", minW))
          if (maxW) maxW = getPx(tokenToValue(system)("sizes", maxW))

          media = createQuery(minW, maxW)

          return { ...rest, maxW, media, minW }
        } else {
          const { maxW, minW, query } = queriesObj[media] ?? {}

          if (query) media = query.replace(searchValue, "")

          return { ...rest, maxW, media, minW }
        }
      },
    )

    if (enableSorting) {
      return computedSources.sort(compareSources)
    } else {
      return computedSources
    }
  }, [
    sourcesProp,
    enableSorting,
    system,
    queriesObj,
    searchValue,
    compareSources,
  ])

  const sourceElements = useMemo(
    () =>
      sources.map(({ maxW: _maxW, minW: _minW, ...rest }, index) => (
        <styled.source key={index} {...rest} />
      )),
    [sources],
  )

  return (
    <styled.picture {...pictureProps}>
      {children ?? (
        <>
          {sourceElements}

          <Image {...rest} />
        </>
      )}
    </styled.picture>
  )
}

export interface SourceProps extends HTMLStyledProps<"source"> {
  /**
   * The media query for the source.
   */
  media?: AnyString | ThemeTokens["breakpoints"]
}

export const Source: FC<SourceProps> = ({ media, ...rest }) => {
  const { breakpoints, config } = useSystem()
  const { queriesObj } = breakpoints
  const { identifier = "@media screen" } = config.breakpoint ?? {}
  const searchValue =
    identifier === "@media screen" ? "@media screen and " : `${identifier} `

  const { query } = media ? (queriesObj[media] ?? {}) : {}

  if (query) media = query.replace(searchValue, "")

  return <styled.source media={media} {...rest} />
}
