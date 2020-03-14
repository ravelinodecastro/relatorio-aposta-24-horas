let tickets = document.getElementById("ticket_table").tBodies[0].rows;
let wrapper = document.getElementById("ticket_table_wrapper");
let total_invested = 0;
let total_won = 0;
let total_loose = 0;

for(var i=0;i<tickets.length;i++){

total_invested +=  parseFloat(tickets[i].getElementsByTagName("td")[4].innerHTML.replace(/\.|\Kz/g, ""));
if (tickets[i].getElementsByTagName("td")[3].getElementsByTagName("span")[0].innerHTML== "Venceu, Ganhador Pago"){
total_won  +=  parseFloat(tickets[i].getElementsByTagName("td")[6].innerHTML.replace(/\.|\Kz/g, ""));
}
else if (tickets[i].getElementsByTagName("td")[3].getElementsByTagName("span")[0].innerHTML== "Não Venceu"){
total_loose  +=  parseFloat(tickets[i].getElementsByTagName("td")[4].innerHTML.replace(/\.|\Kz/g, ""));
}

}
function formatMoney(amount, decimalCount = 2, decimal = ",", thousands = ".") {
      try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(
          (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
        ).toString();
        let j = i.length > 3 ? i.length % 3 : 0;

        return (
          negativeSign +
          (j ? i.substr(0, j) + thousands : "") +
          i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
          (decimalCount
            ? decimal +
              Math.abs(amount - i)
                .toFixed(decimalCount)
                .slice(2)
            : "")
        );
      } catch (e) {
        console.log(e);
      }
    }
wrapper.insertAdjacentHTML('beforeend', `<div>Investimento: ${formatMoney(total_invested)} Kz</div><div>Total ganho: ${formatMoney(total_won)} Kz</div><div>Total perdido: ${formatMoney(total_loose)} Kz</div><div>NOTA: este algoritimo foi por <a href="https://github.com7ravelinodecastro">Ravelino de Castro </a>, especialmente para o site Aposta 24 horas, e ela só mostra as estátisticas dos últimos 30 jogos apostados.`);
