
function MouseMoveFunc(e) {

    // マウスカーソルの座標を取得
    var mouse_x = e.clientX;
    var mouse_y = e.clientY;

    if (mouse_x <= 300 && mouse_y <= 200) {
        document.querySelector(".js-browser-back-popup.browserback").classList.add("show");
    }
}

if(window.innerWidth > 768) {
    document.addEventListener("mousemove", MouseMoveFunc);

    document.querySelector(".js-browser-back-popup.browserback .js-close-popup").addEventListener("click", () => {
      document.querySelector(".js-browser-back-popup.browserback").classList.add("showed");
    })
    
    document.querySelector(".js-browser-back-popup.browserback .overlay").addEventListener("click", () => {
      document.querySelector(".js-browser-back-popup.browserback").classList.add("showed");
    })
}
