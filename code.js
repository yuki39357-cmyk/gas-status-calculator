// VS Code から編集
function doGet() {
  const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
  .setTitle('ドッカンバトルステータス計算')
  .setFaviconUrl("https://yuki39357-cmyk.github.io/gas-status-calculator/favicon.png")
  .addMetaTag('viewport','width=device-width,initial-scale=1.0,maximum-scale=1.0');
  return htmlOutput;
}