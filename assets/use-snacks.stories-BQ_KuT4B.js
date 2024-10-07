import{j as n}from"./extends-CwFRzn3r.js";import{r as p}from"./index-BwDkhjyp.js";import{A as de,a as ue,b as pe,c as ke}from"./alert-CKoFoHX4.js";import{C as me}from"./close-button-DxeSp445.js";import{u as ne,f as en}from"./theme-provider-D1j4LEQ9.js";import{f as Q,c as ee,b as te,z as he,U as Se,m as tn}from"./factory-CB2imrkD.js";import{f as se}from"./forward-ref-BWI-Phbn.js";import{u as ge}from"./index-CtiIN-rJ.js";import{u as sn}from"./index-CodSCr3E.js";import{u as cn}from"./index-BWWKr8fL.js";import{A as on,m as X}from"./factory-C3FBZMw9.js";import{d as xe}from"./motion-I-9Hg3gW.js";import{m as Ce}from"./forward-ref-scR1bmHx.js";import{W as m}from"./flex-DFuKYgFC.js";import{B as s}from"./button-D6MtFxez.js";import{I as h}from"./input-BbSU9FN9.js";import{B as je}from"./box-DZiPb3wb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-GDJ6YhRU.js";import"./use-component-style-CLkw4iG2.js";import"./use-var-D-eiJB8b.js";import"./loading-6PAwx6O9.js";import"./use-ripple-D_F9Vz55.js";import"./index-wnA7eVNJ.js";import"./form-control-DEVK4waL.js";const fe={animate:({gutter:e})=>({padding:`${e[0]} 0 ${e[1]}`,transition:{duration:.4}}),exit:{padding:0},initial:{padding:0}},Ae={animate:({height:e})=>({height:e,opacity:1,transition:{duration:.4}}),exit:{height:0,opacity:0},initial:{height:0,opacity:1}},S=Ce(({className:e,containerVariants:t=fe,listVariants:c=Ae,snacks:r,listProps:u,...k},d)=>{const{items:A,...C}=r,a=A.length,B=p.useRef(new Map),[j,l]=p.useState(0),[o,i]=p.useState(!!a),{theme:x}=ne(),{direction:f="top",gap:b="fallback(4, 1rem)",gutter:v=[0,0],negateMargin:y=!0,startIndex:G=0,variants:Y,...q}=p.useMemo(()=>{var I;return{...C,...(I=x.__config)==null?void 0:I.snacks,...k}},[C,x,k]),w=cn(v[0]),J=cn(v[1]),Z=sn("spaces",w)??0,nn=sn("spaces",J)??0,oe=en(Z).negate().toString(),ae=en(nn).negate().toString(),re=!!a||o,le={margin:y?`${oe} 0 ${ae}`:void 0,vars:[{name:"space",token:"spaces",value:b}],w:"100%"};return p.useEffect(()=>{let I=0;if(!a)return;const W=[...B.current.values()].slice(0,a);for(const _ of W){if(!_.current)continue;let{offsetHeight:K,offsetTop:ie}=_.current;K+=ie,K>I&&(I=K)}l(I)},[a,f]),Q(()=>{a&&i(!0)},[a]),n.jsx(on,{initial:!1,children:re?n.jsx(X.div,{ref:d,className:ee("ui-snacks",e),animate:"animate",custom:{gutter:[Z,nn]},exit:"exit",initial:"initial",variants:t,__css:le,...q,children:n.jsx(X.ul,{className:"ui-snacks__list",animate:"animate",custom:{height:j},exit:"exit",initial:"initial",variants:c,__css:{position:"relative",w:"100%"},...u,children:n.jsx(on,{onExitComplete:()=>{a||i(!1)},children:A.map((I,W)=>{const _=p.createRef();return B.current.set(W,_),n.jsx(ce,{ref:_,direction:f,index:W,lastIndex:a-W-1,startIndex:G,variants:Y,...I},I.id)})})})}):null})}),Be={animate:({index:e})=>({opacity:1,transition:{delay:e?0:.4,duration:.4,ease:[.4,0,.2,1]},y:0}),exit:{opacity:0,transition:{duration:.2,ease:[.4,0,1,1]}},initial:({direction:e,index:t})=>({opacity:0,...t?{y:(e==="top"?-1:1)*16}:{}})},ce=p.memo(se(({style:e,direction:t,duration:c=null,index:r,lastIndex:u,message:k,startIndex:d,variants:A=Be,onClose:C,onCloseComplete:a},B)=>{const[j,l]=p.useState(c),o=xe(),i=o?C:Se,x=()=>l(null),f=()=>l(c),b=d+r,y={left:0,maxW:"100%",position:"absolute",right:0,top:`calc($space * ${t==="top"?u:r})`,w:"100%",zIndex:b,...e};return Q(()=>{o||a==null||a()},[o]),Q(()=>{l(c)},[c]),ge(i,j),n.jsx(te.li,{ref:B,className:"ui-snacks__item",__css:y,children:n.jsx(X.div,{className:"ui-snacks__item-inner",animate:"animate",custom:{direction:t,index:r,lastIndex:u},exit:"exit",initial:"initial",layout:!0,variants:A,onHoverEnd:f,onHoverStart:x,children:he(k,{index:r,onClose:i})})})}));ce.displayName="SnackComponent";const an=e=>{const{component:t}=e;return r=>typeof t=="function"?t({...r,...e}):n.jsx(be,{...r,...e})};let rn=0;const g=(e={})=>{const[t,c]=p.useState([]),{theme:r}=ne(),u=p.useMemo(()=>{var l,o;return((o=(l=r.__config)==null?void 0:l.snacks)==null?void 0:o.options)??{}},[r]),k=p.useMemo(()=>tn(u,e),[e,u]),{direction:d,limit:A=3,startIndex:C}=k,a=p.useCallback(l=>tn(k,l),[k]),B=p.useMemo(()=>{const l=(o={})=>{o=a(o);const i=an(o);rn+=1;let{id:x=rn,style:f,boxShadow:b,duration:v,status:y,onCloseComplete:G}=o;const q={id:x,style:f,boxShadow:b,duration:v,message:i,status:y,onClose:()=>c(w=>w.filter(J=>J.id!==x)),onCloseComplete:G};return c(w=>[...w.splice(-1*((A??1/0)-1)),q]),x};return l.update=(o,i)=>{i=a(i),c(x=>x.map(f=>f.id===o?{...f,...i,message:an(i)}:f))},l.closeAll=()=>{c([])},l.close=o=>{c(i=>i.filter(x=>x.id!==o))},l.isActive=o=>!!t.find(i=>i.id===o),l},[t,A,a]),j=p.useMemo(()=>({direction:d,items:t,startIndex:C}),[d,C,t]);return{snack:B,snacks:j}},Ie=["0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)","0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px -1px 2px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.2)"],be=se(({className:e,colorScheme:t,variant:c="basic",boxShadow:r=Ie,closeStrategy:u="button",description:k,icon:d,index:A,isClosable:C=!0,status:a,title:B,onClose:j},l)=>{const o=C&&(u==="button"||u==="both"),i=C&&(u==="element"||u==="both");return n.jsxs(de,{ref:l,className:ee("ui-snack",e),colorScheme:t,variant:c,alignItems:"start",boxShadow:A?r:void 0,pe:o?8:void 0,status:a,onClick:i?j:void 0,children:[n.jsx(ue,{className:"ui-snack__icon",variant:d==null?void 0:d.variant,...d!=null&&d.color?{color:d.color}:{},children:d==null?void 0:d.children}),n.jsxs(te.div,{flex:"1",children:[B?n.jsx(pe,{className:"ui-snack__title",lineClamp:1,children:B}):null,k?n.jsx(ke,{className:"ui-snack__desc",lineClamp:3,children:k}):null]}),o?n.jsx(me,{className:"ui-snack__close-button",size:"sm",position:"absolute",right:2,top:2,onClick:x=>{x.stopPropagation(),j==null||j()}}):null]})}),Xe={title:"Hooks / useSnacks"},F=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},M=()=>{const{snack:e,snacks:t}=g({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},R=()=>{const{snack:e,snacks:t}=g({limit:5});return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},E=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"lg"],mb:"-md",negateMargin:!1,snacks:t}),n.jsx(h,{placeholder:"Input"})]})},N=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",duration:3e4,title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},O=()=>{const{snack:e,snacks:t}=g({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{onClick:()=>e({variant:"basic",description:"オッス！オラ悟空！",title:"孫悟空"}),children:"Add basic Snack"}),n.jsx(s,{onClick:()=>e({variant:"solid",description:"オッス！オラ悟空！",title:"孫悟空"}),children:"Add solid Snack"}),n.jsx(s,{onClick:()=>e({variant:"subtle",description:"オッス！オラ悟空！",title:"孫悟空"}),children:"Add subtle Snack"}),n.jsx(s,{onClick:()=>e({variant:"top-accent",description:"オッス！オラ悟空！",title:"孫悟空"}),children:"Add top accent Snack"}),n.jsx(s,{onClick:()=>e({variant:"left-accent",description:"オッス！オラ悟空！",title:"孫悟空"}),children:"Add left accent Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},U=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{onClick:()=>e({variant:"subtle",description:"オッス！オラ悟空！",icon:{variant:"oval"},status:"loading",title:"孫悟空"}),children:"Add oval Snack"}),n.jsx(s,{onClick:()=>e({variant:"solid",description:"オッス！オラ悟空！",icon:{variant:"grid"},status:"loading",title:"孫悟空"}),children:"Add grid Snack"}),n.jsx(s,{onClick:()=>e({variant:"subtle",description:"オッス！オラ悟空！",icon:{variant:"puff"},status:"loading",title:"孫悟空"}),children:"Add puff Snack"}),n.jsx(s,{onClick:()=>e({variant:"solid",description:"オッス！オラ悟空！",icon:{variant:"dots"},status:"loading",title:"孫悟空"}),children:"Add dots Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},V=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>e({description:"オッス！オラ悟空！",status:"info",title:"孫悟空"}),children:"Add info Snack"}),n.jsx(s,{colorScheme:"success",onClick:()=>e({description:"オッス！オラ悟空！",status:"success",title:"孫悟空"}),children:"Add success Snack"}),n.jsx(s,{colorScheme:"warning",onClick:()=>e({description:"オッス！オラ悟空！",status:"warning",title:"孫悟空"}),children:"Add warning Snack"}),n.jsx(s,{colorScheme:"danger",onClick:()=>e({description:"オッス！オラ悟空！",status:"error",title:"孫悟空"}),children:"Add danger Snack"}),n.jsx(s,{onClick:()=>e({description:"オッス！オラ悟空！",status:"loading",title:"孫悟空"}),children:"Add loading Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},D=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"green",onClick:()=>e({colorScheme:"green",description:"オッス！オラ悟空！",status:"info",title:"孫悟空"}),children:"Add green Snack"}),n.jsx(s,{colorScheme:"purple",onClick:()=>e({colorScheme:"purple",description:"オッス！オラ悟空！",status:"success",title:"孫悟空"}),children:"Add purple Snack"}),n.jsx(s,{onClick:()=>e({colorScheme:"gray",description:"オッス！オラ悟空！",status:"warning",title:"孫悟空"}),children:"Add gray Snack"}),n.jsx(s,{colorScheme:"pink",onClick:()=>e({colorScheme:"pink",description:"オッス！オラ悟空！",status:"error",title:"孫悟空"}),children:"Add pink Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},L=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({closeStrategy:"element",description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},T=()=>{const{snack:e,snacks:t}=g(),c=p.useRef(void 0),r=()=>{c.current=e({description:"オッス！オラ悟空！",title:"孫悟空"})},u=()=>{c.current&&e.close(c.current)},k=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:r,children:"Add Snack"}),n.jsx(s,{onClick:u,children:"Close last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:k,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},$=()=>{const{snack:e,snacks:t}=g(),c=p.useRef(void 0),r=()=>{c.current=e({description:"オッス！オラ悟空！",title:"孫悟空"})},u=()=>{c.current&&e.update(c.current,{colorScheme:"purple",description:"よくも…よくも…オレの…ブルマを!!",title:"ベジータ"})},k=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:r,children:"Add Snack"}),n.jsx(s,{onClick:u,children:"Update last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:k,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},H=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({component:()=>n.jsx(je,{bg:"purple.500",color:"white",px:4,py:3,children:"ギャルのパンティーおくれーーーっ！！！！！"})})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},P=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({style:{w:"60%"},description:"オッス！オラ悟空！",title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})},z=()=>{const{snack:e,snacks:t}=g();return n.jsxs(n.Fragment,{children:[n.jsxs(m,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({description:"オッス！オラ悟空！",isClosable:!1,title:"孫悟空"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(S,{gutter:[0,"md"],snacks:t}),n.jsx(h,{placeholder:"Input"})]})};var ln,dn,un;F.parameters={...F.parameters,docs:{...(ln=F.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(un=(dn=F.parameters)==null?void 0:dn.docs)==null?void 0:un.source}}};var pn,kn,mn;M.parameters={...M.parameters,docs:{...(pn=M.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(mn=(kn=M.parameters)==null?void 0:kn.docs)==null?void 0:mn.source}}};var hn,Sn,gn;R.parameters={...R.parameters,docs:{...(hn=R.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
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
}`,...(gn=(Sn=R.parameters)==null?void 0:Sn.docs)==null?void 0:gn.source}}};var xn,Cn,jn;E.parameters={...E.parameters,docs:{...(xn=E.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
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
}`,...(jn=(Cn=E.parameters)==null?void 0:Cn.docs)==null?void 0:jn.source}}};var fn,An,Bn;N.parameters={...N.parameters,docs:{...(fn=N.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
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
}`,...(Bn=(An=N.parameters)==null?void 0:An.docs)==null?void 0:Bn.source}}};var In,bn,vn;O.parameters={...O.parameters,docs:{...(In=O.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
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
}`,...(vn=(bn=O.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var yn,wn,Wn;U.parameters={...U.parameters,docs:{...(yn=U.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
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
}`,...(Wn=(wn=U.parameters)==null?void 0:wn.docs)==null?void 0:Wn.source}}};var _n,Fn,Mn;V.parameters={...V.parameters,docs:{...(_n=V.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(Mn=(Fn=V.parameters)==null?void 0:Fn.docs)==null?void 0:Mn.source}}};var Rn,En,Nn;D.parameters={...D.parameters,docs:{...(Rn=D.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
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
}`,...(Nn=(En=D.parameters)==null?void 0:En.docs)==null?void 0:Nn.source}}};var On,Un,Vn;L.parameters={...L.parameters,docs:{...(On=L.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(Vn=(Un=L.parameters)==null?void 0:Un.docs)==null?void 0:Vn.source}}};var Dn,Ln,Tn;T.parameters={...T.parameters,docs:{...(Dn=T.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(Tn=(Ln=T.parameters)==null?void 0:Ln.docs)==null?void 0:Tn.source}}};var $n,Hn,Pn;$.parameters={...$.parameters,docs:{...($n=$.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
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
}`,...(Pn=(Hn=$.parameters)==null?void 0:Hn.docs)==null?void 0:Pn.source}}};var zn,Gn,qn;H.parameters={...H.parameters,docs:{...(zn=H.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
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
}`,...(qn=(Gn=H.parameters)==null?void 0:Gn.docs)==null?void 0:qn.source}}};var Jn,Kn,Qn;P.parameters={...P.parameters,docs:{...(Jn=P.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(Qn=(Kn=P.parameters)==null?void 0:Kn.docs)==null?void 0:Qn.source}}};var Xn,Yn,Zn;z.parameters={...z.parameters,docs:{...(Xn=z.parameters)==null?void 0:Xn.docs,source:{originalSource:`() => {
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
}`,...(Zn=(Yn=z.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};const Ye=["basic","withDirection","withLimit","withGutter","withDuration","withVariant","withLoadingVariant","withStatus","withColorScheme","withCloseStrategy","useClose","useUpdate","customComponent","customStyle","disabledClosable"];export{Ye as __namedExportsOrder,F as basic,H as customComponent,P as customStyle,Xe as default,z as disabledClosable,T as useClose,$ as useUpdate,L as withCloseStrategy,D as withColorScheme,M as withDirection,N as withDuration,E as withGutter,R as withLimit,U as withLoadingVariant,V as withStatus,O as withVariant};
