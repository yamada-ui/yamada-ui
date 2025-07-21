import{q as H,I as W,d as Q,f as V,r,j as e,s as E,D as a,a as X,A as O,C as Y,E as _}from"./iframe-BbB59fLB.js";import{P as M}from"./props-table-CLQ6uJWO.js";import{c as L}from"./createLucideIcon-BfIMf7K-.js";import{a as A}from"./avatar-C_x7FvsH.js";import{G as Z}from"./ghost-icon-BINV-R0e.js";import"./grid-W1UnxTpU.js";import"./grid-item-Dq6QrI7D.js";import"./for-JwY7aMwm.js";import"./flex-mIT1fSUh.js";import"./heading-DTYqldnT.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9",key:"5z9253"}],["path",{d:"M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z",key:"19zklq"}]],te=L("axe",ee);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],ie=L("sparkles",ne),oe=H(W)({as:te}),re=H(W)({as:ie}),se=Q({base:{connector:{alignSelf:"stretch",position:"relative",transitionDuration:"moderate",transitionProperty:"common",_after:{borderInlineStart:"{separator-width} {separator-style, solid} {separator-color}",display:"block",h:"full",insetBlockStart:"calc({indicator-size} + {separator-gap})",insetInlineStart:"calc(({indicator-size} / 2) - ({separator-width} / 2))",maxH:"calc(full - {indicator-size} - ({separator-gap} * 2))",position:"absolute"}},content:{display:"flex",flexDirection:"column",w:"full"},description:{color:"fg.muted"},indicator:{alignItems:"center",boxSize:"{indicator-size}",color:"{indicator-stroke}",display:"flex",fontWeight:"medium",justifyContent:"center",lineHeight:"{indicator-size}",overflow:"hidden",rounded:"{indicator-rounded}"},item:{alignItems:"flex-start",display:"flex",flexShrink:"0",_last:{"& [data-connector]":{_after:{display:"none"}}}},root:{"--indicator-fill":"transparent","--indicator-stroke":"colorScheme.solid","--separator-color":"colors.border",display:"flex",flexDirection:"column",w:"full"},title:{alignItems:"center",display:"flex",fontWeight:"medium",gap:"1",lineHeight:"{indicator-size}"}},props:{align:{center:{content:{"&:first-of-type":{alignItems:"flex-end"},flex:"1"},item:{"&:has(> [data-content]:first-of-type)":{"&:not(:has(> [data-content]:last-of-type))":{_after:{display:"block",flex:"1"}}},"&:not(:has(> [data-content]:first-of-type))":{_before:{display:"block",flex:"1"}}}},end:{content:{alignItems:"flex-end"}},start:{content:{alignItems:"flex-start"}}},attached:{true:{item:{"--separator-gap":"0px"}}},shape:{circle:{item:{"--indicator-rounded":"radii.full"}},rounded:{item:{"--indicator-rounded":"radii.l2"}},square:{item:{"--indicator-rounded":"radii.0"}}}},sizes:{base:{item:{_last:{"& [data-content]":{pb:0}}}},sm:{content:{gap:"1",pb:"8"},description:{fontSize:"xs"},item:{gap:"3"},root:{"--indicator-size":"sizes.3","--separator-gap":"spaces.2","--separator-width":"sizes.0.5"},title:{fontSize:"sm"}},md:{content:{gap:"2",pb:"10"},description:{fontSize:"sm"},item:{gap:"4"},root:{"--indicator-size":"sizes.5","--separator-gap":"spaces.2","--separator-width":"sizes.1"},title:{fontSize:"md"}},lg:{content:{gap:"2",pb:"10"},description:{fontSize:"sm"},item:{gap:"4"},root:{"--indicator-size":"sizes.7","--separator-gap":"spaces.2.5","--separator-width":"sizes.1"},title:{fontSize:"md"}},xl:{content:{gap:"2",pb:"12"},description:{fontSize:"md"},item:{gap:"5"},root:{"--indicator-size":"sizes.8","--separator-gap":"spaces.3","--separator-width":"sizes.1.5"},title:{fontSize:"lg"}}},defaultProps:{size:"md",align:"start",shape:"circle"}}),{ComponentContext:ae,useComponentContext:ce,withContext:c,withProvider:le}=V("timeline",se),s=le(({children:t,index:i=-1,items:n=[],...o})=>{const l=r.useMemo(()=>({index:i}),[i]),d=r.useMemo(()=>t||n.map(({align:m="start",content:P,description:q,indicator:N,title:B,connectorProps:G,contentProps:F,descriptionProps:U,indicatorProps:$,titleProps:J,...K},R)=>{const p={connector:e.jsx(k,{...G,children:e.jsx(C,{...$,children:N})}),content:e.jsx(D,{...F,children:P??e.jsxs(e.Fragment,{children:[e.jsx(w,{...J,children:B}),e.jsx(v,{...U,children:q})]})})};return e.jsxs(b,{index:R,...K,children:[m==="start"?p.connector:p.content,m==="start"?p.content:p.connector]},R)}),[n,t]);return e.jsx(ae,{value:l,children:e.jsx(E.ul,{...o,children:d})})},"root")(void 0,({indicatorFill:t,indicatorSize:i,indicatorStroke:n,separatorColor:o,separatorGap:l,separatorStyle:d,separatorWidth:m,...P})=>({"--indicator-fill":a(t,"colors"),"--indicator-size":a(i,"sizes"),"--indicator-stroke":a(n,"colors"),"--separator-color":a(o,"colors"),"--separator-gap":a(l,"spaces"),"--separator-style":a(d),"--separator-width":a(m,"sizes"),...P})),b=c("li","item")(void 0,({index:t,...i})=>{const{index:n}=ce(),o=!O(t)&&!O(n)&&t<=n;return{...i,"data-active":X(o),"data-index":t}}),k=c("div","connector")({"data-connector":""}),de=E("div",{base:{bg:"{indicator-fill}",borderColor:"{indicator-stroke}",borderWidth:"{separator-width}",boxSize:"full",rounded:"{indicator-rounded}"}}),C=c("div","indicator")(void 0,({children:t=e.jsx(de,{}),...i})=>({children:t,...i})),D=c("div","content")({"data-content":""}),w=c("h3","title")(),v=c("p","description")(),ze={component:s,title:"Components / Timeline"},u=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(s,{items:t})},h=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(M,{variant:"stack",rows:["sm","md","lg","xl"],children:(i,n,o)=>e.jsx(s,{size:n,items:t},o)})},x=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(M,{variant:"stack",rows:Y,children:(i,n,o)=>e.jsx(s,{colorScheme:n,items:t},o)})},g=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(M,{variant:"stack",rows:["start","center","end"],children:(i,n,o)=>e.jsx(s,{align:n,items:n!=="start"?t?.map((l,d)=>({align:n!=="end"&&d%2===0?"start":"end",...l})):t},o)})},T=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(M,{variant:"stack",rows:["circle","rounded","square"],children:(i,n,o)=>e.jsx(s,{items:t,shape:n},o)})},f=()=>{const t=r.useMemo(()=>[{align:"end",description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{align:"start",description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{align:"end",description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(s,{align:"center",items:t})},j=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",indicator:e.jsx(Z,{fontSize:"xl"}),title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",indicator:e.jsx(oe,{fontSize:"xl"}),title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",indicator:e.jsx(re,{fontSize:"xl"}),title:"第3部 スターダストクルセイダース"}],[]),i=r.useMemo(()=>[{description:"ジョナサン・ジョースター",indicator:e.jsx(A,{name:"ジョナサン・ジョースター",src:"https://jojo-portal.com/wp-content/themes/jojo-portal/assets/images/common/about/01/img_chara_01.png",boxSize:"full"}),title:"君はディオ・ブランドーだね？",contentProps:{gap:"0"},titleProps:{lineHeight:"short"}},{description:"ディオ・ブランドー",indicator:e.jsx(A,{name:"ディオ・ブランドー",src:"https://jojo-portal.com/wp-content/themes/jojo-portal/assets/images/common/about/01/img_chara_02.png",boxSize:"full"}),title:"そういう君はジョナサン・ジョースター",contentProps:{gap:"0"},titleProps:{lineHeight:"short"}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{items:t}),e.jsx(s,{indicatorSize:"10",items:i})]})},S=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",indicator:e.jsx(_,{layerStyle:"solid",boxSize:"full",children:"1"}),title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",indicator:e.jsx(_,{layerStyle:"solid",boxSize:"full",children:"2"}),title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",indicator:e.jsx(_,{layerStyle:"solid",boxSize:"full",children:"3"}),title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(s,{size:"lg",items:t,shape:"rounded"})},z=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{"--separator-style":"dashed",description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(s,{items:t})},I=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(s,{attached:!0,items:t})},y=()=>e.jsxs(s,{children:[e.jsxs(b,{children:[e.jsx(k,{children:e.jsx(C,{})}),e.jsxs(D,{children:[e.jsx(w,{children:"第1部 ファントムブラッド"}),e.jsx(v,{children:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼"})]})]}),e.jsxs(b,{children:[e.jsx(k,{children:e.jsx(C,{})}),e.jsxs(D,{children:[e.jsx(w,{children:"第2部 戦闘潮流"}),e.jsx(v,{children:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼"})]})]}),e.jsxs(b,{children:[e.jsx(k,{children:e.jsx(C,{})}),e.jsxs(D,{children:[e.jsx(w,{children:"第3部 スターダストクルセイダース"}),e.jsx(v,{children:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼"})]})]})]});u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.RootProps["items"]>(() => [{
    description: "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
    title: "第1部 ファントムブラッド"
  }, {
    description: "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
    title: "第2部 戦闘潮流"
  }, {
    description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
    title: "第3部 スターダストクルセイダース"
  }], []);
  return <Timeline.Root items={items} />;
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.RootProps["items"]>(() => [{
    description: "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
    title: "第1部 ファントムブラッド"
  }, {
    description: "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
    title: "第2部 戦闘潮流"
  }, {
    description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
    title: "第3部 スターダストクルセイダース"
  }], []);
  return <PropsTable variant="stack" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
      return <Timeline.Root key={key} size={row} items={items} />;
    }}
    </PropsTable>;
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.RootProps["items"]>(() => [{
    description: "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
    title: "第1部 ファントムブラッド"
  }, {
    description: "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
    title: "第2部 戦闘潮流"
  }, {
    description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
    title: "第3部 スターダストクルセイダース"
  }], []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => {
      return <Timeline.Root key={key} colorScheme={row} items={items} />;
    }}
    </PropsTable>;
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.RootProps["items"]>(() => [{
    description: "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
    title: "第1部 ファントムブラッド"
  }, {
    description: "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
    title: "第2部 戦闘潮流"
  }, {
    description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
    title: "第3部 スターダストクルセイダース"
  }], []);
  return <PropsTable variant="stack" rows={["start", "center", "end"]}>
      {(_, row, key) => {
      return <Timeline.Root key={key} align={row} items={row !== "start" ? items?.map((item, index) => ({
        align: row !== "end" && index % 2 === 0 ? "start" : "end",
        ...item
      })) : items} />;
    }}
    </PropsTable>;
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.RootProps["items"]>(() => [{
    description: "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
    title: "第1部 ファントムブラッド"
  }, {
    description: "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
    title: "第2部 戦闘潮流"
  }, {
    description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
    title: "第3部 スターダストクルセイダース"
  }], []);
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <Timeline.Root key={key} items={items} shape={row} />;
    }}
    </PropsTable>;
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.RootProps["items"]>(() => [{
    align: "end",
    description: "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
    title: "第1部 ファントムブラッド"
  }, {
    align: "start",
    description: "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
    title: "第2部 戦闘潮流"
  }, {
    align: "end",
    description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
    title: "第3部 スターダストクルセイダース"
  }], []);
  return <Timeline.Root align="center" items={items} />;
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const itemsWithIcon = useMemo<Timeline.RootProps["items"]>(() => [{
    description: "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
    indicator: <GhostIcon fontSize="xl" />,
    title: "第1部 ファントムブラッド"
  }, {
    description: "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
    indicator: <AxeIcon fontSize="xl" />,
    title: "第2部 戦闘潮流"
  }, {
    description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
    indicator: <SparklesIcon fontSize="xl" />,
    title: "第3部 スターダストクルセイダース"
  }], []);
  const itemsWithAvatar = useMemo<Timeline.RootProps["items"]>(() => [{
    description: "ジョナサン・ジョースター",
    indicator: <Avatar name="ジョナサン・ジョースター" src="https://jojo-portal.com/wp-content/themes/jojo-portal/assets/images/common/about/01/img_chara_01.png" boxSize="full" />,
    title: "君はディオ・ブランドーだね？",
    contentProps: {
      gap: "0"
    },
    titleProps: {
      lineHeight: "short"
    }
  }, {
    description: "ディオ・ブランドー",
    indicator: <Avatar name="ディオ・ブランドー" src="https://jojo-portal.com/wp-content/themes/jojo-portal/assets/images/common/about/01/img_chara_02.png" boxSize="full" />,
    title: "そういう君はジョナサン・ジョースター",
    contentProps: {
      gap: "0"
    },
    titleProps: {
      lineHeight: "short"
    }
  }], []);
  return <>
      <Timeline.Root items={itemsWithIcon} />
      <Timeline.Root indicatorSize="10" items={itemsWithAvatar} />
    </>;
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.RootProps["items"]>(() => [{
    description: "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
    indicator: <Center layerStyle="solid" boxSize="full">
            1
          </Center>,
    title: "第1部 ファントムブラッド"
  }, {
    description: "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
    indicator: <Center layerStyle="solid" boxSize="full">
            2
          </Center>,
    title: "第2部 戦闘潮流"
  }, {
    description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
    indicator: <Center layerStyle="solid" boxSize="full">
            3
          </Center>,
    title: "第3部 スターダストクルセイダース"
  }], []);
  return <Timeline.Root size="lg" items={items} shape="rounded" />;
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.RootProps["items"]>(() => [{
    description: "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
    title: "第1部 ファントムブラッド"
  }, {
    "--separator-style": "dashed",
    description: "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
    title: "第2部 戦闘潮流"
  }, {
    description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
    title: "第3部 スターダストクルセイダース"
  }], []);
  return <Timeline.Root items={items} />;
}`,...z.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.RootProps["items"]>(() => [{
    description: "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
    title: "第1部 ファントムブラッド"
  }, {
    description: "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
    title: "第2部 戦闘潮流"
  }, {
    description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
    title: "第3部 スターダストクルセイダース"
  }], []);
  return <Timeline.Root attached items={items} />;
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <Timeline.Root>
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>第1部 ファントムブラッド</Timeline.Title>
          <Timeline.Description>
            全てはここから始まった！ジョナサンとディオ、運命の出会い‼
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>第2部 戦闘潮流</Timeline.Title>
          <Timeline.Description>
            石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>第3部 スターダストクルセイダース</Timeline.Title>
          <Timeline.Description>
            DIO復活…！永き因縁に終止符を打つスタンドバトル‼
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>;
}`,...y.parameters?.docs?.source}}};const Ie=["Basic","Size","ColorScheme","Align","Shape","Alternate","Indicator","Number","Dashed","Attached","Composition"];export{g as Align,f as Alternate,I as Attached,u as Basic,x as ColorScheme,y as Composition,z as Dashed,j as Indicator,S as Number,T as Shape,h as Size,Ie as __namedExportsOrder,ze as default};
