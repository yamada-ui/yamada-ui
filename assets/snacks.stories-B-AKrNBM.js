import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{Cn as n,Dn as r,En as i,F as a,Kt as o,N as s,On as c,_n as l,tn as u}from"./props-sAZv67b_.js";import{t as d}from"./jsx-runtime-BdxMnOeJ.js";import{v as f,y as p}from"./utils-DU-a_DAF.js";import{i as m,t as h}from"./effect-DSHKlzEK.js";import{d as ee,i as g,n as _,r as v}from"./create-component-DQMvd0DD.js";import{i as te}from"./proxy-Bb5cK8yE.js";import{t as y}from"./AnimatePresence-Cz3xD1wK.js";import{t as ne}from"./react-CF1xLFhS.js";import{n as b,t as x}from"./factory-B9yDfkII.js";import{n as S,t as C}from"./transition-C4d0YZ6T.js";import{a as re,i as ie,n as ae,o as oe,r as se,t as ce}from"./alert-C5d_UEy0.js";import{n as le,t as ue}from"./use-timeout-xY7lwyea.js";import{r as de,t as w}from"./button-Cv19gcjc.js";import{r as fe,t as T}from"./input-ats-LDD2.js";import{n as pe,t as me}from"./close-button-DVrOK02L.js";import{n as he,t as E}from"./for-qrDiH4Lk.js";import{n as ge,t as D}from"./wrap-BqaKrmCu.js";var _e;function O(){return(O=e((()=>{ee(),_e=g({base:{closeButton:{"&:is([data-variant='plain'], [data-variant='island'])":{colorScheme:`mono!`},"&:is([data-variant='solid'])":{color:`colorScheme.contrast!`,_hover:{bg:`colorScheme.solid!`}},fontSize:`md!`,minBoxSize:`6!`,position:`absolute`,right:`3`,top:`2.5`},content:{"&[data-close-button]":{pe:`6`},display:`flex`,flex:`1`,flexDirection:`column`,gap:`1`},item:{insetX:`0`,maxW:`full`,position:`absolute`,top:`calc({gap} * {index})`,w:`100%`,zIndex:`{z-index}`},list:{position:`relative`,w:`full`},root:{"&[data-negative]":{m:`calc({top} * -1) 0 calc({bottom} * -1)`},"--gap":`spaces.md`,w:`full`}}})})))()}var k,A,j,ve,M,ye,N,P,F,I,L,be,xe;function Se(){return(Se=e((()=>{ne(),k=t(),v(),s(),ue(),u(),r(),h(),oe(),pe(),S(),x(),O(),A=d(),{ComponentContext:j,PropsContext:ve,useComponentContext:M,usePropsContext:ye,withContext:N,withProvider:P}=_(`snacks`,_e),F=P(({snacks:{direction:e=`start`,items:t,startIndex:n=0},listProps:r,...i})=>{let a=t.length,o=(0,k.useRef)(new Map),[s,c]=(0,k.useState)(0),[l,u]=(0,k.useState)(!!a),d=!!a||l,f=(0,k.useMemo)(()=>({direction:e,elMapRef:o,setExist:u,startIndex:n}),[e,n]),p=(0,k.useCallback)(()=>{a||u(!1)},[a]);return(0,k.useEffect)(()=>{let e=0;if(!a)return;let t=[...o.current.values()].slice(0,a);for(let n of t){if(!n)continue;let{offsetHeight:t,offsetTop:r}=n;t+=r,t>e&&(e=t)}c(e)},[a,e]),m(()=>{a&&u(!0)},[a]),(0,A.jsx)(j,{value:f,children:(0,A.jsx)(y,{initial:!1,children:d?(0,A.jsx)(b.div,{...i,children:(0,A.jsx)(I,{custom:{height:s},...r,children:(0,A.jsx)(y,{onExitComplete:p,children:t.map((e,t)=>(0,A.jsx)(L,{index:t,lastIndex:a-t-1,...e},e.id))})})}):null})})},`root`)({animate:`animate`,exit:`exit`,initial:`initial`,variants:{animate:{padding:`var(--top) 0 var(--bottom)`,transition:{duration:.4}},exit:{padding:0},initial:{padding:0}}},({gap:e,gutter:t=[0,`lg`],negativeMargins:n=!0,...r})=>({"data-negative":o(n),"--bottom":a(t[1],`spaces`,`0px`),"--gap":a(e,`spaces`),"--top":a(t[0],`spaces`,`0px`),...r})),I=N(b.div,`list`)({animate:`animate`,exit:`exit`,initial:`initial`,role:`list`,variants:{animate:({height:e})=>({height:e,opacity:1,transition:{duration:.4}}),exit:{height:0,opacity:0},initial:{height:0,opacity:1}}}),L=N(({variant:e=`plain`,closable:t=!0,description:n,duration:r=null,loadingScheme:a,status:s,title:l,withIcon:u=!0,closeButtonProps:d,contentProps:f,descriptionProps:p,iconProps:h,loadingProps:ee,titleProps:g,onClose:_,onCloseComplete:v,...y})=>{let[ne,x]=(0,k.useState)(r),S=te(),C=S?_:c,oe=(0,k.useCallback)(()=>{x(null)},[]),ue=(0,k.useCallback)(()=>{x(r)},[r]);return m(()=>{S||v?.()},[S]),m(()=>{x(r)},[r]),le(C,ne),(0,A.jsxs)(ie,{as:b.div,variant:e,status:s,...y,onMouseEnter:i(y.onMouseEnter,oe),onMouseLeave:i(y.onMouseLeave,ue),children:[u?a?(0,A.jsx)(se,{loadingScheme:a,...ee}):(0,A.jsx)(ae,{...h}):null,(0,A.jsxs)(be,{"data-close-button":o(t),...f,children:[l?(0,A.jsx)(re,{me:`0`,...g,children:l}):null,n?(0,A.jsx)(ce,{...p,children:n}):null]}),t?(0,A.jsx)(xe,{"data-variant":e,...d,onClick:i(d?.onClick,C)}):null]})},`item`)({animate:`animate`,exit:`exit`,initial:`initial`,layout:!0,role:`listitem`,variants:{animate:({index:e})=>({opacity:1,transition:C.enter()(e?0:.2,.4),y:0}),exit:{opacity:0,transition:C.exit()(void 0,.2)},initial:({direction:e,index:t})=>({opacity:0,...t?{y:(e===`start`?-1:1)*16}:{}})}},({index:e,lastIndex:t,...n})=>{let r=(0,k.useRef)(null),{direction:i,elMapRef:a,startIndex:o}=M();return(0,k.useEffect)(()=>{let t=a.current;return t.set(e,r.current),()=>{t.delete(e)}},[a,e]),{ref:r,"--index":i===`start`?t:e,"--z-index":o+e,custom:{direction:i,index:e},...n}}),be=N(`div`,`content`)(),xe=N(me,`closeButton`)()})))()}var R,z,B;function Ce(){return(Ce=e((()=>{R=t(),f(),z=0,B=(e={})=>{let[t,n]=(0,R.useState)([]),{config:r}=p(),i=(0,R.useMemo)(()=>r.snacks??{},[r]),a=(0,R.useMemo)(()=>({...i,...e}),[e,i]),{direction:o,limit:s=3,startIndex:c}=a,l=(0,R.useCallback)(e=>({...a,...e}),[a]);return{snack:(0,R.useMemo)(()=>{let e=(e={})=>{e=l(e),z+=1;let{id:t=z.toString(),...r}=e,i={id:t,onClose:()=>n(e=>e.filter(e=>e.id!==t)),...r};return n(e=>[...e.splice(-1*((s??1/0)-1)),i]),t};return e.update=(e,t)=>{t=l(t),n(n=>n.map(n=>n.id===e?{...n,...t}:n))},e.closeAll=()=>{n([])},e.close=e=>{n(t=>t.filter(t=>t.id!==e))},e.isActive=e=>!!t.find(t=>t.id===e),e},[t,s,l]),snacks:(0,R.useMemo)(()=>({direction:o,items:t,startIndex:c}),[o,c,t])}}})))()}var V,H,we,U,W,G,K,q,J,Y,X,Z,Q,$,Te;function Ee(){return(Ee=e((()=>{V=t(),l(),de(),he(),fe(),ge(),Se(),Ce(),H=d(),we={title:`Components / Snacks`},U=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(D,{gap:`md`,children:[(0,H.jsx)(w,{onClick:()=>{e({description:`こいつ、動くぞ！`,title:`アムロ・レイ`})},children:`Add Snack`}),(0,H.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(F,{snacks:t}),(0,H.jsx)(T,{placeholder:`Input`})]})},W=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(D,{gap:`md`,children:[(0,H.jsx)(E,{each:[`plain`,`solid`,`subtle`,`surface`,`island`],children:t=>(0,H.jsxs)(w,{onClick:()=>{e({variant:t,description:`美しいものが、嫌いな人がいるのかしら？`,title:`ララァ・スン`,withIcon:t!==`island`})},children:[`Add "`,n(t),`" Snack`]},t)}),(0,H.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(F,{snacks:t}),(0,H.jsx)(T,{placeholder:`Input`})]})},G=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(D,{gap:`md`,children:[(0,H.jsx)(E,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,H.jsxs)(w,{onClick:()=>{e({description:`アムロ、行きまーす！`,status:t,title:`アムロ・レイ`})},children:[`Add "`,n(t),`" Snack`]},t)}),(0,H.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(F,{snacks:t}),(0,H.jsx)(T,{placeholder:`Input`})]})},K=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(D,{gap:`md`,children:[(0,H.jsx)(E,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,H.jsxs)(w,{onClick:()=>{e({colorScheme:t,description:`見せて貰おうか。連邦軍のモビルスーツの性能とやらを！`,title:`シャア・アズナブル`})},children:[`Add "`,n(t),`" Snack`]},t)}),(0,H.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(F,{snacks:t}),(0,H.jsx)(T,{placeholder:`Input`})]})},q=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(D,{gap:`md`,children:[(0,H.jsx)(E,{each:[`oval`,`grid`,`puff`,`dots`],children:t=>(0,H.jsxs)(w,{onClick:()=>{e({description:`大丈夫、あなたなら出来るわ。`,loadingScheme:t,title:`セイラ・マス`})},children:[`Add "`,n(t),`" Snack`]},t)}),(0,H.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(F,{snacks:t}),(0,H.jsx)(T,{placeholder:`Input`})]})},J=()=>{let{snack:e,snacks:t}=B({direction:`end`});return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(D,{gap:`md`,children:[(0,H.jsx)(w,{onClick:()=>{e({description:`認めたくないものだな。自分自身の、若さゆえの過ちというものを。`,title:`シャア・アズナブル`})},children:`Add Snack`}),(0,H.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(F,{snacks:t}),(0,H.jsx)(T,{placeholder:`Input`})]})},Y=()=>{let{snack:e,snacks:t}=B({limit:5});return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(D,{gap:`md`,children:[(0,H.jsx)(w,{onClick:()=>{e({description:`殴られもせずに一人前になった奴がどこにいるものか！`,title:`ブライト・ノア`})},children:`Add Snack`}),(0,H.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(F,{snacks:t}),(0,H.jsx)(T,{placeholder:`Input`})]})},X=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(D,{gap:`md`,children:[(0,H.jsx)(w,{colorScheme:`primary`,onClick:()=>{e({description:`それでも男ですか！軟弱者！`,duration:3e4,title:`セイラ・マス`})},children:`Add Snack`}),(0,H.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(F,{snacks:t}),(0,H.jsx)(T,{placeholder:`Input`})]})},Z=()=>{let{snack:e,snacks:t}=B({closable:!1});return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(D,{gap:`md`,children:[(0,H.jsx)(w,{colorScheme:`primary`,onClick:()=>{e({description:`ザクとは違うのだよ、ザクとは！`,title:`ランバ・ラル`})},children:`Add Snack`}),(0,H.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(F,{snacks:t}),(0,H.jsx)(T,{placeholder:`Input`})]})},Q=()=>{let{snack:e,snacks:t}=B(),n=(0,V.useRef)(void 0);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(D,{gap:`md`,children:[(0,H.jsx)(w,{onClick:()=>{n.current=e({description:`オレは、生きる！生きて、アイナと添い遂げる！`,title:`シロー・アマダ`})},children:`Add Snack`}),(0,H.jsx)(w,{colorScheme:`warning`,onClick:()=>{n.current&&e.close(n.current)},children:`Close last Snack`}),(0,H.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(F,{snacks:t}),(0,H.jsx)(T,{placeholder:`Input`})]})},$=()=>{let{snack:e,snacks:t}=B(),n=(0,V.useRef)(void 0);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(D,{gap:`md`,children:[(0,H.jsx)(w,{onClick:()=>{n.current=e({description:`今の私は、クワトロ・バジーナ大尉だ。それ以上でも、それ以下でもない。`,title:`クワトロ・バジーナ`})},children:`Add Snack`}),(0,H.jsx)(w,{onClick:()=>{n.current&&e.update(n.current,{colorScheme:`purple`,description:`そんな大人、修正してやる！`,title:`カミーユ・ビダン`})},children:`Update last Snack`}),(0,H.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(F,{snacks:t}),(0,H.jsx)(T,{placeholder:`Input`})]})},Te=[`Basic`,`Variant`,`Status`,`ColorScheme`,`Loading`,`Direction`,`Limit`,`Duration`,`DisabledClosable`,`UseClose`,`UseUpdate`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button onClick={() => {
        snack({
          description: "こいつ、動くぞ！",
          title: "アムロ・レイ"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <For each={["plain", "solid", "subtle", "surface", "island"] as const}>
          {variant => <Button key={variant} onClick={() => {
          snack({
            variant,
            description: "美しいものが、嫌いな人がいるのかしら？",
            title: "ララァ・スン",
            withIcon: variant !== "island" ? true : false
          });
        }}>
              Add "{toTitleCase(variant)}" Snack
            </Button>}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <For each={["info", "success", "warning", "error"] as const}>
          {status => <Button key={status} onClick={() => {
          snack({
            description: "アムロ、行きまーす！",
            status,
            title: "アムロ・レイ"
          });
        }}>
              Add "{toTitleCase(status)}" Snack
            </Button>}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <For each={["info", "success", "warning", "error"] as const}>
          {colorScheme => <Button key={colorScheme} onClick={() => {
          snack({
            colorScheme,
            description: "見せて貰おうか。連邦軍のモビルスーツの性能とやらを！",
            title: "シャア・アズナブル"
          });
        }}>
              Add "{toTitleCase(colorScheme)}" Snack
            </Button>}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <For each={["oval", "grid", "puff", "dots"] as const}>
          {loadingScheme => <Button key={loadingScheme} onClick={() => {
          snack({
            description: "大丈夫、あなたなら出来るわ。",
            loadingScheme,
            title: "セイラ・マス"
          });
        }}>
              Add "{toTitleCase(loadingScheme)}" Snack
            </Button>}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks({
    direction: "end"
  });
  return <>
      <Wrap gap="md">
        <Button onClick={() => {
        snack({
          description: "認めたくないものだな。自分自身の、若さゆえの過ちというものを。",
          title: "シャア・アズナブル"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks({
    limit: 5
  });
  return <>
      <Wrap gap="md">
        <Button onClick={() => {
        snack({
          description: "殴られもせずに一人前になった奴がどこにいるものか！",
          title: "ブライト・ノア"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          description: "それでも男ですか！軟弱者！",
          duration: 30000,
          title: "セイラ・マス"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks({
    closable: false
  });
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          description: "ザクとは違うのだよ、ザクとは！",
          title: "ランバ・ラル"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  const id = useRef<string | undefined>(undefined);
  return <>
      <Wrap gap="md">
        <Button onClick={() => {
        id.current = snack({
          description: "オレは、生きる！生きて、アイナと添い遂げる！",
          title: "シロー・アマダ"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="warning" onClick={() => {
        if (id.current) snack.close(id.current);
      }}>
          Close last Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  const id = useRef<string | undefined>(undefined);
  return <>
      <Wrap gap="md">
        <Button onClick={() => {
        id.current = snack({
          description: "今の私は、クワトロ・バジーナ大尉だ。それ以上でも、それ以下でもない。",
          title: "クワトロ・バジーナ"
        });
      }}>
          Add Snack
        </Button>

        <Button onClick={() => {
        if (id.current) snack.update(id.current, {
          colorScheme: "purple",
          description: "そんな大人、修正してやる！",
          title: "カミーユ・ビダン"
        });
      }}>
          Update last Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...$.parameters?.docs?.source}}}})))()}Ee();export{U as Basic,K as ColorScheme,J as Direction,Z as DisabledClosable,X as Duration,Y as Limit,q as Loading,G as Status,Q as UseClose,$ as UseUpdate,W as Variant,Te as __namedExportsOrder,we as default};