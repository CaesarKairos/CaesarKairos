// Keep both icons embedded so switching never needs a network request.
(function () {
  const favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) return;

  // Same silhouette as img/favicon-alien.svg.
  const alien = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 17\"><path fill=\"#90A955\" fill-rule=\"evenodd\" d=\"M9.014,0.143 C5.159,0.143 2.031,3.122 2.031,6.794 C2.031,10.469 7.209,16 9.014,16 C10.822,16 16,10.469 16,6.794 C16,3.122 12.873,0.143 9.014,0.143 L9.014,0.143 Z M7.895,10.895 C7.579,11.213 6.481,10.624 5.447,9.574 C4.411,8.528 3.829,7.42 4.145,7.1 C4.46,6.779 5.557,7.369 6.592,8.417 C7.625,9.465 8.211,10.572 7.895,10.895 L7.895,10.895 Z M10.114,10.887 C9.794,10.567 10.384,9.461 11.435,8.414 C12.484,7.367 13.593,6.778 13.915,7.1 C14.235,7.418 13.644,8.524 12.595,9.57 C11.545,10.617 10.434,11.204 10.114,10.887 L10.114,10.887 Z\"/></svg>";
  const onlineIcon = "data:image/svg+xml," + encodeURIComponent(alien);
  const offlineIcon = "data:image/svg+xml," +
    encodeURIComponent(alien.replace("#90A955", "#9CA3AF"));

  function updateFavicon() {
    favicon.href = navigator.onLine === false ? offlineIcon : onlineIcon;
  }

  window.addEventListener("online", updateFavicon);
  window.addEventListener("offline", updateFavicon);
  window.addEventListener("pageshow", updateFavicon);
  updateFavicon();
})();
