// @ts-ignore
import { existsSync, mkdirSync, copyFileSync, unlinkSync, rmdirSync, readdirSync } from "fs";
// @ts-ignore
import { join, resolve } from "path";

/**
 * 移动类型文件的函数
 * @param sourceDir 源目录
 * @param targetDir 目标目录
 */
export const moveTypeFiles = (sourceDir: string, targetDir: string) => {
  if (!existsSync(sourceDir)) return;
  
  // 确保目标目录存在
  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }
  
  // 读取源目录中的所有文件和子目录
  const items = readdirSync(sourceDir, { withFileTypes: true });
  
  for (const item of items) {
    const sourcePath = join(sourceDir, item.name);
    const targetPath = join(targetDir, item.name);
    
    if (item.isDirectory()) {
      // 如果是目录，递归处理
      moveTypeFiles(sourcePath, targetPath);
      // 尝试删除空目录
      try {
        rmdirSync(sourcePath);
      } catch (e) {
        // 目录不为空，忽略错误
      }
    } else {
      // 如果是文件，移动到目标目录
      copyFileSync(sourcePath, targetPath);
      unlinkSync(sourcePath);
    }
  }
};

/**
 * 在打包完成后移动类型文件并删除 packages 文件夹
 * @param __dirname 当前目录路径
 */
export const afterBuildHandler = (__dirname: string) => {
  // 执行移动操作
  // 因为配置文件现在在build目录中，需要回到上一级目录才能正确找到dist/types
  const typesDir = resolve(__dirname, "../dist/types");
  const packagesDir = join(typesDir, "packages");
  
  if (existsSync(packagesDir)) {
    // 将 packages 目录下的内容移动到 types 目录
    moveTypeFiles(packagesDir, typesDir);
    
    // 删除 packages 目录
    try {
      rmdirSync(packagesDir);
    } catch (e) {
      console.log("无法删除 packages 目录，可能不为空");
    }
  }
};