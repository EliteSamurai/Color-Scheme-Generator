
document.getElementById('submit').addEventListener('click', function(){
    const color = document.getElementById('color').value
    const scheme = document.getElementById('schemes').value
    const result = color.slice(1,7)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${result}&mode=${scheme}&count=5`)
    .then(req => req.json())
    .then(data => {
        document.getElementById('return').innerHTML = ``
        for (let color of data.colors){
            document.getElementById('return').innerHTML += `<section class="container">
                                                                <div id="colorcol">
                                                                    <img src=${color.image.bare} id="final">
                                                                    <p>${color.hex.value}</p>
                                                                </div>
                                                            </section>`}
        })
})




    
  