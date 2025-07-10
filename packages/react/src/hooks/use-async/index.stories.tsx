import type { Meta } from "@storybook/react-vite"
import { Text } from "../../components/text"
import { useAsync } from "./"

const meta: Meta = {
  title: "Hooks / useAsync",
}

export default meta

export const Basic = () => {
  const { error, loading, value } = useAsync(
    async () =>
      new Promise<string>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve("✌️")
          } else {
            reject(new Error("A pseudo random error occurred"))
          }
        }, 3000)
      }),
    [],
  )

  return loading ? (
    <Text>Loading...</Text>
  ) : error ? (
    <Text>Error: {error.message}</Text>
  ) : (
    <Text>Value: {value}</Text>
  )
}
