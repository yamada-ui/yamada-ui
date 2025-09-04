import { a11y, render, screen } from "#test"
import { extendConfig, UIProvider } from "../../providers/ui-provider"
import { Image } from "../image"
import { Picture, Source } from "./picture"

const src = "https://image.xyz/source"

describe("<Picture />", () => {
  test("renders component correctly", async () => {
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

  test("sets `displayName` correctly", () => {
    expect(Picture.name).toBe("Picture")
    expect(Source.name).toBe("Source")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Picture src={src} alt="img" pictureProps={{ "data-testid": "picture" }}>
        <Source srcSet={src} data-testid="src" media="md" />
      </Picture>,
    )

    expect(screen.getByTestId("picture").tagName).toBe("PICTURE")
    expect(screen.getByTestId("src").tagName).toBe("SOURCE")
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
    const config = extendConfig({ breakpoint: { direction: "up" } })
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
      {
        wrapper: (props) => <UIProvider config={config} {...props} />,
      },
    )
    const sources = container.querySelectorAll("source")
    expect(sources[0]?.getAttribute("media")).toContain("(min-width: 1280px)")
    expect(sources[1]?.getAttribute("media")).toContain("(min-width: 976px)")
    expect(sources[2]?.getAttribute("media")).toContain("(min-width: 768px)")
  })
})
