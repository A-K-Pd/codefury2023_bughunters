package com.codefury.bugtracker.views;

import java.sql.Date;
import java.sql.SQLException;
import java.util.List;

import com.codefury.bugtracker.dao.BugDaoImpl;
import com.codefury.bugtracker.models.Bug;

public class App {
	
	public static void main(String[] args) {
		Date startDate;
		Date openDate= new Date(2020-12-15);
		
		
		Bug bug= new Bug(111,"There is a bug","Check for bug","high",102);
		
		BugDaoImpl dao= new BugDaoImpl();
		
		try {
			dao.add(bug);
			//dao.add(bug1);
			
			dao.update(900);
			
			List<Bug> bugList=dao.findList(102);
			
			bugList.forEach(Bug :: System.out.println); 
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}


