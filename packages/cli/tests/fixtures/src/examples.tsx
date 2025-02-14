/**
 * 例:
 * Button コンポーネント用の仮のプロパティ。
 */
interface ButtonProps {
  /**
   * @deprecated
   */
  isDisabled?: boolean

  /**
   * @deprecated */
  leftIcon?: JSX.Element

  // これはdeprecatedではない
  onClick?: () => void
}

// 実際にJSX属性としてテストしてみる例
const App = () => {
  return (
    <div>
      <button isDisabled leftIcon={<span>old-icon</span>} onClick={() => { }}>
        Hello
      </button>
    </div>
  )
}

