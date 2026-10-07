import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Cn as n,Ht as r,M as i,P as a,Sn as o,Zt as s,pn as c,wn as l,yn as u}from"./props-CCQavtXy.js";import{t as d}from"./jsx-runtime-BdxMnOeJ.js";import{v as f,y as p}from"./utils-DZVvNDIZ.js";import{i as m,t as ee}from"./effect-CjnfyxRk.js";import{d as te,i as ne,n as re,r as ie}from"./create-component-CNpeiJ0q.js";import{i as ae}from"./proxy-LWYEBWZd.js";import{t as h}from"./AnimatePresence-iAJC3hXr.js";import{t as oe}from"./react-CNcXyxsY.js";import{n as g,t as _}from"./factory-D8gGzaMj.js";import{n as v,t as y}from"./transition-BdoakFl3.js";import{a as se,i as ce,n as le,o as b,r as ue,t as de}from"./alert-CtR3TXkl.js";import{n as fe,t as pe}from"./use-timeout-C78q1PI-.js";import{r as me,t as x}from"./button-BCcG2Qpy.js";import{r as he,t as S}from"./input-D740622u.js";import{n as ge,t as _e}from"./close-button-nzACf7NY.js";import{n as ve,t as C}from"./for-vlneEBu7.js";import{n as ye,t as w}from"./wrap-VuUmTsbR.js";var be;function T(){return(T=e((()=>{te(),be=ne({base:{closeButton:{"&:is([data-variant='plain'], [data-variant='island'])":{colorScheme:`mono!`},"&:is([data-variant='solid'])":{color:`colorScheme.contrast!`,_hover:{bg:`colorScheme.solid!`}},fontSize:`md!`,minBoxSize:`6!`,position:`absolute`,right:`3`,top:`2.5`},content:{"&[data-close-button]":{pe:`6`},display:`flex`,flex:`1`,flexDirection:`column`,gap:`1`},item:{insetX:`0`,maxW:`full`,position:`absolute`,top:`calc({gap} * {index})`,w:`100%`,zIndex:`{z-index}`},list:{position:`relative`,w:`full`},root:{"&[data-negative]":{m:`calc({top} * -1) 0 calc({bottom} * -1)`},"--gap":`spaces.md`,w:`full`}}})})))()}var E,D,O,xe,k,Se,A,j,M,N,P,F,I;function Ce(){return(Ce=e((()=>{oe(),E=t(),ie(),i(),pe(),s(),n(),ee(),b(),ge(),v(),_(),T(),D=d(),{ComponentContext:O,PropsContext:xe,useComponentContext:k,usePropsContext:Se,withContext:A,withProvider:j}=re(`snacks`,be),M=j(({snacks:{direction:e=`start`,items:t,startIndex:n=0},listProps:r,...i})=>{let a=t.length,o=(0,E.useRef)(new Map),[s,c]=(0,E.useState)(0),[l,u]=(0,E.useState)(!!a),d=!!a||l,f=(0,E.useMemo)(()=>({direction:e,elMapRef:o,setExist:u,startIndex:n}),[e,n]),p=(0,E.useCallback)(()=>{a||u(!1)},[a]);return(0,E.useEffect)(()=>{let e=0;if(!a)return;let t=[...o.current.values()].slice(0,a);for(let n of t){if(!n)continue;let{offsetHeight:t,offsetTop:r}=n;t+=r,t>e&&(e=t)}c(e)},[a,e]),m(()=>{a&&u(!0)},[a]),(0,D.jsx)(O,{value:f,children:(0,D.jsx)(h,{initial:!1,children:d?(0,D.jsx)(g.div,{...i,children:(0,D.jsx)(N,{custom:{height:s},...r,children:(0,D.jsx)(h,{onExitComplete:p,children:t.map((e,t)=>(0,D.jsx)(P,{index:t,lastIndex:a-t-1,...e},e.id))})})}):null})})},`root`)({animate:`animate`,exit:`exit`,initial:`initial`,variants:{animate:{padding:`var(--top) 0 var(--bottom)`,transition:{duration:.4}},exit:{padding:0},initial:{padding:0}}},({gap:e,gutter:t=[0,`lg`],negativeMargins:n=!0,...i})=>({"data-negative":r(n),"--bottom":a(t[1],`spaces`,`0px`),"--gap":a(e,`spaces`),"--top":a(t[0],`spaces`,`0px`),...i})),N=A(g.div,`list`)({animate:`animate`,exit:`exit`,initial:`initial`,role:`list`,variants:{animate:({height:e})=>({height:e,opacity:1,transition:{duration:.4}}),exit:{height:0,opacity:0},initial:{height:0,opacity:1}}}),P=A(({variant:e=`plain`,closable:t=!0,description:n,duration:i=null,loadingScheme:a,status:s,title:c,withIcon:u=!0,closeButtonProps:d,contentProps:f,descriptionProps:p,iconProps:ee,loadingProps:te,titleProps:ne,onClose:re,onCloseComplete:ie,...h})=>{let[oe,_]=(0,E.useState)(i),v=ae(),y=v?re:l,b=(0,E.useCallback)(()=>{_(null)},[]),pe=(0,E.useCallback)(()=>{_(i)},[i]);return m(()=>{v||ie?.()},[v]),m(()=>{_(i)},[i]),fe(y,oe),(0,D.jsxs)(ce,{as:g.div,variant:e,status:s,...h,onMouseEnter:o(h.onMouseEnter,b),onMouseLeave:o(h.onMouseLeave,pe),children:[u?a?(0,D.jsx)(ue,{loadingScheme:a,...te}):(0,D.jsx)(le,{...ee}):null,(0,D.jsxs)(F,{"data-close-button":r(t),...f,children:[c?(0,D.jsx)(se,{me:`0`,...ne,children:c}):null,n?(0,D.jsx)(de,{...p,children:n}):null]}),t?(0,D.jsx)(I,{"data-variant":e,...d,onClick:o(d?.onClick,y)}):null]})},`item`)({animate:`animate`,exit:`exit`,initial:`initial`,layout:!0,role:`listitem`,variants:{animate:({index:e})=>({opacity:1,transition:y.enter()(e?0:.2,.4),y:0}),exit:{opacity:0,transition:y.exit()(void 0,.2)},initial:({direction:e,index:t})=>({opacity:0,...t?{y:(e===`start`?-1:1)*16}:{}})}},({index:e,lastIndex:t,...n})=>{let r=(0,E.useRef)(null),{direction:i,elMapRef:a,startIndex:o}=k();return(0,E.useEffect)(()=>{let t=a.current;return t.set(e,r.current),()=>{t.delete(e)}},[a,e]),{ref:r,"--index":i===`start`?t:e,"--z-index":o+e,custom:{direction:i,index:e},...n}}),F=A(`div`,`content`)(),I=A(_e,`closeButton`)()})))()}var L,R,z;function we(){return(we=e((()=>{L=t(),f(),R=0,z=(e={})=>{let[t,n]=(0,L.useState)([]),{config:r}=p(),i=(0,L.useMemo)(()=>r.snacks??{},[r]),a=(0,L.useMemo)(()=>({...i,...e}),[e,i]),{direction:o,limit:s=3,startIndex:c}=a,l=(0,L.useCallback)(e=>({...a,...e}),[a]);return{snack:(0,L.useMemo)(()=>{let e=(e={})=>{e=l(e),R+=1;let{id:t=R.toString(),...r}=e,i={id:t,onClose:()=>n(e=>e.filter(e=>e.id!==t)),...r};return n(e=>[...e.splice(-1*((s??1/0)-1)),i]),t};return e.update=(e,t)=>{t=l(t),n(n=>n.map(n=>n.id===e?{...n,...t}:n))},e.closeAll=()=>{n([])},e.close=e=>{n(t=>t.filter(t=>t.id!==e))},e.isActive=e=>!!t.find(t=>t.id===e),e},[t,s,l]),snacks:(0,L.useMemo)(()=>({direction:o,items:t,startIndex:c}),[o,c,t])}}})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Te;function Ee(){return(Ee=e((()=>{B=t(),c(),me(),ve(),he(),ye(),Ce(),we(),V=d(),H={title:`Components / Snacks`},U=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(w,{gap:`md`,children:[(0,V.jsx)(x,{onClick:()=>{e({description:`こいつ、動くぞ！`,title:`アムロ・レイ`})},children:`Add Snack`}),(0,V.jsx)(x,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(M,{snacks:t}),(0,V.jsx)(S,{placeholder:`Input`})]})},W=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(w,{gap:`md`,children:[(0,V.jsx)(C,{each:[`plain`,`solid`,`subtle`,`surface`,`island`],children:t=>(0,V.jsxs)(x,{onClick:()=>{e({variant:t,description:`美しいものが、嫌いな人がいるのかしら？`,title:`ララァ・スン`,withIcon:t!==`island`})},children:[`Add "`,u(t),`" Snack`]},t)}),(0,V.jsx)(x,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(M,{snacks:t}),(0,V.jsx)(S,{placeholder:`Input`})]})},G=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(w,{gap:`md`,children:[(0,V.jsx)(C,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,V.jsxs)(x,{onClick:()=>{e({description:`アムロ、行きまーす！`,status:t,title:`アムロ・レイ`})},children:[`Add "`,u(t),`" Snack`]},t)}),(0,V.jsx)(x,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(M,{snacks:t}),(0,V.jsx)(S,{placeholder:`Input`})]})},K=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(w,{gap:`md`,children:[(0,V.jsx)(C,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,V.jsxs)(x,{onClick:()=>{e({colorScheme:t,description:`見せて貰おうか。連邦軍のモビルスーツの性能とやらを！`,title:`シャア・アズナブル`})},children:[`Add "`,u(t),`" Snack`]},t)}),(0,V.jsx)(x,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(M,{snacks:t}),(0,V.jsx)(S,{placeholder:`Input`})]})},q=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(w,{gap:`md`,children:[(0,V.jsx)(C,{each:[`oval`,`grid`,`puff`,`dots`],children:t=>(0,V.jsxs)(x,{onClick:()=>{e({description:`大丈夫、あなたなら出来るわ。`,loadingScheme:t,title:`セイラ・マス`})},children:[`Add "`,u(t),`" Snack`]},t)}),(0,V.jsx)(x,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(M,{snacks:t}),(0,V.jsx)(S,{placeholder:`Input`})]})},J=()=>{let{snack:e,snacks:t}=z({direction:`end`});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(w,{gap:`md`,children:[(0,V.jsx)(x,{onClick:()=>{e({description:`認めたくないものだな。自分自身の、若さゆえの過ちというものを。`,title:`シャア・アズナブル`})},children:`Add Snack`}),(0,V.jsx)(x,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(M,{snacks:t}),(0,V.jsx)(S,{placeholder:`Input`})]})},Y=()=>{let{snack:e,snacks:t}=z({limit:5});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(w,{gap:`md`,children:[(0,V.jsx)(x,{onClick:()=>{e({description:`殴られもせずに一人前になった奴がどこにいるものか！`,title:`ブライト・ノア`})},children:`Add Snack`}),(0,V.jsx)(x,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(M,{snacks:t}),(0,V.jsx)(S,{placeholder:`Input`})]})},X=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(w,{gap:`md`,children:[(0,V.jsx)(x,{colorScheme:`primary`,onClick:()=>{e({description:`それでも男ですか！軟弱者！`,duration:3e4,title:`セイラ・マス`})},children:`Add Snack`}),(0,V.jsx)(x,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(M,{snacks:t}),(0,V.jsx)(S,{placeholder:`Input`})]})},Z=()=>{let{snack:e,snacks:t}=z({closable:!1});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(w,{gap:`md`,children:[(0,V.jsx)(x,{colorScheme:`primary`,onClick:()=>{e({description:`ザクとは違うのだよ、ザクとは！`,title:`ランバ・ラル`})},children:`Add Snack`}),(0,V.jsx)(x,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(M,{snacks:t}),(0,V.jsx)(S,{placeholder:`Input`})]})},Q=()=>{let{snack:e,snacks:t}=z(),n=(0,B.useRef)(void 0);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(w,{gap:`md`,children:[(0,V.jsx)(x,{onClick:()=>{n.current=e({description:`オレは、生きる！生きて、アイナと添い遂げる！`,title:`シロー・アマダ`})},children:`Add Snack`}),(0,V.jsx)(x,{colorScheme:`warning`,onClick:()=>{n.current&&e.close(n.current)},children:`Close last Snack`}),(0,V.jsx)(x,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(M,{snacks:t}),(0,V.jsx)(S,{placeholder:`Input`})]})},$=()=>{let{snack:e,snacks:t}=z(),n=(0,B.useRef)(void 0);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(w,{gap:`md`,children:[(0,V.jsx)(x,{onClick:()=>{n.current=e({description:`今の私は、クワトロ・バジーナ大尉だ。それ以上でも、それ以下でもない。`,title:`クワトロ・バジーナ`})},children:`Add Snack`}),(0,V.jsx)(x,{onClick:()=>{n.current&&e.update(n.current,{colorScheme:`purple`,description:`そんな大人、修正してやる！`,title:`カミーユ・ビダン`})},children:`Update last Snack`}),(0,V.jsx)(x,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(M,{snacks:t}),(0,V.jsx)(S,{placeholder:`Input`})]})},Te=[`Basic`,`Variant`,`Status`,`ColorScheme`,`Loading`,`Direction`,`Limit`,`Duration`,`DisabledClosable`,`UseClose`,`UseUpdate`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Ee();export{U as Basic,K as ColorScheme,J as Direction,Z as DisabledClosable,X as Duration,Y as Limit,q as Loading,G as Status,Q as UseClose,$ as UseUpdate,W as Variant,Te as __namedExportsOrder,H as default};