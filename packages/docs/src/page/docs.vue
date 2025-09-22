<template>
  <Dh1>文档标签说明</Dh1>
  <Dline />
  <Dh1>1. 标题</Dh1>
  <Dh1>标题1</Dh1>
  <Dh2>标题2</Dh2>
  <Dh3>标题3</Dh3>
  <Dcode lang="html">
    {{`<Dh1>标题1</Dh1>\n<Dh2>标题2</Dh2>\n<Dh3>标题3</Dh3>`}}
  </Dcode>
  <Dh1>2. 代码块</Dh1>
  <Dcode lang="html">
    {{`<div>我是代码块</div>`}}
  </Dcode>
  <Dtext>
    {{`可选参数： lang (string) - 代码语言类型`}}
  </Dtext>
  <Dcode lang="html">
    {{ `<Dcode lang="html">\n \{\{\`< div> 我是代码块 </div>\`\}\}\n\<\ /Dcode\>`}}
  </Dcode>
  <Dh1>3. 分割线</Dh1>
  <Dline />
  <Dcode lang="html">
    {{ `<Dline />` }}
  </Dcode>
  
</template>
