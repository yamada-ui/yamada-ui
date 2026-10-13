import type { Meta } from "@storybook/react-vite"
import { useState } from "react"
import { VStack } from "../stack"
import { Text } from "../text"
import { useFormatDateTime } from "./use-format-date-time"

const meta: Meta = {
  title: "Hooks / useFormatDateTime",
}

export default meta

export const Basic = () => {
  const [value] = useState<Date>(() => new Date())
  const formattedDate = useFormatDateTime(value)

  return <Text>{formattedDate}</Text>
}

export const Locale = () => {
  const [value] = useState<Date>(() => new Date())
  const formattedDateDE = useFormatDateTime(value, { locale: "de-DE" })
  const formattedDateCN = useFormatDateTime(value, { locale: "zh-CN" })

  return (
    <VStack gap="0">
      <Text>{formattedDateDE}</Text>
      <Text>{formattedDateCN}</Text>
    </VStack>
  )
}

export const Long = () => {
  const [value] = useState<Date>(() => new Date())
  const formattedDate = useFormatDateTime(value, {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  })
  const formattedDateTime = useFormatDateTime(value, {
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
  const [value] = useState<Date>(() => new Date())
  const formattedDate = useFormatDateTime(value, {
    year: "numeric",
  })

  return <Text>{formattedDate}</Text>
}

export const Month = () => {
  const [value] = useState<Date>(() => new Date())
  const formattedDate = useFormatDateTime(value, {
    month: "long",
  })

  return <Text>{formattedDate}</Text>
}

export const Day = () => {
  const [value] = useState<Date>(() => new Date())
  const formattedDate = useFormatDateTime(value, {
    day: "2-digit",
  })

  return <Text>{formattedDate}</Text>
}

export const Weekday = () => {
  const [value] = useState<Date>(() => new Date())
  const formattedDate = useFormatDateTime(value, {
    weekday: "long",
  })

  return <Text>{formattedDate}</Text>
}
