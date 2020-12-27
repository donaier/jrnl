import ProgressiveWebApp from 'pwa-rails';

document.addEventListener('turbolinks:load', () => {
  const progressiveWebApp = new ProgressiveWebApp('/pwa-sw.js');
})

console.log('start?');
