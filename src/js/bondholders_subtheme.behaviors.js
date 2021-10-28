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
      if (document.cookie.split(';').some((item) => item.trim().startsWith('accepted_cookies='))) {
        $('.cookie-overlay').removeClass('ac-block').addClass('ac-none');
      }
    
      $('.accept-cookies').on('click', function() {
        document.cookie = "accepted_cookies=yes;"
        $('.cookie-overlay').removeClass('ac-block').addClass('ac-none');
      })

    
  })(jQuery);
  },

  // Detach Example.
  detach () {
    // console.log("Detached.");
  }
}
