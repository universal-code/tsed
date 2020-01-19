(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{44:function(t,s,n){t.exports=n.p+"assets/img/middleware-call-sequence.9d80cf70.svg"},865:function(t,s,n){"use strict";n.r(s);var e=n(1),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"middleware-call-sequences"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#middleware-call-sequences"}},[t._v("#")]),t._v(" Middleware call sequences")]),t._v(" "),e("p",[t._v("As you see in the previous section, a middleware can be use on different context:")]),t._v(" "),e("ul",[e("li",[e("ApiSymbolName",[t._v("ServerLoader")]),t._v(",")],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/docs/controllers.html"}},[t._v("Controller")]),t._v(",")],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/docs/controllers.html"}},[t._v("Endpoint")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("Middleware associated to a controller or endpoint as a same constraint that an endpoint.\nIt'll be played only when the url request match with the path associated to the controller and his endpoint method.")]),t._v(" "),e("p",[t._v("When a request is sent to the server all middlewares added in the "),e("ApiSymbolName",[t._v("ServerLoader")]),t._v(", "),e("router-link",{attrs:{to:"/docs/controllers.html"}},[t._v("Controller")]),t._v(" or Endpoint with decorators\nwill be called while a response isn't sent by one of the middleware in the stack.")],1),t._v(" "),e("figure",[e("img",{staticStyle:{"max-width":"400px",padding:"30px"},attrs:{src:n(44)}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("The middlewares shown in the Endpoints box will be replayed as many times as it has endpoint that match\nthe request url.")])]),t._v(" "),e("blockquote",[e("p",[t._v("(1) Render middleware is called only when a the "),e("ApiSymbolName",[t._v("Render")]),t._v(" decorator is used on the endpoint.")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("(2) SendResponse middleware send a response only when a data is return by the endpoint method or if the endpoint is the latest called endpoint for the resolved route.")])]),t._v(" "),e("p",[t._v("For example:")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Controller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Use"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UseAfter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UseBefore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UseBeforeEach"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/common"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Controller")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseAfter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MdlwCtrlAfter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseBefore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MdlwCtrlBefore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseBeforeEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MdlwCtrlBeforeEach"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MdlwCtrl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCtrl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseBefore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MdlwBefore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Mdlw"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseAfter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MdlwAfter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("endpointA")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EndpointA"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("endpointB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EndpointB"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br")])]),e("p",[t._v("According to the call sequence scheme, the stack calls will be there:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Middlewares")]),t._v(" added in ServerLoader (logger, express middleware, etc...),")]),t._v(" "),e("li",[e("strong",[t._v("MdlwCtrlBefore")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("MdlwCtrlBeforeEach")])]),t._v(" "),e("li",[e("strong",[t._v("MdlwBefore")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("MdlwCtrl")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("MyCtrl.endpointA")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("MdlwAfter")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("SendResponse")]),t._v(", (but nothing data is returned by the endpointA)")]),t._v(" "),e("li",[e("strong",[t._v("MdlwCtrlBeforeEach")])]),t._v(" "),e("li",[e("strong",[t._v("MdlwCtrl")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("MyCtrl.endpointB")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("MdlwAfter")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("SendResponse")]),t._v(", send a response because endpointB return a data,")]),t._v(" "),e("li",[e("strong",[t._v("MdlwCtrlAfter")]),t._v(", but this middleware will not be called because a response is sent.")]),t._v(" "),e("li",[e("strong",[t._v("Middleware")]),t._v(" added in ServerLoader (not called too).")])])])}),[],!1,null,null,null);s.default=a.exports}}]);