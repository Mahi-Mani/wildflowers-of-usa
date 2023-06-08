$(document).ready(function () {
  var color;

  // Homepage map code
  var detailsBox = document.getElementById('details-box');

  document.addEventListener('mouseover', function (e) {
    if (e.target.tagName == 'path') {
      var content = e.target.dataset.name;
      detailsBox.innerHTML = content;
      detailsBox.style.opacity = "100%";
    }
    else {
      detailsBox.style.opacity = "0%";
    }
  });

  window.onmousemove = function (e) {
    var x = e.clientX,
      y = e.clientY;
    detailsBox.style.top = (y + 20) + 'px';
    detailsBox.style.left = (x) + 'px';
  };

  // Grab id of each flower
  $(".flower").on("click", function (event) {
    event.preventDefault();
    console.log(this.id);
    color = this.id;
    renderHtml(color);
  });

  function renderHtml(color) {
    window.location.href = "file:///D:/SCU/01-Data%20Viz/Project/" + color + ".html";
  }
})