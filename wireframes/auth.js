(function () {
  if (sessionStorage.getItem('wf_auth') !== '1') {
    var here = encodeURIComponent(location.href);
    location.replace('login.html?redirect=' + here);
  }
})();
