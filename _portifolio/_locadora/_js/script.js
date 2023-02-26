function validaForm(){
	let validaCod = document.forms["frmCadFilmes"]["codigo"].value;
	let validaData = document.forms["frmCadFilmes"]["data"].value;
	let validaTitulo = document.forms["frmCadFilmes"]["titulo"].value;
	let validaDiretor = document.forms["frmCadFilmes"]["diretor"].value;
	let validaAtorAtriz = document.forms["frmCadFilmes"]["ator-atriz"].value;
	let validaNotaImdb = document.forms["frmCadFilmes"]["notaIMDB"].value;
	let validaRadio = document.forms["frmCadFilmes"]["radio"].value;
		
		if(validaCod == ""){
			alert("O código deve ser preenchido!");
		return false;
	}
		if(validaData == ""){
			alert("A data deve ser preenchida!");
		return false;
	}
		if(validaTitulo == ""){
			alert("O título deve ser preenchido!");
		return false;
	}
		if(validaDiretor == ""){
			alert("O nome do diretor deve ser preenchido!");
		return false;
	}
		if(validaAtorAtriz == ""){
			alert("O nome do Ator/Atriz deve ser preenchido!");
		return false;
	}
		if(validaNotaImdb == ""){
			alert("A nota IMDB deve ser preenchida!");
		return false;
	}
		if(validaRadio == ""){
			alert("O campo rádio deve ser marcado!");
		return false;
	}
}

function insere(){
	let codi = document.forms["frmCadFilmes"]["codigo"].value;
	let data = document.forms["frmCadFilmes"]["data"].value;
	let titu = document.forms["frmCadFilmes"]["titulo"].value;
	let dire = document.forms["frmCadFilmes"]["diretor"].value;
	let ator = document.forms["frmCadFilmes"]["ator-atriz"].value;
	let nota = document.forms["frmCadFilmes"]["notaIMDB"].value;
	let radi = document.forms["frmCadFilmes"]["radio"].value;

	let inserir = window.document.getElementById("inserirTabela");
		inserir.innerHTML = `<th scope="row">${codi}</th>`;
		inserir.innerHTML += `<td>${titu}</td>`;
		inserir.innerHTML += `<td>${dire}</td>`;
		inserir.innerHTML += `<td>${data}</td>`;
		inserir.innerHTML += `<td>${radi}</td>`;
		inserir.innerHTML += `<td>${ator}</td>`;
		inserir.innerHTML += `<td>${nota}</td>`;
}