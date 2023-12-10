// Function to dynamically create content
function createProjectDetails() {
    const projectDetails = $("#projectDetails");
    
    // Example of creating a project detail
    projectDetails.append("<h3>Project Details</h3>");
    projectDetails.append("<p>Complete the interactive project by [Your Due Date Here].</p>");

    // Your additional content creation code goes here
  }

  // Function to animate project details with slideUp and slideDown
  function animateProjectDetails() {
    $("#projectDetails").slideDown(1000);
    setTimeout(() => {
    $("#projectDetails").slideUp(1000);
    }, 4000); // Hide after 3 seconds
  }

  // Call functions
  createProjectDetails();
  animateProjectDetails();