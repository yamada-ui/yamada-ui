import{j as e,b$ as f,c0 as m,T as d,cd as b,W as j,C as $,P as S}from"./iframe-D_HYglKf.js";import{H as i}from"./heading-D4a_pOa-.js";import{F as l}from"./for-B7ME2eWM.js";import{G as r}from"./grid-CteH-i1E.js";import{B as g}from"./box-Dq_m1DJN.js";import{C as s,a,b as x}from"./container-C3A-fGJZ.js";import"./preload-helper-C1FmrZbK.js";const B={title:"Theme / Tokens"},h=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Colors"}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(i,{size:"2xl",children:"Tokens"})}),e.jsx(x,{gap:"sm",children:e.jsx(l,{each:f,children:(n,o)=>e.jsx(r,{gap:"sm",templateColumns:`repeat(${m.length}, 1fr)`,w:"full",children:e.jsx(l,{each:m,children:(t,c)=>e.jsxs(r,{gap:"xs",children:[e.jsx(g,{bg:`${n}.${t}`,h:"12",rounded:"l2",w:"full"}),e.jsx(d,{color:"fg.muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:`${n}.${t}`})]},c)})},o)})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(i,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(x,{gap:"sm",children:e.jsx(l,{each:b,children:(n,o)=>e.jsx(r,{gap:"sm",templateColumns:`repeat(${m.length}, 1fr)`,w:"full",children:e.jsx(l,{each:m,children:(t,c)=>e.jsxs(r,{gap:"xs",children:[e.jsx(g,{bg:`${n}.${t}`,h:"12",rounded:"l2",w:"full"}),e.jsx(d,{color:"fg.muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:`${n}.${t}`})]},c)})},o)})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(i,{size:"xl",children:"Background"})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(l,{each:["","subtle","overlay","ghost","muted","emphasized","contrast","panel","float","info","success","warning","error"],children:(n,o)=>e.jsxs(r,{gap:"xs",children:[e.jsx(g,{bg:n?`bg.${n}`:"bg",borderColor:"border.muted",borderWidth:"1px",h:"24",rounded:"l2",w:"full"}),e.jsx(d,{color:"fg.muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:n?`bg.${n}`:"bg"})]},o)})})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(i,{size:"xl",children:"Foreground"})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(l,{each:["","subtle","muted","emphasized","contrast","info","success","warning","error"],children:(n,o)=>e.jsxs(r,{gap:"xs",children:[e.jsx(j,{bg:n==="contrast"?"bg.contrast":void 0,borderColor:"border.muted",borderWidth:"1px",h:"24",rounded:"l2",w:"full",children:e.jsx(d,{color:n?`fg.${n}`:"fg",children:"Ag"})}),e.jsx(d,{color:"fg.muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:n?`fg.${n}`:"fg"})]},o)})})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(i,{size:"xl",children:"Border"})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(l,{each:["","subtle","muted","emphasized","contrast","info","success","warning","error"],children:(n,o)=>e.jsxs(r,{gap:"xs",children:[e.jsx(g,{borderColor:n?`border.${n}`:"border",borderWidth:"3px",h:"24",rounded:"l2",w:"full"}),e.jsx(d,{color:"fg.muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:n?`border.${n}`:"border"})]},o)})})})]}),e.jsx(l,{each:$,children:(n,o)=>e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(i,{size:"xl",children:S(n)})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(l,{each:["","contrast","fg","bg","ghost","subtle","muted","emphasized","solid","outline"],children:(t,c)=>e.jsxs(r,{gap:"xs",children:[e.jsx(g,{bg:t?`${n}.${t}`:n,borderColor:"border.muted",borderWidth:"1px",h:"24",rounded:"l2",w:"full"}),e.jsx(d,{color:"fg.muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:t?`${n}.${t}`:n})]},c)})})})]},o)})]});var u,p,C;h.parameters={...h.parameters,docs:{...(u=h.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(C=(p=h.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};const E=["Colors"];export{h as Colors,E as __namedExportsOrder,B as default};
