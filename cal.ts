
plugin.tx_cal_controller {

pidList = 80

rss.eventViewPID = 81
rss.xmlTitle = Freifunk Pinneberg - Kalender
rss.xmlDesc = Aktuelle Termine
rss.xmlLang = de
rss.xmlLimit = 100
rss.range = 90

emailOrganisation = Freifunk Pinneberg

view.ics.eventUidPrefix = pinneberg.freifunk.net

view.week {
dateFormatWeekList = %a, %d.%m.%y
dateFormatDay = %a, %d.%m.%y
timeFormatDay = %H:%M
dateFormatWeek = %d. %B %Y
timeFormatWeek = %H:%M
eventStartTimeFormatWeek = %H:%M
eventEndTimeFormatWeek = %H:%M
}

view.day {
dateFormatWeekList = %A, %d.%B %Y
dateFormatDay = %a, %d.%m.%y
timeFormatDay = %H:%M
dateFormatWeek = %d.%B
timeFormatWeek = %H:%M
eventStartTimeFormatWeek = %H:%M
eventEndTimeFormatWeek = %H:%M
}

view.event {
dateFormat = %d.%B %Y
timeFormat = %H:%M Uhr
}

view.list {
dateFormatList = %a, %d.%m.%y
timeFormatList = %H:%M Uhr
}

view.month {
dateFormatMonth = %B %Y
}

view.other {
dateFormatWeekJump = %d.%b
dateFormatMonthJump = %B %Y
}
