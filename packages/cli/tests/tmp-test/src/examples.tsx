/**
 * 例:
 * Button コンポーネント用の仮のプロパティ。
 */
interface ButtonProps {
  /**
   * @deprecated
   */
  disabled?: boolean

  /**
   * @deprecated */
  startIcon?: JSX.Element

  // これはdeprecatedではない
  onClick?: () => void
}

// 実際にJSX属性としてテストしてみる例
const App = () => {
  return (
    <div>
      <button disabled startIcon={<span>old-icon</span>} onClick={() => { }}>
        Hello
      </button>
    </div>
  )
}

