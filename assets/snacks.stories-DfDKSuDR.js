import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{An as n,F as r,Jt as i,N as a,On as o,kn as s,rn as c}from"./props-D9Bstnnu.js";import{t as l}from"./jsx-runtime-BB9-612F.js";import{v as u,y as d}from"./utils-nFbCj9A5.js";import{i as f,t as p}from"./effect-BX-3lD32.js";import{d as m,i as ee,n as te,r as h}from"./create-component-eO5xvpJx.js";import{t as ne,w as re,x as g}from"./react-D83olUjZ.js";import{n as _,t as v}from"./factory-B6-DRLF2.js";import{n as ie,t as y}from"./transition-CyWixptC.js";import{a as ae,i as oe,n as se,o as b,r as ce,t as le}from"./alert-Dt5cb7VV.js";import{n as ue,t as x}from"./use-timeout-DWlnotlB.js";import{r as S,t as C}from"./button-Cd89TaQS.js";import{r as de,t as w}from"./input-oZA0qoxf.js";import{n as fe,t as pe}from"./close-button-D-4bYxdU.js";import{n as me,t as T}from"./for-BBgJJ9QB.js";import{n as he,t as E}from"./wrap-FgLXvFSj.js";var ge;function _e(){return(_e=e((()=>{m(),ge=ee({base:{closeButton:{"&:is([data-variant='plain'], [data-variant='island'])":{colorScheme:`mono!`},"&:is([data-variant='solid'])":{color:`colorScheme.contrast!`,_hover:{bg:`colorScheme.solid!`}},fontSize:`md!`,minBoxSize:`6!`,position:`absolute`,right:`3`,top:`2.5`},content:{"&[data-close-button]":{pe:`6`},display:`flex`,flex:`1`,flexDirection:`column`,gap:`1`},item:{insetX:`0`,maxW:`full`,position:`absolute`,top:`calc({gap} * {index})`,w:`100%`,zIndex:`{z-index}`},list:{position:`relative`,w:`full`},root:{"&[data-negative]":{m:`calc({top} * -1) 0 calc({bottom} * -1)`},"--gap":`spaces.md`,w:`full`}}})})))()}var D,O,k,ve,A,ye,j,M,N,P,F,I,L;function be(){return(be=e((()=>{ne(),D=t(),h(),a(),x(),c(),s(),p(),b(),fe(),ie(),v(),_e(),O=l(),{ComponentContext:k,PropsContext:ve,useComponentContext:A,usePropsContext:ye,withContext:j,withProvider:M}=te(`snacks`,ge),N=M(({snacks:{direction:e=`start`,items:t,startIndex:n=0},listProps:r,...i})=>{let a=t.length,o=(0,D.useRef)(new Map),[s,c]=(0,D.useState)(0),[l,u]=(0,D.useState)(!!a),d=!!a||l,p=(0,D.useMemo)(()=>({direction:e,elMapRef:o,setExist:u,startIndex:n}),[e,n]),m=(0,D.useCallback)(()=>{a||u(!1)},[a]);return(0,D.useEffect)(()=>{let e=0;if(!a)return;let t=[...o.current.values()].slice(0,a);for(let n of t){if(!n)continue;let{offsetHeight:t,offsetTop:r}=n;t+=r,t>e&&(e=t)}c(e)},[a,e]),f(()=>{a&&u(!0)},[a]),(0,O.jsx)(k,{value:p,children:(0,O.jsx)(g,{initial:!1,children:d?(0,O.jsx)(_.div,{...i,children:(0,O.jsx)(P,{custom:{height:s},...r,children:(0,O.jsx)(g,{onExitComplete:m,children:t.map((e,t)=>(0,O.jsx)(F,{index:t,lastIndex:a-t-1,...e},e.id))})})}):null})})},`root`)({animate:`animate`,exit:`exit`,initial:`initial`,variants:{animate:{padding:`var(--top) 0 var(--bottom)`,transition:{duration:.4}},exit:{padding:0},initial:{padding:0}}},({gap:e,gutter:t=[0,`lg`],negativeMargins:n=!0,...a})=>({"data-negative":i(n),"--bottom":r(t[1],`spaces`,`0px`),"--gap":r(e,`spaces`),"--top":r(t[0],`spaces`,`0px`),...a})),P=j(_.div,`list`)({animate:`animate`,exit:`exit`,initial:`initial`,role:`list`,variants:{animate:({height:e})=>({height:e,opacity:1,transition:{duration:.4}}),exit:{height:0,opacity:0},initial:{height:0,opacity:1}}}),F=j(({variant:e=`plain`,closable:t=!0,description:r,duration:a=null,loadingScheme:s,status:c,title:l,withIcon:u=!0,closeButtonProps:d,contentProps:p,descriptionProps:m,iconProps:ee,loadingProps:te,titleProps:h,onClose:ne,onCloseComplete:g,...v})=>{let[ie,y]=(0,D.useState)(a),b=re(),x=b?ne:n,S=(0,D.useCallback)(()=>{y(null)},[]),C=(0,D.useCallback)(()=>{y(a)},[a]);return f(()=>{b||g?.()},[b]),f(()=>{y(a)},[a]),ue(x,ie),(0,O.jsxs)(oe,{as:_.div,variant:e,status:c,...v,onMouseEnter:o(v.onMouseEnter,S),onMouseLeave:o(v.onMouseLeave,C),children:[u?s?(0,O.jsx)(ce,{loadingScheme:s,...te}):(0,O.jsx)(se,{...ee}):null,(0,O.jsxs)(I,{"data-close-button":i(t),...p,children:[l?(0,O.jsx)(ae,{me:`0`,...h,children:l}):null,r?(0,O.jsx)(le,{...m,children:r}):null]}),t?(0,O.jsx)(L,{"data-variant":e,...d,onClick:o(d?.onClick,x)}):null]})},`item`)({animate:`animate`,exit:`exit`,initial:`initial`,layout:!0,role:`listitem`,variants:{animate:({index:e})=>({opacity:1,transition:y.enter()(e?0:.2,.4),y:0}),exit:{opacity:0,transition:y.exit()(void 0,.2)},initial:({direction:e,index:t})=>({opacity:0,...t?{y:(e===`start`?-1:1)*16}:{}})}},({index:e,lastIndex:t,...n})=>{let r=(0,D.useRef)(null),{direction:i,elMapRef:a,startIndex:o}=A();return(0,D.useEffect)(()=>{let t=a.current;return t.set(e,r.current),()=>{t.delete(e)}},[a,e]),{ref:r,"--index":i===`start`?t:e,"--z-index":o+e,custom:{direction:i,index:e},...n}}),I=j(`div`,`content`)(),L=j(pe,`closeButton`)()})))()}var R,z,B;function xe(){return(xe=e((()=>{R=t(),u(),z=0,B=(e={})=>{let[t,n]=(0,R.useState)([]),{config:r}=d(),i=(0,R.useMemo)(()=>r.snacks??{},[r]),a=(0,R.useMemo)(()=>({...i,...e}),[e,i]),{direction:o,limit:s=3,startIndex:c}=a,l=(0,R.useCallback)(e=>({...a,...e}),[a]);return{snack:(0,R.useMemo)(()=>{let e=(e={})=>{e=l(e),z+=1;let{id:t=z.toString(),...r}=e,i={id:t,onClose:()=>n(e=>e.filter(e=>e.id!==t)),...r};return n(e=>[...e.splice(-1*((s??1/0)-1)),i]),t};return e.update=(e,t)=>{t=l(t),n(n=>n.map(n=>n.id===e?{...n,...t}:n))},e.closeAll=()=>{n([])},e.close=e=>{n(t=>t.filter(t=>t.id!==e))},e.isActive=e=>!!t.find(t=>t.id===e),e},[t,s,l]),snacks:(0,R.useMemo)(()=>({direction:o,items:t,startIndex:c}),[o,c,t])}}})))()}var V,H,Se,U,W,G,K,q,J,Y,X,Z,Q,$,Ce;function we(){return(we=e((()=>{V=t(),S(),me(),de(),he(),be(),xe(),H=l(),Se={title:`Components / Snacks`},U=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(E,{gap:`md`,children:[(0,H.jsx)(C,{onClick:()=>{e({description:`こいつ、動くぞ！`,title:`アムロ・レイ`})},children:`Add Snack`}),(0,H.jsx)(C,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(N,{snacks:t}),(0,H.jsx)(w,{placeholder:`Your message`})]})},W=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(E,{gap:`md`,children:[(0,H.jsx)(T,{each:[`plain`,`solid`,`subtle`,`surface`,`island`],children:t=>(0,H.jsxs)(C,{onClick:()=>{e({variant:t,description:`美しいものが、嫌いな人がいるのかしら？`,title:`ララァ・スン`,withIcon:t!==`island`})},children:[`Add "`,t,`" Snack`]},t)}),(0,H.jsx)(C,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(N,{snacks:t}),(0,H.jsx)(w,{placeholder:`Your message`})]})},G=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(E,{gap:`md`,children:[(0,H.jsx)(T,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,H.jsxs)(C,{onClick:()=>{e({description:`アムロ、行きまーす！`,status:t,title:`アムロ・レイ`})},children:[`Add "`,t,`" Snack`]},t)}),(0,H.jsx)(C,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(N,{snacks:t}),(0,H.jsx)(w,{placeholder:`Your message`})]})},K=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(E,{gap:`md`,children:[(0,H.jsx)(T,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,H.jsxs)(C,{onClick:()=>{e({colorScheme:t,description:`見せて貰おうか。連邦軍のモビルスーツの性能とやらを！`,title:`シャア・アズナブル`})},children:[`Add "`,t,`" Snack`]},t)}),(0,H.jsx)(C,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(N,{snacks:t}),(0,H.jsx)(w,{placeholder:`Your message`})]})},q=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(E,{gap:`md`,children:[(0,H.jsx)(T,{each:[`oval`,`grid`,`puff`,`dots`],children:t=>(0,H.jsxs)(C,{onClick:()=>{e({description:`大丈夫、あなたなら出来るわ。`,loadingScheme:t,title:`セイラ・マス`})},children:[`Add "`,t,`" Snack`]},t)}),(0,H.jsx)(C,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(N,{snacks:t}),(0,H.jsx)(w,{placeholder:`Your message`})]})},J=()=>{let{snack:e,snacks:t}=B({direction:`end`});return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(E,{gap:`md`,children:[(0,H.jsx)(C,{onClick:()=>{e({description:`認めたくないものだな。自分自身の、若さゆえの過ちというものを。`,title:`シャア・アズナブル`})},children:`Add Snack`}),(0,H.jsx)(C,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(N,{snacks:t}),(0,H.jsx)(w,{placeholder:`Your message`})]})},Y=()=>{let{snack:e,snacks:t}=B({limit:5});return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(E,{gap:`md`,children:[(0,H.jsx)(C,{onClick:()=>{e({description:`殴られもせずに一人前になった奴がどこにいるものか！`,title:`ブライト・ノア`})},children:`Add Snack`}),(0,H.jsx)(C,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(N,{snacks:t}),(0,H.jsx)(w,{placeholder:`Your message`})]})},X=()=>{let{snack:e,snacks:t}=B();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(E,{gap:`md`,children:[(0,H.jsx)(C,{colorScheme:`primary`,onClick:()=>{e({description:`それでも男ですか！軟弱者！`,duration:3e4,title:`セイラ・マス`})},children:`Add Snack`}),(0,H.jsx)(C,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(N,{snacks:t}),(0,H.jsx)(w,{placeholder:`Your message`})]})},Z=()=>{let{snack:e,snacks:t}=B({closable:!1});return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(E,{gap:`md`,children:[(0,H.jsx)(C,{colorScheme:`primary`,onClick:()=>{e({description:`ザクとは違うのだよ、ザクとは！`,title:`ランバ・ラル`})},children:`Add Snack`}),(0,H.jsx)(C,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(N,{snacks:t}),(0,H.jsx)(w,{placeholder:`Your message`})]})},Q=()=>{let{snack:e,snacks:t}=B(),n=(0,V.useRef)(void 0);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(E,{gap:`md`,children:[(0,H.jsx)(C,{onClick:()=>{n.current=e({description:`オレは、生きる！生きて、アイナと添い遂げる！`,title:`シロー・アマダ`})},children:`Add Snack`}),(0,H.jsx)(C,{colorScheme:`warning`,onClick:()=>{n.current&&e.close(n.current)},children:`Close last Snack`}),(0,H.jsx)(C,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(N,{snacks:t}),(0,H.jsx)(w,{placeholder:`Your message`})]})},$=()=>{let{snack:e,snacks:t}=B(),n=(0,V.useRef)(void 0);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(E,{gap:`md`,children:[(0,H.jsx)(C,{onClick:()=>{n.current=e({description:`今の私は、クワトロ・バジーナ大尉だ。それ以上でも、それ以下でもない。`,title:`クワトロ・バジーナ`})},children:`Add Snack`}),(0,H.jsx)(C,{onClick:()=>{n.current&&e.update(n.current,{colorScheme:`purple`,description:`そんな大人、修正してやる！`,title:`カミーユ・ビダン`})},children:`Update last Snack`}),(0,H.jsx)(C,{colorScheme:`danger`,onClick:e.closeAll,children:`Close all Snack`})]}),(0,H.jsx)(N,{snacks:t}),(0,H.jsx)(w,{placeholder:`Your message`})]})},Ce=[`Basic`,`Variant`,`Status`,`ColorScheme`,`Loading`,`Direction`,`Limit`,`Duration`,`DisabledClosable`,`UseClose`,`UseUpdate`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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

      <Input placeholder="Your message" />
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

      <Input placeholder="Your message" />
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

      <Input placeholder="Your message" />
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

      <Input placeholder="Your message" />
    </>;
}`,...$.parameters?.docs?.source}}}})))()}we();export{U as Basic,K as ColorScheme,J as Direction,Z as DisabledClosable,X as Duration,Y as Limit,q as Loading,G as Status,Q as UseClose,$ as UseUpdate,W as Variant,Ce as __namedExportsOrder,Se as default};