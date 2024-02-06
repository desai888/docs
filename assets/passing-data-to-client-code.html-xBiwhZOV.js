import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as l,a as n,b as e,d as a,w as t,e as o}from"./app-jviAgftA.js";const d={},r=n("h1",{id:"passing-data-to-client-code",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#passing-data-to-client-code"},[n("span",null,"Passing Data to Client Code")])],-1),u=n("p",null,"As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For example, you want to generate different data when users use different options.",-1),m=n("h2",{id:"use-define-hook",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#use-define-hook"},[n("span",null,[e("Use "),n("code",null,"define"),e(" Hook")])])],-1),k=o(`<p>First, define some constants in <code>define</code> hook:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  define<span class="token operator">:</span> <span class="token punctuation">{</span>
    __FOO__<span class="token operator">:</span> options<span class="token punctuation">.</span>foo <span class="token operator">||</span> <span class="token string">&#39;str&#39;</span><span class="token punctuation">,</span>
    __OBJ__<span class="token operator">:</span> <span class="token punctuation">{</span>
      bar<span class="token operator">:</span> options<span class="token punctuation">.</span>bar <span class="token operator">||</span> <span class="token number">123</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use them in client code directly:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> __FOO__
<span class="token keyword">const</span> obj <span class="token operator">=</span> __OBJ__
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you are using TypeScript in client code, you may need to declare the types of the global constants manually:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">const</span> __FOO__<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> __OBJ__<span class="token operator">:</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="write-and-load-temp-files" tabindex="-1"><a class="header-anchor" href="#write-and-load-temp-files"><span>Write and Load Temp Files</span></a></h2><p>If you need to achieve some more complex features, you can write temp files and load them dynamically in client code.</p>`,8),v=n("code",null,"foo.js",-1),g=o(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">onPrepared</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// write temp file</span>
    <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">writeTemp</span><span class="token punctuation">(</span>
      <span class="token string">&#39;foo.js&#39;</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">export const foo = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, load the temp file via <code>@temp</code> alias in client code:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@temp/foo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you are using TypeScript in client code, you may need to declare the type of the temp module manually:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@temp/foo&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function h(f,y){const s=i("RouteLink");return c(),l("div",null,[r,u,m,n("p",null,[e("Plugin API provides a "),a(s,{to:"/reference/plugin-api.html#define"},{default:t(()=>[e("define")]),_:1}),e(" hook to define global constants for client code. You can make use of it to pass data to client.")]),k,n("p",null,[e("First, write a temp file "),v,e(", which will be generated in the "),a(s,{to:"/reference/config.html#temp"},{default:t(()=>[e("temp")]),_:1}),e(" directory:")]),g])}const w=p(d,[["render",h],["__file","passing-data-to-client-code.html.vue"]]),x=JSON.parse('{"path":"/advanced/cookbook/passing-data-to-client-code.html","title":"Passing Data to Client Code","lang":"en-US","frontmatter":{"icon":"fa6-solid:right-to-bracket","description":"Passing Data to Client Code As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For examp...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/advanced/cookbook/passing-data-to-client-code.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/advanced/cookbook/passing-data-to-client-code.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Passing Data to Client Code"}],["meta",{"property":"og:description","content":"Passing Data to Client Code As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For examp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Passing Data to Client Code\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Use define Hook","slug":"use-define-hook","link":"#use-define-hook","children":[]},{"level":2,"title":"Write and Load Temp Files","slug":"write-and-load-temp-files","link":"#write-and-load-temp-files","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1}]},"readingTime":{"minutes":0.82,"words":247},"filePathRelative":"advanced/cookbook/passing-data-to-client-code.md","localizedDate":"December 3, 2023","autoDesc":true}');export{w as comp,x as data};