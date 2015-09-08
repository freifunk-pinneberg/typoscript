/*
 file: template.ts
 info: typoscript Code Beispiel für eine RSS Feed Ausgabe mit einem (Menü dieser Seiten) Content Element
 project: www.thefox.ch
 hinweis: für einen link auf www.thefox.ch bin ich dir dankbar
*/

# rss template erstellen
temp.rssTemplate = COA
temp.rssTemplate {

	1 = LOAD_REGISTER
	1 {
	# config
		# type, welche auf URL passt : index.php?type=200
		type = 200
		# hier die ID von Seite angeben, bei welcher das Content Element zu finden ist
		pageid = 68
		# hier die ID von Content Element angeben
		contentid = 166

		title = Freifunk Pinneberg News
		description = Neues aus dem Pinneberger Freifunk Netz.
		copyright = CC-BY-SA - Freifunk Pinneberg
		# sprache festlegen
		language = de

		# icon angaben
		image_width = 128
		image_height = 128
		image_description = Freifunk Pinneberg
		image_url = fileadmin/layout/ffpi/bilder/Facebook_preview.png

		# default wert, wenn es nicht bei den eigenschaften der seite (item) hinterlegt ist
		item_author = Freifunk Pinneberg
		item_author_email = service@pinneberg.freifunk.net
	}

	10 = TEMPLATE
	10 {

		# template einbinden
		template = FILE
		template.file = fileadmin/layout/ffpi/templates/rss.xml

		marks {

			RSS_title = TEXT
			RSS_title.data = register:title

			RSS_description = TEXT
			RSS_description.data = register:description

			RSS_link = TEXT
			RSS_link.value = {getIndpEnv:TYPO3_SITE_URL}news/?type={register:type}
			RSS_link.insertData = 1

			RSS_copyright = TEXT
			RSS_copyright.data = register:copyright

			RSS_language = TEXT
			RSS_language.data = register:language

			RSS_image_url = TEXT
			RSS_image_url.value = {getIndpEnv:TYPO3_SITE_URL}{register:image_url}
			RSS_image_url.insertData = 1

			RSS_image_link = TEXT
			RSS_image_link.value = {getIndpEnv:TYPO3_SITE_URL}index.php?type={register:type}
			RSS_image_link.insertData = 1

			RSS_image_width = TEXT
			RSS_image_width.data = register:image_width

			RSS_image_height = TEXT
			RSS_image_height.data = register:image_height

			RSS_image_description = TEXT
			RSS_image_description.data = register:image_description

			RSS_pubDate = TEXT
			RSS_pubDate {
				data = register:SYS_LASTCHANGED
				date = r
			}

			RSS_lastBuildDate = TEXT
			RSS_lastBuildDate {
				data = register:SYS_LASTCHANGED
				date = r
			}

			RSS_ITEMS = COA
			RSS_ITEMS {
				1 = LOAD_REGISTER
				1 {
					# auslesen den Content Elements (Menü dieser Seiten)
					pages.cObject = CONTENT
					pages.cObject {
						table = tt_content

						select {
							pidInList.dataWrap = {register:pageid}
							where.dataWrap = uid= {register:contentid}
							languageField = sys_language_uid
							insertData = 1
						}

						renderObj = TEXT
						renderObj {
							field = pages
						}
					}
				}

				# zum erstellen der ITEMS wird ein HMENU verwendet
				10 = HMENU
				10 {
					special = directory 
					special.value.data = register:pages
					wrap = |
					1 = TMENU
					1 {
						target = {$PAGE_TARGET}
						noBlur = 1

						NO {
							doNotLinkIt = 1
							doNotShowLink = 1
							stdWrap2 {
								# diverese informationen aufbereiten
								cObject = COA
								cObject {
									1 = LOAD_REGISTER
									1 {
										title {
											field = title
											htmlSpecialChars = 1
										}

										subtitle {
											field = subtitle
											noTrimWrap = | : | |
											required = 1
											htmlSpecialChars = 1
										}

										link_and_guid {
											typolink {
												parameter.field = uid
												returnLast = url
											}
											wrap = {getIndpEnv:TYPO3_SITE_URL}|
											insertData = 1
										}

										guid.cObject = TEXT
										guid.cObject {
											value = {getIndpEnv:TYPO3_SITE_URL}index.php?id={field:uid}
											insertData = 1
										}

										page_author_email {
											data = field:author_email // register:item_author_email
										}
									}

									10 = TEXT
									10 {
										data = field:abstract // field:description
										wrap = <description><![CDATA[|]]></description>
										required = 1
										htmlSpecialChars = 1
										# output kosmetik
										prepend = TEXT
										prepend.char = 10
										append = TEXT
										append.char = 10
									}

									15 = TEXT
									15 {
										data = field:author // register:item_author
										wrap = <author>{register:page_author_email} (|)</author>
										insertData = 1
										required = 1
										# output kosmetik
										append = TEXT
										append.char = 10
									}

									40 = TEXT
									40 {
										wrap = <pubDate>|</pubDate>
										data = field:lastUpdated // field:tstamp // field:crdate
										date = r
										# output kosmetik
										append = TEXT
										append.char = 10
									}

								}
							}

							allWrap (
							<item>
								<title>{register:title}{register:subtitle}</title>
								<link>{register:link_and_guid}</link>
								<guid>{register:guid}</guid>
								|
							</item>
							)
							allWrap.insertData = 1
						}

					}
				}
			}
		}

	}
}
