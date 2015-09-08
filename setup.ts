## -----------------------------------
## RealURL aktivieren
## -----------------------------------
config.tx_realurl_enable = 1

###################
# HTTP Cache
###################
config.sendCacheHeaders = 1

## -----------------------------------
## Sprache
## -----------------------------------

# Nicht übersetze Elemente verstecken
config.sys_language_mode = hideNonTranslated

# GET-Parameter für Sprache
config.linkVars = L
config.uniqueLinkVars = 1

# Deutsch / Hauptsprache
config.sys_language_uid = 0
config.language = de
config.locale_all = de_DE.UTF-8
page.config.htmlTag_langKey = de

[globalVar = GP:L = 1]
config.sys_language_uid = 1
config.language = de
config.locale_all = de_DE.UTF-8
page.config.htmlTag_langKey = de
[global]

## -----------------------------------
## Template
## -----------------------------------

page = PAGE
page.config.doctype = html5
page.bodyTagCObject = HTML
page.bodyTagCObject.value.field = pid
page.bodyTagCObject.value.wrap = <body id="p|">

## ------- base URL --------------------
config.baseURL = //pinneberg.freifunk.net/

config.noPageTitle = 2
page.headerData.10 = TEXT
page.headerData.10.field = title
page.headerData.10.noTrimWrap = | <title>| - Freifunk Pinneberg</title> |
page.headerData.10.insertData =  1

## ------ Facebook ---------------------
page.headerData.20 = TEXT
page.headerData.20.value = <meta property="og:image" content="https://pinneberg.freifunk.net/fileadmin/layout/ffpi/bilder/Facebook_preview.png" />

## ------ RSS Feed ---------------------
page.headerData.30 = TEXT
page.headerData.30.value = <link rel="alternate" type="application/rss+xml" title="Freifunk Pinneberg - News (RSS)" href="https://pinneberg.freifunk.net/news/?type=200" />

## ------- Mobile ----------------------
page.meta.viewport = width=device-width, initial-scale=1

## ------- SEO -------------------------
plugin.tq_seo.metaTags.robotsOdp = 0
plugin.tq_seo.metaTags.robotsYdir = 0
plugin.tq_seo.metaTags.publisher = Freifunk Pinneberg

## -------- Navigation -----------------
lib.navigation.10 = HMENU
lib.navigation.10 {

    entryLevel = 0

    #special = directory
    #special.value = -1 #{TSFE:page|pid}

    1 = TMENU
    1.wrap = <ul> | </ul>
    #1.expAll = 1
    1 {
        noBlur = 1
        NO {
          subst_elementUid = 1
          allWrap = <li id="link{elementUid}" class="first">| |*| <li id="link{elementUid}">| |*| <li id="link{elementUid}" class="last">|
          wrapItemAndSub = |</li>
          #ATagTitle.field = subtitle
        }
        ACT = 1
        ACT {
          subst_elementUid = 1
          allWrap = <li id="link{elementUid}" class="first active first_active">| |*| <li id="link{elementUid}" class="active">| |*| <li id="link{elementUid}" class="last active last_active">|
          wrapItemAndSub = |</li>
          #ATagTitle.field = subtitle
        }
    }
}

## -------- Footer Navigation -------
lib.footernavigation.10 = HMENU
lib.footernavigation.10 {

    entryLevel = 0

    special = directory
    special.value = 34 #{TSFE:page|pid}

    1 = TMENU
    1.wrap = <ul> | </ul>
    #1.expAll = 1
    1 {
        noBlur = 1
        NO {
          subst_elementUid = 1
          allWrap = <li id="link{elementUid}" class="first">| |*| <li id="link{elementUid}">| |*| <li id="link{elementUid}" class="last">|
          wrapItemAndSub = |</li>
        }
        ACT = 1
        ACT {
          subst_elementUid = 1
          allWrap = <li id="link{elementUid}" class="first active first_active">| |*| <li id="link{elementUid}" class="active">| |*| <li id="link{elementUid}" class="last active last_active">|
          wrapItemAndSub = |</li>
        }
    }
}

## ---------- Analytics --------
page.footerData.50 = TEXT
page.footerData.50.value (
<!-- Piwik -->
<script type="text/javascript">
  var _paq = _paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="/piwik/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', 1]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript><p><img src="/piwik/piwik.php?idsite=1" style="border:0;" alt="" /></p></noscript>
<!-- End Piwik Code -->
)


