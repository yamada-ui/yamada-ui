interface FormatOptions<Y> {
  options: Y extends Intl.NumberFormat
    ? Intl.NumberFormatOptions
    : Y extends Intl.DateTimeFormat
      ? Intl.DateTimeFormatOptions
      : Y extends Intl.RelativeTimeFormat
        ? Intl.RelativeTimeFormatOptions
        : Y extends Intl.ListFormat
          ? Intl.ListFormatOptions
          : Y extends Intl.PluralRules
            ? Intl.PluralRulesOptions
            : Y extends Intl.Collator
              ? Intl.CollatorOptions
              : never
}

export const i18nCache = <Y extends abstract new (...args: any) => any>(
  Instance: Y,
) => {
  const formatterCache = new Map<string, Y>()

  return function create(
    locale: string,
    options?: FormatOptions<InstanceType<Y>>["options"],
  ): InstanceType<Y> {
    const key =
      locale +
      (options
        ? Object.entries(options)
            .sort((a, b) => (a[0] < b[0] ? -1 : 1))
            .join()
        : "")

    if (formatterCache.has(key))
      return formatterCache.get(key) as InstanceType<Y>

    // @ts-ignore
    const formatter = new Instance(locale, options)

    formatterCache.set(key, formatter)

    return formatter as any
  }
}
