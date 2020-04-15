global.echo = (message: string) => {
  return message;
};

global.doGet = () => {
  return HtmlService
    .createHtmlOutputFromFile('index.html')
    .setTitle('gas-webapp-boilerplate')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}
