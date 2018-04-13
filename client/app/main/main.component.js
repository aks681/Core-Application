import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {

  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http,$scope) {
    this.$http = $http;
    this.$scope = $scope;
    this.departments = {
    "Concept and Design" : {
      name: "CD",
      emails: ["anshulkumar", "vaibhav"]
    },
    "Envisage": {
      name: "Envisage",
      emails: ["abhishek.kelkar", "deepanath"]
    },
    "Evolve": {
      name: "Evolve",
      emails: ["gv", "vamsikrishna"]
    },
    "Events": {
      name: "Events",
      emails: ["sathish", "ashmon"]
    },
    "Finance": {
      name: "Finance",
      emails: ["vishakhvnadh", "nitin", "prashanth"]
    },
    "Operations and Infrastructure Planning": {
      name: "O&IP",
      emails: ["shrigopal", "daanish"]
    },
    "Media and Student Relations": {
      name: "M&SR",
      emails: ["sundarsri", "amritesh"]
    },
    "QMS": {
      name: "QMS",
      emails: ["narayanan", "anjali.lal"]
    },
    "Shows and Exhibitions": {
      name: "Shows",
      emails: ["hitesh.malla"]
    },
    "Sponsorship and Public Relations": {
      name: "Spons",
      emails: ["shubhamnandeshwar", "aravind"]
    },
    "Webops": {
      name: "Webops",
      emails: ["kulan", "vikranth"]
    }
  };

  this.apps = {

    "Concept and Design": {
      "Creative branding and Design Strategist": {
        name: "Creative branding and Design Strategist",
        app_name: 'Creative_Branding_and_Design_Strategist_Shaastra2018',
        date: '16.04.2017'
      },
      "Creative branding and Design Coordinator": {
        name: "Creative branding and Design Coordinator",
        app_name: "Creative_Branding_and_Design_Coordinator_Shaastra2018",
        date: '16.04.2017'
      },
      "Creative Ambience Head": {
        name: "Creative Ambience Head",
        app_name: "Creative_Ambience_Head_Shaastra2018",
        date: '16.04.2017'
      },
      "Creative Ambience Coordinator": {
        name: "Creative Ambience Coordinator",
        app_name: "Creative_Ambience_Coordinator_Shaastra2018",
        date: '16.04.2017'
      },
      "VFX and Video Editing Head": {
        name: "VFX and Video Editing Head",
        app_name: "VFX_and_Video_Editing_Head_Shaastra2018",
        date: '16.04.2017'
      },
      "VFX and Video Editing Coordinator": {
        name: "VFX and Video Editing Coordinator",
        app_name: "VFX_and_Video_Editing_Coordinator_Shaastra2018",
        date: '16.04.2017'
      },
      "Media and Videography Head": {
        name: "Media and Videography Head",
        app_name: "Photography_and_Videography_Head_Shaastra2018",
        date: '16.04.2017'
      },
      "Media and Videography Coordinator": {
        name: "Media and Videography Coordinator",
        app_name: "Photography_and_Videography_Coordinator_Shaastra2018",
        date: '16.04.2017'
      }
    },

    "Envisage":{
      "Super Coordinator": {
        name: "Super Coordinator",
        app_name: "Envisage_Super_Coordinator_Application_Shaastra2018",
        date: '12.04.2017'
      },
      "Tech Ambience": {
        name: "Tech Ambience",
        app_name: "Envisage_Coordinator_Application_Shaastra2018",
        date: '16.04.2017'
      },
      "Mentor": {
        name: "Mentor",
        app_name: "Envisage_Mentor_Application_Shaastra2018",
        date: '16.04.2017'
      },
      "Coordinator Application": {
        name: "Coordinator Application",
        app_name: "Envisage_Coordinator_Application_Shaastra2018",
        date: '16.04.2017'
      }
    },

    "Events":{
      "Events Head": {
        name: "Events Head",
        app_name: "Shaastra18_Event_Head_Application",
        date: '16.04.2017'
      },
      "Events Coordinator": {
        name: "Events Coordinator",
        app_name: "Shaastra18_Event_Coord_Application",
        date: '15.04.2017'
      },
      "Flagship Events Head": {
        name: "Flagship Events Head",
        app_name: "Flagship_Events_Shaastra_2018",
        date: '16.04.2017'
      }
    },

    "Evolve": {
      "Summit Coordinator": {
        name: "Summit Coordinator",
        app_name: "Summit_CoordinatorApplicationQuestions_Shaastra2018",
        date: '16.04.2017'
      },
      "Spotlight Coordinator": {
        name: "Spotlight Coordinator",
        app_name: "Spotlight_CoordinatorApplicationQuestions_Shaastra2018",
        date: '16.04.2017'
      },
      "New Department Coordinator": {
        name: "New Department Coordinator",
        app_name: "DepartmentX_CoordinatorApplicationQuestions_Shaastra2018",
        date: '16.04.2017'
      },
      "Summit Super Coordinator": {
        name: "Summit Super Coordinator",
        app_name: "Summit_CoordinatorApplicationQuestions_Shaastra2018",
        date: '14.04.2017'
      },
      "Spotlight Super Coordinator": {
        name: "Spotlight Super Coordinator",
        app_name: "Spotlight_CoordinatorApplicationQuestions_Shaastra2018",
        date: '14.04.2017'
      },
      "New Department Super Coordinator": {
        name: "New Department Super Coordinator",
        app_name: "DepartmentX_CoordinatorApplicationQuestions_Shaastra2018",
        date: '14.04.2017'
      }
    },

    "Finance":{
      "Finance Coordinator": {
        name: "Finance Coordinator",
        app_name: "Financeapplication",
        date: '16.04.2017'
      },
      "Finance Manager" : {
        name: "Finance Manager",
        app_name: "Financeapplication",
        date: '12.04.2017'
      }
    },

    "Operations and Infrastructure Planning":{
      "Operations Head": {
        name: "Operations Head",
        app_name: "O&IP_OperationsHead_Application_Shaastra2018",
        date: '13.04.2017'
      },
      "Catering Head": {
        name: "Catering Head",
        app_name: "O&IP_CateringHead_Application_Shaastra2018",
        date: '13.04.2017'
      },
      "General Arrangements Coordinator": {
        name: "General Arrangements Coordinator",
        app_name: "O&IP_GerneralArrangementsCoordinator_Application_Shaastra2018",
        date: '16.04.2017'
      },
      "Catering Coordinator": {
        name: "Catering Coordinator",
        app_name: "O&IP_CateringCoordinator_Application_Shaastra2018",
        date: '16.04.2017'
      }
    },

    "Media and Student Relations":{
      "Coordinator Application": {
        name: "Coordinator Application",
        app_name: "M_SR_Coordinator_Application_Shaastra2018",
        date: '16.04.2017'
      },
      /*"Strategist": {
        name: "Strategist",
        app_name: ""
      }*/
    },

    "QMS":{
      "QMS Coordinator": {
        name: "QMS Coordinator",
        app_name: "qms_coordinator_application_shaastra2018",
        date: '13.04.2017'
      },
      "QMS Executive": {
        name: "QMS Executive",
        app_name: "qms_executive_application_shaastra2018",
        date: '13.04.2017'
      }
    },

    "Shows and Exhibitions":{
      "Shows Coordinator": {
        name: "Shows Coordinator",
        app_name: "Shows",
        date: '14.04.2017'
      },
      "Exhibitions Super Coordinator": {
        name: "Exhibitions Super Coordinator",
        app_name: "Exhibitions_Super_Coordinator",
        date: '14.04.2017'
      },
      "Tech and Innovation Fair Super Coordinator": {
        name: "Tech and Innovation Fair Super Coordinator",
        app_name: "Tech_n_Innovation_Fair_Super_Coordinator",
        date: '14.04.2017'
      },
      "Tech Creation Super Coordinator": {
        name: "Tech Creation Super Coordinator",
        app_name: "Techcreation_Super_Coordinator",
        date: '14.04.2017'
      },
      "Exhibitions Coordinator": {
        name: "Exhibitions Coordinator",
        app_name: "Exhibitions_Coordinator",
        date: '16.04.2017'
      },
      "Tech and Innovation Fair Coordinator": {
        name: "Tech and Innovation Fair Coordinator",
        app_name: "Tech_n_Innovation_Fair_Coordinator",
        date: '16.04.2017'
      },
      "Tech Creation Coordinator": {
        name: "Tech Creation Coordinator",
        app_name: "Techcreation_Coordinator",
        date: '16.04.2017'
      }
    },

    "Sponsorship and Public Relations":{
      "Corporate Relations": {
        name: "Corporate Relations",
        app_name: "Corporate_Relations_Spons_Shaastra 2018",
        date: '14.04.2017'
      },
      "PR Executives": {
        name: "PR Executives",
        app_name: "PR_Executive_Spons_Shaastra 2018",
        date: '18.04.2017'
      },
      "Engage and Endaevour": {
        name: "Engage and Endaevour",
        app_name: "Engage_Endeavour_Spons_Shaastra 2018",
        date: '15.04.2017'
      }
    },

    "Webops":{
      "Frontend Coordinator": {
        name: "Frontend Coordinator",
        app_name: "Shaastra18_Webops_Frontend",
        date: '27.05.2017'
      },
      "Backend Coordinator": {
        name: "Backend Coordinator",
        app_name: "Shaastra18_Webops_Backend",
        date: '27.05.2017'
      },
      "Mobile App Coordinator": {
        name: "Mobile App Coordinator",
        app_name: "Shaastra18_Webops_MobileApp",
        date: '27.05.2017'
      },
      "Software Development Coordinator": {
        name: "Software Development Coordinator",
        app_name: "Shaastra18_Webops_SoftDev",
        date: '27.05.2017'
      },
      "Frontend Super Coordinator": {
        name: "Frontend Super Coordinator",
        app_name: "Shaastra18_Webops_Frontend",
        date: '16.04.2017'
      },
      "Backend Super Coordinator": {
        name: "Backend Super Coordinator",
        app_name: "Shaastra18_Webops_Backend",
        date: '16.04.2017'
      },
      "Mobile App Super Coordinator": {
        name: "Mobile App Super Coordinator",
        app_name: "Shaastra18_Webops_MobileApp",
        date: '16.04.2017'
      },
      "Software Development Super Coordinator": {
        name: "Software Development Super Coordinator",
        app_name: "Shaastra18_Webops_SoftDev",
        date: '16.04.2017'
      }
    },
    "ICT": {
      "ICT Coordinator": {
        name: "ICT Coordinator",
        app_name: "ICT_Coordinator_Application"
      }
    }
  }

  this.path = '';
  }

  $onInit() {
    this.display = false;
  	this.depts = this.departments;
  	this.app = this.apps;
  	this.path = '';
  	this.posts = [];
  	this.initValue = "--Select Department--";
  	var department, position;
  	this.department = '';
  	this.position = '';
    //
  	// this.setDept = function(){
  	// 	this.department = document.getElementById('dept').value;
  	// };
    //
  	// this.setPos = function(){
  	// 	this.position = document.getElementById('position').value;
  	// }

  	this.showPDF = function(){
  		path = './uploads/'+$scope.department+'/'+$scope.position.app_name+'.pdf';
  		var win = window.open(path, '_blank');
  		win.focus();
  		// var d = document.getElementById('dept').value;
  		// var p = document.getElementById('position').value;
      //
  		// if(!(d === '--Select Department--' && p === '--Select Position--'))
  		// {
  		// 	path = './uploads/'+departments[d].name+'/'+apps[d][p]["app_name"]+'.pdf';
  		// 	var win = window.open(path, '_blank');
  		// 	win.focus();
  		// }
  	};

  	this.show = function()
  	{
  		this.display = true;
  	}
  }
}

export default angular.module('shaastraApp.main', [ngRoute])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'Ctrl'
  })
  .name;
