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

function actionModifyMain() {
    switch (valueSelectMain) {
        case 0:
            document.getElementById("hospitalTitle").innerHTML = "Modificar Hospital";
            document.getElementById("modifyHospital").style.display = 'block';

            let optionsHospital= '<div class="row m-t-25 text-center">' +
                '<div class="col-sm-8 col-xs-12">' +
                '<div class="input-group">' +
                '<select id="modifyHospitalItem" class="form-control" required>';

            hospitalList.forEach(function (hospitalItem) {
                optionsHospital += '<option value="' + hospitalItem.name + '">' + hospitalItem.name + '</option>';
            })


            optionsHospital          += '</select></div></div>' +
                '<div class="col-sm-4 col-xs-12">' +
                '<button type="button" id="btn0" onclick="modifyHospitalItems();" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Modificar</button>' +
                '</div></div><hr/>';

            document.getElementById("modifyHospital").innerHTML = optionsHospital;

            break;
        case 1:
            document.getElementById("laborTitle").innerHTML = "Modificar Personal";
            document.getElementById("modifyLabor").style.display = 'block';

            let optionsLabor= '<div class="row m-t-25 text-center">' +
                '<div class="col-sm-8 col-xs-12">' +
                '<div class="input-group">' +
                '<select id="modifyLaborItem" class="form-control" required>';

            laborList.forEach(function (laborItem) {
                optionsLabor += '<option value="' + laborItem.name + '">' + laborItem.name + '</option>';
            })


            optionsLabor          += '</select></div></div>' +
                '<div class="col-sm-4 col-xs-12">' +
                '<button type="button" id="btn1" onclick="modifyLaborItems();" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Modificar</button>' +
                '</div></div><hr/>';

            document.getElementById("modifyLabor").innerHTML = optionsLabor;
            break;
        case 2:
            document.getElementById("patientTitle").innerHTML = "Modificar Paciente";
            document.getElementById("modifyPatient").style.display = 'block';

            let optionsPatient= '<div class="row m-t-25 text-center">' +
                '<div class="col-sm-8 col-xs-12">' +
                '<div class="input-group">' +
                '<select id="modifyPatientItem" class="form-control" required>';

            patientList.forEach(function (patientItem) {
                optionsPatient += '<option value="' + patientItem.name + '">' + patientItem.name + '</option>';
            })


            optionsPatient          += '</select></div></div>' +
                '<div class="col-sm-4 col-xs-12">' +
                '<button type="button" id="btn2" onclick="modifyPatientItems();" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Modificar</button>' +
                '</div></div><hr/>';

            document.getElementById("modifyPatient").innerHTML = optionsPatient;
            break;
    }
}

function actionConsultMain(event) {
    event.preventDefault();

    valueSelectMain = parseInt(document.getElementById("selectMain").value);

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

            showPatientData();
        } else if (valueSelectMain === 0) {
            showHospitalData();
        } else if (valueSelectMain === 1) {
            showLaborData();
        }

    } else {
        resetDesing();
    }

}

function actionInsertMain() {
    document.getElementById("hospitalTitle").innerHTML = "Insertar Hospital";
    document.getElementById("laborTitle").innerHTML = "Insertar Personal";
    document.getElementById("patientTitle").innerHTML = "Insertar Paciente";
    document.getElementById("modifyHospital").style.display = 'none';
    document.getElementById("modifyLabor").style.display = 'none';
    document.getElementById("modifyPatient").style.display = 'none';
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


