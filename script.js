// $(function () {
//   $(".container").css("display", "none").fadeIn(1500);
// });

// $(function () {
//   $(".name").css("display", "none").fadeIn(2000);
// });

// $(function () {
//   $(".email").css("display", "none").fadeIn(2500);
// });

// $(function () {
//   $(".age").css("display", "none").fadeIn(3000);
// });

// $(function () {
//   $(".role").css("display", "none").fadeIn(3500);
// });

// $(function () {
//   $(".fieldset").css("display", "none").fadeIn(4000);
// });

// $(function () {
//   $(".favorite").css("display", "none").fadeIn(4500);
// });

// $(function () {
//   $(".improved").css("display", "none").fadeIn(5000);
// });

// $(function () {
//   $(".comments-section").css("display", "none").fadeIn(5500);
// });

// $(function () {
//   $("#submit").css("display", "none").fadeIn(6000);
// });

$(function () {
  const items = [
    ".container",
    ".name",
    ".email",
    ".age",
    ".role",
    ".fieldset",
    ".favorite",
    ".improved",
    ".comments-section",
    "#submit",
  ];

  items.forEach((selector, index) => {
    $(selector)
      .hide()
      .fadeIn(1500 + index * 500);
  });
});
