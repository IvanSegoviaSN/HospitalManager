// Lanza la carga de datos en el formulario
function launchData() {
    // Oculta los contenedores en la carga
    showDivs(-1, 'none');

    // Desactivo los botones por defecto
    disableButtons(true);

    // Llenado de valores para el select "selectMain"
    document.getElementById("selectMain").innerHTML = '<option value="-1">Elige una opción</option>' +
        '<option value="0">' + "Hospital" + '</option>' +
        '<option value="1">' + "Personal" + '</option>' +
        '<option value="2">' + "Paciente" + '</option>';

    // Llenado de valores para el select "selectSpecialtyLabor"
    document.getElementById("selectSpecialtyLabor").innerHTML = '<option value="-1">Sin especialidad</option>' +
        '<option value="Médico">' + "Médico" + '</option>' +
        '<option value="Enfermera">' + "Enfermera" + '</option>' +
        '<option value="Celador">' + "Celador" + '</option>';

}

// Oculta todos los contenedores, reiniciando el diseño
function resetDesing() {
    disableButtons(true);
    showDivs(-1, 'none');
    removeDataForm(false);
}

// Muestra u oculta los contenedores correspondientes
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

// Desactiva los botones
function disableButtons(disable) {
    document.getElementById("btnInsertSec").disabled = disable;
    document.getElementById("btnModifySec").disabled = disable;
}

function pushConsultData(event) {
    event.preventDefault();

    valueSelectMain = parseInt(document.getElementById("selectMain").value);

    if (valueSelectMain !== -1) {
        showDivs(valueSelectMain, 'block');
        disableButtons(false);

        // Genera una tabla y vuelca los datos
        switch (valueSelectMain) {
            case 0:
                showHospitalData();
                break;
            case 1:
                showLaborData();
                break;
            case 2:
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
                break;
        }

    } else {
        resetDesing();
    }
}

function pushModifyData() {
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

function pushInsertData() {
    document.getElementById("hospitalTitle").innerHTML = "Insertar Hospital";
    document.getElementById("laborTitle").innerHTML = "Insertar Personal";
    document.getElementById("patientTitle").innerHTML = "Insertar Paciente";
    document.getElementById("modifyHospital").style.display = 'none';
    document.getElementById("modifyLabor").style.display = 'none';
    document.getElementById("modifyPatient").style.display = 'none';
}

function removeDataForm(design) {
    document.getElementById("formMain").reset();

    if (design)
        resetDesing();
}



