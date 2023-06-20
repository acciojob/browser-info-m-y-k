//your JS code here. If required.
// Function to get browser name and version
    function getBrowserInfo() {
      var browserName = "";
      var version = "";

      // Check for different browser engines
      if (navigator.userAgent.indexOf("Firefox") != -1) {
        browserName = "Mozilla Firefox";
        version = navigator.userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
      } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        browserName = "Google Chrome";
        version = navigator.userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
      } else if (navigator.userAgent.indexOf("Safari") != -1) {
        browserName = "Apple Safari";
        version = navigator.userAgent.match(/Version\/(\d+\.\d+)/)[1];
      } else if (navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("Trident") != -1) {
        browserName = "Internet Explorer";
        version = navigator.userAgent.match(/(MSIE |rv:)(\d+\.\d+)/)[2];
      } else {
        browserName = "Unknown";
        version = "Unknown";
      }

      return { browserName, version };
    }

    // Display browser information on the page
    var browserInfo = getBrowserInfo();
    var browserInfoElement = document.getElementById("browser-info");
    browserInfoElement.textContent = "You are using " + browserInfo.browserName + " version " + browserInfo.version;
  