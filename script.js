const text = document.getElementById('quote');
const author = document.getElementById('author');
const vkBtn = document.getElementById('post');


const getNewQuote = async () => {

  // quotes api
  let url = "https://type.fit/api/quotes"; 

  const response = await fetch(url);
  const allQuotes = await response.json();

  // generate a random number between 0 and length of quote array
  const index = Math.floor(Math.random() * allQuotes.length);

  // store quotes and authors in generated index
  const quote = allQuotes[index].text;
  const auth = allQuotes[index].author;

  if (auth==null)
  {
    author = "anonymous"
  }

  text.innerHTML = quote;
  author.innerHTML =  auth;
  vkBtn.href = "https://vk.com/share.php?url=" + quote + "~" +auth; 

}

getNewQuote();