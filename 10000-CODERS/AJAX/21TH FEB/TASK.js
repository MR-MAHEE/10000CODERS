const row = document.querySelector(".row");

const getData = async function () {
  const response = await fetch("https://fakestoreapi.com/products");
  console.log(response);
  const data = await response.json();
  console.log(data);
  let i = 0;
    for (let value in data) {

        row.innerHTML += `<div class = "card col-2">

        <img src="${data[i].image}" alt="" class="image img${i}"></br>

        ${data[i].title}</br>

        ${data[i].rating.rate}*   (${data[i].rating.count})</br>

        $${data[i].price}

        </div>`
        
        i++;
      }
  }
getData();
