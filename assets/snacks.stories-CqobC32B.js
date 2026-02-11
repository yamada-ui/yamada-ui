import{d as En,g as Dn,r,N as X,j as n,a6 as Y,t as N,U as O,b as Fn,bX as Rn,bY as Un,E as Ln,A as Tn,h as V,B as zn,x as _n,y as Hn,z as On,D as Vn,ay as Xn,Q as t,P as z}from"./iframe-FV6Pf4zG.js";import{c as q}from"./transition-CHWnHPwq.js";import{W as p}from"./wrap-Br4jHdq7.js";import{I as m}from"./input-Bqoh0qdu.js";import{F as _}from"./for-v94cQqt1.js";import"./preload-helper-C1FmrZbK.js";import"./flex-DLFcrCK5.js";import"./use-input-border-CGGYmoMv.js";import"./use-field-props-D1lUJOGS.js";const Nn=En({base:{closeButton:{"&:is([data-variant='plain'], [data-variant='island'])":{colorScheme:"mono!"},"&:is([data-variant='solid'])":{color:"colorScheme.contrast!",_hover:{bg:"colorScheme.solid!"}},fontSize:"md!",minBoxSize:"6!",position:"absolute",right:"3",top:"2.5"},content:{"&[data-close-button]":{pe:"6"},display:"flex",flex:"1",flexDirection:"column",gap:"1"},item:{insetX:"0",maxW:"full",position:"absolute",top:"calc({gap} * {index})",w:"100%",zIndex:"{z-index}"},list:{position:"relative",w:"full"},root:{"&[data-negative]":{m:"calc({top} * -1) 0 calc({bottom} * -1)"},"--gap":"spaces.md",w:"full"}}}),{ComponentContext:Qn,useComponentContext:Yn,withContext:H,withProvider:qn}=Dn("snacks",Nn),h=qn(({snacks:{direction:e="start",items:c,startIndex:s=0},listProps:l,...x})=>{const o=c.length,g=r.useRef(new Map),[C,j]=r.useState(0),[A,B]=r.useState(!!o),v=!!o||A,u=r.useMemo(()=>({direction:e,elMapRef:g,setExist:B,startIndex:s}),[e,s]),d=r.useCallback(()=>{o||B(!1)},[o]);return r.useEffect(()=>{let a=0;if(!o)return;const i=[...g.current.values()].slice(0,o);for(const k of i){if(!k)continue;let{offsetHeight:I,offsetTop:f}=k;I+=f,I>a&&(a=I)}j(a)},[o,e]),X(()=>{o&&B(!0)},[o]),n.jsx(Qn,{value:u,children:n.jsx(Y,{initial:!1,children:v?n.jsx(N.div,{...x,children:n.jsx(Gn,{custom:{height:C},...l,children:n.jsx(Y,{onExitComplete:d,children:c.map((a,i)=>n.jsx(Jn,{index:i,lastIndex:o-i-1,...a},a.id))})})}):null})})},"root")({animate:"animate",exit:"exit",initial:"initial",variants:{animate:{padding:"var(--top) 0 var(--bottom)",transition:{duration:.4}},exit:{padding:0},initial:{padding:0}}},({gap:e,gutter:c=[0,"lg"],negativeMargins:s=!0,...l})=>({"data-negative":Fn(s),"--bottom":O(c[1],"spaces","0px"),"--gap":O(e,"spaces"),"--top":O(c[0],"spaces","0px"),...l})),Gn=H(N.div,"list")({animate:"animate",exit:"exit",initial:"initial",role:"list",variants:{animate:({height:e})=>({height:e,opacity:1,transition:{duration:.4}}),exit:{height:0,opacity:0},initial:{height:0,opacity:1}}}),Jn=H(({variant:e="plain",closable:c=!0,description:s,duration:l=null,loadingScheme:x,status:o,title:g,withIcon:C=!0,closeButtonProps:j,contentProps:A,descriptionProps:B,iconProps:v,loadingProps:u,titleProps:d,onClose:a,onCloseComplete:i,...k})=>{const[I,f]=r.useState(l),y=Rn(),Q=y?a:Ln,wn=r.useCallback(()=>{f(null)},[]),Mn=r.useCallback(()=>{f(l)},[l]);return X(()=>{y||i==null||i()},[y]),X(()=>{f(l)},[l]),Un(Q,I),n.jsxs(Tn,{as:N.div,variant:e,status:o,...k,onMouseEnter:V(k.onMouseEnter,wn),onMouseLeave:V(k.onMouseLeave,Mn),children:[C?x?n.jsx(zn,{loadingScheme:x,...u}):n.jsx(_n,{...v}):null,n.jsxs(Kn,{"data-close-button":Fn(c),...A,children:[g?n.jsx(Hn,{me:"0",...d,children:g}):null,s?n.jsx(On,{...B,children:s}):null]}),c?n.jsx(Zn,{"data-variant":e,...j,onClick:V(j==null?void 0:j.onClick,Q)}):null]})},"item")({animate:"animate",exit:"exit",initial:"initial",layout:!0,role:"listitem",variants:{animate:({index:e})=>({opacity:1,transition:q.enter()(e?0:.2,.4),y:0}),exit:{opacity:0,transition:q.exit()(void 0,.2)},initial:({direction:e,index:c})=>({opacity:0,...c?{y:(e==="start"?-1:1)*16}:{}})}},({index:e,lastIndex:c,...s})=>{const l=r.useRef(null),{direction:x,elMapRef:o,startIndex:g}=Yn();return r.useEffect(()=>{const C=o.current;return C.set(e,l.current),()=>{C.delete(e)}},[o,e]),{ref:l,"--index":x==="start"?c:e,"--z-index":g+e,custom:{direction:x,index:e},...s}}),Kn=H("div","content")(),Zn=H(Vn,"closeButton")();let G=0;const S=(e={})=>{const[c,s]=r.useState([]),{config:l}=Xn(),x=r.useMemo(()=>l.snacks??{},[l]),o=r.useMemo(()=>({...x,...e}),[e,x]),{direction:g,limit:C=3,startIndex:j}=o,A=r.useCallback(u=>({...o,...u}),[o]),B=r.useMemo(()=>{const u=(d={})=>{d=A(d),G+=1;const{id:a=G.toString(),...i}=d,I={id:a,onClose:()=>s(f=>f.filter(y=>y.id!==a)),...i};return s(f=>[...f.splice(-1*((C??1/0)-1)),I]),a};return u.update=(d,a)=>{a=A(a),s(i=>i.map(k=>k.id===d?{...k,...a}:k))},u.closeAll=()=>{s([])},u.close=d=>{s(a=>a.filter(i=>i.id!==d))},u.isActive=d=>!!c.find(a=>a.id===d),u},[c,C,A]),v=r.useMemo(()=>({direction:g,items:c,startIndex:j}),[g,j,c]);return{snack:B,snacks:v}},re={title:"Components / Snacks"},W=()=>{const{snack:e,snacks:c}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(t,{onClick:()=>{e({description:"こいつ、動くぞ！",title:"アムロ・レイ"})},children:"Add Snack"}),n.jsx(t,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:c}),n.jsx(m,{placeholder:"Input"})]})},b=()=>{const{snack:e,snacks:c}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(_,{each:["plain","solid","subtle","surface","island"],children:s=>n.jsxs(t,{onClick:()=>{e({variant:s,description:"美しいものが、嫌いな人がいるのかしら？",title:"ララァ・スン",withIcon:s!=="island"})},children:['Add "',z(s),'" Snack']},s)}),n.jsx(t,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:c}),n.jsx(m,{placeholder:"Input"})]})},F=()=>{const{snack:e,snacks:c}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(_,{each:["info","success","warning","error"],children:s=>n.jsxs(t,{onClick:()=>{e({description:"アムロ、行きまーす！",status:s,title:"アムロ・レイ"})},children:['Add "',z(s),'" Snack']},s)}),n.jsx(t,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:c}),n.jsx(m,{placeholder:"Input"})]})},w=()=>{const{snack:e,snacks:c}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(_,{each:["info","success","warning","error"],children:s=>n.jsxs(t,{onClick:()=>{e({colorScheme:s,description:"見せて貰おうか。連邦軍のモビルスーツの性能とやらを！",title:"シャア・アズナブル"})},children:['Add "',z(s),'" Snack']},s)}),n.jsx(t,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:c}),n.jsx(m,{placeholder:"Input"})]})},M=()=>{const{snack:e,snacks:c}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(_,{each:["oval","grid","puff","dots"],children:s=>n.jsxs(t,{onClick:()=>{e({description:"大丈夫、あなたなら出来るわ。",loadingScheme:s,title:"セイラ・マス"})},children:['Add "',z(s),'" Snack']},s)}),n.jsx(t,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:c}),n.jsx(m,{placeholder:"Input"})]})},E=()=>{const{snack:e,snacks:c}=S({direction:"end"});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(t,{onClick:()=>{e({description:"認めたくないものだな。自分自身の、若さゆえの過ちというものを。",title:"シャア・アズナブル"})},children:"Add Snack"}),n.jsx(t,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:c}),n.jsx(m,{placeholder:"Input"})]})},D=()=>{const{snack:e,snacks:c}=S({limit:5});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(t,{onClick:()=>{e({description:"殴られもせずに一人前になった奴がどこにいるものか！",title:"ブライト・ノア"})},children:"Add Snack"}),n.jsx(t,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:c}),n.jsx(m,{placeholder:"Input"})]})},R=()=>{const{snack:e,snacks:c}=S();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(t,{colorScheme:"primary",onClick:()=>{e({description:"それでも男ですか！軟弱者！",duration:3e4,title:"セイラ・マス"})},children:"Add Snack"}),n.jsx(t,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:c}),n.jsx(m,{placeholder:"Input"})]})},U=()=>{const{snack:e,snacks:c}=S({closable:!1});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(t,{colorScheme:"primary",onClick:()=>{e({description:"ザクとは違うのだよ、ザクとは！",title:"ランバ・ラル"})},children:"Add Snack"}),n.jsx(t,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:c}),n.jsx(m,{placeholder:"Input"})]})},L=()=>{const{snack:e,snacks:c}=S(),s=r.useRef(void 0);return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(t,{onClick:()=>{s.current=e({description:"オレは、生きる！生きて、アイナと添い遂げる！",title:"シロー・アマダ"})},children:"Add Snack"}),n.jsx(t,{colorScheme:"warning",onClick:()=>{s.current&&e.close(s.current)},children:"Close last Snack"}),n.jsx(t,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:c}),n.jsx(m,{placeholder:"Input"})]})},T=()=>{const{snack:e,snacks:c}=S(),s=r.useRef(void 0);return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(t,{onClick:()=>{s.current=e({description:"今の私は、クワトロ・バジーナ大尉だ。それ以上でも、それ以下でもない。",title:"クワトロ・バジーナ"})},children:"Add Snack"}),n.jsx(t,{onClick:()=>{s.current&&e.update(s.current,{colorScheme:"purple",description:"そんな大人、修正してやる！",title:"カミーユ・ビダン"})},children:"Update last Snack"}),n.jsx(t,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:c}),n.jsx(m,{placeholder:"Input"})]})};var J,K,Z;W.parameters={...W.parameters,docs:{...(J=W.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(Z=(K=W.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var $,P,nn;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(nn=(P=b.parameters)==null?void 0:P.docs)==null?void 0:nn.source}}};var en,sn,cn;F.parameters={...F.parameters,docs:{...(en=F.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
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
}`,...(cn=(sn=F.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var tn,an,on;w.parameters={...w.parameters,docs:{...(tn=w.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
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
}`,...(on=(an=w.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var rn,ln,dn;M.parameters={...M.parameters,docs:{...(rn=M.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
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
}`,...(dn=(ln=M.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var un,kn,pn;E.parameters={...E.parameters,docs:{...(un=E.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(pn=(kn=E.parameters)==null?void 0:kn.docs)==null?void 0:pn.source}}};var mn,hn,Sn;D.parameters={...D.parameters,docs:{...(mn=D.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
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
}`,...(Sn=(hn=D.parameters)==null?void 0:hn.docs)==null?void 0:Sn.source}}};var xn,gn,Cn;R.parameters={...R.parameters,docs:{...(xn=R.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
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
}`,...(Cn=(gn=R.parameters)==null?void 0:gn.docs)==null?void 0:Cn.source}}};var jn,fn,An;U.parameters={...U.parameters,docs:{...(jn=U.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
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
}`,...(An=(fn=U.parameters)==null?void 0:fn.docs)==null?void 0:An.source}}};var Bn,In,vn;L.parameters={...L.parameters,docs:{...(Bn=L.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
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
}`,...(vn=(In=L.parameters)==null?void 0:In.docs)==null?void 0:vn.source}}};var yn,Wn,bn;T.parameters={...T.parameters,docs:{...(yn=T.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
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
}`,...(bn=(Wn=T.parameters)==null?void 0:Wn.docs)==null?void 0:bn.source}}};const le=["Basic","Variant","Status","ColorScheme","Loading","Direction","Limit","Duration","DisabledClosable","UseClose","UseUpdate"];export{W as Basic,w as ColorScheme,E as Direction,U as DisabledClosable,R as Duration,D as Limit,M as Loading,F as Status,L as UseClose,T as UseUpdate,b as Variant,le as __namedExportsOrder,re as default};
