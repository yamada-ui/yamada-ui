import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{Cn as n,M as r,P as i,Qt as a,Tn as o,Ut as s,bn as c,mn as l,wn as u}from"./props-BYiltGva.js";import{t as d}from"./jsx-runtime-BdxMnOeJ.js";import{v as f,y as p}from"./utils-BHXGjhoF.js";import{i as m,t as ee}from"./effect-DSHKlzEK.js";import{d as h,i as g,n as te,r as ne}from"./create-component-DGaOtb0M.js";import{i as re}from"./proxy-CP4o_Nkt.js";import{t as _}from"./AnimatePresence-BMFpVoNi.js";import{t as ie}from"./react-BM_UpBu7.js";import{n as v,t as y}from"./factory-B2uG3Th-.js";import{n as b,t as x}from"./transition-D9Ew3PwE.js";import{a as ae,i as oe,n as se,o as ce,r as le,t as ue}from"./alert-HoHlP86J.js";import{n as de,t as fe}from"./use-timeout-BX3oZhsy.js";import{r as pe,t as S}from"./button-_unCKz3u.js";import{r as me,t as C}from"./input-DEQ3rBfc.js";import{n as he,t as ge}from"./close-button-CYPR6G3q.js";import{n as _e,t as w}from"./for-QPCbaokC.js";import{n as ve,t as T}from"./wrap-9oFEizsW.js";var ye;function E(){return(E=e((()=>{h(),ye=g({base:{closeButton:{"&:is([data-variant='plain'], [data-variant='island'])":{colorScheme:`mono!`},"&:is([data-variant='solid'])":{color:`colorScheme.contrast!`,_hover:{bg:`colorScheme.solid!`}},fontSize:`md!`,minBoxSize:`6!`,position:`absolute`,right:`3`,top:`2.5`},content:{"&[data-close-button]":{pe:`6`},display:`flex`,flex:`1`,flexDirection:`column`,gap:`1`},item:{insetX:`0`,maxW:`full`,position:`absolute`,top:`calc({gap} * {index})`,w:`100%`,zIndex:`{z-index}`},list:{position:`relative`,w:`full`},root:{"&[data-negative]":{m:`calc({top} * -1) 0 calc({bottom} * -1)`},"--gap":`spaces.md`,w:`full`}}})})))()}var D,O,k,be,A,xe,j,M,N,P,F,I,Se;function Ce(){return(Ce=e((()=>{ie(),D=t(),ne(),r(),fe(),a(),u(),ee(),ce(),he(),b(),y(),E(),O=d(),{ComponentContext:k,PropsContext:be,useComponentContext:A,usePropsContext:xe,withContext:j,withProvider:M}=te(`snacks`,ye),N=M(({snacks:{direction:e=`start`,items:t,startIndex:n=0},listProps:r,...i})=>{let a=t.length,o=(0,D.useRef)(new Map),[s,c]=(0,D.useState)(0),[l,u]=(0,D.useState)(!!a),d=!!a||l,f=(0,D.useMemo)(()=>({direction:e,elMapRef:o,setExist:u,startIndex:n}),[e,n]),p=(0,D.useCallback)(()=>{a||u(!1)},[a]);return(0,D.useEffect)(()=>{let e=0;if(!a)return;let t=[...o.current.values()].slice(0,a);for(let n of t){if(!n)continue;let{offsetHeight:t,offsetTop:r}=n;t+=r,t>e&&(e=t)}c(e)},[a,e]),m(()=>{a&&u(!0)},[a]),(0,O.jsx)(k,{value:f,children:(0,O.jsx)(_,{initial:!1,children:d?(0,O.jsx)(v.div,{...i,children:(0,O.jsx)(P,{custom:{height:s},...r,children:(0,O.jsx)(_,{onExitComplete:p,children:t.map((e,t)=>(0,O.jsx)(F,{index:t,lastIndex:a-t-1,...e},e.id))})})}):null})})},`root`)({animate:`animate`,exit:`exit`,initial:`initial`,variants:{animate:{padding:`var(--top) 0 var(--bottom)`,transition:{duration:.4}},exit:{padding:0},initial:{padding:0}}},({gap:e,gutter:t=[0,`lg`],negativeMargins:n=!0,...r})=>({"data-negative":s(n),"--bottom":i(t[1],`spaces`,`0px`),"--gap":i(e,`spaces`),"--top":i(t[0],`spaces`,`0px`),...r})),P=j(v.div,`list`)({animate:`animate`,exit:`exit`,initial:`initial`,role:`list`,variants:{animate:({height:e})=>({height:e,opacity:1,transition:{duration:.4}}),exit:{height:0,opacity:0},initial:{height:0,opacity:1}}}),F=j(({variant:e=`plain`,closable:t=!0,description:r,duration:i=null,loadingScheme:a,status:c,title:l,withIcon:u=!0,closeButtonProps:d,contentProps:f,descriptionProps:p,iconProps:ee,loadingProps:h,titleProps:g,onClose:te,onCloseComplete:ne,..._})=>{let[ie,y]=(0,D.useState)(i),b=re(),x=b?te:o,ce=(0,D.useCallback)(()=>{y(null)},[]),fe=(0,D.useCallback)(()=>{y(i)},[i]);return m(()=>{b||ne?.()},[b]),m(()=>{y(i)},[i]),de(x,ie),(0,O.jsxs)(oe,{as:v.div,variant:e,status:c,..._,onMouseEnter:n(_.onMouseEnter,ce),onMouseLeave:n(_.onMouseLeave,fe),children:[u?a?(0,O.jsx)(le,{loadingScheme:a,...h}):(0,O.jsx)(se,{...ee}):null,(0,O.jsxs)(I,{"data-close-button":s(t),...f,children:[l?(0,O.jsx)(ae,{me:`0`,...g,children:l}):null,r?(0,O.jsx)(ue,{...p,children:r}):null]}),t?(0,O.jsx)(Se,{"data-variant":e,...d,onClick:n(d?.onClick,x)}):null]})},`item`)({animate:`animate`,exit:`exit`,initial:`initial`,layout:!0,role:`listitem`,variants:{animate:({index:e})=>({opacity:1,transition:x.enter()(e?0:.2,.4),y:0}),exit:{opacity:0,transition:x.exit()(void 0,.2)},initial:({direction:e,index:t})=>({opacity:0,...t?{y:(e===`start`?-1:1)*16}:{}})}},({index:e,lastIndex:t,...n})=>{let r=(0,D.useRef)(null),{direction:i,elMapRef:a,startIndex:o}=A();return(0,D.useEffect)(()=>{let t=a.current;return t.set(e,r.current),()=>{t.delete(e)}},[a,e]),{ref:r,"--index":i===`start`?t:e,"--z-index":o+e,custom:{direction:i,index:e},...n}}),I=j(`div`,`content`)(),Se=j(ge,`closeButton`)()})))()}var L,R,z;function we(){return(we=e((()=>{L=t(),f(),R=0,z=(e={})=>{let[t,n]=(0,L.useState)([]),{config:r}=p(),i=(0,L.useMemo)(()=>r.snacks??{},[r]),a=(0,L.useMemo)(()=>({...i,...e}),[e,i]),{direction:o,limit:s=3,startIndex:c}=a,l=(0,L.useCallback)(e=>({...a,...e}),[a]);return{snack:(0,L.useMemo)(()=>{let e=(e={})=>{e=l(e),R+=1;let{id:t=R.toString(),...r}=e,i={id:t,onClose:()=>n(e=>e.filter(e=>e.id!==t)),...r};return n(e=>[...e.splice(-1*((s??1/0)-1)),i]),t};return e.update=(e,t)=>{t=l(t),n(n=>n.map(n=>n.id===e?{...n,...t}:n))},e.closeAll=()=>{n([])},e.close=e=>{n(t=>t.filter(t=>t.id!==e))},e.isActive=e=>!!t.find(t=>t.id===e),e},[t,s,l]),snacks:(0,L.useMemo)(()=>({direction:o,items:t,startIndex:c}),[o,c,t])}}})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Te;function Ee(){return(Ee=e((()=>{B=t(),l(),pe(),_e(),me(),ve(),Ce(),we(),V=d(),H={title:`Components / Snacks`},U=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{gap:`md`,children:[(0,V.jsx)(S,{onClick:()=>{e({description:`こいつ、動くぞ！`,title:`アムロ・レイ`})},children:`Add Snack`}),(0,V.jsx)(S,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(N,{snacks:t}),(0,V.jsx)(C,{placeholder:`Input`})]})},W=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{gap:`md`,children:[(0,V.jsx)(w,{each:[`plain`,`solid`,`subtle`,`surface`,`island`],children:t=>(0,V.jsxs)(S,{onClick:()=>{e({variant:t,description:`美しいものが、嫌いな人がいるのかしら？`,title:`ララァ・スン`,withIcon:t!==`island`})},children:[`Add "`,c(t),`" Snack`]},t)}),(0,V.jsx)(S,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(N,{snacks:t}),(0,V.jsx)(C,{placeholder:`Input`})]})},G=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{gap:`md`,children:[(0,V.jsx)(w,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,V.jsxs)(S,{onClick:()=>{e({description:`アムロ、行きまーす！`,status:t,title:`アムロ・レイ`})},children:[`Add "`,c(t),`" Snack`]},t)}),(0,V.jsx)(S,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(N,{snacks:t}),(0,V.jsx)(C,{placeholder:`Input`})]})},K=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{gap:`md`,children:[(0,V.jsx)(w,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,V.jsxs)(S,{onClick:()=>{e({colorScheme:t,description:`見せて貰おうか。連邦軍のモビルスーツの性能とやらを！`,title:`シャア・アズナブル`})},children:[`Add "`,c(t),`" Snack`]},t)}),(0,V.jsx)(S,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(N,{snacks:t}),(0,V.jsx)(C,{placeholder:`Input`})]})},q=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{gap:`md`,children:[(0,V.jsx)(w,{each:[`oval`,`grid`,`puff`,`dots`],children:t=>(0,V.jsxs)(S,{onClick:()=>{e({description:`大丈夫、あなたなら出来るわ。`,loadingScheme:t,title:`セイラ・マス`})},children:[`Add "`,c(t),`" Snack`]},t)}),(0,V.jsx)(S,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(N,{snacks:t}),(0,V.jsx)(C,{placeholder:`Input`})]})},J=()=>{let{snack:e,snacks:t}=z({direction:`end`});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{gap:`md`,children:[(0,V.jsx)(S,{onClick:()=>{e({description:`認めたくないものだな。自分自身の、若さゆえの過ちというものを。`,title:`シャア・アズナブル`})},children:`Add Snack`}),(0,V.jsx)(S,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(N,{snacks:t}),(0,V.jsx)(C,{placeholder:`Input`})]})},Y=()=>{let{snack:e,snacks:t}=z({limit:5});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{gap:`md`,children:[(0,V.jsx)(S,{onClick:()=>{e({description:`殴られもせずに一人前になった奴がどこにいるものか！`,title:`ブライト・ノア`})},children:`Add Snack`}),(0,V.jsx)(S,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(N,{snacks:t}),(0,V.jsx)(C,{placeholder:`Input`})]})},X=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{gap:`md`,children:[(0,V.jsx)(S,{colorScheme:`primary`,onClick:()=>{e({description:`それでも男ですか！軟弱者！`,duration:3e4,title:`セイラ・マス`})},children:`Add Snack`}),(0,V.jsx)(S,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(N,{snacks:t}),(0,V.jsx)(C,{placeholder:`Input`})]})},Z=()=>{let{snack:e,snacks:t}=z({closable:!1});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{gap:`md`,children:[(0,V.jsx)(S,{colorScheme:`primary`,onClick:()=>{e({description:`ザクとは違うのだよ、ザクとは！`,title:`ランバ・ラル`})},children:`Add Snack`}),(0,V.jsx)(S,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(N,{snacks:t}),(0,V.jsx)(C,{placeholder:`Input`})]})},Q=()=>{let{snack:e,snacks:t}=z(),n=(0,B.useRef)(void 0);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{gap:`md`,children:[(0,V.jsx)(S,{onClick:()=>{n.current=e({description:`オレは、生きる！生きて、アイナと添い遂げる！`,title:`シロー・アマダ`})},children:`Add Snack`}),(0,V.jsx)(S,{colorScheme:`warning`,onClick:()=>{n.current&&e.close(n.current)},children:`Close last Snack`}),(0,V.jsx)(S,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(N,{snacks:t}),(0,V.jsx)(C,{placeholder:`Input`})]})},$=()=>{let{snack:e,snacks:t}=z(),n=(0,B.useRef)(void 0);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(T,{gap:`md`,children:[(0,V.jsx)(S,{onClick:()=>{n.current=e({description:`今の私は、クワトロ・バジーナ大尉だ。それ以上でも、それ以下でもない。`,title:`クワトロ・バジーナ`})},children:`Add Snack`}),(0,V.jsx)(S,{onClick:()=>{n.current&&e.update(n.current,{colorScheme:`purple`,description:`そんな大人、修正してやる！`,title:`カミーユ・ビダン`})},children:`Update last Snack`}),(0,V.jsx)(S,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(N,{snacks:t}),(0,V.jsx)(C,{placeholder:`Input`})]})},Te=[`Basic`,`Variant`,`Status`,`ColorScheme`,`Loading`,`Direction`,`Limit`,`Duration`,`DisabledClosable`,`UseClose`,`UseUpdate`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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