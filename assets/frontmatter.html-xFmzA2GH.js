import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as r,c as u,d as t,a as n,b as a,w as l,e as o}from"./app-jviAgftA.js";const d={},m=n("h1",{id:"frontmatter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#frontmatter"},[n("span",null,"Frontmatter")])],-1),k=n("h2",{id:"date",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#date"},[n("span",null,"date")])],-1),h=n("li",null,[n("p",null,[a("类型： "),n("code",null,"string")])],-1),g=n("p",null,"详情：",-1),v=n("p",null,"页面的创建日期。",-1),_=n("code",null,"yyyy-MM-dd",-1),f={href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"参考：",-1),b=n("h2",{id:"description",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#description"},[n("span",null,"description")])],-1),x=n("li",null,[n("p",null,[a("类型： "),n("code",null,"string")])],-1),P=n("li",null,[n("p",null,"详情："),n("p",null,"页面的描述。"),n("p",null,[a("它将会覆盖站点配置中的 "),n("code",null,"description"),a(" 配置项。")])],-1),w=n("p",null,"参考：",-1),z=o(`<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head"><span>head</span></a></h2><ul><li><p>类型： <code>HeadConfig[]</code></p></li><li><p>详情：</p><p>页面 <code>&lt;head&gt;</code> 标签内添加的额外标签。</p></li><li><p>示例：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
      <span class="token key atrule">content</span><span class="token punctuation">:</span> yaml 数组语法
  <span class="token punctuation">-</span> <span class="token punctuation">[</span>meta<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> bar<span class="token punctuation">,</span> <span class="token key atrule">content</span><span class="token punctuation">:</span> 方括号语法 <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染为：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yaml 数组语法<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>方括号语法<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),F=n("h2",{id:"lang",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lang"},[n("span",null,"lang")])],-1),M=n("li",null,[n("p",null,[a("类型： "),n("code",null,"string")])],-1),N=n("li",null,[n("p",null,"详情："),n("p",null,"页面的语言。"),n("p",null,[a("它将会覆盖站点配置中的 "),n("code",null,"lang"),a(" 配置项")])],-1),C=n("p",null,"参考：",-1),q=o(`<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout"><span>layout</span></a></h2><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>页面的布局。</p><p>布局是由主题提供的。如果你不指定该 Frontmatter ，则会使用默认布局。你应该参考主题自身的文档来了解其提供了哪些布局。</p><p>如果主题布局无法满足你的需求，你可以使用自定义布局组件。</p></li><li><p>示例：</p></li></ul><p>在 <code>.vuepress/client.ts</code> 文件中注册一个布局组件：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/client&#39;</span>
<span class="token keyword">import</span> CustomLayout <span class="token keyword">from</span> <span class="token string">&#39;./CustomLayout.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    CustomLayout<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Frontmatter 中设置自定义布局：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> CustomLayout</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink"><span>permalink</span></a></h2>`,7),A=n("li",null,[n("p",null,[a("类型： "),n("code",null,"string")])],-1),L=n("li",null,[n("p",null,"详情："),n("p",null,"页面的永久链接。"),n("p",null,"它将会覆盖根据文件路径来决定的默认路由路径。")],-1),T=n("p",null,"参考：",-1),I=n("li",null,[n("a",{href:"#permalinkpattern"},"Frontmatter > permalinkPattern")],-1),B=o(`<h2 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern"><span>permalinkPattern</span></a></h2><ul><li><p>类型： <code>string | null</code></p></li><li><p>详情：</p><p>为页面生成永久链接的 Pattern 。</p><p>它将会覆盖站点配置中的 <code>permalinkPattern</code> 配置项。</p><p>如果 Frontmatter 中设置了 <code>permalink</code> ，那么这个字段则不会生效。</p></li><li><p>使用：</p><table><thead><tr><th>Pattern</th><th>描述</th></tr></thead><tbody><tr><td><code>:year</code></td><td>创建日期的 年 部分</td></tr><tr><td><code>:month</code></td><td>创建日期的 月 部分</td></tr><tr><td><code>:day</code></td><td>创建日期的 日 部分</td></tr><tr><td><code>:slug</code></td><td>页面文件名的 Slug</td></tr><tr><td><code>:raw</code></td><td>原始路由路径</td></tr></tbody></table><p><code>:year</code>, <code>:month</code> 和 <code>:day</code> Pattern 根据如下优先级进行解析：</p><ul><li>Frontmatter 中的 <code>date</code> 字段。</li><li>符合 <code>yyyy-MM-dd-foobar.md</code> 或 <code>yyyy-MM-foobar.md</code> 日期格式的文件名。</li><li>符合 <code>yyyy/MM/dd/foobar.md</code> 或 <code>yyyy/MM/foobar.md</code> 日期格式的目录名。</li><li>默认值 <code>0000-00-00</code> 。</li></ul></li><li><p>示例 1 ：</p><p>页面文件名是 <code>foo-bar.md</code> 。</p><p>页面 Frontmatter 是：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2021-01-03</span>
<span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么页面的永久链接将会是 <code>2021/01/03/foo-bar.html</code> 。</p><ul><li><p>示例 2 ：</p><p>页面文件名是 <code>2021-01-03-bar-baz.md</code>。</p><p>页面 Frontmatter 是：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么页面的永久链接将会是 <code>2021/01/03/bar-baz.html</code> 。</p>`,7),E=n("li",null,[n("a",{href:"#date"},"Frontmatter > date")],-1),V=n("li",null,[n("a",{href:"#permalink"},"Frontmatter > permalink")],-1),R=n("h2",{id:"routemeta",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#routemeta"},[n("span",null,"routeMeta")])],-1),S=n("li",null,[n("p",null,[a("类型： "),n("code",null,"Record<string, unknown>")])],-1),j=n("li",null,[n("p",null,"详情："),n("p",null,"附加到页面路由的自定义数据。")],-1),Z=n("p",null,"参考：",-1),D=n("h2",{id:"title",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#title"},[n("span",null,"title")])],-1),H=n("li",null,[n("p",null,[a("类型： "),n("code",null,"string")])],-1),J=n("li",null,[n("p",null,"详情："),n("p",null,"页面的标题。"),n("p",null,[a("如果你不在 Frontmatter 中设置 "),n("code",null,"title"),a(" ，那么页面中第一个一级标题（即 "),n("code",null,"# title"),a("）的内容会被当作标题使用。")])],-1),O=n("p",null,"参考：",-1);function U(Y,G){const p=s("NpmBadge"),i=s("ExternalLinkIcon"),e=s("RouteLink");return r(),u("div",null,[m,t(p,{package:"@vuepress/client"}),t(p,{package:"@vuepress/markdown"}),k,n("ul",null,[h,n("li",null,[g,v,n("p",null,[a("应按照 "),_,a(" 的格式来指定日期，或者遵循 "),n("a",f,[a("YAML Timestamp Type"),t(i)]),a(" 。")])]),n("li",null,[y,n("ul",null,[n("li",null,[t(e,{to:"/zh/reference/node-api.html#date"},{default:l(()=>[a("Node API > Page 属性 > date")]),_:1})])])])]),b,n("ul",null,[x,P,n("li",null,[w,n("ul",null,[n("li",null,[t(e,{to:"/zh/reference/config.html#description"},{default:l(()=>[a("配置 > description")]),_:1})])])])]),z,n("ul",null,[n("li",null,[a("参考： "),n("ul",null,[n("li",null,[t(e,{to:"/zh/reference/config.html#head"},{default:l(()=>[a("配置 > head")]),_:1})])])])]),F,n("ul",null,[M,N,n("li",null,[C,n("ul",null,[n("li",null,[t(e,{to:"/zh/reference/config.html#lang"},{default:l(()=>[a("配置 > lang")]),_:1})]),n("li",null,[t(e,{to:"/zh/reference/node-api.html#lang"},{default:l(()=>[a("Node API > Page 属性 > lang")]),_:1})])])])]),q,n("ul",null,[A,L,n("li",null,[T,n("ul",null,[I,n("li",null,[t(e,{to:"/zh/guide/page.html#%E8%B7%AF%E7%94%B1"},{default:l(()=>[a("指南 > 页面 > 路由")]),_:1})]),n("li",null,[t(e,{to:"/zh/reference/node-api.html#permalink"},{default:l(()=>[a("Node API > Page 属性 > permalink")]),_:1})])])])]),B,n("ul",null,[n("li",null,[a("参考： "),n("ul",null,[n("li",null,[t(e,{to:"/zh/reference/config.html#permalinkpattern"},{default:l(()=>[a("配置 > permalinkPattern")]),_:1})]),E,V,n("li",null,[t(e,{to:"/zh/reference/node-api.html#permalink"},{default:l(()=>[a("Node API > Page 属性 > permalink")]),_:1})])])])]),R,n("ul",null,[S,j,n("li",null,[Z,n("ul",null,[n("li",null,[t(e,{to:"/zh/reference/node-api.html#routeMeta"},{default:l(()=>[a("Node API > Page 属性 > routeMeta")]),_:1})])])])]),D,n("ul",null,[H,J,n("li",null,[O,n("ul",null,[n("li",null,[t(e,{to:"/zh/reference/node-api.html#title"},{default:l(()=>[a("Node API > Page 属性 > title")]),_:1})])])])])])}const W=c(d,[["render",U],["__file","frontmatter.html.vue"]]),X=JSON.parse('{"path":"/zh/reference/frontmatter.html","title":"Frontmatter","lang":"zh-CN","frontmatter":{"icon":"fa-solid:bars","description":"Frontmatter ","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/reference/frontmatter.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/reference/frontmatter.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Frontmatter"}],["meta",{"property":"og:description","content":"Frontmatter "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Frontmatter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"date","slug":"date","link":"#date","children":[]},{"level":2,"title":"description","slug":"description","link":"#description","children":[]},{"level":2,"title":"head","slug":"head","link":"#head","children":[]},{"level":2,"title":"lang","slug":"lang","link":"#lang","children":[]},{"level":2,"title":"layout","slug":"layout","link":"#layout","children":[]},{"level":2,"title":"permalink","slug":"permalink","link":"#permalink","children":[]},{"level":2,"title":"permalinkPattern","slug":"permalinkpattern","link":"#permalinkpattern","children":[]},{"level":2,"title":"routeMeta","slug":"routemeta","link":"#routemeta","children":[]},{"level":2,"title":"title","slug":"title","link":"#title","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2}]},"readingTime":{"minutes":2.46,"words":739},"filePathRelative":"zh/reference/frontmatter.md","localizedDate":"2023年12月3日","autoDesc":true}');export{W as comp,X as data};