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
        ]
    };

    const viewAllPatientsButton = document.getElementById('viewAllPatients');
    const filterPatientsButton = document.getElementById('filterPatients');
    const deletePatientButton = document.getElementById('deletePatient');

    const patientsList = document.getElementById('patientsList');
    const filteredPatientsList = document.getElementById('filteredPatientsList');
    const deletedPatientsList = document.getElementById('deletedPatientsList');

    // Function to render patient list
    const renderPatients = (patients, container) => {
        container.innerHTML = '';
        patients.forEach(patient => {
            const li = document.createElement('li');
            li.textContent = `ID: ${patient.PatientID}, Name: ${patient.FirstName} ${patient.LastName}, DOB: ${patient.DOB}, Gender: ${patient.Gender}, Address: ${patient.Address}`;
            container.appendChild(li);
        });
    };

    // View all patients
    viewAllPatientsButton.addEventListener('click', () => {
        renderPatients(data.patients, patientsList);
    });

    // Filter patients by gender
    filterPatientsButton.addEventListener('click', () => {
        const gender = document.getElementById('filterGender').value;
        if (gender) {
            const filteredPatients = data.patients.filter(patient => patient.Gender === gender);
            renderPatients(filteredPatients, filteredPatientsList);
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
                renderPatients(data.patients, patientsList);
                filteredPatientsList.innerHTML = ''; // Clear filtered list
            } else {
                deletedPatientsList.innerHTML = 'Patient not found.';
            }
        } else {
            deletedPatientsList.innerHTML = 'Please enter a valid ID.';
        }
    });
});
