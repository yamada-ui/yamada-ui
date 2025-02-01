import type { Meta, StoryFn } from "@storybook/react"
import { useEffect, useRef, useState } from "react"
import { Slider } from "."
import { FormControlRoot } from "../../components/form-control"
import { useBoolean } from "../../hooks/use-boolean"
import { IconButton } from "../button"
import { PauseIcon, PlayIcon } from "../icon"

type Story = StoryFn<typeof Slider>

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "Components / Slider",
}

export default meta

export const Basic: Story = () => {
  const [playing, { off: end, on: start }] = useBoolean()
  const [value, setValue] = useState(0)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)
  const valueRef = useRef(value)

  const handlePlay = () => {
    if (playing) return
    start()
    const timerId = setInterval(() => {
      if (valueRef.current === 100) {
        clearInterval(timerId)
        setValue(0)
        end()
      } else {
        setValue((prev) => Math.min(prev + 0.025, 100)) // 0.025ごとに増やす
      }
    }, 25)
    setTimerId(timerId)
  }

  const handleStop = () => {
    if (!playing) return
    clearInterval(timerId!)
    end()
  }

  useEffect(() => {
    valueRef.current = value
  }, [value])

  return (
    <div style={{ width: "100%" }}>
      <FormControlRoot style={{ marginBottom: "20px" }}>
        <Slider max={100} min={0} value={value} onChange={setValue} />
      </FormControlRoot>
      <IconButton
        icon={playing ? <PauseIcon /> : <PlayIcon />}
        onClick={playing ? handleStop : handlePlay}
      />
    </div>
  )
}
