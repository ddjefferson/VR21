document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();
  const image = document.querySelector("#image").value;
  const topText = document.querySelector("#top-quote").value;
  const bottomText = document.querySelector("#bottom-quote").value;

  const contentCard = `
  <div class="col-md-3">
         <div class="card">
         <div class="card-body">
               <h3 class="top-quote">${topText}</h3>
           </div>
           <img
             src=${image}
             class="card-img-top"
             alt="..."/>
           <div>
              <h3 class="bottom-quote">${bottomText}</h3>
           </div>
         </div>
       </div>
     `;
  document.querySelector(".row").insertAdjacentHTML("beforeend", contentCard);
});
