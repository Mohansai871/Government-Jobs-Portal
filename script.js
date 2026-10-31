document.getElementById('jobForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const searchQuery = document.getElementById('search').value.toLowerCase();
  const jobs = [
    { title: "Police Officer", department: "Police Department",vacancies: "256"},
    { title: "Civil Engineer", department: "Public Works",vacancies: "308"},
    { title: "head master", department: "Education",vacancies: "45"},
    { title: "Nurse", department: "Health Department",vacancies:"623"},
    { title: "Firefighter", department: "Fire Department",vacancies: "183"},
    { title: "Medical Officers", department: "Department of Health, Medical & Family Welfare",vacancies: "1200" },
    { title: "Pharmacists", department: "Department of Health, Medical & Family Welfare",vacancies: "1250" },
    { title: "School Teachers", department: "Department of Education",vacancies: "2500" },
    { title: "Lecturers in Government Colleges", department: "Department of Education",vacancies: "3500" },
    { title: "Agricultural Officers", department: "Department of Agriculture",vacancies: "45300" },
    { title: "Welfare Officers", department: "Social Welfare Department",vacancies: "55200" },
    { title: " Forest Guards", department: "Forest Department",vacancies: "2000" },
    { title: "Sub-Inspectors", department: "Police Department",vacancies: "3450" },
    { title: "Revenue Inspectors", department: "Revenue Department",vacancies: "2600" },
    { title: " Town Planning Assistants", department: "Urban Development Department",vacancies: "5000" },
  ];
  const filteredJobs = jobs.filter(job =>job.title.toLowerCase().includes(searchQuery) || job.department.toLowerCase().includes(searchQuery));
  let jobResults = document.getElementById('jobResults');
  jobResults.innerHTML = '';
  if (filteredJobs.length > 0) {
    filteredJobs.forEach(job => {
      jobResults.innerHTML += `
        <div class="job">
          <h3>${job.title}</h3>
          <p>Department: ${job.department}</p>
          <p>vacancies: ${job.vacancies}</p>
        </div>
      `;
    });
  } else {
    jobResults.innerHTML = '<p>No jobs found. Try a different search term.</p>';
  }
});