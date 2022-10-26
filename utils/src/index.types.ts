type Primitive = null | undefined | string | number | boolean | symbol | bigint

type PathImpl<K extends string | number | symbol, V> = K extends string | number
  ? V extends Primitive
    ? `${K}`
    : `${K}.${Path<V>}`
  : ``

export type Path<T> = {
  [K in keyof T]-?: PathImpl<K, T[K]>
}[keyof T]

const hoge = {hoge:"hoge.foo.bar.piyo.fuga",foo2:"hoge.foo2"}
const hoge2 = hoge["hoge"]

export type Dict<T = any> = Record<string, T>

export type StringLiteral = string & {}

export type Union<T> = T | StringLiteral

export type Length = string | 0 | number

export type DynamicRecord<T> = {
  [K in keyof T]-?: T[K] extends Primitive ? string | number : DynamicRecord<T[K]>
}

const path: Path<{hoge:{foo:{bar:{piyo:{fuga: "end"}}}, foo2:"end2"}}> = "hoge.foo.bar.piyo.fuga"
const path2:"hoge.foo.bar.piyo.fuga"|"hoge.foo2"  = "hoge.foo.bar.piyo.fuga"

type Hogehoges = {hoge : string}[]

const hogehoges:Hogehoges = []
const hogehoge = {foo: "hoge"} as unknown as Hogehoges[number] // アサーション：型の矯正的な上書き

hogehoges.push(hogehoge)