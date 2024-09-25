import{j as c}from"./extends-CwFRzn3r.js";import{I as j,C as v,W as S}from"./icon-C9JvswpF.js";import{L as w}from"./loading-DQUUkNfv.js";import{o as C,b as m,c as d}from"./factory-BFmlPmGv.js";import{f}from"./forward-ref-BWI-Phbn.js";import{u as A,o as N}from"./theme-provider-BxuddooS.js";import{a as b}from"./use-component-style-EAJDzyrD.js";const y={info:{icon:j,colorScheme:"info"},success:{icon:v,colorScheme:"success"},warning:{icon:S,colorScheme:"warning"},error:{icon:S,colorScheme:"danger"},loading:{icon:w,colorScheme:"primary"}},[P,h]=C({name:"AlertStylesContext",errorMessage:`useAlert returned is 'undefined'. Seems you forgot to wrap the components in "<Alert />" `}),T=(o,e)=>{var s;return((s=e==null?void 0:e[o])==null?void 0:s.colorScheme)??y[o].colorScheme},k=(o,e)=>{var s;return((s=e==null?void 0:e[o])==null?void 0:s.icon)??y[o].icon},I=f(({status:o="info",colorScheme:e,...s},t)=>{var g,x;const{theme:r}=A(),n=((x=(g=r.__config)==null?void 0:g.alert)==null?void 0:x.statuses)??{};e??(e=T(o,n));const[i,p]=b("Alert",{...s,colorScheme:e}),{className:u,children:_,...l}=N(p),a={w:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...i.container};return c.jsx(P,{value:{status:o,styles:i},children:c.jsx(m.div,{ref:t,className:d("ui-alert",u),role:"alert",__css:a,...l,children:_})})}),q=({className:o,children:e,variant:s="oval",...t})=>{var l,a;const{status:r,styles:n}=h(),{theme:i}=A(),p=((a=(l=i.__config)==null?void 0:l.alert)==null?void 0:a.statuses)??{},u=k(r,p),_={...n.icon,...r==="loading"?n.loading:{}};return c.jsx(m.span,{display:"inherit",className:d("ui-alert__icon",o),__css:_,...t,children:e||c.jsx(u,{...r==="loading"?{variant:s,color:"currentcolor"}:{boxSize:"100%"}})})},B=f(({className:o,...e},s)=>{const{styles:t}=h(),r={display:"block",...t.title};return c.jsx(m.p,{ref:s,className:d("ui-alert__title",o),__css:r,...e})}),F=f(({className:o,...e},s)=>{const{styles:t}=h(),r={...t.description};return c.jsx(m.span,{ref:s,className:d("ui-alert__desc",o),__css:r,...e})});I.displayName="Alert";I.__ui__="Alert";export{I as A,q as a,B as b,F as c};