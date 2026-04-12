import{n as e}from"./chunk-zsgVPwQN.js";import{Fa as t,Fl as n,Ma as r,Ml as i,Ms as a,Na as o,Ns as s,Pa as c,_m as l,dm as u,eu as d,gi as f,gm as p,hi as m,im as h,iu as g,nm as _,ru as v,tu as y,vi as b,vm as x,yi as S,ym as C}from"./iframe-C5psFsKt.js";var w,T,E,D;e((()=>{a(),d(),r(),b(),i(),m(),v(),_(),w=h(),T={title:`Theme / Tokens`},E=()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{children:`Colors`}),(0,w.jsxs)(t,{children:[(0,w.jsx)(c,{children:(0,w.jsx)(f,{size:`2xl`,children:`Tokens`})}),(0,w.jsx)(o,{gap:`sm`,children:(0,w.jsx)(S,{each:l,children:(e,t)=>(0,w.jsx)(n,{gap:`sm`,templateColumns:`repeat(${C.length}, 1fr)`,w:`full`,children:(0,w.jsx)(S,{each:C,children:(t,r)=>(0,w.jsxs)(n,{gap:`xs`,children:[(0,w.jsx)(s,{bg:`${e}.${t}`,h:`12`,rounded:`l2`,w:`full`}),(0,w.jsx)(g,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:`${e}.${t}`})]},r)})},t)})})]}),(0,w.jsxs)(t,{children:[(0,w.jsx)(c,{children:(0,w.jsx)(f,{size:`2xl`,children:`Semantic Tokens`})}),(0,w.jsx)(o,{gap:`sm`,children:(0,w.jsx)(S,{each:x,children:(e,t)=>(0,w.jsx)(n,{gap:`sm`,templateColumns:`repeat(${C.length}, 1fr)`,w:`full`,children:(0,w.jsx)(S,{each:C,children:(t,r)=>(0,w.jsxs)(n,{gap:`xs`,children:[(0,w.jsx)(s,{bg:`${e}.${t}`,h:`12`,rounded:`l2`,w:`full`}),(0,w.jsx)(g,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:`${e}.${t}`})]},r)})},t)})})]}),(0,w.jsxs)(t,{children:[(0,w.jsx)(c,{children:(0,w.jsx)(f,{size:`xl`,children:`Background`})}),(0,w.jsx)(o,{gap:`sm`,children:(0,w.jsx)(n,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(S,{each:[``,`subtle`,`overlay`,`ghost`,`muted`,`emphasized`,`contrast`,`panel`,`float`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(n,{gap:`xs`,children:[(0,w.jsx)(s,{bg:e?`bg.${e}`:`bg`,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(g,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`bg.${e}`:`bg`})]},t)})})})]}),(0,w.jsxs)(t,{children:[(0,w.jsx)(c,{children:(0,w.jsx)(f,{size:`xl`,children:`Foreground`})}),(0,w.jsx)(o,{gap:`sm`,children:(0,w.jsx)(n,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(S,{each:[``,`subtle`,`muted`,`emphasized`,`contrast`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(n,{gap:`xs`,children:[(0,w.jsx)(y,{bg:e===`contrast`?`bg.contrast`:void 0,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`,children:(0,w.jsx)(g,{color:e?`fg.${e}`:`fg`,children:`Ag`})}),(0,w.jsx)(g,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`fg.${e}`:`fg`})]},t)})})})]}),(0,w.jsxs)(t,{children:[(0,w.jsx)(c,{children:(0,w.jsx)(f,{size:`xl`,children:`Border`})}),(0,w.jsx)(o,{gap:`sm`,children:(0,w.jsx)(n,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(S,{each:[``,`subtle`,`muted`,`emphasized`,`contrast`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(n,{gap:`xs`,children:[(0,w.jsx)(s,{borderColor:e?`border.${e}`:`border`,borderWidth:`3px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(g,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`border.${e}`:`border`})]},t)})})})]}),(0,w.jsx)(S,{each:p,children:(e,r)=>(0,w.jsxs)(t,{children:[(0,w.jsx)(c,{children:(0,w.jsx)(f,{size:`xl`,children:u(e)})}),(0,w.jsx)(o,{gap:`sm`,children:(0,w.jsx)(n,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(S,{each:[``,`contrast`,`fg`,`bg`,`ghost`,`subtle`,`muted`,`emphasized`,`solid`,`outline`],children:(t,r)=>(0,w.jsxs)(n,{gap:`xs`,children:[(0,w.jsx)(s,{bg:t?`${e}.${t}`:e,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(g,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:t?`${e}.${t}`:e})]},r)})})})]},r)})]}),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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