var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.contacts = [
    {
      'name':'Anmol Nandha',
      'address':'556 Ley Street, Newbury Park, Essex IG2 7DB',
      'contactNumbers': 
      {
        'home':'020 3566 0499',
        'mobile':'07850 068401'
      },
      'emailAddresses': 
      {
        'personal':'anmol@andesigns.co.uk',
        'work':'anmolnandha@dstoutput.co.uk'
      }
    },
    {
      'name':'Suresh Nandha',
      'address':'22 Thorngrove Road, Upton Park, London E13 0SJ',
      'contactNumbers': 
      {
        'home':'020 8552 5239',
        'mobile':'07985 323320'
      },
      'emailAddresses': 
      {
        'personal':'sureshnandha@hotmail.co.uk'
      }
    }
  ];
  $scope.addContact = function() {
    var newContact = {
      name: $scope.contactName,
      address: $scope.address,
      contactNumbers: 
      {
        home: $scope.contactNumbers.home,
        mobile: $scope.contactNumbers.mobile,
        work: $scope.contactNumbers.work
      },
      emailAddresses:
      {
        personal: $scope.emailAddresses.personal,
        work: $scope.emailAddresses.work
      }
    };
    $scope.contacts.push(newContact);
    $scope.contactName = '';
    $scope.address = '';
    $scope.contactNumbers.home = '';
    $scope.contactNumbers.mobile = '';
    $scope.contactNumbers.work = '';
    $scope.emailAddresses.personal = '';
    $scope.emailAddresses.work = '';
  };
  $scope.remove = function($index) {
    $scope.contacts.splice($index, 1);
  };
});
