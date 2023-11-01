import { ui, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { FC } from 'react'
import { AvatarProps, useAvatarContext } from './avatar'

const defaultFormat = (name: string) => {
  const names = name.split(' ')
  const firstName = names[0] ?? ''
  const lastName = names.length > 1 ? names[names.length - 1] : ''

  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}

export type AvatarNameProps = HTMLUIProps<'div'> &
  Pick<AvatarProps, 'name' | 'format'>

export const AvatarName: FC<AvatarNameProps> = ({
  name,
  format = defaultFormat,
  ...rest
}) => {
  const styles = useAvatarContext()

  const css: CSSUIObject = { ...styles.name }

  return (
    <ui.div className='ui-avatar__name' role='img' __css={css} {...rest}>
      {name ? format(name) : null}
    </ui.div>
  )
}
