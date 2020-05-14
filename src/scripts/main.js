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
    var source = $('#template__why__teambit').html();
    var template = Handlebars.compile(source);

    //Array con oggetti contenenti info del blocco
    var whyTeambitBlocksInfos = [
        {
            title: 'Traditional people processes lead to disengagement and turnover.',
            img1: 'dist/assets/img/hardcore.png',
            text1: 'They are hardcore,<br> formal and disconnected',
            img2: 'dist/assets/img/nofeedback.png',
            text2: 'They don\'t encourage<br> regular feedback',
            img3: 'dist/assets/img/notsafe.png',
            text3: 'They don\'t make it<br> safe to speak up',
            img4: 'dist/assets/img/before.png'
        },

        {
            title: 'It doesn\'t have to be like that. Teambit is a modern solution that teammates love.',
            img1: 'dist/assets/img/lightweight.png',
            text1: 'It\'s lightweight<br> fun and interconnected',
            img2: 'dist/assets/img/feedbacksuggestions.png',
            text2: 'It encourages regular<br> feedback with contextual requests',
            img3: 'dist/assets/img/safe.png',
            text3: 'It creates a safe<br> environment for dialog',
            img4: 'dist/assets/img/after.png'
        }
    ];

    for(var i = 0; i < whyTeambitBlocksInfos.length; i++) {
        var infoBlock = whyTeambitBlocksInfos[i];
        var addBlock = template(infoBlock);
        $('.why__teambit').append(addBlock);
    }
});