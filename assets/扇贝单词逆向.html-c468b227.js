import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-36b3d217.js";const p={},o=t(`<h2 id="扇贝单词逆向" tabindex="-1"><a class="header-anchor" href="#扇贝单词逆向" aria-hidden="true">#</a> 扇贝单词逆向</h2><p>前言：</p><p>由于想要获取一些单词信息，记录自己的单词学习记录。</p><h3 id="_1、分析网站" tabindex="-1"><a class="header-anchor" href="#_1、分析网站" aria-hidden="true">#</a> 1、分析网站</h3><p><strong>请求头分析</strong></p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>&quot;authority&quot;: &quot;apiv3.shanbay.com&quot;,
    &quot;accept&quot;: &quot;application/json, text/plain, */*&quot;,
    &quot;accept-language&quot;: &quot;zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7&quot;,
    &quot;origin&quot;: &quot;https://web.shanbay.com&quot;,
    &quot;referer&quot;: &quot;https://web.shanbay.com/&quot;,
    &quot;sec-ch-ua&quot;: &quot;\\&quot;Not.A/Brand\\&quot;;v=\\&quot;8\\&quot;, \\&quot;Chromium\\&quot;;v=\\&quot;114\\&quot;, \\&quot;Google Chrome\\&quot;;v=\\&quot;114\\&quot;&quot;,
    &quot;sec-ch-ua-mobile&quot;: &quot;?0&quot;,
    &quot;sec-ch-ua-platform&quot;: &quot;\\&quot;Windows\\&quot;&quot;,
    &quot;sec-fetch-dest&quot;: &quot;empty&quot;,
    &quot;sec-fetch-mode&quot;: &quot;cors&quot;,
    &quot;sec-fetch-site&quot;: &quot;same-site&quot;,
    &quot;user-agent&quot;: &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36&quot;,
    &quot;x-csrftoken&quot;: &quot;4a08ae479d17443e5e68ef71613ff1be&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>观察所有的header，其中比较有可能是加密请求参数的只有X-Csrftoken。</p><p>通过定位和搜索可以找关键位置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> r<span class="token punctuation">.</span><span class="token function">isStandardBrowserEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token function">n</span><span class="token punctuation">(</span><span class="token number">987</span><span class="token punctuation">)</span>
                  <span class="token punctuation">,</span> g <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>withCredentials <span class="token operator">||</span> <span class="token function">c</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>xsrfCookieName <span class="token operator">?</span> y<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>xsrfCookieName<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">;</span>
                g <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>d<span class="token punctuation">[</span>e<span class="token punctuation">.</span>xsrfHeaderName<span class="token punctuation">]</span> <span class="token operator">=</span> g<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中g就是我们想要的参数，通过分析可以看到g = y.read(e.xsrfCookieName)</p><p>其中y.read为</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token function-variable function">read</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> t <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;(^|;\\\\s*)(&quot;</span> <span class="token operator">+</span> e <span class="token operator">+</span> <span class="token string">&quot;)=([^;]*)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> t <span class="token operator">?</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过分析可知，改参数从cookie中获取的，不为加密参数，可以在程序运行前直接复制即可。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests


headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;authority&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;apiv3.shanbay.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;accept&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;application/json, text/plain, */*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;accept-language&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;origin&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://web.shanbay.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;referer&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://web.shanbay.com/&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sec-ch-ua&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\&quot;Not.A/Brand\\&quot;;v=\\&quot;8\\&quot;, \\&quot;Chromium\\&quot;;v=\\&quot;114\\&quot;, \\&quot;Google Chrome\\&quot;;v=\\&quot;114\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sec-ch-ua-mobile&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;?0&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sec-ch-ua-platform&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\\&quot;Windows\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sec-fetch-dest&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;empty&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sec-fetch-mode&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;cors&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sec-fetch-site&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;same-site&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;user-agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;x-csrftoken&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;4a08ae479d17443e5e68ef71613ff1be&quot;</span>
<span class="token punctuation">}</span>
cookies <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;sajssdk_2015_cross_new_user&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;__utma&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;183787513.474190524.1686565691.1686565691.1686565691.1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;__utmc&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;183787513&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;__utmz&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;183787513.1686565691.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;__utmb&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;183787513.1.10.1686565691&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;_ga&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;GA1.2.474190524.1686565691&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;auth_token&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTMyNDI5MjYsImV4cCI6MTY4NzQzMDAyMCwiZXhwX3YyIjoxNjg3NDMwMDIwLCJkZXZpY2UiOiIiLCJ1c2VybmFtZSI6Im1vYmlsZV9jMzI4MjNiYWI4IiwiaXNfc3RhZmYiOjAsInNlc3Npb25faWQiOiJlNjYwZDUzZTA5MGIxMWVlYjVjMWZlMmJkMjY3MTFmNSJ9.xL7QJ-wzW7K-SC3grzoOsBwKQvBuAjx1W6uwDPCmzww&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;csrftoken&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;4a08ae479d17443e5e68ef71613ff1be&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sensorsdata2015jssdkcross&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;%7B%22distinct_id%22%3A%22vzudct%22%2C%22%24device_id%22%3A%22188af261ddceaf-05ff5ebf672ef7-26031d51-3686400-188af261ddd5c1%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%7D%2C%22first_id%22%3A%22188af261ddceaf-05ff5ebf672ef7-26031d51-3686400-188af261ddd5c1%22%7D&quot;</span>
<span class="token punctuation">}</span>
url <span class="token operator">=</span> <span class="token string">&quot;https://apiv3.shanbay.com/wordsapp/user_material_books/jjbtq/learning/words/unlearned_items&quot;</span>
params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;ipp&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;page&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span>
<span class="token punctuation">}</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> cookies<span class="token operator">=</span>cookies<span class="token punctuation">,</span> params<span class="token operator">=</span>params<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后尝试直接发起请求，请求成功。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>&lt;Response [200]&gt;
{&quot;data&quot;:&quot;NZIZHRKXMLHW3B5H...&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时我们可以看到返回的结果为加密的，下一步解密。</p><h3 id="_2、解析返回结果data" tabindex="-1"><a class="header-anchor" href="#_2、解析返回结果data" aria-hidden="true">#</a> 2、解析返回结果data</h3><p>观察返回值比较像base64，于是直接用base64解密，毫无疑问失败了，应该是定制的base64。</p><p>于是根据启动器，打断点，debug，找到解密位置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">Na</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>bays4<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中window.bays4.d(e)为解密方法。</p><p>单步执行进去可以看到</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span>
<span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_checkVersion</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">a<span class="token punctuation">.</span>default</span><span class="token punctuation">;</span>
e<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> r <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> u<span class="token punctuation">.</span>Base64<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
                            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确认解密位置无疑了。</p><p>接下来的步骤就扣代码了，该网站比较单纯，不需要补环境，扣完就能跑。</p><p>完整代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> json

<span class="token keyword">import</span> requests
<span class="token keyword">import</span> execjs

headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;authority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;apiv3.shanbay.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;accept&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json, text/plain, */*&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;accept-language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://web.shanbay.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;referer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://web.shanbay.com/&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sec-ch-ua&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;Not.A/Brand\\&quot;;v=\\&quot;8\\&quot;, \\&quot;Chromium\\&quot;;v=\\&quot;114\\&quot;, \\&quot;Google Chrome\\&quot;;v=\\&quot;114\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sec-ch-ua-mobile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;?0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sec-ch-ua-platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;Windows\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sec-fetch-dest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;empty&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sec-fetch-mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cors&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sec-fetch-site&quot;</span><span class="token operator">:</span> <span class="token string">&quot;same-site&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;user-agent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;x-csrftoken&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4a08ae479d17443e5e68ef71613ff1be&quot;</span>
<span class="token punctuation">}</span>
cookies <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;sajssdk_2015_cross_new_user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;__utma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;183787513.474190524.1686565691.1686565691.1686565691.1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;__utmc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;183787513&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;__utmz&quot;</span><span class="token operator">:</span> <span class="token string">&quot;183787513.1686565691.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;__utmb&quot;</span><span class="token operator">:</span> <span class="token string">&quot;183787513.1.10.1686565691&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;_ga&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GA1.2.474190524.1686565691&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;auth_token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTMyNDI5MjYsImV4cCI6MTY4NzQzMDAyMCwiZXhwX3YyIjoxNjg3NDMwMDIwLCJkZXZpY2UiOiIiLCJ1c2VybmFtZSI6Im1vYmlsZV9jMzI4MjNiYWI4IiwiaXNfc3RhZmYiOjAsInNlc3Npb25faWQiOiJlNjYwZDUzZTA5MGIxMWVlYjVjMWZlMmJkMjY3MTFmNSJ9.xL7QJ-wzW7K-SC3grzoOsBwKQvBuAjx1W6uwDPCmzww&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;csrftoken&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4a08ae479d17443e5e68ef71613ff1be&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sensorsdata2015jssdkcross&quot;</span><span class="token operator">:</span> <span class="token string">&quot;%7B%22distinct_id%22%3A%22vzudct%22%2C%22%24device_id%22%3A%22188af261ddceaf-05ff5ebf672ef7-26031d51-3686400-188af261ddd5c1%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%7D%2C%22first_id%22%3A%22188af261ddceaf-05ff5ebf672ef7-26031d51-3686400-188af261ddd5c1%22%7D&quot;</span>
<span class="token punctuation">}</span>



def <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
    context <span class="token operator">=</span> execjs<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;shanbei.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://apiv3.shanbay.com/wordsapp/user_material_books/jjbtq/learning/words/unlearned_items&quot;</span>
    params <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;ipp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span>
    <span class="token punctuation">}</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> cookies<span class="token operator">=</span>cookies<span class="token punctuation">,</span> params<span class="token operator">=</span>params<span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    # <span class="token keyword">if</span> response<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token operator">:</span>
    #     # <span class="token function">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    #     res <span class="token operator">=</span> <span class="token function">context</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;shanbeiDecode&quot;</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    #     <span class="token function">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    #     <span class="token function">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span><span class="token function">dumps</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span><span class="token function">loads</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span> sort_keys<span class="token operator">=</span>True<span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> separators<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token operator">:</span>
    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此逆向完毕。</p>`,29),e=[o];function c(u,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","扇贝单词逆向.html.vue"]]);export{k as default};
