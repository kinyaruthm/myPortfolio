document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Java'],
        datasets: [{
          data: [90, 85, 80, 75, 70, 80],
          backgroundColor: ['#2980b9', '#27ae60', '#f1c40f', '#8e44ad', '#e67e22', '#e74c3c']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  });
  