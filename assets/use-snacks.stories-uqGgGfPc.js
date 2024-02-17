import{a as o,j as n,F as k}from"./jsx-runtime-5BUNAZ9W.js";import{r as p}from"./index-4g5l5LRQ.js";import{A as se,a as re,b as ue,c as le}from"./alert-geRj9HO8.js";import{C as ie}from"./close-button-JpPxzesw.js";import{u as Xn,e as en}from"./theme-provider-sgFj2JQg.js";import{m as tn,a as Yn,u as Zn,e as X,B as de,a6 as pe}from"./factory-RXTd6Ype.js";import{f as Z}from"./forward-ref-A-8Arhkk.js";import{u as ke}from"./index-Yt2yOm05.js";import{u as cn}from"./index-CBfWCvKJ.js";import{u as on}from"./index-e7LtySSC.js";import{A as an}from"./index-eMn_GZVX.js";import{M as Y}from"./motion-1HlxJrnU.js";import{c as me}from"./motion-heeYkzTb.js";import{W as m}from"./flex-GUkVfn2c.js";import{B as c}from"./button-_x0xF1BK.js";import{I as A}from"./input-4oJQvspv.js";import{B as Ae}from"./box-er03aWxy.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./use-component-style-ur23iJdL.js";import"./icon-2cwE6nV2.js";import"./loading-wg4TUUCb.js";import"./use-ripple-u7crcLVz.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-DkyhaWsF.js";import"./form-control-TaOpd4jQ.js";const sn=e=>{const{component:t}=e;return a=>typeof t=="function"?t({...a,...e}):n(Se,{...a,...e})};let rn=0;const h=(e={})=>{const[t,s]=p.useState([]),{theme:a}=Xn(),F=p.useMemo(()=>{var l;return((l=a.__config.snacks)==null?void 0:l.options)??{}},[a]),u=p.useMemo(()=>tn(F,e),[e,F]),{direction:C,startIndex:f,limit:B=3}=u,r=p.useCallback(l=>tn(u,l),[u]),v=p.useMemo(()=>{const l=(i={})=>{i=r(i);const d=sn(i);rn+=1;let{id:g=rn,duration:I,onCloseComplete:b,status:M,boxShadow:x,style:J}=i;const K={id:g,status:M,duration:I,message:d,onClose:()=>s(E=>E.filter(O=>O.id!==g)),onCloseComplete:b,boxShadow:x,style:J};return s(E=>[...E.splice(-1*((B??1/0)-1)),K]),g};return l.update=(i,d)=>{d=r(d),s(g=>g.map(I=>I.id===i?{...I,...d,message:sn(d)}:I))},l.closeAll=()=>{s([])},l.close=i=>{s(d=>d.filter(g=>g.id!==i))},l.isActive=i=>!!t.find(d=>d.id===i),l},[t,B,r]),y=p.useMemo(()=>({direction:C,startIndex:f,items:t}),[C,f,t]);return{snack:v,snacks:y}},he=["0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)","0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px -1px 2px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.2)"],Se=Z(({variant:e="basic",colorScheme:t,status:s,icon:a,title:F,description:u,isClosable:C=!0,boxShadow:f=he,className:B,index:r,onClose:v},y)=>o(se,{ref:y,className:Yn("ui-snack",B),status:s,variant:e,colorScheme:t,alignItems:"start",boxShadow:r?f:void 0,pe:C?8:void 0,children:[n(re,{variant:a==null?void 0:a.variant,className:"ui-snack__icon",...a!=null&&a.color?{color:a.color}:{},children:a==null?void 0:a.children}),o(Zn.div,{flex:"1",children:[F?n(ue,{className:"ui-snack__title",lineClamp:1,children:F}):null,u?n(le,{className:"ui-snack__desc",lineClamp:3,children:u}):null]}),C?n(ie,{className:"ui-snack__close-button",size:"sm",onClick:v,position:"absolute",top:2,right:2}):null]})),ge={initial:{padding:0},animate:({gutter:e})=>({padding:`${e[0]} 0 ${e[1]}`,transition:{duration:.4}}),exit:{padding:0}},Fe={initial:{opacity:1,height:0},animate:({height:e})=>({opacity:1,height:e,transition:{duration:.4}}),exit:{opacity:0,height:0}},S=Z(({className:e,snacks:t,containerVariants:s=ge,listVariants:a=Fe,listProps:F,...u},C)=>{const{items:f,...B}=t,r=f.length,v=p.useRef(new Map),[y,l]=p.useState(0),[i,d]=p.useState(!!r),{theme:g}=Xn(),{variants:I,direction:b="top",startIndex:M=0,gutter:x=[0,0],gap:J="md",negateMargin:nn=!0,...K}=p.useMemo(()=>({...B,...g.__config.snacks,...u}),[B,g,u]),E=cn("spaces",on(x[0]))??0,O=cn("spaces",on(x[1]))??0,ee=en(E).negate().toString(),te=en(O).negate().toString(),ce=!!r||i,oe={w:"100%",var:[{name:"space",token:"spaces",value:J}],margin:nn?`${ee} 0 ${te}`:void 0};return p.useEffect(()=>{let w=0;if(!r)return;const W=[...v.current.values()].slice(0,r);for(const _ of W){if(!_.current)continue;let{offsetHeight:Q,offsetTop:ae}=_.current;Q+=ae,Q>w&&(w=Q)}l(w)},[r,b]),X(()=>{r&&d(!0)},[r]),n(an,{initial:!1,children:ce?n(Y,{ref:C,className:Yn("ui-snacks",e),__css:oe,variants:s,custom:{gutter:[E,O]},initial:"initial",animate:"animate",exit:"exit",...K,children:n(Y,{as:"ul",className:"ui-snacks__list",variants:a,custom:{height:y},initial:"initial",animate:"animate",exit:"exit",__css:{position:"relative",w:"100%"},...F,children:n(an,{onExitComplete:()=>{r||d(!1)},children:f.map((w,W)=>{const _=p.createRef();return v.current.set(W,_),n(ne,{ref:_,index:W,lastIndex:r-W-1,startIndex:M,variants:I,direction:b,...w},w.id)})})})}):null})}),Be={initial:({index:e,direction:t})=>({opacity:0,...e?{y:(t==="top"?-1:1)*16}:{}}),animate:({index:e})=>({opacity:1,y:0,transition:{delay:e?0:.4,duration:.4,ease:[.4,0,.2,1]}}),exit:{opacity:0,transition:{duration:.2,ease:[.4,0,1,1]}}},ne=p.memo(Z(({index:e,lastIndex:t,startIndex:s,direction:a,variants:F=Be,duration:u=null,message:C,onClose:f,onCloseComplete:B,style:r},v)=>{const[y,l]=p.useState(u),i=me(),d=i?f:pe,g=()=>l(null),I=()=>l(u),b=s+e,x={position:"absolute",top:`calc(var(--ui-space) * ${a==="top"?t:e})`,left:0,right:0,zIndex:b,w:"100%",maxW:"100%",...r};return X(()=>{i||B==null||B()},[i]),X(()=>{l(u)},[u]),ke(d,y),n(Zn.li,{ref:v,className:"ui-snacks__item",__css:x,children:n(Y,{className:"ui-snacks__item-inner",layout:!0,variants:F,custom:{index:e,lastIndex:t,direction:a},initial:"initial",animate:"animate",exit:"exit",onHoverStart:g,onHoverEnd:I,children:de(C,{index:e,onClose:d})})})}));ne.displayName="SnackComponent";const Ge={title:"Hooks / useSnacks"},D=()=>{const{snack:e,snacks:t}=h();return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},N=()=>{const{snack:e,snacks:t}=h({direction:"bottom"});return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},R=()=>{const{snack:e,snacks:t}=h({limit:5});return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},U=()=>{const{snack:e,snacks:t}=h();return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"lg"],negateMargin:!1,mb:"-md"}),n(A,{placeholder:"Input"})]})},V=()=>{const{snack:e,snacks:t}=h();return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",duration:3e4})},children:"Add Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},L=()=>{const{snack:e,snacks:t}=h({direction:"bottom"});return o(k,{children:[o(m,{gap:"md",children:[n(c,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"basic"}),children:"Add basic Snack"}),n(c,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"solid"}),children:"Add solid Snack"}),n(c,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"subtle"}),children:"Add subtle Snack"}),n(c,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"top-accent"}),children:"Add top accent Snack"}),n(c,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"left-accent"}),children:"Add left accent Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},T=()=>{const{snack:e,snacks:t}=h();return o(k,{children:[o(m,{gap:"md",children:[n(c,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"oval"}}),children:"Add oval Snack"}),n(c,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"grid"}}),children:"Add grid Snack"}),n(c,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"puff"}}),children:"Add puff Snack"}),n(c,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"dots"}}),children:"Add dots Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},H=()=>{const{snack:e,snacks:t}=h();return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"primary",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info"}),children:"Add info Snack"}),n(c,{colorScheme:"success",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success"}),children:"Add success Snack"}),n(c,{colorScheme:"warning",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning"}),children:"Add warning Snack"}),n(c,{colorScheme:"danger",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error"}),children:"Add danger Snack"}),n(c,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading"}),children:"Add loading Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},$=()=>{const{snack:e,snacks:t}=h();return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"green",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info",colorScheme:"green"}),children:"Add green Snack"}),n(c,{colorScheme:"purple",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success",colorScheme:"purple"}),children:"Add purple Snack"}),n(c,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning",colorScheme:"gray"}),children:"Add gray Snack"}),n(c,{colorScheme:"pink",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error",colorScheme:"pink"}),children:"Add pink Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},j=()=>{const{snack:e,snacks:t}=h(),s=p.useRef(void 0);return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"primary",onClick:()=>{s.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n(c,{onClick:()=>{s.current&&e.close(s.current)},children:"Close last Snack"}),n(c,{colorScheme:"danger",onClick:()=>{e.closeAll()},children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},P=()=>{const{snack:e,snacks:t}=h(),s=p.useRef(void 0);return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"primary",onClick:()=>{s.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n(c,{onClick:()=>{s.current&&e.update(s.current,{title:"ベジータ",description:"よくも…よくも…オレの…ブルマを!!",colorScheme:"purple"})},children:"Update last Snack"}),n(c,{colorScheme:"danger",onClick:()=>{e.closeAll()},children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},z=()=>{const{snack:e,snacks:t}=h();return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"primary",onClick:()=>{e({component:()=>n(Ae,{color:"white",py:3,px:4,bg:"purple.500",children:"ギャルのパンティーおくれーーーっ！！！！！"})})},children:"Add Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},G=()=>{const{snack:e,snacks:t}=h();return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",style:{w:"60%"}})},children:"Add Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})},q=()=>{const{snack:e,snacks:t}=h();return o(k,{children:[o(m,{gap:"md",children:[n(c,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",isClosable:!1})},children:"Add Snack"}),n(c,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n(S,{snacks:t,gutter:[0,"md"]}),n(A,{placeholder:"Input"})]})};var un,ln,dn;D.parameters={...D.parameters,docs:{...(un=D.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          title: "孫悟空",
          description: "オッス！オラ悟空！"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(dn=(ln=D.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var pn,kn,mn;N.parameters={...N.parameters,docs:{...(pn=N.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks({
    direction: "bottom"
  });
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          title: "孫悟空",
          description: "オッス！オラ悟空！"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(mn=(kn=N.parameters)==null?void 0:kn.docs)==null?void 0:mn.source}}};var An,hn,Sn;R.parameters={...R.parameters,docs:{...(An=R.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks({
    limit: 5
  });
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          title: "孫悟空",
          description: "オッス！オラ悟空！"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(Sn=(hn=R.parameters)==null?void 0:hn.docs)==null?void 0:Sn.source}}};var gn,Fn,Bn;U.parameters={...U.parameters,docs:{...(gn=U.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          title: "孫悟空",
          description: "オッス！オラ悟空！"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "lg"]} negateMargin={false} mb="-md" />

      <Input placeholder="Input" />
    </>;
}`,...(Bn=(Fn=U.parameters)==null?void 0:Fn.docs)==null?void 0:Bn.source}}};var Cn,fn,In;V.parameters={...V.parameters,docs:{...(Cn=V.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          title: "孫悟空",
          description: "オッス！オラ悟空！",
          duration: 30000
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(In=(fn=V.parameters)==null?void 0:fn.docs)==null?void 0:In.source}}};var vn,yn,bn;L.parameters={...L.parameters,docs:{...(vn=L.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks({
    direction: "bottom"
  });
  return <>
      <Wrap gap="md">
        <Button onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        variant: "basic"
      })}>
          Add basic Snack
        </Button>

        <Button onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        variant: "solid"
      })}>
          Add solid Snack
        </Button>

        <Button onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        variant: "subtle"
      })}>
          Add subtle Snack
        </Button>

        <Button onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        variant: "top-accent"
      })}>
          Add top accent Snack
        </Button>

        <Button onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        variant: "left-accent"
      })}>
          Add left accent Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(bn=(yn=L.parameters)==null?void 0:yn.docs)==null?void 0:bn.source}}};var xn,En,wn;T.parameters={...T.parameters,docs:{...(xn=T.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "loading",
        variant: "subtle",
        icon: {
          variant: "oval"
        }
      })}>
          Add oval Snack
        </Button>

        <Button onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "loading",
        variant: "solid",
        icon: {
          variant: "grid"
        }
      })}>
          Add grid Snack
        </Button>

        <Button onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "loading",
        variant: "subtle",
        icon: {
          variant: "puff"
        }
      })}>
          Add puff Snack
        </Button>

        <Button onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "loading",
        variant: "solid",
        icon: {
          variant: "dots"
        }
      })}>
          Add dots Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(wn=(En=T.parameters)==null?void 0:En.docs)==null?void 0:wn.source}}};var Wn,_n,Mn;H.parameters={...H.parameters,docs:{...(Wn=H.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "info"
      })}>
          Add info Snack
        </Button>

        <Button colorScheme="success" onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "success"
      })}>
          Add success Snack
        </Button>

        <Button colorScheme="warning" onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "warning"
      })}>
          Add warning Snack
        </Button>

        <Button colorScheme="danger" onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "error"
      })}>
          Add danger Snack
        </Button>

        <Button onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "loading"
      })}>
          Add loading Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(Mn=(_n=H.parameters)==null?void 0:_n.docs)==null?void 0:Mn.source}}};var On,Dn,Nn;$.parameters={...$.parameters,docs:{...(On=$.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="green" onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "info",
        colorScheme: "green"
      })}>
          Add green Snack
        </Button>

        <Button colorScheme="purple" onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "success",
        colorScheme: "purple"
      })}>
          Add purple Snack
        </Button>

        <Button onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "warning",
        colorScheme: "gray"
      })}>
          Add gray Snack
        </Button>

        <Button colorScheme="pink" onClick={() => snack({
        title: "孫悟空",
        description: "オッス！オラ悟空！",
        status: "error",
        colorScheme: "pink"
      })}>
          Add pink Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(Nn=(Dn=$.parameters)==null?void 0:Dn.docs)==null?void 0:Nn.source}}};var Rn,Un,Vn;j.parameters={...j.parameters,docs:{...(Rn=j.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  const ref = useRef<string | number | undefined>(undefined);
  const onOpen = () => {
    ref.current = snack({
      title: "孫悟空",
      description: "オッス！オラ悟空！"
    });
  };
  const onClose = () => {
    if (ref.current) snack.close(ref.current);
  };
  const onCloseAll = () => {
    snack.closeAll();
  };
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={onOpen}>
          Add Snack
        </Button>
        <Button onClick={onClose}>Close last Snack</Button>
        <Button colorScheme="danger" onClick={onCloseAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(Vn=(Un=j.parameters)==null?void 0:Un.docs)==null?void 0:Vn.source}}};var Ln,Tn,Hn;P.parameters={...P.parameters,docs:{...(Ln=P.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  const ref = useRef<string | number | undefined>(undefined);
  const onOpen = () => {
    ref.current = snack({
      title: "孫悟空",
      description: "オッス！オラ悟空！"
    });
  };
  const onUpdate = () => {
    if (ref.current) snack.update(ref.current, {
      title: "ベジータ",
      description: "よくも…よくも…オレの…ブルマを!!",
      colorScheme: "purple"
    });
  };
  const onCloseAll = () => {
    snack.closeAll();
  };
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={onOpen}>
          Add Snack
        </Button>
        <Button onClick={onUpdate}>Update last Snack</Button>
        <Button colorScheme="danger" onClick={onCloseAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(Hn=(Tn=P.parameters)==null?void 0:Tn.docs)==null?void 0:Hn.source}}};var $n,jn,Pn;z.parameters={...z.parameters,docs:{...($n=z.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          component: () => <Box color="white" py={3} px={4} bg="purple.500">
                  ギャルのパンティーおくれーーーっ！！！！！
                </Box>
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(Pn=(jn=z.parameters)==null?void 0:jn.docs)==null?void 0:Pn.source}}};var zn,Gn,qn;G.parameters={...G.parameters,docs:{...(zn=G.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          title: "孫悟空",
          description: "オッス！オラ悟空！",
          style: {
            w: "60%"
          }
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(qn=(Gn=G.parameters)==null?void 0:Gn.docs)==null?void 0:qn.source}}};var Jn,Kn,Qn;q.parameters={...q.parameters,docs:{...(Jn=q.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          title: "孫悟空",
          description: "オッス！オラ悟空！",
          isClosable: false
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>;
}`,...(Qn=(Kn=q.parameters)==null?void 0:Kn.docs)==null?void 0:Qn.source}}};const qe=["basic","withDirection","withLimit","withGutter","withDuration","withVariant","withLoadingVariant","withStatus","withColorScheme","useClose","useUpdate","customComponent","customStyle","disabledClosable"];export{qe as __namedExportsOrder,D as basic,z as customComponent,G as customStyle,Ge as default,q as disabledClosable,j as useClose,P as useUpdate,$ as withColorScheme,N as withDirection,V as withDuration,U as withGutter,R as withLimit,T as withLoadingVariant,H as withStatus,L as withVariant};
