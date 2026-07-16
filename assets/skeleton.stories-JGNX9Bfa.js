import{i as e}from"./preload-helper-B45gAKPr.js";import{er as t,pt as n}from"./core-CBrv4WaS.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-ljAYVXXn.js";import{t as a}from"./text-DGi1MGSU.js";import{$ as o,$l as s,Dn as c,In as l,Kl as u,Na as d,Nn as f,Pa as p,Pn as m,Rn as h,Tn as g,Xl as _,et as v,ql as y,wn as b}from"./iframe-D5Y3ROF5.js";import{n as x,t as S}from"./storybook-DB922BIm.js";var C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{S(),o(),n(),_(),u(),d(),b(),a(),f(),C=r(),w={component:h,title:`Components / Skeleton`},T=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h,{}),(0,C.jsx)(l,{}),(0,C.jsx)(m,{})]}),E=()=>(0,C.jsx)(x,{variant:`stack`,rows:[`pulse`,`shine`],children:(e,t,n)=>(0,C.jsxs)(g,{gap:`md`,children:[(0,C.jsxs)(c,{children:[(0,C.jsx)(l,{variant:t}),(0,C.jsx)(m,{variant:t,lineClamp:2})]}),(0,C.jsx)(h,{variant:t,h:`4xs`})]},n)}),D=()=>(0,C.jsxs)(g,{children:[(0,C.jsxs)(c,{children:[(0,C.jsx)(l,{boxSize:`14`}),(0,C.jsx)(m,{h:`6`,lineClamp:2})]}),(0,C.jsx)(h,{h:`20`})]}),O=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(c,{children:[(0,C.jsx)(h,{children:(0,C.jsx)(y,{children:`Badge`})}),(0,C.jsx)(h,{loading:!1,children:(0,C.jsx)(y,{children:`Badge`})})]}),(0,C.jsxs)(c,{children:[(0,C.jsx)(l,{children:(0,C.jsx)(s,{name:`Hirotomo Yamada`,src:`https://avatars.githubusercontent.com/u/84060430?v=4`})}),(0,C.jsx)(l,{loading:!1,children:(0,C.jsx)(s,{name:`Hirotomo Yamada`,src:`https://avatars.githubusercontent.com/u/84060430?v=4`})})]})]}),k=()=>(0,C.jsxs)(g,{children:[(0,C.jsxs)(c,{children:[(0,C.jsx)(l,{variant:`shine`,endColor:`pink.500`,startColor:`orange.500`}),(0,C.jsx)(m,{variant:`shine`,endColor:`pink.500`,lineClamp:2,startColor:`orange.500`})]}),(0,C.jsx)(h,{variant:`shine`,endColor:`pink.500`,h:`4xs`,startColor:`orange.500`})]}),A=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h,{duration:2}),(0,C.jsx)(l,{duration:2}),(0,C.jsx)(m,{duration:2})]}),j=()=>(0,C.jsx)(m,{gap:`md`}),M=()=>(0,C.jsx)(m,{lineClamp:5}),N=()=>{let{loading:e}=v(async()=>{await t(3e3)});return(0,C.jsxs)(g,{children:[(0,C.jsxs)(c,{children:[(0,C.jsx)(l,{loading:e,children:(0,C.jsx)(s,{name:`Hirotomo Yamada`,src:`https://avatars.githubusercontent.com/u/84060430?v=4`,size:`xl`})}),(0,C.jsxs)(m,{lineClamp:2,loading:e,_loading:{h:`5`},children:[(0,C.jsx)(i,{fontWeight:`bold`,lineClamp:1,children:`Hirotomo Yamada`}),(0,C.jsx)(i,{lineClamp:1,children:`Developer of Yamada UI. Designer, design system and UI engineer.`})]})]}),(0,C.jsx)(h,{loading:e,children:(0,C.jsx)(p,{lineClamp:1,children:`ギャルのパンティーおくれーーーっ！！！！！`})})]})},P=()=>{let{loading:e}=v(async()=>{await t(3e3)});return(0,C.jsxs)(g,{children:[(0,C.jsxs)(c,{children:[(0,C.jsx)(l,{fadeDuration:2,loading:e,children:(0,C.jsx)(s,{name:`Hirotomo Yamada`,src:`https://avatars.githubusercontent.com/u/84060430?v=4`,size:`xl`})}),(0,C.jsxs)(m,{fadeDuration:2,lineClamp:2,loading:e,_loading:{h:`5`},children:[(0,C.jsx)(i,{fontWeight:`bold`,lineClamp:1,children:`Hirotomo Yamada`}),(0,C.jsx)(i,{lineClamp:1,children:`Developer of Yamada UI. Designer, design system and UI engineer.`})]})]}),(0,C.jsx)(h,{fadeDuration:2,loading:e,children:(0,C.jsx)(p,{lineClamp:1,children:`ギャルのパンティーおくれーーーっ！！！！！`})})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["pulse", "shine"]}>
      {(_, row, key) => <VStack key={key} gap="md">
          <HStack>
            <SkeletonCircle variant={row} />

            <SkeletonText variant={row} lineClamp={2} />
          </HStack>

          <Skeleton variant={row} h="4xs" />
        </VStack>}
    </PropsTable>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <HStack>
        <SkeletonCircle boxSize="14" />

        <SkeletonText h="6" lineClamp={2} />
      </HStack>

      <Skeleton h="20" />
    </VStack>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <HStack>
        <SkeletonCircle variant="shine" endColor="pink.500" startColor="orange.500" />

        <SkeletonText variant="shine" endColor="pink.500" lineClamp={2} startColor="orange.500" />
      </HStack>

      <Skeleton variant="shine" endColor="pink.500" h="4xs" startColor="orange.500" />
    </VStack>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Skeleton duration={2} />

      <SkeletonCircle duration={2} />

      <SkeletonText duration={2} />
    </>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <SkeletonText gap="md" />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <SkeletonText lineClamp={5} />;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}},F=[`Basic`,`Variant`,`Size`,`Children`,`StartAndEndColor`,`Duration`,`TextGap`,`TextLineClamp`,`Loaded`,`FadeDuration`]}))();export{T as Basic,O as Children,A as Duration,P as FadeDuration,N as Loaded,D as Size,k as StartAndEndColor,j as TextGap,M as TextLineClamp,E as Variant,F as __namedExportsOrder,w as default};