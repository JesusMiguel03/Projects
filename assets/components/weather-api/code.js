function convertTZ(date, tzString) {
    const temp = new Date((date).toLocaleString("en-US", {timeZone: tzString}))
    let weekdays = [' Sunday',' Monday',' Tuesday',' Wednesday',' Thursday',' Friday',' Saturday']
    let day = (String(temp)).slice(0,3)
    let num = (String(temp)).slice(8,11)

    if (day == 'Sun') day = weekdays[0]
    else if (day == 'Mon') day = weekdays[1]
    else if (day == 'Tue') day = weekdays[2]
    else if (day == 'Wed') day = weekdays[3]
    else if (day == 'Thu') day = weekdays[4]
    else if (day == 'Fri') day = weekdays[5]
    else if (day == 'Sat') day = weekdays[6]
    return  day + " " + num
}
var date = new Date()

function apiResult(event) {
    var utc = new Date().toJSON().slice(0, 10)
    const API_URL = `http://api.weatherapi.com/v1/history.json?key=8ed7d66b42f442d592e140349222907&q=${this.value}&dt=${utc}`

    fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
        const location = res.location
        const fore = res.forecast.forecastday[0]
        const code = "https:"
        const words = document.querySelectorAll('.day')
        words.forEach(word => word.innerText = convertTZ(date, location.tz_id))

        document.getElementById('country').innerText = location.country
        document.getElementById('capital').innerText = `Capital: ${location.name}.`
        document.getElementById('country').classList.replace('hidden','display')
        document.getElementById('region').innerText = `Region: ${location.region}.`
        document.getElementById('ubication').innerText =  `Timezone: ${location.tz_id}.`
        document.getElementById('textLocalTime').innerText = `LocalTime: ${location.localtime}.`
        document.getElementById('lat').innerText = `Latitude: ${location.lat}`
        document.getElementById('lon').innerText = `Longitude: ${location.lon}`

        document.getElementById('sunrise').innerText = fore.astro.sunrise
        document.getElementById('sunset').innerText = fore.astro.sunset
        document.getElementById('moonrise').innerText = fore.astro.moonrise
        document.getElementById('moonset').innerText = fore.astro.moonset

        document.getElementById('maxC').innerText = fore.day.maxtemp_c + " °C"
        document.getElementById('minC').innerText = fore.day.mintemp_c + " °C"
        document.getElementById('avgC').innerText = fore.day.avgtemp_c + " °C"
        document.getElementById('precip').innerText = fore.day.totalprecip_mm + " mm"
        document.getElementById('windKph').innerText = fore.day.maxwind_kph + " Km/h"

        /* table */
        /* hour */
        document.getElementById('hour-00').innerText = (fore.hour[0].time ).slice(11, 17) + " am"
        document.getElementById('hour-3am').innerText = (fore.hour[3].time ).slice(11, 17) + " am"
        document.getElementById('hour-6am').innerText = (fore.hour[6].time ).slice(11, 17) + " am"
        document.getElementById('hour-9am').innerText = (fore.hour[9].time ).slice(11, 17) + " am"
        document.getElementById('hour-12pm').innerText = (fore.hour[12].time ).slice(11, 17) + " pm"
        document.getElementById('hour-3pm').innerText = (parseInt((fore.hour[15].time ).slice(11, 17))-12) + ":00 pm"
        document.getElementById('hour-6pm').innerText = (parseInt((fore.hour[18].time ).slice(11, 17))-12) + ":00 pm"
        document.getElementById('hour-9pm').innerText = (parseInt((fore.hour[21].time ).slice(11, 17))-12) + ":00 pm"

        /* icon */
        document.getElementById('icon-00').src = code + fore.hour[0].condition.icon
        document.getElementById('icon-3am').src = code + fore.hour[3].condition.icon
        document.getElementById('icon-6am').src = code + fore.hour[6].condition.icon
        document.getElementById('icon-9am').src = code + fore.hour[9].condition.icon
        document.getElementById('icon-12pm').src = code + fore.hour[12].condition.icon
        document.getElementById('icon-3pm').src = code + fore.hour[15].condition.icon
        document.getElementById('icon-6pm').src = code + fore.hour[18].condition.icon
        document.getElementById('icon-9pm').src = code + fore.hour[21].condition.icon

        /* temp */
        document.getElementById('temp-00').innerText = fore.hour[0].temp_c + " °C"
        document.getElementById('temp-3am').innerText = fore.hour[3].temp_c + " °C"
        document.getElementById('temp-6am').innerText = fore.hour[6].temp_c + " °C"
        document.getElementById('temp-9am').innerText = fore.hour[9].temp_c + " °C"
        document.getElementById('temp-12pm').innerText = fore.hour[12].temp_c + " °C"
        document.getElementById('temp-3pm').innerText = fore.hour[15].temp_c + " °C"
        document.getElementById('temp-6pm').innerText = fore.hour[18].temp_c + " °C"
        document.getElementById('temp-9pm').innerText = fore.hour[21].temp_c + " °C"

        /* wind */
        document.getElementById('wind-00').innerText = fore.hour[0].wind_kph + " kmph"
        document.getElementById('wind-3am').innerText = fore.hour[3].wind_kph + " kmph"
        document.getElementById('wind-6am').innerText = fore.hour[6].wind_kph + " kmph"
        document.getElementById('wind-9am').innerText = fore.hour[9].wind_kph + " kmph"
        document.getElementById('wind-12pm').innerText = fore.hour[12].wind_kph + " kmph"
        document.getElementById('wind-3pm').innerText = fore.hour[15].wind_kph + " kmph"
        document.getElementById('wind-6pm').innerText = fore.hour[18].wind_kph + " kmph"
        document.getElementById('wind-9pm').innerText = fore.hour[21].wind_kph + " kmph"

        /* precip */
        document.getElementById('precip-00').innerText = fore.hour[0].precip_mm + " mm"
        document.getElementById('precip-3am').innerText = fore.hour[3].precip_mm + " mm"
        document.getElementById('precip-6am').innerText = fore.hour[6].precip_mm + " mm"
        document.getElementById('precip-9am').innerText = fore.hour[9].precip_mm + " mm"
        document.getElementById('precip-12pm').innerText = fore.hour[12].precip_mm + " mm"
        document.getElementById('precip-3pm').innerText = fore.hour[15].precip_mm + " mm"
        document.getElementById('precip-6pm').innerText = fore.hour[18].precip_mm + " mm"
        document.getElementById('precip-9pm').innerText = fore.hour[21].precip_mm + " mm"

        /* cloud */
        document.getElementById('cloud-00').innerText = fore.hour[0].cloud + "%"
        document.getElementById('cloud-3am').innerText = fore.hour[3].cloud + "%"
        document.getElementById('cloud-6am').innerText = fore.hour[6].cloud + "%"
        document.getElementById('cloud-9am').innerText = fore.hour[9].cloud + "%"
        document.getElementById('cloud-12pm').innerText = fore.hour[12].cloud + "%"
        document.getElementById('cloud-3pm').innerText = fore.hour[15].cloud + "%"
        document.getElementById('cloud-6pm').innerText = fore.hour[18].cloud + "%"
        document.getElementById('cloud-9pm').innerText = fore.hour[21].cloud + "%"

        /* humidity */
        document.getElementById('humidity-00').innerText = fore.hour[0].humidity + "%"
        document.getElementById('humidity-3am').innerText = fore.hour[3].humidity + "%"
        document.getElementById('humidity-6am').innerText = fore.hour[6].humidity + "%"
        document.getElementById('humidity-9am').innerText = fore.hour[9].humidity + "%"
        document.getElementById('humidity-12pm').innerText = fore.hour[12].humidity + "%"
        document.getElementById('humidity-3pm').innerText = fore.hour[15].humidity + "%"
        document.getElementById('humidity-6pm').innerText = fore.hour[18].humidity + "%"
        document.getElementById('humidity-9pm').innerText = fore.hour[21].humidity + "%"

        /* pressure */
        document.getElementById('pressure-00').innerText = fore.hour[0].pressure_mb + " mb"
        document.getElementById('pressure-3am').innerText = fore.hour[3].pressure_mb + " mb"
        document.getElementById('pressure-6am').innerText = fore.hour[6].pressure_mb + " mb"
        document.getElementById('pressure-9am').innerText = fore.hour[9].pressure_mb + " mb"
        document.getElementById('pressure-12pm').innerText = fore.hour[12].pressure_mb + " mb"
        document.getElementById('pressure-3pm').innerText = fore.hour[15].pressure_mb + " mb"
        document.getElementById('pressure-6pm').innerText = fore.hour[18].pressure_mb + " mb"
        document.getElementById('pressure-9pm').innerText = fore.hour[21].pressure_mb + " mb"
    })
}

document.getElementById('demo-country-picker').addEventListener('change', apiResult)