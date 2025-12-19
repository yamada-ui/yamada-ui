import{n as xe,o as ge,I as Te,d as De,g as Me,r,j as e,s as fe,U as a,b as _e,H as A,C as ve,W as O}from"./iframe-D_HYglKf.js";import{P as _}from"./props-table-TlEH2bpt.js";import{a as R}from"./avatar-Vw8Zgzc-.js";import{G as Oe}from"./ghost-icon-Dyv7V6oW.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CteH-i1E.js";import"./grid-item-B8xJCE0J.js";import"./for-B7ME2eWM.js";import"./flex-DmJewv6f.js";import"./heading-D4a_pOa-.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9",key:"5z9253"}],["path",{d:"M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z",key:"19zklq"}]],Ae=xe("axe",Pe);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],He=xe("sparkles",Re),We=ge(Te)({as:Ae}),Ee=ge(Te)({as:He}),qe=De({base:{connector:{alignSelf:"stretch",position:"relative",transitionDuration:"moderate",transitionProperty:"common",_after:{borderInlineStart:"{separator-width} {separator-style, solid} {separator-color}",display:"block",h:"full",insetBlockStart:"calc({indicator-size} + {separator-gap})",insetInlineStart:"calc(({indicator-size} / 2) - ({separator-width} / 2))",maxH:"calc(full - {indicator-size} - ({separator-gap} * 2))",position:"absolute"}},content:{display:"flex",flexDirection:"column",w:"full"},description:{color:"fg.muted"},indicator:{alignItems:"center",boxSize:"{indicator-size}",color:"{indicator-stroke}",display:"flex",fontWeight:"medium",justifyContent:"center",lineHeight:"{indicator-size}",overflow:"hidden",rounded:"{indicator-rounded}"},item:{alignItems:"flex-start",display:"flex",flexShrink:"0",_last:{"& [data-connector]":{_after:{display:"none"}}}},root:{"--indicator-fill":"transparent","--indicator-stroke":"colorScheme.solid","--separator-color":"colors.border",display:"flex",flexDirection:"column",w:"full"},title:{alignItems:"center",display:"flex",fontWeight:"medium",gap:"1",lineHeight:"{indicator-size}"}},props:{align:{center:{content:{"&:first-of-type":{alignItems:"flex-end"},flex:"1"},item:{"&:has(> [data-content]:first-of-type)":{"&:not(:has(> [data-content]:last-of-type))":{_after:{display:"block",flex:"1"}}},"&:not(:has(> [data-content]:first-of-type))":{_before:{display:"block",flex:"1"}}}},end:{content:{alignItems:"flex-end"}},start:{content:{alignItems:"flex-start"}}},attached:{true:{item:{"--separator-gap":"0px"}}},shape:{circle:{item:{"--indicator-rounded":"radii.full"}},rounded:{item:{"--indicator-rounded":"radii.l2"}},square:{item:{"--indicator-rounded":"radii.0"}}}},sizes:{base:{item:{_last:{"& [data-content]":{pb:0}}}},sm:{content:{gap:"1",pb:"8"},description:{fontSize:"xs"},item:{gap:"3"},root:{"--indicator-size":"sizes.3","--separator-gap":"spaces.2","--separator-width":"sizes.0.5"},title:{fontSize:"sm"}},md:{content:{gap:"2",pb:"10"},description:{fontSize:"sm"},item:{gap:"4"},root:{"--indicator-size":"sizes.5","--separator-gap":"spaces.2","--separator-width":"sizes.1"},title:{fontSize:"md"}},lg:{content:{gap:"2",pb:"10"},description:{fontSize:"sm"},item:{gap:"4"},root:{"--indicator-size":"sizes.7","--separator-gap":"spaces.2.5","--separator-width":"sizes.1"},title:{fontSize:"md"}},xl:{content:{gap:"2",pb:"12"},description:{fontSize:"md"},item:{gap:"5"},root:{"--indicator-size":"sizes.8","--separator-gap":"spaces.3","--separator-width":"sizes.1.5"},title:{fontSize:"lg"}}},defaultProps:{size:"md",align:"start",shape:"circle"}}),{ComponentContext:Le,useComponentContext:Ne,withContext:c,withProvider:Be}=Me("timeline",qe),s=Be(({children:t,index:i=-1,items:n=[],...o})=>{const l=r.useMemo(()=>({index:i}),[i]),d=r.useMemo(()=>t||n.map(({align:m="start",content:v,description:je,indicator:Se,title:Ie,connectorProps:ze,contentProps:ye,descriptionProps:be,indicatorProps:ke,titleProps:Ce,...we},P)=>{const p={connector:e.jsx(k,{...ze,children:e.jsx(C,{...ke,children:Se})}),content:e.jsx(w,{...ye,children:v??e.jsxs(e.Fragment,{children:[e.jsx(D,{...Ce,children:Ie}),e.jsx(M,{...be,children:je})]})})};return e.jsxs(b,{index:P,...we,children:[m==="start"?p.connector:p.content,m==="start"?p.content:p.connector]},P)}),[n,t]);return e.jsx(Le,{value:l,children:e.jsx(fe.ul,{...o,children:d})})},"root")(void 0,({indicatorFill:t,indicatorSize:i,indicatorStroke:n,separatorColor:o,separatorGap:l,separatorStyle:d,separatorWidth:m,...v})=>({"--indicator-fill":a(t,"colors"),"--indicator-size":a(i,"sizes"),"--indicator-stroke":a(n,"colors"),"--separator-color":a(o,"colors"),"--separator-gap":a(l,"spaces"),"--separator-style":a(d),"--separator-width":a(m,"sizes"),...v})),b=c("li","item")(void 0,({index:t,...i})=>{const{index:n}=Ne(),o=!A(t)&&!A(n)&&t<=n;return{...i,"data-active":_e(o),"data-index":t}}),k=c("div","connector")({"data-connector":""}),Ge=fe("div",{base:{bg:"{indicator-fill}",borderColor:"{indicator-stroke}",borderWidth:"{separator-width}",boxSize:"full",rounded:"{indicator-rounded}"}}),C=c("div","indicator")(void 0,({children:t=e.jsx(Ge,{}),...i})=>({children:t,...i})),w=c("div","content")({"data-content":""}),D=c("h3","title")(),M=c("p","description")(),et={component:s,title:"Components / Timeline"},u=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(s,{items:t})},h=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(_,{variant:"stack",rows:["sm","md","lg","xl"],children:(i,n,o)=>e.jsx(s,{size:n,items:t},o)})},x=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(_,{variant:"stack",rows:ve,children:(i,n,o)=>e.jsx(s,{colorScheme:n,items:t},o)})},g=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(_,{variant:"stack",rows:["start","center","end"],children:(i,n,o)=>e.jsx(s,{align:n,items:n!=="start"?t.map((l,d)=>({align:n!=="end"&&d%2===0?"start":"end",...l})):t},o)})},T=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(_,{variant:"stack",rows:["circle","rounded","square"],children:(i,n,o)=>e.jsx(s,{items:t,shape:n},o)})},f=()=>{const t=r.useMemo(()=>[{align:"end",description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{align:"start",description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{align:"end",description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(s,{align:"center",items:t})},j=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",indicator:e.jsx(Oe,{fontSize:"xl"}),title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",indicator:e.jsx(We,{fontSize:"xl"}),title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",indicator:e.jsx(Ee,{fontSize:"xl"}),title:"第3部 スターダストクルセイダース"}],[]),i=r.useMemo(()=>[{description:"ジョナサン・ジョースター",indicator:e.jsx(R,{name:"ジョナサン・ジョースター",src:"https://jojo-portal.com/wp-content/themes/jojo-portal/assets/images/common/about/01/img_chara_01.png",boxSize:"full"}),title:"君はディオ・ブランドーだね？",contentProps:{gap:"0"},titleProps:{lineHeight:"short"}},{description:"ディオ・ブランドー",indicator:e.jsx(R,{name:"ディオ・ブランドー",src:"https://jojo-portal.com/wp-content/themes/jojo-portal/assets/images/common/about/01/img_chara_02.png",boxSize:"full"}),title:"そういう君はジョナサン・ジョースター",contentProps:{gap:"0"},titleProps:{lineHeight:"short"}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{items:t}),e.jsx(s,{indicatorSize:"10",items:i})]})},S=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",indicator:e.jsx(O,{layerStyle:"solid",boxSize:"full",children:"1"}),title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",indicator:e.jsx(O,{layerStyle:"solid",boxSize:"full",children:"2"}),title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",indicator:e.jsx(O,{layerStyle:"solid",boxSize:"full",children:"3"}),title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(s,{size:"lg",items:t,shape:"rounded"})},I=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{"--separator-style":"dashed",description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(s,{items:t})},z=()=>{const t=r.useMemo(()=>[{description:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼",title:"第1部 ファントムブラッド"},{description:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",title:"第2部 戦闘潮流"},{description:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼",title:"第3部 スターダストクルセイダース"}],[]);return e.jsx(s,{attached:!0,items:t})},y=()=>e.jsxs(s,{children:[e.jsxs(b,{children:[e.jsx(k,{children:e.jsx(C,{})}),e.jsxs(w,{children:[e.jsx(D,{children:"第1部 ファントムブラッド"}),e.jsx(M,{children:"全てはここから始まった！ジョナサンとディオ、運命の出会い‼"})]})]}),e.jsxs(b,{children:[e.jsx(k,{children:e.jsx(C,{})}),e.jsxs(w,{children:[e.jsx(D,{children:"第2部 戦闘潮流"}),e.jsx(M,{children:"石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼"})]})]}),e.jsxs(b,{children:[e.jsx(k,{children:e.jsx(C,{})}),e.jsxs(w,{children:[e.jsx(D,{children:"第3部 スターダストクルセイダース"}),e.jsx(M,{children:"DIO復活…！永き因縁に終止符を打つスタンドバトル‼"})]})]})]});var H,W,E;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.Item[]>(() => [{
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
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var q,L,N;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.Item[]>(() => [{
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
}`,...(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var B,G,F;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.Item[]>(() => [{
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
}`,...(F=(G=x.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var U,$,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.Item[]>(() => [{
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
      return <Timeline.Root key={key} align={row} items={row !== "start" ? items.map((item, index) => ({
        align: row !== "end" && index % 2 === 0 ? "start" : "end",
        ...item
      })) : items} />;
    }}
    </PropsTable>;
}`,...(J=($=g.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,V;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.Item[]>(() => [{
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
}`,...(V=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.Item[]>(() => [{
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
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const itemsWithIcon = useMemo<Timeline.Item[]>(() => [{
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
  const itemsWithAvatar = useMemo<Timeline.Item[]>(() => [{
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
}`,...(ne=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,oe,re;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.Item[]>(() => [{
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
}`,...(re=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ae,ce;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.Item[]>(() => [{
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
}`,...(ce=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var le,de,me;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const items = useMemo<Timeline.Item[]>(() => [{
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
}`,...(me=(de=z.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ue,he;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(he=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};const tt=["Basic","Size","ColorScheme","Align","Shape","Alternate","Indicator","Number","Dashed","Attached","Composition"];export{g as Align,f as Alternate,z as Attached,u as Basic,x as ColorScheme,y as Composition,I as Dashed,j as Indicator,S as Number,T as Shape,h as Size,tt as __namedExportsOrder,et as default};
