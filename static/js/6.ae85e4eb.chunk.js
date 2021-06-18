/*! For license information please see 6.ae85e4eb.chunk.js.LICENSE.txt */
(this.webpackJsonptikitoken=this.webpackJsonptikitoken||[]).push([[6],{104:function(e,t,a){"use strict";var r=a(5),n=a.n(r),l=a(105),s=a.n(l);t.a=function(e){var t=e.icon,a=e.iconColorClass,r=void 0===a?"text-purple-600 dark:text-purple-100":a,l=e.bgColorClass,o=void 0===l?"bg-purple-100 dark:bg-purple-600":l,c=e.className,i=s()("p-3 rounded-full",r,o,c);return n.a.createElement("div",{className:i},n.a.createElement(t,{className:"w-5 h-5"}))}},105:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var s=n.apply(null,r);s&&e.push(s)}else if("object"===l)for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},222:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a.n(r),l=a(78),s=(a(83),a(79),a(93),a(36));a(80),a(104);t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,"How It Works"),n.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2"},n.a.createElement(s.Card,null,n.a.createElement(s.CardBody,null,n.a.createElement("p",{className:"mb-4 text-3xl font-semibold text-gray-600 dark:text-gray-300"},"1. Buying"),n.a.createElement("p",{className:"text-gray-600 text-2xl dark:text-gray-400"},"You can buy $TIKI from PancakeSwap ",n.a.createElement("a",{className:"text-purple-500",href:"https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9b76D1B12Ff738c113200EB043350022EBf12Ff0",target:"_blank",rel:"noopener noreferrer"},"HERE"),", and when you buy tokens for the first time, you become eligible to receive automatic BNB rewards for holding"))),n.a.createElement(s.Card,{colored:!0,className:"text-white bg-purple-600"},n.a.createElement(s.CardBody,null,n.a.createElement("p",{className:"mb-4  text-3xl font-semibold"},"2. Harvesting"),n.a.createElement("p",{className:"text-2xl"},"Every time someone buys or sells $TIKI, the protocol swaps 10% of the tokens they bought (or 12% on sells) for BNB and adds it to the automatic rewards pool"))),n.a.createElement(s.Card,{colored:!0,className:"text-white bg-purple-600"},n.a.createElement(s.CardBody,null,n.a.createElement("p",{className:"mb-4  text-3xl font-semibold"},"3. Earning"),n.a.createElement("p",{className:"text-2xl"},"Your earnings are calculated based on all the transactions that occured after you bought your tokens"))),n.a.createElement(s.Card,null,n.a.createElement(s.CardBody,null,n.a.createElement("p",{className:"mb-4 text-3xl font-semibold text-gray-600 dark:text-gray-300"},"4. Payouts"),n.a.createElement("p",{className:"text-gray-600 text-2xl dark:text-gray-400"},"Every 1 hour, you are automatically paid BNB in proportion to the size of your holdings relative to the supply"))),n.a.createElement(s.Card,null,n.a.createElement(s.CardBody,null,n.a.createElement("p",{className:"mb-4 font-semibold text-gray-600 dark:text-gray-300 text-2xl"},"5. Rolling Payouts"),n.a.createElement("p",{className:"text-gray-600 dark:text-gray-400 text-xl"},"Every time someone buys or sells, the contract is called. When this transaction is processed, the contract is also looking at the holders list and checking if anyone needs to be paid. If someone is awaiting payment, the contract will send them their BNB rewards during this transaction"))),n.a.createElement(s.Card,{colored:!0,className:"text-white bg-purple-600"},n.a.createElement(s.CardBody,null,n.a.createElement("p",{className:"mb-4 font-semibold text-2xl"},"6. Fully Automated"),n.a.createElement("p",{className:"text-xl"},"This system is fully automated and adds minimal gas fees proportional to value transferred. The number of holders processed through each transaction is dynamic and based on transaction size. Holders will receive dividends from the queue based on their position in the array")))))}},78:function(e,t,a){"use strict";var r=a(5),n=a.n(r);t.a=function(e){var t=e.children;return n.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},79:function(e,t,a){"use strict";var r=a(5),n=a.n(r);t.a=function(e){var t=e.address,a=e.holdings;return n.a.createElement("span",{className:"flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"},n.a.createElement("div",{className:"flex items-center"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"})),n.a.createElement("span",null,void 0!==t&&""!==t&&"0x"===t.substring(0,2)?a<1e4?t+" - YOU NEED TO HOLD MORE THAN 10K TIKI TO RECEIVE DIVIDENDS":t:"Please input your address above")),n.a.createElement("a",{href:"https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9b76D1B12Ff738c113200EB043350022EBf12Ff0",target:"_blank",rel:"noopener noreferrer"},"Buy TIKI ",n.a.createElement("span",{dangerouslySetInnerHTML:{__html:"&RightArrow;"}})))}},83:function(e,t,a){"use strict";var r=a(5),n=a.n(r);t.a=function(e){var t=e.children;return n.a.createElement("h2",{className:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},t)}},93:function(e,t,a){"use strict";var r=a(5),n=a.n(r),l=a(36);t.a=function(e){var t=e.title,a=e.value,r=(e.button,e.children);return n.a.createElement(l.Card,null,n.a.createElement(l.CardBody,{className:"flex items-center"},r,n.a.createElement("div",null,n.a.createElement("p",{className:"mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"},t),n.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},a))))}}}]);
//# sourceMappingURL=6.ae85e4eb.chunk.js.map