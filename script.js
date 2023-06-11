//produtos

function abroba(){
  let ceblinha = JSON.parse(this.responseText);
  let data = ceblinha.products
let conteudo=""
if(window.location.pathname!="/detalhes.html"){
for(let i=0; i<data.length; i++){
let item=data[i]
    conteudo+=`<div class="card bg-dark" style="width:20rem;">
    <img src="${item.image}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-img-top product-image">${item.title}</h5>
      <p class="card-text">R$${item.price}</p>
      <p class="card-text">Avaliação: ${item.rating.rate}☆</p>
      <a href="#" class="botao btn btn-primary" id="produto-${item.id}">Mais sobre...</a>
    </div>
  </div>`
}           
document.getElementById('rolador').innerHTML=conteudo

 //carousel
            document.getElementById('carousel').innerHTML=`<div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${data[34].image}" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item">
              <img src="${data[11].image}" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item">
              <img src="${data[0].image}" class="d-block w-100" alt="">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>` 

//mais sobre
const portal = document.querySelectorAll(`.botao`)
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
pop.onload = abroba
pop.onerror = function () { console.log('error') }
pop.send()


           

      