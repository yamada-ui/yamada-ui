import { a11y, render } from "#test"
import { extendConfig, UIProvider } from "../../providers/ui-provider"
import { Image } from "../image"
import { Picture, Source } from "./picture"

const src = "https://image.xyz/source"

describe("<Picture />", () => {
  test("should have display names", () => {
    expect(Picture.name).toBe("Picture")
    expect(Source.name).toBe("Source")
  })

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

  test("should forward pictureProps to the picture element", () => {
    const { container, getByTestId } = render(
      <Picture
        src={src}
        alt="img"
        sources={[{ srcSet: src, media: "md" }]}
        pictureProps={{ "data-testid": "picture" }}
      />,
    )
    const picture = getByTestId("picture")
    const source = container.querySelector("source")

    expect(picture.tagName).toBe("PICTURE")
    expect(source?.tagName).toBe("SOURCE")
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

  test("should sort sources with custom direction", () => {
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
