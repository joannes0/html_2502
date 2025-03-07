window.onresize = function () {
  document.location.reload();
};
if (matchMedia("screen and (max-width: 700px)").matches) {
  $(".wrap").css({
    "background-color": "yellow",
    color: "white",
  });
} else if (matchMedia("not all and (orientation: landscape)").matches) {
    $(".wrap").css({
        "background-color": "orange"
    })
}
