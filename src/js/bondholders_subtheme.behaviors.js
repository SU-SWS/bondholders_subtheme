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
    var overlayHtml = 

    '<div class="cookie-overlay p-4 d-block">' +
    '<div class="d-flex">' +
    
    '<p>Please read the Disclaimer below and indicate your acceptance before entering the <strong>Office of the Treasurer</strong> website with information for bondholders and the Stanford community.</p>' +
    
    '<h2><strong>Disclaimer</strong></h2>' +
    
    '<p>You have requested to enter the Bondholder Information section of the Stanford University website ("Section"). The purpose of this Section is to provide bondholders, noteholders, potential investors and others with general information about Stanford University and its various bond programs. All data provided in this Section and elsewhere in the University\'s website are for informational purposes only, are not intended for trading purposes and do not purport to include every item which may be of interest with respect to any of Stanford University\'s bonds and/or notes. </p>' +
    
    '<p>Information in this Section is not an offer to sell securities or the solicitation of an offer to buy securities.</p>' +
    
    '<p>The information on the Stanford website has been provided for the user\'s convenience without any representation or warranty of accuracy or completeness when posted. Moreover, Stanford University undertakes no obligation to update any information included on the site. Among the information contained on the website is historical information. All information on the website speaks only as of its date, which may be prior to its posting date. The information and expressions of opinion therein are subject to change without notice and the posting of information on the website does not imply that there has been no change in the affairs of Stanford University since the date of posting of such information. Maintenance of any information on the website is not intended as a republication of such information on any date subsequent to the date on which such information was originally published.</p>' + 
    
    '<p>Stanford\'s website and documents referenced in this Section contain statements that, to the extent they are not recitations of historical fact, may constitute "forward-looking statements." In this respect, the words "estimate," "project," "anticipate," "expect," "intend," "believe" and similar expressions are intended to identify forward-looking statements. A number of important factors affecting the University\'s business and financial results could cause actual results to differ materially from those stated in the forward-looking statements. For statements of risk factors regarding financial results and condition of the University, see Official Statements and the Annual Disclosure Report. Given these uncertainties, readers are cautioned not to rely on forward-looking statements. To the extent there are conflicts between statements made in the Official Statements and other parts of this Section, the information contained in the Official Statements should be deemed more reliable.</p>' +
    
    '<p>The Office of Business Affairs maintains the Bondholder Information Section of the Stanford website. However, this Section includes hyperlinks to other parts of the Stanford website and to websites maintained or controlled by others, and these hyperlinks may be to copies (in the same or different formats) of documents provided in this Section. The Office of Business Affairs is not responsible for and does not routinely screen, approve, review or endorse the contents of these websites or this Section, and if there is a conflict between a document provided both in this Section and on another part of the Stanford website or on a website maintained or controlled by others, the document provided in this Section prevails.</p>' +
    
    '<p>You acknowledge and agree that Stanford is not responsible for the availability of such sites or this Section, and does not endorse and is not responsible or liable for any content, advertising, products, services, forward-looking statements (as defined above) or other materials on or available from external sites or resources, including without limitation information in the nature of third party financial research, analytical tools or execution services. You further acknowledge and agree that Stanford is not responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, available on or through any such site or resource.</p>' +
    
    '<p>All users of the Bondholder Information portion of Stanford\'s website remain subject to the general <a href="http://web.stanford.edu/site/terms.html" title="Terms of Use" target="_blank">Terms of Use</a> of Stanford\'s website.</p>' +
    
    '<p>If you have read, understand and agree with the above and wish to continue to Stanford University\'s Bondholder Information website, please click <strong>ACCEPT</strong> below.</p>' +
    
    '</div>' +
    '<button class="su-button mt-3 accept-cookies">Accept</button>' +
    '</div>'

    $(overlayHtml).appendTo("#page-content");
    $('.block-bondholders-subtheme-content, footer').addClass('d-background');


      if (document.cookie.split(';').some((item) => item.trim().startsWith('accepted_disclaimer='))) {
        $('.cookie-overlay').removeClass('d-block').addClass('d-none');
        $('.block-bondholders-subtheme-content, footer').removeClass('d-background');
      }
    
      $('.accept-cookies').on('click', function() {
        document.cookie = "accepted_disclaimer=yes; Max-Age=86400;"
        $('.cookie-overlay').removeClass('d-block').addClass('d-none');
        $('.block-bondholders-subtheme-content, footer').removeClass('d-background');
      })

    
  })(jQuery);
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};
