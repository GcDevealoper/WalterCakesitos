Cakesitos = [
    './Media/OcCute.png',
    './Media/JasdrikOC.png',
    './Media/Satiro.png',
    './Media/Anya1.png',
    './Media/Anya2.png',
    './Media/Aubrey.png',
    './Media/ChillyDraw.png',
    './Media/NimuntOc.png',
    './Media/DaishiArtsOc.png',
    './Media/DanielFPOc.png',
    './Media/NellyOc.png',
    './Media/DhalOc.png',
    './Media/EsmeraldaBtwOc.png',
    './Media/GoruOdaOc.png',
    './Media/LuiseOc.png',
    './Media/NecoArc.png',
    './Media/SussyOc.png',
    './Media/Tsunayoshi.png',
    './Media/RayArck Oc.png',
    './Media/KinoOc.png',
    './Media/LagartijaOc.png',
    './Media/Akira RachetOc.png',
    './Media/NamariOc.png',
    './Media/KoffeOc.png'
]

$Gallery = document.getElementById('Gallery')

for(let i=0; i<Cakesitos.length;i++){
    
    $item = `
    <div class="item">
      <div class="space1"><a href="https://www.tumblr.com/waltercake" target="_blank"><i class="fa-brands fa-square-tumblr"></i> WalterCake</a></div>
      <img src="${Cakesitos[i]}" alt="">
      <div class="space2"></div>
    </div>`

    $Gallery.innerHTML += $item
}