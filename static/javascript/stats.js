const renderCharts=(data,labels)=>{
    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.height=100
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Last one month expense',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 245, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(245, 40, 195, 0.2)',
                    'rgba(76,58, 72, 0.2)',
                    'rgba(198, 220, 137, 0.2)',
                    'rgba(98,214, 192, 0.49)'

                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 245, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(245, 40, 195, 1)',
                    'rgba(76,58, 72, 1)',
                    'rgba(198, 220, 137, 1)',
                    'rgba(98,214, 192, 1)'
                    
                ],
                borderWidth: 1,
                radius : 150
            }]
        },
        options: {
            title: {
                
                display : true,
                text : 'Expense per Category',
            }
        }
    });
}

const getChartData=()=>{
    console.log('fetching');
    fetch('/expense_month').then(res=>res.json()).then(results=>{
        console.log("results",results);
        const category_data = results.expense_category_data;
        const [labels,data] = [Object.keys(category_data),Object.values(category_data)]
        renderCharts(data , labels);
    })
};

document.onload = getChartData()

