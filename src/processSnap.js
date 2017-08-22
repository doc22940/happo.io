import ReactDOM from 'react-dom';

function extractCSSBlocks() {
  const result = [];
  document.querySelectorAll('style').forEach((styleElement) => {
    result.push(styleElement.innerHTML);
  });
  return result;
}

export default function processSnap({ name, jsx }) {
  document.body.innerHTML = '';
  const rootElement = document.createElement('div');
  document.body.appendChild(rootElement);
  ReactDOM.render(jsx, rootElement);

  return {
    css: extractCSSBlocks().join('\n'),
    html: rootElement.innerHTML,
  }
}