import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Lt as n,nu as r,ru as i,sm as a}from"./iframe-CHoZGzMw.js";var o,s,c,l,u,d,f,p,m;e((()=>{r(),n(),o=a(),s={title:`Styled System / Calc`},c=()=>(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`calc(md + md)`,rounded:`l2`,w:`calc(lg / 2)`,children:`Calc`}),l=()=>(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`calc(md + md)`,rounded:`l2`,w:`calc(lg - calc(2xs * 2))`,children:`Calc`}),u=()=>(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`calc(md + md)`,rounded:`l2`,w:`calc(100% / {spaces.2})`,children:`Use interpolated token`}),d=()=>(0,o.jsxs)(t,{borderWidth:`1px`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,children:[(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,w:`min(100%, lg)`,children:`Min`}),(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,w:`min(100%, calc(md + md))`,children:`Min with calc`}),(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,w:`min(md)`,children:`Omitted Min`})]}),f=()=>(0,o.jsxs)(t,{borderWidth:`1px`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,children:[(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,w:`max(100%, lg)`,children:`Max`}),(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,w:`max(100%, calc(md + md))`,children:`Max with calc`}),(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,w:`max(md)`,children:`Omitted Max`})]}),p=()=>(0,o.jsxs)(t,{borderWidth:`1px`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,children:[(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,w:`clamp(md, 100%, xl)`,children:`Clamp`}),(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,w:`clamp(md, 100%, calc(md + md))`,children:`Clamp with calc`}),(0,o.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,w:`clamp(md, lg)`,children:`Omitted Clamp`})]}),c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Center bg="bg.contrast" color="fg.contrast" p="calc(md + md)" rounded="l2" w="calc(lg / 2)">
      Calc
    </Center>;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Center bg="bg.contrast" color="fg.contrast" p="calc(md + md)" rounded="l2" w="calc(lg - calc(2xs * 2))">
      Calc
    </Center>;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Center bg="bg.contrast" color="fg.contrast" p="calc(md + md)" rounded="l2" w="calc(100% / {spaces.2})">
      Use interpolated token
    </Center>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="min(100%, lg)">
        Min
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="min(100%, calc(md + md))">
        Min with calc
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="min(md)">
        Omitted Min
      </Center>
    </VStack>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="max(100%, lg)">
        Max
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="max(100%, calc(md + md))">
        Max with calc
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="max(md)">
        Omitted Max
      </Center>
    </VStack>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="clamp(md, 100%, xl)">
        Clamp
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="clamp(md, 100%, calc(md + md))">
        Clamp with calc
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="clamp(md, lg)">
        Omitted Clamp
      </Center>
    </VStack>;
}`,...p.parameters?.docs?.source}}},m=[`Basic`,`Nested`,`NumericToken`,`Min`,`Max`,`Clamp`]}))();export{c as Basic,p as Clamp,f as Max,d as Min,l as Nested,u as NumericToken,m as __namedExportsOrder,s as default};