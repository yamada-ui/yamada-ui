import type { Meta } from "@storybook/react-vite"
import { VStack } from "../stack"
import { Text } from "../text"
import { useFormatDateTime } from "./use-format-date-time"

const meta: Meta = {
  title: "Hooks / useFormatDateTime",
}

export default meta

export const Basic = () => {
  const formattedDate = useFormatDateTime(new Date())

  return <Text>{formattedDate}</Text>
}

export const Locale = () => {
  const formattedDateDE = useFormatDateTime(new Date(), { locale: "de-DE" })
  const formattedDateCN = useFormatDateTime(new Date(), { locale: "zh-CN" })

  return (
    <VStack gap="0">
      <Text>{formattedDateDE}</Text>
      <Text>{formattedDateCN}</Text>
    </VStack>
  )
}

export const Long = () => {
  const formattedDate = useFormatDateTime(new Date(), {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  })
  const formattedDateTime = useFormatDateTime(new Date(), {
    day: "numeric",
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    month: "long",
    second: "numeric",
    weekday: "long",
    year: "numeric",
  })

  return (
    <VStack gap="0">
      <Text>{formattedDate}</Text>
      <Text>{formattedDateTime}</Text>
    </VStack>
  )
}

export const Year = () => {
  const formattedDate = useFormatDateTime(new Date(), {
    year: "numeric",
  })

  return <Text>{formattedDate}</Text>
}

export const Month = () => {
  const formattedDate = useFormatDateTime(new Date(), {
    month: "long",
  })

  return <Text>{formattedDate}</Text>
}

export const Day = () => {
  const formattedDate = useFormatDateTime(new Date(), {
    day: "2-digit",
  })

  return <Text>{formattedDate}</Text>
}

export const Weekday = () => {
  const formattedDate = useFormatDateTime(new Date(), {
    weekday: "long",
  })

  return <Text>{formattedDate}</Text>
}
