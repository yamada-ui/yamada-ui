import { forwardRef, ButtonProps, IconButton, useClipboard, Tooltip } from '@yamada-ui/react'
import { memo } from 'react'
import { Check, Copy } from 'components/media-and-icons'

export type CopyButtonProps = Omit<ButtonProps, 'value'> & { value: string }

export const CopyButton = memo(
  forwardRef<CopyButtonProps, 'button'>(({ value, ...rest }, ref) => {
    const { hasCopied, onCopy } = useClipboard(value)

    return (
      <>
        <Tooltip
          label='Copied!'
          placement='left'
          isOpen={hasCopied}
          bg='secondary'
          h='8'
          display='inline-flex'
          alignItems='center'
        >
          <IconButton
            ref={ref}
            size='sm'
            variant='unstyled'
            color={hasCopied ? 'secondary' : 'whiteAlpha.600'}
            border='1px solid'
            borderColor={hasCopied ? 'secondary' : 'whiteAlpha.600'}
            bg={['zinc.800', 'zinc.900']}
            _hover={{
              color: hasCopied ? 'secondary' : 'whiteAlpha.800',
              borderColor: hasCopied ? 'secondaru' : 'whiteAlpha.800',
            }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            icon={hasCopied ? <Check /> : <Copy />}
            {...rest}
            onClick={onCopy}
          />
        </Tooltip>
      </>
    )
  }),
)
