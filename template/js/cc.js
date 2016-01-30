/**
 * Main CC JavaScript file
 */

/**
 * Initiate responiveNav plugin
 * http://responsive-nav.com
 */
var nav = responsiveNav(".site-nav");

/**
 * Begin jQuery
 */
jQuery(document).ready(function($){

  /**
   * Get TeamSpeak data through the PlanetTeamSpeak REST API
   * https://www.planetteamspeak.com/rest-api/
   */
  $.getJSON('https://api.planetteamspeak.com/serverstatus/ts.ccgaming.com/', function(json) {

    var $ts_btn = $('#ts_btn');

    // Did we get a successfull connection?
    if (json.status == 'success') {
      var $ts_data = json.result;
      $ts_btn.html('<span>'+ $ts_data.users +' on TeamSpeak</span> <i class="fa fa-headphones"></i>');
    } else {
      $ts_btn.html('TS : Offline').addClass('offline');
    }

  });

  $('#ts_btn').magnificPopup({
    type: 'ajax'
  });

});
