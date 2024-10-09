import { ThemeProvider } from "@yamada-ui/core"
import { a11y, render } from "@yamada-ui/test"
import { Image, Picture, Source } from "../src"

const src = "https://image.xyz/source"

describe("<Picture />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <Picture
        src={src}
        alt="img"
        sources={[
          { srcSet: src, media: "xl" },
          { srcSet: src, media: "lg" },
          { srcSet: src, media: "md" },
        ]}
      />,
    )
  })

  test("should render source elements", () => {
    const { container } = render(
      <Picture
        src={src}
        alt="img"
        sources={[
          { srcSet: src, media: "xl" },
          { srcSet: src, media: "lg" },
          { srcSet: src, media: "md" },
        ]}
      />,
    )
    const sources = container.querySelectorAll("source")
    expect(sources).toHaveLength(3)
  })

  test("should render custom source elements", () => {
    const { container } = render(
      <Picture>
        <Source srcSet={src} media="md" />
        <Source srcSet={src} media="lg" />
        <Source srcSet={src} media="xl" />
        <Image src={src} alt="img" />
      </Picture>,
    )
    const sources = container.querySelectorAll("source")
    expect(sources).toHaveLength(3)
    expect(sources[0]?.getAttribute("media")).toContain("(max-width: 768px)")
    expect(sources[1]?.getAttribute("media")).toContain("(max-width: 976px)")
    expect(sources[2]?.getAttribute("media")).toContain("(max-width: 1280px)")
  })

  test("should apply correct media queries from theme breakpoints", () => {
    const { container } = render(
      <Picture
        src={src}
        alt="img"
        sources={[
          { srcSet: src, media: "xl" },
          { srcSet: src, media: "lg" },
          { srcSet: src, media: "md" },
        ]}
      />,
    )
    const sources = container.querySelectorAll("source")
    expect(sources[0]?.getAttribute("media")).toContain("(max-width: 768px)")
    expect(sources[1]?.getAttribute("media")).toContain("(max-width: 976px)")
    expect(sources[2]?.getAttribute("media")).toContain("(max-width: 1280px)")
  })

  test("should apply correct media queries from maxW or minW", () => {
    const { container } = render(
      <Picture
        src={src}
        alt="img"
        sources={[
          { srcSet: src, maxW: "1280px" },
          { srcSet: src, maxW: 976, minW: 769 },
          { srcSet: src, maxW: "48rem" },
        ]}
      />,
    )
    const sources = container.querySelectorAll("source")
    expect(sources[0]?.getAttribute("media")).toContain("(max-width: 768px)")
    expect(sources[1]?.getAttribute("media")).toContain(
      "(min-width: 769px) and (max-width: 976px)",
    )
    expect(sources[2]?.getAttribute("media")).toContain("(max-width: 1280px)")
  })

  test("should sort sources", () => {
    const { container } = render(
      <Picture
        src={src}
        alt="img"
        sources={[
          { srcSet: src, media: "lg" },
          { srcSet: src, media: "(max-width: 768px)" },
          { srcSet: src, media: "xl" },
        ]}
      />,
    )
    const sources = container.querySelectorAll("source")
    expect(sources[0]?.getAttribute("media")).toContain("(max-width: 768px)")
    expect(sources[1]?.getAttribute("media")).toContain("(max-width: 976px)")
    expect(sources[2]?.getAttribute("media")).toContain("(max-width: 1280px)")
  })

  test("should not sort sources when enableSorting is false", () => {
    const { container } = render(
      <Picture
        src={src}
        alt="img"
        enableSorting={false}
        sources={[
          { srcSet: src, media: "md" },
          { srcSet: src, media: "(max-width: 976px)" },
          { srcSet: src, media: "xl" },
        ]}
      />,
    )
    const sources = container.querySelectorAll("source")
    expect(sources[0]?.getAttribute("media")).toContain("(max-width: 768px)")
    expect(sources[1]?.getAttribute("media")).toContain("(max-width: 976px)")
    expect(sources[2]?.getAttribute("media")).toContain("(max-width: 1280px)")
  })

  test("should sorting sources with custom direction", () => {
    const { container } = render(
      <ThemeProvider
        config={{
          breakpoint: { direction: "up" },
        }}
        theme={{
          breakpoints: {
            sm: "30em",
            md: "48em",
            lg: "61em",
            xl: "80em",
            "2xl": "90em",
          },
        }}
      >
        <Picture
          src={src}
          alt="img"
          sources={[
            { srcSet: src, media: "xl" },
            { srcSet: src, media: "lg" },
            { srcSet: src, media: "md" },
          ]}
        />
      </ThemeProvider>,
    )
    const sources = container.querySelectorAll("source")
    expect(sources[0]?.getAttribute("media")).toContain("(min-width: 1280px)")
    expect(sources[1]?.getAttribute("media")).toContain("(min-width: 976px)")
    expect(sources[2]?.getAttribute("media")).toContain("(min-width: 768px)")
  })
})
