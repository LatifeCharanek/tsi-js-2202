document
	.querySelector("button")
	.addEventListener("click", recuperaConteudoAjax);

function recuperaConteudoAjax() {
	const XHR = new XMLHttpRequest();
	XHR.open("GET", "http://127.0.0.1:5500/Ajax/conteudo.txt", true);

	XHR.onload = function () {
		if (this.status == 200) {
			// document.querySelector("#dadorecuperado").innerHTML =

			let dados = JSON.parse(this.responseText);

			dados.forEach(function (valor) {
				console.log(valor.idade);

				if (valor.idade > 18) {
					// console.log(valor);
					// document.querySelector("#dadorecuperado").innerHTML = valor.idade;
				}
			});

		}
	};

	XHR.send();
}
