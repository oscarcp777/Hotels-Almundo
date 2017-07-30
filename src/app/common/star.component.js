export const StarComponent = {
  bindings :{
    num:'<'
  },
  controller : class StarController {
    constructor(){}
    range(n){
      return Array.from(Array(parseInt(n)).keys());
    }
  },
  template: `
    <i class="fa fa-star yellow" ng-repeat="n in $ctrl.range($ctrl.num)"></i>
  `
}
