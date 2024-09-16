CREATE TABLE LabOrders (
    OrderID INT PRIMARY KEY,
    PatientID INT,
    TestType Varchar(100),
    OrderDate DATE,
    OrderStatus Varchar(50),
    Notes TEXT,
    Foreign Key (PatientID)
    REFERENCES Patients(PatientID)
);

INSERT INTO LabOrders (PatientID, TestType, OrderDate, OrderStatus, Notes)
Values
(1, 'Complete Blood Count (CBC)', '2024-09-01', 'Completed', 'Normal levels of all blood components.'),
(2, 'Lipid Panel', '2024-09-02', 'Pending', 'Awaiting cholesterol and triglyceride results.'),
(3, 'Hemoglobin A1c', '2024-09-03', 'Completed', 'Patient’s blood sugar levels are well-controlled.'),
(4, 'Basic Metabolic Panel (BMP)', '2024-09-04', 'In Progress', 'Testing electrolytes and kidney function.'),
(5, 'Thyroid Function Test', '2024-09-05', 'Completed', 'Normal thyroid hormone levels detected.'),
(6, 'Liver Function Test', '2024-09-06', 'Completed', 'Liver enzymes within normal range.'),
(7, 'Vitamin D Test', '2024-09-07', 'Failed', 'Test inconclusive due to sample issues.'),
(8, 'B12 and Folate Levels', '2024-09-08', 'Pending', 'Awaiting results for vitamin B12 and folate deficiencies.'),
(9, 'Prostate-Specific Antigen (PSA)', '2024-09-09', 'Completed', 'PSA levels within normal range.'),
(10, 'Pregnancy Test', '2024-09-10', 'Completed', 'Test indicates negative result.'),
(11, 'HIV Test', '2024-09-11', 'In Progress', 'Awaiting results for HIV antibodies.'),
(12, 'Influenza Test', '2024-09-12', 'Completed', 'Patient tested negative for influenza.'),
(13, 'Chest X-Ray', '2024-09-13', 'Pending', 'Awaiting radiology report for chest imaging.'),
(14, 'Urinalysis', '2024-09-14', 'Completed', 'Normal findings in urine analysis.'),
(15, 'Calcium Levels Test', '2024-09-15', 'Failed', 'Test could not be processed due to sample degradation.');