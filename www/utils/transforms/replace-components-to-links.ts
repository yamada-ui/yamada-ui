/**
 * Replaces component tags in MDX text with informative text links.
 */
export function replaceComponentsToLinks(text: string): string {
  try {
    // Replace ComponentList
    text = text.replace(
      /<ComponentList\s*\/>/g,
      "[View the complete list of components on the website](/docs/components)",
    )

    // Replace HookList
    text = text.replace(
      /<HookList\s*\/>/g,
      "[View the complete list of hooks on the website](/docs/hooks)",
    )

    // Replace Contributors with type
    text = text.replace(
      /<Contributors\s+type="maintainers"\s*\/>/g,
      "[View the list of maintainers on the website](/docs/community#maintainers)",
    )

    text = text.replace(
      /<Contributors\s+type="emeriti"\s*\/>/g,
      "[View the list of emeriti contributors on the website](/docs/community#emeriti)",
    )

    // Replace Contributors without type
    text = text.replace(
      /<Contributors\s*\/>/g,
      "[View the list of contributors on the website](/docs/community#contributors)",
    )

    // Replace Sponsors with type
    text = text.replace(
      /<Sponsors\s+type="platinum"\s*\/>/g,
      "[View the list of platinum sponsors on the website](/docs/community#platinum-sponsors)",
    )

    text = text.replace(
      /<Sponsors\s+type="gold"\s*\/>/g,
      "[View the list of gold sponsors on the website](/docs/community#gold-sponsors)",
    )

    text = text.replace(
      /<Sponsors\s+type="silver"\s*\/>/g,
      "[View the list of silver sponsors on the website](/docs/community#silver-sponsors)",
    )

    return text
  } catch (error) {
    console.error("Error in replaceCommunityComponentsToLinks:", error)
    return text
  }
}
