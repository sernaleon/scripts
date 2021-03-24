//Gives a unique list of all purchased products ever

//https://www.pieter-pot.nl/account?view=orders

async function getBodyAsync(url) {
    const page = await fetch(url)
    const body = await page.text()
    return body;
}

bodies = await Promise.all($('[data-label=Bestelnummer] a').map((i,e) => getBodyAsync(e.href)))
htmls = bodies.map(v => new DOMParser().parseFromString(v, 'text/html'))

productsFullName = htmls.flatMap(h => [...h.querySelectorAll('[data-label="Product"] a')].map(e => e.innerText))
products = productsFullName.map(a => a.split(',')[0].split('–')[0].split('-')[0].split('(')[0].trim())

uniqueSortedProducts = [...new Set(products)].sort()
