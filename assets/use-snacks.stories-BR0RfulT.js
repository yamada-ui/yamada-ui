import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{r as d}from"./index-uCp2LrAq.js";import{A as ce,a as ae,b as oe,c as re}from"./alert-DkZClwrL.js";import{C as ue}from"./close-button-B1_yQc18.js";import{u as Kn,e as Z}from"./theme-provider-zwL-D6eR.js";import{m as nn,c as Qn,b as Xn,f as K,B as le,ad as ie}from"./factory-Bf0a1C4O.js";import{f as X}from"./forward-ref-Dr5Hqd9a.js";import{u as de}from"./index-CAzj2Fxr.js";import{u as en}from"./index-BJ39ysE2.js";import{u as tn}from"./index-BaBVWS6a.js";import{A as sn}from"./index-DSHhgXSs.js";import{M as Q}from"./motion-Bi86PhT5.js";import{c as pe}from"./motion-BNFRb361.js";import{W as p}from"./flex-BWicnFVx.js";import{B as s}from"./button-BybGdL7z.js";import{I as k}from"./input-DNolx-bU.js";import{B as ke}from"./box-ANpItPfh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-component-style-C0MoE1pt.js";import"./icon-CVBZDjqd.js";import"./loading-BMMGc-Ko.js";import"./use-ripple-BZmEDmbU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-FZO-VaWv.js";import"./form-control-WczVVmWv.js";const cn=e=>{const{component:t}=e;return c=>typeof t=="function"?t({...c,...e}):n.jsx(Ae,{...c,...e})};let an=0;const m=(e={})=>{const[t,a]=d.useState([]),{theme:c}=Kn(),h=d.useMemo(()=>{var u;return((u=c.__config.snacks)==null?void 0:u.options)??{}},[c]),o=d.useMemo(()=>nn(h,e),[e,h]),{direction:F,startIndex:B,limit:g=3}=o,r=d.useCallback(u=>nn(o,u),[o]),x=d.useMemo(()=>{const u=(l={})=>{l=r(l);const i=cn(l);an+=1;let{id:S=an,duration:C,onCloseComplete:f,status:w,boxShadow:I,style:G}=l;const q={id:S,status:w,duration:C,message:i,onClose:()=>a(v=>v.filter(W=>W.id!==S)),onCloseComplete:f,boxShadow:I,style:G};return a(v=>[...v.splice(-1*((g??1/0)-1)),q]),S};return u.update=(l,i)=>{i=r(i),a(S=>S.map(C=>C.id===l?{...C,...i,message:cn(i)}:C))},u.closeAll=()=>{a([])},u.close=l=>{a(i=>i.filter(S=>S.id!==l))},u.isActive=l=>!!t.find(i=>i.id===l),u},[t,g,r]),j=d.useMemo(()=>({direction:F,startIndex:B,items:t}),[F,B,t]);return{snack:x,snacks:j}},me=["0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)","0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px -1px 2px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.2)"],Ae=X(({variant:e="basic",colorScheme:t,status:a,icon:c,title:h,description:o,isClosable:F=!0,boxShadow:B=me,className:g,index:r,onClose:x},j)=>n.jsxs(ce,{ref:j,className:Qn("ui-snack",g),status:a,variant:e,colorScheme:t,alignItems:"start",boxShadow:r?B:void 0,pe:F?8:void 0,children:[n.jsx(ae,{variant:c==null?void 0:c.variant,className:"ui-snack__icon",...c!=null&&c.color?{color:c.color}:{},children:c==null?void 0:c.children}),n.jsxs(Xn.div,{flex:"1",children:[h?n.jsx(oe,{className:"ui-snack__title",lineClamp:1,children:h}):null,o?n.jsx(re,{className:"ui-snack__desc",lineClamp:3,children:o}):null]}),F?n.jsx(ue,{className:"ui-snack__close-button",size:"sm",onClick:x,position:"absolute",top:2,right:2}):null]})),he={initial:{padding:0},animate:({gutter:e})=>({padding:`${e[0]} 0 ${e[1]}`,transition:{duration:.4}}),exit:{padding:0}},Se={initial:{opacity:1,height:0},animate:({height:e})=>({opacity:1,height:e,transition:{duration:.4}}),exit:{opacity:0,height:0}},A=X(({className:e,snacks:t,containerVariants:a=he,listVariants:c=Se,listProps:h,...o},F)=>{const{items:B,...g}=t,r=B.length,x=d.useRef(new Map),[j,u]=d.useState(0),[l,i]=d.useState(!!r),{theme:S}=Kn(),{variants:C,direction:f="top",startIndex:w=0,gutter:I=[0,0],gap:G="fallback(4, 1rem)",negateMargin:Y=!0,...q}=d.useMemo(()=>({...g,...S.__config.snacks,...o}),[g,S,o]),v=en("spaces",tn(I[0]))??0,W=en("spaces",tn(I[1]))??0,Zn=Z(v).negate().toString(),ne=Z(W).negate().toString(),ee=!!r||l,te={w:"100%",var:[{__prefix:"ui",name:"space",token:"spaces",value:G}],margin:Y?`${Zn} 0 ${ne}`:void 0};return d.useEffect(()=>{let y=0;if(!r)return;const b=[...x.current.values()].slice(0,r);for(const E of b){if(!E.current)continue;let{offsetHeight:J,offsetTop:se}=E.current;J+=se,J>y&&(y=J)}u(y)},[r,f]),K(()=>{r&&i(!0)},[r]),n.jsx(sn,{initial:!1,children:ee?n.jsx(Q,{ref:F,className:Qn("ui-snacks",e),__css:te,variants:a,custom:{gutter:[v,W]},initial:"initial",animate:"animate",exit:"exit",...q,children:n.jsx(Q,{as:"ul",className:"ui-snacks__list",variants:c,custom:{height:j},initial:"initial",animate:"animate",exit:"exit",__css:{position:"relative",w:"100%"},...h,children:n.jsx(sn,{onExitComplete:()=>{r||i(!1)},children:B.map((y,b)=>{const E=d.createRef();return x.current.set(b,E),n.jsx(Yn,{ref:E,index:b,lastIndex:r-b-1,startIndex:w,variants:C,direction:f,...y},y.id)})})})}):null})}),ge={initial:({index:e,direction:t})=>({opacity:0,...e?{y:(t==="top"?-1:1)*16}:{}}),animate:({index:e})=>({opacity:1,y:0,transition:{delay:e?0:.4,duration:.4,ease:[.4,0,.2,1]}}),exit:{opacity:0,transition:{duration:.2,ease:[.4,0,1,1]}}},Yn=d.memo(X(({index:e,lastIndex:t,startIndex:a,direction:c,variants:h=ge,duration:o=null,message:F,onClose:B,onCloseComplete:g,style:r},x)=>{const[j,u]=d.useState(o),l=pe(),i=l?B:ie,S=()=>u(null),C=()=>u(o),f=a+e,I={position:"absolute",top:`calc(var(--ui-space) * ${c==="top"?t:e})`,left:0,right:0,zIndex:f,w:"100%",maxW:"100%",...r};return K(()=>{l||g==null||g()},[l]),K(()=>{u(o)},[o]),de(i,j),n.jsx(Xn.li,{ref:x,className:"ui-snacks__item",__css:I,children:n.jsx(Q,{className:"ui-snacks__item-inner",layout:!0,variants:h,custom:{index:e,lastIndex:t,direction:c},initial:"initial",animate:"animate",exit:"exit",onHoverStart:S,onHoverEnd:C,children:le(F,{index:e,onClose:i})})})}));Yn.displayName="SnackComponent";const Pe={title:"Hooks / useSnacks"},_=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},M=()=>{const{snack:e,snacks:t}=m({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},R=()=>{const{snack:e,snacks:t}=m({limit:5});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},D=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"lg"],negateMargin:!1,mb:"-md"}),n.jsx(k,{placeholder:"Input"})]})},N=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",duration:3e4})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},O=()=>{const{snack:e,snacks:t}=m({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"basic"}),children:"Add basic Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"solid"}),children:"Add solid Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"subtle"}),children:"Add subtle Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"top-accent"}),children:"Add top accent Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"left-accent"}),children:"Add left accent Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},U=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"oval"}}),children:"Add oval Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"grid"}}),children:"Add grid Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"puff"}}),children:"Add puff Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"dots"}}),children:"Add dots Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},V=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info"}),children:"Add info Snack"}),n.jsx(s,{colorScheme:"success",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success"}),children:"Add success Snack"}),n.jsx(s,{colorScheme:"warning",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning"}),children:"Add warning Snack"}),n.jsx(s,{colorScheme:"danger",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error"}),children:"Add danger Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading"}),children:"Add loading Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},L=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"green",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info",colorScheme:"green"}),children:"Add green Snack"}),n.jsx(s,{colorScheme:"purple",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success",colorScheme:"purple"}),children:"Add purple Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning",colorScheme:"gray"}),children:"Add gray Snack"}),n.jsx(s,{colorScheme:"pink",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error",colorScheme:"pink"}),children:"Add pink Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},T=()=>{const{snack:e,snacks:t}=m(),a=d.useRef(void 0),c=()=>{a.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},h=()=>{a.current&&e.close(a.current)},o=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:c,children:"Add Snack"}),n.jsx(s,{onClick:h,children:"Close last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:o,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},H=()=>{const{snack:e,snacks:t}=m(),a=d.useRef(void 0),c=()=>{a.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},h=()=>{a.current&&e.update(a.current,{title:"ベジータ",description:"よくも…よくも…オレの…ブルマを!!",colorScheme:"purple"})},o=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:c,children:"Add Snack"}),n.jsx(s,{onClick:h,children:"Update last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:o,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},$=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({component:()=>n.jsx(ke,{color:"white",py:3,px:4,bg:"purple.500",children:"ギャルのパンティーおくれーーーっ！！！！！"})})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},P=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",style:{w:"60%"}})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},z=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",isClosable:!1})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(A,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})};var on,rn,un;_.parameters={..._.parameters,docs:{...(on=_.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
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
}`,...(un=(rn=_.parameters)==null?void 0:rn.docs)==null?void 0:un.source}}};var ln,dn,pn;M.parameters={...M.parameters,docs:{...(ln=M.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(pn=(dn=M.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var kn,mn,An;R.parameters={...R.parameters,docs:{...(kn=R.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
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
}`,...(An=(mn=R.parameters)==null?void 0:mn.docs)==null?void 0:An.source}}};var hn,Sn,gn;D.parameters={...D.parameters,docs:{...(hn=D.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
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
}`,...(gn=(Sn=D.parameters)==null?void 0:Sn.docs)==null?void 0:gn.source}}};var Fn,Bn,Cn;N.parameters={...N.parameters,docs:{...(Fn=N.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
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
}`,...(Cn=(Bn=N.parameters)==null?void 0:Bn.docs)==null?void 0:Cn.source}}};var xn,jn,fn;O.parameters={...O.parameters,docs:{...(xn=O.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
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
}`,...(fn=(jn=O.parameters)==null?void 0:jn.docs)==null?void 0:fn.source}}};var In,vn,yn;U.parameters={...U.parameters,docs:{...(In=U.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
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
}`,...(yn=(vn=U.parameters)==null?void 0:vn.docs)==null?void 0:yn.source}}};var bn,En,wn;V.parameters={...V.parameters,docs:{...(bn=V.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
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
}`,...(wn=(En=V.parameters)==null?void 0:En.docs)==null?void 0:wn.source}}};var Wn,_n,Mn;L.parameters={...L.parameters,docs:{...(Wn=L.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(Mn=(_n=L.parameters)==null?void 0:_n.docs)==null?void 0:Mn.source}}};var Rn,Dn,Nn;T.parameters={...T.parameters,docs:{...(Rn=T.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
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
}`,...(Nn=(Dn=T.parameters)==null?void 0:Dn.docs)==null?void 0:Nn.source}}};var On,Un,Vn;H.parameters={...H.parameters,docs:{...(On=H.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(Vn=(Un=H.parameters)==null?void 0:Un.docs)==null?void 0:Vn.source}}};var Ln,Tn,Hn;$.parameters={...$.parameters,docs:{...(Ln=$.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(Jn=(qn=z.parameters)==null?void 0:qn.docs)==null?void 0:Jn.source}}};const ze=["basic","withDirection","withLimit","withGutter","withDuration","withVariant","withLoadingVariant","withStatus","withColorScheme","useClose","useUpdate","customComponent","customStyle","disabledClosable"];export{ze as __namedExportsOrder,_ as basic,$ as customComponent,P as customStyle,Pe as default,z as disabledClosable,T as useClose,H as useUpdate,L as withColorScheme,M as withDirection,N as withDuration,D as withGutter,R as withLimit,U as withLoadingVariant,V as withStatus,O as withVariant};
