// /**
//  * 该脚本从 Chatterbox TTS API 获取 OpenAPI 规范，并生成 TypeScript 类型定义。
//  *
//  * 使用方法:
//  *   CHATTERBOX_API_URL=https://your-api-url npm run sync-api
//  *
//  * 或者使用 .env 文件配置:
//  *   npm run sync-api
//  */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import "dotenv/config"; // 加载 .env 文件中的环境变量
import openapiTS, { astToString } from "openapi-typescript";

// 获取当前脚本所在的目录
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// 定义生成的 TypeScript 类型定义文件的输出路径
const OUTPUT_PATH = path.resolve(__dirname, "../src/types/chatterbox-api.d.ts");

async function main() {
  // 从环境变量中获取 Chatterbox API 的 URL
  const apiUrl = process.env.CHATTERBOX_API_URL;

  // 如果没有提供 API URL，则输出错误并退出
  if (!apiUrl) {
    console.error("错误: 必须设置 CHATTERBOX_API_URL 环境变量");
    process.exit(1);
  }

  // 构建 OpenAPI 规范的完整 URL
  const openApiUrl = `${apiUrl}/openapi.json`;
  console.log(`正在从以下地址获取 OpenAPI 规范: ${openApiUrl}`);

  // 使用 openapi-typescript 库获取 OpenAPI 规范并生成 AST (抽象语法树)
  const ast = await openapiTS(new URL(openApiUrl));
  // 将 AST 转换为字符串格式的 TypeScript 代码
  const contents = astToString(ast);

  // 确保输出目录存在
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 添加文件头注释，说明该文件是自动生成的
  const header = `/**
* 这个文件由 scripts/sync-api.ts 自动生成。
* 请勿手动编辑。请运行 \`npm run sync-api\` 重新生成。
*
* 生成来源: ${openApiUrl}
* 生成时间: ${new Date().toISOString()}
*/
  `;

  // 将文件头和生成的类型定义写入到输出文件中
  fs.writeFileSync(OUTPUT_PATH, header + contents);
  console.log(`类型定义已写入: ${OUTPUT_PATH}`);
}

// 执行主函数并捕获任何错误
main().catch((err) => {
  console.error("同步 API 类型失败:", err);
  process.exit(1);
});
