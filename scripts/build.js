const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "src");
const distDir = path.join(root, "dist");
const bundleFiles = [
  "modules/catalog.js",
  "modules/html.js",
  "sections/product.js",
  "sections/regulatory.js",
  "sections/technology.js",
  "sections/risk.js",
  "sections/benchmark.js",
  "sections/roadmap.js",
  "sections/references.js",
  "sections/operations.js",
  "sections/downloads.js",
  "sections/index.js",
  "services/catalog-service.js",
  "services/kit-service.js",
  "app.js"
];

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

const bundle = buildBundle();
buildIndex(bundle);
fs.copyFileSync(path.join(srcDir, "styles.css"), path.join(distDir, "styles.css"));
fs.writeFileSync(path.join(distDir, "app.bundle.js"), bundle);

console.log("PayKit Builder build complete: dist/");

function buildIndex(bundle) {
  const html = fs
    .readFileSync(path.join(srcDir, "index.html"), "utf8")
    .replace(/<script type="module" src="\.\/app\.js\?v=\d+"><\/script>/, `<script>\n${bundle.replace(/<\/script>/gi, "<\\/script>")}\n</script>`)
    .replace(/styles\.css\?v=\d+/, "styles.css");
  fs.writeFileSync(path.join(distDir, "index.html"), html);
}

function buildBundle() {
  const chunks = bundleFiles.map((file) => {
    const source = fs.readFileSync(path.join(srcDir, file), "utf8");
    return `\n/* ${file} */\n${toClassicScript(source)}\n`;
  });
  return `"use strict";\n${chunks.join("\n")}`;
}

function toClassicScript(source) {
  return source
    .replace(/import\s*{[\s\S]*?}\s*from\s*["'][^"']+["'];\n?/g, "")
    .replace(/import\s+[^;]+;\n?/g, "")
    .replace(/\bexport\s+(const|let|var|function|class)\s+/g, "$1 ")
    .replace(/\bexport\s*{[^}]+};\n?/g, "");
}
