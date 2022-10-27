import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FaCheckCircle } from 'react-icons/fa'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { List, DiscList, DecimalList, ListItem, ListIcon, FontAwesomeIcon } from '@yamada-ui/react'
import { Link } from '../../../components/navigation/src/link'

export default {
  title: 'Components / Navigation / Link',
  component: List,
} as ComponentMeta<typeof List>

export const linkIsExternal: ComponentStory<typeof List> = () => {
  return (
    <Link isExternal href='/'>LINK</Link>
  )
}