'use strict';

/**
 * 反馈 ctrl
 */
angular.module('moofunApp')
  .controller('FeedbackCtrl', function () {

    // //调用我们父 controller
    // var parentCtrl = $controller('BaseListCtrl', {
    //   $scope: $scope, CRUDServices: VatInvoiceEntity, config: {
    //     filter: {
    //       status: '1' //已开票的
    //     },
    //     formatData: function(row) {
    //       if(row.createTime){
    //         row.createTime = new Date(row.createTime);
    //       }
    //       if(row.operationTime){
    //         row.operationTime = new Date(row.operationTime); 
    //       }
    //     }
    //   }
    // });
    // //通过 angular.extend 把父控制器上的 方法和属性 绑定到 子的对象上
    // angular.extend($scope, parentCtrl);
    // $scope.query(true);

  });