{{{
  "title": "The Heartbleed SSL Bug: What you Need to Know",
  "tags": ["bug", "heartbleed", "ssl", "help"],
  "category": "marketing",
  "description": "Following some very heavy media coverage of what has come to be known as the Heartbleed SSL bug, a lot of people who work and play online are pretty anxious about what the whole debacle means for them and web use in general.",
  "meta": "The Heartbleed SSL Bug: What you Need to Know",
  "date": "04-18-2014"
}}}

Following some very heavy media coverage of what has come to be known as the Heartbleed SSL bug, a lot of people who work and play online are pretty anxious about what the whole debacle means for them and web use in general. 

If you’re finding yourself a bit (or a lot) worried about how Heartbleed might affect you, then look no further than this explanatory primer. We’re going to tell you exactly what the Heartbleed SSL vulnerability is, how it might possibly affect you and what you can do to protect yourself if you’re even in danger at all! 

So relax, grab a hot cup of coffee, read through this blog post and you’ll soon understand what’s what with Heartbleed. This bug is very serious but the sky isn’t falling quite yet –you can take steps to keep yourself safe.

**What Exactly Is Heartbleed?**

Quite simply, the Heartbleed bug, also formally known as the CVE-2014-0160 vulnerability, is a security hole in the OpenSSL (Secure Sockets Layer) internet communications protocol that encrypts information sent between servers and computers on the web.
 
About 17% of the websites across the web that use secure encryption to send and receive data depend on OpenSSL for the job. And for these sites, virtually all of their passwords, traffic and any other sensitive information at all are protected by the protocol. 
In other words, when you visit your email inbox or your online banking login page, there is a decent chance that the information both contain is transmitted back and forth between your computer and their servers via OpenSSL encrypted channels.

Where the Heartbleed bug comes into the picture is in how it affected OpenSSL in a particularly sneaky way. The bug was actually introduced all the way back in December of 2011 and came to affect all versions of OpenSSL between 1.01 and 1.01f. 

The latest of these versions was implemented in January of 2013 by websites that use the protocol and because of this users who’ve been updating their OpenSSL to its latest editions are actually those who are most vulnerable! Usually it’s the opposite that’s true for bugs affecting online security systems.

In a nutshell, what Heartbleed does is simply make SSL encrypted communication open to easy reading by third parties using simple software exploits. 

For example, one recent exploit that came out at the same time as Heartbleed became public knowledge allows a hacker to force websites that are running the vulnerable versions of OpenSSL into dumping out their most recently sent packets of data. The hacker can then repeat these dumping instructions over and over again and in the process gather reams of passwords, account details and other sensitive information.

**What does all this Mean for Me?**

Now let’s get down to what exactly it all means as far as your security is concerned.

The bottom line is that if you’re not communicating with (using) websites that have the vulnerable versions of OpenSSL installed, then Heartbleed probably won’t affect you at all. Unfortunately, a lot of websites do use Heartbleed affected SSL and there’s a good chance you’re interacting with some of them.

If you are, then understand that sending your data over the vulnerable OpenSSL protocols doesn’t automatically mean someone is actually exfiltrating (stealing) your information, it only means that they could use an exploit to do so, if they decided to make you one of their targets.

Just to be safe however, you do need to take certain steps to keep your information as secure as possible, something we’re going to cover now.

**So How Do I Protect Myself from Heartbleed?**

As a first step, take a look at  [ this handy chart of major websites](http://mashable.com/2014/04/09/heartbleed-bug-websites-affected/) in different categories (social media, email etc). It lists all the major social networks, email providers, ecommerce portals and online banks/brokerages that most of us use and tells which ones are vulnerable, what they’re doing to fix the problem and whether or not you should change your passwords if you’re using them.

Obviously however, you’re also probably using lots of other websites that aren’t listed in the above chart with which you communicate sensitive personal data. For checking them out, hop over to [this handy Heartbleed affected website testing tool](http://filippo.io/Heartbleed/) that lets you enter the URL of any website you’re using and instantly tells you whether they’re safe or if they were using a vulnerable version of OpenSSL.

You can also try these additional URL testing tools that all do the same, just to be extra sure about your favorite websites:

[https://www.ssllabs.com/ssltest/](https://www.ssllabs.com/ssltest/)<br>
[http://heartbleed.criticalwatch.com/](http://heartbleed.criticalwatch.com/)<br>
[https://lastpass.com/heartbleed/](https://lastpass.com/heartbleed/)<br>

If it turns out that any sites you store important information on are infected, then you should immediately change your passwords and other login access information for them, but only if they have stated that they’ve patched their OpenSSL vulnerability. Why this last condition? Because if their OpenSSL is still affected by Heartbleed, then changing your password to a new one will still leave your new password vulnerable.
 
What you should do in this case is enable two factor authentication wherever a website you use offers it. This will make your password useless to potential hackers by creating a second login key that gets sent to your mobile phone every time you want to log in and which changes after each use.

If the site you’re using doesn’t offer a two factor authentication option, then you should either consider changing your password frequently until that site fixes their OpenSSL bug or try using a password manager service like [LastPass](https://lastpass.com/heartbleed/), which is hardened against password breaches through Heartbleed.

**A Last Word**

Follow through with the above protection steps and you’re extremely unlikely to be affected by Heartbleed or many other online vulnerabilities for that matter!
