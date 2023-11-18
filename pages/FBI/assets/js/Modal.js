function FbiModal(datos) {
    var buscados = document.getElementsByClassName("image-buscado");

    Array.from(buscados).forEach(function (element, index) {
        element.addEventListener("click", function () {
            var modalesAnteriores = document.querySelectorAll(".modal");
            modalesAnteriores.forEach(function (modalAnterior) {
                modalAnterior.remove();
            });

            var modalDiv = document.createElement("div");
            modalDiv.className = "modal";

            var modalData = datos.items[index];

            var imageOriginal = element.src;

            modalDiv.innerHTML = `
                <div class="modal-container">
                    <div class="top-modal"><img class="modal-close" src="assets/img/close-icon.svg" alt="Close Icon"></div>
                    <div class="modal-info">
                        <div class="modal-imgBuscado">
                        <img class="image-modal" alt="Wanted Image" src="${imageOriginal}">
                        </div>
                        <div class="modal-dataBuscado">
                            <h5>Name: <span>${modalData.title}</span></h5>
                            <h5>Nacionality: <span>${modalData.nacionality}</span></h5>
                            <h5>Sex: <span>${modalData.sex}</span></h5>
                            <h5>Birth Place: <span>${modalData.birth_of_place}</span></h5>
                            <h5>Age Range: <span>${modalData.age_range}</span></h5>
                            <h5>Race: <span>${modalData.race_raw}</span></h5>
                            <h5>Hair: <span>${modalData.hair}</span></h5>
                            <h5>Max Height: <span>${modalData.height_max}</span></h5>
                            <h5>Max Weight: <span>${modalData.weight_max}</span></h5>
                            <h5>Occupations: <span>${modalData.occupations}</span></h5>
                            <h5>Scars & Marks: <span>${modalData.scars_and_marks}</span></h5>
                            <h5>Subjects: <span>${modalData.subjects}</span></h5>
                        </div>
                    </div>
                    <div class="modal-paragraphBuscado">
                            <h5>Caution: <span>${modalData.caution}</span></h5>
                        </div>
                </div>
            `;
            document.body.appendChild(modalDiv);

            modalDiv.addEventListener("click", function (event) {
                if (event.target.classList.contains("modal-close") || event.target.classList.contains("modal")) {
                    cerrarModal();
                }
            });

            function cerrarModal() {
                modalDiv.remove();
            }

        });
    });
}

FbiModal();
