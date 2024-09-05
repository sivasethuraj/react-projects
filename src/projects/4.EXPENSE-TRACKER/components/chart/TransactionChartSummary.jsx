import React from 'react'
import Chart from 'react-apexcharts'

const options = {
    labels: [ "Income", "Expense" ],
    colors: [ '#213ebf', '#fd5e53' ],
    chart: {
        width: '50px',
    }, states: {
        hover: {
            filter: {
                type: 'none',
            },
        }
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { mode: null },
    plotOption: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            }
        },
    },
    fill: {
        colors: [ '#213ebf', '#fd5e53' ],
    },
    tooltip: {
        enabled: true,
        theme: 'dark',
        style: {
            fontSize: '12px',
            fontFamily: 'undefined',
            backgroundColor: '#000',
        },
    },
};

const TransactionChartSummary = ( { expense = 100, income = 100 } ) => {

    return (
        <Chart
            options={ options }
            series={ [ income, expense ] }
            type='pie'
            width={ "100%" }
            height={ "100%" }
        />
    )
}

export default TransactionChartSummary