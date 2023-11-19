let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if (pagina < 1000) {
		pagina += 1;
		cargarBuscados();
	}
	scrollToTop();
});

btnAnterior.addEventListener('click', () => {
	if (pagina > 1) {
		pagina -= 1;
		cargarBuscados();
	}
	scrollToTop();
});

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth' // Desplazamiento suave
	});
}

const cargarBuscados = async () => {
	try {
		const respuesta = await fetch(`https://api.fbi.gov/wanted/v1?page=${pagina}`);
		const datos = await respuesta.json();

		window.manejarErrorImagen = (event) => {
			const imagen = event.target;

			// Verifica si la imagen ya se cambió a la predeterminada
			if (!imagen.dataset.cambiada) {
				console.error('Error al cargar la imagen:', imagen.src);

				// Cambia la fuente de la imagen a la predeterminada
				imagen.src = "assets/img/person-icon.svg";

				// Marca la imagen como ya cambiada
				imagen.dataset.cambiada = true;
			}
		};

		let buscados = '';
		datos.items.forEach(buscado => {
			buscados += `
				<div class="buscado">
					<img class="image-buscado" alt="Wanted Image" src="https://www.fbi.gov${buscado.path}/@@images/image" 
						 onerror="manejarErrorImagen(event)">
					<h3 class="titulo">${buscado.title}</h3>
				</div>
			`;
		});

		document.getElementById('container').innerHTML = buscados;

		FbiModal(datos);

	} catch (error) {
		console.log(error);
	}

}

cargarBuscados();