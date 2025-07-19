const jobs = [
  { title: 'Frontend Developer', company: 'Google', location: 'Dhaka', category: 'IT' },
  { title: 'UI/UX Designer', company: 'Pathao', location: 'Remote', category: 'Design' },
  { title: 'Digital Marketer', company: 'Grameenphone', location: 'Chattogram', category: 'Marketing' },
  { title: 'Backend Engineer', company: 'BongoBD', location: 'Dhaka', category: 'IT' },
];

function renderJobs(filter = {}) {
  const container = document.getElementById('jobContainer');
  container.innerHTML = '';

  const filteredJobs = jobs.filter(job => {
    return (
      (!filter.title || job.title.toLowerCase().includes(filter.title.toLowerCase())) &&
      (!filter.location || job.location.toLowerCase().includes(filter.location.toLowerCase())) &&
      (!filter.category || job.category === filter.category)
    );
  });

  if (filteredJobs.length === 0) {
    container.innerHTML = '<p>No jobs found.</p>';
    return;
  }

  filteredJobs.forEach(job => {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Category:</strong> ${job.category}</p>
      <a href="#" class="apply-btn">Apply Now</a>
    `;
    container.appendChild(card);
  });
}

function filterJobs() {
  const title = document.getElementById('searchTitle').value;
  const location = document.getElementById('searchLocation').value;
  const category = document.getElementById('category').value;
  renderJobs({ title, location, category });
}

// Initial render
renderJobs();
