USE attendance_mgt_tool;

INSERT INTO employee value ( "Pradeep", "pradeep@gmail.com", "Pradeep#1111", "Senior Technical Lead", "Permanent", "0123238938");
INSERT INTO employee value ("Ganeesha", "ganeesha@gmail.com", "Ganeesha#2222", "Senior Procurement Analyst", "Permanent", "0798996754");
INSERT INTO employee value ( "Rajitha", "rajitha@gmail.com", "Rajitha#3333", "Associate Product Manager", "Permanent", "0709882345");
INSERT INTO employee value ("Nivetha", "nivetha@gmail.com", "Nivetha#4444", "Software Engineer", "Permanent", "0769085178");
INSERT INTO employee value ( "Pulini", "pulini@gmail.com", "Pulini#5555", "Trainee Software Engineer", "Trainee", "0705334841");
INSERT INTO employee value ( "Movindi", "movindi@gmail.com", "Movindi#6666", "Trainee Research Engineer", "Trainee", "0779330471");
INSERT INTO employee value ( "Zihan", "zihan@gmail.com", "zihan#7777", "Trainee Software Engineer", "Trainee", "0985004543");

INSERT INTO attendance value(41, 5,"Pulini","08:20", 2023, "January", 30, "Full Day",true);
INSERT INTO attendance value(42,1,"Pradeep","08:23", 2023, "January",30, "Full Day",true);
INSERT INTO attendance value(43,6,"Rajitha", "08:30", 2023, "January", 30, "Full Day",true);
INSERT INTO attendance value(44,3,"Movindi","08:45", 2023, "January", 30, "Half Day",true);
INSERT INTO attendance value(45,4,"Nivetha","09:15", 2023, "January", 30, "Full Day",true);
INSERT INTO attendance value(46,5,"Pulini","08:20", 2023, "January", 31, "Full Day",true);

INSERT INTO holiday value ( "Duruthu Full Moon Poya Day", "2023.01.06");
INSERT INTO holiday value ( "Lieu of Sri Lankan Independance Day on 4th Feb", "2023.02.03");
INSERT INTO holiday value ( "Medin Full Moon Poya Day", "2023.03.06");
INSERT INTO holiday value ( "Bak Full Moon Poya Day", "2023.04.05");
INSERT INTO holiday value ( "Day Prior to Sinhala & Tamil New Year", "2023.04.13");
INSERT INTO holiday value ( "Sinhala & Tamil New Year Day", "2023.04.14");
INSERT INTO holiday value ( "Vesak Full Moon Poya Day", "2023.05.05");
INSERT INTO holiday value ( "Poson Full Moon Poya Day", "2023.07.03");

-- employee
SELECT * 
FROM employee;

SELECT empId, name, email, designation, type, phoneNumber
FROM employee
WHERE empId = 1;

UPDATE employee
SET password = "Pulini#9858"
WHERE empId = 5;
 
UPDATE employee
SET designation = "Product Manager"
WHERE empId = 3;

UPDATE employee
SET phoneNumber = "0713110170"
WHERE empId = 6;

UPDATE employee
SET type = "Permanent"
WHERE empId = 3;

DELETE 
FROM employee
WHERE empId = 7;

-- attendance
SELECT * 
FROM attendance;

DELETE 
FROM attendance
WHERE attId = 1 ;

UPDATE attendance
SET inTime = "09:00"
WHERE attId = 1;

UPDATE attendance 
SET attType = "Half Day"
WHERE attId = 1;

-- holiday
SELECT *
FROM holiday;

UPDATE holiday
SET name = "Esala Full Moon Poya Day"
WHERE holidayId = 8;

DELETE 
FROM holiday
WHERE holidayId = 1;

DELETE 
FROM holiday
WHERE holidayId = 1;

-- Join employee table and attendance table
SELECT employee.empId, name, email, designation, type, phoneNumber, year, month, day, inTime, attType, attend
FROM employee
JOIN attendance ON employee.empId = attendance.empId;

-- Get Summary attendance for a month
SELECT empId, empName, 
       COUNT(CASE WHEN attend = true THEN 1 END) AS TotalAttendDays
FROM attendance
WHERE year = 2023 AND month = "January"
GROUP BY empId;

-- Get Total employees
SELECT COUNT(*) as TotalEmployees
FROM employee;

-- Get total attendance for the relevant day 
SELECT COUNT(CASE WHEN attend = true THEN 1 END) AS EmployeeAttendance
FROM attendance
WHERE year = 2023 AND month = "January" AND day = 30;

-- Get the date is working day or holiday

