Cakesitos = [
    './OcCute.png',
    './JasdrikOC.png',
    './Satiro.png',
    './KirbyCakesito.png',
    './KirbyCakesitoSleep.png',
    './Anya1.png',
    './Anya2.png',
    './Aubrey.png',
    './ChillyDraw.png',
    './NimuntOc.png',
    './DaishiArtsOc.png',
    './DanielFPOc.png',
    './NellyOc.png',
    './DhalOc.png',
    './EsmeraldaBtwOc.png',
    './GoruOdaOc.png',
    './LuiseOc.png',
    './NecoArc.png',
    './SussyOc.png',
    './Tsunayoshi.png',
    './RayArck Oc.png',
    './KinoOc.png',
    './LagartijaOc.png',
    './Akira RachetOc.png',
    './NamariOc.png',
    './KoffeOc.png'
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
