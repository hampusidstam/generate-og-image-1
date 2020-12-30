function getCss() {
  return `
/* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  background: #95adbe;
  height: 100vh;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 18px;
  padding: 20px;
}
.container {
  position: relative;
  height: calc(100vh - 40px);
  padding: 20px;
  background: #f8f8f8;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.title {
  font-size: 8em;
  line-height: 1.05em;
  height: 3.15em;
  overflow: hidden;
  color: #313131;
}
.author {
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 20px;
  font-size: 3em;
  color: #525252;
}
.author-image {
  width: 1.5em;
  border-radius: 50%;
  margin-bottom: -9px;
}
.website {
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 20px;
  font-size: 2em;
  color: #525252;
}
.placeholder{
  width: 200px;
}
`;
}

export function getHtml(parsedReqs: ParsedReqs) {
  const { code, country, team } = parsedReqs;

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js" integrity="sha512-ZDSPMa/JM1D+7kdg2x3BsruQ6T/JpJo3jWDWkCZsP+5yVyp1KfESqLI+7RqB5k24F7p2cV7i2YHh/890y6P6Sw==" crossorigin="anonymous"></script>
    <style>
      ${getCss()}
    </style>
  </head>
  <body>
    <div class="container">
      <div class="title">${country}</div>
      <div id="placeHolder"></div>
      <script>
        var typeNumber = 1;
        var errorCorrectionLevel = 'L';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData('${code}');
        qr.make();
        document.getElementById('placeHolder').innerHTML = qr.createImgTag();
      </script>
      <div class="author">
        ${code}
      </div>
      <span>${team}</span>
    </div>
  </body>
</html>
`;
}
