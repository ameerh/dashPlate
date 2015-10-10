angular.module('DashPlateCtrl', []).controller('DashPlateController', function($scope, $rootScope , $mdDialog ) {



	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	$(function() {
		var chart = new Highcharts.Chart({
			title:{
				text:'timeline'
			},
			chart: {
				renderTo: 'container',
				type: 'column'
			},
			xAxis: {
                categories: [
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct'
                ],
                crosshair: true,
            },
			yAxis: {
				title: {
					text: 'Price',
					useHTML: true,
					style: {
						"-webkit-transform": "rotate(90deg)",
						"-moz-transform": "rotate(90deg)",
						"-o-transform": "rotate(90deg)"
					}
				}
			},
			series: [{
                name: 'Last 6 months',
				data: $rootScope.plateData.timelineValues,
                color: "#C57322"
			}]

		});
	});

	$scope.alert = '';
	$scope.showAlert = function(ev) {
		// Appending dialog to document.body to cover sidenav in docs app
		// Modal dialogs should fully cover application
		// to prevent interaction outside of dialog
		$mdDialog.show(
			$mdDialog.alert()
				.parent(angular.element(document.body))
				.title('This is an alert title')
				.content('You can specify some description text in here.')
				.ariaLabel('Alert Dialog Demo')
				.ok('Got it!')
				.targetEvent(ev)
		);
	};

	//email address from first page is shown here
	$scope.showConfirm = function(ev) {
		var confirm = $mdDialog.confirm()
			.title('Buy / Sell whatever they click on.')
			.content('I want to buy this plate. Confirm your email address and submit ')
			.ariaLabel('Lucky day')
			.ok('Okay')
			.cancel('Not')
			.targetEvent(ev);
		$mdDialog.show(confirm).then(function() {
			$scope.alert = 'You decided to get rid of your debt.';
		}, function() {
			$scope.alert = 'You decided to keep your debt.';
		});
	};

	$scope.openConfirmationDialog = function(ev, type){
		$mdDialog.show({
			controller: confirmationController,
			templateUrl: '/views/buy-sell-dialog.html',
			locals:{
				type: type
			},
			targetEvent: ev
		})
			.then(function(data) {

			}, function() {
			});
	}





});

function confirmationController($scope, type, $mdDialog){
	$scope.type = type;
	console.log(type)
	$scope.close = function() {
		$mdDialog.hide();
	};

}