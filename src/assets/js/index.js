let date = new Date()

if(document.getElementById("FooterYear")){
    document.getElementById("FooterYear").innerText = document.getElementById("FooterYear").innerText.replace("xxxx",date.getFullYear()) 
}
let DiscordLink = "https://discord.gg/kDEM8hsDdQ"

document.getElementById("reg").setAttribute("href",DiscordLink)
function getNav(){
    document.getElementById("navbar-cta").classList.toggle("hidden")
}