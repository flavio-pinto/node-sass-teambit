/**
 * Ricreare la landing: https://teambit.io/
 * Utilizzo di SASS, utilizzando tutte le best practice imparate: nesting, &, variabili, file parziali e iniziamo a giocare con i mixin
 * Utilizzare fontawesome per le icone. Per ora non includiamolo con npm ma usiamo il metodo di inserimento classico (ad esempio cdn). Stessa cosa se vogliamo inserire jQuery.
 * Le immagini della landing le trovate allegate sotto.
 */

// Import nmp JQuery
import $ from 'jquery';

$(document).ready(function () {
    console.log('JS Ready!');

    //Init Handlebars
    var source = $('#template__results').html();
    var template = Handlebars.compile(source);
});