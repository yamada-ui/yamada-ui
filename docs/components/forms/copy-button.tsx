import { forwardRef, ButtonProps, IconButton, useClipboard, Tooltip } from '@yamada-ui/react'
import { memo } from 'react'
import { Check, Copy } from 'components'

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
            variant='outline'
            colorScheme={hasCopied ? 'secondary' : undefined}
            icon={hasCopied ? <Check /> : <Copy />}
            {...rest}
            onClick={onCopy}
          />
        </Tooltip>
      </>
    )
  }),
)
