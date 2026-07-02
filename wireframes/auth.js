(function () {
  if (sessionStorage.getItem('wf_auth') !== '1') {
    var here = encodeURIComponent(location.href);
    location.replace('login.html?redirect=' + here);
    return;
  }
  // 一覧に戻るボタンを全ページに挿入
  function insertBtn() {
    if (document.getElementById('wf-back-btn')) return;
    var btn = document.createElement('a');
    btn.id = 'wf-back-btn';
    btn.href = 'index.html';
    btn.textContent = '← 一覧に戻る';
    btn.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#2c3e35;color:#fff;font-size:12px;padding:8px 16px;border-radius:2px;z-index:9999;text-decoration:none;letter-spacing:0.5px;box-shadow:0 2px 8px rgba(0,0,0,0.3)';
    document.body.appendChild(btn);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertBtn);
  } else {
    insertBtn();
  }
})();
