import echo from './echo';

global.echo = echo;

global.doGet = () => {
  return HtmlService
    .createHtmlOutputFromFile('index.html')
    .setTitle('gas-vue-boilerplate')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}
