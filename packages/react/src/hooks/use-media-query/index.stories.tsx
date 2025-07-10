import type { Meta } from "@storybook/react-vite"
import { Text } from "../../components/text"
import { useMediaQuery } from "./"

const meta: Meta = {
  title: "Hooks / useMediaQuery",
}

export default meta

export const Basic = () => {
  const flg = useMediaQuery("(min-width: 1280px)")

  return <Text>{flg ? "larger than 1280px" : "smaller than 1280px"}</Text>
}
