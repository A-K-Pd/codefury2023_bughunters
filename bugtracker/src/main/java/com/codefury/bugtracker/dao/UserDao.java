package com.codefury.bugtracker.dao;

import java.sql.SQLException;
import java.sql.Timestamp;

import com.codefury.bugtracker.models.User;

public interface UserDao extends DAO<User> {
	
	boolean exists(String userEmail, String userType);			//method to check if user exists in database
	boolean registeredUserExists(String userEmail);				//method to check if user is registered
	boolean updateRegistrationStatus(String userEmail);         //method to confirm user registration
	public Timestamp getLastLogin(String email) throws SQLException;  //method to get lastLogged in time and date

}
