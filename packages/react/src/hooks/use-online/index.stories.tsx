import type { Meta } from "@storybook/react-vite"
import { Badge } from "../../components/badge"
import { useOnline } from "./"

const meta: Meta = {
  title: "Hooks / useOnline",
}

export default meta

export const Basic = () => {
  const online = useOnline()

  return (
    <Badge colorScheme={online ? "green" : "red"}>
      {online ? "Online" : "Offline"}
    </Badge>
  )
}
