import { WebView } from 'https://deno.land/x/webview/mod.ts';

const _webviewConfig = {
    width: 350,
    height: 500,
    resizable: false,
    debug: true,
    frameless:false,
};

const main = new WebView({
    title: 'TestWebview',
    url: `data:text/html,
    <html>
    <body>
      <h1>2</h1>
    </body>
    </html>
    `,
    ..._webviewConfig,
});

await Promise.all([main.run()]);