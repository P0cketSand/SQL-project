document.addEventListener('DOMContentLoaded', () => {
    // In-memory dataset
    const data = {
        patients: [
            { PatientID: 1, FirstName: 'Achilles', LastName: 'Peleus', DOB: '1990-01-15', Gender: 'Male', Address: '12 Trojan Ave, Troy, Greece' },
            { PatientID: 2, FirstName: 'Athena', LastName: 'Metis', DOB: '1988-05-11', Gender: 'Female', Address: '56 Parthenon St, Athens, Greece' },
            { PatientID: 3, FirstName: 'Persephone', LastName: 'Demeter', DOB: '1992-03-21', Gender: 'Female', Address: '78 Elysian Blvd, Elusia, Greece' },
            { PatientID: 4, FirstName: 'Hermes', LastName: 'Zeus', DOB: '1991-07-27', Gender: 'Male', Address: '34 Olympus Rd, Mount Olympus, Greece' },
            { PatientID: 5, FirstName: 'Apollo', LastName: 'Leto', DOB: '1985-12-10', Gender: 'Male', Address: '45 Delphi St, Delphi, Greece' },
            { PatientID: 6, FirstName: 'Artemis', LastName: 'Leto', DOB: '1993-06-25', Gender: 'Female', Address: '67 Arcadia Ln, Arcadia, Greece' },
            { PatientID: 7, FirstName: 'Hercules', LastName: 'Zeus', DOB: '1987-09-12', Gender: 'Male', Address: '89 Nemea Dr, Nemea, Greece' },
            { PatientID: 8, FirstName: 'Andromeda', LastName: 'Cassiopeia', DOB: '1994-02-18', Gender: 'Female', Address: '22 Cepheus Rd, Aethiopia, Greece' },
            { PatientID: 9, FirstName: 'Medusa', LastName: 'Phorcys', DOB: '1990-10-05', Gender: 'Female', Address: '30 Gorgon Blvd, Argolis, Greece' },
            { PatientID: 10, FirstName: 'Theseus', LastName: 'Aegeus', DOB: '1989-11-23', Gender: 'Male', Address: '13 Minotaur St, Crete, Greece' },
            { PatientID: 11, FirstName: 'Hera', LastName: 'Cronus', DOB: '1986-08-15', Gender: 'Female', Address: '56 Olympus Rd, Mount Olympus, Greece' },
            { PatientID: 12, FirstName: 'Dionysus', LastName: 'Semele', DOB: '1992-04-30', Gender: 'Male', Address: '88 Bacchus Ave, Thebes, Greece' },
            { PatientID: 13, FirstName: 'Circe', LastName: 'Helios', DOB: '1991-01-02', Gender: 'Female', Address: '44 Aeaea Dr, Aea, Greece' },
            { PatientID: 14, FirstName: 'Ares', LastName: 'Hera', DOB: '1988-12-20', Gender: 'Male', Address: '19 Warfield St, Thrace, Greece' },
            { PatientID: 15, FirstName: 'Eros', LastName: 'Aphrodite', DOB: '1995-07-14', Gender: 'Male', Address: '23 Love Ln, Cyprus, Greece' }
        ],
        labResults: [
            { TestID: 1001, TestName: 'Complete Blood Count (CBC)', Result: 4.8, Units: 'x10^6/µL', ReferenceRange: '4.0-5.5', Status: 'Normal', TestDate: '2024-09-01', Notes: 'N/A' },
            { TestID: 1002, TestName: 'Basic Metabolic Panel', Result: 12.2, Units: 'mg/dL', ReferenceRange: '7.0-13.0', Status: 'Normal', TestDate: '2024-09-01', Notes: 'N/A' },
            { TestID: 1003, TestName: 'Lipid Panel', Result: 190, Units: 'mg/dL', ReferenceRange: '<200', Status: 'Normal', TestDate: '2024-09-01', Notes: 'Cholesterol level slightly elevated' },
            { TestID: 1004, TestName: 'Thyroid Stimulating Hormone (TSH)', Result: 1.8, Units: 'mIU/L', ReferenceRange: '0.4-4.0', Status: 'Normal', TestDate: '2024-09-02', Notes: 'N/A' },
            { TestID: 1005, TestName: 'Hemoglobin A1c', Result: 5.6, Units: '%', ReferenceRange: '4.0-5.6', Status: 'Normal', TestDate: '2024-09-02', Notes: 'Pre-diabetic threshold' },
            { TestID: 1006, TestName: 'Vitamin D', Result: 30.5, Units: 'ng/mL', ReferenceRange: '20-50', Status: 'Normal', TestDate: '2024-09-03', Notes: 'N/A' },
            { TestID: 1007, TestName: 'Iron Studies', Result: 55, Units: 'µg/dL', ReferenceRange: '50-170', Status: 'Normal', TestDate: '2024-09-03', Notes: 'N/A' },
            { TestID: 1008, TestName: 'Prostate-Specific Antigen (PSA)', Result: 1.2, Units: 'ng/mL', ReferenceRange: '<4.0', Status: 'Normal', TestDate: '2024-09-04', Notes: 'N/A' },
            { TestID: 1009, TestName: 'B-Type Natriuretic Peptide (BNP)', Result: 95, Units: 'pg/mL', ReferenceRange: '<100', Status: 'Normal', TestDate: '2024-09-04', Notes: 'N/A' },
            { TestID: 1010, TestName: 'C-Reactive Protein (CRP)', Result: 1.1, Units: 'mg/L', ReferenceRange: '0.0-10.0', Status: 'Normal', TestDate: '2024-09-05', Notes: 'N/A' },
            { TestID: 1011, TestName: 'Liver Function Test (LFT)', Result: 25, Units: 'U/L', ReferenceRange: '7-56', Status: 'Normal', TestDate: '2024-09-05', Notes: 'N/A' },
            { TestID: 1012, TestName: 'Calcium', Result: 9.4, Units: 'mg/dL', ReferenceRange: '8.5-10.5', Status: 'Normal', TestDate: '2024-09-06', Notes: 'N/A' },
            { TestID: 1013, TestName: 'Magnesium', Result: 2.1, Units: 'mg/dL', ReferenceRange: '1.8-2.6', Status: 'Normal', TestDate: '2024-09-06', Notes: 'N/A' },
            { TestID: 1014, TestName: 'Potassium', Result: 4.2, Units: 'mmol/L', ReferenceRange: '3.5-5.0', Status: 'Normal', TestDate: '2024-09-07', Notes: 'N/A' },
            { TestID: 1015, TestName: 'Sodium', Result: 141, Units: 'mmol/L', ReferenceRange: '135-145', Status: 'Normal', TestDate: '2024-09-07', Notes: 'N/A' }
        ]
    }
    

    const viewAllPatientsButton = document.getElementById('viewAllPatients');
    const filterPatientsButton  = document.getElementById('filterPatients');
    const viewAllTestsButton    = document.getElementById('viewAllTests');
    const deletePatientButton   = document.getElementById('deletePatient');


    const patientsList          = document.getElementById('patientsList');
    const filteredPatientsList  = document.getElementById('filteredPatientsList');
    const labResultsList        = document.getElementById('labResultsList') 
    const deletedPatientsList   = document.getElementById('deletedPatientsList');

    let isPatientsVisible   = false;
    let isTestsVisible      = false;

//my function to click buttons
    const renderData = (data, container) => {
        container.innerHTML = '';
        data.forEach(item => {
            const li = document.createElement('li');
            
            const keys   = Object.keys(item);
            const values = Object.values(item);
            let result = '';
            for (let i = 0; i < keys.length; i++) {
                result += keys[i] + ': ' + values[i] + ' ~ ';
            }
            
            li.textContent = result;
            const div = document.createElement('div');

            if (item.hasOwnProperty('Gender')) {
                div.classList.add(item.Gender === 'Female' ? 'pink-shadow' : 'blue-shadow');
            }

            div.appendChild(li);
            container.appendChild(div);
        });
    };

    // Toggle view all patients
    viewAllPatientsButton.addEventListener('click', () => {
        isPatientsVisible = !isPatientsVisible;
        if (isPatientsVisible) {
            renderData(data.patients, patientsList);
            patientsList.style.display = 'block';
            viewAllPatientsButton.textContent = 'I want to stop seeing these patients';
        } else {
            patientsList.innerHTML = ''; // Clear the list
            patientsList.style.display = 'none';
            viewAllPatientsButton.textContent = 'I want to see all patients';
        }
    });

    // toggle view all tests
    viewAllTestsButton.addEventListener('click', () => {
        isTestsVisible = !isTestsVisible;
        if (isTestsVisible) {
            renderData(data.labResults, labResultsList);
            labResultsList.style.display = 'block';
            viewAllTestsButton.textContent = 'I want to stop seeing these tests';
        } else {
            labResultsList.innerHTML = ''; // Clear the list
            labResultsList.style.display = 'none';
            viewAllTestsButton.textContent = 'I want to see all tests';
        }
    });


    // Filter patients by gender
    filterPatientsButton.addEventListener('click', () => {
        const gender = document.getElementById('filterGender').value;
        if (gender) {
            const filteredPatients = data.patients.filter(patient => patient.Gender === gender);
            renderData(filteredPatients, filteredPatientsList);
        } else {
            filteredPatientsList.innerHTML = 'Please select a gender.';
        }
    });

    // Delete patient by ID
    deletePatientButton.addEventListener('click', () => {
        const id = parseInt(document.getElementById('deleteId').value, 10);
        if (!isNaN(id)) {
            const index = data.patients.findIndex(patient => patient.PatientID === id);
            if (index !== -1) {
                const deletedPatient = data.patients.splice(index, 1)[0];
                const li = document.createElement('li');
                li.textContent = `Deleted - ID: ${deletedPatient.PatientID}, Name: ${deletedPatient.FirstName} ${deletedPatient.LastName}, DOB: ${deletedPatient.DOB}, Gender: ${deletedPatient.Gender}, Address: ${deletedPatient.Address}`;
                deletedPatientsList.appendChild(li);
                renderData(data.patients, patientsList);
                filteredPatientsList.innerHTML = ''; // Clear filtered list
            } else {
                deletedPatientsList.innerHTML = 'Patient not found.';
            }
        } else {
            deletedPatientsList.innerHTML = 'Please enter a valid ID.';
        }
    });
});
