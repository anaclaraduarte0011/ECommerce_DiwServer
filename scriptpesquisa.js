function pesquisa(){
    let ceblinha = JSON.parse(this.responseText);
    let data = ceblinha.products
const botBarra=document.getElementById('botbarra')
botBarra.addEventListener('click', func)
function func(event){
    if(event){
        event.preventDefault()
    }
    const barrinha=document.querySelector('#barra').value.toLowerCase()
    let conteudo=""
    for(let i=0;i<data.length;i++){
        if(data[i].title.toLowerCase().includes(barrinha)){
conteudo+=`<div class="card bg-dark m-5" style="width:20rem;">
<img src="${data[i].image}" class="card-img-top" alt="">
<div class="card-body">
  <h5 class="card-img-top product-image">${data[i].title}</h5>
  <p class="card-text">R$${data[i].price}</p>
  <p class="card-text">Avaliação: ${data[i].rating.rate}☆</p>
  <a href="#" class="butaoo btn btn-primary" id="item-${data[i].id}">Mais sobre...</a>
</div>
</div>`
        }
    }
    document.getElementById('siri').innerHTML=conteudo
    
    const portal = document.querySelectorAll(`.butaoo`)
    console.log(portal)
    portal.forEach(button => 
    {
        button.onclick = function() 
        {
            let item = this.id.split('-')[1]; // Extrai o id do produto
            window.location.href = "detalhes.html"+"?id="+item
        }
    })
}
            }
            let pop = new XMLHttpRequest()
pop.open('GET', 'https://diwserver.vps.webdock.cloud/products?page_items=35', true)
pop.onload = pesquisa
pop.onerror = function () { console.log('error') }
pop.send()