import{j as e,P as D,s as A,V as i,T as k}from"./iframe-BVYXOt_x.js";import{P as I}from"./props-table-CIRWgUZF.js";import{u as b}from"./index-ClDp38Td.js";import{S as a}from"./skeleton-BUwkVX0Y.js";import{u as U}from"./index-D8jR06a4.js";import{H as s}from"./h-stack-CO-yE6kv.js";import{B as T}from"./badge-fJ3_ohWO.js";import{a as j}from"./avatar-Aqmucffx.js";import{H as y}from"./heading-BUA-B32m.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-9LY9Mmql.js";import"./grid-item-CdNZxFgP.js";import"./for-Cq1AI6gw.js";import"./flex-DrgWVwNM.js";import"./index-CXefG6uo.js";import"./use-breakpoint-CAqBpJlJ.js";import"./use-breakpoint-value-Bh-BKcFh.js";import"./use-color-mode-value-Bkhxg2Cu.js";import"./createLucideIcon-CyY8KHfN.js";const t=({css:n,...r})=>e.jsx(a,{css:D(n,{"--height":"sizes.10","--width":"sizes.10"}),_loading:{rounded:"full"},...r}),o=({css:n,children:r,gap:C="2",lineClamp:V=3,loading:v=!0,_loading:w,_notFirst:_,rootProps:B,...z})=>{const f=U(V);return e.jsx(A.div,{w:"full",...B,children:Array.from({length:f}).map((F,H)=>!v&&H>0?null:e.jsx(a,{css:D(n,{"--height":"sizes.4"}),loading:v,_loading:{_last:{maxW:f>1?"80%":"100%"},...w},_notFirst:{mt:C,..._},...z,children:!v&&H===0?r:void 0},H))})},re={component:a,title:"Components / Skeleton"},Y=async n=>new Promise(r=>{setTimeout(r,n)}),l=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{}),e.jsx(t,{}),e.jsx(o,{})]}),c=()=>e.jsx(I,{variant:"stack",rows:["pulse","shine"],children:(n,r,C)=>e.jsxs(i,{gap:"md",children:[e.jsxs(s,{children:[e.jsx(t,{variant:r}),e.jsx(o,{variant:r,lineClamp:2})]}),e.jsx(a,{variant:r,h:"4xs"})]},C)}),d=()=>e.jsxs(i,{gap:"md",children:[e.jsxs(s,{children:[e.jsx(t,{boxSize:"14"}),e.jsx(o,{h:"6",lineClamp:2})]}),e.jsx(a,{h:"20"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(T,{children:"Badge"})}),e.jsx(a,{loading:!1,children:e.jsx(T,{children:"Badge"})})]}),e.jsxs(s,{children:[e.jsx(t,{children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),e.jsx(t,{loading:!1,children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]})]}),p=()=>e.jsxs(i,{gap:"md",children:[e.jsxs(s,{children:[e.jsx(t,{variant:"shine",endColor:"pink.500",startColor:"orange.500"}),e.jsx(o,{variant:"shine",endColor:"pink.500",lineClamp:2,startColor:"orange.500"})]}),e.jsx(a,{variant:"shine",endColor:"pink.500",h:"4xs",startColor:"orange.500"})]}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{duration:2}),e.jsx(t,{duration:2}),e.jsx(o,{duration:2})]}),g=()=>e.jsx(o,{gap:"md"}),x=()=>e.jsx(o,{lineClamp:5}),S=()=>{const{loading:n}=b(async()=>{await Y(3e3)});return e.jsxs(i,{gap:"md",children:[e.jsxs(s,{children:[e.jsx(t,{loading:n,children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",size:"xl"})}),e.jsxs(o,{lineClamp:2,loading:n,_loading:{h:"5"},children:[e.jsx(k,{fontWeight:"bold",lineClamp:1,children:"Hirotomo Yamada"}),e.jsx(k,{lineClamp:1,children:"Developer of Yamada UI. Designer, design system and UI engineer."})]})]}),e.jsx(a,{loading:n,children:e.jsx(y,{lineClamp:1,children:"ギャルのパンティーおくれーーーっ！！！！！"})})]})},h=()=>{const{loading:n}=b(async()=>{await Y(3e3)});return e.jsxs(i,{gap:"md",children:[e.jsxs(s,{children:[e.jsx(t,{fadeDuration:2,loading:n,children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",size:"xl"})}),e.jsxs(o,{fadeDuration:2,lineClamp:2,loading:n,_loading:{h:"5"},children:[e.jsx(k,{fontWeight:"bold",lineClamp:1,children:"Hirotomo Yamada"}),e.jsx(k,{lineClamp:1,children:"Developer of Yamada UI. Designer, design system and UI engineer."})]})]}),e.jsx(a,{fadeDuration:2,loading:n,children:e.jsx(y,{lineClamp:1,children:"ギャルのパンティーおくれーーーっ！！！！！"})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["pulse", "shine"]}>
      {(_, row, key) => <VStack key={key} gap="md">
          <HStack>
            <SkeletonCircle variant={row} />

            <SkeletonText variant={row} lineClamp={2} />
          </HStack>

          <Skeleton variant={row} h="4xs" />
        </VStack>}
    </PropsTable>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <VStack gap="md">
      <HStack>
        <SkeletonCircle boxSize="14" />

        <SkeletonText h="6" lineClamp={2} />
      </HStack>

      <Skeleton h="20" />
    </VStack>;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <VStack gap="md">
      <HStack>
        <SkeletonCircle variant="shine" endColor="pink.500" startColor="orange.500" />

        <SkeletonText variant="shine" endColor="pink.500" lineClamp={2} startColor="orange.500" />
      </HStack>

      <Skeleton variant="shine" endColor="pink.500" h="4xs" startColor="orange.500" />
    </VStack>;
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Skeleton duration={2} />

      <SkeletonCircle duration={2} />

      <SkeletonText duration={2} />
    </>;
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <SkeletonText gap="md" />;
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const {
    loading
  } = useAsync(async () => {
    await wait(3000);
  });
  return <VStack gap="md">
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
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const {
    loading
  } = useAsync(async () => {
    await wait(3000);
  });
  return <VStack gap="md">
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
}`,...h.parameters?.docs?.source}}};const te=["Basic","Variant","Size","Children","StartAndEndColor","Duration","TextGap","TextLineClamp","Loaded","FadeDuration"];export{l as Basic,m as Children,u as Duration,h as FadeDuration,S as Loaded,d as Size,p as StartAndEndColor,g as TextGap,x as TextLineClamp,c as Variant,te as __namedExportsOrder,re as default};
