import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Bt as n,Kf as r,Lt as i,Oi as a,Wm as o,as as s,cs as c,im as l,iu as u,jd as d,ji as f,ls as p,os as m,ru as h,vi as g,yi as _}from"./iframe-BdSFgLyo.js";import{n as v,t as y}from"./dist-BKTAz4W2.js";var b,x,S,C,w,T,E,D,O,k,A;e((()=>{y(),b=t(o(),1),g(),s(),a(),d(),i(),h(),x=l(),S={component:_,title:`Components / For`},C=()=>(0,x.jsx)(n,{children:(0,x.jsx)(_,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),children:({id:e,name:t,email:n})=>(0,x.jsxs)(p,{size:`md`,variant:`outline`,children:[(0,x.jsx)(c,{children:(0,x.jsx)(u,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(m,{pt:`sm`,children:[(0,x.jsxs)(u,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(u,{color:`muted`,children:[`Email: `,n]})]})]},e)})}),w=()=>(0,x.jsx)(n,{children:(0,x.jsx)(_,{each:[],fallback:(0,x.jsx)(f,{description:`There are no items to show`,indicator:(0,x.jsx)(r,{})}),children:(e,t)=>(0,x.jsx)(u,{children:e},t)})}),T=()=>(0,x.jsx)(n,{children:(0,x.jsx)(_,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),filter:({email:e})=>e.includes(`gmail`),children:({id:e,name:t,email:n})=>(0,x.jsxs)(p,{size:`md`,variant:`outline`,children:[(0,x.jsx)(c,{children:(0,x.jsx)(u,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(m,{pt:`sm`,children:[(0,x.jsxs)(u,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(u,{color:`muted`,children:[`Email: `,n]})]})]},e)})}),E=()=>(0,x.jsx)(n,{children:(0,x.jsx)(_,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),sort:(e,t)=>e.name.localeCompare(t.name),children:({id:e,name:t,email:n})=>(0,x.jsxs)(p,{size:`md`,variant:`outline`,children:[(0,x.jsx)(c,{children:(0,x.jsx)(u,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(m,{pt:`sm`,children:[(0,x.jsxs)(u,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(u,{color:`muted`,children:[`Email: `,n]})]})]},e)})}),D=()=>(0,x.jsx)(n,{children:(0,x.jsx)(_,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),offset:5,children:({id:e,name:t,email:n})=>(0,x.jsxs)(p,{size:`md`,variant:`outline`,children:[(0,x.jsx)(c,{children:(0,x.jsx)(u,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(m,{pt:`sm`,children:[(0,x.jsxs)(u,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(u,{color:`muted`,children:[`Email: `,n]})]})]},e)})}),O=()=>(0,x.jsx)(n,{children:(0,x.jsx)(_,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),limit:5,children:({id:e,name:t,email:n})=>(0,x.jsxs)(p,{size:`md`,variant:`outline`,children:[(0,x.jsx)(c,{children:(0,x.jsx)(u,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(m,{pt:`sm`,children:[(0,x.jsxs)(u,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(u,{color:`muted`,children:[`Email: `,n]})]})]},e)})}),k=()=>(0,x.jsx)(n,{children:(0,x.jsx)(_,{each:(0,b.useMemo)(()=>Array.from({length:10},(e,t)=>({id:t,name:`${v.person.firstName()} ${v.person.lastName()}`,email:v.internet.email()})),[]),reverse:!0,children:({id:e,name:t,email:n})=>(0,x.jsxs)(p,{size:`md`,variant:`outline`,children:[(0,x.jsx)(c,{children:(0,x.jsx)(u,{as:`h1`,fontSize:`lg`,children:t})}),(0,x.jsxs)(m,{pt:`sm`,children:[(0,x.jsxs)(u,{color:`muted`,children:[`Id (Index): `,e]}),(0,x.jsxs)(u,{color:`muted`,children:[`Email: `,n]})]})]},e)})}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <For each={[]} fallback={<EmptyState.Root description="There are no items to show" indicator={<BoxIcon />} />}>
        {(item, index) => <Text key={index}>{item}</Text>}
      </For>
    </VStack>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} filter={({
      email
    }) => email.includes("gmail")}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} sort={(a, b) => a.name.localeCompare(b.name)}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} offset={5}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} limit={5}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} reverse>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...k.parameters?.docs?.source}}},A=[`Basic`,`FallBack`,`Filter`,`Sort`,`Offset`,`Limit`,`Reverse`]}))();export{C as Basic,w as FallBack,T as Filter,O as Limit,D as Offset,k as Reverse,E as Sort,A as __namedExportsOrder,S as default};