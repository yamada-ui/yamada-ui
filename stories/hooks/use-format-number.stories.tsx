import type { Meta } from "@storybook/react"
import { Text, useFormatNumber } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useFormatNumber",
}

export default meta

export const basic = () => {
  const formattedNumber = useFormatNumber(1234567.89, {
    style: "currency",
    currency: "USD",
  })

  return <Text>{formattedNumber}</Text>
}

export const withLocale = () => {
  const formattedNumberEn = useFormatNumber(1234567.89, {
    style: "currency",
    currency: "USD",
    locale: "en-US",
  })
  const formattedNumberDE = useFormatNumber(1234567.89, {
    style: "currency",
    currency: "EUR",
    locale: "de-DE",
  })

  return (
    <>
      <Text>{formattedNumberEn}</Text>
      <Text>{formattedNumberDE}</Text>
    </>
  )
}

export const withOptions = () => {
  const formattedNumber = useFormatNumber(1234567.89, {
    style: "decimal",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })

  return <Text>{formattedNumber}</Text>
}

export const withPercentage = () => {
  const formattedNumber = useFormatNumber(0.145, {
    style: "percent",
  })

  return <Text>{formattedNumber}</Text>
}

export const withUnit = () => {
  const formattedNumber = useFormatNumber(384.4, {
    style: "unit",
    unit: "kilometer",
  })

  return <Text>{formattedNumber}</Text>
}

export const withNotation = () => {
  const formattedNumber = useFormatNumber(1500000, {
    notation: "compact",
  })

  return <Text>{formattedNumber}</Text>
}
