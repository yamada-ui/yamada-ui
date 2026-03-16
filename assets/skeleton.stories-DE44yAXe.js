import{j as e,af as b,s as z,V as i,T as k,bj as D}from"./iframe-1jXkjttE.js";import{P as A}from"./props-table-6bEoLrKl.js";import{u as y}from"./index-Cd91ixNx.js";import{S as a}from"./skeleton-0nPTmc0_.js";import{H as s}from"./h-stack-DJG4lz9Q.js";import{B as T}from"./badge-D8-W25dl.js";import{a as j}from"./avatar-z7kPrEe9.js";import{H as Y}from"./heading-4hOOjByT.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BFeokbW8.js";import"./grid-item-B4aqBGwd.js";import"./for-97YvSO2o.js";import"./flex-DQXuIXai.js";import"./index-DSOU7t9_.js";const r=(({css:n,...o})=>e.jsx(a,{css:b(n,{"--height":"sizes.10","--width":"sizes.10"}),_loading:{rounded:"full"},...o})),t=(({css:n,children:o,gap:C="2",lineClamp:f=3,loading:v=!0,_loading:V,_notFirst:w,rootProps:_,...B})=>e.jsx(z.div,{w:"full",..._,children:Array.from({length:f}).map((I,H)=>!v&&H>0?null:e.jsx(a,{css:b(n,{"--height":"sizes.4"}),loading:v,_loading:{_last:{maxW:f>1?"80%":"100%"},...V},_notFirst:{mt:C,...w},...B,children:!v&&H===0?o:void 0},H))})),Q={component:a,title:"Components / Skeleton"},l=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{}),e.jsx(r,{}),e.jsx(t,{})]}),c=()=>e.jsx(A,{variant:"stack",rows:["pulse","shine"],children:(n,o,C)=>e.jsxs(i,{gap:"md",children:[e.jsxs(s,{children:[e.jsx(r,{variant:o}),e.jsx(t,{variant:o,lineClamp:2})]}),e.jsx(a,{variant:o,h:"4xs"})]},C)}),d=()=>e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(r,{boxSize:"14"}),e.jsx(t,{h:"6",lineClamp:2})]}),e.jsx(a,{h:"20"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(T,{children:"Badge"})}),e.jsx(a,{loading:!1,children:e.jsx(T,{children:"Badge"})})]}),e.jsxs(s,{children:[e.jsx(r,{children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),e.jsx(r,{loading:!1,children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]})]}),p=()=>e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(r,{variant:"shine",endColor:"pink.500",startColor:"orange.500"}),e.jsx(t,{variant:"shine",endColor:"pink.500",lineClamp:2,startColor:"orange.500"})]}),e.jsx(a,{variant:"shine",endColor:"pink.500",h:"4xs",startColor:"orange.500"})]}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{duration:2}),e.jsx(r,{duration:2}),e.jsx(t,{duration:2})]}),x=()=>e.jsx(t,{gap:"md"}),g=()=>e.jsx(t,{lineClamp:5}),S=()=>{const{loading:n}=y(async()=>{await D(3e3)});return e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(r,{loading:n,children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",size:"xl"})}),e.jsxs(t,{lineClamp:2,loading:n,_loading:{h:"5"},children:[e.jsx(k,{fontWeight:"bold",lineClamp:1,children:"Hirotomo Yamada"}),e.jsx(k,{lineClamp:1,children:"Developer of Yamada UI. Designer, design system and UI engineer."})]})]}),e.jsx(a,{loading:n,children:e.jsx(Y,{lineClamp:1,children:"ギャルのパンティーおくれーーーっ！！！！！"})})]})},h=()=>{const{loading:n}=y(async()=>{await D(3e3)});return e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(r,{fadeDuration:2,loading:n,children:e.jsx(j,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",size:"xl"})}),e.jsxs(t,{fadeDuration:2,lineClamp:2,loading:n,_loading:{h:"5"},children:[e.jsx(k,{fontWeight:"bold",lineClamp:1,children:"Hirotomo Yamada"}),e.jsx(k,{lineClamp:1,children:"Developer of Yamada UI. Designer, design system and UI engineer."})]})]}),e.jsx(a,{fadeDuration:2,loading:n,children:e.jsx(Y,{lineClamp:1,children:"ギャルのパンティーおくれーーーっ！！！！！"})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
  return <VStack>
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
  return <VStack>
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
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <SkeletonText gap="md" />;
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const X=["Basic","Variant","Size","Children","StartAndEndColor","Duration","TextGap","TextLineClamp","Loaded","FadeDuration"];export{l as Basic,m as Children,u as Duration,h as FadeDuration,S as Loaded,d as Size,p as StartAndEndColor,x as TextGap,g as TextLineClamp,c as Variant,X as __namedExportsOrder,Q as default};
