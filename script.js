window.onscroll = function() {changetopbarbgcolor()};

function changetopbarbgcolor() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navtofix").style.marginTop="-50px";
  } else {
    document.getElementById("navtofix").style.marginTop="0px";
  }
}