/**
 * Behavior Example that works with Webpack.
 *
 * @see: https://www.npmjs.com/package/drupal-behaviors-loader
 *
 * Webpack wraps everything in enclosures and hides the global variables from
 * scripts so special handling is needed.
 */

export default {

  // Attach Drupal Behavior.
  attach (context, settings) {
    // console.log("Attached.");
    (function ($) {
    
    // cookie policy

    
      if (document.cookie.indexOf("accepted_cookies=") > 0) {
        $('.cookie-overlay').removeClass('d-block').addClass('d-none');
      }
    
      $('.accept-cookies').on('click', function() {
        document.cookie = "accepted_cookies=yes;"
        $('.cookie-overlay').removeClass('d-block').addClass('d-none');
      })

    
  })(jQuery);
  },

  // Detach Example.
  detach () {
    // console.log("Detached.");
  }
}
