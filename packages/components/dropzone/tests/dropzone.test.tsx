import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { Dropzone } from "@yamada-ui/dropzone"
import { Text } from "@yamada-ui/react"

describe("<Dropzone />", () => {
  test("Dropzone renders correctly", async () => {
    const { container } = render(
      <Dropzone>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>,
    )
    await a11y(container)
  })

  test("Children property renders correctly", async () => {
    const text = "Drag file here or click to select file"
    const { container } = render(
      <Dropzone>
        <Text>{text}</Text>
      </Dropzone>,
    )
    expect(container.textContent).toBe(text)
  })
})
