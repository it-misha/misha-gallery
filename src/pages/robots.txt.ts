import type { APIRoute } from "astro";

const robotsTxt = `
# Good Bots
## Internet Archive +http://archive.org/details/archive.org_bot
User-agent: archive.org_bot
Disallow:

# Fuck all bots
User-agent: *
Disallow: /

# Bad Bots
## Sources:
### darkvisitors.com
### udger.com
### whatmyuseragent.com

## 2ip +http://2ip.io
User-agent: 2ip bot
Disallow: /

## 360 Monitoring +https://www.360monitoring.io
### Does not respect robots.txt
User-agent: monitoring360bot
Disallow: /

## 360Spider +http://www.so.com/help/help_3_2.html
User-agent: 360Spider
Disallow: /

User-agent: 360Spider-image
Disallow: /

User-agent: 360Spider-Video
Disallow: /

User-agent: HaosouSpider
Disallow: /

## Aboundex +http://www.aboundex.com/crawler/
User-agent: Aboundex
Disallow: /

## Aclate +https://www.onespot.com/identifying-traffic.html
User-agent: LargeSmall Crawler

User-agent: Onespot-ScraperBot
Disallow: /

## Acoon +http://www.acoon.de/robot.asp
User-agent: AcoonBot
Disallow: /

## Accoona
User-agent: Accoona
Disallow: /

## AdAuth +https://www.adauth.com
User-agent: AdAuth
Disallow: /

## Adbeat +http://adbeat.com/policy
User-agent: adbeat_bot
Disallow: /

## AddThis +http://support.addthis.com
User-agent: AddThis.com
Disallow: /

## ADMantX +https://www.admantx.com/service-fetcher.html
User-agent: admantx
Disallow: /

User-agent: admantx-adform
Disallow: /

User-agent: admantx-eusyncbatch01
Disallow: /

User-agent: admantx-sap
Disallow: /

User-agent: admantx-testex
Disallow: /

User-agent: admantx-usaspb
Disallow: /

User-agent: admantx-usbatch
Disallow: /

User-agent: admantx-ussy01
Disallow: /

User-agent: admantx-ussy02
Disallow: /

User-agent: admantx-ussy03
Disallow: /

User-agent: admantx-ussy04
Disallow: /

User-agent: ias-au
Disallow: /

User-agent: ias-ir
Disallow: /

User-agent: ias-jp
Disallow: /

User-agent: ias-or
Disallow: /

User-agent: ias-sg
Disallow: /

User-agent: ias-va
Disallow: /

## Adsbot +https://seostar.co/robot/
### Does not respect robots.txt
User-agent: Adsbot
Disallow: /

## adstxtlab.com
User-agent: adstxtlab.com
Disallow: /

## Ahrefs +http://ahrefs.com/robot/
User-agent: AhrefsBot
Disallow: /

User-agent: AhrefsBot.Feeds
Disallow: /

User-agent: AhrefsSiteAudit
Disallow: /

## aiHitBot +http://www.aihit.com/ +https://www.aihitdata.com/about
User-agent: aiHitBot
Disallow: /

## AITCSRoboti
User-agent: AITCSRoboti
Disallow: /

## Alex Pavlov +https://github.com/pavlovtech/WebReaper
User-agent: WebReaper
Disallow: /

## Allen Institute for Artificial Intelligence +https://www.semanticscholar.org/crawler
User-agent: SemanticScholarBot
Disallow: /

User-agent: ScholarBot
Disallow: /

## Allloadin Favicon Bot +http://allloadin.com
User-agent: AFB
Disallow: /

## Amazon +https://developer.amazon.com/support/amazonbot
User-agent: Amazonbot
Disallow: /

## Anthropic AI +https://www.anthropic.com
User-agent: anthropic-ai
Disallow: /

## ApacheBench
User-agent: ApacheBench
Disallow: /

## Apple +http://www.apple.com/go/applebot
User-agent: Applebot
Disallow: /

## AppSignalBot +https://appsignal.com
User-agent: AppSignalBot
Disallow: /

## Arachni
User-agent: Arachni
Disallow: /

## Arachnys +http://arachnys.com
User-agent: Arachnophilia
Disallow: /

## ArchiveBot
User-agent: ArchiveTeam
Disallow: /

User-agent: ArchiveBot
Disallow: /

## Ask Media Group +http://about.ask.com/en/docs/about/webmasters.shtml
User-agent: Ask Jeeves
Disallow: /

## Aspiegel SE +https://aspiegel.com/about
User-agent: AspiegelBot
Disallow: /

## Awario +https://awario.com/bots.html
User-agent: AwarioBot
Disallow: /

User-agent: AwarioSmartBot
Disallow: /

User-agent: AwarioRssBot
Disallow: /

## BackDoorBot
User-agent: BackDoorBot
Disallow: /

## Backlink Check +http://www.backlink-check.de/bot.html
User-agent: Backlink-Check.de
Disallow: /

## Backlink Crawler +http://www.backlinktest.com/crawler.html
User-agent: BacklinkCrawler
Disallow: /

## Baidu +http://www.baidu.com/search/spider.html
User-agent: Baiduspider
Disallow: /

User-agent: Baiduspider-ads
Disallow: /

User-agent: Baiduspider-cpro
Disallow: /

User-agent: Baiduspider-favo
Disallow: /

User-agent: Baiduspider-image
Disallow: /

User-agent: Baiduspider-news
Disallow: /

User-agent: Baiduspider-render
Disallow: /

User-agent: Baiduspider-video
Disallow: /

## Babbar +https://babbar.tech/crawler
User-agent: Barkrowler
Disallow: /

## Barracuda +http://barracuda.com
User-agent: Barracuda Sentinel
Disallow: /

## BazQux +https://bazqux.com/fetcher
User-agent: BazQux
Disallow: /

## BDCbot +http://bigweb.bigdatacorp.com.br/faq.aspx
User-agent: BDCbot
Disallow: /

## Better Stack +http://betterstack.com
User-agent: Better Uptime Bot
Disallow: /

## Bitly +http://bit.ly/
User-agent: bitlybot
Disallow: /

## BitSight Technologies +https://www.bitsight.com
User-agent: BitSightBot
Disallow: /

## Blekko Inc +http://blekko.com/about/blekkobot +http://www.scoutjet.com
User-agent: Blekkobot
Disallow: /

User-agent: ScoutJet
Disallow: /

## Bloglovin +http://www.bloglovin.com
User-agent: Bloglovin
Disallow: /

## Blogtrottr http://blogtrottr.com
User-agent: Blogtrottr
Disallow: /

## Board Reader +http://boardreader.com
User-agent: BoardReader Blog Indexer
Disallow: /

## Bombora +http://www.bombora.com/bot
User-agent: BomboraBot
Disallow: /

## BrandVerity +http://www.brandberity.com/why-is-brandverity-visiting-me
User-agent: BrandVerity
Disallow: /

User-agent: BrandVeritySpider
Disallow: /

## Bright Interactive +http://www.brightbot.app/
User-agent: Brightbot
Disallow: /

## Browsershots +http://browsershots.org/faq
User-agent: Browsershots
Disallow: /

## Bublup +https://bublup.com/bublup-bot.html
User-agent: BublupBot
Disallow: /

## Buck +https://app.hypefactors.com/media-monitoring/about.html
User-agent: Buck
Disallow: /

## BuiltWith +http://builtwith.com/biup
User-agent: BuiltWith
Disallow: /

User-agent: BW
Disallow: /

## Bytedance +https://zhanzhang.toutiao.com
User-agent: Bytespider
Disallow: /

## CensysInspect +https://about.censys.io/
User-agent: CensysInspect
Disallow: /

## Cloud System Networks +http://cloudsystemnetworks.com
User-agent: Nimbostratus-Bot
Disallow: /

## Coc Coc Company +http://help.coccoc.com/searchengine
User-agent: coccocbot
Disallow: /

User-agent: coccocbot-image
Disallow: /

User-agent: coccocbot-web
Disallow: /

## Codewise +http://codewise.com
User-agent: VoluumDSP-content-bot
Disallow: /

## Cohere +https://cohere.com
User-agent: cohere-ai
Disallow: /

## Common Crawl +https://commoncrawl.org/faq/
User-agent: CCBot
Disallow: /

## comScore +http://www.comscore.com/Web-Crawler
User-agent: Proximic
Disallow: /

## Coosto BV +http://www.wise-guys.nl
User-agent: Freshbot
Disallow: /

User-agent: Vagabondo
Disallow: /

## CrowdTangle +https://fb.me/crowdtanglebot
User-agent: CrowdTanglebot
Disallow: /

## CyberSpyder +https://www.cyberspyder.net/category/faq/
User-agent: CyberSpyder
Disallow: /

## Dark Visitor +https://darkvisitors.com/
User-agent: Dark Visitor
Disallow: /

## Dassault Systemes +https://www.exalead.com/search/webmasterguide
User-agent: Exabot
Disallow: /

User-agent: Exabot-Images
Disallow: /

User-agent: Exabot-Thumbnails
Disallow: /

User-agent: ExaleadCloudview
Disallow: /

User-agent: PyExalead
Disallow: /

## DataForSeo +https://dataforseo.com/dataforseo-bot
User-agent: DataForSeoBot
Disallow: /

## Discord +https://discord.com/
User-agent: Discord
Disallow: /

## Diffbot +https://www.diffbot.com
User-agent: Diffbot
Disallow: /

## Driftnet.io +https://internet-measurement.com/
User-agent: InternetMeasurement
Disallow: /

## Echobox +https://www.echobox.com/
User-agent: EchoboxBot
Disallow: /

## Elsop +https://www.elsop.com/linkscan/overview.html
User-agent: LinkScan
Disallow: /

## EmailCollector
User-agent: EmailCollector
Disallow: /

## Embedly +https://embed.ly/
User-agent: Embedly
Disallow: /

## Eyeota Pte +http://www.eyeota.com
User-agent: Eyeotabot
Disallow: /

## Feedly +http://feedly.com/
User-agent: Feedly
Disallow: /

## Finity SA +https://support.paper.li/hc/en-us/articles/360006695637-PaperLiBot
User-agent: PaperLiBot
Disallow: /

User-agent: wangling
Disallow: /

## Flipboard +https://flipboard.com/
User-agent: FlipboardProxy
Disallow: /

## Foobot +http://foobot.io
User-agent: Foobot
Disallow: /

## FreshRSS +https://freshrss.org/
User-agent: FreshRSS
Disallow: /

## Friendica +https://friendi.ca/
User-agent: Friendica
Disallow: /

## Genieo/Somoto +http://genieo.com
User-agent: Genieo
Disallow: /

## Gigablast +http://www.gigablast.com/spider.html
User-agent: Gigabot
Disallow: /

User-agent: GigablastOpenSource
Disallow: /

## Google +http://www.google.com/bot.html
User-agent: Chrome-Lighthouse
Disallow: /

User-agent: Feedfetcher-Google
Disallow: /

User-agent: Google Web Preview
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Google-InspectionTool
Disallow: /

User-agent: Google-Safety
Disallow: /

User-agent: Googlebot
Disallow: /

User-agent: Googlebot-Image
Disallow: /

User-agent: GoogleOther
Disallow: /

## Grapeshot Limited +http://www.grapeshot.co.uk/crawler.php
User-agent: GrapeshotCrawler
Disallow: /

User-agent: grapeFX
Disallow: /

## GumGum +http://gumgum.com
User-agent: GumGum
Disallow: /

## Hatena +https://hatena.ne.jp/
User-agent: Hatena
Disallow: /

## HTTrack +https://www.httrack.com/html/faq.html
User-agent: HTTrack
Disallow: /

## Huawei Symantec Technologies +http://www.huaweisymantec.com/en/IRL/spider
User-agent: HuaweiSymantecSpider
Disallow: /

## Iframely +https://iframely.com/
User-agent: Iframely
Disallow: /

## Imagesift +http://imagesift.com/
User-agent: ImagesiftBot
Disallow: /

## Integral Ad Science +http://integralads.com/site-indexing-policy/
User-agent: ias_crawler
Disallow: /

User-agent: ias_wombles
Disallow: /

## Jason Butler +http://serendeputy.com/about/serendeputy-bot
User-agent: SerendeputyBot
Disallow: /

## Jobboerse +https://www.jobboerse.com/bot.htm
User-agent: JobboerseBot
Disallow: /

## Jyxo +http://jyxo.cz
User-agent: Jyxobot
Disallow: /

User-agent: JyxobotRSS
Disallow: /

## Leikibot +http://www.leiki.com
User-agent: Leikibot
Disallow: /

## Linkdex +https://www.linkdex.com/en-us/about/bots/
User-agent: linkdexbot
Disallow: /

User-agent: linkdex.com
Disallow: /

## LinkedInBot +https://linkedin.com/
User-agent: LinkedInBot
Disallow: /

## Linkfluence +http://linkfluence.com/
User-agent: YaK
Disallow: /

## LiveLap +http://site.livelap.com/crawler
### Does not respect robots.txt
User-agent: LivelapBot
Disallow: /

## Mail.RU +https://help.mail.ru/webmaster/indexing/robots
User-agent: Mail.RU_Bot
Disallow: /

## Majestic +http://mj12bot.com/
User-agent: MJ12bot
Disallow: /

## Mastodon +https://joinmastodon.org/
User-agent: Mastodon
Disallow: /

## Matrix +https://matrix.org/
User-agent: Synapse
Disallow: /

## MauiBot +crawler.feedback@gmail.com
User-agent: MauiBot
Disallow: /

## MAZ Systems +http://mazdigital.com
User-agent: MAZBot
Disallow: /

## MegaIndex +http://megaindex.com/crawler
User-agent: MegaIndex.ru
Disallow: /

## Meltwater +http://datasift.com/bot.html
User-agent: TweetmemeBot
Disallow: /

## Meta +https://developers.facebook.com/docs/sharing/bot +http://www.facebook.com/externalhit_uatext.php
User-agent: FacebookBot
Disallow: /

User-agent: facebookexternalhit
Disallow: /

User-agent: WhatsApp
Disallow: /

## MetaProducts +https://metaproducts.com
User-agent: Offline Explorer
Disallow: /

## Microsoft +http://www.bing.com/bingbot.htm
User-agent: AdIdxBot
Disallow: /

User-agent: Bingbot
Disallow: /

User-agent: BingPreview
Disallow: /

User-agent: MicrosoftPreview
Disallow: /

User-agent: MSNBot
Disallow: /

User-agent: MSNBot-Media
Disallow: /

User-agent: MSNBot-NewsBlogs
Disallow: /

User-agent: SkypeUriPreview
Disallow: /

## Miniflux +https://miniflux.app/
User-agent: Miniflux
Disallow: /

## Mojeek +https://www.mojeek.com/bot.html
User-agent: MojeekBot
Disallow: /

## Moz +https://opensiteexplorer.org/dotbot
User-agent: DotBot
Disallow: /

User-agent: rogerbot
Disallow: /

## NerdyData +http://nerdybot.com
User-agent: NerdyBot
Disallow: /

## Netcraft +info@netcraft.com
User-agent: NetcraftSurveyAgent
Disallow: /

## NewsBlur +https://newsblur.com/
User-agent: NewsBlur
Disallow: /

## Nextcloud +https://nextcloud.com/
User-agent: Nextcloud
Disallow: /

## Nice Crawler +http://nicecrawler.com/
User-agent: Nicecrawler
Disallow: /

## Nick Sweeting +https://github.com/pirate +https://github.com/ArchiveBox/ArchiveBox/
User-agent: ArchiveBox
Disallow: /

## OpenAI +https://platform.openai.com/docs/plugins/bot
User-agent: ChatGPT-User
Disallow: /

User-agent: GPTBot
Disallow: /

## Openfind Information Technology +http://www.openfind.com.tw/robot.html
User-agent: Openbot
Disallow: /

## Open Site Explorer +https://opensiteexplorer.org/dotbot
User-agent: DotBot
Disallow: /

## Pandalytics +https://domainsbot.com/pandalytics
User-agent: Pandalytics
Disallow: /

## PetalSearch +https://webmaster.petalsearch.com/site/petalbot
User-agent: PetalBot
Disallow: /

## Perplexity +https://perplexity.ai/
User-agent: PerplexityBot
Disallow: /

## Pinterest +https://pinterest.com/
User-agent: PinterestBot
Disallow: /

## Plurk +http://www.plurk.com
User-agent: PlurkBot
Disallow: /

## Pocket +https://getpocket.com/pocketparser_ua
User-agent: PocketParser
Disallow: /

## Python
User-agent: httplib
Disallow: /

## Quantcast Corporation +http://www.quantcast.com
User-agent: Quantcastbot
Disallow: /

## Qwant SAS +http://help.qwant.com/bot
User-agent: Qwantify
Disallow: /

User-agent: Quantify-dev

User-agent: Qwantify-prod
Disallow: /

## Reddit +https://reddit.com/
User-agent: redditbot
Disallow: /

## Ridder +http://linkis.com
User-agent: LinkisBot
Disallow: /

## Scammers
User-agent: wpbot
Disallow: /

## Screaming Frog +https://www.screamingfrog.co.uk/seo-spider/
User-agent: Screaming Frog
Disallow: /

User-agent: Screaming Frog SEO Spider
Disallow: /

## Seekport +https://bot.seekport.com
User-agent: SeekportBot
Disallow: /

## Seekr +http://www.ntent.com/ntentbot
User-agent: NTENTbot
Disallow: /

## Semrush +http://www.semrush.com/bot.html
User-agent: Semrush
Disallow: /

User-agent: SemrushBot
Disallow: /

## SentiOne +http://sentibot.eu/
User-agent: SentiBot
Disallow: /

## SEOptimizer +https://monitorbacklinks.com/robot
User-agent: MBCrawler
Disallow: /

## Seznam.cz +http://napoveda.seznam.cz/seznambot-intro/
User-agent: HomePageBot
Disallow: /

User-agent: Seznam
Disallow: /

User-agent: SeznamBot
Disallow: /

User-agent: SeznamHomepageCrawler
Disallow: /

## Serpstat Global +https://serpstatbot.com/
User-agent: serpstatbot
Disallow: /

User-agent: SiteAuditBot
Disallow: /

User-agent: SplitSignalBot
Disallow: /

## SimplePie +https://simplepie.org/
User-agent: SimplePie
Disallow: /

## Sirdata SAS +https://semantic-api.docs.sirdata.net/contextual-api/contextual-api/introduction
User-agent: SirdataBot
Disallow: /

## SiteImprove +http://siteimprove.com
User-agent: SiteCheck-sitecrawl
Disallow: /

## Slack +https://slack.com/
User-agent: Slackbot-LinkExpanding
Disallow: /

## Snapchat +https://developers.snap.com/robots
User-agent: snapchat
Disallow: /

User-agent: Snap URL Preview Service
Disallow: /

## Softonic
User-agent: TeleportPro
Disallow: /

## Sogou +http://www.sogou.com/docs/help/webmasters.htm
User-agent: Sogou
Disallow: /

User-agent: Sogou Pic Spider
Disallow: /

User-agent: Sogou head spider
Disallow: /

User-agent: Sogou web spider
Disallow: /

User-agent: Sogou Orion spider
Disallow: /

User-agent: Sogou-Test-Spider
Disallow: /

## Spidersoft +http://www.spidersoft.com
User-agent: WebZIP
Disallow: /

## Start.me +https://start.me/bot
User-agent: startmebot
Disallow: /

## StormCrawler +https://github.com/DigitalPebble/storm-crawler
User-agent: StormCrawler
Disallow: /

## SuperBot
User-agent: SuperBot
Disallow: /

## Superfeedr +https://superfeedr.com/
User-agent: Superfeedr
Disallow: /

## Swoppen Systems +https://crawla.de/de/index.php
User-agent: Birdcrawlerbot
Disallow: /

## T3Versions +https://t3versions.com/bot
User-agent: t3versionsBot
Disallow: /

## Taboola +http://www.taboola.com +http://www.become.com/site_owners.html
User-agent: BecomeBot
Disallow: /

User-agent: Taboolabot
Disallow: /

## Telegram +https://telegram.org/
User-agent: TelegramBot
Disallow: /

## Tencent +http://help.soso.com/webspider.htm
User-agent: Sosospider
Disallow: /

## The Trade Desk +http://www.thetradedesk.com/general/ttd-content
User-agent: TTD-Content
Disallow: /

## Tiny Tiny RSS +https://tt-rss.org/
User-agent: Tiny Tiny RSS
Disallow: /

## Torsten Ruckert +https://www.seokicks.de/robot.html
User-agent: SEOkicks
Disallow: /

User-agent: SEOkicks-Robot
Disallow: /

## Ubermetrics Technologies +http://ubermetrics-technologies.com +techinfo@ubermetrics-technologies.com
User-agent: um-
Disallow: /

User-agent: um-ANS
Disallow: /

User-agent: um-CC
Disallow: /

User-agent: um-FC
Disallow: /

User-agent: um-IC
Disallow: /

User-agent: um-LN
Disallow: /

User-agent: uMBot-ANS
Disallow: /

User-agent: uMBot-CC
Disallow: /

User-agent: uMBot-FC
Disallow: /

User-agent: uMBot-IC
Disallow: /

User-agent: uMBot-LN
Disallow: /

## University of Leipzig (Germany) +http://wortschatz.uni-leipzig.de
User-agent: findlinks
Disallow: /

## University of Milan (Italy) +http://law.di.unimi.it/BUbiNG.html
User-agent: BUbiNG
Disallow: /

## Velen +http://velen.io
User-agent: VelenPublicWebCrawler
Disallow: /

User-agent: VelenPublicWebDownloader
Disallow: /

## Viber +https://viber.com/
User-agent: Viber
Disallow: /

## VK +https://vk.com/
User-agent: vkShare
Disallow: /

## Voila +http://www.voila.com
User-agent: VoilaBot
Disallow: /

## W3C +https://w3.org/
User-agent: W3C_Validator
Disallow: /

## Webhose.io +http://omgili.com
### Does not respect robots.txt
User-agent: omgili
Disallow: /

User-agent: omgilibot
Disallow: /

## WebMeUp +http://webmeup-crawler.com
User-agent: BLEXBot
Disallow: /

## Weborama +http://weborama.com
User-agent: weborama-fetcher
Disallow: /

## X +https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/troubleshooting-cards
User-agent: Twitterbot
Disallow: /

## xaldon Technologies +http://xaldon.de
User-agent: Xaldon_WebSpider
Disallow: /

## Yahoo +https://help.yahoo.com/kb/mail/yahoo-link-preview-SLN23615.html +http://help.yahoo.com/help/us/ysearch/slurp
User-agent: Slurp
Disallow: /

User-agent: Yahoo Link Preview
Disallow: /

## Yandex +https://yandex.com/bots
User-agent: Yandex
Disallow: /

User-agent: YandexBot
Disallow: /

User-agent: YandexAccessibilityBot
Disallow: /

User-agent: YandexAdNet
Disallow: /

User-agent: YandexBlogs
Disallow: /

User-agent: YandexCalendar
Disallow: /

User-agent: YandexDirect
Disallow: /

User-agent: YandexDirectDyn
Disallow: /

User-agent: YandexFavicons
Disallow: /

User-agent: YaDirectFetcher
Disallow: /

User-agent: YandexForDomain
Disallow: /

User-agent: YandexImages
Disallow: /

User-agent: YandexImageResizer
Disallow: /

User-agent: YandexMarket
Disallow: /

User-agent: YandexMetrika
Disallow: /

User-agent: YandexMobileBot
Disallow: /

User-agent: YandexMobileScreenShotBot
Disallow: /

User-agent: YandexNews
Disallow: /

User-agent: YandexOntoDB
Disallow: /

User-agent: YandexOntoDBAPI
Disallow: /

User-agent: YandexPagechecker
Disallow: /

User-agent: YandexPartner
Disallow: /

User-agent: YandexRCA
Disallow: /

User-agent: YandexScreenshotBot
Disallow: /

User-agent: YandexSearchShop
Disallow: /

User-agent: YandexSitelinks
Disallow: /

User-agent: YandexSpravBot
Disallow: /

User-agent: YandexTracker
Disallow: /

User-agent: YandexTurbo
Disallow: /

User-agent: YandexVertis
Disallow: /

User-agent: YandexVerticals
Disallow: /

User-agent: YandexVideo
Disallow: /

User-agent: YandexVideoParser
Disallow: /

User-agent: YandexWebmaster
Disallow: /

## You.com +https://about.you.com/youbot/
User-agent: YouBot
Disallow: /

## Zoominfo +https://zoominfo.com
User-agent: Clickagy
Disallow: /

User-agent: ZoominfoBot
Disallow: /

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
