// Sample initial project and bug data
const projects = [
    {
        id: 1,
        name: "SmartHomeHub",
        startDate: "2023-09-01",
        projectManager: "Joe Rogan",
        teamMembers: [
            { name: "Andrew Garfield", role: "Developer" },
            { name: "Tom Hanks", role: "Developer" },
        ],
        bugs: [
            { id: 1, title: "Buffer Overflow", status: "Open", assignedTo: "" },
            { id: 2, title: "Memory Leak", status: "Open", assignedTo: "" },
        ],
    },
    
];

// Function to display project details
function displayProjectDetails(projectIndex) {
    const projectDetails = document.getElementById("project-details");
    const project = projects[projectIndex];

    // Display project details
    projectDetails.innerHTML = `
        <h2>Project Details</h2>
        <p>Project Name: ${project.name}</p>
        <p>Start Date: ${project.startDate}</p>
        <p>Project Manager: ${project.projectManager}</p>
        <h3>Team Members</h3>
        <ul>
            ${project.teamMembers.map((member) => `<li>${member.name} (${member.role})</li>`).join("")}
        </ul>
    `;

    // Display bug details
    const bugDetails = document.getElementById("bug-details");
    bugDetails.innerHTML = `
        <h2>Active Bugs</h2>
        <table class="bugs-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Assigned To</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${project.bugs.map((bug) => `
                    <tr>
                        <td>${bug.id}</td>
                        <td>${bug.title}</td>
                        <td>${bug.status}</td>
                        <td>${bug.assignedTo || "Unassigned"}</td>
                        <td>
                            <button onclick="assignBug(${projectIndex}, ${bug.id})">Assign</button>
                            <button onclick="closeBug(${projectIndex}, ${bug.id})">Close</button>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

// Function to assign a bug to a developer
function assignBug(projectIndex, bugId) {
    const developerName = prompt("Enter developer name:");

    if (developerName) {
        const project = projects[projectIndex];
        const bug = project.bugs.find((b) => b.id === bugId);

        if (bug && project.teamMembers.some((member) => member.name === developerName && member.role === "Developer")) {
            bug.assignedTo = developerName;
            displayProjectDetails(projectIndex);
        } else {
            alert("Invalid developer name or role.");
        }
    }
}

// Function to close a bug
function closeBug(projectIndex, bugId) {
    const project = projects[projectIndex];
    const bug = project.bugs.find((b) => b.id === bugId);

    if (bug && bug.status === "Open"||bug.status==="In Progress") {
        bug.status = "Closed";
        displayProjectDetails(projectIndex);
    }
}

// Function to create a new project
function createNewProject() {
    const projectName = prompt("Enter project name:");
    const startDateInput = prompt("Enter start date (YYYY-MM-DD):");
    const description = prompt("Enter project description:");

    // Validate and parse the start date
    const startDate = new Date(startDateInput);
    const currentDate = new Date();

    // Check if the entered start date is valid and at least 2 days later than the current date
    if (!isNaN(startDate.getTime()) && startDate > currentDate) {
        // Check project manager's project count
        const projectManager = "John Doe"; // Replace with actual project manager name
        const projectsManaged = projects.filter((project) => project.projectManager === projectManager);

        if (projectsManaged.length >= 4) {
            alert("Project manager can manage a maximum of 4 projects.");
            return;
        }

        // Generate a unique project ID (you can use a more sophisticated method)
        const projectId = projects.length + 1;

        // Create the new project object
        const newProject = {
            id: projectId,
            name: projectName,
            startDate: startDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
            description: description,
            projectManager: projectManager,
            teamMembers: [ { name: "Developer 1", role: "Developer" },
            { name: "Developer 2", role: "Developer" },],
            bugs: [ { id: 1, title: "Buffer Overflow",status: "In Progress", assignedTo: "" },
            { id: 2, title: "Memory Leak",status: "In Progress", assignedTo: "" },],
        };

        // Add the new project to the projects array
        projects.push(newProject);

        // Display updated project list
        displayProjects();
    } else {
        alert("Invalid start date. Start date should be at least 2 days later than the current date.");
    }
}

// Attach an event listener to the "Create New Project" link
document.addEventListener("DOMContentLoaded",()=>{
const createProjectLink = document.getElementById("create-project");
createProjectLink.addEventListener("click", createNewProject);
});
// Function to display projects
function displayProjects() {
    const projectsList = document.getElementById("projects");

    // Clear existing list
    projectsList.innerHTML = "";

    // Add projects dynamically
    projects.forEach((project, index) => {
        const projectItem = document.createElement("li");
        const projectLink = document.createElement("a");

        projectLink.href = "#";
        projectLink.textContent = project.name;

        // Add an event listener to handle project click
        projectLink.addEventListener("click", () => {
            displayProjectDetails(index);
        });

        projectItem.appendChild(projectLink);
        projectsList.appendChild(projectItem);
    });
}

// Initial display of projects
document.addEventListener("DOMContentLoaded", () => {
    displayProjects();
});
