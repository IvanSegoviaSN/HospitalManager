
function showDivs(id, display) {
    switch (id) {
        case 0:
            // Sobrecarga para asegurarme de que se cierran todas
            showDivs(-1, 'none');
            document.getElementById("divHospitalInsertMain").style.display = display;
            document.getElementById("outputHospital").style.display = display;
            break;
        case 1:
            showDivs(-1, 'none');
            document.getElementById("divLaborInsertMain").style.display = display;
            document.getElementById("outputLabor").style.display = display;
            break;
        case 2:
            showDivs(-1, 'none');
            document.getElementById("divPatientInsertMain").style.display = display;
            document.getElementById("outputPatient").style.display = display;
            break;
        default:
            document.getElementById("divHospitalInsertMain").style.display = display;
            document.getElementById("divLaborInsertMain").style.display = display;
            document.getElementById("divPatientInsertMain").style.display = display;
            document.getElementById("outputHospital").style.display = display;
            document.getElementById("outputLabor").style.display = display;
            document.getElementById("outputPatient").style.display = display;
            break;
    }

}

function resetDesing() {
    disableButtons(true);
    showDivs(-1, 'none');
    removeDataForm(false);
}

// Desactiva los botones
function disableButtons(disable) {
    document.getElementById("btnInsertSec").disabled = disable;
    document.getElementById("btnModifySec").disabled = disable;
    document.getElementById("btnRemoveSec").disabled = disable;
}


function removeDataForm(design) {
    document.getElementById("formMain").reset();

    if (design)
        resetDesing();
}

function showHospitalData() {
    // Crea una tabla
    let code = '<h1>Lista Hospitales</h1><table class="table"><thead>' +
        '<th scope="col">Nombre</th>' +
        '<th scope="col">Localidad</th>' +
        '<th scope="col">Responsable</th></thead><tbody>';

    hospitalList.forEach(function (hospitalItem) {
        code += '<tr><th scope="row">' +
            hospitalItem.name + '</th><td>' +
            hospitalItem.location + '</td><td>' +
            hospitalItem.attendant + '</td></tr>';
    })

    code += '</tbody></table>';

    // Inserta el codigo en el DOM
    for (let i = 0; i < hospitalList.length; i++) {
        document.getElementById("outputHospital").innerHTML = code;
    }
}

function showLaborData() {
    // Crea una tabla
    let code = '<h1>Lista Personal</h1><table class="table"><thead>' +
        '<th scope="col">Nombre</th>' +
        '<th scope="col">Especialidad</th></thead><tbody>';

    laborList.forEach(function (laborItem) {
        code += '<tr><th scope="row">' +
            laborItem.name + '</th><td>' +
            laborItem.specialty + '</td></tr>';
    })

    code += '</tbody></table>';

    // Inserta el codigo en el DOM
    for (let i = 0; i < laborList.length; i++) {
        document.getElementById("outputLabor").innerHTML = code;
    }
}

function showPatientData() {
    // Crea una tabla
    let code = '<h1>Lista Pacientes</h1><table class="table"><thead>' +
        '<th scope="col">Nombre</th>' +
        '<th scope="col">Hospital</th>' +
        '<th scope="col">Personal</th></thead><tbody>';

    patientList.forEach(function (patientItem) {
        code += '<tr><th scope="row">' +
            patientItem.name + '</th><td>' +
            patientItem.hospital + '</td><td>' +
            patientItem.labor + '</td></tr>';
    })

    code += '</tbody></table>';

    // Inserta el codigo en el DOM
    for (let i = 0; i < patientList.length; i++) {
        document.getElementById("outputPatient").innerHTML = code;
    }
}
