// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


$(document).ready(function() {
    $.ajax({
            cache : false,
            url : "http://localhost:3002/analytics/statistics", 
            type : 'POST', 
            data:{
                expression:"ga:users",
                name:"ga:userType",
                startdate:'30daysAgo'
            },
            success : function(data) {
                let metrics = []
                let dimensions = []
                let row = data.reports[0].data.rows
                
                for (var i = 0; i < row.length; i++) {
                metrics.push(row[i].metrics[0].values[0])
                dimensions.push(row[i].dimensions[0])
            }

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: dimensions,
    datasets: [{
      data: metrics,
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
  }, // success 
    
            error : function(xhr, status) {
                alert(xhr + " : " + status);
            }
        }); 
})