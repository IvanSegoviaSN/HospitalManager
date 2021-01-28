const hospitalList = [new Hospital("Puerta de Hierro", "Majadahonda", "Luis Aragonés")];
const laborList = [new Labor("Irene Sanchez", "Médico")];
const patientList = [new Patient("Jesus García", "Puerta de Hierro", "Irene Sanchez")];

let valueSelectMain;

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

function modifyHospitalItems() {
    let itemHospital = document.getElementById("modifyHospitalItem").value;

    function checkItem(item) {
        return item.name === itemHospital;
    }
    itemHospital = hospitalList.find(checkItem);

    document.getElementById("inputNameHospital").value = itemHospital.name;
    document.getElementById("inputLocHospital").value = itemHospital.location;
    document.getElementById("inputResHospital").value = itemHospital.attendant;

    hospitalList.splice(hospitalList.indexOf(itemHospital), 1);
}

function modifyLaborItems() {
    let itemLabor = document.getElementById("modifyLaborItem").value;

    function checkItem(item) {
        return item.name === itemLabor;
    }
    itemLabor = laborList.find(checkItem);

    document.getElementById("inputNameLabor").value = itemLabor.name;
    document.getElementById("selectSpecialtyLabor").value = itemLabor.specialty;

    laborList.splice(laborList.indexOf(itemLabor), 1);
}

function modifyPatientItems() {
    let itemPatient = document.getElementById("modifyPatientItem").value;
    let itemSwapPatient;

    for (let i = 0; i < patientList.length; i++) {
        if (patientList[0] === itemPatient) {
            itemSwapPatient = patientList[0];
        }
    }

    document.getElementById("inputNamePatient").value = itemSwapPatient.name;
    document.getElementById("selectHospitalPatient").value = itemSwapPatient.hospital;
    document.getElementById("selectLaborPatient").value = itemSwapPatient.labor;

}


function removeItem() {
    
}