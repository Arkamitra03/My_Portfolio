//title secion script
var typed = new Typed(".auto-typed",{
    strings : ["coder","developer","designer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
});
 //about section script
var tabLinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tab){
    for(tablink of tabLinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tab).classList.add("active-tab");
}
