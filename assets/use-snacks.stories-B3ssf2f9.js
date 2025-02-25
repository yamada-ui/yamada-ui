import{j as n}from"./jsx-runtime-BpbtHYHY.js";import{r as m}from"./index-BwPxMuoB.js";import{A as re,a as le,b as ie,c as de}from"./alert-n1mY6WpW.js";import{C as ue}from"./close-button-DMbJ1ePB.js";import{u as Yn,b as en}from"./theme-provider-ChqdwXGn.js";import{o as Q,c as Zn,I as pe,b as ne,J as ke,m as tn}from"./factory-DbNU74ts.js";import{f as ee}from"./forward-ref-Ukjd1cIW.js";import{u as me}from"./index-Dog50vdO.js";import{A as sn}from"./index-buBh1kfV.js";import{d as Se}from"./proxy-BdCiNrpl.js";import{m as he}from"./forward-ref-Cy2nAbAn.js";import{m as X}from"./factory-DGyI5Ya3.js";import{m as ge}from"./memo-CPHdbx3K.js";import{W as S}from"./flex-BYE4mzTi.js";import{B as s}from"./button-CqSjNDtY.js";import{I as h}from"./input-D8w53ljh.js";import{B as xe}from"./box-CKfluZfz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-Dk5VwDTI.js";import"./use-component-style-CpB_lyT3.js";import"./use-var-DlbRU9j0.js";import"./loading-BVFohscl.js";import"./use-ripple-HQjPVeUd.js";import"./form-control-DgcE1-oN.js";const Ce={animate:({gutter:e})=>({padding:`${e[0]} 0 ${e[1]}`,transition:{duration:.4}}),exit:{padding:0},initial:{padding:0}},je={animate:({height:e})=>({height:e,opacity:1,transition:{duration:.4}}),exit:{height:0,opacity:0},initial:{height:0,opacity:1}},u=he(({className:e,containerVariants:t=Ce,listVariants:c=je,snacks:r,listProps:p,...k},d)=>{const{items:A,...C}=r,o=A.length,B=m.useRef(new Map),[j,l]=m.useState(0),[a,i]=m.useState(!!o),{theme:x}=Yn(),{direction:f="top",gap:v="fallback(4, 1rem)",gutter:y=[0,0],negateMargin:_=!0,startIndex:J=0,variants:nn,...q}=m.useMemo(()=>{var I;return{...C,...(I=x.__config)==null?void 0:I.snacks,...k}},[C,x,k]),b="var(--ui-top)",F="var(--ui-bottom)",te=en(b).negate().toString(),se=en(F).negate().toString(),ce=!!o||a,ae={margin:_?`${te} 0 ${se}`:void 0,vars:[{name:"gap",token:"spaces",value:v},{name:"top",token:"spaces",value:y[0]||"0px",__prefix:"ui"},{name:"bottom",token:"spaces",value:y[1]||"0px",__prefix:"ui"}],w:"100%"};return m.useEffect(()=>{let I=0;if(!o)return;const w=[...B.current.values()].slice(0,o);for(const W of w){if(!W.current)continue;let{offsetHeight:K,offsetTop:oe}=W.current;K+=oe,K>I&&(I=K)}l(I)},[o,f]),Q(()=>{o&&i(!0)},[o]),n.jsx(sn,{initial:!1,children:ce?n.jsx(X.div,{ref:d,className:Zn("ui-snacks",e),animate:"animate",custom:{gutter:[b,F]},exit:"exit",initial:"initial",variants:t,__css:ae,...q,children:n.jsx(X.ul,{className:"ui-snacks__list",animate:"animate",custom:{height:j},exit:"exit",initial:"initial",variants:c,__css:{position:"relative",w:"100%"},...p,children:n.jsx(sn,{onExitComplete:()=>{o||i(!1)},children:A.map((I,w)=>{const W=m.createRef();return B.current.set(w,W),n.jsx(Y,{ref:W,direction:f,index:w,lastIndex:o-w-1,startIndex:J,variants:nn,...I},I.id)})})})}):null})});u.displayName="Snacks";u.__ui__="Snacks";const fe={animate:({index:e})=>({opacity:1,transition:{delay:e?0:.4,duration:.4,ease:[.4,0,.2,1]},y:0}),exit:{opacity:0,transition:{duration:.2,ease:[.4,0,1,1]}},initial:({direction:e,index:t})=>({opacity:0,...t?{y:(e==="top"?-1:1)*16}:{}})},Y=ge(ee(({style:e,direction:t,duration:c=null,index:r,lastIndex:p,message:k,startIndex:d,variants:A=fe,onClose:C,onCloseComplete:o},B)=>{const[j,l]=m.useState(c),a=Se(),i=a?C:pe,x=()=>l(null),f=()=>l(c),v=d+r,_={left:0,maxW:"100%",position:"absolute",right:0,top:`calc($gap * ${t==="top"?p:r})`,w:"100%",zIndex:v,...e};return Q(()=>{a||o==null||o()},[a]),Q(()=>{l(c)},[c]),me(i,j),n.jsx(ne.li,{ref:B,className:"ui-snacks__item",__css:_,children:n.jsx(X.div,{className:"ui-snacks__item-inner",animate:"animate",custom:{direction:t,index:r,lastIndex:p},exit:"exit",initial:"initial",layout:!0,variants:A,onHoverEnd:f,onHoverStart:x,children:ke(k,{index:r,onClose:i})})})}));Y.displayName="SnackComponent";Y.__ui__="SnackComponent";const cn=e=>{const{component:t}=e;return r=>typeof t=="function"?t({...r,...e}):n.jsx(Z,{...r,...e})};let an=0;const g=(e={})=>{const[t,c]=m.useState([]),{theme:r}=Yn(),p=m.useMemo(()=>{var l,a;return((a=(l=r.__config)==null?void 0:l.snacks)==null?void 0:a.options)??{}},[r]),k=m.useMemo(()=>tn(p,e),[e,p]),{direction:d,limit:A=3,startIndex:C}=k,o=m.useCallback(l=>tn(k,l),[k]),B=m.useMemo(()=>{const l=(a={})=>{a=o(a);const i=cn(a);an+=1;const{id:x=an,style:f,boxShadow:v,duration:y,status:_,onCloseComplete:J}=a,q={id:x,style:f,boxShadow:v,duration:y,message:i,status:_,onClose:()=>c(b=>b.filter(F=>F.id!==x)),onCloseComplete:J};return c(b=>[...b.splice(-1*((A??1/0)-1)),q]),x};return l.update=(a,i)=>{i=o(i),c(x=>x.map(f=>f.id===a?{...f,...i,message:cn(i)}:f))},l.closeAll=()=>{c([])},l.close=a=>{c(i=>i.filter(x=>x.id!==a))},l.isActive=a=>!!t.find(i=>i.id===a),l},[t,A,o]),j=m.useMemo(()=>({direction:d,items:t,startIndex:C}),[d,C,t]);return{snack:B,snacks:j}},Ae=["0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)","0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px -1px 2px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.2)"],Z=ee(({className:e,colorScheme:t,variant:c="basic",boxShadow:r=Ae,closeStrategy:p="button",description:k,icon:d,index:A,isClosable:C=!0,status:o,title:B,onClose:j},l)=>{const a=C&&(p==="button"||p==="both"),i=C&&(p==="element"||p==="both");return n.jsxs(re,{ref:l,className:Zn("ui-snack",e),colorScheme:t,variant:c,alignItems:"start",boxShadow:A?r:void 0,pe:a?8:void 0,status:o,onClick:i?j:void 0,children:[n.jsx(le,{className:"ui-snack__icon",variant:d==null?void 0:d.variant,...d!=null&&d.color?{color:d.color}:{},children:d==null?void 0:d.children}),n.jsxs(ne.div,{flex:"1",children:[B?n.jsx(ie,{className:"ui-snack__title",lineClamp:1,children:B}):null,k?n.jsx(de,{className:"ui-snack__desc",lineClamp:3,children:k}):null]}),a?n.jsx(ue,{className:"ui-snack__close-button",size:"sm",position:"absolute",right:2,top:2,onClick:x=>{x.stopPropagation(),j==null||j()}}):null]})});Z.displayName="Snack";Z.__ui__="Snack";const Je={title:"Hooks / useSnacks"},M=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},N=()=>{const{snack:e,snacks:t}=g({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},R=()=>{const{snack:e,snacks:t}=g({limit:5});return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},E=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"lg"],mb:"-md",negateMargin:!1,snacks:t}),n.jsx(h,{placeholder:"Input"})]})},O=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",duration:3e4,title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},U=()=>{const{snack:e,snacks:t}=g({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{onClick:()=>e({variant:"basic",description:"オッス！オラ悟空！",title:"孫悟空"}),children:"Add basic Snack"}),n.jsx(s,{onClick:()=>e({variant:"solid",description:"オッス！オラ悟空！",title:"孫悟空"}),children:"Add solid Snack"}),n.jsx(s,{onClick:()=>e({variant:"subtle",description:"オッス！オラ悟空！",title:"孫悟空"}),children:"Add subtle Snack"}),n.jsx(s,{onClick:()=>e({variant:"top-accent",description:"オッス！オラ悟空！",title:"孫悟空"}),children:"Add top accent Snack"}),n.jsx(s,{onClick:()=>e({variant:"left-accent",description:"オッス！オラ悟空！",title:"孫悟空"}),children:"Add left accent Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},V=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{onClick:()=>e({variant:"subtle",description:"オッス！オラ悟空！",icon:{variant:"oval"},status:"loading",title:"孫悟空"}),children:"Add oval Snack"}),n.jsx(s,{onClick:()=>e({variant:"solid",description:"オッス！オラ悟空！",icon:{variant:"grid"},status:"loading",title:"孫悟空"}),children:"Add grid Snack"}),n.jsx(s,{onClick:()=>e({variant:"subtle",description:"オッス！オラ悟空！",icon:{variant:"puff"},status:"loading",title:"孫悟空"}),children:"Add puff Snack"}),n.jsx(s,{onClick:()=>e({variant:"solid",description:"オッス！オラ悟空！",icon:{variant:"dots"},status:"loading",title:"孫悟空"}),children:"Add dots Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},D=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>e({description:"オッス！オラ悟空！",status:"info",title:"孫悟空"}),children:"Add info Snack"}),n.jsx(s,{colorScheme:"success",onClick:()=>e({description:"オッス！オラ悟空！",status:"success",title:"孫悟空"}),children:"Add success Snack"}),n.jsx(s,{colorScheme:"warning",onClick:()=>e({description:"オッス！オラ悟空！",status:"warning",title:"孫悟空"}),children:"Add warning Snack"}),n.jsx(s,{colorScheme:"danger",onClick:()=>e({description:"オッス！オラ悟空！",status:"error",title:"孫悟空"}),children:"Add danger Snack"}),n.jsx(s,{onClick:()=>e({description:"オッス！オラ悟空！",status:"loading",title:"孫悟空"}),children:"Add loading Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},L=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"green",onClick:()=>e({colorScheme:"green",description:"オッス！オラ悟空！",status:"info",title:"孫悟空"}),children:"Add green Snack"}),n.jsx(s,{colorScheme:"purple",onClick:()=>e({colorScheme:"purple",description:"オッス！オラ悟空！",status:"success",title:"孫悟空"}),children:"Add purple Snack"}),n.jsx(s,{onClick:()=>e({colorScheme:"gray",description:"オッス！オラ悟空！",status:"warning",title:"孫悟空"}),children:"Add gray Snack"}),n.jsx(s,{colorScheme:"pink",onClick:()=>e({colorScheme:"pink",description:"オッス！オラ悟空！",status:"error",title:"孫悟空"}),children:"Add pink Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},$=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({closeStrategy:"element",description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},H=()=>{const{snack:e,snacks:t}=g(),c=m.useRef(void 0),r=()=>{c.current=e({description:"オッス！オラ悟空！",title:"孫悟空"})},p=()=>{c.current&&e.close(c.current)},k=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:r,children:"Add Snack"}),n.jsx(s,{onClick:p,children:"Close last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:k,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},T=()=>{const{snack:e,snacks:t}=g(),c=m.useRef(void 0),r=()=>{c.current=e({description:"オッス！オラ悟空！",title:"孫悟空"})},p=()=>{c.current&&e.update(c.current,{colorScheme:"purple",description:"よくも…よくも…オレの…ブルマを!!",title:"ベジータ"})},k=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:r,children:"Add Snack"}),n.jsx(s,{onClick:p,children:"Update last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:k,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},P=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({component:()=>n.jsx(xe,{bg:"purple.500",color:"white",px:4,py:3,children:"ギャルのパンティーおくれーーーっ！！！！！"})})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},z=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({style:{w:"60%"},description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},G=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(S,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",isClosable:!1,title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(u,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})};var on,rn,ln;M.parameters={...M.parameters,docs:{...(on=M.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          description: "オッス！オラ悟空！",
          title: "孫悟空"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(ln=(rn=M.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var dn,un,pn;N.parameters={...N.parameters,docs:{...(dn=N.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
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
          description: "オッス！オラ悟空！",
          title: "孫悟空"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(pn=(un=N.parameters)==null?void 0:un.docs)==null?void 0:pn.source}}};var kn,mn,Sn;R.parameters={...R.parameters,docs:{...(kn=R.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
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
          description: "オッス！オラ悟空！",
          title: "孫悟空"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(Sn=(mn=R.parameters)==null?void 0:mn.docs)==null?void 0:Sn.source}}};var hn,gn,xn;E.parameters={...E.parameters,docs:{...(hn=E.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          description: "オッス！オラ悟空！",
          title: "孫悟空"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "lg"]} mb="-md" negateMargin={false} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(xn=(gn=E.parameters)==null?void 0:gn.docs)==null?void 0:xn.source}}};var Cn,jn,fn;O.parameters={...O.parameters,docs:{...(Cn=O.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          description: "オッス！オラ悟空！",
          duration: 30000,
          title: "孫悟空"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

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
        variant: "basic",
        description: "オッス！オラ悟空！",
        title: "孫悟空"
      })}>
          Add basic Snack
        </Button>

        <Button onClick={() => snack({
        variant: "solid",
        description: "オッス！オラ悟空！",
        title: "孫悟空"
      })}>
          Add solid Snack
        </Button>

        <Button onClick={() => snack({
        variant: "subtle",
        description: "オッス！オラ悟空！",
        title: "孫悟空"
      })}>
          Add subtle Snack
        </Button>

        <Button onClick={() => snack({
        variant: "top-accent",
        description: "オッス！オラ悟空！",
        title: "孫悟空"
      })}>
          Add top accent Snack
        </Button>

        <Button onClick={() => snack({
        variant: "left-accent",
        description: "オッス！オラ悟空！",
        title: "孫悟空"
      })}>
          Add left accent Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

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
        variant: "subtle",
        description: "オッス！オラ悟空！",
        icon: {
          variant: "oval"
        },
        status: "loading",
        title: "孫悟空"
      })}>
          Add oval Snack
        </Button>

        <Button onClick={() => snack({
        variant: "solid",
        description: "オッス！オラ悟空！",
        icon: {
          variant: "grid"
        },
        status: "loading",
        title: "孫悟空"
      })}>
          Add grid Snack
        </Button>

        <Button onClick={() => snack({
        variant: "subtle",
        description: "オッス！オラ悟空！",
        icon: {
          variant: "puff"
        },
        status: "loading",
        title: "孫悟空"
      })}>
          Add puff Snack
        </Button>

        <Button onClick={() => snack({
        variant: "solid",
        description: "オッス！オラ悟空！",
        icon: {
          variant: "dots"
        },
        status: "loading",
        title: "孫悟空"
      })}>
          Add dots Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(yn=(vn=V.parameters)==null?void 0:vn.docs)==null?void 0:yn.source}}};var _n,wn,Wn;D.parameters={...D.parameters,docs:{...(_n=D.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => snack({
        description: "オッス！オラ悟空！",
        status: "info",
        title: "孫悟空"
      })}>
          Add info Snack
        </Button>

        <Button colorScheme="success" onClick={() => snack({
        description: "オッス！オラ悟空！",
        status: "success",
        title: "孫悟空"
      })}>
          Add success Snack
        </Button>

        <Button colorScheme="warning" onClick={() => snack({
        description: "オッス！オラ悟空！",
        status: "warning",
        title: "孫悟空"
      })}>
          Add warning Snack
        </Button>

        <Button colorScheme="danger" onClick={() => snack({
        description: "オッス！オラ悟空！",
        status: "error",
        title: "孫悟空"
      })}>
          Add danger Snack
        </Button>

        <Button onClick={() => snack({
        description: "オッス！オラ悟空！",
        status: "loading",
        title: "孫悟空"
      })}>
          Add loading Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(Wn=(wn=D.parameters)==null?void 0:wn.docs)==null?void 0:Wn.source}}};var Fn,Mn,Nn;L.parameters={...L.parameters,docs:{...(Fn=L.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="green" onClick={() => snack({
        colorScheme: "green",
        description: "オッス！オラ悟空！",
        status: "info",
        title: "孫悟空"
      })}>
          Add green Snack
        </Button>

        <Button colorScheme="purple" onClick={() => snack({
        colorScheme: "purple",
        description: "オッス！オラ悟空！",
        status: "success",
        title: "孫悟空"
      })}>
          Add purple Snack
        </Button>

        <Button onClick={() => snack({
        colorScheme: "gray",
        description: "オッス！オラ悟空！",
        status: "warning",
        title: "孫悟空"
      })}>
          Add gray Snack
        </Button>

        <Button colorScheme="pink" onClick={() => snack({
        colorScheme: "pink",
        description: "オッス！オラ悟空！",
        status: "error",
        title: "孫悟空"
      })}>
          Add pink Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(Nn=(Mn=L.parameters)==null?void 0:Mn.docs)==null?void 0:Nn.source}}};var Rn,En,On;$.parameters={...$.parameters,docs:{...(Rn=$.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          closeStrategy: "element",
          description: "オッス！オラ悟空！",
          title: "孫悟空"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(On=(En=$.parameters)==null?void 0:En.docs)==null?void 0:On.source}}};var Un,Vn,Dn;H.parameters={...H.parameters,docs:{...(Un=H.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  const ref = useRef<number | string | undefined>(undefined);
  const onOpen = () => {
    ref.current = snack({
      description: "オッス！オラ悟空！",
      title: "孫悟空"
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

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(Dn=(Vn=H.parameters)==null?void 0:Vn.docs)==null?void 0:Dn.source}}};var Ln,$n,Hn;T.parameters={...T.parameters,docs:{...(Ln=T.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  const ref = useRef<number | string | undefined>(undefined);
  const onOpen = () => {
    ref.current = snack({
      description: "オッス！オラ悟空！",
      title: "孫悟空"
    });
  };
  const onUpdate = () => {
    if (ref.current) snack.update(ref.current, {
      colorScheme: "purple",
      description: "よくも…よくも…オレの…ブルマを!!",
      title: "ベジータ"
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

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(Hn=($n=T.parameters)==null?void 0:$n.docs)==null?void 0:Hn.source}}};var Tn,Pn,zn;P.parameters={...P.parameters,docs:{...(Tn=P.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          component: () => <Box bg="purple.500" color="white" px={4} py={3}>
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

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(zn=(Pn=P.parameters)==null?void 0:Pn.docs)==null?void 0:zn.source}}};var Gn,Jn,qn;z.parameters={...z.parameters,docs:{...(Gn=z.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          style: {
            w: "60%"
          },
          description: "オッス！オラ悟空！",
          title: "孫悟空"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(qn=(Jn=z.parameters)==null?void 0:Jn.docs)==null?void 0:qn.source}}};var Kn,Qn,Xn;G.parameters={...G.parameters,docs:{...(Kn=G.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
  const {
    snack,
    snacks
  } = useSnacks();
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => {
        snack({
          description: "オッス！オラ悟空！",
          isClosable: false,
          title: "孫悟空"
        });
      }}>
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>;
}`,...(Xn=(Qn=G.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};const qe=["basic","withDirection","withLimit","withGutter","withDuration","withVariant","withLoadingVariant","withStatus","withColorScheme","withCloseStrategy","useClose","useUpdate","customComponent","customStyle","disabledClosable"];export{qe as __namedExportsOrder,M as basic,P as customComponent,z as customStyle,Je as default,G as disabledClosable,H as useClose,T as useUpdate,$ as withCloseStrategy,L as withColorScheme,N as withDirection,O as withDuration,E as withGutter,R as withLimit,V as withLoadingVariant,D as withStatus,U as withVariant};
