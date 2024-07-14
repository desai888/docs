import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,o as d,c as k,a as i,b as s,d as a,w as t,e as n}from"./app-B_gmKcBy.js";const p={},r=i("h1",{id:"passing-data-to-client-code",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#passing-data-to-client-code"},[i("span",null,"Passing Data to Client Code")])],-1),o=i("p",null,"As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For example, you want to generate different data when users use different options.",-1),c=i("h2",{id:"use-define-hook",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#use-define-hook"},[i("span",null,[s("Use "),i("code",null,"define"),s(" Hook")])])],-1),g=n(`<p>First, define some constants in <code>define</code> hook:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  define</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    __FOO__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;str&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    __OBJ__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 123</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use them in client code directly:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> __FOO__</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> __OBJ__</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you are using TypeScript in client code, you may need to declare the types of the global constants manually:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> __FOO__</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> __OBJ__</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="write-and-load-temp-files" tabindex="-1"><a class="header-anchor" href="#write-and-load-temp-files"><span>Write and Load Temp Files</span></a></h2><p>If you need to achieve some more complex features, you can write temp files and load them dynamically in client code.</p>`,8),y=i("code",null,"foo.js",-1),m=n(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ({</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> onPrepared</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // write temp file</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">writeTemp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">      &#39;foo.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">      \`export const foo = </span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">JSON</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">stringify</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">options</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, load the temp file via <code>@temp</code> alias in client code:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;@temp/foo&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If you are using TypeScript in client code, you may need to declare the type of the temp module manually:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> module</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;@temp/foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function B(u,b){const e=h("RouteLink");return d(),k("div",null,[r,o,c,i("p",null,[s("Plugin API provides a "),a(e,{to:"/reference/plugin-api.html#define"},{default:t(()=>[s("define")]),_:1}),s(" hook to define global constants for client code. You can make use of it to pass data to client.")]),g,i("p",null,[s("First, write a temp file "),y,s(", which will be generated in the "),a(e,{to:"/reference/config.html#temp"},{default:t(()=>[s("temp")]),_:1}),s(" directory:")]),m])}const v=l(p,[["render",B],["__file","passing-data-to-client-code.html.vue"]]),D=JSON.parse('{"path":"/advanced/cookbook/passing-data-to-client-code.html","title":"Passing Data to Client Code","lang":"en-US","frontmatter":{"icon":"fa6-solid:right-to-bracket","description":"Passing Data to Client Code As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For examp...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/advanced/cookbook/passing-data-to-client-code.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/advanced/cookbook/passing-data-to-client-code.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Passing Data to Client Code"}],["meta",{"property":"og:description","content":"Passing Data to Client Code As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For examp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Passing Data to Client Code\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Use define Hook","slug":"use-define-hook","link":"#use-define-hook","children":[]},{"level":2,"title":"Write and Load Temp Files","slug":"write-and-load-temp-files","link":"#write-and-load-temp-files","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1}]},"readingTime":{"minutes":0.82,"words":247},"filePathRelative":"advanced/cookbook/passing-data-to-client-code.md","localizedDate":"December 3, 2023","autoDesc":true}');export{v as comp,D as data};