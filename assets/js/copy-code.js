document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('pre.highlight');
  
  codeBlocks.forEach((codeBlock) => {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-button';
    copyButton.textContent = 'Copy';
    
    copyButton.addEventListener('click', () => {
      const code = codeBlock.querySelector('code').textContent;
      navigator.clipboard.writeText(code).then(() => {
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });
    
    codeBlock.appendChild(copyButton);
  });
}); 