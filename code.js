// VS Code から編集
function doGet() {
  const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
  .setTitle('ドッカンバトルステータス計算')
  .setFaviconUrl("https://drive.google.com/uc?id=1CC6iruh1kf_Fmc24JMpR_Sh8MlT04YP7&.png")
  .addMetaTag('viewport','width=device-width,initial-scale=1.0,maximum-scale=1.0');
  return htmlOutput;
}