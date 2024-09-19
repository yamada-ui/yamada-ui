import{j as n}from"./extends-CwFRzn3r.js";import{r as u}from"./index-BwDkhjyp.js";import{A as de,a as ue,b as pe,c as ke}from"./alert-A1AK0WXZ.js";import{C as me}from"./close-button-B01cMkKC.js";import{u as ne,f as en}from"./theme-provider-CpaSpGZh.js";import{m as tn,c as ee,b as te,f as Q,B as he,_ as Se}from"./factory-BjF4_dRw.js";import{f as se}from"./forward-ref-BWI-Phbn.js";import{u as ge}from"./index-DEs2iorh.js";import{u as sn}from"./index-CuJ7J3XN.js";import{u as cn}from"./index-PkG0ZV6c.js";import{A as on,m as X}from"./factory-COh1-7fC.js";import{d as xe}from"./motion-I-9Hg3gW.js";import{m as Ce}from"./forward-ref-scR1bmHx.js";import{W as p}from"./flex-uUFGZwrf.js";import{B as s}from"./button-y-1VIkvD.js";import{I as k}from"./input-DIUGO0qs.js";import{B as je}from"./box-B5FcoOR4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-Dq9f0XvE.js";import"./use-component-style-DVO-iEPi.js";import"./loading-XAGgHBOO.js";import"./use-ripple-tjN9Ka0j.js";import"./index-BxBWkPyk.js";import"./form-control-wNB_sh9j.js";const an=e=>{const{component:t}=e;return c=>typeof t=="function"?t({...c,...e}):n.jsx(Ae,{...c,...e})};let rn=0;const m=(e={})=>{const[t,a]=u.useState([]),{theme:c}=ne(),g=u.useMemo(()=>{var l,o;return((o=(l=c.__config)==null?void 0:l.snacks)==null?void 0:o.options)??{}},[c]),r=u.useMemo(()=>tn(g,e),[e,g]),{direction:f,startIndex:x,limit:C=3}=r,d=u.useCallback(l=>tn(r,l),[r]),I=u.useMemo(()=>{const l=(o={})=>{o=d(o);const i=an(o);rn+=1;let{id:S=rn,duration:A,onCloseComplete:b,status:_,boxShadow:v,style:G}=o;const q={id:S,status:_,duration:A,message:i,onClose:()=>a(y=>y.filter(J=>J.id!==S)),onCloseComplete:b,boxShadow:v,style:G};return a(y=>[...y.splice(-1*((C??1/0)-1)),q]),S};return l.update=(o,i)=>{i=d(i),a(S=>S.map(A=>A.id===o?{...A,...i,message:an(i)}:A))},l.closeAll=()=>{a([])},l.close=o=>{a(i=>i.filter(S=>S.id!==o))},l.isActive=o=>!!t.find(i=>i.id===o),l},[t,C,d]),j=u.useMemo(()=>({direction:f,startIndex:x,items:t}),[f,x,t]);return{snack:I,snacks:j}},fe=["0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)","0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px -1px 2px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.2)"],Ae=se(({variant:e="basic",colorScheme:t,status:a,icon:c,title:g,description:r,isClosable:f=!0,closeStrategy:x="button",boxShadow:C=fe,className:d,index:I,onClose:j},l)=>{const o=f&&(x==="button"||x==="both"),i=f&&(x==="element"||x==="both");return n.jsxs(de,{ref:l,className:ee("ui-snack",d),status:a,variant:e,colorScheme:t,alignItems:"start",boxShadow:I?C:void 0,pe:o?8:void 0,onClick:i?j:void 0,children:[n.jsx(ue,{variant:c==null?void 0:c.variant,className:"ui-snack__icon",...c!=null&&c.color?{color:c.color}:{},children:c==null?void 0:c.children}),n.jsxs(te.div,{flex:"1",children:[g?n.jsx(pe,{className:"ui-snack__title",lineClamp:1,children:g}):null,r?n.jsx(ke,{className:"ui-snack__desc",lineClamp:3,children:r}):null]}),o?n.jsx(me,{className:"ui-snack__close-button",size:"sm",onClick:S=>{S.stopPropagation(),j==null||j()},position:"absolute",top:2,right:2}):null]})}),Be={initial:{padding:0},animate:({gutter:e})=>({padding:`${e[0]} 0 ${e[1]}`,transition:{duration:.4}}),exit:{padding:0}},Ie={initial:{opacity:1,height:0},animate:({height:e})=>({opacity:1,height:e,transition:{duration:.4}}),exit:{opacity:0,height:0}},h=Ce(({className:e,snacks:t,containerVariants:a=Be,listVariants:c=Ie,listProps:g,...r},f)=>{const{items:x,...C}=t,d=x.length,I=u.useRef(new Map),[j,l]=u.useState(0),[o,i]=u.useState(!!d),{theme:S}=ne(),{variants:A,direction:b="top",startIndex:_=0,gutter:v=[0,0],gap:G="fallback(4, 1rem)",negateMargin:Y=!0,...q}=u.useMemo(()=>{var B;return{...C,...(B=S.__config)==null?void 0:B.snacks,...r}},[C,S,r]),y=cn(v[0]),J=cn(v[1]),Z=sn("spaces",y)??0,nn=sn("spaces",J)??0,oe=en(Z).negate().toString(),ae=en(nn).negate().toString(),re=!!d||o,le={w:"100%",margin:Y?`${oe} 0 ${ae}`:void 0,vars:[{name:"space",token:"spaces",value:G}]};return u.useEffect(()=>{let B=0;if(!d)return;const w=[...I.current.values()].slice(0,d);for(const W of w){if(!W.current)continue;let{offsetHeight:K,offsetTop:ie}=W.current;K+=ie,K>B&&(B=K)}l(B)},[d,b]),Q(()=>{d&&i(!0)},[d]),n.jsx(on,{initial:!1,children:re?n.jsx(X.div,{ref:f,className:ee("ui-snacks",e),__css:le,variants:a,custom:{gutter:[Z,nn]},initial:"initial",animate:"animate",exit:"exit",...q,children:n.jsx(X.ul,{className:"ui-snacks__list",variants:c,custom:{height:j},initial:"initial",animate:"animate",exit:"exit",__css:{position:"relative",w:"100%"},...g,children:n.jsx(on,{onExitComplete:()=>{d||i(!1)},children:x.map((B,w)=>{const W=u.createRef();return I.current.set(w,W),n.jsx(ce,{ref:W,index:w,lastIndex:d-w-1,startIndex:_,variants:A,direction:b,...B},B.id)})})})}):null})}),be={initial:({index:e,direction:t})=>({opacity:0,...e?{y:(t==="top"?-1:1)*16}:{}}),animate:({index:e})=>({opacity:1,y:0,transition:{delay:e?0:.4,duration:.4,ease:[.4,0,.2,1]}}),exit:{opacity:0,transition:{duration:.2,ease:[.4,0,1,1]}}},ce=u.memo(se(({index:e,lastIndex:t,startIndex:a,direction:c,variants:g=be,duration:r=null,message:f,onClose:x,onCloseComplete:C,style:d},I)=>{const[j,l]=u.useState(r),o=xe(),i=o?x:Se,S=()=>l(null),A=()=>l(r),b=a+e,v={position:"absolute",top:`calc($space * ${c==="top"?t:e})`,left:0,right:0,zIndex:b,w:"100%",maxW:"100%",...d};return Q(()=>{o||C==null||C()},[o]),Q(()=>{l(r)},[r]),ge(i,j),n.jsx(te.li,{ref:I,className:"ui-snacks__item",__css:v,children:n.jsx(X.div,{className:"ui-snacks__item-inner",layout:!0,variants:g,custom:{index:e,lastIndex:t,direction:c},initial:"initial",animate:"animate",exit:"exit",onHoverStart:S,onHoverEnd:A,children:he(f,{index:e,onClose:i})})})}));ce.displayName="SnackComponent";const Qe={title:"Hooks / useSnacks"},F=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},M=()=>{const{snack:e,snacks:t}=m({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},R=()=>{const{snack:e,snacks:t}=m({limit:5});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},E=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"lg"],negateMargin:!1,mb:"-md"}),n.jsx(k,{placeholder:"Input"})]})},N=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",duration:3e4})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},O=()=>{const{snack:e,snacks:t}=m({direction:"bottom"});return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"basic"}),children:"Add basic Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"solid"}),children:"Add solid Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"subtle"}),children:"Add subtle Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"top-accent"}),children:"Add top accent Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",variant:"left-accent"}),children:"Add left accent Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},U=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"oval"}}),children:"Add oval Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"grid"}}),children:"Add grid Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"subtle",icon:{variant:"puff"}}),children:"Add puff Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading",variant:"solid",icon:{variant:"dots"}}),children:"Add dots Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},V=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info"}),children:"Add info Snack"}),n.jsx(s,{colorScheme:"success",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success"}),children:"Add success Snack"}),n.jsx(s,{colorScheme:"warning",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning"}),children:"Add warning Snack"}),n.jsx(s,{colorScheme:"danger",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error"}),children:"Add danger Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"loading"}),children:"Add loading Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},D=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"green",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"info",colorScheme:"green"}),children:"Add green Snack"}),n.jsx(s,{colorScheme:"purple",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"success",colorScheme:"purple"}),children:"Add purple Snack"}),n.jsx(s,{onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"warning",colorScheme:"gray"}),children:"Add gray Snack"}),n.jsx(s,{colorScheme:"pink",onClick:()=>e({title:"孫悟空",description:"オッス！オラ悟空！",status:"error",colorScheme:"pink"}),children:"Add pink Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},L=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",closeStrategy:"element"})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},T=()=>{const{snack:e,snacks:t}=m(),a=u.useRef(void 0),c=()=>{a.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},g=()=>{a.current&&e.close(a.current)},r=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:c,children:"Add Snack"}),n.jsx(s,{onClick:g,children:"Close last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:r,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},$=()=>{const{snack:e,snacks:t}=m(),a=u.useRef(void 0),c=()=>{a.current=e({title:"孫悟空",description:"オッス！オラ悟空！"})},g=()=>{a.current&&e.update(a.current,{title:"ベジータ",description:"よくも…よくも…オレの…ブルマを!!",colorScheme:"purple"})},r=()=>{e.closeAll()};return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:c,children:"Add Snack"}),n.jsx(s,{onClick:g,children:"Update last Snack"}),n.jsx(s,{colorScheme:"danger",onClick:r,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},H=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({component:()=>n.jsx(je,{color:"white",py:3,px:4,bg:"purple.500",children:"ギャルのパンティーおくれーーーっ！！！！！"})})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},P=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",style:{w:"60%"}})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})},z=()=>{const{snack:e,snacks:t}=m();return n.jsxs(n.Fragment,{children:[n.jsxs(p,{gap:"md",children:[n.jsx(s,{colorScheme:"primary",onClick:()=>{e({title:"孫悟空",description:"オッス！オラ悟空！",isClosable:!1})},children:"Add Snack"}),n.jsx(s,{colorScheme:"danger",onClick:e.closeAll,children:"Close all Snack"})]}),n.jsx(h,{snacks:t,gutter:[0,"md"]}),n.jsx(k,{placeholder:"Input"})]})};var ln,dn,un;F.parameters={...F.parameters,docs:{...(ln=F.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(gn=(Sn=R.parameters)==null?void 0:Sn.docs)==null?void 0:gn.source}}};var xn,Cn,jn;E.parameters={...E.parameters,docs:{...(xn=E.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
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
}`,...(jn=(Cn=E.parameters)==null?void 0:Cn.docs)==null?void 0:jn.source}}};var fn,An,Bn;N.parameters={...N.parameters,docs:{...(fn=N.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
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
}`,...(vn=(bn=O.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var yn,wn,Wn;U.parameters={...U.parameters,docs:{...(yn=U.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
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
}`,...(Wn=(wn=U.parameters)==null?void 0:wn.docs)==null?void 0:Wn.source}}};var _n,Fn,Mn;V.parameters={...V.parameters,docs:{...(_n=V.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(Mn=(Fn=V.parameters)==null?void 0:Fn.docs)==null?void 0:Mn.source}}};var Rn,En,Nn;D.parameters={...D.parameters,docs:{...(Rn=D.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
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
}`,...(Nn=(En=D.parameters)==null?void 0:En.docs)==null?void 0:Nn.source}}};var On,Un,Vn;L.parameters={...L.parameters,docs:{...(On=L.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(Vn=(Un=L.parameters)==null?void 0:Un.docs)==null?void 0:Vn.source}}};var Dn,Ln,Tn;T.parameters={...T.parameters,docs:{...(Dn=T.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(Tn=(Ln=T.parameters)==null?void 0:Ln.docs)==null?void 0:Tn.source}}};var $n,Hn,Pn;$.parameters={...$.parameters,docs:{...($n=$.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
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
}`,...(Pn=(Hn=$.parameters)==null?void 0:Hn.docs)==null?void 0:Pn.source}}};var zn,Gn,qn;H.parameters={...H.parameters,docs:{...(zn=H.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
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
}`,...(qn=(Gn=H.parameters)==null?void 0:Gn.docs)==null?void 0:qn.source}}};var Jn,Kn,Qn;P.parameters={...P.parameters,docs:{...(Jn=P.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(Qn=(Kn=P.parameters)==null?void 0:Kn.docs)==null?void 0:Qn.source}}};var Xn,Yn,Zn;z.parameters={...z.parameters,docs:{...(Xn=z.parameters)==null?void 0:Xn.docs,source:{originalSource:`() => {
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
}`,...(Zn=(Yn=z.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};const Xe=["basic","withDirection","withLimit","withGutter","withDuration","withVariant","withLoadingVariant","withStatus","withColorScheme","withCloseStrategy","useClose","useUpdate","customComponent","customStyle","disabledClosable"];export{Xe as __namedExportsOrder,F as basic,H as customComponent,P as customStyle,Qe as default,z as disabledClosable,T as useClose,$ as useUpdate,L as withCloseStrategy,D as withColorScheme,M as withDirection,N as withDuration,E as withGutter,R as withLimit,U as withLoadingVariant,V as withStatus,O as withVariant};
