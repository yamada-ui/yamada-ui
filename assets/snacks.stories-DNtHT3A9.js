import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Dn as n,F as r,N as i,On as a,kn as o,nn as s,qt as c}from"./props-DIwllvnO.js";import{t as l}from"./jsx-runtime-BB9-612F.js";import{v as u,y as d}from"./utils-SJUSBa7w.js";import{i as f,t as p}from"./effect-BX-3lD32.js";import{d as m,i as ee,n as te,r as h}from"./create-component-BVL_n9ri.js";import{t as g,w as ne,x as _}from"./react-COrYa_fR.js";import{n as v,t as y}from"./factory-B6B14I97.js";import{n as re,t as b}from"./transition-r4rogdQu.js";import{a as ie,i as ae,n as oe,o as x,r as se,t as ce}from"./alert-BLYMgMl0.js";import{n as le,t as S}from"./use-timeout-KTKq9oTK.js";import{r as C,t as w}from"./button-B8YJTvd2.js";import{r as ue,t as T}from"./input-CBPepMYt.js";import{n as de,t as fe}from"./close-button-BFgNSj9o.js";import{n as pe,t as E}from"./for-BBhEc7Et.js";import{n as me,t as D}from"./wrap-Cos8GgVe.js";var O;function k(){return(k=e((()=>{m(),O=ee({base:{closeButton:{"&:is([data-variant='plain'], [data-variant='island'])":{colorScheme:`mono!`},"&:is([data-variant='solid'])":{color:`colorScheme.contrast!`,_hover:{bg:`colorScheme.solid!`}},fontSize:`md!`,minBoxSize:`6!`,position:`absolute`,right:`3`,top:`2.5`},content:{"&[data-close-button]":{pe:`6`},display:`flex`,flex:`1`,flexDirection:`column`,gap:`1`},item:{insetX:`0`,maxW:`full`,position:`absolute`,top:`calc({gap} * {index})`,w:`100%`,zIndex:`{z-index}`},list:{position:`relative`,w:`full`},root:{"&[data-negative]":{m:`calc({top} * -1) 0 calc({bottom} * -1)`},"--gap":`spaces.md`,w:`full`}}})})))()}var A,j,M,he,N,ge,P,F,I,_e,ve,ye,be;function xe(){return(xe=e((()=>{g(),A=t(),h(),i(),S(),s(),a(),p(),x(),de(),re(),y(),k(),j=l(),{ComponentContext:M,PropsContext:he,useComponentContext:N,usePropsContext:ge,withContext:P,withProvider:F}=te(`snacks`,O),I=F(({snacks:{direction:e=`start`,items:t,startIndex:n=0},listProps:r,...i})=>{let a=t.length,o=(0,A.useRef)(new Map),[s,c]=(0,A.useState)(0),[l,u]=(0,A.useState)(!!a),d=!!a||l,p=(0,A.useMemo)(()=>({direction:e,elMapRef:o,setExist:u,startIndex:n}),[e,n]),m=(0,A.useCallback)(()=>{a||u(!1)},[a]);return(0,A.useEffect)(()=>{let e=0;if(!a)return;let t=[...o.current.values()].slice(0,a);for(let n of t){if(!n)continue;let{offsetHeight:t,offsetTop:r}=n;t+=r,t>e&&(e=t)}c(e)},[a,e]),f(()=>{a&&u(!0)},[a]),(0,j.jsx)(M,{value:p,children:(0,j.jsx)(_,{initial:!1,children:d?(0,j.jsx)(v.div,{...i,children:(0,j.jsx)(_e,{custom:{height:s},...r,children:(0,j.jsx)(_,{onExitComplete:m,children:t.map((e,t)=>(0,j.jsx)(ve,{index:t,lastIndex:a-t-1,...e},e.id))})})}):null})})},`root`)({animate:`animate`,exit:`exit`,initial:`initial`,variants:{animate:{padding:`var(--top) 0 var(--bottom)`,transition:{duration:.4}},exit:{padding:0},initial:{padding:0}}},({gap:e,gutter:t=[0,`lg`],negativeMargins:n=!0,...i})=>({"data-negative":c(n),"--bottom":r(t[1],`spaces`,`0px`),"--gap":r(e,`spaces`),"--top":r(t[0],`spaces`,`0px`),...i})),_e=P(v.div,`list`)({animate:`animate`,exit:`exit`,initial:`initial`,role:`list`,variants:{animate:({height:e})=>({height:e,opacity:1,transition:{duration:.4}}),exit:{height:0,opacity:0},initial:{height:0,opacity:1}}}),ve=P(({variant:e=`plain`,closable:t=!0,description:r,duration:i=null,loadingScheme:a,status:s,title:l,withIcon:u=!0,closeButtonProps:d,contentProps:p,descriptionProps:m,iconProps:ee,loadingProps:te,titleProps:h,onClose:g,onCloseComplete:_,...y})=>{let[re,b]=(0,A.useState)(i),x=ne(),S=x?g:o,C=(0,A.useCallback)(()=>{b(null)},[]),w=(0,A.useCallback)(()=>{b(i)},[i]);return f(()=>{x||_?.()},[x]),f(()=>{b(i)},[i]),le(S,re),(0,j.jsxs)(ae,{as:v.div,variant:e,status:s,...y,onMouseEnter:n(y.onMouseEnter,C),onMouseLeave:n(y.onMouseLeave,w),children:[u?a?(0,j.jsx)(se,{loadingScheme:a,...te}):(0,j.jsx)(oe,{...ee}):null,(0,j.jsxs)(ye,{"data-close-button":c(t),...p,children:[l?(0,j.jsx)(ie,{me:`0`,...h,children:l}):null,r?(0,j.jsx)(ce,{...m,children:r}):null]}),t?(0,j.jsx)(be,{"data-variant":e,...d,onClick:n(d?.onClick,S)}):null]})},`item`)({animate:`animate`,exit:`exit`,initial:`initial`,layout:!0,role:`listitem`,variants:{animate:({index:e})=>({opacity:1,transition:b.enter()(e?0:.2,.4),y:0}),exit:{opacity:0,transition:b.exit()(void 0,.2)},initial:({direction:e,index:t})=>({opacity:0,...t?{y:(e===`start`?-1:1)*16}:{}})}},({index:e,lastIndex:t,...n})=>{let r=(0,A.useRef)(null),{direction:i,elMapRef:a,startIndex:o}=N();return(0,A.useEffect)(()=>{let t=a.current;return t.set(e,r.current),()=>{t.delete(e)}},[a,e]),{ref:r,"--index":i===`start`?t:e,"--z-index":o+e,custom:{direction:i,index:e},...n}}),ye=P(`div`,`content`)(),be=P(fe,`closeButton`)()})))()}var L,R,z;function Se(){return(Se=e((()=>{L=t(),u(),R=0,z=(e={})=>{let[t,n]=(0,L.useState)([]),{config:r}=d(),i=(0,L.useMemo)(()=>r.snacks??{},[r]),a=(0,L.useMemo)(()=>({...i,...e}),[e,i]),{direction:o,limit:s=3,startIndex:c}=a,l=(0,L.useCallback)(e=>({...a,...e}),[a]);return{snack:(0,L.useMemo)(()=>{let e=(e={})=>{e=l(e),R+=1;let{id:t=R.toString(),...r}=e,i={id:t,onClose:()=>n(e=>e.filter(e=>e.id!==t)),...r};return n(e=>[...e.splice(-1*((s??1/0)-1)),i]),t};return e.update=(e,t)=>{t=l(t),n(n=>n.map(n=>n.id===e?{...n,...t}:n))},e.closeAll=()=>{n([])},e.close=e=>{n(t=>t.filter(t=>t.id!==e))},e.isActive=e=>!!t.find(t=>t.id===e),e},[t,s,l]),snacks:(0,L.useMemo)(()=>({direction:o,items:t,startIndex:c}),[o,c,t])}}})))()}var B,V,Ce,H,U,W,G,K,q,J,Y,X,Z,Q,we;function $(){return($=e((()=>{B=t(),C(),pe(),ue(),me(),xe(),Se(),V=l(),Ce={title:`Components / Snacks`},H=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(D,{gap:`md`,children:[(0,V.jsx)(w,{onClick:()=>{e({description:`こいつ、動くぞ！`,title:`アムロ・レイ`})},children:`Add Snack`}),(0,V.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(I,{snacks:t}),(0,V.jsx)(T,{placeholder:`Your message`})]})},U=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(D,{gap:`md`,children:[(0,V.jsx)(E,{each:[`plain`,`solid`,`subtle`,`surface`,`island`],children:t=>(0,V.jsxs)(w,{onClick:()=>{e({variant:t,description:`美しいものが、嫌いな人がいるのかしら？`,title:`ララァ・スン`,withIcon:t!==`island`})},children:[`Add "`,t,`" Snack`]},t)}),(0,V.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(I,{snacks:t}),(0,V.jsx)(T,{placeholder:`Your message`})]})},W=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(D,{gap:`md`,children:[(0,V.jsx)(E,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,V.jsxs)(w,{onClick:()=>{e({description:`アムロ、行きまーす！`,status:t,title:`アムロ・レイ`})},children:[`Add "`,t,`" Snack`]},t)}),(0,V.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(I,{snacks:t}),(0,V.jsx)(T,{placeholder:`Your message`})]})},G=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(D,{gap:`md`,children:[(0,V.jsx)(E,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,V.jsxs)(w,{onClick:()=>{e({colorScheme:t,description:`見せて貰おうか。連邦軍のモビルスーツの性能とやらを！`,title:`シャア・アズナブル`})},children:[`Add "`,t,`" Snack`]},t)}),(0,V.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(I,{snacks:t}),(0,V.jsx)(T,{placeholder:`Your message`})]})},K=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(D,{gap:`md`,children:[(0,V.jsx)(E,{each:[`oval`,`grid`,`puff`,`dots`],children:t=>(0,V.jsxs)(w,{onClick:()=>{e({description:`大丈夫、あなたなら出来るわ。`,loadingScheme:t,title:`セイラ・マス`})},children:[`Add "`,t,`" Snack`]},t)}),(0,V.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(I,{snacks:t}),(0,V.jsx)(T,{placeholder:`Your message`})]})},q=()=>{let{snack:e,snacks:t}=z({direction:`end`});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(D,{gap:`md`,children:[(0,V.jsx)(w,{onClick:()=>{e({description:`認めたくないものだな。自分自身の、若さゆえの過ちというものを。`,title:`シャア・アズナブル`})},children:`Add Snack`}),(0,V.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(I,{snacks:t}),(0,V.jsx)(T,{placeholder:`Your message`})]})},J=()=>{let{snack:e,snacks:t}=z({limit:5});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(D,{gap:`md`,children:[(0,V.jsx)(w,{onClick:()=>{e({description:`殴られもせずに一人前になった奴がどこにいるものか！`,title:`ブライト・ノア`})},children:`Add Snack`}),(0,V.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(I,{snacks:t}),(0,V.jsx)(T,{placeholder:`Your message`})]})},Y=()=>{let{snack:e,snacks:t}=z();return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(D,{gap:`md`,children:[(0,V.jsx)(w,{colorScheme:`primary`,onClick:()=>{e({description:`それでも男ですか！軟弱者！`,duration:3e4,title:`セイラ・マス`})},children:`Add Snack`}),(0,V.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(I,{snacks:t}),(0,V.jsx)(T,{placeholder:`Your message`})]})},X=()=>{let{snack:e,snacks:t}=z({closable:!1});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(D,{gap:`md`,children:[(0,V.jsx)(w,{colorScheme:`primary`,onClick:()=>{e({description:`ザクとは違うのだよ、ザクとは！`,title:`ランバ・ラル`})},children:`Add Snack`}),(0,V.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(I,{snacks:t}),(0,V.jsx)(T,{placeholder:`Your message`})]})},Z=()=>{let{snack:e,snacks:t}=z(),n=(0,B.useRef)(void 0);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(D,{gap:`md`,children:[(0,V.jsx)(w,{onClick:()=>{n.current=e({description:`オレは、生きる！生きて、アイナと添い遂げる！`,title:`シロー・アマダ`})},children:`Add Snack`}),(0,V.jsx)(w,{colorScheme:`warning`,onClick:()=>{n.current&&e.close(n.current)},children:`Close last Snack`}),(0,V.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(I,{snacks:t}),(0,V.jsx)(T,{placeholder:`Your message`})]})},Q=()=>{let{snack:e,snacks:t}=z(),n=(0,B.useRef)(void 0);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(D,{gap:`md`,children:[(0,V.jsx)(w,{onClick:()=>{n.current=e({description:`今の私は、クワトロ・バジーナ大尉だ。それ以上でも、それ以下でもない。`,title:`クワトロ・バジーナ`})},children:`Add Snack`}),(0,V.jsx)(w,{onClick:()=>{n.current&&e.update(n.current,{colorScheme:`purple`,description:`そんな大人、修正してやる！`,title:`カミーユ・ビダン`})},children:`Update last Snack`}),(0,V.jsx)(w,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,V.jsx)(I,{snacks:t}),(0,V.jsx)(T,{placeholder:`Your message`})]})},we=[`Basic`,`Variant`,`Status`,`ColorScheme`,`Loading`,`Direction`,`Limit`,`Duration`,`DisabledClosable`,`UseClose`,`UseUpdate`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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

      <Input placeholder="Your message" />
    </>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
              Add "{variant}" Snack
            </Button>}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Your message" />
    </>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
              Add "{status}" Snack
            </Button>}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Your message" />
    </>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
              Add "{colorScheme}" Snack
            </Button>}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Your message" />
    </>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
              Add "{loadingScheme}" Snack
            </Button>}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Your message" />
    </>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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

      <Input placeholder="Your message" />
    </>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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

      <Input placeholder="Your message" />
    </>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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

      <Input placeholder="Your message" />
    </>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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

      <Input placeholder="Your message" />
    </>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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

      <Input placeholder="Your message" />
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

      <Input placeholder="Your message" />
    </>;
}`,...Q.parameters?.docs?.source}}}})))()}$();export{H as Basic,G as ColorScheme,q as Direction,X as DisabledClosable,Y as Duration,J as Limit,K as Loading,W as Status,Z as UseClose,Q as UseUpdate,U as Variant,we as __namedExportsOrder,Ce as default};