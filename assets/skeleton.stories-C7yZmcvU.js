import{j as e,a4 as ne,s as ce,V as i,T as k}from"./iframe-LqombrNM.js";import{P as de}from"./props-table-P2PnH6mP.js";import{u as ae}from"./index-BY-fdO8a.js";import{S as a}from"./skeleton-C-zVpAj4.js";import{H as s}from"./h-stack-Di-GU-bO.js";import{B as T}from"./badge-BbWkEQ_N.js";import{a as j}from"./avatar-CBzncW37.js";import{H as re}from"./heading-Bq_Y6181.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DFOS9khk.js";import"./grid-item-BVQQuAHt.js";import"./for-CkWl_ugB.js";import"./flex-ksADg7SB.js";import"./index-B8bhULxk.js";const t=({css:n,...r})=>e.jsx(a,{css:ne(n,{"--height":"sizes.10","--width":"sizes.10"}),_loading:{rounded:"full"},...r}),o=({css:n,children:r,gap:C="2",lineClamp:f=3,loading:v=!0,_loading:oe,_notFirst:se,rootProps:ie,...le})=>e.jsx(ce.div,{w:"full",...ie,children:Array.from({length:f}).map((me,H)=>!v&&H>0?null:e.jsx(a,{css:ne(n,{"--height":"sizes.4"}),loading:v,_loading:{_last:{maxW:f>1?"80%":"100%"},...oe},_notFirst:{mt:C,...se},...le,children:!v&&H===0?r:void 0},H))}),be={component:a,title:"Components / Skeleton"},te=async n=>new Promise(r=>{setTimeout(r,n)}),l=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{}),e.jsx(t,{}),e.jsx(o,{})]}),c=()=>e.jsx(de,{variant:"stack",rows:["pulse","shine"],children:(n,r,C)=>e.jsxs(i,{gap:"md",children:[e.jsxs(s,{children:[e.jsx(t,{variant:r}),e.jsx(o,{variant:r,lineClamp:2})]}),e.jsx(a,{variant:r,h:"4xs"})]},C)}),d=()=>e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(t,{boxSize:"14"}),e.jsx(o,{h:"6",lineClamp:2})]}),e.jsx(a,{h:"20"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(T,{children:"Badge"})}),e.jsx(a,{loading:!1,children:e.jsx(T,{children:"Badge"})})]}),e.jsxs(s,{children:[e.jsx(t,{children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),e.jsx(t,{loading:!1,children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]})]}),p=()=>e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(t,{variant:"shine",endColor:"pink.500",startColor:"orange.500"}),e.jsx(o,{variant:"shine",endColor:"pink.500",lineClamp:2,startColor:"orange.500"})]}),e.jsx(a,{variant:"shine",endColor:"pink.500",h:"4xs",startColor:"orange.500"})]}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{duration:2}),e.jsx(t,{duration:2}),e.jsx(o,{duration:2})]}),x=()=>e.jsx(o,{gap:"md"}),g=()=>e.jsx(o,{lineClamp:5}),S=()=>{const{loading:n}=ae(async()=>{await te(3e3)});return e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(t,{loading:n,children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",size:"xl"})}),e.jsxs(o,{lineClamp:2,loading:n,_loading:{h:"5"},children:[e.jsx(k,{fontWeight:"bold",lineClamp:1,children:"Hirotomo Yamada"}),e.jsx(k,{lineClamp:1,children:"Developer of Yamada UI. Designer, design system and UI engineer."})]})]}),e.jsx(a,{loading:n,children:e.jsx(re,{lineClamp:1,children:"ギャルのパンティーおくれーーーっ！！！！！"})})]})},h=()=>{const{loading:n}=ae(async()=>{await te(3e3)});return e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(t,{fadeDuration:2,loading:n,children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",size:"xl"})}),e.jsxs(o,{fadeDuration:2,lineClamp:2,loading:n,_loading:{h:"5"},children:[e.jsx(k,{fontWeight:"bold",lineClamp:1,children:"Hirotomo Yamada"}),e.jsx(k,{lineClamp:1,children:"Developer of Yamada UI. Designer, design system and UI engineer."})]})]}),e.jsx(a,{fadeDuration:2,loading:n,children:e.jsx(re,{lineClamp:1,children:"ギャルのパンティーおくれーーーっ！！！！！"})})]})};var D,b,y;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var Y,w,V;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["pulse", "shine"]}>
      {(_, row, key) => <VStack key={key} gap="md">
          <HStack>
            <SkeletonCircle variant={row} />

            <SkeletonText variant={row} lineClamp={2} />
          </HStack>

          <Skeleton variant={row} h="4xs" />
        </VStack>}
    </PropsTable>;
}`,...(V=(w=c.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var _,B,z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <VStack>
      <HStack>
        <SkeletonCircle boxSize="14" />

        <SkeletonText h="6" lineClamp={2} />
      </HStack>

      <Skeleton h="20" />
    </VStack>;
}`,...(z=(B=d.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var A,I,U;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <HStack>
        <Skeleton>
          <Badge>Badge</Badge>
        </Skeleton>

        <Skeleton loading={false}>
          <Badge>Badge</Badge>
        </Skeleton>
      </HStack>

      <HStack>
        <SkeletonCircle>
          <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
        </SkeletonCircle>

        <SkeletonCircle loading={false}>
          <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
        </SkeletonCircle>
      </HStack>
    </>;
}`,...(U=(I=m.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var F,P,W;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <VStack>
      <HStack>
        <SkeletonCircle variant="shine" endColor="pink.500" startColor="orange.500" />

        <SkeletonText variant="shine" endColor="pink.500" lineClamp={2} startColor="orange.500" />
      </HStack>

      <Skeleton variant="shine" endColor="pink.500" h="4xs" startColor="orange.500" />
    </VStack>;
}`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var E,L,G;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <Skeleton duration={2} />

      <SkeletonCircle duration={2} />

      <SkeletonText duration={2} />
    </>;
}`,...(G=(L=u.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var O,R,q;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <SkeletonText gap="md" />;
}`,...(q=(R=x.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var J,K,M;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,Q,X;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const {
    loading
  } = useAsync(async () => {
    await wait(3000);
  });
  return <VStack>
      <HStack>
        <SkeletonCircle loading={loading}>
          <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" size="xl" />
        </SkeletonCircle>

        <SkeletonText lineClamp={2} loading={loading} _loading={{
        h: "5"
      }}>
          <Text fontWeight="bold" lineClamp={1}>
            Hirotomo Yamada
          </Text>
          <Text lineClamp={1}>
            Developer of Yamada UI. Designer, design system and UI engineer.
          </Text>
        </SkeletonText>
      </HStack>

      <Skeleton loading={loading}>
        <Heading lineClamp={1}>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>
    </VStack>;
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const {
    loading
  } = useAsync(async () => {
    await wait(3000);
  });
  return <VStack>
      <HStack>
        <SkeletonCircle fadeDuration={2} loading={loading}>
          <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" size="xl" />
        </SkeletonCircle>

        <SkeletonText fadeDuration={2} lineClamp={2} loading={loading} _loading={{
        h: "5"
      }}>
          <Text fontWeight="bold" lineClamp={1}>
            Hirotomo Yamada
          </Text>
          <Text lineClamp={1}>
            Developer of Yamada UI. Designer, design system and UI engineer.
          </Text>
        </SkeletonText>
      </HStack>

      <Skeleton fadeDuration={2} loading={loading}>
        <Heading lineClamp={1}>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>
    </VStack>;
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ye=["Basic","Variant","Size","Children","StartAndEndColor","Duration","TextGap","TextLineClamp","Loaded","FadeDuration"];export{l as Basic,m as Children,u as Duration,h as FadeDuration,S as Loaded,d as Size,p as StartAndEndColor,x as TextGap,g as TextLineClamp,c as Variant,ye as __namedExportsOrder,be as default};
