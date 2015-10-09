angular.module('DashPlateCtrl', []).controller('DashPlateController', function($scope) {

	$(function() {
		var chart = new Highcharts.Chart({
			chart: {
				renderTo: 'container',
				type: 'column'
			},
			yAxis: {
				title: {
					text: 'axis title',
					useHTML: true,
					style: {
						"-webkit-transform": "rotate(90deg)",
						"-moz-transform": "rotate(90deg)",
						"-o-transform": "rotate(90deg)"
					}
				}
			},
			series: [{
				data: [23,45,12,89,123,12,5],
                color: "#ED8B29"
			}]

		});
	});

});