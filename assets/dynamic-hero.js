const params = new URLSearchParams(window.location.search)
if (params.has('he')) {
    document.querySelector('[section-heading]').innerHTML = params.get('he');
}
if (params.has('subh')) {
    document.querySelector('[section-subheading]').innerHTML = params.get('subh');
}
if (params.has('bgd') && params.has('bgm')) {
// Your CSS as text
var styles = `.main-banner-bg{background-image: url(${params.get('bgd')}) !important}@media screen and (max-width: 768px) {.main-banner-bg {background-image: url(${params.get('bgm')}) !important}}`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
}