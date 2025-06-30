import type { useDropzone as useReactDropzone } from "react-dropzone-esm"
import { createContext } from "../../utils"

interface DropzoneContext extends Omit<UseDropzoneReturn, "getRootProps"> {
  dragAccept: boolean
  dragIdle: boolean
  dragReject: boolean
  loading?: boolean
}

export const [DropzoneContext, useDropzoneContext] =
  createContext<DropzoneContext>({
    name: "DropzoneContext",
  })

export type UseDropzoneReturn = ReturnType<typeof useReactDropzone>
