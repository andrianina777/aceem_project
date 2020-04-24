var app = angular.module('mainApp', [])
app.directive('joContent', () => {
    return {
        restrict: 'E',
        templateUrl: 'template/content'
    }
})
app.directive('joDashboard', () => {
    return {
        restrict: 'E',
        templateUrl: 'template/dashboard'
    }
})