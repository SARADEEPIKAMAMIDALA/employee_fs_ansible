//package com.klu.repository;
//
//import com.klu.entity.AttendanceRecord;
//import org.springframework.data.jpa.repository.JpaRepository;
//import java.util.List;
//
//public interface AttendanceRecordRepository extends JpaRepository<AttendanceRecord, Long> {
//    List<AttendanceRecord> findByEmployeeId(String employeeId);
//}
package com.klu.repository;

import com.klu.entity.AttendanceRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface AttendanceRecordRepository extends JpaRepository<AttendanceRecord, Long> {

    List<AttendanceRecord> findByEmployeeIdOrderByDateDesc(String employeeId);

    AttendanceRecord findByEmployeeIdAndDate(String employeeId, LocalDate date);
}
