const fetchAdviceQuotes = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  console.log(data);

  document.querySelector("#advice-id").innerHTML = `Advice #${data.slip.id}`;
  document.querySelector("#advice-quote").innerHTML = `"${data.slip.advice}"`;
};

const getAdvice = document
  .querySelector("#new-advice")
  .addEventListener("click", () => {
    fetchAdviceQuotes();
  });

window.onload(fetchAdviceQuotes());
