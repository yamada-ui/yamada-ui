import{d as o}from"./index-VCLV_JO6.js";import{m as t,Q as r,z as a,_ as g,V as h,$ as i,a0 as l}from"./factory-BFmlPmGv.js";function _(e=o){return function(...n){return function({merge:s=!0,pick:f=[],omit:m=[]}={}){let c=[...n],u=n[n.length-1];return m.length&&(e=g(e,m)),f.length&&(e=h(e,f)),!i(u)&&c.length>1?(c=c.slice(0,c.length-1),s&&(u=t(e,u))):u=s?e:{},c.reduce((p,d)=>t(p,a(d,p)),u)}}}const $=_(o);function z(e,n){return t(r(o,e,{}),n??{})}function C(e,n){const s={theme:{themeScheme:"base",changeThemeScheme:l,__config:{},__cssMap:{},__cssVars:{},__breakpoints:void 0}};return t(a(r(o,`styles.${e}`,{}),s),a(n,s)??{})}function S(e,n){return t(r(o,`components.${e}`,{}),n??{})}function j(e,n){return t(r(o,`components.${e}.sizes`,{}),n??{})}function O(e,n){return t(r(o,`components.${e}.variants`,{}),n??{})}function V(e,n){return t(r(o,`components.${e}.defaultProps`,{}),n??{})}export{z as a,C as b,S as c,O as d,$ as e,j as f,V as g};