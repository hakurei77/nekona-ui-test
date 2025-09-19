// 导入 Vue 3 中的 App 和 Plugin 类型定义
import type { App, Plugin } from "vue";

// 定义一个泛型类型，表示带有 install 方法的单文件组件（SFC）
// T 是原始组件类型，与 Plugin 类型交叉，使其具备 Vue 插件的能力
type SFCWithInstall<T> = T & Plugin;

// 创建一个批量安装组件的安装器函数
// 接收一个组件数组作为参数，返回一个 Vue 插件
export function makeInstaller(components: Plugin[]) {
  // 定义安装器函数，接收 Vue 应用实例作为参数
  const installer = (app: App) => {
    // 遍历所有组件
    components.forEach((component: Plugin) => {
      // 使用 Vue 应用实例的 use 方法安装每个组件
      app.use(component);
    });
  };
  // 将安装器函数断言为 Vue 插件并返回
  return installer as Plugin;
}

// 为单个组件添加 install 方法的工具函数
// 使用泛型 T 来支持任意类型的组件
export const withInstall = <T>(component: T) => {
  // 为组件添加 install 方法，使其成为 Vue 插件
  (component as SFCWithInstall<T>).install = (app: App) => {
    // 获取组件的名称属性
    const name = (component as any).name;
    // 将组件注册为全局组件
    app.component(name, component as Plugin);
  };
  // 返回带有 install 方法的组件
  return component as SFCWithInstall<T>;
};