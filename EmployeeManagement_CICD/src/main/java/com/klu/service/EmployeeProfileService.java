package com.klu.service;

import com.klu.entity.EmployeeProfile;
import com.klu.repository.EmployeeProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeProfileService {

    @Autowired
    private EmployeeProfileRepository repo;

    public EmployeeProfile getByEmployeeId(String employeeId) {
        return repo.findByEmployeeId(employeeId);
    }

    public EmployeeProfile update(EmployeeProfile profile) {
        return repo.save(profile);
    }
}
