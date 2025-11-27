//package com.klu.controller;
//
//import com.klu.entity.EmployeeProfile;
//import com.klu.service.EmployeeProfileService;
//import org.springframework.web.bind.annotation.*;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/profiles")
//@CrossOrigin(origins = "http://localhost:5173")
//public class EmployeeProfileController {
//
//    private final EmployeeProfileService service;
//
//    public EmployeeProfileController(EmployeeProfileService service) {
//        this.service = service;
//    }
//
//    @GetMapping
//    public List<EmployeeProfile> getAllProfiles() {
//        return service.getAllProfiles();
//    }
//
//    @GetMapping("/{email}")
//    public EmployeeProfile getProfile(@PathVariable String email) {
//        return service.getProfileByEmail(email);
//    }
//
//    @PutMapping("/{email}")
//    public EmployeeProfile updateProfile(@PathVariable String email, @RequestBody EmployeeProfile updatedProfile) {
//        return service.updateProfile(email, updatedProfile);
//    }
//
//    @PostMapping
//    public EmployeeProfile createProfile(@RequestBody EmployeeProfile profile) {
//        return service.saveProfile(profile);
//    }
//}
package com.klu.controller;

import com.klu.entity.EmployeeProfile;
import com.klu.service.EmployeeProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin("*")
public class EmployeeProfileController {

    @Autowired
    private EmployeeProfileService service;

    // GET existing profile
    @GetMapping("/{employeeId}")
    public EmployeeProfile getProfile(@PathVariable String employeeId) {
        return service.getByEmployeeId(employeeId);
    }

    // UPDATE profile (phone or location etc.)
    @PutMapping("/update")
    public EmployeeProfile updateProfile(@RequestBody EmployeeProfile profile) {
        return service.update(profile);
    }
}
