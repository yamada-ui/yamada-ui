import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{A as le,a as ie,b as de,c as ue}from"./alert-CB0VXH-D.js";import{C as pe}from"./close-button-B2BQ0zaH.js";import{u as Yn,e as Z}from"./theme-provider-Bovkq8wz.js";import{m as nn,c as Zn,b as ne,f as Q,B as ke,ab as me}from"./factory-DijdQyQR.js";import{f as ee}from"./forward-ref-BmTAT9U5.js";import{u as he}from"./index-D77CvyHp.js";import{u as en}from"./index-CBA1NDKY.js";import{u as tn}from"./index-Mcu5Re2E.js";import{A as sn}from"./index-Ms_xn5rh.js";import{m as Se,M as X}from"./motion-CN2SKHl7.js";import{d as ge}from"./motion-Bd6WkMzw.js";import{W as p}from"./flex-D8IuV5pI.js";import{B as s}from"./button-BD6Gh7Mm.js";import{I as k}from"./input-D0IxNqER.js";import{B as xe}from"./box-CD6bw-_E.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BK_bL1Yg.js";import"./use-component-style-Bw-pmo7H.js";import"./loading-CnB_IFTn.js";import"./use-ripple-BJsxvLIA.js";import"./extends-CF3RwP-h.js";import"./index-9ArwFQOE.js";import"./form-control-DW6UA4eT.js";const cn=e=>{const{component:t}=e;return c=>typeof t=="function"?t({...c,...e}):n.jsx(je,{...c,...e})};let an=0;const m=(e={})=>{const[t,o]=u.useState([]),{theme:c}=Yn(),g=u.useMemo(()=>{var l,a;return((a=(l=c.__config)==null?void 0:l.snacks)==null?void 0:a.options)??{}},[c]),r=u.useMemo(()=>nn(g,e),[e,g]),{direction:f,startIndex:x,limit:C=3}=r,d=u.useCallback(l=>nn(r,l),[r]),I=u.useMemo(()=>{const l=(a={})=>{a=d(a);const i=cn(a);an+=1;let{id:S=an,duration:A,onCloseComplete:b,status:_,boxShadow:v,style:q}=a;const J={id:S,status:_,duration:A,message:i,onClose:()=>o(y=>y.filter(F=>F.id!==S)),onCloseComplete:b,boxShadow:v,style:q};return o(y=>[...y.splice(-1*((C??1/0)-1)),J]),S};return l.update=(a,i)=>{i=d(i),o(S=>S.map(A=>A.id===a?{...A,...i,message:cn(i)}:A))},l.closeAll=()=>{o([])},l.close=a=>{o(i=>i.filter(S=>S.id!==a))},l.isActive=a=>!!t.find(i=>i.id===a),l},[t,C,d]),j=u.useMemo(()=>({direction:f,startIndex:x,items:t}),[f,x,t]);return{snack:I,snacks:j}},Ce=["0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)","0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px -1px 2px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.2)"],je=ee(({variant:e="basic",colorScheme:t,status:o,icon:c,title:g,description:r,isClosable:f=!0,closeStrategy:x="button",boxShadow:C=Ce,className:d,index:I,onClose:j},l)=>{const a=f&&(x==="button"||x==="both"),i=f&&(x==="element"||x==="both");return n.jsxs(le,{ref:l,className:Zn("ui-snack",d),status:o,variant:e,colorScheme:t,alignItems:"start",boxShadow:I?C:void 0,pe:a?8:void 0,onClick:i?j:void 0,children:[n.jsx(ie,{variant:c==null?void 0:c.variant,className:"ui-snack__icon",...c!=null&&c.color?{color:c.color}:{},children:c==null?void 0:c.children}),n.jsxs(ne.div,{flex:"1",children:[g?n.jsx(de,{className:"ui-snack__title",lineClamp:1,children:g}):null,r?n.jsx(ue,{className:"ui-snack__desc",lineClamp:3,children:r}):null]}),a?n.jsx(pe,{className:"ui-snack__close-button",size:"sm",onClick:S=>{S.stopPropagation(),j==null||j()},position:"absolute",top:2,right:2}):null]})}),fe={initial:{padding:0},animate:({gutter:e})=>({padding:`${e[0]} 0 ${e[1]}`,transition:{duration:.4}}),exit:{padding:0}},Ae={initial:{opacity:1,height:0},animate:({height:e})=>({opacity:1,height:e,transition:{duration:.4}}),exit:{opacity:0,height:0}},h=Se(({className:e,snacks:t,containerVariants:o=fe,listVariants:c=Ae,listProps:g,...r},f)=>{const{items:x,...C}=t,d=x.length,I=u.useRef(new Map),[j,l]=u.useState(0),[a,i]=u.useState(!!d),{theme:S}=Yn(),{variants:A,direction:b="top",startIndex:_=0,gutter:v=[0,0],gap:q="fallback(4, 1rem)",negateMargin:Y=!0,...J}=u.useMemo(()=>{var B;return{...C,...(B=S.__config)==null?void 0:B.snacks,...r}},[C,S,r]),y=en("spaces",tn(v[0]))??0,F=en("spaces",tn(v[1]))??0,se=Z(y).negate().toString(),ce=Z(F).negate().toString(),ae=!!d||a,oe={w:"100%",var:[{__prefix:"ui",name:"space",token:"spaces",value:q}],margin:Y?`${se} 0 ${ce}`:void 0};return u.useEffect(()=>{let B=0;if(!d)return;const w=[...I.current.values()].slice(0,d);for(const W of w){if(!W.current)continue;let{offsetHeight:K,offsetTop:re}=W.current;K+=re,K>B&&(B=K)}l(B)},[d,b]),Q(()=>{d&&i(!0)},[d]),n.jsx(sn,{initial:!1,children:ae?n.jsx(X,{ref:f,className:Zn("ui-snacks",e),__css:oe,variants:o,custom:{gutter:[y,F]},initial:"initial",animate:"animate",exit:"exit",...J,children:n.jsx(X,{as:"ul",className:"ui-snacks__list",variants:c,custom:{height:j},initial:"initial",animate:"animate",exit:"exit",__css:{position:"relative",w:"100%"},...g,children:n.jsx(sn,{onExitComplete:()=>{d||i(!1)},children:x.map((B,w)=>{const W=u.createRef();return I.current.set(w,W),n.jsx(te,{ref:W,index:w,lastIndex:d-w-1,startIndex:_,variants:A,direction:b,...B},B.id)})})})}):null})}),Be={initial:({index:e,direction:t})=>({opacity:0,...e?{y:(t==="top"?-1:1)*16}:{}}),animate:({index:e})=>({opacity:1,y:0,transition:{delay:e?0:.4,duration:.4,ease:[.4,0,.2,1]}}),exit:{opacity:0,transition:{duration:.2,ease:[.4,0,1,1]}}},te=u.memo(ee(({index:e,lastIndex:t,startIndex:o,direction:c,variants:g=Be,duration:r=null,message:f,onClose:x,onCloseComplete:C,style:d},I)=>{const[j,l]=u.useState(r),a=ge(),i=a?x:me,S=()=>l(null),A=()=>l(r),b=o+e,v={position:"absolute",top:`calc(var(--ui-space) * ${c==="top"?t:e})`,left:0,right:0,zIndex:b,w:"100%",maxW:"100%",...d};return Q(()=>{a||C==null||C()},[a]),Q(()=>{l(r)},[r]),he(i,j),n.jsx(ne.li,{ref:I,className:"ui-snacks__item",__css:v,children:n.jsx(X,{className:"ui-snacks__item-inner",layout:!0,variants:g,custom:{index:e,lastIndex:t,direction:c},initial:"initial",animate:"animate",exit:"exit",onHoverStart:S,onHoverEnd:A,children:ke(f,{index:e,onClose:i})})})}));te.displayName="SnackComponent";const Ke={title:"Hooks / useSnacks"},M=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},R=()=>{const{snack:e,snacks:t}=m({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},E=()=>{const{snack:e,snacks:t}=m({limit:5});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},N=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"lg"],negateMargin:!1,mb:"-md"}),n.jsx(k,{placeholder:"Input"})]})},O=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",duration:3e4})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},U=()=>{const{snack:e,snacks:t}=m({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"basic"}),children:"Add basic Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"solid"}),children:"Add solid Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"subtle"}),children:"Add subtle Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"top-accent"}),children:"Add top accent Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"left-accent"}),children:"Add left accent Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},V=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"oval"}}),children:"Add oval Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"grid"}}),children:"Add grid Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"puff"}}),children:"Add puff Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"dots"}}),children:"Add dots Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},D=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info"}),children:"Add info Snack"}),n.jsx(s,{colorScheme:"success",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success"}),children:"Add success Snack"}),n.jsx(s,{colorScheme:"warning",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning"}),children:"Add warning Snack"}),n.jsx(s,{colorScheme:"danger",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error"}),children:"Add danger Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading"}),children:"Add loading Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},L=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"green",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info",colorScheme:"green"}),children:"Add green Snack"}),n.jsx(s,{colorScheme:"purple",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success",colorScheme:"purple"}),children:"Add purple Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning",colorScheme:"gray"}),children:"Add gray Snack"}),n.jsx(s,{colorScheme:"pink",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error",colorScheme:"pink"}),children:"Add pink Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},T=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",closeStrategy:"element"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},H=()=>{const{snack:e,snacks:t}=m(),o=u.useRef(void 0),c=()=>{o.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},g=()=>{o.current&&e.close(o.current)},r=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:c,children:"Add Snack"}),n.jsx(s,{onClick:g,children:"Close last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:r,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},$=()=>{const{snack:e,snacks:t}=m(),o=u.useRef(void 0),c=()=>{o.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},g=()=>{o.current&&e.update(o.current,{title:"ベジータ",description:"よくも…よくも…オレの…ブルマを!!",colorScheme:"purple"})},r=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:c,children:"Add Snack"}),n.jsx(s,{onClick:g,children:"Update last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:r,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},P=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({component:()=>n.jsx(xe,{color:"white",py:3,px:4,bg:"purple.500",children:"ギャルのパンティーおくれーーーっ！！！！！"})})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},z=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",style:{w:"60%"}})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},G=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",isClosable:!1})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})};var on,rn,ln;M.parameters={...M.parameters,docs:{...(on=M.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
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
}`,...(In=(Bn=U.parameters)==null?void 0:Bn.docs)==null?void 0:In.source}}};var bn,vn,yn;V.parameters={...V.parameters,docs:{...(bn=V.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
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
}`,...(yn=(vn=V.parameters)==null?void 0:vn.docs)==null?void 0:yn.source}}};var wn,Wn,_n;D.parameters={...D.parameters,docs:{...(wn=D.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
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
}`,...(Dn=(Vn=H.parameters)==null?void 0:Vn.docs)==null?void 0:Dn.source}}};var Ln,Tn,Hn;$.parameters={...$.parameters,docs:{...(Ln=$.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(Hn=(Tn=$.parameters)==null?void 0:Tn.docs)==null?void 0:Hn.source}}};var $n,Pn,zn;P.parameters={...P.parameters,docs:{...($n=P.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
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
}`,...(Jn=(qn=z.parameters)==null?void 0:qn.docs)==null?void 0:Jn.source}}};var Kn,Qn,Xn;G.parameters={...G.parameters,docs:{...(Kn=G.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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
}`,...(Xn=(Qn=G.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};const Qe=["basic","withDirection","withLimit","withGutter","withDuration","withVariant","withLoadingVariant","withStatus","withColorScheme","withCloseStrategy","useClose","useUpdate","customComponent","customStyle","disabledClosable"];export{Qe as __namedExportsOrder,M as basic,P as customComponent,z as customStyle,Ke as default,G as disabledClosable,H as useClose,$ as useUpdate,T as withCloseStrategy,L as withColorScheme,R as withDirection,O as withDuration,N as withGutter,E as withLimit,V as withLoadingVariant,D as withStatus,U as withVariant};
