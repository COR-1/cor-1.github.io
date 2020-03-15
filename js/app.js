const tabBar = document.querySelector("#tabBar");
const tabBarResize = ({ matches }) => matches ? 
    tabBar.classList.replace("d-flex", "btn-group-vertical") :
    tabBar.classList.replace("btn-group-vertical", "d-flex");
const tabBarQuery = window.matchMedia("(max-width: 645px)")
tabBarResize(tabBarQuery);
tabBarQuery.addListener(tabBarResize);