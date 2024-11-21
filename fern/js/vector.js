// Function to inject Vector tracking code
function injectVectorScript() {
    // Create and inject the main Vector initialization code
    const vectorInit = document.createElement('script');
    vectorInit.type = 'text/javascript';
    
    // The main Vector initialization code
    vectorInit.textContent = `
        !function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
        vector.load("ddec42cf-efbe-496f-a383-b4bdf828032d");
    `;

    // Function to actually inject the script
    function injectScript() {
        try {
            // Try to get the first script tag
            const firstScript = document.getElementsByTagName('script')[0];
            
            if (firstScript && firstScript.parentNode) {
                firstScript.parentNode.insertBefore(vectorInit, firstScript);
            } else {
                // Fallback: append to head or body if no script tag is found
                const target = document.head || document.getElementsByTagName('head')[0] || 
                              document.body || document.getElementsByTagName('body')[0];
                
                if (target) {
                    target.appendChild(vectorInit);
                }
            }
        } catch (error) {
            console.error('Error injecting Vector script:', error);
        }
    }

    // Handle script injection timing
    if (document.readyState === 'complete' || 
        (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
        injectScript();
    } else if (document.addEventListener) {
        // Modern browsers
        document.addEventListener('DOMContentLoaded', injectScript);
    } else {
        // IE <= 8
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState === 'complete') {
                injectScript();
            }
        });
    }
}

// Initialize the injection
injectVectorScript();