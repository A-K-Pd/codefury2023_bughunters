package com.codefury.bugtracker.dao;

import java.util.Collection;

import com.codefury.bugtracker.models.Bug;

public interface BugDao<T> extends DAO<Bug> {
	
	Collection<Bug> sortedByDate(); 	//Sort By StartDate using StartDateComparator


}
