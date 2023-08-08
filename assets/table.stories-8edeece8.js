import{j as a,a as d,F as c}from"./jsx-runtime-e6a661ac.js";import{r as s}from"./index-61bf1805.js";import{u as ko,T as xo,a as Fo,b as Bo,c as zo}from"./thead-2a08f840.js";import{T as Oo}from"./td-7d297e9b.js";import{T as O}from"./table-caption-abea31f0.js";import{a as Ho}from"./use-component-style-b3c7bc86.js";import{o as jo}from"./theme-00f66a43.js";import{y as _o,s as No,P as Vo,d as Eo,e as Lo}from"./factory-3c20bca9.js";import{B as ho}from"./button-78028f3e.js";import{T as qo}from"./text-db0e2e1e.js";import"./_commonjsHelpers-de833af9.js";import"./index-817d1b31.js";import"./checkbox-e06c1f5f.js";import"./index-ddcaa18e.js";import"./form-control-0ae5f623.js";import"./forward-ref-c496b87d.js";import"./flex-af7b5bf9.js";import"./index-6bcd17ac.js";import"./motion-fb190baf.js";import"./icon-4e9764f5.js";import"./index-1e5cc672.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./loading-3c2f8b38.js";import"./index-14097b93.js";import"./index-f963e1c4.js";const n=s.forwardRef(({colorScheme:e,highlightOnSelected:o=!0,...r},t)=>{const[H,yo]=Ho("Table",{colorScheme:e,highlightOnSelected:o,...r}),{className:So,withFooter:Ko=!1,theadProps:To,tbodyProps:go,tfootProps:Mo,checkboxProps:Co,layout:wo,children:Do,...vo}=jo(yo),{getTableProps:fo,...Go}=ko({..._o(vo,["highlightOnSelected","highlightOnHover","withColumnBorders"]),checkboxProps:{colorScheme:e,...Co}}),Zo={w:"100%",tableLayout:wo,...H.table},Io=No(Do),Ro=Vo(Io,O);return a(Oo,{value:H,children:a(xo,{value:{...Go},children:d(Eo.table,{className:Lo("ui-table",So),__css:Zo,...fo({},t),children:[a(Fo,{...To}),a(Bo,{...go}),Ko?a(zo,{...Mo}):null,Ro]})})})});n.displayName="Table";const ya={title:"Components / Data Display / Table",component:n},i=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o})},m=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return d(c,{children:[a(n,{size:"sm",columns:e,data:o}),a(n,{size:"md",columns:e,data:o}),a(n,{size:"lg",columns:e,data:o}),a(n,{size:"xl",columns:e,data:o})]})},l=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return d(c,{children:[a(n,{variant:"simple",columns:e,data:o}),a(n,{variant:"striped",columns:e,data:o})]})},p=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return d(c,{children:[a(n,{variant:"striped",colorScheme:"primary",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"secondary",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"warning",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"danger",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"link",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"gray",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"zinc",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"neutral",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"stone",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"red",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"rose",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"pink",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"orange",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"amber",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"yellow",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"lime",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"green",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"emerald",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"teal",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"cyan",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"sky",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"blue",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"indigo",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"violet",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"purple",columns:e,data:o}),a(n,{variant:"striped",colorScheme:"fuchsia",columns:e,data:o})]})},u=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,withColumnBorders:!0})},b=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,withBorder:!0})},P=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,highlightOnHover:!0})},h=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return d(c,{children:[a(n,{variant:"simple",columns:e,data:o,children:a(O,{placement:"top",children:"©バードスタジオ/集英社・東映アニメーション"})}),a(n,{variant:"striped",columns:e,data:o,children:a(O,{placement:"bottom",children:"©バードスタジオ/集英社・東映アニメーション"})})]})},y=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name",footer:"作品名"},{header:"放送期間",accessorKey:"broadcastPeriod",footer:"放送期間"},{header:"話数",accessorKey:"episode",footer:"話数"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return d(c,{children:[a(n,{columns:e,data:o,withFooter:!0}),a(n,{columns:e,data:o,withFooter:!0,withFooterSelect:!0})]})},S=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,rowId:"name"})},K=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,rowId:"name",defaultSort:[{id:"name",desc:!1}],onChangeSort:r=>{console.log("sort",r)}})},T=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,rowId:"name",manualSorting:!0,onChangeSort:r=>{console.log("sort",r)}})},g=()=>{const[e,o]=s.useState([]),r=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),t=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return d(c,{children:[a(ho,{onClick:()=>o([]),children:"Reset sort"}),a(n,{columns:r,data:t,rowId:"name",manualSorting:!0,sort:e,onChangeSort:o})]})},M=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,rowId:"name",maxMultiSortColCount:2,onChangeSort:r=>{console.log("sort",r)}})},C=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod",enableSorting:!1},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return d(c,{children:[a(n,{columns:e,data:o,enableSorting:!1}),a(n,{columns:e,data:o,onChangeSort:r=>{console.log("sort",r)}})]})},w=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name",sortDescFirst:!0},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return d(c,{children:[a(n,{columns:e,data:o,sortDescFirst:!0,onChangeSort:r=>{console.log("sort",r)}}),a(n,{columns:e,data:o,onChangeSort:r=>{console.log("sort",r)}})]})},D=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,enableMultiSort:!1,onChangeSort:r=>{console.log("sort",r)}})},v=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,rowId:"name",defaultSelectedRowIds:["ドラゴンボール"],onChangeSelect:r=>{console.log("selectedIds",r)}})},f=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,rowId:"name",disabledRowIds:["ドラゴンボールZ"],onChangeSelect:r=>{console.log("selectedIds",r)}})},G=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,rowId:"name",rowsClickSelect:!0,onChangeSelect:r=>{console.log("selectedIds",r)}})},Z=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,enableRowSelection:!1})},I=()=>{const[e,o]=s.useState([]),r=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),t=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return d(c,{children:[a(ho,{onClick:()=>o([]),children:"Reset select"}),a(n,{columns:r,data:t,rowId:"name",selectedRowIds:e,onChangeSelect:o})]})},R=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,onClickRow:r=>{console.log("row",r)}})},k=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,checkboxProps:{colorScheme:"red"}})},x=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o,selectColumnProps:{css:{w:"40px"}}})},F=()=>{const[e,o]=s.useState([]),r=s.useMemo(()=>[{header:"作品名",accessorKey:"name"},{header:"放送期間",accessorKey:"broadcastPeriod"},{header:"話数",accessorKey:"episode"}],[]),t=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return d(c,{children:[d(qo,{children:["Select ids ",e.join(", ")]}),a(n,{columns:r,data:t,selectColumnProps:!1,rowsClickSelect:!0,selectedRowIds:e,onChangeSelect:o})]})},B=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name",css:{color:"primary"}},{header:"放送期間",accessorKey:"broadcastPeriod",sx:{color:"secondary"}},{header:"話数",accessorKey:"episode",style:{color:"red"}}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return a(n,{columns:e,data:o})},z=()=>{const e=s.useMemo(()=>[{header:"作品名",accessorKey:"name",footer:"作品名"},{header:"放送期間",accessorKey:"broadcastPeriod",footer:"放送期間"},{header:"話数",accessorKey:"episode",footer:"話数"}],[]),o=s.useMemo(()=>[{name:"ドラゴンボール",broadcastPeriod:"1986年2月26日 - 1989年4月19日",episode:"全153話"},{name:"ドラゴンボールZ",broadcastPeriod:"1989年4月26日 - 1996年1月31日",episode:"全291話 + スペシャル2話"},{name:"ドラゴンボールGT",broadcastPeriod:"1996年2月7日 - 1997年11月19日",episode:"全64話 + 番外編1話"},{name:"ドラゴンボール改",broadcastPeriod:"2009年4月5日 - 2015年6月28日",episode:"全159話"},{name:"ドラゴンボール超",broadcastPeriod:"2015年7月5日 - 2018年3月25日",episode:"全131話"}],[]);return d(c,{children:[a(n,{columns:e,data:o,withFooter:!0,theadProps:{bg:["red.200","red.700"]},tbodyProps:{bg:["green.200","green.700"]},tfootProps:{bg:["blue.200","blue.700"]}}),a(n,{columns:e,data:o,withFooter:!0,headerGroupProps:{bg:["red.200","red.700"]},rowProps:{bg:["green.200","green.700"]},footerGroupProps:{bg:["blue.200","blue.700"]}}),a(n,{columns:e,data:o,withFooter:!0,headerProps:({column:r})=>{if(r.columnDef.header==="作品名")return{color:["red.400","red.300"]}},cellProps:({column:r})=>{if(r.columnDef.header==="作品名")return{color:["red.400","red.300"]}},footerProps:({column:r})=>{if(r.columnDef.footer==="作品名")return{color:["red.400","red.300"]}}})]})};var j,_,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} />;
}`,...(N=(_=i.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var V,E,L;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <>
      <Table size='sm' columns={columns} data={data} />
      <Table size='md' columns={columns} data={data} />
      <Table size='lg' columns={columns} data={data} />
      <Table size='xl' columns={columns} data={data} />
    </>;
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var q,A,J;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <>
      <Table variant='simple' columns={columns} data={data} />
      <Table variant='striped' columns={columns} data={data} />
    </>;
}`,...(J=(A=l.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var Q,U,W;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <>
      <Table variant='striped' colorScheme='primary' columns={columns} data={data} />

      <Table variant='striped' colorScheme='secondary' columns={columns} data={data} />

      <Table variant='striped' colorScheme='warning' columns={columns} data={data} />

      <Table variant='striped' colorScheme='danger' columns={columns} data={data} />

      <Table variant='striped' colorScheme='link' columns={columns} data={data} />

      <Table variant='striped' colorScheme='gray' columns={columns} data={data} />

      <Table variant='striped' colorScheme='zinc' columns={columns} data={data} />

      <Table variant='striped' colorScheme='neutral' columns={columns} data={data} />

      <Table variant='striped' colorScheme='stone' columns={columns} data={data} />

      <Table variant='striped' colorScheme='red' columns={columns} data={data} />

      <Table variant='striped' colorScheme='rose' columns={columns} data={data} />

      <Table variant='striped' colorScheme='pink' columns={columns} data={data} />

      <Table variant='striped' colorScheme='orange' columns={columns} data={data} />

      <Table variant='striped' colorScheme='amber' columns={columns} data={data} />

      <Table variant='striped' colorScheme='yellow' columns={columns} data={data} />

      <Table variant='striped' colorScheme='lime' columns={columns} data={data} />

      <Table variant='striped' colorScheme='green' columns={columns} data={data} />

      <Table variant='striped' colorScheme='emerald' columns={columns} data={data} />

      <Table variant='striped' colorScheme='teal' columns={columns} data={data} />

      <Table variant='striped' colorScheme='cyan' columns={columns} data={data} />

      <Table variant='striped' colorScheme='sky' columns={columns} data={data} />

      <Table variant='striped' colorScheme='blue' columns={columns} data={data} />

      <Table variant='striped' colorScheme='indigo' columns={columns} data={data} />

      <Table variant='striped' colorScheme='violet' columns={columns} data={data} />

      <Table variant='striped' colorScheme='purple' columns={columns} data={data} />

      <Table variant='striped' colorScheme='fuchsia' columns={columns} data={data} />
    </>;
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} withColumnBorders />;
}`,...($=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,oe,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} withBorder />;
}`,...(ae=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ne,se,re;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} highlightOnHover />;
}`,...(re=(se=P.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var de,ce,te;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <>
      <Table variant='simple' columns={columns} data={data}>
        <TableCaption placement='top'>
          ©バードスタジオ/集英社・東映アニメーション
        </TableCaption>
      </Table>
      <Table variant='striped' columns={columns} data={data}>
        <TableCaption placement='bottom'>
          ©バードスタジオ/集英社・東映アニメーション
        </TableCaption>
      </Table>
    </>;
}`,...(te=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:te.source}}};var ie,me,le;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name',
    footer: '作品名'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod',
    footer: '放送期間'
  }, {
    header: '話数',
    accessorKey: 'episode',
    footer: '話数'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <>
      <Table columns={columns} data={data} withFooter />
      <Table columns={columns} data={data} withFooter withFooterSelect />
    </>;
}`,...(le=(me=y.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var pe,ue,be;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} rowId='name' />;
}`,...(be=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var Pe,he,ye;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} rowId='name' defaultSort={[{
    id: 'name',
    desc: false
  }]} onChangeSort={sort => {
    console.log('sort', sort);
  }} />;
}`,...(ye=(he=K.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var Se,Ke,Te;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} rowId='name' manualSorting onChangeSort={sort => {
    console.log('sort', sort);
  }} />;
}`,...(Te=(Ke=T.parameters)==null?void 0:Ke.docs)==null?void 0:Te.source}}};var ge,Me,Ce;g.parameters={...g.parameters,docs:{...(ge=g.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [sort, onChangeSort] = useState<Sort<Data>>([]);
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <>
      <Button onClick={() => onChangeSort([])}>Reset sort</Button>

      <Table columns={columns} data={data} rowId='name' manualSorting sort={sort} onChangeSort={onChangeSort} />
    </>;
}`,...(Ce=(Me=g.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};var we,De,ve;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} rowId='name' maxMultiSortColCount={2} onChangeSort={sort => {
    console.log('sort', sort);
  }} />;
}`,...(ve=(De=M.parameters)==null?void 0:De.docs)==null?void 0:ve.source}}};var fe,Ge,Ze;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod',
    enableSorting: false
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <>
      <Table columns={columns} data={data} enableSorting={false} />

      <Table columns={columns} data={data} onChangeSort={sort => {
      console.log('sort', sort);
    }} />
    </>;
}`,...(Ze=(Ge=C.parameters)==null?void 0:Ge.docs)==null?void 0:Ze.source}}};var Ie,Re,ke;w.parameters={...w.parameters,docs:{...(Ie=w.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name',
    sortDescFirst: true
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <>
      <Table columns={columns} data={data} sortDescFirst onChangeSort={sort => {
      console.log('sort', sort);
    }} />
      <Table columns={columns} data={data} onChangeSort={sort => {
      console.log('sort', sort);
    }} />
    </>;
}`,...(ke=(Re=w.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var xe,Fe,Be;D.parameters={...D.parameters,docs:{...(xe=D.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} enableMultiSort={false} onChangeSort={sort => {
    console.log('sort', sort);
  }} />;
}`,...(Be=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var ze,Oe,He;v.parameters={...v.parameters,docs:{...(ze=v.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} rowId='name' defaultSelectedRowIds={['ドラゴンボール']} onChangeSelect={selectedIds => {
    console.log('selectedIds', selectedIds);
  }} />;
}`,...(He=(Oe=v.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};var je,_e,Ne;f.parameters={...f.parameters,docs:{...(je=f.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} rowId='name' disabledRowIds={['ドラゴンボールZ']} onChangeSelect={selectedIds => {
    console.log('selectedIds', selectedIds);
  }} />;
}`,...(Ne=(_e=f.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var Ve,Ee,Le;G.parameters={...G.parameters,docs:{...(Ve=G.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} rowId='name' rowsClickSelect onChangeSelect={selectedIds => {
    console.log('selectedIds', selectedIds);
  }} />;
}`,...(Le=(Ee=G.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var qe,Ae,Je;Z.parameters={...Z.parameters,docs:{...(qe=Z.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} enableRowSelection={false} />;
}`,...(Je=(Ae=Z.parameters)==null?void 0:Ae.docs)==null?void 0:Je.source}}};var Qe,Ue,We;I.parameters={...I.parameters,docs:{...(Qe=I.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  const [selectedRowIds, onChangeSelect] = useState<string[]>([]);
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <>
      <Button onClick={() => onChangeSelect([])}>Reset select</Button>

      <Table columns={columns} data={data} rowId='name' selectedRowIds={selectedRowIds} onChangeSelect={onChangeSelect} />
    </>;
}`,...(We=(Ue=I.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,Ye,$e;R.parameters={...R.parameters,docs:{...(Xe=R.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} onClickRow={row => {
    console.log('row', row);
  }} />;
}`,...($e=(Ye=R.parameters)==null?void 0:Ye.docs)==null?void 0:$e.source}}};var eo,oo,ao;k.parameters={...k.parameters,docs:{...(eo=k.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} checkboxProps={{
    colorScheme: 'red'
  }} />;
}`,...(ao=(oo=k.parameters)==null?void 0:oo.docs)==null?void 0:ao.source}}};var no,so,ro;x.parameters={...x.parameters,docs:{...(no=x.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} selectColumnProps={{
    css: {
      w: '40px'
    }
  }} />;
}`,...(ro=(so=x.parameters)==null?void 0:so.docs)==null?void 0:ro.source}}};var co,to,io;F.parameters={...F.parameters,docs:{...(co=F.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
  const [selectedRowIds, onChangeSelect] = useState<string[]>([]);
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod'
  }, {
    header: '話数',
    accessorKey: 'episode'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <>
      <Text>Select ids {selectedRowIds.join(', ')}</Text>

      <Table columns={columns} data={data} selectColumnProps={false} rowsClickSelect selectedRowIds={selectedRowIds} onChangeSelect={onChangeSelect} />
    </>;
}`,...(io=(to=F.parameters)==null?void 0:to.docs)==null?void 0:io.source}}};var mo,lo,po;B.parameters={...B.parameters,docs:{...(mo=B.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name',
    css: {
      color: 'primary'
    }
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod',
    sx: {
      color: 'secondary'
    }
  }, {
    header: '話数',
    accessorKey: 'episode',
    style: {
      color: 'red'
    }
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <Table columns={columns} data={data} />;
}`,...(po=(lo=B.parameters)==null?void 0:lo.docs)==null?void 0:po.source}}};var uo,bo,Po;z.parameters={...z.parameters,docs:{...(uo=z.parameters)==null?void 0:uo.docs,source:{originalSource:`() => {
  const columns = useMemo<Column<Data>[]>(() => [{
    header: '作品名',
    accessorKey: 'name',
    footer: '作品名'
  }, {
    header: '放送期間',
    accessorKey: 'broadcastPeriod',
    footer: '放送期間'
  }, {
    header: '話数',
    accessorKey: 'episode',
    footer: '話数'
  }], []);
  const data = useMemo<Data[]>(() => [{
    name: 'ドラゴンボール',
    broadcastPeriod: '1986年2月26日 - 1989年4月19日',
    episode: '全153話'
  }, {
    name: 'ドラゴンボールZ',
    broadcastPeriod: '1989年4月26日 - 1996年1月31日',
    episode: '全291話 + スペシャル2話'
  }, {
    name: 'ドラゴンボールGT',
    broadcastPeriod: '1996年2月7日 - 1997年11月19日',
    episode: '全64話 + 番外編1話'
  }, {
    name: 'ドラゴンボール改',
    broadcastPeriod: '2009年4月5日 - 2015年6月28日',
    episode: '全159話'
  }, {
    name: 'ドラゴンボール超',
    broadcastPeriod: '2015年7月5日 - 2018年3月25日',
    episode: '全131話'
  }], []);
  return <>
      <Table columns={columns} data={data} withFooter theadProps={{
      bg: ['red.200', 'red.700']
    }} tbodyProps={{
      bg: ['green.200', 'green.700']
    }} tfootProps={{
      bg: ['blue.200', 'blue.700']
    }} />

      <Table columns={columns} data={data} withFooter headerGroupProps={{
      bg: ['red.200', 'red.700']
    }} rowProps={{
      bg: ['green.200', 'green.700']
    }} footerGroupProps={{
      bg: ['blue.200', 'blue.700']
    }} />

      <Table columns={columns} data={data} withFooter headerProps={({
      column
    }) => {
      if (column.columnDef.header === '作品名') return {
        color: ['red.400', 'red.300']
      };
    }} cellProps={({
      column
    }) => {
      if (column.columnDef.header === '作品名') return {
        color: ['red.400', 'red.300']
      };
    }} footerProps={({
      column
    }) => {
      if (column.columnDef.footer === '作品名') return {
        color: ['red.400', 'red.300']
      };
    }} />
    </>;
}`,...(Po=(bo=z.parameters)==null?void 0:bo.docs)==null?void 0:Po.source}}};const Sa=["basic","withSize","withVariant","withColorScheme","withColumnBorders","withBorder","withHighlightOnHover","withCaption","withFooter","withRowId","withDefaultSort","manualSort","customControlSort","withMaxMultiSortColCount","disabledSort","withSortDescFirst","disabledMultiSort","withDefaultSelectedRowIds","disabledRowIds","withRowsClickSelect","disabledSelect","customControlSelect","useClickRow","withCheckboxProps","withSelectColumnProps","disabledSelectColumn","withColumnStyles","customProps"];export{Sa as __namedExportsOrder,i as basic,I as customControlSelect,g as customControlSort,z as customProps,ya as default,D as disabledMultiSort,f as disabledRowIds,Z as disabledSelect,F as disabledSelectColumn,C as disabledSort,T as manualSort,R as useClickRow,b as withBorder,h as withCaption,k as withCheckboxProps,p as withColorScheme,u as withColumnBorders,B as withColumnStyles,v as withDefaultSelectedRowIds,K as withDefaultSort,y as withFooter,P as withHighlightOnHover,M as withMaxMultiSortColCount,S as withRowId,G as withRowsClickSelect,x as withSelectColumnProps,m as withSize,w as withSortDescFirst,l as withVariant};
//# sourceMappingURL=table.stories-8edeece8.js.map
