import{n as e}from"./chunk-jRWAZmH_.js";import{D as t,E as n,T as r}from"./core-BioRdg0-.js";import{t as i}from"./jsx-runtime-D_578c1K.js";var a,o,s,c,l;e((()=>{t(),a=i(),o={component:r,title:`Components / Slot`},s=()=>(0,a.jsx)(({asChild:e,...t})=>(0,a.jsx)(e?r:`button`,{...t}),{asChild:!0,onClick:e=>{e.defaultPrevented||console.log(`Not logged because default is prevented.`)},children:(0,a.jsx)(`a`,{href:`/about`,onClick:e=>e.preventDefault(),children:`About`})}),c=()=>(0,a.jsx)(({asChild:e,children:t,endIcon:i,startIcon:o,...s})=>(0,a.jsxs)(e?r:`button`,{...s,children:[o,(0,a.jsx)(n,{children:t}),i]}),{asChild:!0,children:(0,a.jsx)(`a`,{href:`/about`,children:`About`})}),s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const Button: FC<HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  }> = ({
    asChild,
    ...props
  }) => {
    const Component = asChild ? Slot : "button";
    return <Component {...props} />;
  };
  return <Button asChild onClick={ev => {
    if (!ev.defaultPrevented) console.log("Not logged because default is prevented.");
  }}>
      <a href="/about" onClick={ev => ev.preventDefault()}>
        About
      </a>
    </Button>;
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const Button: FC<HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    endIcon?: ReactNode;
    startIcon?: ReactNode;
  }> = ({
    asChild,
    children,
    endIcon,
    startIcon,
    ...props
  }) => {
    const Component = asChild ? Slot : "button";
    return <Component {...props}>
        {startIcon}
        <Slottable>{children}</Slottable>
        {endIcon}
      </Component>;
  };
  return <Button asChild>
      <a href="/about">About</a>
    </Button>;
}`,...c.parameters?.docs?.source}}},l=[`Basic`,`MultipleChildren`]}))();export{s as Basic,c as MultipleChildren,l as __namedExportsOrder,o as default};