import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{A as ce,a as ae,b as oe,c as re}from"./alert-B0brJ8vH.js";import{C as le}from"./close-button-BVdHRSIP.js";import{u as Kn,e as Z}from"./theme-provider-DvoMT5nL.js";import{m as nn,c as Qn,b as Xn,f as K,B as ie,af as de}from"./factory-CSM9sPSx.js";import{f as X}from"./forward-ref-BmTAT9U5.js";import{u as ue}from"./index-DWEUlx1C.js";import{u as en}from"./index-D_rx36I2.js";import{u as tn}from"./index-BKYuqN1t.js";import{A as sn}from"./index-CLw4Dysw.js";import{M as Q}from"./motion-DbFL6ada.js";import{d as pe}from"./motion-D_mik6Sq.js";import{W as p}from"./flex-DB7lh134.js";import{B as s}from"./button-BNYY7Slw.js";import{I as k}from"./input-BQIBzx5g.js";import{B as ke}from"./box-DFfDP5ur.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BiToCgiA.js";import"./use-component-style-j75HgCyZ.js";import"./loading-tpmCqo-t.js";import"./use-ripple-D-GIaEzw.js";import"./extends-CF3RwP-h.js";import"./index-ByQ-4Nbs.js";import"./form-control-Cp0a3Pr6.js";const cn=e=>{const{component:t}=e;return c=>typeof t=="function"?t({...c,...e}):n.jsx(he,{...c,...e})};let an=0;const m=(e={})=>{const[t,a]=u.useState([]),{theme:c}=Kn(),S=u.useMemo(()=>{var l;return((l=c.__config.snacks)==null?void 0:l.options)??{}},[c]),o=u.useMemo(()=>nn(S,e),[e,S]),{direction:C,startIndex:j,limit:x=3}=o,r=u.useCallback(l=>nn(o,l),[o]),A=u.useMemo(()=>{const l=(i={})=>{i=r(i);const d=cn(i);an+=1;let{id:g=an,duration:f,onCloseComplete:I,status:_,boxShadow:v,style:G}=i;const q={id:g,status:_,duration:f,message:d,onClose:()=>a(y=>y.filter(F=>F.id!==g)),onCloseComplete:I,boxShadow:v,style:G};return a(y=>[...y.splice(-1*((x??1/0)-1)),q]),g};return l.update=(i,d)=>{d=r(d),a(g=>g.map(f=>f.id===i?{...f,...d,message:cn(d)}:f))},l.closeAll=()=>{a([])},l.close=i=>{a(d=>d.filter(g=>g.id!==i))},l.isActive=i=>!!t.find(d=>d.id===i),l},[t,x,r]),B=u.useMemo(()=>({direction:C,startIndex:j,items:t}),[C,j,t]);return{snack:A,snacks:B}},me=["0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)","0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px -1px 2px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.2)"],he=X(({variant:e="basic",colorScheme:t,status:a,icon:c,title:S,description:o,isClosable:C=!0,boxShadow:j=me,className:x,index:r,onClose:A},B)=>n.jsxs(ce,{ref:B,className:Qn("ui-snack",x),status:a,variant:e,colorScheme:t,alignItems:"start",boxShadow:r?j:void 0,pe:C?8:void 0,children:[n.jsx(ae,{variant:c==null?void 0:c.variant,className:"ui-snack__icon",...c!=null&&c.color?{color:c.color}:{},children:c==null?void 0:c.children}),n.jsxs(Xn.div,{flex:"1",children:[S?n.jsx(oe,{className:"ui-snack__title",lineClamp:1,children:S}):null,o?n.jsx(re,{className:"ui-snack__desc",lineClamp:3,children:o}):null]}),C?n.jsx(le,{className:"ui-snack__close-button",size:"sm",onClick:A,position:"absolute",top:2,right:2}):null]})),Se={initial:{padding:0},animate:({gutter:e})=>({padding:`${e[0]} 0 ${e[1]}`,transition:{duration:.4}}),exit:{padding:0}},ge={initial:{opacity:1,height:0},animate:({height:e})=>({opacity:1,height:e,transition:{duration:.4}}),exit:{opacity:0,height:0}},h=X(({className:e,snacks:t,containerVariants:a=Se,listVariants:c=ge,listProps:S,...o},C)=>{const{items:j,...x}=t,r=j.length,A=u.useRef(new Map),[B,l]=u.useState(0),[i,d]=u.useState(!!r),{theme:g}=Kn(),{variants:f,direction:I="top",startIndex:_=0,gutter:v=[0,0],gap:G="fallback(4, 1rem)",negateMargin:Y=!0,...q}=u.useMemo(()=>({...x,...g.__config.snacks,...o}),[x,g,o]),y=en("spaces",tn(v[0]))??0,F=en("spaces",tn(v[1]))??0,Zn=Z(y).negate().toString(),ne=Z(F).negate().toString(),ee=!!r||i,te={w:"100%",var:[{__prefix:"ui",name:"space",token:"spaces",value:G}],margin:Y?`${Zn} 0 ${ne}`:void 0};return u.useEffect(()=>{let b=0;if(!r)return;const w=[...A.current.values()].slice(0,r);for(const W of w){if(!W.current)continue;let{offsetHeight:J,offsetTop:se}=W.current;J+=se,J>b&&(b=J)}l(b)},[r,I]),K(()=>{r&&d(!0)},[r]),n.jsx(sn,{initial:!1,children:ee?n.jsx(Q,{ref:C,className:Qn("ui-snacks",e),__css:te,variants:a,custom:{gutter:[y,F]},initial:"initial",animate:"animate",exit:"exit",...q,children:n.jsx(Q,{as:"ul",className:"ui-snacks__list",variants:c,custom:{height:B},initial:"initial",animate:"animate",exit:"exit",__css:{position:"relative",w:"100%"},...S,children:n.jsx(sn,{onExitComplete:()=>{r||d(!1)},children:j.map((b,w)=>{const W=u.createRef();return A.current.set(w,W),n.jsx(Yn,{ref:W,index:w,lastIndex:r-w-1,startIndex:_,variants:f,direction:I,...b},b.id)})})})}):null})}),xe={initial:({index:e,direction:t})=>({opacity:0,...e?{y:(t==="top"?-1:1)*16}:{}}),animate:({index:e})=>({opacity:1,y:0,transition:{delay:e?0:.4,duration:.4,ease:[.4,0,.2,1]}}),exit:{opacity:0,transition:{duration:.2,ease:[.4,0,1,1]}}},Yn=u.memo(X(({index:e,lastIndex:t,startIndex:a,direction:c,variants:S=xe,duration:o=null,message:C,onClose:j,onCloseComplete:x,style:r},A)=>{const[B,l]=u.useState(o),i=pe(),d=i?j:de,g=()=>l(null),f=()=>l(o),I=a+e,v={position:"absolute",top:`calc(var(--ui-space) * ${c==="top"?t:e})`,left:0,right:0,zIndex:I,w:"100%",maxW:"100%",...r};return K(()=>{i||x==null||x()},[i]),K(()=>{l(o)},[o]),ue(d,B),n.jsx(Xn.li,{ref:A,className:"ui-snacks__item",__css:v,children:n.jsx(Q,{className:"ui-snacks__item-inner",layout:!0,variants:S,custom:{index:e,lastIndex:t,direction:c},initial:"initial",animate:"animate",exit:"exit",onHoverStart:g,onHoverEnd:f,children:ie(C,{index:e,onClose:d})})})}));Yn.displayName="SnackComponent";const Pe={title:"Hooks / useSnacks"},M=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},R=()=>{const{snack:e,snacks:t}=m({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},E=()=>{const{snack:e,snacks:t}=m({limit:5});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},N=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"lg"],negateMargin:!1,mb:"-md"}),n.jsx(k,{placeholder:"Input"})]})},O=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",duration:3e4})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},U=()=>{const{snack:e,snacks:t}=m({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"basic"}),children:"Add basic Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"solid"}),children:"Add solid Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"subtle"}),children:"Add subtle Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"top-accent"}),children:"Add top accent Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"left-accent"}),children:"Add left accent Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},V=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"oval"}}),children:"Add oval Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"grid"}}),children:"Add grid Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"puff"}}),children:"Add puff Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"dots"}}),children:"Add dots Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},D=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info"}),children:"Add info Snack"}),n.jsx(s,{colorScheme:"success",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success"}),children:"Add success Snack"}),n.jsx(s,{colorScheme:"warning",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning"}),children:"Add warning Snack"}),n.jsx(s,{colorScheme:"danger",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error"}),children:"Add danger Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading"}),children:"Add loading Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},L=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"green",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info",colorScheme:"green"}),children:"Add green Snack"}),n.jsx(s,{colorScheme:"purple",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success",colorScheme:"purple"}),children:"Add purple Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning",colorScheme:"gray"}),children:"Add gray Snack"}),n.jsx(s,{colorScheme:"pink",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error",colorScheme:"pink"}),children:"Add pink Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},T=()=>{const{snack:e,snacks:t}=m(),a=u.useRef(void 0),c=()=>{a.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},S=()=>{a.current&&e.close(a.current)},o=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:c,children:"Add Snack"}),n.jsx(s,{onClick:S,children:"Close last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:o,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},H=()=>{const{snack:e,snacks:t}=m(),a=u.useRef(void 0),c=()=>{a.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},S=()=>{a.current&&e.update(a.current,{title:"ベジータ",description:"よくも…よくも…オレの…ブルマを!!",colorScheme:"purple"})},o=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:c,children:"Add Snack"}),n.jsx(s,{onClick:S,children:"Update last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:o,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},$=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({component:()=>n.jsx(ke,{color:"white",py:3,px:4,bg:"purple.500",children:"ギャルのパンティーおくれーーーっ！！！！！"})})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},P=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",style:{w:"60%"}})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},z=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",isClosable:!1})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})};var on,rn,ln;M.parameters={...M.parameters,docs:{...(on=M.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
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
}`,...(ln=(rn=M.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var dn,un,pn;R.parameters={...R.parameters,docs:{...(dn=R.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
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
}`,...(pn=(un=R.parameters)==null?void 0:un.docs)==null?void 0:pn.source}}};var kn,mn,hn;E.parameters={...E.parameters,docs:{...(kn=E.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
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
}`,...(hn=(mn=E.parameters)==null?void 0:mn.docs)==null?void 0:hn.source}}};var Sn,gn,xn;N.parameters={...N.parameters,docs:{...(Sn=N.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
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
}`,...(xn=(gn=N.parameters)==null?void 0:gn.docs)==null?void 0:xn.source}}};var Cn,jn,fn;O.parameters={...O.parameters,docs:{...(Cn=O.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
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
}`,...(fn=(jn=O.parameters)==null?void 0:jn.docs)==null?void 0:fn.source}}};var An,Bn,In;U.parameters={...U.parameters,docs:{...(An=U.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
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
}`,...(In=(Bn=U.parameters)==null?void 0:Bn.docs)==null?void 0:In.source}}};var vn,yn,bn;V.parameters={...V.parameters,docs:{...(vn=V.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
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
}`,...(bn=(yn=V.parameters)==null?void 0:yn.docs)==null?void 0:bn.source}}};var wn,Wn,_n;D.parameters={...D.parameters,docs:{...(wn=D.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
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
}`,...(_n=(Wn=D.parameters)==null?void 0:Wn.docs)==null?void 0:_n.source}}};var Fn,Mn,Rn;L.parameters={...L.parameters,docs:{...(Fn=L.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
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
}`,...(Rn=(Mn=L.parameters)==null?void 0:Mn.docs)==null?void 0:Rn.source}}};var En,Nn,On;T.parameters={...T.parameters,docs:{...(En=T.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
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
}`,...(On=(Nn=T.parameters)==null?void 0:Nn.docs)==null?void 0:On.source}}};var Un,Vn,Dn;H.parameters={...H.parameters,docs:{...(Un=H.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
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
}`,...(Dn=(Vn=H.parameters)==null?void 0:Vn.docs)==null?void 0:Dn.source}}};var Ln,Tn,Hn;$.parameters={...$.parameters,docs:{...(Ln=$.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(Hn=(Tn=$.parameters)==null?void 0:Tn.docs)==null?void 0:Hn.source}}};var $n,Pn,zn;P.parameters={...P.parameters,docs:{...($n=P.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
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
}`,...(zn=(Pn=P.parameters)==null?void 0:Pn.docs)==null?void 0:zn.source}}};var Gn,qn,Jn;z.parameters={...z.parameters,docs:{...(Gn=z.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
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
}`,...(Jn=(qn=z.parameters)==null?void 0:qn.docs)==null?void 0:Jn.source}}};const ze=["basic","withDirection","withLimit","withGutter","withDuration","withVariant","withLoadingVariant","withStatus","withColorScheme","useClose","useUpdate","customComponent","customStyle","disabledClosable"];export{ze as __namedExportsOrder,M as basic,$ as customComponent,P as customStyle,Pe as default,z as disabledClosable,T as useClose,H as useUpdate,L as withColorScheme,R as withDirection,O as withDuration,N as withGutter,E as withLimit,V as withLoadingVariant,D as withStatus,U as withVariant};
