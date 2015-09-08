########################################
###                RTE               ###
########################################
RTE.classes >
RTE.classes := addToList(float-left, float-right)
RTE.classesAnchor >
#RTE.default.classesLinks >
RTE.default.buttons.link.properties.class.allowedClasses >

#Tags, die nicht mit einem zusätzlichen <p> Tag umgeben werden, sollen zur Liste hinzufügen:
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.encapsTagList := addToList(table,tr,td,div)
#<div> Tags sollen nicht in <p> Tags umgewandelt werden:
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.remapTag >

RTE.default {
  contentCSS = fileadmin/layout/ffpi/css/rte.css
  dontConvBRtoParagraph = 1
  # Klassen anzeigen, die keinem HTML-Tag zugeordnet sind
  # showTagFreeClasses = 1
  buttons.blockstyle.showTagFreeClasses = 1
  buttons.textstyle.showTagFreeClasses = 1
  
  # Formatblock neustruckturieren
  buttons.formatblock.orderItems = h3, h4, p
  
  # Buttons ausblenden
  hideButtons := addToList(underline, colors, textcolor, bgcolor, textindicator, emoticon, subscript, superscript, line, outdent, indent) 
  
  # classesAnchor >
  buttons.link.properties.class.allowedClasses >
  
  # Buttons einblenden
  showButtons := addToList(showmicrodata, link, html, removeformat, findreplace, insertcharacter, blockstyle, textstyle, formatblock, chMode, img, spellcheck)
  
  # Bilder
		#magic mode verbieten
		blindImageOptions = magic
  
  # Externe grafiken erlauben
	proc.dontFetchExtPictures = 1
	
	#spellchecker
	defaultContentLanguage = de
	buttons.spellcheck.enablePersonalDictionaries = 0
	buttons.spellcheck.dictionaries.items = de,en
	buttons.spellcheck.dictionaries.restrictToItems = de,en
  
  # Keine Schriften
  # hideFontFaces = *
  buttons.fontstyle.removeItems = *
  # hideFontSizes = *
  buttons.fontsize.removeItems = *

  # Copy Paste Formatierungen löschen
  enableWordClean = 1
  
  # Entfernt ein <br>, das am Anfang eines Blockelementes steht.
  removeTrailingBR = 1
  
  # Überflüssige Tags
  removeTags := addToList(font, head, html, center, body, style, script, iframe, hr)
  allowTags := addToList(span, br, meta, img)
  allowTagsOutside := img, dl, h1, h2, h3, h4, h5, meta
   
  # Tabellen entfernen
  #hideTableOperationsInToolbar = 1
  
  # Microdata attributes
  allowedAttributes := addToList(itemscope, itemtype, itemprop, content, rel)
  
  #Nur stink normale Links
  buttons.link.targetSelector.disabled = 1
  buttons.link.popupSelector.disabled = 1
}
