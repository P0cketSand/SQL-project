CREATE TABLE LabResults (
    ResultID INT PRIMARY KEY,
    OrderID INT,
    TestName Varchar(100)
    ResultValue Varchar(100),
    Unit Varchar(20),
    ReferenceRange Varchar(50),
    ResultStatus Varchar(50),
    ResultDate DATE,
    Notes TEXT,
    Foreign Key (OrderID)
    REFERENCES LabOrders(OrderID)
);

INSERT INTO LabResults (OrderID, TestName, ResultValue, Unit, ReferenceRange, ResultStatus, ResultDate, Notes)
Values
(1001, 'Complete Blood Count (CBC)', 4.8, 'x10^6/µL', '4.0-5.5', 'Normal', '2024-09-01', 'N/A'),
(1002, 'Basic Metabolic Panel', 12.2, 'mg/dL', '7.0-13.0', 'Normal', '2024-09-01', 'N/A'),
(1003, 'Lipid Panel', 190, 'mg/dL', '<200', 'Normal', '2024-09-01', 'Cholesterol level slightly elevated'),
(1004, 'Thyroid Stimulating Hormone (TSH)', 1.8, 'mIU/L', '0.4-4.0', 'Normal', '2024-09-02', 'N/A'),
(1005, 'Hemoglobin A1c', 5.6, '%', '4.0-5.6', 'Normal', '2024-09-02', 'Pre-diabetic threshold'),
(1006, 'Vitamin D', 30.5, 'ng/mL', '20-50', 'Normal', '2024-09-03', 'N/A'),
(1007, 'Iron Studies', 55, 'µg/dL', '50-170', 'Normal', '2024-09-03', 'N/A'),
(1008, 'Prostate-Specific Antigen (PSA)', 1.2, 'ng/mL', '<4.0', 'Normal', '2024-09-04', 'N/A'),
(1009, 'B-Type Natriuretic Peptide (BNP)', 95, 'pg/mL', '<100', 'Normal', '2024-09-04', 'N/A'),
(1010, 'C-Reactive Protein (CRP)', 1.1, 'mg/L', '0.0-10.0', 'Normal', '2024-09-05', 'N/A'),
(1011, 'Liver Function Test (LFT)', 25, 'U/L', '7-56', 'Normal', '2024-09-05', 'N/A'),
(1012, 'Calcium', 9.4, 'mg/dL', '8.5-10.5', 'Normal', '2024-09-06', 'N/A'),
(1013, 'Magnesium', 2.1, 'mg/dL', '1.8-2.6', 'Normal', '2024-09-06', 'N/A'),
(1014, 'Potassium', 4.2, 'mmol/L', '3.5-5.0', 'Normal', '2024-09-07', 'N/A'),
(1015, 'Sodium', 141, 'mmol/L', '135-145', 'Normal', '2024-09-07', 'N/A');