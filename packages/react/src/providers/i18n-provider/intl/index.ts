import arAE from "./ar-AE"
import bgBG from "./bg-BG"
import csCZ from "./cs-CZ"
import daDK from "./da-DK"
import deDE from "./de-DE"
import elGR from "./el-GR"
import enGB from "./en-GB"
import enUS from "./en-US"
import esES from "./es-ES"
import etEE from "./et-EE"
import fiFI from "./fi-FI"
import frCA from "./fr-CA"
import frFR from "./fr-FR"
import heIL from "./he-IL"
import hrHR from "./hr-HR"
import huHU from "./hu-HU"
import itIT from "./it-IT"
import jaJP from "./ja-JP"
import koKR from "./ko-KR"
import ltLT from "./lt-LT"
import lvLV from "./lv-LV"
import nlNL from "./nl-NL"
import noNO from "./no-NO"
import plPL from "./pl-PL"
import ptBR from "./pt-BR"
import roRO from "./ro-RO"
import ruRU from "./ru-RU"
import skSK from "./sk-SK"
import slSI from "./sl-SI"
import srRS from "./sr-RS"
import svSE from "./sv-SE"
import trTR from "./tr-TR"
import ukUA from "./uk-UA"
import zhCN from "./zh-CN"
import zhTW from "./zh-TW"

type StringifyIntlData<T> = {
  [K in keyof T]: T[K] extends object ? StringifyIntlData<T[K]> : string
}

export type DefaultIntlData = typeof enUS
export type IntlData = StringifyIntlData<DefaultIntlData>

export default {
  "ar-AE": arAE,
  "bg-BG": bgBG,
  "cs-CZ": csCZ,
  "da-DK": daDK,
  "de-DE": deDE,
  "el-GR": elGR,
  "en-GB": enGB,
  "en-US": enUS,
  "es-ES": esES,
  "et-EE": etEE,
  "fi-FI": fiFI,
  "fr-CA": frCA,
  "fr-FR": frFR,
  "he-IL": heIL,
  "hr-HR": hrHR,
  "hu-HU": huHU,
  "it-IT": itIT,
  "ja-JP": jaJP,
  "ko-KR": koKR,
  "lt-LT": ltLT,
  "lv-LV": lvLV,
  "nl-NL": nlNL,
  "no-NO": noNO,
  "pl-PL": plPL,
  "pt-BR": ptBR,
  "ro-RO": roRO,
  "ru-RU": ruRU,
  "sk-SK": skSK,
  "sl-SI": slSI,
  "sr-RS": srRS,
  "sv-SE": svSE,
  "tr-TR": trTR,
  "uk-UA": ukUA,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
}
