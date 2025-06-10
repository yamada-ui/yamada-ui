import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as u}from"./index-Bv9Y92EF.js";import{B as j}from"./box-DEXBWJw5.js";import{F as s}from"./for-yc9AuMun.js";import{V as w}from"./stack-DL8tKm2J.js";import{C as f,a as C,b as T}from"./card-DDHlif2n.js";import{T as a}from"./text-KN7rBBtq.js";import{E as k}from"./empty-state-dzV-Rd9W.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-DKuqv-9Z.js";import"./use-component-style-DHLtMqa5.js";import"./factory-7Z88KRtK.js";import"./theme-provider-DsbwOWxu.js";import"./use-var-Bz9rJ8_M.js";import"./forward-ref-DH6f5tnY.js";import"./createLucideIcon-Bq8XVWwL.js";const R={component:s,title:"Components / Other / For"},r=()=>{const n=u.useMemo(()=>[{name:"孫悟空",powers:["かめはめ波","元気玉"]},{name:"ベジータ",powers:["ギャリック砲","ビッグバンアタック"]},{name:"ピッコロ",powers:["魔貫光殺砲","再生能力"]}],[]);return e.jsx(w,{children:e.jsx(s,{each:n,children:({name:t,powers:l},h)=>e.jsxs(f,{size:"md",variant:"outline",children:[e.jsx(C,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:t})}),e.jsx(T,{pt:"sm",children:e.jsxs(a,{color:"muted",children:["Powers: ",l.join(", ")]})})]},h)})})},o=()=>e.jsx(s,{each:[],fallback:e.jsx(k,{description:"There are no items to show",indicator:e.jsx(j,{})}),children:(n,t)=>e.jsx(a,{children:n},t)});var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const items = useMemo(() => [{
    name: "孫悟空",
    powers: ["かめはめ波", "元気玉"]
  }, {
    name: "ベジータ",
    powers: ["ギャリック砲", "ビッグバンアタック"]
  }, {
    name: "ピッコロ",
    powers: ["魔貫光殺砲", "再生能力"]
  }], []);
  return <VStack>
      <For each={items}>
        {({
        name,
        powers
      }, index) => <Card key={index} size="md" variant="outline">
            <CardHeader>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </CardHeader>

            <CardBody pt="sm">
              <Text color="muted">Powers: {powers.join(", ")}</Text>
            </CardBody>
          </Card>}
      </For>
    </VStack>;
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <For each={[]} fallback={<EmptyState description="There are no items to show" indicator={<BoxIcon />} />}>
      {(item, index) => <Text key={index}>{item}</Text>}
    </For>;
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const q=["basic","withFallBack"];export{q as __namedExportsOrder,r as basic,R as default,o as withFallBack};
