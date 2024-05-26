import { a11y, render, screen, fireEvent } from "@yamada-ui/test"
import { FaRobot } from "react-icons/fa"
import { AudioPlayer } from "../src"

describe("<AudioPlayer />", () => {
  test("AudioPlayer renders correctly", async () => {
    const { container } = render(
      <AudioPlayer src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed" />,
    )
    await a11y(container)
  })

  test("AudioPlayer renders correctly with every prop", async () => {
    const { container } = render(
      <AudioPlayer
        src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
        showDuration
        title="Lofi Music"
        withSlider
        bgColor="red.500"
        borderColor="white"
        startIcon={<FaRobot />}
        stopIcon={<FaRobot />}
      />,
    )
    await a11y(container)
  })

  test("AudioPlayer has correct class", async () => {
    const { container } = render(
      <AudioPlayer
        src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
        data-testid="audio-player"
      />,
    )
    expect(screen.getByTestId("audio-player")).toHaveClass("ui-audio-player")
    await a11y(container)
  })

  test("AudioPlayer has title", async () => {
    const { getByText, container } = render(
      <AudioPlayer
        src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
        title="Lofi Music"
      />,
    )
    expect(getByText("Lofi Music")).toBeTruthy()
    await a11y(container)
  })

  test("Can play and pause audio", async () => {
    const { container, findByTestId } = render(
      <AudioPlayer
        src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
        data-testid="audio-player-audio"
      />,
    )
    const playButton = screen.getByRole("button", { name: /play/i })
    expect(playButton).toBeTruthy()
    fireEvent.click(playButton)

    const audio = await findByTestId("audio-player-audio")
    expect(audio).not.toBeNull()

    const pauseButton = screen.getByRole("button", { name: /pause/i })
    expect(pauseButton).toBeTruthy()
    fireEvent.click(pauseButton)
    await a11y(container)
  })

  test("Can mute and unmute audio", async () => {
    const { container } = render(
      <AudioPlayer
        src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
        muteButton
      />,
    )
    const muteButton = screen.getByRole("button", { name: /mute/i })
    expect(muteButton).toBeTruthy()
    fireEvent.click(muteButton)
    await a11y(container)
  })

  test("Can use Slider to control time", async () => {
    const { container } = render(
      <AudioPlayer
        src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
        withSlider
      />,
    )
    const slider = screen.getByRole("slider")
    expect(slider).toBeTruthy()
    fireEvent.click(slider)
    fireEvent.keyPress(slider, { key: "ArrowRight", code: 39, charCode: 39 })
    await a11y(container)
  })

  test("AudioPlayer has correct icons", async () => {
    const { container } = render(
      <AudioPlayer
        src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
        startIcon={
          <div data-testid="fa-robot">
            <FaRobot />
          </div>
        }
        stopIcon={
          <div data-testid="fa-robot">
            <FaRobot />
          </div>
        }
      />,
    )
    const playButton = screen.getByRole("button", { name: /play/i })
    expect(playButton).toBeTruthy()
    expect(playButton).toContainElement(screen.getByTestId("fa-robot"))
    fireEvent.click(playButton)
    const pauseButton = screen.getByRole("button", { name: /pause/i })
    expect(pauseButton).toBeTruthy()
    expect(pauseButton).toContainElement(screen.getByTestId("fa-robot"))
    fireEvent.click(pauseButton)
    await a11y(container)
  })

  // Was not able to test audio duration and background color and border color
})
