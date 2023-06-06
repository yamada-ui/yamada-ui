import { faCheck, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon } from '@yamada-ui/fontawesome'
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  FormControl,
  IconButton,
  useEditableControl,
} from '@yamada-ui/react'

export default {
  title: 'Components / Forms / Editable',
  component: Editable,
} as ComponentMeta<typeof Editable>

export const basic: ComponentStory<typeof Editable> = () => {
  return (
    <Editable defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withTextarea: ComponentStory<typeof Editable> = () => {
  return (
    <Editable defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableTextarea />
    </Editable>
  )
}

export const withStartWithEditView: ComponentStory<typeof Editable> = () => {
  return (
    <Editable startWithEditView defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withIsPreviewFocusable: ComponentStory<typeof Editable> = () => {
  return (
    <Editable isPreviewFocusable={false} defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withSubmitOnBlur: ComponentStory<typeof Editable> = () => {
  return (
    <Editable submitOnBlur={false} defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withSelectAllOnFocus: ComponentStory<typeof Editable> = () => {
  return (
    <Editable selectAllOnFocus={false} defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withPlaceholder: ComponentStory<typeof Editable> = () => {
  return (
    <Editable placeholder='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withBorderColor: ComponentStory<typeof Editable> = () => {
  return (
    <>
      <Editable defaultValue='default border color'>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable focusBorderColor='green.500' defaultValue='custom border color'>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable isInvalid errorBorderColor='orange.500' defaultValue='custom border color'>
        <EditablePreview />
        <EditableInput />
      </Editable>
    </>
  )
}

export const isDisabled: ComponentStory<typeof Editable> = () => {
  return (
    <>
      <Editable isDisabled defaultValue='your email address'>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isDisabled label='Email address' helperMessage="We'll never share your email.">
        <Editable defaultValue='your email address'>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof Editable> = () => {
  return (
    <>
      <Editable isReadOnly defaultValue='your email address'>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isReadOnly label='Email address' helperMessage="We'll never share your email.">
        <Editable defaultValue='your email address'>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof Editable> = () => {
  return (
    <>
      <Editable isInvalid defaultValue='your email address'>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isInvalid label='Email address' errorMessage='Email is required.'>
        <Editable defaultValue='your email address'>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>
  )
}

export const customControl: ComponentStory<typeof Editable> = () => {
  const CustomControls = () => {
    const { isEditing, getSubmitProps, getCancelProps, getEditProps } = useEditableControl()

    return isEditing ? (
      <ButtonGroup size='sm' gap='sm'>
        <IconButton icon={<Icon icon={faCheck} />} {...getSubmitProps()} />
        <IconButton icon={<Icon icon={faXmark} />} {...getCancelProps()} />
      </ButtonGroup>
    ) : (
      <ButtonGroup size='sm' gap='sm'>
        <IconButton icon={<Icon icon={faPen} />} {...getEditProps()} />
      </ButtonGroup>
    )
  }

  return (
    <Editable display='flex' gap='sm' isPreviewFocusable={false} defaultValue='オッス！オラ悟空！'>
      <EditablePreview w='full' />
      <EditableInput />
      <CustomControls />
    </Editable>
  )
}
