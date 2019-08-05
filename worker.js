async function handleRequest(event) {
  const url = new URL(event.request.url);
  let element = url.pathname.split("/").filter(n => n);

  if (element[0] === "manifest.json") {
    const someHTML = `{
    "dir": "ltr",
    "lang": "English",
    "name": "Send2WhatsApp",
    "scope": "/",
    "display": "fullscreen",
    "start_url": "https://www.whatsapp.workers.dev",
    "short_name": "Send2WhatsApp",
    "theme_color": "#63A3F2",
    "description": "How to send Whatsapp messages without saving the number. Open the web browser and then paste 'wa.hashhackers.com' in the Address bar of your phone's browser. In the place of “number”, enter the phone number of the person to whom you want to send a WhatsApp message with the country code.",
    "orientation": "any",
    "background_color": "#FFFFFF",
    "related_applications": [],
    "prefer_related_applications": false,
    "icons": [
        {
            "src": "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.10/images/hashhackers-196x196.png",
            "sizes": "196x196",
            "type": "image/png"
        },
        {
            "src": "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.10/images/hashhackers-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}`;
    return new Response(someHTML, {
      headers: {
        "content-type": "application/webpub+json;charset=UTF-8"
      }
    });
  } else if (element[0] === undefined) {
    const someHTML = `<!DOCTYPE html>
<html lang="en">
<head>
	<!-- COMMON TAGS -->
	<meta charset="utf-8">
	<title>Whatsapp Without Saving Number - Send2WhatsApp</title>
	<link rel="manifest" href="/manifest.json"></link>
	<meta name="theme-color" content="#ffffff">
	<meta name="language" content="en">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="robots" content="index, follow">
	<meta name="keywords" content="whatsapp, whatsapp without number, hashhackers, hash hackers, send whatsapp, wa without saving">
	<meta name="web_author" content="Parveen Bhadoo">
	<!-- Search Engine -->
	<meta name="description" content="How to send Whatsapp messages without saving the number. Open the web browser and then paste 'wa.hashhackers.com' in the Address bar of your phone's browser. In the place of “number”, enter the phone number of the person to whom you want to send a WhatsApp message with the country code.">
	<meta name="image" content="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/images/wa.hashhackers.com_featured.png">
	<meta name="google-site-verification" content="rWp9CYwbGNtZIVIhWySmV3FyFLADc9eaA-42n6m3v10" />
	<!-- Schema.org for Google -->
	<meta itemprop="name" content="Whatsapp Without Saving Number - Hash Hackers">
	<meta itemprop="description" content="How to send Whatsapp messages without saving the number. Open the web browser and then paste 'wa.hashhackers.com' in the Address bar of your phone's browser. In the place of “number”, enter the phone number of the person to whom you want to send a WhatsApp message with the country code.">
	<meta itemprop="image" content="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/images/wa.hashhackers.com_featured.png">
	<!-- Twitter -->
	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="Whatsapp Without Saving Number - Hash Hackers">
	<meta name="twitter:description" content="How to send Whatsapp messages without saving the number. Open the web browser and then paste 'wa.hashhackers.com' in the Address bar of your phone's browser. In the place of “number”, enter the phone number of the person to whom you want to send a WhatsApp message with the country code.">
	<meta name="twitter:site" content="@parveenbhadoo">
	<meta name="twitter:creator" content="@parveenbhadoo">
	<meta name="twitter:image:src" content="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/images/wa.hashhackers.com_featured.png">
	<!-- Open Graph general (Facebook, Pinterest & Google+) -->
	<meta name="og:title" content="Whatsapp Without Saving Number - Hash Hackers">
	<meta name="og:description" content="How to send Whatsapp messages without saving the number. Open the web browser and then paste 'wa.hashhackers.com' in the Address bar of your phone's browser. In the place of “number”, enter the phone number of the person to whom you want to send a WhatsApp message with the country code.">
	<meta name="og:image" content="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/images/wa.hashhackers.com_featured.png">
	<meta name="og:url" content="https://www.whatsapp.workers.dev">
	<meta name="og:site_name" content="Whatsapp Without Saving Number - Hash Hackers">
	<meta name="fb:admins" content="100003070390356">
	<meta name="fb:app_id" content="2045292318877109">
	<meta name="og:type" content="website">
	<link rel="apple-touch-icon" sizes="180x180" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/favicon-16x16.png">
	<link rel="mask-icon" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/css/wa.hashhackers.com_style.css" integrity="sha256-m/6hrVOX0ziTp9u/2U9/59XQr5K1MnSj1kxFw+GpgiU=" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/css/wa.hashhackers.com_ad.css" integrity="sha256-1fk6A5FZOEQVWYpeMBiDoi4Ak9SOGlaC3ypZFer6XQk=" crossorigin="anonymous">
</head>
<body style="background-image: url('https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.12/images/bg-01.jpg');">
	<div class="container text-center">
		<div class="form-box">
			<h2>Send2WhatsApp</h2>
			<p>No Need to Save Number for Sending a Message to New Number.</p>
			<p>Enter Number with Country Code like +919876543210 (+ is Optional)</p>
			<form id="waform" action="#">
				<div class="form-group">
					<input id="phone" type="number" class="form-input" placeholder="919876543210" value="91" required>
				</div>
				<div class="form-group">
					<textarea id="message" rows="10" class="form-input" placeholder="Enter Your Message Here (Optional)" ></textarea>
				</div>
				<div class="form-group">
					<button type="submit" class="button">Send</button>
				</div>
				<p>Powered By <a href="//www.hashhackers.com" target="_blank">Bhadoo Industries</a><br><br>
			</form>
			
		</div>
	</div>
<script data-cfasync="false" src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/js/wa.hashhackers.com_process.js" integrity="sha256-AnZKxmjRh26gm+VoWSJiR/2XUltqbFE+gv5hS5wMq/A=" crossorigin="anonymous"></script>
<script type='text/javascript'>var wahashhackers = {"url":"\/sw.js"};</script>
<script src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.10/service_workers/wa.hashhackers.com-register.js" integrity="sha256-LZ7kSnL5lLWIsD0nf3ufwtygDHSm6lMp9dtyJE3WC8E=" crossorigin="anonymous"></script>
</body>
</html>`;
    return new Response(someHTML, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  } else if (element[0] === "sw.js") {
    const someHTML = `'use strict';

const cacheName = 'wahashhackerssw';
const startPage = 'https://www.whatsapp.workers.dev';
const offlinePage = 'https://www.whatsapp.workers.dev/offline.html';
const filesToCache = [startPage, offlinePage];

// Install
self.addEventListener('install', function(e) {
	console.log('Hash Hackers Service worker installation');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('Hash Hackers Service worker caching dependencies');
			filesToCache.map(function(url) {
				return cache.add(url).catch(function (reason) {
					return console.log('Hash Hackers SW: ' + String(reason) + ' ' + url);
				});
			});
		})
	);
});

// Activate
self.addEventListener('activate', function(e) {
	console.log('Hash Hackers Service worker activation');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if ( key !== cacheName ) {
					console.log('Hash Hackers SW old cache removed', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

// Fetch
self.addEventListener('fetch', function(e) {
	
	// Return if the current request url is in the never cache list
	if ( ! neverCacheUrls.every(checkNeverCacheList, e.request.url) ) {
	  console.log( 'Hash Hackers SW: Current request is excluded from cache.' );
	  return;
	}
	
	// Return if request url protocal isn't http or https
	if ( ! e.request.url.match(/^(http|https)://i) )
		return;
	
	// Return if request url is from an external domain.
	if ( new URL(e.request.url).origin !== location.origin )
		return;
	
	// For POST requests, do not use the cache. Serve offline page if offline.
	if ( e.request.method !== 'GET' ) {
		e.respondWith(
			fetch(e.request).catch( function() {
				return caches.match(offlinePage);
			})
		);
		return;
	}
	
	// Revving strategy
	if ( e.request.mode === 'navigate' && navigator.onLine ) {
		e.respondWith(
			fetch(e.request).then(function(response) {
				return caches.open(cacheName).then(function(cache) {
					cache.put(e.request, response.clone());
					return response;
				});  
			})
		);
		return;
	}

	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request).then(function(response) {
				return caches.open(cacheName).then(function(cache) {
					cache.put(e.request, response.clone());
					return response;
				});  
			});
		}).catch(function() {
			return caches.match(offlinePage);
		})
	);
});

// Check if current url is in the neverCacheUrls list
function checkNeverCacheList(url) {
	if ( this.match(url) ) {
		return false;
	}
	return true;
}`;
    return new Response(someHTML, {
      headers: {
        "content-type": "text/javascript;charset=UTF-8"
      }
    });
} else if (element[0] === "offline.html") {
    const someHTML = `<!DOCTYPE html>
<html lang="en">
<head>
	<!-- COMMON TAGS -->
	<meta charset="utf-8">
	<title>Whatsapp Without Saving Number - Send2WhatsApp</title>
	<link rel="manifest" href="/manifest.json"></link>
	<meta name="theme-color" content="#ffffff">
	<meta name="language" content="en">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="robots" content="index, follow">
	<meta name="keywords" content="whatsapp, whatsapp without number, hashhackers, hash hackers, send whatsapp, wa without saving">
	<meta name="web_author" content="Parveen Bhadoo">
	<!-- Search Engine -->
	<meta name="description" content="How to send Whatsapp messages without saving the number. Open the web browser and then paste 'wa.hashhackers.com' in the Address bar of your phone's browser. In the place of “number”, enter the phone number of the person to whom you want to send a WhatsApp message with the country code.">
	<meta name="image" content="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/images/wa.hashhackers.com_featured.png">
	<meta name="google-site-verification" content="rWp9CYwbGNtZIVIhWySmV3FyFLADc9eaA-42n6m3v10" />
	<!-- Schema.org for Google -->
	<meta itemprop="name" content="Whatsapp Without Saving Number - Hash Hackers">
	<meta itemprop="description" content="How to send Whatsapp messages without saving the number. Open the web browser and then paste 'wa.hashhackers.com' in the Address bar of your phone's browser. In the place of “number”, enter the phone number of the person to whom you want to send a WhatsApp message with the country code.">
	<meta itemprop="image" content="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/images/wa.hashhackers.com_featured.png">
	<!-- Twitter -->
	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="Whatsapp Without Saving Number - Hash Hackers">
	<meta name="twitter:description" content="How to send Whatsapp messages without saving the number. Open the web browser and then paste 'wa.hashhackers.com' in the Address bar of your phone's browser. In the place of “number”, enter the phone number of the person to whom you want to send a WhatsApp message with the country code.">
	<meta name="twitter:site" content="@parveenbhadoo">
	<meta name="twitter:creator" content="@parveenbhadoo">
	<meta name="twitter:image:src" content="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/images/wa.hashhackers.com_featured.png">
	<!-- Open Graph general (Facebook, Pinterest & Google+) -->
	<meta name="og:title" content="Whatsapp Without Saving Number - Hash Hackers">
	<meta name="og:description" content="How to send Whatsapp messages without saving the number. Open the web browser and then paste 'wa.hashhackers.com' in the Address bar of your phone's browser. In the place of “number”, enter the phone number of the person to whom you want to send a WhatsApp message with the country code.">
	<meta name="og:image" content="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/images/wa.hashhackers.com_featured.png">
	<meta name="og:url" content="https://www.whatsapp.workers.dev">
	<meta name="og:site_name" content="Whatsapp Without Saving Number - Hash Hackers">
	<meta name="fb:admins" content="100003070390356">
	<meta name="fb:app_id" content="2045292318877109">
	<meta name="og:type" content="website">
	<link rel="apple-touch-icon" sizes="180x180" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/favicon-16x16.png">
	<link rel="mask-icon" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.9/icons/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/css/wa.hashhackers.com_style.css" integrity="sha256-m/6hrVOX0ziTp9u/2U9/59XQr5K1MnSj1kxFw+GpgiU=" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/css/wa.hashhackers.com_ad.css" integrity="sha256-1fk6A5FZOEQVWYpeMBiDoi4Ak9SOGlaC3ypZFer6XQk=" crossorigin="anonymous">
</head>
<body style="background-image: url('https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.12/images/bg-01.jpg');">
	<div class="container text-center">
		<div class="form-box">
			<h2>Send2WhatsApp</h2>
			<p>No Need to Save Number for Sending a Message to New Number.</p>
			<p>Enter Number with Country Code like +919876543210 (+ is Optional)</p>
			<form id="waform" action="#">
				<div class="form-group">
					<input id="phone" type="number" class="form-input" placeholder="919876543210" value="91" required>
				</div>
				<div class="form-group">
					<textarea id="message" rows="10" class="form-input" placeholder="Enter Your Message Here (Optional)" ></textarea>
				</div>
				<div class="form-group">
					<button type="submit" class="button">Send</button>
				</div>
				<p>Powered By <a href="//www.hashhackers.com" target="_blank">Bhadoo Industries</a><br><br>
			</form>
			
		</div>
	</div>
<script data-cfasync="false" src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.1/js/wa.hashhackers.com_process.js" integrity="sha256-AnZKxmjRh26gm+VoWSJiR/2XUltqbFE+gv5hS5wMq/A=" crossorigin="anonymous"></script>
<script type='text/javascript'>var wahashhackers = {"url":"\/sw.js"};</script>
<script src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/BhadooJS@1.0.10/service_workers/wa.hashhackers.com-register.js" integrity="sha256-LZ7kSnL5lLWIsD0nf3ufwtygDHSm6lMp9dtyJE3WC8E=" crossorigin="anonymous"></script>
</body>
</html>`;
    return new Response(someHTML, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
} else {
    const someHTML = `<meta http-equiv="refresh" content="0;url=/" />`;
    return new Response(someHTML, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      } 
    });
  }
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event));
});
