(()=>{var e,t={166:(e,t,r)=>{"use strict";const n=window.wp.blocks,o=JSON.parse('{"name":"tt/server-side-render-block-template"}'),l=window.React,s={};s.block=(0,l.createElement)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",width:"24",height:"24"},(0,l.createElement)("path",{d:"M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M5,19.5 c-0.3,0-0.5-0.2-0.5-0.5V5c0-0.3,0.2-0.5,0.5-0.5h14c0.3,0,0.5,0.2,0.5,0.5v14c0,0.3-0.2,0.5-0.5,0.5H5z"}));const a=s;var i=r(184),c=r.n(i);const p=window.wp.blockEditor,u=window.wp.components,d=window.wp.data,v=window.wp.element,m=window.wp.i18n,b=window.wp.serverSideRender;var g=r.n(b);const w=window.wp.coreData,{name:f}=o;(0,n.registerBlockType)(f,{icon:a.block,edit:function({attributes:e,setAttributes:t}){const{textAlign:r,title:n,postType:o,numberOfPosts:s}=e;return(0,l.createElement)(l.Fragment,null,(()=>{const{postTypesSelectOptions:e}=(()=>{const e=(0,d.useSelect)((e=>{const{getPostTypes:t}=e(w.store),r=["attachment"],n=t({per_page:-1})?.filter((({viewable:e,slug:t})=>e&&!r.includes(t)));return n}),[]);return{postTypesTaxonomiesMap:(0,v.useMemo)((()=>{if(e?.length)return e.reduce(((e,t)=>(e[t.slug]=t.taxonomies,e)),{})}),[e]),postTypesSelectOptions:(0,v.useMemo)((()=>(e||[]).map((({labels:e,slug:t})=>({label:e.singular_name,value:t})))),[e])}})();return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(p.InspectorControls,null,(0,l.createElement)(u.PanelBody,{title:(0,m.__)("Settings","server-side-render-block-template")},(0,l.createElement)(u.TextControl,{label:(0,m.__)("Title","server-side-render-block-template"),value:n,onChange:e=>t({title:e})}),(0,l.createElement)(u.SelectControl,{label:(0,m.__)("Post type","server-side-render-block-template"),value:o,options:e,onChange:e=>t({postType:e})}),(0,l.createElement)(u.RangeControl,{label:(0,m.__)("Number of posts","server-side-render-block-template"),value:s,onChange:e=>t({numberOfPosts:e}),min:1,max:10}))))})(),(0,l.createElement)(p.BlockControls,null,(0,l.createElement)(p.AlignmentToolbar,{value:r,onChange:e=>t({textAlign:e})})),(()=>{const t=(0,p.useBlockProps)({className:c()({[`has-text-align-${r}`]:r})});return(0,l.createElement)("div",{...t},(0,l.createElement)(u.Disabled,null,(0,l.createElement)(g(),{block:"tt/server-side-render-block-template",skipBlockSupportAttributes:!0,attributes:e})))})())}})},184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var s=o.apply(null,r);s&&e.push(s)}}else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,r,o,l)=>{if(!r){var s=1/0;for(p=0;p<e.length;p++){for(var[r,o,l]=e[p],a=!0,i=0;i<r.length;i++)(!1&l||s>=l)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(a=!1,l<s&&(s=l));if(a){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[r,o,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,l,[s,a,i]=r,c=0;if(s.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(i)var p=i(n)}for(t&&t(r);c<s.length;c++)l=s[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(p)},r=globalThis.webpackChunkserver_side_render_block_template=globalThis.webpackChunkserver_side_render_block_template||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[431],(()=>n(166)));o=n.O(o)})();