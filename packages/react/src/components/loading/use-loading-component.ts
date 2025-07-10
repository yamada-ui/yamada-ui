import { useMemo } from "react"
import { isString, toPascalCase } from "../../utils"
import { Loading } from "./"

export const useLoadingComponent = (scheme: Loading.Scheme) => {
  const Component = useMemo(
    () => Loading[toPascalCase(scheme) as keyof typeof Loading],
    [scheme],
  )

  return Component
}

export const getLoadingComponent = (scheme: Loading.Scheme) => {
  return Loading[toPascalCase(scheme) as keyof typeof Loading]
}

export const isLoadingScheme = (scheme: any): scheme is Loading.Scheme => {
  return isString(scheme) && toPascalCase(scheme) in Loading
}
