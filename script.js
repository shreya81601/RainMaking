/*=======================================================================================*/
/*NAV BAR*/

function openNav() {
  document.getElementById("mySidenav").style.width = "18%";
  /*document.getElementById("main").style.marginLeft = "250px";*/
  document.getElementById("nav_button").style.opacity = "0";
  document.getElementById("main").style.opacity = "0.9";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  /*document.getElementById("main").style.marginLeft = "0";*/
  document.getElementById("nav_button").style.opacity = "1";
  document.getElementById("main").style.opacity = "1";
}
