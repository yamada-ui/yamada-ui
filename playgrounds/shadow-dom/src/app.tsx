import {
  Button,
  Menu,
  Modal,
  MoonIcon,
  SunIcon,
  useColorMode,
  VStack,
} from "@yamada-ui/react"

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack align="flex-start" p="lg">
      <Button
        startIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      >
        {colorMode === "dark" ? "Change to light" : "Change to dark"}
      </Button>

      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item value="naruto">うずまきナルト</Menu.Item>
          <Menu.Item value="sasuke">うちはサスケ</Menu.Item>
          <Menu.Item value="sakura">春野サクラ</Menu.Item>
        </Menu.Content>
      </Menu.Root>

      <Modal.Root>
        <Modal.OpenTrigger>
          <Button>Open Modal</Button>
        </Modal.OpenTrigger>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>作品冒頭</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            青春とは嘘であり、悪である。
            青春をおう歌せし者達は常に自己と周囲を欺き自らを取り巻く環境のすべてを肯定的にとらえる。彼らは青春の２文字の前ならばどんな一般的な解釈も社会通念もねじ曲げてみせる。彼らにかかれば嘘も秘密も罪科も失敗さえも青春のスパイスでしかないのだ。仮に失敗することが青春の証しであるのなら友達作りに失敗した人間もまた青春のど真ん中でなければおかしいではないか。しかし彼らはそれを認めないだろう。
            すべては彼らのご都合主義でしかない。結論を言おう。
            青春を楽しむ愚か者ども、砕け散れ。
          </Modal.Body>
          <Modal.Footer>
            <Modal.CloseTrigger>
              <Button variant="ghost">とじる</Button>
            </Modal.CloseTrigger>
            <Button>砕け散る</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </VStack>
  )
}
