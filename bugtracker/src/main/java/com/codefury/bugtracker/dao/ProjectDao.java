package com.codefury.bugtracker.dao;

import java.sql.SQLException;

import com.codefury.bugtracker.models.Project;

public interface ProjectDao<T> extends DAO<Project> {

	boolean update(int id) throws SQLException;
	
}


