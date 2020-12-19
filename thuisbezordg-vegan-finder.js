async function getBodyAsync(url) {
    const page = await fetch(url)
    const body = await page.text()
    return body;
}

function containsKeywords(text, keywords) {
    var lowerText = text.toLowerCase()
    return keywords.some(k => lowerText.indexOf(k) > -1)
}

const keyWords = [ 'vegan' ] //[ 'plant', 'vegan' ] plant was giving too many eggplant-based false positives 
const restaurantUrls = [...document.querySelectorAll('[itemtype="http://schema.org/Restaurant"] .img-link')].map(x => x.href)

bodies = await Promise.all(restaurantUrls.map(r => getBodyAsync(r)))
vegans = bodies
    .filter(b => containsKeywords(b, keyWords))
    .map(v => new DOMParser().parseFromString(v, 'text/html').querySelector('link[rel="canonical"]').href)

