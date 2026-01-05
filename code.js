// VS Code から編集
function doGet() {
  const htmlOutput = HtmlService.createTemplateFromFile("dokkan1").evaluate();
  htmlOutput
  .setTitle('ドッカンバトルステータス計算')
  .setFaviconUrl('https://drive.google.com/uc?id=1AZrR0ja6u0_rUZE7Mxg7OZHFFKrBL0V7&.png')
  .addMetaTag('viewport','width=device-width,initial-scale=1.0,maximum-scale=1.0');
  return htmlOutput;
}