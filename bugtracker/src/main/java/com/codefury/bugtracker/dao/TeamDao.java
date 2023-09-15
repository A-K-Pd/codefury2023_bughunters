package com.codefury.bugtracker.dao;

import java.util.List;

public interface TeamDao {
	
	List<Integer> findProjectsForUser(int id);
	

}


