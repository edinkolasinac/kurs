const getQuotes = async (page = 1) => {
    try {
      const response = await fetch(
        `https://api.quotable.io/quotes?${page ? `page=${page}` : ""}`
      );
  
      const result = await response.json();
  
      return result.results;
    } catch (error) {
      console.log(error);
    }
  };
  
  let page = 1;
  const contentDiv = document.getElementById("content");
  const pageInput = document.getElementById("page");
  
  // const createCard = (author, quote) => {
  //   return `<div
  //  style="
  //    width: 400px;
  //    min-height: 100px;
  //    border: 1px solid black;
  //    margin: 10px;
  //    padding: 20px;
  //  "
  // >
  //  <p>
  //    ${quote}
  //  </p>
  //  <p>By: ${author}</p>
  // </div>`;
  // };
  
  // getQuotes().then((result) => {
  //   result.forEach((quote) => {
  //     console.log(contentDiv.innerHTML);
  //     contentDiv.innerHTML =
  //       contentDiv.innerHTML + createCard(quote.author, quote.content);
  //   });
  //   //   contentDiv.appendChild();
  // });
  
  const createCardNode = (author, quote) => {
    const div = document.createElement("div");
    div.style = ` width: 400px;
         min-height: 100px;
         border: 1px solid black;
         margin: 10px;
         padding: 20px;
       `;
  
    const p = document.createElement("p");
    p.textContent = quote;
  
    div.appendChild(p);
  
    const p2 = document.createElement("p");
    p2.textContent = `By: ${author}`;
  
    div.appendChild(p2);
  
    return div;
  };
  
  // getQuotes().then((result) => {
  //   result.forEach((quote) => {
  //     const newCard = createCardNode(quote.author, quote.content);
  //     contentDiv.appendChild(newCard);
  //   });
  // });
  
  const clickable = () => {
    getQuotes(pageInput.value).then((result) => {
      contentDiv.innerHTML = "";
      result.forEach((quote) => {
        const newCard = createCardNode(quote.author, quote.content);
        contentDiv.appendChild(newCard);
      });
    });
  };
  
  const button = document.getElementById("click");
  
  button.addEventListener("click", clickable);