define(['ojs/ojcore',
        'knockout',
        'jquery',
        'ojs/ojbootstrap',
        'ojs/ojresponsiveutils',
        'ojs/ojresponsiveknockoututils',
        'ojs/ojknockout', 'ojs/ojlabel', 'ojs/ojinputtext', 'ojs/ojformlayout', 'ojs/ojbutton'],
 function(oj, ko, $, Bootstrap, responsiveUtils, responsiveKnockoutUtils) {

    function RegisterViewModel() {
      var self = this;
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.
      self.isSmall =responsiveKnockoutUtils.createMediaQueryObservable(
        responsiveUtils.getFrameworkQuery(responsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY));
      self.isLargeOrUp = responsiveKnockoutUtils.createMediaQueryObservable(
        responsiveUtils.getFrameworkQuery(responsiveUtils.FRAMEWORK_QUERY_KEY.LG_UP));

      // For small screens: 1 column and labels on top
      // For medium screens: 2 columns and labels on top
      // For large screens or bigger: 2 columns and labels inline
      this.columns = ko.pureComputed(function() {
        return this.isSmall() ? 1 : 2;
      }, this);
      this.labelEdge = ko.pureComputed(function() {
        return this.isLargeOrUp() ? "top" : "top";
      }, this);

      self.clickedButton = ko.observable("(None clicked yet)");
      self.buttonClick = function(event){
                            self.clickedButton(self.fullname());
                            return true;
                          }.bind(self);
      self.value = ko.observable("What");

      self.fullname = ko.observable("");
      self.email = ko.observable("");
      self.username = ko.observable("");
      self.phone = ko.observable("");
      self.password = ko.observable("");
      self.location = ko.observable("");
      self.stack = ko.observableArray();
      self.verifyPassword = ko.observable();
      self.submitInfo = function() {
        console.log("Button clicked..")

      };

      self.navigateToLogin = function() {
        oj.Router.rootInstance.go('login')
      }

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new RegisterViewModel();
  }
);
