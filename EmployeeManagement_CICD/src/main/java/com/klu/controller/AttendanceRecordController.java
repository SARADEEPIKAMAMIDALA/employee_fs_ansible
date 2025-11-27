//package com.klu.controller;
//
//import com.klu.entity.AttendanceRecord;
//import com.klu.service.AttendanceRecordService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/attendance")
//@CrossOrigin("*")
//public class AttendanceRecordController {
//
//    @Autowired
//    private AttendanceRecordService service;
//
//    // Add or update attendance
//    @PostMapping("/add")
//    public AttendanceRecord addAttendance(@RequestBody AttendanceRecord record) {
//        return service.saveAttendance(record);
//    }
//
//    // Get all attendance for employee
//    @GetMapping("/{employeeId}")
//    public List<AttendanceRecord> getAttendance(@PathVariable String employeeId) {
//        return service.getAttendanceForEmployee(employeeId);
//    }
//}

package com.klu.controller;

import com.klu.entity.AttendanceRecord;
import com.klu.service.AttendanceRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin("*")
public class AttendanceRecordController {

    @Autowired
    private AttendanceRecordService service;

    // POST /api/attendance/add
    @PostMapping("/add")
    public AttendanceRecord markAttendance(@RequestBody Map<String, String> req) {

        String employeeId = req.get("employeeId");
        String checkInStr = req.get("checkIn");
        String checkOutStr = req.get("checkOut");

        LocalTime checkIn = (checkInStr != null) ? LocalTime.parse(checkInStr) : null;
        LocalTime checkOut = (checkOutStr != null) ? LocalTime.parse(checkOutStr) : null;

        return service.markAttendance(employeeId, checkIn, checkOut);
    }

    // GET /api/attendance/EMP01
    @GetMapping("/{employeeId}")
    public List<AttendanceRecord> getAttendance(@PathVariable String employeeId) {
        return service.getAttendanceForEmployee(employeeId);
    }
}

