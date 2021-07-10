document.addEventListener('DOMContentLoaded', () => {
  let top = 0,
    left = 0,
    sizes = { width: 594, height: 332 },
    webpage = document.getElementById('webpage'),
    loupe = document.getElementById('loupe'),
    // 画像の左上を座標0に設定
    rect = webpage.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop,
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    offset = { left: rect.left + scrollLeft, top: rect.top + scrollTop }

  document.addEventListener('mousemove', (e) => {
    // 画像左上からの距離を算出
    left = e.pageX - offset.left
    top = e.pageY - offset.top
    if (
      // 画像をはみ出た場合の条件式
      left < 0 ||
      top < 0 ||
      left > sizes.width ||
      top > sizes.height
    ) {
      // ルーペを非表示
      // loupe.style.display = 'none'
      loupe.classList.remove('in')
    } else {
      // ルーペを表示
      // loupe.style.display = 'block'
      loupe.classList.add('in')
      // マウスカーソルに合わせてルーペを追従
      loupe.style.top = `${top - 90}px`
      loupe.style.left = `${left - 90}px`
      // ルーペ内拡大画像の位置
      loupe.style.backgroundPosition = `-${left * 1.7}px -${top * 1.4}px`
    }
  })
})
