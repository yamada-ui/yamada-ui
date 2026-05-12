import { a11y } from "#test"
import { AspectRatio } from "./aspect-ratio"

describe("<AspectRatio />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <AspectRatio>
        <img src="https://image.xyz/source" alt="placeholder" />
      </AspectRatio>,
    )
  })
})
