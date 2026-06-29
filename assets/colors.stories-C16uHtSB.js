import{i as e}from"./preload-helper-usAeo7Bx.js";import{$n as t,Gn as n,dt as r,er as i,nr as a,tr as o}from"./core-DkLkzQLq.js";import{t as s}from"./jsx-runtime-O9QVJvLM.js";import{t as c}from"./text-ClYKebxE.js";import{t as l}from"./text-B2Y0ht7H.js";import{t as u}from"./center-BodL2_DM.js";import{t as d}from"./center-Clh7e36g.js";import{r as f}from"./grid-item-Cmr2Zh1K.js";import{Aa as p,Ad as m,Ma as h,Na as g,Ol as _,as as v,is as y,ka as b,kl as x,os as S,ss as C}from"./iframe-DpVGHWSQ.js";var w,T,E,D;e((()=>{_(),d(),y(),h(),m(),b(),l(),r(),w=s(),T={title:`Theme / Tokens`},E=()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{children:`Colors`}),(0,w.jsxs)(C,{children:[(0,w.jsx)(S,{children:(0,w.jsx)(p,{size:`2xl`,children:`Tokens`})}),(0,w.jsx)(v,{gap:`sm`,children:(0,w.jsx)(g,{each:i,children:(e,t)=>(0,w.jsx)(f,{gap:`sm`,templateColumns:`repeat(${a.length}, 1fr)`,w:`full`,children:(0,w.jsx)(g,{each:a,children:(t,n)=>(0,w.jsxs)(f,{gap:`xs`,children:[(0,w.jsx)(x,{bg:`${e}.${t}`,h:`12`,rounded:`l2`,w:`full`}),(0,w.jsx)(c,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:`${e}.${t}`})]},n)})},t)})})]}),(0,w.jsxs)(C,{children:[(0,w.jsx)(S,{children:(0,w.jsx)(p,{size:`2xl`,children:`Semantic Tokens`})}),(0,w.jsx)(v,{gap:`sm`,children:(0,w.jsx)(g,{each:o,children:(e,t)=>(0,w.jsx)(f,{gap:`sm`,templateColumns:`repeat(${a.length}, 1fr)`,w:`full`,children:(0,w.jsx)(g,{each:a,children:(t,n)=>(0,w.jsxs)(f,{gap:`xs`,children:[(0,w.jsx)(x,{bg:`${e}.${t}`,h:`12`,rounded:`l2`,w:`full`}),(0,w.jsx)(c,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:`${e}.${t}`})]},n)})},t)})})]}),(0,w.jsxs)(C,{children:[(0,w.jsx)(S,{children:(0,w.jsx)(p,{size:`xl`,children:`Background`})}),(0,w.jsx)(v,{gap:`sm`,children:(0,w.jsx)(f,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(g,{each:[``,`subtle`,`overlay`,`ghost`,`muted`,`emphasized`,`contrast`,`panel`,`float`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(f,{gap:`xs`,children:[(0,w.jsx)(x,{bg:e?`bg.${e}`:`bg`,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(c,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`bg.${e}`:`bg`})]},t)})})})]}),(0,w.jsxs)(C,{children:[(0,w.jsx)(S,{children:(0,w.jsx)(p,{size:`xl`,children:`Foreground`})}),(0,w.jsx)(v,{gap:`sm`,children:(0,w.jsx)(f,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(g,{each:[``,`subtle`,`muted`,`emphasized`,`contrast`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(f,{gap:`xs`,children:[(0,w.jsx)(u,{bg:e===`contrast`?`bg.contrast`:void 0,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`,children:(0,w.jsx)(c,{color:e?`fg.${e}`:`fg`,children:`Ag`})}),(0,w.jsx)(c,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`fg.${e}`:`fg`})]},t)})})})]}),(0,w.jsxs)(C,{children:[(0,w.jsx)(S,{children:(0,w.jsx)(p,{size:`xl`,children:`Border`})}),(0,w.jsx)(v,{gap:`sm`,children:(0,w.jsx)(f,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(g,{each:[``,`subtle`,`muted`,`emphasized`,`contrast`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(f,{gap:`xs`,children:[(0,w.jsx)(x,{borderColor:e?`border.${e}`:`border`,borderWidth:`3px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(c,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`border.${e}`:`border`})]},t)})})})]}),(0,w.jsx)(g,{each:t,children:(e,t)=>(0,w.jsxs)(C,{children:[(0,w.jsx)(S,{children:(0,w.jsx)(p,{size:`xl`,children:n(e)})}),(0,w.jsx)(v,{gap:`sm`,children:(0,w.jsx)(f,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(g,{each:[``,`contrast`,`fg`,`bg`,`ghost`,`subtle`,`muted`,`emphasized`,`solid`,`outline`],children:(t,n)=>(0,w.jsxs)(f,{gap:`xs`,children:[(0,w.jsx)(x,{bg:t?`${e}.${t}`:e,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(c,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:t?`${e}.${t}`:e})]},n)})})})]},t)})]}),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Colors</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <For each={DEFAULT_COLOR_SCHEMES}>
            {(colorScheme, index) => <Grid key={index} gap="sm" templateColumns={\`repeat(\${TONES.length}, 1fr)\`} w="full">
                <For each={TONES}>
                  {(tone, index) => <Grid key={index} gap="xs">
                      <Box bg={\`\${colorScheme}.\${tone}\`} h="12" rounded="l2" w="full" />
                      <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">{\`\${colorScheme}.\${tone}\`}</Text>
                    </Grid>}
                </For>
              </Grid>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Semantic Tokens</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <For each={SEMANTIC_COLOR_SCHEMES}>
            {(colorScheme, index) => <Grid key={index} gap="sm" templateColumns={\`repeat(\${TONES.length}, 1fr)\`} w="full">
                <For each={TONES}>
                  {(tone, index) => <Grid key={index} gap="xs">
                      <Box bg={\`\${colorScheme}.\${tone}\`} h="12" rounded="l2" w="full" />
                      <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">{\`\${colorScheme}.\${tone}\`}</Text>
                    </Grid>}
                </For>
              </Grid>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Background</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For each={["", "subtle", "overlay", "ghost", "muted", "emphasized", "contrast", "panel", "float", "info", "success", "warning", "error"]}>
              {(value, index) => <Grid key={index} gap="xs">
                  <Box bg={value ? \`bg.\${value}\` : "bg"} borderColor="border.muted" borderWidth="1px" h="24" rounded="l2" w="full" />

                  <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                    {value ? \`bg.\${value}\` : "bg"}
                  </Text>
                </Grid>}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Foreground</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For each={["", "subtle", "muted", "emphasized", "contrast", "info", "success", "warning", "error"]}>
              {(value, index) => <Grid key={index} gap="xs">
                  <Center bg={value === "contrast" ? "bg.contrast" : undefined} borderColor="border.muted" borderWidth="1px" h="24" rounded="l2" w="full">
                    <Text color={value ? \`fg.\${value}\` : "fg"}>Ag</Text>
                  </Center>

                  <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                    {value ? \`fg.\${value}\` : "fg"}
                  </Text>
                </Grid>}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Border</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For each={["", "subtle", "muted", "emphasized", "contrast", "info", "success", "warning", "error"]}>
              {(value, index) => <Grid key={index} gap="xs">
                  <Box borderColor={value ? \`border.\${value}\` : "border"} borderWidth="3px" h="24" rounded="l2" w="full" />

                  <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                    {value ? \`border.\${value}\` : "border"}
                  </Text>
                </Grid>}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <For each={COLOR_SCHEMES}>
        {(colorScheme, index) => <Container.Root key={index}>
            <Container.Header>
              <Heading size="xl">{toTitleCase(colorScheme)}</Heading>
            </Container.Header>

            <Container.Body gap="sm">
              <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
                <For each={["", "contrast", "fg", "bg", "ghost", "subtle", "muted", "emphasized", "solid", "outline"]}>
                  {(value, index) => <Grid key={index} gap="xs">
                      <Box bg={value ? \`\${colorScheme}.\${value}\` : colorScheme} borderColor="border.muted" borderWidth="1px" h="24" rounded="l2" w="full" />

                      <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                        {value ? \`\${colorScheme}.\${value}\` : colorScheme}
                      </Text>
                    </Grid>}
                </For>
              </Grid>
            </Container.Body>
          </Container.Root>}
      </For>
    </>;
}`,...E.parameters?.docs?.source}}},D=[`Colors`]}))();export{E as Colors,D as __namedExportsOrder,T as default};