# Einstellungen für das Kopieren und Anlegen von Seiten
##################
TCEMAIN.table.pages {
	disablePrependAtCopy = 1
	disableHideAtCopy = 1
}
TCEMAIN.table.tt_content {
	disablePrependAtCopy = 1
	disableHideAtCopy = 1
}

# Setzen der Seitenbaumrechte per TypoScript
TCEMAIN {
	# Besitzergruppe festlegen (ID der Gruppe „Seitenbaumrechte“):
	# permissions.groupid = 1
	permissions.groupid = 1
}

# Überflüssige Felder ausblenden
TCEFORM.tt_content {
		#header.disabled = 1
		subheader.disabled = 1
		header_link.disabled = 1
		header_layout.disabled = 1
		header_position.disabled = 1
		text_align.disabled = 1
		date.disabled = 1
		spaceBefore.disabled = 1
		spaceAfter.disabled = 1
		section_frame.disabled = 1
}

# Inhalt der Typ Select box bei content Elementen
	TCEFORM.tt_content {
		layout{
			altLabels{
				0 = Normales Element
				1 = Große Box
				2 = Kleine Box
			}
			removeItems = 3,4,5,6,7,8,9,10
		}
	}

mod.SHARED {
	defaultLanguageLabel = Default (German)
	defaultLanguageFlag = de.gif # zu finden unter /typo3/gfx/flags/
}