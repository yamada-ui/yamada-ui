import { Text, useAsync } from '@yamada-ui/react'

export default {
  title: 'Hooks / useAsync',
}

export const basic = () => {
  const { loading, error, value } = useAsync(
    async () =>
      new Promise<string>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve('✌️')
          } else {
            reject(new Error('A pseudo random error occurred'))
          }
        }, 3000)
      }),
    [],
  )

  return (
    <>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <Text>Value: {value}</Text>
      )}
    </>
  )
}
