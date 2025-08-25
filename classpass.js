[...document.querySelectorAll('li[data-component="SearchResultsList"]')]
  .filter(li=>/gym|fitness/i.test(li.querySelector('h2')?.textContent||''))
  .forEach(li=>console.log('Borrando:',li.querySelector('h2').textContent)||li.remove());
