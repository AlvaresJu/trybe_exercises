// 2. Agora vamos consultar uma API que fornece os valores de crypto moedas e mostrar as 10 primeiras.
// Por se tratar de uma API pública a quantidade de requisições a ela é limitada, caso você se depare com o seguinte erro: FetchError: invalid json response body at (url da API) reason: Unexpected token T in JSON at position 0, significa que você foi bloqueado temporariamente, basta esperar 1 ou 2 minutos para poder voltar a usar normalmente.
// 1. Criar um arquivo .js e dentro dele uma função para pegar o array com as moedas.
// 2. Crie também um arquivo HTML que deve conter uma tag para listar as crypto moedas.
// 3. 🚀 Agora vamos fazer com que as moedas apareçam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 46785.06.
// 4. 🚀 Agora usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras.
// Bonus: Usar uma API para converter o preço das crypto moedas para a nossa moeda local ao invés de mostrar o seu valor em dólar.

const fetchCoins = async () => {
  const urlCoins = 'https://api.coincap.io/v2/assets';
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  try {
    const responseCoin = await fetch(urlCoins, requestOptions);
    const dataCoins = (await responseCoin.json()).data;
    const brlConversionRate = await convertPrice();
    printCoins(dataCoins, brlConversionRate);
  } catch (error) {
    console.log(`Unable to get cryptocoins data, please try again in 1 or 2 minutes.
${error}`);
  }
}

const convertPrice = async () => {
  const urlConvertUsd = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
  try {
    const responseConversion = await fetch(urlConvertUsd);
    const conversionRates = (await responseConversion.json()).usd;
    return conversionRates.brl;
  } catch (error) {
    console.log(`Unable to get the USD convertion rate to BRL.
${error}`);
  }
}

const printCoins = (coins, conversionRate) => {
  const top10Coins = coins.filter(({ rank }) => rank <= 10);
  const coinsHtmlList = document.getElementById('cryptocoins');
  top10Coins.forEach(({ symbol, name, priceUsd }) => {
    const coinHtml = document.createElement('li');
    coinHtml.innerHTML = `${name} (${symbol}): R$ ${(Number(priceUsd) * conversionRate).toFixed(2)}`;
    coinsHtmlList.appendChild(coinHtml);
  });
}

window.onload = () => fetchCoins();
