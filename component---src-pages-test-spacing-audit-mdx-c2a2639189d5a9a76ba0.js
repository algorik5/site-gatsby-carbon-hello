(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),i=a("q1tI"),o=a.n(i),r=a("NmYn"),c=a.n(r),b=a("OKom"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),p=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(p.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=i.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.text},a)))))},j=a("pEPl"),O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=j.data.site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,c=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),y=(a("Oyvg"),a("Wbzz")),T=a("I8xM");var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=c()(e,{lower:!0}),o=i===n,r=new RegExp(n+"(?!-)"),b=a.replace(r,i);return Object(p.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=o,t),T.listItem)},Object(p.b)(y.Link,{className:T.link,to:""+b},e))}));return Object(p.b)("div",{className:T.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:T.list},i))))))},n}(o.a.Component),x=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,m=t.titleType,j=s.tabs,O=s.title,y=s.theme,T=s.description,v=s.keywords,A=n.data.site.pathPrefix,C=A?i.pathname.replace(A,""):i.pathname,I=j?C.split("/").slice(-1)[0]||c()(j[0],{lower:!0}):"";return Object(p.b)(l.a,{tabs:j,homepage:!1,theme:y,pageTitle:O,pageDescription:T,pageKeywords:v,titleType:m},Object(p.b)(u,{title:o?Object(p.b)(o,null):O,label:"label",tabs:j}),j&&Object(p.b)(N,{slug:C,tabs:j,currentTab:I}),Object(p.b)(x.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:d})),Object(p.b)(h.a,{pageContext:t,location:i,slug:C,tabs:j,currentTab:I}),Object(p.b)(b.a,null))}},koYI:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return N}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},b=c("PageDescription"),l=c("AnchorLinks"),s=c("AnchorLink"),d=c("Video"),m=c("Caption"),p=c("Accordion"),u=c("AccordionItem"),j=c("Tabs"),O=c("Tab"),g=c("Row"),h=c("Column"),y={_frontmatter:r},T=i.a;function N(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(T,o({},y,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"This is a demo page to see variations on components before/after headings.")),Object(n.b)(l,{mdxType:"AnchorLinks"},Object(n.b)(s,{mdxType:"AnchorLink"},"Headers and Paragraphs"),Object(n.b)(s,{mdxType:"AnchorLink"},"Headers and Videos"),Object(n.b)(s,{mdxType:"AnchorLink"},"Headers and Images"),Object(n.b)(s,{mdxType:"AnchorLink"},"Headers and Lists"),Object(n.b)(s,{mdxType:"AnchorLink"},"Headers and Accordions"),Object(n.b)(s,{mdxType:"AnchorLink"},"Headers and Tables"),Object(n.b)(s,{mdxType:"AnchorLink"},"Headers and Tabs"),Object(n.b)(s,{mdxType:"AnchorLink"},"Headers and Code"),Object(n.b)(s,{mdxType:"AnchorLink"},"Paragraph and Video"),Object(n.b)(s,{mdxType:"AnchorLink"},"Paragraph and Image"),Object(n.b)(s,{mdxType:"AnchorLink"},"Paragraph and Lists"),Object(n.b)(s,{mdxType:"AnchorLink"},"Paragraph and Accordion"),Object(n.b)(s,{mdxType:"AnchorLink"},"Paragraph and Tables"),Object(n.b)(s,{mdxType:"AnchorLink"},"Paragraph and Tabs"),Object(n.b)(s,{mdxType:"AnchorLink"},"Paragraph and Code")),Object(n.b)("h2",{id:"headers-and-paragraphs"},"Headers and Paragraphs"),Object(n.b)("h2",{id:"header-2"},"Header 2"),Object(n.b)("p",null,"I’m a paragraph underneath an h2. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),Object(n.b)("h3",{id:"header-3"},"Header 3"),Object(n.b)("p",null,"I’m a paragraph underneath an h3. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),Object(n.b)("h4",{id:"header-4"},"Header 4"),Object(n.b)("p",null,"I’m a paragraph underneath an h4. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),Object(n.b)("h2",{id:"headers-and-videos"},"Headers and Videos"),Object(n.b)("h2",{id:"header-2-1"},"Header 2"),Object(n.b)(d,{src:"/videos/hero-video.mp4",poster:"/images/poster.png",mdxType:"Video"},Object(n.b)("track",{default:!0,src:"/videos/vtt/hero-video.vtt",srcLang:"en"})),Object(n.b)("h3",{id:"header-3-1"},"Header 3"),Object(n.b)(d,{src:"/videos/hero-video.mp4",poster:"/images/poster.png",mdxType:"Video"},Object(n.b)("track",{default:!0,src:"/videos/vtt/hero-video.vtt",srcLang:"en"})),Object(n.b)("h4",{id:"header-4-1"},"Header 4"),Object(n.b)(d,{src:"/videos/hero-video.mp4",poster:"/images/poster.png",mdxType:"Video"},Object(n.b)("track",{default:!0,src:"/videos/vtt/hero-video.vtt",srcLang:"en"})),Object(n.b)("h2",{id:"headers-and-images"},"Headers and Images"),Object(n.b)("h2",{id:"header-2-2"},"Header 2"),Object(n.b)("img",{src:"/images/poster.png",alt:null}),Object(n.b)(m,{mdxType:"Caption"},"This is a regular caption. It will attempt to respond to it's container element appropriately."),Object(n.b)("h3",{id:"header-3-2"},"Header 3"),Object(n.b)("img",{src:"/images/poster.png",alt:null}),Object(n.b)(m,{mdxType:"Caption"},"This is a regular caption. It will attempt to respond to it's container element appropriately."),Object(n.b)("h4",{id:"header-4-2"},"Header 4"),Object(n.b)("img",{src:"/images/poster.png",alt:null}),Object(n.b)(m,{mdxType:"Caption"},"This is a regular caption. It will attempt to respond to it's container element appropriately."),Object(n.b)("h2",{id:"headers-and-lists"},"Headers and Lists"),Object(n.b)("h2",{id:"header-2-3"},"Header 2"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"First ordered list item"),Object(n.b)("li",{parentName:"ol"},"Item with a nested item",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Nested list item"))),Object(n.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Unordered list can use asterisks",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Nested list item"))),Object(n.b)("li",{parentName:"ul"},"Or hyphens to create list items")),Object(n.b)("h3",{id:"header-3-3"},"Header 3"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"First ordered list item"),Object(n.b)("li",{parentName:"ol"},"Item with a nested item",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Nested list item"))),Object(n.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Unordered list can use asterisks",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Nested list item"))),Object(n.b)("li",{parentName:"ul"},"Or hyphens to create list items")),Object(n.b)("h4",{id:"header-4-3"},"Header 4"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"First ordered list item"),Object(n.b)("li",{parentName:"ol"},"Item with a nested item",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Nested list item"))),Object(n.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Unordered list can use asterisks",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Nested list item"))),Object(n.b)("li",{parentName:"ul"},"Or hyphens to create list items")),Object(n.b)("h2",{id:"headers-and-accordions"},"Headers and Accordions"),Object(n.b)("h2",{id:"header-2-4"},"Header 2"),Object(n.b)(p,{mdxType:"Accordion"},Object(n.b)(u,{title:"Title 1",mdxType:"AccordionItem"},"Content Section"),Object(n.b)(u,{title:"Title 2",mdxType:"AccordionItem"},"Content Section"),Object(n.b)(u,{title:"Title 3",mdxType:"AccordionItem"},"Content Section")),Object(n.b)("h3",{id:"header-3-4"},"Header 3"),Object(n.b)(p,{mdxType:"Accordion"},Object(n.b)(u,{title:"Title 1",mdxType:"AccordionItem"},"Content Section"),Object(n.b)(u,{title:"Title 2",mdxType:"AccordionItem"},"Content Section"),Object(n.b)(u,{title:"Title 3",mdxType:"AccordionItem"},"Content Section")),Object(n.b)("h4",{id:"header-4-4"},"Header 4"),Object(n.b)(p,{mdxType:"Accordion"},Object(n.b)(u,{title:"Title 2",mdxType:"AccordionItem"},"Content Section"),Object(n.b)(u,{title:"Title 1",mdxType:"AccordionItem"},"Content Section"),Object(n.b)(u,{title:"Title 3",mdxType:"AccordionItem"},"Content Section")),Object(n.b)("h2",{id:"headers-and-tables"},"Headers and Tables"),Object(n.b)("h2",{id:"header-2-5"},"Header 2"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Tables"),Object(n.b)("th",o({parentName:"tr"},{align:"center"}),"Are"),Object(n.b)("th",o({parentName:"tr"},{align:"right"}),"Cool"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"col 3 is"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"right-aligned"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$1600")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"col 2 is"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"centered"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$12")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"zebra stripes"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"are neat"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$1")))),Object(n.b)("h3",{id:"header-3-5"},"Header 3"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Tables"),Object(n.b)("th",o({parentName:"tr"},{align:"center"}),"Are"),Object(n.b)("th",o({parentName:"tr"},{align:"right"}),"Cool"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"col 3 is"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"right-aligned"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$1600")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"col 2 is"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"centered"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$12")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"zebra stripes"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"are neat"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$1")))),Object(n.b)("h4",{id:"header-4-5"},"Header 4"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Tables"),Object(n.b)("th",o({parentName:"tr"},{align:"center"}),"Are"),Object(n.b)("th",o({parentName:"tr"},{align:"right"}),"Cool"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"col 3 is"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"right-aligned"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$1600")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"col 2 is"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"centered"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$12")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"zebra stripes"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"are neat"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$1")))),Object(n.b)("h2",{id:"headers-and-tabs"},"Headers and Tabs"),Object(n.b)("h2",{id:"header-2-6"},"Header 2"),Object(n.b)(j,{mdxType:"Tabs"},Object(n.b)(O,{label:"Text",mdxType:"Tab"},Object(n.b)("p",null,"The tab component can be used for a variety of content. From text, to images, to columns. If you want to have multiple columns, you’ll need to use our ",Object(n.b)("inlineCode",{parentName:"p"},"Row")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Column")," helpers as demonstrated in the “Two images” tab.")),Object(n.b)(O,{label:"Single image",mdxType:"Tab"},Object(n.b)("p",null,"If your content is full width, you don’t need ",Object(n.b)("inlineCode",{parentName:"p"},"Row")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Column")),Object(n.b)("img",{src:"/images/poster.png",alt:null})),Object(n.b)(O,{label:"Two images",mdxType:"Tab"},Object(n.b)(g,{mdxType:"Row"},Object(n.b)(h,{colSm:6,colLg:6,mdxType:"Column"},Object(n.b)("p",null,"Column one"),Object(n.b)("img",{src:"/images/poster.png",alt:null})),Object(n.b)(h,{colSm:6,colLg:6,mdxType:"Column"},Object(n.b)("p",null,"Column two"),Object(n.b)("img",{src:"/images/poster.png",alt:null}))))),Object(n.b)("h3",{id:"header-3-6"},"Header 3"),Object(n.b)(j,{mdxType:"Tabs"},Object(n.b)(O,{label:"Text",mdxType:"Tab"},Object(n.b)("p",null,"The tab component can be used for a variety of content. From text, to images, to columns. If you want to have multiple columns, you’ll need to use our ",Object(n.b)("inlineCode",{parentName:"p"},"Row")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Column")," helpers as demonstrated in the “Two images” tab.")),Object(n.b)(O,{label:"Single image",mdxType:"Tab"},Object(n.b)("p",null,"If your content is full width, you don’t need ",Object(n.b)("inlineCode",{parentName:"p"},"Row")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Column")),Object(n.b)("img",{src:"/images/poster.png",alt:null})),Object(n.b)(O,{label:"Two images",mdxType:"Tab"},Object(n.b)(g,{mdxType:"Row"},Object(n.b)(h,{colSm:6,colLg:6,mdxType:"Column"},Object(n.b)("p",null,"Column one"),Object(n.b)("img",{src:"/images/poster.png",alt:null})),Object(n.b)(h,{colSm:6,colLg:6,mdxType:"Column"},Object(n.b)("p",null,"Column two"),Object(n.b)("img",{src:"/images/poster.png",alt:null}))))),Object(n.b)("h4",{id:"header-4-6"},"Header 4"),Object(n.b)(j,{mdxType:"Tabs"},Object(n.b)(O,{label:"Text",mdxType:"Tab"},Object(n.b)("p",null,"The tab component can be used for a variety of content. From text, to images, to columns. If you want to have multiple columns, you’ll need to use our ",Object(n.b)("inlineCode",{parentName:"p"},"Row")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Column")," helpers as demonstrated in the “Two images” tab.")),Object(n.b)(O,{label:"Single image",mdxType:"Tab"},Object(n.b)("p",null,"If your content is full width, you don’t need ",Object(n.b)("inlineCode",{parentName:"p"},"Row")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Column")),Object(n.b)("img",{src:"/images/poster.png",alt:null})),Object(n.b)(O,{label:"Two images",mdxType:"Tab"},Object(n.b)(g,{mdxType:"Row"},Object(n.b)(h,{colSm:6,colLg:6,mdxType:"Column"},Object(n.b)("p",null,"Column one"),Object(n.b)("img",{src:"/images/poster.png",alt:null})),Object(n.b)(h,{colSm:6,colLg:6,mdxType:"Column"},Object(n.b)("p",null,"Column two"),Object(n.b)("img",{src:"/images/poster.png",alt:null}))))),Object(n.b)("h2",{id:"headers-and-code"},"Headers and Code"),Object(n.b)("h2",{id:"header-2-7"},"Header 2"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Accordion/Accordion.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Accordion",path:"components/Accordion/Accordion.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Accordion"}),'<Accordion>\n  <AccordionItem title="Title 1">Content Section</AccordionItem>\n  <AccordionItem title="Title 2">Content Section</AccordionItem>\n  <AccordionItem title="Title 3">Content Section</AccordionItem>\n</Accordion>\n')),Object(n.b)("h3",{id:"header-3-7"},"Header 3"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Accordion/Accordion.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Accordion",path:"components/Accordion/Accordion.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Accordion"}),'<Accordion>\n  <AccordionItem title="Title 1">Content Section</AccordionItem>\n  <AccordionItem title="Title 2">Content Section</AccordionItem>\n  <AccordionItem title="Title 3">Content Section</AccordionItem>\n</Accordion>\n')),Object(n.b)("h4",{id:"header-4-7"},"Header 4"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Accordion/Accordion.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Accordion",path:"components/Accordion/Accordion.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Accordion"}),'<Accordion>\n  <AccordionItem title="Title 1">Content Section</AccordionItem>\n  <AccordionItem title="Title 2">Content Section</AccordionItem>\n  <AccordionItem title="Title 3">Content Section</AccordionItem>\n</Accordion>\n')),Object(n.b)("h2",{id:"paragraph-and-video"},"Paragraph and Video"),Object(n.b)("p",null,"I’m a paragraph above a video. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)(d,{src:"/videos/hero-video.mp4",poster:"/images/poster.png",mdxType:"Video"},Object(n.b)("track",{default:!0,src:"/videos/vtt/hero-video.vtt",srcLang:"en"})),Object(n.b)("p",null,"I’m a paragraph below a video. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)("h2",{id:"paragraph-and-image"},"Paragraph and Image"),Object(n.b)("p",null,"I’m a paragraph above an image. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)("img",{src:"/images/poster.png",alt:null}),Object(n.b)("p",null,"I’m a paragraph below an image. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)("h2",{id:"paragraph-and-list"},"Paragraph and List"),Object(n.b)("p",null,"I’m a paragraph above a list. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"First ordered list item"),Object(n.b)("li",{parentName:"ol"},"Item with a nested item",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Nested list item"))),Object(n.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Unordered list can use asterisks",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Nested list item"))),Object(n.b)("li",{parentName:"ul"},"Or hyphens to create list items")),Object(n.b)("p",null,"I’m a paragraph below a list. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)("h2",{id:"paragraph-and-accordion"},"Paragraph and Accordion"),Object(n.b)("p",null,"I’m a paragraph above an Accordion. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)(p,{mdxType:"Accordion"},Object(n.b)(u,{title:"Title 1",mdxType:"AccordionItem"},"Content Section"),Object(n.b)(u,{title:"Title 2",mdxType:"AccordionItem"},"Content Section"),Object(n.b)(u,{title:"Title 3",mdxType:"AccordionItem"},"Content Section")),Object(n.b)("p",null,"I’m a paragraph below an Accordion. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)("h2",{id:"paragraph-and-tables"},"Paragraph and Tables"),Object(n.b)("p",null,"I’m a paragraph above a table. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Tables"),Object(n.b)("th",o({parentName:"tr"},{align:"center"}),"Are"),Object(n.b)("th",o({parentName:"tr"},{align:"right"}),"Cool"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"col 3 is"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"right-aligned"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$1600")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"col 2 is"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"centered"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$12")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"zebra stripes"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"are neat"),Object(n.b)("td",o({parentName:"tr"},{align:"right"}),"$1")))),Object(n.b)("p",null,"I’m a paragraph below a table. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)("h2",{id:"paragraph-and-tabs"},"Paragraph and Tabs"),Object(n.b)("p",null,"I’m a paragraph above Tabs. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)(j,{mdxType:"Tabs"},Object(n.b)(O,{label:"Text",mdxType:"Tab"},Object(n.b)("p",null,"The tab component can be used for a variety of content. From text, to images, to columns. If you want to have multiple columns, you’ll need to use our ",Object(n.b)("inlineCode",{parentName:"p"},"Row")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Column")," helpers as demonstrated in the “Two images” tab.")),Object(n.b)(O,{label:"Single image",mdxType:"Tab"},Object(n.b)("p",null,"If your content is full width, you don’t need ",Object(n.b)("inlineCode",{parentName:"p"},"Row")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Column")),Object(n.b)("img",{src:"/images/poster.png",alt:null})),Object(n.b)(O,{label:"Two images",mdxType:"Tab"},Object(n.b)(g,{mdxType:"Row"},Object(n.b)(h,{colSm:6,colLg:6,mdxType:"Column"},Object(n.b)("p",null,"Column one"),Object(n.b)("img",{src:"/images/poster.png",alt:null})),Object(n.b)(h,{colSm:6,colLg:6,mdxType:"Column"},Object(n.b)("p",null,"Column two"),Object(n.b)("img",{src:"/images/poster.png",alt:null}))))),Object(n.b)("p",null,"I’m a paragraph below Tabs. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)("h2",{id:"paragraph-and-code"},"Paragraph and Code"),Object(n.b)("p",null,"I’m a paragraph above code. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Tabs/Tabs.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Tabs",path:"components/Tabs/Tabs.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Tabs"}),'<Tab label="Two images">\n\n<Row>\n<Column colSm={6} colLg={6}>\n\nColumn one\n\n![](/images/poster.png)\n\n</Column>\n<Column colSm={6} colLg={6}>\n\nColumn two\n\n![](/images/poster.png)\n\n</Column>\n</Row>\n\n</Tab>\n\n// Make sure you close the wrapper component\n</Tabs>\n')),Object(n.b)("p",null,"I’m a paragraph below code. Lorem ipsum dolor sit amet, consectetur adipiscers elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"))}N.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/site-gatsby-carbon-hello"}}}')}}]);
//# sourceMappingURL=component---src-pages-test-spacing-audit-mdx-c2a2639189d5a9a76ba0.js.map