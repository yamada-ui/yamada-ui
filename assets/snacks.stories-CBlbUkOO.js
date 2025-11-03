import{d as $,g as P,r,N,j as n,a6 as q,t as Q,U as H,b as K,bV as nn,bW as en,E as sn,A as tn,h as O,B as cn,x as an,y as on,z as rn,D as ln,ax as dn,Q as c,P as z}from"./iframe-D0k82VKj.js";import{c as G}from"./transition-BVsBw9pl.js";import{W as k}from"./wrap-CSHnAtYr.js";import{I as m}from"./input-Z3NWNvVg.js";import{F as V}from"./for-VxQ1P6BR.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DfSuxPUO.js";import"./use-input-border-BupPeUaJ.js";import"./use-field-props-CqEx8ctB.js";const un=$({base:{closeButton:{"&:is([data-variant='plain'], [data-variant='island'])":{colorScheme:"mono!"},"&:is([data-variant='solid'])":{color:"colorScheme.contrast!",_hover:{bg:"colorScheme.solid!"}},fontSize:"md!",minBoxSize:"6!",position:"absolute",right:"3",top:"2.5"},content:{"&[data-close-button]":{pe:"6"},display:"flex",flex:"1",flexDirection:"column",gap:"1"},item:{insetX:"0",maxW:"full",position:"absolute",top:"calc({gap} * {index})",w:"100%",zIndex:"{z-index}"},list:{position:"relative",w:"full"},root:{"&[data-negative]":{m:"calc({top} * -1) 0 calc({bottom} * -1)"},"--gap":"spaces.md",w:"full"}}}),{ComponentContext:pn,useComponentContext:kn,withContext:_,withProvider:mn}=P("snacks",un),h=mn(({snacks:{direction:e="start",items:t,startIndex:s=0},listProps:l,...x})=>{const o=t.length,C=r.useRef(new Map),[g,f]=r.useState(0),[A,B]=r.useState(!!o),v=!!o||A,u=r.useMemo(()=>({direction:e,elMapRef:C,setExist:B,startIndex:s}),[e,s]),i=r.useCallback(()=>{o||B(!1)},[o]);return r.useEffect(()=>{let a=0;if(!o)return;const d=[...C.current.values()].slice(0,o);for(const p of d){if(!p)continue;let{offsetHeight:I,offsetTop:j}=p;I+=j,I>a&&(a=I)}f(a)},[o,e]),N(()=>{o&&B(!0)},[o]),n.jsx(pn,{value:u,children:n.jsx(q,{initial:!1,children:v?n.jsx(Q.div,{...x,children:n.jsx(hn,{custom:{height:g},...l,children:n.jsx(q,{onExitComplete:i,children:t.map((a,d)=>n.jsx(Sn,{index:d,lastIndex:o-d-1,...a},a.id))})})}):null})})},"root")({animate:"animate",exit:"exit",initial:"initial",variants:{animate:{padding:"var(--top) 0 var(--bottom)",transition:{duration:.4}},exit:{padding:0},initial:{padding:0}}},({gap:e,gutter:t=[0,"lg"],negativeMargins:s=!0,...l})=>({"data-negative":K(s),"--bottom":H(t[1],"spaces","0px"),"--gap":H(e,"spaces"),"--top":H(t[0],"spaces","0px"),...l})),hn=_(Q.div,"list")({animate:"animate",exit:"exit",initial:"initial",role:"list",variants:{animate:({height:e})=>({height:e,opacity:1,transition:{duration:.4}}),exit:{height:0,opacity:0},initial:{height:0,opacity:1}}}),Sn=_(({variant:e="plain",closable:t=!0,description:s,duration:l=null,loadingScheme:x,status:o,title:C,withIcon:g=!0,closeButtonProps:f,contentProps:A,descriptionProps:B,iconProps:v,loadingProps:u,titleProps:i,onClose:a,onCloseComplete:d,...p})=>{const[I,j]=r.useState(l),W=nn(),X=W?a:sn,Y=r.useCallback(()=>{j(null)},[]),Z=r.useCallback(()=>{j(l)},[l]);return N(()=>{W||d?.()},[W]),N(()=>{j(l)},[l]),en(X,I),n.jsxs(tn,{as:Q.div,variant:e,status:o,...p,onMouseEnter:O(p.onMouseEnter,Y),onMouseLeave:O(p.onMouseLeave,Z),children:[g?x?n.jsx(cn,{loadingScheme:x,...u}):n.jsx(an,{...v}):null,n.jsxs(xn,{"data-close-button":K(t),...A,children:[C?n.jsx(on,{me:"0",...i,children:C}):null,s?n.jsx(rn,{...B,children:s}):null]}),t?n.jsx(Cn,{"data-variant":e,...f,onClick:O(f?.onClick,X)}):null]})},"item")({animate:"animate",exit:"exit",initial:"initial",layout:!0,role:"listitem",variants:{animate:({index:e})=>({opacity:1,transition:G.enter()(e?0:.2,.4),y:0}),exit:{opacity:0,transition:G.exit()(void 0,.2)},initial:({direction:e,index:t})=>({opacity:0,...t?{y:(e==="start"?-1:1)*16}:{}})}},({index:e,lastIndex:t,...s})=>{const l=r.useRef(null),{direction:x,elMapRef:o,startIndex:C}=kn();return r.useEffect(()=>{const g=o.current;return g.set(e,l.current),()=>{g.delete(e)}},[o,e]),{ref:l,"--index":x==="start"?t:e,"--z-index":C+e,custom:{direction:x,index:e},...s}}),xn=_("div","content")(),Cn=_(ln,"closeButton")();let J=0;const S=(e={})=>{const[t,s]=r.useState([]),{config:l}=dn(),x=r.useMemo(()=>l.snacks??{},[l]),o=r.useMemo(()=>({...x,...e}),[e,x]),{direction:C,limit:g=3,startIndex:f}=o,A=r.useCallback(u=>({...o,...u}),[o]),B=r.useMemo(()=>{const u=(i={})=>{i=A(i),J+=1;const{id:a=J.toString(),...d}=i,I={id:a,onClose:()=>s(j=>j.filter(W=>W.id!==a)),...d};return s(j=>[...j.splice(-1*((g??1/0)-1)),I]),a};return u.update=(i,a)=>{a=A(a),s(d=>d.map(p=>p.id===i?{...p,...a}:p))},u.closeAll=()=>{s([])},u.close=i=>{s(a=>a.filter(d=>d.id!==i))},u.isActive=i=>!!t.find(a=>a.id===i),u},[t,g,A]),v=r.useMemo(()=>({direction:C,items:t,startIndex:f}),[C,f,t]);return{snack:B,snacks:v}},bn={title:"Components / Snacks"},y=()=>{const{snack:e,snacks:t}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(k,{gap:"md",children:[n.jsx(c,{onClick:()=>{e({description:"こいつ、動くぞ！",title:"アムロ・レイ"})},children:"Add Snack"}),n.jsx(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t}),n.jsx(m,{placeholder:"Input"})]})},b=()=>{const{snack:e,snacks:t}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(k,{gap:"md",children:[n.jsx(V,{each:["plain","solid","subtle","surface","island"],children:s=>n.jsxs(c,{onClick:()=>{e({variant:s,description:"美しいものが、嫌いな人がいるのかしら？",title:"ララァ・スン",withIcon:s!=="island"})},children:['Add "',z(s),'" Snack']},s)}),n.jsx(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t}),n.jsx(m,{placeholder:"Input"})]})},F=()=>{const{snack:e,snacks:t}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(k,{gap:"md",children:[n.jsx(V,{each:["info","success","warning","error"],children:s=>n.jsxs(c,{onClick:()=>{e({description:"アムロ、行きまーす！",status:s,title:"アムロ・レイ"})},children:['Add "',z(s),'" Snack']},s)}),n.jsx(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t}),n.jsx(m,{placeholder:"Input"})]})},w=()=>{const{snack:e,snacks:t}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(k,{gap:"md",children:[n.jsx(V,{each:["info","success","warning","error"],children:s=>n.jsxs(c,{onClick:()=>{e({colorScheme:s,description:"見せて貰おうか。連邦軍のモビルスーツの性能とやらを！",title:"シャア・アズナブル"})},children:['Add "',z(s),'" Snack']},s)}),n.jsx(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t}),n.jsx(m,{placeholder:"Input"})]})},M=()=>{const{snack:e,snacks:t}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(k,{gap:"md",children:[n.jsx(V,{each:["oval","grid","puff","dots"],children:s=>n.jsxs(c,{onClick:()=>{e({description:"大丈夫、あなたなら出来るわ。",loadingScheme:s,title:"セイラ・マス"})},children:['Add "',z(s),'" Snack']},s)}),n.jsx(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t}),n.jsx(m,{placeholder:"Input"})]})},E=()=>{const{snack:e,snacks:t}=S({direction:"end"});return n.jsxs(n.Fragment,{children:[n.jsxs(k,{gap:"md",children:[n.jsx(c,{onClick:()=>{e({description:"認めたくないものだな。自分自身の、若さゆえの過ちというものを。",title:"シャア・アズナブル"})},children:"Add Snack"}),n.jsx(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t}),n.jsx(m,{placeholder:"Input"})]})},D=()=>{const{snack:e,snacks:t}=S({limit:5});return n.jsxs(n.Fragment,{children:[n.jsxs(k,{gap:"md",children:[n.jsx(c,{onClick:()=>{e({description:"殴られもせずに一人前になった奴がどこにいるものか！",title:"ブライト・ノア"})},children:"Add Snack"}),n.jsx(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t}),n.jsx(m,{placeholder:"Input"})]})},R=()=>{const{snack:e,snacks:t}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(k,{gap:"md",children:[n.jsx(c,{colorScheme:"primary",onClick:()=>{e({description:"それでも男ですか！軟弱者！",duration:3e4,title:"セイラ・マス"})},children:"Add Snack"}),n.jsx(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t}),n.jsx(m,{placeholder:"Input"})]})},U=()=>{const{snack:e,snacks:t}=S({closable:!1});return n.jsxs(n.Fragment,{children:[n.jsxs(k,{gap:"md",children:[n.jsx(c,{colorScheme:"primary",onClick:()=>{e({description:"ザクとは違うのだよ、ザクとは！",title:"ランバ・ラル"})},children:"Add Snack"}),n.jsx(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t}),n.jsx(m,{placeholder:"Input"})]})},L=()=>{const{snack:e,snacks:t}=S(),s=r.useRef(void 0);return n.jsxs(n.Fragment,{children:[n.jsxs(k,{gap:"md",children:[n.jsx(c,{onClick:()=>{s.current=e({description:"オレは、生きる！生きて、アイナと添い遂げる！",title:"シロー・アマダ"})},children:"Add Snack"}),n.jsx(c,{colorScheme:"warning",onClick:()=>{s.current&&e.close(s.current)},children:"Close last Snack"}),n.jsx(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t}),n.jsx(m,{placeholder:"Input"})]})},T=()=>{const{snack:e,snacks:t}=S(),s=r.useRef(void 0);return n.jsxs(n.Fragment,{children:[n.jsxs(k,{gap:"md",children:[n.jsx(c,{onClick:()=>{s.current=e({description:"今の私は、クワトロ・バジーナ大尉だ。それ以上でも、それ以下でもない。",title:"クワトロ・バジーナ"})},children:"Add Snack"}),n.jsx(c,{onClick:()=>{s.current&&e.update(s.current,{colorScheme:"purple",description:"そんな大人、修正してやる！",title:"カミーユ・ビダン"})},children:"Update last Snack"}),n.jsx(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t}),n.jsx(m,{placeholder:"Input"})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};const Fn=["Basic","Variant","Status","ColorScheme","Loading","Direction","Limit","Duration","DisabledClosable","UseClose","UseUpdate"];export{y as Basic,w as ColorScheme,E as Direction,U as DisabledClosable,R as Duration,D as Limit,M as Loading,F as Status,L as UseClose,T as UseUpdate,b as Variant,Fn as __namedExportsOrder,bn as default};
