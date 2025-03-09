//ページ内リンクをクリックした際、URLを変えずにページを移動する
document.addEventListener("DOMContentLoaded",()=>{
  const links = Array.prototype.slice.call(document.querySelectorAll('a'), 0);
  links.filter(el => (el.getAttribute('href') || '').match(/^#/)).forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const toTarget = document.querySelector(el.getAttribute('href'));
      if (toTarget) {
        if (toTarget.scrollIntoView) {
          toTarget.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        } else {
          let rect = toTarget.getBoundingClientRect();
          window.scrollTo(rect.x, rect.y)
        }
      }
    })
  });
  
  history.pushState(null, null, null);
  let gobackCount = -1;
  
  if (window.innerWidth <= 768) {
    // SP時の離脱防止モーダル　戻るボタンで表示
    window.addEventListener("popstate", () => {
      document.querySelector(".js-browser-back-popup.browserback").classList.add("show");
    }, false);
  
    document.querySelector(".js-browser-back-popup.browserback .js-close-popup").addEventListener("click", () => {
      history.go(gobackCount);
    })
  
    document.querySelector(".js-browser-back-popup.browserback .overlay").addEventListener("click", () => {
      history.go(gobackCount);
    })
  
    // SP時の離脱防止モーダル　1分後に画面下部に表示
    window.setTimeout(function () {
      document.querySelector(".js-browser-back-popup.timeout").classList.add("show");
    }, 60000);
  
    document.querySelector(".js-browser-back-popup.timeout .js-close-popup").addEventListener("click", () => {
      document.querySelector(".js-browser-back-popup.timeout").classList.add("showed");
    })
  
    document.querySelector(".js-browser-back-popup.timeout .overlay").addEventListener("click", () => {
      document.querySelector(".js-browser-back-popup.timeout").classList.add("showed");
    })
  }
})

