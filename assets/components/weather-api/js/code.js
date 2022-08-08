mobiscroll.setOptions({
    locale: mobiscroll.localeEs,   // Specify language like: locale: mobiscroll.localePl or omit setting to use default
    theme: 'ios',                  // Specify theme like: theme: 'ios' or omit setting to use default
    themeVariant: 'light'          // More info about themeVariant: https://docs.mobiscroll.com/5-17-2/javascript/select#opt-themeVariant
});

var inst = mobiscroll.select('#demo-country-picker', {
    display: 'anchored',           // Specify display mode like: display: 'bottom' or omit setting to use default
    filter: true,                  // More info about filter: https://docs.mobiscroll.com/5-17-2/javascript/select#opt-filter
    itemHeight: 40,                // More info about itemHeight: https://docs.mobiscroll.com/5-17-2/javascript/select#opt-itemHeight
    renderItem: function (item) {  // More info about renderItem: https://docs.mobiscroll.com/5-17-2/javascript/select#opt-renderItem
        return '<div class="md-country-picker-item">' +
            '<img class="md-country-picker-flag" src="https://img.mobiscroll.com/demos/flags/' + item.data.value + '.png" />' +
            item.display + '</div>';
    }
});

mobiscroll.util.http.getJson('https://trial.mobiscroll.com/content/countries.json', function (resp) {
    var countries = [];
    for (var i = 0; i < resp.length; ++i) {
        var country = resp[i];
        countries.push({ text: country.text, value: country.value });
    }
    inst.setOptions({ data: countries });
});