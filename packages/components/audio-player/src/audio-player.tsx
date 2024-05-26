import { Button } from "@yamada-ui/button"
import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { Slider } from "@yamada-ui/slider"
import { cx } from "@yamada-ui/utils"
import { useState, useRef, useEffect } from "react"
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa"

type AudioPlayerOptions = {
  /**
   * The source of the audio file.
   *
   */
  src: string

  /**
   * Shows duration of the audio file.
   * @default false
   */
  showDuration?: boolean

  /**
   * The title of the audio file.
   * @default ""
   */
  title?: string

  /**
   * With slider to control time.
   * @default false
   */
  withSlider?: boolean

  /**
   * The background color of the audio player.
   *
   */
  bgColor?: string

  /**
   * The border color of the audio player.
   *
   */
  borderColor?: string

  /**
   * The icon of the start button.
   *
   */
  startIcon?: React.ReactNode

  /**
   * The icon of the stop button.
   *
   */
  stopIcon?: React.ReactNode

  /**
   * Mute button.
   * @default false
   */
  muteButton?: boolean
}

export type AudioPlayerProps = HTMLUIProps<"div"> &
  ThemeProps<"AudioPlayer"> &
  AudioPlayerOptions

export const AudioPlayer = forwardRef<AudioPlayerProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("AudioPlayer", props)

  const {
    className,
    src,
    showDuration,
    title,
    withSlider,
    bgColor,
    borderColor,
    startIcon,
    stopIcon,
    muteButton,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles,
    ...(withSlider && { width: "100%" }),
    ...(bgColor && { backgroundColor: bgColor }),
    ...(borderColor && { borderColor: borderColor }),
  }

  const file = useRef(new Audio(src))

  const [isPlaying, setIsPlaying] = useState(false)
  const [durationString, setDurationString] = useState("")
  const [currTime, setcurrTime] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)

  const handleSliderChangeEnd = (value: number) => {
    file.current.currentTime = value
  }

  useEffect(() => {
    const currentFile = file.current

    const handleTimeUpdate = () => {
      if (currentFile.currentTime === currentFile.duration) {
        setIsPlaying(false)
      }
      setcurrTime(currentFile.currentTime)
      setDurationString(`${Math.floor(currentFile.currentTime / 60)}:${Math.floor(currentFile.currentTime % 60) < 10 ? "0" + Math.floor(currentFile.currentTime % 60) : Math.floor(currentFile.currentTime % 60)} / 
        ${Math.floor(currentFile.duration / 60)}:${Math.floor(currentFile.duration % 60) < 10 ? "0" + Math.floor(currentFile.duration % 60) : Math.floor(currentFile.duration % 60)}`)
    }

    const handleLoadedMetadata = () => {
      setDuration(currentFile.duration)
      setDurationString(
        `0:00 / ${Math.floor(currentFile.duration / 60)}:${Math.floor(currentFile.duration % 60) < 10 ? "0" + Math.floor(currentFile.duration % 60) : Math.floor(currentFile.duration % 60)}`,
      )
    }

    currentFile.addEventListener("timeupdate", handleTimeUpdate)
    currentFile.addEventListener("loadedmetadata", handleLoadedMetadata)

    return () => {
      currentFile.removeEventListener("timeupdate", handleTimeUpdate)
      currentFile.removeEventListener("loadedmetadata", handleLoadedMetadata)
    }
  })

  const handlePlayStop = () => {
    if (isPlaying) {
      file.current.pause()
      setIsPlaying(false)
    } else {
      file.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-audio-player", className)}
      __css={css}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Button
          onClick={handlePlayStop}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? startIcon || <FaPause /> : stopIcon || <FaPlay />}
        </Button>
        {(title || withSlider) && (
          <div
            style={{
              display: "grid",
              gridTemplateRows: "auto 1fr",
              marginLeft: "10px",
              width: "100%",
            }}
          >
            {title && <ui.div>{title}</ui.div>}
            {withSlider && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  width: "100%",
                }}
              >
                <Slider
                  value={Number(currTime)}
                  max={duration}
                  onChange={setcurrTime}
                  onChangeEnd={handleSliderChangeEnd}
                />
                <ui.div>{durationString}</ui.div>
              </div>
            )}
          </div>
        )}
        {showDuration && !withSlider && (
          <ui.div style={{ marginLeft: "10px" }}>{durationString}</ui.div>
        )}
      </div>
      {muteButton && (
        <Button
          style={{ flexShrink: 0 }}
          onClick={() => (file.current.muted = !file.current.muted)}
          aria-label="Mute"
        >
          {file.current.muted ? <FaVolumeMute /> : <FaVolumeUp />}
        </Button>
      )}
    </ui.div>
  )
})
