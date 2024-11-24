import type { CSSProperties, UIProperties } from "."

type ShorthandProps = { [key in CSSProperties | UIProperties]?: string[] }

export const shorthandProps: ShorthandProps = {
  accentColor: ["accent"],
  background: ["bg"],
  backgroundAttachment: ["bgAttachment"],
  backgroundBlendMode: ["bgBlendMode"],
  backgroundClip: ["bgClip"],
  backgroundColor: ["bgColor"],
  backgroundImage: ["bgImage", "bgImg", "bgGradient"],
  backgroundOrigin: ["bgOrigin"],
  backgroundPosition: ["bgPosition"],
  backgroundPositionX: ["bgPositionX", "bgPosX"],
  backgroundPositionY: ["bgPositionY", "bgPosY"],
  backgroundRepeat: ["bgRepeat"],
  backgroundSize: ["bgSize"],
  borderBottomLeftRadius: ["roundedBottomLeft"],
  borderBottomRadius: ["roundedBottom"],
  borderBottomRightRadius: ["roundedBottomRight"],
  borderEndEndRadius: ["borderBottomEndRadius", "roundedBottomEnd"],
  borderEndStartRadius: ["borderBottomStartRadius", "roundedBottomStart"],
  borderInlineEnd: ["borderEnd"],
  borderInlineEndColor: ["borderEndColor"],
  borderInlineEndRadius: ["borderEndRadius", "roundedEnd"],
  borderInlineEndStyle: ["borderEndStyle"],
  borderInlineEndWidth: ["borderEndWidth"],
  borderInlineStart: ["borderStart"],
  borderInlineStartColor: ["borderStartColor"],
  borderInlineStartRadius: ["borderStartRadius", "roundedStart"],
  borderInlineStartStyle: ["borderStartStyle"],
  borderInlineStartWidth: ["borderStartWidth"],
  borderLeftRadius: ["roundedLeft"],
  borderRadius: ["rounded"],
  borderRightRadius: ["roundedRight"],
  borderStartEndRadius: ["borderTopEndRadius", "roundedTopEnd"],
  borderStartStartRadius: ["borderTopStartRadius", "roundedTopStart"],
  borderTopLeftRadius: ["roundedTopLeft"],
  borderTopRadius: ["roundedTop"],
  borderTopRightRadius: ["roundedTopRight"],
  boxShadow: ["shadow"],
  caretColor: ["caret"],
  color: ["textColor"],
  columnGap: ["gx", "gapX"],
  flexDirection: ["flexDir"],
  fontSize: ["text"],
  gap: ["g"],
  height: ["h"],
  insetInlineEnd: ["insetEnd"],
  insetInlineStart: ["insetStart"],
  letterSpacing: ["tracking"],
  lineHeight: ["leading"],
  listStyleImage: ["listStyleImg"],
  listStylePosition: ["listStylePos"],
  margin: ["m"],
  marginBottom: ["mb"],
  marginInlineEnd: ["me", "marginEnd"],
  marginInlineStart: ["ms", "marginStart"],
  marginLeft: ["ml"],
  marginRight: ["mr"],
  marginTop: ["mt"],
  marginX: ["mx"],
  marginY: ["my"],
  maxHeight: ["maxH"],
  maxWidth: ["maxW"],
  minHeight: ["minH"],
  minWidth: ["minW"],
  mixBlendMode: ["blendMode"],
  overscrollBehavior: ["overscroll"],
  overscrollBehaviorX: ["overscrollX"],
  overscrollBehaviorY: ["overscrollY"],
  padding: ["p"],
  paddingBottom: ["pb"],
  paddingInlineEnd: ["pe", "paddingEnd"],
  paddingInlineStart: ["ps", "paddingStart"],
  paddingLeft: ["pl"],
  paddingRight: ["pr"],
  paddingTop: ["pt"],
  paddingX: ["px"],
  paddingY: ["py"],
  position: ["pos"],
  rowGap: ["gy", "gapY"],
  textDecoration: ["textDecor"],
  width: ["w"],
  zIndex: ["z"],
}