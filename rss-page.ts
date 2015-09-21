# rss feed erstellen
rss200 = PAGE
rss200 {
	typeNum = 200
	config {
		# keine header daten aus TYPO3
		disableAllHeaderCode = 1
		# type und charset anpassen
		additionalHeaders = Content-type:text/xml;charset=utf-8
		# nicht zwingend noetig...
		linkVars = L
		# seite darf nicht gecacht werden
		no_cache = 1
		# cleaning deaktivieren
		xhtml_cleaning = 0
		# kein adminpanel anzeigen
		admPanel = 0
	}

	# template einbinden
	10 < temp.rssTemplate
}