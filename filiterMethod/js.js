/*js*/

onload = () => {
  const jsdo = document.querySelector(".byjs");
  jsdo.addEventListener('mouseover', function () {
    this.children.namedItem('jimg').style = "transform:scale(1.2);filter: blur(2px);";
    this.children.namedItem('jtxt').style.opacity = 1;
  });
  jsdo.addEventListener('mouseout', function () {
    this.children.namedItem('jimg').style = "";
    this.children.namedItem('jtxt').style.opacity = 0;
  });
}

/*jq*/
$(document).ready(() => {
  $(".byjq").hover(function () {
    $(this).toggleClass('active');
  });
});