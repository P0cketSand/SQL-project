CREATE TABLE Patients (
    PatientID INT PRIMARY KEY,
    FirstName Varchar(50),
    LastName Varchar(50),
    DOB DATE,
    Gender Varchar(10),
    Address Varchar(255)
);

INSERT INTO Patients (PatientID, FirstName, LastName, DOB, Gender, Address)
Values
(1, 'Achilles', 'Peleus', '1990-01-15', 'Male', '12 Trojan Ave, Troy, Greece'),
(2, 'Athena', 'Metis', '1988-05-11', 'Female', '56 Parthenon St, Athens, Greece'),
(3, 'Persephone', 'Demeter', '1992-03-21', 'Female', '78 Elysian Blvd, Elusia, Greece'),
(4, 'Hermes', 'Zeus', '1991-07-27', 'Male', '34 Olympus Rd, Mount Olympus, Greece'),
(5, 'Apollo', 'Leto', '1985-12-10', 'Male', '45 Delphi St, Delphi, Greece'),
(6, 'Artemis', 'Leto', '1993-06-25', 'Female', '67 Arcadia Ln, Arcadia, Greece'),
(7, 'Hercules', 'Zeus', '1987-09-12', 'Male', '89 Nemea Dr, Nemea, Greece'),
(8, 'Andromeda', 'Cassiopeia', '1994-02-18', 'Female', '22 Cepheus Rd, Aethiopia, Greece'),
(9, 'Medusa', 'Phorcys', '1990-10-05', 'Female', '30 Gorgon Blvd, Argolis, Greece'),
(10, 'Theseus', 'Aegeus', '1989-11-23', 'Male', '13 Minotaur St, Crete, Greece'),
(11, 'Hera', 'Cronus', '1986-08-15', 'Female', '56 Olympus Rd, Mount Olympus, Greece'),
(12, 'Dionysus', 'Semele', '1992-04-30', 'Male', '88 Bacchus Ave, Thebes, Greece'),
(13, 'Circe', 'Helios', '1991-01-02', 'Female', '44 Aeaea Dr, Aea, Greece'),
(14, 'Ares', 'Hera', '1988-12-20', 'Male', '19 Warfield St, Thrace, Greece'),
(15, 'Eros', 'Aphrodite', '1995-07-14', 'Male', '23 Love Ln, Cyprus, Greece');