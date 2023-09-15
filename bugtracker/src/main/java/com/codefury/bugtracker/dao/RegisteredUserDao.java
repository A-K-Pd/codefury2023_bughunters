package com.codefury.bugtracker.dao;

import com.codefury.bugtracker.models.RegisteredUser;

public interface RegisteredUserDao extends DAO<RegisteredUser> {
	
	String getHashPassword(String password);			//generate secure hashcode for password
}


