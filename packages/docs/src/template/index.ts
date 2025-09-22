import type { App , Component } from 'vue';
import Dh1 from './h1.vue'
import Dh2 from './h2.vue'
import Dh3 from './h3.vue'
import Dcode from './code.vue'
import Dline from './line.vue'
import Dtext from './text.vue'
//全局对象  //流水线注册全局组件
const allGlobalComponents: { [key: string]: Component } = { 
    Dh1,
    Dh2,
    Dh3,
    Dcode,
    Dline,
    Dtext
};
export default {
    install(app : App){
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key]!);
        });
    }
};