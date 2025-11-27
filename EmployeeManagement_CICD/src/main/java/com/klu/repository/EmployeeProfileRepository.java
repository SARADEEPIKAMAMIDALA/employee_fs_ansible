//package com.klu.repository;
//
//import com.klu.entity.EmployeeProfile;
//import org.springframework.data.jpa.repository.JpaRepository;
//import java.util.Optional;

//
//public interface EmployeeProfileRepository extends JpaRepository<EmployeeProfile, Long> {
//    Optional<EmployeeProfile> findByEmail(String email);
//}
package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klu.entity.EmployeeProfile;

public interface EmployeeProfileRepository extends JpaRepository<EmployeeProfile, Long> {
    EmployeeProfile findByEmployeeId(String employeeId);
}


