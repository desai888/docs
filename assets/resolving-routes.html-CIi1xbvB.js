import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,o,c as r,a as s,b as i,d as t,w as a,e as n}from"./app-B_gmKcBy.js";const k={},p=s("h1",{id:"resolving-routes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#resolving-routes"},[s("span",null,"Resolving Routes")])],-1),d=s("h2",{id:"getting-all-routes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#getting-all-routes"},[s("span",null,"Getting all routes")])],-1),g=n(`<p>The return value of <code>useRoutes</code> is a Ref object containing all routes. The keys are route paths of each route, and the values are the corresponding route information.</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">useRoutes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> routes</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> useRoutes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;/&#39;: { meta: { title: &#39;Home&#39; }, loader: HomePageLoader },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;/404.html&#39;: { meta: { title: &#39;Not Found&#39; }, loader: NotFoundPageLoader },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> routePaths</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> computed</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">keys</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">routes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// =&gt; [&#39;/‘, &#39;/404.html&#39;, &#39;/foo/&#39;, &#39;/bar/&#39;, ...]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resolving-route-path" tabindex="-1"><a class="header-anchor" href="#resolving-route-path"><span>Resolving route path</span></a></h2>`,3),c=n(`<p><code>resolveRoutePath</code> receives a link and an optional base path, and returns the resolved route path:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">resolveRoutePath</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> routePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> resolveRoutePath</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/foo/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// =&gt; &#39;/foo/&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> routePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> resolveRoutePath</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;baz.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/foo/bar.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// =&gt; &#39;/foo/baz.html&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resolving-route-information" tabindex="-1"><a class="header-anchor" href="#resolving-route-information"><span>Resolving route information</span></a></h2>`,3),u=n(`<p><code>resolveRoute</code> receives a link and an optional base path, and returns the resolved route information:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">resolveRoute</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> route</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> resolveRoute</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/foo/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// =&gt; { notFound: false, path: &#39;/foo/&#39;, meta: { title: &#39;Foo&#39; }, loader: FooPageLoader }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> route</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> resolveRoute</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;baz.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/foo/bar.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// =&gt; { notFound: false, path: &#39;/foo/baz.html&#39;, meta: { title: &#39;Baz&#39; }, loader: BazPageLoader }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> route</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> resolveRoute</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/not-exist.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// =&gt; { notFound: true, path: &#39;/not-exist.html&#39;, meta: { title: &#39;Not Found&#39; }, loader: NotFoundPageLoader }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There is a <code>notFound</code> field in the returned information, which is used to indicate whether a corresponding route exists for a given path. When the route does not exist, the <code>notFound</code> field would be <code>true</code>, the <code>path</code> field would be the normalized path, and the <code>meta</code> and <code>loader</code> fields would point to the default 404 page.</p>`,3);function y(v,m){const e=h("RouteLink");return o(),r("div",null,[p,d,s("p",null,[i("You can make use of "),t(e,{to:"/reference/client-api.html#useroutes"},{default:a(()=>[i("useRoutes")]),_:1}),i(" to get all routes information.")]),g,s("p",null,[i("You can make use of "),t(e,{to:"/reference/client-api.html#resolveroutepath"},{default:a(()=>[i("resolveRoutePath")]),_:1}),i(" to resolve the route path of the given link.")]),c,s("p",null,[i("You can make use of "),t(e,{to:"/reference/client-api.html#resolveroute"},{default:a(()=>[i("resolveRoute")]),_:1}),i(" to resolve route information for a given link.")]),u])}const F=l(k,[["render",y],["__file","resolving-routes.html.vue"]]),b=JSON.parse('{"path":"/advanced/cookbook/resolving-routes.html","title":"Resolving Routes","lang":"en-US","frontmatter":{"description":"Resolving Routes Getting all routes You can make use of to get all routes information. The return value of useRoutes is a Ref object containing all routes. The keys are route pa...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/advanced/cookbook/resolving-routes.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/advanced/cookbook/resolving-routes.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Resolving Routes"}],["meta",{"property":"og:description","content":"Resolving Routes Getting all routes You can make use of to get all routes information. The return value of useRoutes is a Ref object containing all routes. The keys are route pa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-24T08:18:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-24T08:18:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Resolving Routes\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-24T08:18:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Getting all routes","slug":"getting-all-routes","link":"#getting-all-routes","children":[]},{"level":2,"title":"Resolving route path","slug":"resolving-route-path","link":"#resolving-route-path","children":[]},{"level":2,"title":"Resolving route information","slug":"resolving-route-information","link":"#resolving-route-information","children":[]}],"git":{"createdTime":1716538738000,"updatedTime":1716538738000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.94,"words":281},"filePathRelative":"advanced/cookbook/resolving-routes.md","localizedDate":"May 24, 2024","autoDesc":true}');export{F as comp,b as data};