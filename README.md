# Send2WhatsApp

### Source Code of Website https://www.whatsapp.workers.dev

The Website https://www.whatsapp.workers.dev is deployed on Cloudflare Workers Free Plan (100000 requests per day). The website can be used to send a new message to a new number which is not saved in your and probably you do not want to save it. The Website when opened in Chrome (Android) shows Add to Home Screen button which when clicked adds a small PWApp on your homescreen which is sized from few bytes to 1 MB approximately.

To Create a similar Cloudflare worker you need to edit some data and most of the resources are loaded from jsDelivr CDN so the links needs to updated if you are editing those.

* Name on Line 9, 13, 44 and 225
* URL on Line 12, 71, 118, 119 and 252
* All CDN Links needs to updated if you're editing the source css and js files.

You can also create your own [Cloudflare Worker](https://cloudflareworkers.com) with Simple HTML using this [Gist](https://gist.github.com/ParveenBhadooOfficial/5173369e5a8f9810c67f83fbf7097aca)

Note: WhatsApp is trademark of WhatsApp Inc. and this website is not affiliated to WhatsApp in any way.
