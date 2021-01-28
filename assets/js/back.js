const hospitalList = [new Hospital("Puerta de Hierro", "Majadahonda", "Luis"),
                                     new Hospital("Santa Teresa", "Ávila", "Pedro")];

const laborList        = [new Labor("Irene Sanchez", "Médico"),
                                      new Labor("Sonia Carmona", "Celador")];

const patientList    = [new Patient("Jesus García", "Puerta de Hierro", "Irene Sanchez"),
                                      new Patient("Angel Nieto", "Santa Teresa", "Sonia Carmona")];

let valueSelectMain;

// Inserta los nuevos valores en los arrays correspondientes
function insertItems() {
    switch (parseInt(document.getElementById("selectMain").value)) {
        case 0:
            let listHospital = [document.getElementById("inputNameHospital").value,
                document.getElementById("inputLocHospital").value,
                document.getElementById("inputResHospital").value];

            // Se guarda en un array por si en algun momento hay que comprobar los datos entrantes
            hospitalList.push(new Hospital(listHospital[0], listHospital[1], listHospital[2]));

            // Muestra el bloque de informacion
            showHospitalData();

            // Reinicia el formulario
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

// Volcado de informacion al bloque de insertar, para su correspondiente modificacion
function modifyHospitalItems() {
    let itemHospital = document.getElementById("modifyHospitalItem").value;

    // Funcion para buscar el objeto deseado
    function checkItem(item) {
        return item.name === itemHospital;
    }
    itemHospital = hospitalList.find(checkItem);

    // Vuelco los datos en el bloque de insertar
    document.getElementById("inputNameHospital").value = itemHospital.name;
    document.getElementById("inputLocHospital").value = itemHospital.location;
    document.getElementById("inputResHospital").value = itemHospital.attendant;

    // Elimina el item antiguo
    hospitalList.splice(hospitalList.indexOf(itemHospital), 1);
}

// Volcado de informacion al bloque de insertar, para su correspondiente modificacion
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

// Volcado de informacion al bloque de insertar, para su correspondiente modificacion
function modifyPatientItems() {
    let itemPatient = document.getElementById("modifyPatientItem").value;

    function checkItem(item) {
        return item.name === itemPatient;
    }
    itemPatient = patientList.find(checkItem);

    document.getElementById("inputNamePatient").value = itemPatient.name;
    document.getElementById("selectHospitalPatient").value = itemPatient.hospital;
    document.getElementById("selectLaborPatient").value = itemPatient.labor;

    patientList.splice(patientList.indexOf(itemPatient), 1);
}

// Genera una tabla con los resultados del array
function showHospitalData() {
    // Crea una tabla
    let code = '<h1>Lista Hospitales</h1><table class="table"><thead>' +
        '<th scope="col">Nombre</th>' +
        '<th scope="col">Localidad</th>' +
        '<th scope="col">Responsable</th>' +
        '<th scope="col"></th></thead><tbody>';

    for (let i = 0; i < hospitalList.length; i++) {
        code += '<tr><th scope="row">' +
            hospitalList[i].name + '</th><td>' +
            hospitalList[i].location + '</td><td>' +
            hospitalList[i].attendant + '</td><td>' +
            '<button type="button" onclick="removeHospitalItem(' + i + ')" class="btn btn-danger" style="padding: revert;">' +
            '<i class="fas fa-trash-alt"></i></button>' + '</td></tr>';
    }

    code += '</tbody></table>';

    // Inserta el codigo en el DOM
    for (let i = 0; i < hospitalList.length; i++) {
        document.getElementById("outputHospital").innerHTML = code;
    }
}

// Genera una tabla con los resultados del array
function showLaborData() {
    // Crea una tabla
    let code = '<h1>Lista Personal</h1><table class="table"><thead>' +
        '<th scope="col">Nombre</th>' +
        '<th scope="col">Especialidad</th></thead><tbody>';

    for (let i = 0; i < laborList.length; i++) {
        code += '<tr><th scope="row">' +
            laborList[i].name + '</th><td>' +
            laborList[i].specialty + '</td><td>' +
            '<button type="button" onclick="removeLaborItem(' + i + ')" class="btn btn-danger" style="padding: revert;">' +
            '<i class="fas fa-trash-alt"></i></button>' + '</td></tr>';
    }

    code += '</tbody></table>';

    // Inserta el codigo en el DOM
    for (let i = 0; i < laborList.length; i++) {
        document.getElementById("outputLabor").innerHTML = code;
    }
}

// Genera una tabla con los resultados del array
function showPatientData() {
    // Crea una tabla
    let code = '<h1>Lista Pacientes</h1><table class="table"><thead>' +
        '<th scope="col">Nombre</th>' +
        '<th scope="col">Hospital</th>' +
        '<th scope="col">Personal</th></thead><tbody>';

    for (let i = 0; i < patientList.length; i++) {
        code += '<tr><th scope="row">' +
            patientList[i].name + '</th><td>' +
            patientList[i].hospital + '</td><td>' +
            patientList[i].labor + '</td><td>' +
            '<button type="button" onclick="removePatientItem(' + i + ')" class="btn btn-danger" style="padding: revert;">' +
            '<i class="fas fa-trash-alt"></i></button>' + '</td></tr>';
    }

    code += '</tbody></table>';

    // Inserta el codigo en el DOM
    for (let i = 0; i < patientList.length; i++) {
        document.getElementById("outputPatient").innerHTML = code;
    }
}

// Elimina un elemento del array en funcion del indice
function removeHospitalItem(indexToRemove) {
    hospitalList.splice(indexToRemove, 1);
    showHospitalData();
}

// Elimina un elemento del array en funcion del indice
function removeLaborItem(indexToRemove) {
    laborList.splice(indexToRemove, 1);
    showLaborData();
}

// Elimina un elemento del array en funcion del indice
function removePatientItem(indexToRemove) {
    patientList.splice(indexToRemove, 1);
    showPatientData();
}
