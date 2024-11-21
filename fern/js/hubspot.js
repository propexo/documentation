// Function to inject HubSpot script
function injectHubSpotScript() {
    // Create the script element
    const script = document.createElement('script');
    
    // Set the attributes
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = '//js.hs-scripts.com/435361.js';
    
    // Handle older browsers that might not support async/defer
    if (typeof script.async === 'undefined') {
        script.setAttribute('async', 'true');
    }
    if (typeof script.defer === 'undefined') {
        script.setAttribute('defer', 'true');
    }
    
    // Append to either head or body, whichever is available
    const target = document.head || document.getElementsByTagName('head')[0] || 
                  document.body || document.getElementsByTagName('body')[0];
    
    if (target) {
        target.appendChild(script);
    }
}

// Cross-browser way to run after DOM is loaded
function ready(callback) {
    // For modern browsers
    if (document.readyState === 'complete' || 
        (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
        callback();
    } else if (document.addEventListener) {
        // Modern browsers
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        // IE <= 8
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState === 'complete') {
                callback();
            }
        });
    }
}

// Initialize
ready(injectHubSpotScript);