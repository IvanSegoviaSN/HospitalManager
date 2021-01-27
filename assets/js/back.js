const hospitalList = [];
const laborList = [];
const patientList = [];

// Lanza la carga de datos en el formulario
function launchData() {
    // Oculta los contenedores en la carga
    showDivs(-1, 'none');

    // Desactivo los botones por defecto
    disableButtons(true);

    // Llenado de valores para el select "selectMain"
    let optionsMain = '<option value="-1">Elige una opción</option>' +
        '<option value="0">' + "Hospital" + '</option>' +
        '<option value="1">' + "Personal" + '</option>' +
        '<option value="2">' + "Paciente" + '</option>';
    document.getElementById("selectMain").innerHTML = optionsMain;

    // Llenado de valores para el select "selectSpecialtyLabor"
    let optionsSpecialty = '<option value="-1">Sin especialidad</option>' +
        '<option value="Médico">' + "Médico" + '</option>' +
        '<option value="Enfermera">' + "Enfermera" + '</option>' +
        '<option value="Celador">' + "Celador" + '</option>';
    document.getElementById("selectSpecialtyLabor").innerHTML = optionsSpecialty;

}

function actionConsultMain(event) {
    event.preventDefault();

    let valueSelectMain = parseInt(document.getElementById("selectMain").value);

    // Desactiva los botones
    valueSelectMain == -1 ? resetDesing() :
        disableButtons(false);

    // Activa el contenedor elegido
    if (valueSelectMain != -1) {
        showDivs(valueSelectMain, 'block');

        if (valueSelectMain === 2) {
            // Llenado de valores para el select "selectHospitalPatient"
            let optionsHospital = '<option value="-1">Sin hospital</option>';
            hospitalList.forEach(function (hospitalItem) {
                optionsHospital += '<option value="' + hospitalItem.name + '">' + hospitalItem.name + '</option>';
            })
            document.getElementById("selectHospitalPatient").innerHTML = optionsHospital;

            // Llenado de valores para el select "selectLaborPatient"
            let optionsLabor = '<option value="-1">Sin Personal</option>';
            laborList.forEach(function (laborItem) {
                optionsLabor += '<option value="' + laborItem.name + '">' + laborItem.name + '</option>';
            })
            document.getElementById("selectLaborPatient").innerHTML = optionsLabor;
        }

    } else {
        resetDesing();
    }

}

function saveData() {
    switch (parseInt(document.getElementById("selectMain").value)) {
        case 0:
            let listHospital = [document.getElementById("inputNameHospital").value,
                document.getElementById("inputLocHospital").value,
                document.getElementById("inputResHospital").value];

            hospitalList.push(new Hospital(listHospital[0], listHospital[1], listHospital[2]));

            showHospitalData();

            removeDataForm(false);
            document.getElementById("selectMain").value = 0;
            break;
        case 1:
            let listLabor = [document.getElementById("inputNameLabor").value,
                document.getElementById("selectSpecialtyLabor").value];

            laborList.push(new Labor(listLabor[0], listLabor[1]));

            showLaborData();

            removeDataForm(false);
            document.getElementById("selectMain").value = 1;
            break;
        case 2:
            let listPatient = [document.getElementById("inputNamePatient").value,
                document.getElementById("selectHospitalPatient").value,
                document.getElementById("selectLaborPatient").value];

            patientList.push(new Patient(listPatient[0], listPatient[1], listPatient[2]));

            showPatientData();

            removeDataForm(false);
            document.getElementById("selectMain").value = 2;
            break;
    }
}