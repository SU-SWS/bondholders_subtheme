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
  attach(context, settings) {
    // console.log("Attached.");
    (function ($) {
    
    // disclaimer cookie policy
      if (document.cookie.split(';').some((item) => item.trim().startsWith('accepted_disclaimer='))) {
        $('.cookie-overlay').removeClass('ad-block').addClass('ad-none');
      }
    
      $('.accept-cookies').on('click', function() {
        document.cookie = "accepted_disclaimer=yes; Max-Age=86400;"
        $('.cookie-overlay').removeClass('ad-block').addClass('ad-none');
      })

    
  })(jQuery);
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};
