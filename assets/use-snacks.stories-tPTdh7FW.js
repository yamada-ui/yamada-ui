import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{A as le,a as ie,b as de,c as ue}from"./alert-B63btnMF.js";import{C as pe}from"./close-button-ERbTtWXY.js";import{u as Zn,e as nn}from"./theme-provider-woLZZCt0.js";import{m as en,c as ne,b as ee,f as Q,B as ke,ab as me}from"./factory-CEsHZeW8.js";import{f as Y}from"./forward-ref-BmTAT9U5.js";import{u as he}from"./index-B9PLoIDO.js";import{u as tn}from"./index-COQaqARl.js";import{u as sn}from"./index-58rlMJFI.js";import{A as cn}from"./index-UcjmprJc.js";import{M as X}from"./motion-Cp3z4NrY.js";import{d as Se}from"./motion-CcTWI5_V.js";import{W as p}from"./flex-Chb4wwx3.js";import{B as s}from"./button-DfQHZeQx.js";import{I as k}from"./input-DyYWytHc.js";import{B as ge}from"./box-BMuUZYWP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-SoeERY4p.js";import"./use-component-style-BVTnHHBW.js";import"./loading-BHrGiIMj.js";import"./use-ripple-bahltC27.js";import"./extends-CF3RwP-h.js";import"./index-DvmWYllV.js";import"./form-control-C8wk9nRT.js";const an=e=>{const{component:t}=e;return c=>typeof t=="function"?t({...c,...e}):n.jsx(Ce,{...c,...e})};let on=0;const m=(e={})=>{const[t,a]=u.useState([]),{theme:c}=Zn(),g=u.useMemo(()=>{var l;return((l=c.__config.snacks)==null?void 0:l.options)??{}},[c]),r=u.useMemo(()=>en(g,e),[e,g]),{direction:f,startIndex:x,limit:C=3}=r,d=u.useCallback(l=>en(r,l),[r]),B=u.useMemo(()=>{const l=(o={})=>{o=d(o);const i=an(o);on+=1;let{id:S=on,duration:A,onCloseComplete:I,status:_,boxShadow:b,style:q}=o;const J={id:S,status:_,duration:A,message:i,onClose:()=>a(v=>v.filter(F=>F.id!==S)),onCloseComplete:I,boxShadow:b,style:q};return a(v=>[...v.splice(-1*((C??1/0)-1)),J]),S};return l.update=(o,i)=>{i=d(i),a(S=>S.map(A=>A.id===o?{...A,...i,message:an(i)}:A))},l.closeAll=()=>{a([])},l.close=o=>{a(i=>i.filter(S=>S.id!==o))},l.isActive=o=>!!t.find(i=>i.id===o),l},[t,C,d]),j=u.useMemo(()=>({direction:f,startIndex:x,items:t}),[f,x,t]);return{snack:B,snacks:j}},xe=["0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)","0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px -1px 2px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.2)"],Ce=Y(({variant:e="basic",colorScheme:t,status:a,icon:c,title:g,description:r,isClosable:f=!0,closeStrategy:x="button",boxShadow:C=xe,className:d,index:B,onClose:j},l)=>{const o=f&&(x==="button"||x==="both"),i=f&&(x==="element"||x==="both");return n.jsxs(le,{ref:l,className:ne("ui-snack",d),status:a,variant:e,colorScheme:t,alignItems:"start",boxShadow:B?C:void 0,pe:o?8:void 0,onClick:i?j:void 0,children:[n.jsx(ie,{variant:c==null?void 0:c.variant,className:"ui-snack__icon",...c!=null&&c.color?{color:c.color}:{},children:c==null?void 0:c.children}),n.jsxs(ee.div,{flex:"1",children:[g?n.jsx(de,{className:"ui-snack__title",lineClamp:1,children:g}):null,r?n.jsx(ue,{className:"ui-snack__desc",lineClamp:3,children:r}):null]}),o?n.jsx(pe,{className:"ui-snack__close-button",size:"sm",onClick:S=>{S.stopPropagation(),j==null||j()},position:"absolute",top:2,right:2}):null]})}),je={initial:{padding:0},animate:({gutter:e})=>({padding:`${e[0]} 0 ${e[1]}`,transition:{duration:.4}}),exit:{padding:0}},fe={initial:{opacity:1,height:0},animate:({height:e})=>({opacity:1,height:e,transition:{duration:.4}}),exit:{opacity:0,height:0}},h=Y(({className:e,snacks:t,containerVariants:a=je,listVariants:c=fe,listProps:g,...r},f)=>{const{items:x,...C}=t,d=x.length,B=u.useRef(new Map),[j,l]=u.useState(0),[o,i]=u.useState(!!d),{theme:S}=Zn(),{variants:A,direction:I="top",startIndex:_=0,gutter:b=[0,0],gap:q="fallback(4, 1rem)",negateMargin:Z=!0,...J}=u.useMemo(()=>({...C,...S.__config.snacks,...r}),[C,S,r]),v=tn("spaces",sn(b[0]))??0,F=tn("spaces",sn(b[1]))??0,se=nn(v).negate().toString(),ce=nn(F).negate().toString(),ae=!!d||o,oe={w:"100%",var:[{__prefix:"ui",name:"space",token:"spaces",value:q}],margin:Z?`${se} 0 ${ce}`:void 0};return u.useEffect(()=>{let y=0;if(!d)return;const w=[...B.current.values()].slice(0,d);for(const W of w){if(!W.current)continue;let{offsetHeight:K,offsetTop:re}=W.current;K+=re,K>y&&(y=K)}l(y)},[d,I]),Q(()=>{d&&i(!0)},[d]),n.jsx(cn,{initial:!1,children:ae?n.jsx(X,{ref:f,className:ne("ui-snacks",e),__css:oe,variants:a,custom:{gutter:[v,F]},initial:"initial",animate:"animate",exit:"exit",...J,children:n.jsx(X,{as:"ul",className:"ui-snacks__list",variants:c,custom:{height:j},initial:"initial",animate:"animate",exit:"exit",__css:{position:"relative",w:"100%"},...g,children:n.jsx(cn,{onExitComplete:()=>{d||i(!1)},children:x.map((y,w)=>{const W=u.createRef();return B.current.set(w,W),n.jsx(te,{ref:W,index:w,lastIndex:d-w-1,startIndex:_,variants:A,direction:I,...y},y.id)})})})}):null})}),Ae={initial:({index:e,direction:t})=>({opacity:0,...e?{y:(t==="top"?-1:1)*16}:{}}),animate:({index:e})=>({opacity:1,y:0,transition:{delay:e?0:.4,duration:.4,ease:[.4,0,.2,1]}}),exit:{opacity:0,transition:{duration:.2,ease:[.4,0,1,1]}}},te=u.memo(Y(({index:e,lastIndex:t,startIndex:a,direction:c,variants:g=Ae,duration:r=null,message:f,onClose:x,onCloseComplete:C,style:d},B)=>{const[j,l]=u.useState(r),o=Se(),i=o?x:me,S=()=>l(null),A=()=>l(r),I=a+e,b={position:"absolute",top:`calc(var(--ui-space) * ${c==="top"?t:e})`,left:0,right:0,zIndex:I,w:"100%",maxW:"100%",...d};return Q(()=>{o||C==null||C()},[o]),Q(()=>{l(r)},[r]),he(i,j),n.jsx(ee.li,{ref:B,className:"ui-snacks__item",__css:b,children:n.jsx(X,{className:"ui-snacks__item-inner",layout:!0,variants:g,custom:{index:e,lastIndex:t,direction:c},initial:"initial",animate:"animate",exit:"exit",onHoverStart:S,onHoverEnd:A,children:ke(f,{index:e,onClose:i})})})}));te.displayName="SnackComponent";const Je={title:"Hooks / useSnacks"},M=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},E=()=>{const{snack:e,snacks:t}=m({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},R=()=>{const{snack:e,snacks:t}=m({limit:5});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},N=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"lg"],negateMargin:!1,mb:"-md"}),n.jsx(k,{placeholder:"Input"})]})},O=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",duration:3e4})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},U=()=>{const{snack:e,snacks:t}=m({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"basic"}),children:"Add basic Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"solid"}),children:"Add solid Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"subtle"}),children:"Add subtle Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"top-accent"}),children:"Add top accent Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"left-accent"}),children:"Add left accent Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},V=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"oval"}}),children:"Add oval Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"grid"}}),children:"Add grid Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"puff"}}),children:"Add puff Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"dots"}}),children:"Add dots Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},D=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info"}),children:"Add info Snack"}),n.jsx(s,{colorScheme:"success",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success"}),children:"Add success Snack"}),n.jsx(s,{colorScheme:"warning",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning"}),children:"Add warning Snack"}),n.jsx(s,{colorScheme:"danger",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error"}),children:"Add danger Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading"}),children:"Add loading Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},L=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"green",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info",colorScheme:"green"}),children:"Add green Snack"}),n.jsx(s,{colorScheme:"purple",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success",colorScheme:"purple"}),children:"Add purple Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning",colorScheme:"gray"}),children:"Add gray Snack"}),n.jsx(s,{colorScheme:"pink",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error",colorScheme:"pink"}),children:"Add pink Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},T=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",closeStrategy:"element"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},H=()=>{const{snack:e,snacks:t}=m(),a=u.useRef(void 0),c=()=>{a.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},g=()=>{a.current&&e.close(a.current)},r=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:c,children:"Add Snack"}),n.jsx(s,{onClick:g,children:"Close last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:r,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},$=()=>{const{snack:e,snacks:t}=m(),a=u.useRef(void 0),c=()=>{a.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},g=()=>{a.current&&e.update(a.current,{title:"ベジータ",description:"よくも…よくも…オレの…ブルマを!!",colorScheme:"purple"})},r=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:c,children:"Add Snack"}),n.jsx(s,{onClick:g,children:"Update last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:r,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},P=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({component:()=>n.jsx(ge,{color:"white",py:3,px:4,bg:"purple.500",children:"ギャルのパンティーおくれーーーっ！！！！！"})})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},z=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",style:{w:"60%"}})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},G=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",isClosable:!1})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})};var rn,ln,dn;M.parameters={...M.parameters,docs:{...(rn=M.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
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
}`,...(dn=(ln=M.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var un,pn,kn;E.parameters={...E.parameters,docs:{...(un=E.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(kn=(pn=E.parameters)==null?void 0:pn.docs)==null?void 0:kn.source}}};var mn,hn,Sn;R.parameters={...R.parameters,docs:{...(mn=R.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
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
}`,...(Sn=(hn=R.parameters)==null?void 0:hn.docs)==null?void 0:Sn.source}}};var gn,xn,Cn;N.parameters={...N.parameters,docs:{...(gn=N.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
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
}`,...(Cn=(xn=N.parameters)==null?void 0:xn.docs)==null?void 0:Cn.source}}};var jn,fn,An;O.parameters={...O.parameters,docs:{...(jn=O.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
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
}`,...(An=(fn=O.parameters)==null?void 0:fn.docs)==null?void 0:An.source}}};var Bn,In,bn;U.parameters={...U.parameters,docs:{...(Bn=U.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
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
}`,...(bn=(In=U.parameters)==null?void 0:In.docs)==null?void 0:bn.source}}};var vn,yn,wn;V.parameters={...V.parameters,docs:{...(vn=V.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
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
}`,...(wn=(yn=V.parameters)==null?void 0:yn.docs)==null?void 0:wn.source}}};var Wn,_n,Fn;D.parameters={...D.parameters,docs:{...(Wn=D.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(Fn=(_n=D.parameters)==null?void 0:_n.docs)==null?void 0:Fn.source}}};var Mn,En,Rn;L.parameters={...L.parameters,docs:{...(Mn=L.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
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
}`,...(Rn=(En=L.parameters)==null?void 0:En.docs)==null?void 0:Rn.source}}};var Nn,On,Un;T.parameters={...T.parameters,docs:{...(Nn=T.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
          closeStrategy: "element"
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
}`,...(Un=(On=T.parameters)==null?void 0:On.docs)==null?void 0:Un.source}}};var Vn,Dn,Ln;H.parameters={...H.parameters,docs:{...(Vn=H.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
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
}`,...(Ln=(Dn=H.parameters)==null?void 0:Dn.docs)==null?void 0:Ln.source}}};var Tn,Hn,$n;$.parameters={...$.parameters,docs:{...(Tn=$.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
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
}`,...($n=(Hn=$.parameters)==null?void 0:Hn.docs)==null?void 0:$n.source}}};var Pn,zn,Gn;P.parameters={...P.parameters,docs:{...(Pn=P.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
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
}`,...(Gn=(zn=P.parameters)==null?void 0:zn.docs)==null?void 0:Gn.source}}};var qn,Jn,Kn;z.parameters={...z.parameters,docs:{...(qn=z.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
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
}`,...(Kn=(Jn=z.parameters)==null?void 0:Jn.docs)==null?void 0:Kn.source}}};var Qn,Xn,Yn;G.parameters={...G.parameters,docs:{...(Qn=G.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Xn=G.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};const Ke=["basic","withDirection","withLimit","withGutter","withDuration","withVariant","withLoadingVariant","withStatus","withColorScheme","withCloseStrategy","useClose","useUpdate","customComponent","customStyle","disabledClosable"];export{Ke as __namedExportsOrder,M as basic,P as customComponent,z as customStyle,Je as default,G as disabledClosable,H as useClose,$ as useUpdate,T as withCloseStrategy,L as withColorScheme,E as withDirection,O as withDuration,N as withGutter,R as withLimit,V as withLoadingVariant,D as withStatus,U as withVariant};
