import{_ as s,c as n,o as a,d as l}from"./app.ffde2a21.js";const A=JSON.parse('{"title":"\u5BB9\u5668\u5E94\u7528\u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nginx","slug":"nginx"},{"level":2,"title":"Jenkins","slug":"jenkins"},{"level":2,"title":"Gitlab","slug":"gitlab"}],"relativePath":"03_\u8FD0\u7EF4/01_Docker \xB7 K8S/03_\u5BB9\u5668\u5E94\u7528\u5B89\u88C5/index.md","lastUpdated":null}'),e={name:"03_\u8FD0\u7EF4/01_Docker \xB7 K8S/03_\u5BB9\u5668\u5E94\u7528\u5B89\u88C5/index.md"},p=l(`<h1 id="\u5BB9\u5668\u5E94\u7528\u5B89\u88C5" tabindex="-1">\u5BB9\u5668\u5E94\u7528\u5B89\u88C5 <a class="header-anchor" href="#\u5BB9\u5668\u5E94\u7528\u5B89\u88C5" aria-hidden="true">#</a></h1><h2 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --name nginx \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --network host \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir /nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker cp nginx:/etc/nginx /nginx/conf</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker cp nginx:/var/log/nginx /nginx/log</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker cp nginx:/usr/share/nginx/html /nginx/html</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker container rm nginx -f</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --name nginx \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --network host \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v /nginx/conf:/etc/nginx \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v /nginx/log:/var/log/nginx \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v /nginx/html:/usr/share/nginx/html \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="jenkins" tabindex="-1">Jenkins <a class="header-anchor" href="#jenkins" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -u root \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --name jenkins \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -u 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p 8080:8080 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p 50000:50000 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v /jenkins:/var/jenkins_home \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v /jenkins:/var/jenkins_home \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v /var/run/docker.sock:/var/run/docker.sock \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  jenkinsci/blueocean</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it jenkins sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="gitlab" tabindex="-1">Gitlab <a class="header-anchor" href="#gitlab" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --hostname gitlab.yinchengnuo.com \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --publish 8081:443 --publish 22022:22 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --name gitlab \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --restart always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --volume /gitlab/config:/etc/gitlab \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --volume /gitlab/logs:/var/log/gitlab \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --volume /gitlab/data:/var/opt/gitlab \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --shm-size 256m \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  gitlab/gitlab-ce:latest</span></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#A6ACCD;">sh</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it gitlab grep </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Password:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> /etc/gitlab/initial_root_password</span></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">\u914D\u7F6E https:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#A6ACCD;">sh</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it gitlab /bin/bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vi /etc/gitlab/gitlab.rb</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),r=[p];function c(i,o,b,t,d,u){return a(),n("div",null,r)}var C=s(e,[["render",c]]);export{A as __pageData,C as default};
