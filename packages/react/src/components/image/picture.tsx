import type { FC, HTMLUIProps, ThemeTokens } from "../../core"
import type { ImageProps } from "./image"
import { useCallback, useMemo } from "react"
import { ui } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { getPx, isUndefined } from "../../utils"
import { Image } from "./image"

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
  maxW?: number | ThemeTokens["sizes"]
  /**
   * The minimum width for the source.
   *
   * If media is set, media takes precedence.
   */
  minW?: number | ThemeTokens["sizes"]
}

interface PictureOptions {
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
  pictureProps?: HTMLUIProps<"picture">
}

export interface PictureProps extends ImageProps, PictureOptions {}

/**
 * `Picture` is a component that uses the `picture` element to provide alternative images for different display or device scenarios.
 *
 * @see Docs https://yamada-ui.com/components/picture
 */
export const Picture: FC<PictureProps> = ({
  children,
  enableSorting = true,
  sources: sourcesProp = [],
  pictureProps,
  ...rest
}) => {
  const { theme } = useTheme()
  const { queries } = theme.__breakpoints ?? {}
  const { direction = "down", identifier = "@media screen" } =
    theme.__config?.breakpoint ?? {}
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
          if (minW) minW = getPx(minW)
          if (maxW) maxW = getPx(maxW)

          media = createQuery(minW, maxW)

          return { ...rest, maxW, media, minW }
        } else {
          const { maxW, minW, query } =
            queries?.find((query) => query.breakpoint === media) ?? {}

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
  }, [queries, searchValue, sourcesProp, compareSources, enableSorting])

  const sourceElements = useMemo(
    () =>
      sources.map(({ maxW: _maxW, minW: _minW, ...rest }, index) => (
        <ui.source key={index} {...rest} />
      )),
    [sources],
  )

  return (
    <ui.picture {...pictureProps}>
      {children ?? (
        <>
          {sourceElements}

          <Image {...rest} />
        </>
      )}
    </ui.picture>
  )
}

Picture.__ui__ = "Picture"

export interface SourceProps extends HTMLUIProps<"source"> {
  /**
   * The media query for the source.
   */
  media?: ThemeTokens["breakpoints"]
}

export const Source: FC<SourceProps> = ({ media, ...rest }) => {
  const { theme } = useTheme()
  const { queries } = theme.__breakpoints ?? {}
  const { identifier = "@media screen" } = theme.__config?.breakpoint ?? {}
  const searchValue =
    identifier === "@media screen" ? "@media screen and " : `${identifier} `

  const { query } = queries?.find((query) => query.breakpoint === media) ?? {}

  if (query) media = query.replace(searchValue, "")

  return <ui.source media={media} {...rest} />
}

Source.__ui__ = "Source"
