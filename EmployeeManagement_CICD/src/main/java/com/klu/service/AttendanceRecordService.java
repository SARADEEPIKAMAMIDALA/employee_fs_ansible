//package com.klu.service;
//
//import com.klu.entity.AttendanceRecord;
//import com.klu.repository.AttendanceRecordRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.Duration;
//import java.time.LocalTime;
//import java.util.List;
//
//@Service
//public class AttendanceRecordService {
//
//    @Autowired
//    private AttendanceRecordRepository repo;
//
//    // Save attendance (auto calculate Late, Present & Hours)
//    public AttendanceRecord saveAttendance(AttendanceRecord record) {
//
//        // Late check logic
//        LocalTime officeStart = LocalTime.of(9, 0);
//        if (record.getCheckIn().isAfter(officeStart)) {
//            record.setStatus("Late");
//        } else {
//            record.setStatus("Present");
//        }
//
//        // Calculate total hours
//        if (record.getCheckOut() != null) {
//            Duration duration = Duration.between(record.getCheckIn(), record.getCheckOut());
//            double hours = duration.toMinutes() / 60.0;
//            record.setHours(hours);
//        } else {
//            record.setHours(0);
//        }
//
//        return repo.save(record);
//    }
//
//    // Get attendance list for an employee
//    public List<AttendanceRecord> getAttendanceForEmployee(String employeeId) {
//        return repo.findByEmployeeId(employeeId);
//    }
//}

//package com.klu.service;
//import java.util.List;
//
//import com.klu.entity.AttendanceRecord;
//import com.klu.repository.AttendanceRecordRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.*;
//
//
//
//@Service
//public class AttendanceRecordService {
//
//    @Autowired
//    private AttendanceRecordRepository repo;
//
//    // Add or update attendance
//    public AttendanceRecord markAttendance(String employeeId, LocalTime checkIn, LocalTime checkOut) {
//
//        LocalDate today = LocalDate.now();
//        AttendanceRecord record = repo.findByEmployeeIdAndDate(employeeId, today);
//
//        // If no record exists => NEW check-in
//        if (record == null) {
//            record = new AttendanceRecord();
//            record.setEmployeeId(employeeId);
//            record.setDate(today);
//            record.setCheckIn(checkIn);
//
//            // Determine Present or Late
//            LocalTime officeStart = LocalTime.of(9, 0);
//            if (checkIn.isAfter(officeStart)) {
//                record.setStatus("Late");
//            } else {
//                record.setStatus("Present");
//            }
//
//            record.setHours(0);
//            return repo.save(record);
//        }
//
//        // If record exists => this is CHECK-OUT update
//        if (checkOut != null) {
//            record.setCheckOut(checkOut);
//
//            Duration duration = Duration.between(record.getCheckIn(), checkOut);
//            double hoursWorked = duration.toMinutes() / 60.0;
//            record.setHours(hoursWorked);
//        }
//
//        return repo.save(record);
//    }
//
//    // Get attendance list for employee
//    public List<AttendanceRecord> getAttendanceForEmployee(String employeeId) {
//        return repo.findByEmployeeIdOrderByDateDesc(employeeId);
//    }
//}
package com.klu.service;

import com.klu.entity.AttendanceRecord;
import com.klu.repository.AttendanceRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List; 
import java.time.*;

@Service
public class AttendanceRecordService {

    @Autowired
    private AttendanceRecordRepository repo;

    // Add or update attendance
    public AttendanceRecord markAttendance(String employeeId, LocalTime checkIn, LocalTime checkOut) {

        LocalDate today = LocalDate.now();
        AttendanceRecord record = repo.findByEmployeeIdAndDate(employeeId, today);

        // If no record exists => NEW check-in
        if (record == null) {
            record = new AttendanceRecord();
            record.setEmployeeId(employeeId);
            record.setDate(today);
            record.setCheckIn(checkIn);

            // Determine Present or Late
            LocalTime officeStart = LocalTime.of(9, 0);
            if (checkIn.isAfter(officeStart)) {
                record.setStatus("Late");
            } else {
                record.setStatus("Present");
            }

            record.setHours(0);
            return repo.save(record);
        }

        // If record exists => this is CHECK-OUT update
        if (checkOut != null) {
            record.setCheckOut(checkOut);

            Duration duration = Duration.between(record.getCheckIn(), checkOut);
            double hoursWorked = duration.toMinutes() / 60.0;
            record.setHours(hoursWorked);
        }

        return repo.save(record);
    }

    // Get attendance list for employee
    public List<AttendanceRecord> getAttendanceForEmployee(String employeeId) {
        return repo.findByEmployeeIdOrderByDateDesc(employeeId);
    }
}
