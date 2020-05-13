// Import nmp JQuery
import $ from 'jquery';

$(document).ready(function () {
    console.log('JS Ready!');

    //Init Handlebars
    var source = $('#template__results').html();
    var template = Handlebars.compile(source);

});