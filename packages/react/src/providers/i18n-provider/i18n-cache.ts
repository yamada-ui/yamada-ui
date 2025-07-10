interface FormatOptions<T> {
  options: T extends Intl.NumberFormat
    ? Intl.NumberFormatOptions
    : T extends Intl.DateTimeFormat
      ? Intl.DateTimeFormatOptions
      : T extends Intl.RelativeTimeFormat
        ? Intl.RelativeTimeFormatOptions
        : T extends Intl.ListFormat
          ? Intl.ListFormatOptions
          : T extends Intl.PluralRules
            ? Intl.PluralRulesOptions
            : T extends Intl.Collator
              ? Intl.CollatorOptions
              : never
}

export const i18nCache = <T extends abstract new (...args: any) => any>(
  Instance: T,
) => {
  const formatterCache = new Map<string, T>()

  return function create(
    locale: string,
    options?: FormatOptions<InstanceType<T>>["options"],
  ): InstanceType<T> {
    const key =
      locale +
      (options
        ? Object.entries(options)
            .sort((a, b) => (a[0] < b[0] ? -1 : 1))
            .join()
        : "")

    if (formatterCache.has(key))
      return formatterCache.get(key) as InstanceType<T>

    // @ts-ignore
    const formatter = new Instance(locale, options)

    formatterCache.set(key, formatter)

    return formatter as any
  }
}
