import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as d,b as e,d as a,f as o,a as s}from"./app-a5c1a0c0.js";const c="/assets/image-20230606204826357-57c23988.png",l="/assets/image-20230606205209994-a352cc51.png",p={},h=e("h2",{id:"window-install-go",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#window-install-go","aria-hidden":"true"},"#"),a(" window install Go")],-1),_=e("h4",{id:"_1、安装包下载路径",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1、安装包下载路径","aria-hidden":"true"},"#"),a(" 1、安装包下载路径")],-1),g={href:"https://go.dev/dl/",target:"_blank",rel:"noopener noreferrer"},u=s('<h4 id="_2、下载当前系统对应的安装文件" tabindex="-1"><a class="header-anchor" href="#_2、下载当前系统对应的安装文件" aria-hidden="true">#</a> 2、下载当前系统对应的安装文件</h4><figure><img src="'+c+'" alt="image-20230606204826357" tabindex="0" loading="lazy"><figcaption>image-20230606204826357</figcaption></figure><p>例如： windows 选择第一个</p><h4 id="_3、安装" tabindex="-1"><a class="header-anchor" href="#_3、安装" aria-hidden="true">#</a> 3、安装</h4><p>直接一路next，直到安装成功。</p><h4 id="_4、检验是否安装成功" tabindex="-1"><a class="header-anchor" href="#_4、检验是否安装成功" aria-hidden="true">#</a> 4、检验是否安装成功</h4><p>打开windows命令行（window+R）</p><p>输入命令<code>go version</code></p><figure><img src="'+l+'" alt="image-20230606205209994" tabindex="0" loading="lazy"><figcaption>image-20230606205209994</figcaption></figure><p>出现上图所示，安装成功。</p><p>参考链接：</p>',11),f={href:"https://tour.go-zh.org/welcome/1",target:"_blank",rel:"noopener noreferrer"},m=s(`<h3 id="_5、修改为国内代理" tabindex="-1"><a class="header-anchor" href="#_5、修改为国内代理" aria-hidden="true">#</a> 5、修改为国内代理</h3><p>在后续安装tools时，失败时可以尝试修改代理</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">go</span> env <span class="token operator">-</span>w GOPROXY<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>goproxy<span class="token punctuation">.</span>cn<span class="token punctuation">,</span>direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function w(x,k){const n=r("ExternalLinkIcon");return i(),d("div",null,[h,_,e("p",null,[e("a",g,[a("install package"),o(n)])]),u,e("p",null,[e("a",f,[a("Go 语言之旅 (go-zh.org)"),o(n)])]),m])}const y=t(p,[["render",w],["__file","01-windows-install.html.vue"]]);export{y as default};
