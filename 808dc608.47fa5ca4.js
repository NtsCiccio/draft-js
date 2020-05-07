(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));n(210),n(211),n(207),n(212),n(213),n(214);var i=n(208);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var a={id:"advanced-topics-issues-and-pitfalls",title:"Issues and Pitfalls"},s=[{value:"Common Pitfalls",id:"common-pitfalls",children:[{value:"Delayed state updates",id:"delayed-state-updates",children:[]},{value:"Missing <code>Draft.css</code>",id:"missing-draftcss",children:[]}]},{value:"Known Issues",id:"known-issues",children:[{value:"Custom OSX Keybindings",id:"custom-osx-keybindings",children:[]},{value:"Browser plugins/extensions",id:"browser-pluginsextensions",children:[]},{value:"IME and Internet Explorer",id:"ime-and-internet-explorer",children:[]},{value:"Polyfills",id:"polyfills",children:[]},{value:"Mobile Not Yet Supported",id:"mobile-not-yet-supported",children:[]}]}],r={rightToc:s},l="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(i.b)(l,o({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This article addresses some known issues with the Draft editor framework, as\nwell as some common pitfalls that we have encountered while using the framework\nat Facebook."),Object(i.b)("h2",{id:"common-pitfalls"},"Common Pitfalls"),Object(i.b)("h3",{id:"delayed-state-updates"},"Delayed state updates"),Object(i.b)("p",null,"A common pattern for unidirectional data management is to batch or otherwise\ndelay updates to data stores, using a setTimeout or another mechanism. Stores are\nupdated, then emit changes to the relevant React components to propagate\nre-rendering."),Object(i.b)("p",null,"When delays are introduced to a React application with a Draft editor, however,\nit is possible to cause significant interaction problems. This is because the\neditor expects immediate updates and renders that stay in sync with the user's typing\nbehavior. Delays can prevent updates from being propagated through the editor\ncomponent tree, which can cause a disconnect between keystrokes and updates."),Object(i.b)("p",null,"To avoid this while still using a delaying or batching mechanism, you should\nseparate the delay behavior from your ",Object(i.b)("inlineCode",{parentName:"p"},"Editor")," state propagation. That is,\nyou must always allow your ",Object(i.b)("inlineCode",{parentName:"p"},"EditorState")," to propagate to your ",Object(i.b)("inlineCode",{parentName:"p"},"Editor"),"\ncomponent without delay, and independently perform batched updates that do\nnot affect the state of your ",Object(i.b)("inlineCode",{parentName:"p"},"Editor")," component."),Object(i.b)("h3",{id:"missing-draftcss"},"Missing ",Object(i.b)("inlineCode",{parentName:"h3"},"Draft.css")),Object(i.b)("p",null,"The Draft framework includes a handful of CSS resources intended for use with\nthe editor, available in a single file via the build, ",Object(i.b)("inlineCode",{parentName:"p"},"Draft.css"),"."),Object(i.b)("p",null,"This CSS should be included when rendering the editor, as these styles set defaults\nfor text alignment, spacing, and other important features. Without it, you may\nencounter issues with block positioning, alignment, and cursor behavior."),Object(i.b)("p",null,"If you choose to write your own CSS independent of ",Object(i.b)("inlineCode",{parentName:"p"},"Draft.css"),", you will most\nlikely need to replicate much of the default styling."),Object(i.b)("h2",{id:"known-issues"},"Known Issues"),Object(i.b)("h3",{id:"custom-osx-keybindings"},"Custom OSX Keybindings"),Object(i.b)("p",null,"Because the browser has no access to OS-level custom keybindings, it is not\npossible to intercept edit intent behaviors that do not map to default system\nkey bindings."),Object(i.b)("p",null,"The result of this is that users who use custom keybindings may encounter\nissues with Draft editors, since their key commands may not behave as expected."),Object(i.b)("h3",{id:"browser-pluginsextensions"},"Browser plugins/extensions"),Object(i.b)("p",null,"As with any React application, browser plugins and extensions that modify the\nDOM can cause Draft editors to break."),Object(i.b)("p",null,"Grammar checkers, for instance, may modify the DOM within contentEditable\nelements, adding styles like underlines and backgrounds. Since React cannot\nreconcile the DOM if the browser does not match its expectations,\nthe editor state may fail to remain in sync with the DOM."),Object(i.b)("p",null,"Certain old ad blockers are also known to break the native DOM Selection\nAPI -- a bad idea no matter what! -- and since Draft depends on this API to\nmaintain controlled selection state, this can cause trouble for editor\ninteraction."),Object(i.b)("h3",{id:"ime-and-internet-explorer"},"IME and Internet Explorer"),Object(i.b)("p",null,"As of IE11, Internet Explorer demonstrates notable issues with certain international\ninput methods, most significantly Korean input."),Object(i.b)("h3",{id:"polyfills"},"Polyfills"),Object(i.b)("p",null,"Some of Draft's code and that of its dependencies make use of ES2015 language\nfeatures. Syntax features like ",Object(i.b)("inlineCode",{parentName:"p"},"class")," are compiled away via Babel when Draft is\nbuilt, but it does not include polyfills for APIs now included in many modern\nbrowsers (for instance: ",Object(i.b)("inlineCode",{parentName:"p"},"String.prototype.startsWith"),"). We expect your browser\nsupports these APIs natively or with the assistance of a polyfill. One such\npolyfill is ",Object(i.b)("a",o({parentName:"p"},{href:"https://github.com/es-shims/es6-shim"}),"es6-shim"),", which we use in\nmany examples but you are free to use\n",Object(i.b)("a",o({parentName:"p"},{href:"https://babeljs.io/docs/usage/polyfill/"}),"babel-polyfill")," if that's more\nyour scene."),Object(i.b)("p",null,"When using either polyfill/shim, you should include it as early as possible in\nyour application's entrypoint (at the very minimum, before you import Draft).\nFor instance, using\n",Object(i.b)("a",o({parentName:"p"},{href:"https://github.com/facebookincubator/create-react-app"}),"create-react-app")," and\ntargeting IE11, ",Object(i.b)("inlineCode",{parentName:"p"},"src/index.js")," is probably a good spot to import your polyfill:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"src/index.js"))),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-js"}),"import 'babel-polyfill';\n// or\nimport 'es6-shim';\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport './index.css';\n\nReactDOM.render(<App />, document.getElementById('root'));\n")),Object(i.b)("h3",{id:"mobile-not-yet-supported"},"Mobile Not Yet Supported"),Object(i.b)("p",null,"Draft.js is moving towards full mobile support, but does not officially support\nmobile browsers at this point. There are some known issues affecting Android and\niOS - see issues tagged\n",Object(i.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/draft-js/labels/android"}),"'android'")," or\n",Object(i.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/draft-js/labels/ios"}),"'ios'")," for the current status."))}c.isMDXComponent=!0}}]);