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

    //Init Handlebars Why Teambit Template
    var source = $('#template__why-teambit').html();
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
        $('.why-teambit').prepend(addBlock);
    }

    //Init Handlebars Features Block
    var source = $('#template__features__block').html();
    var template = Handlebars.compile(source);

    //Array features
    var features = $('.features');
    var arrayFeatures = [
        {
            imgBig: 'dist/assets/img/employee-feedback.jpg',
            title: 'Feedback to help teammates improve',
            paragraph: 'Empower your teammates to know in real time what they are doing well and what they need to improve.',
            img: 'dist/assets/img/communication.jpg'
        },
        {
            imgBig: 'dist/assets/img/employee-survey.jpg',
            title: 'Surveys to help the team be better',
            paragraph: 'Get real-time insights into your team with research-backed, lightweight and regular surveys.',
            img: 'dist/assets/img/insights.jpg'
        },
        {
            imgBig: 'dist/assets/img/performance-review.jpg',
            title: 'Reviews to help teammates get a fair evaluation',
            paragraph: 'Make better compensation and promotion decisions with objective and quick performance reviews.',
            img: 'dist/assets/img/review.jpg'
        },
        {
            imgBig: 'dist/assets/img/employee-recognition.jpg',
            title: 'Praise to help teammates feel valued',
            paragraph: 'Make it a habit to recognize and praise people who do great work.',
            img: 'dist/assets/img/recognition.jpg'
        }
    ];

    //Ciclo append features
    for(var i = 0; i < arrayFeatures.length; i++){
        var feature = arrayFeatures[i];
        var output = template(feature);
        features.append(output);
    }

    //Mouseenter dropdown
    var dropdownNav = $('.w-dropdown');
    var dropdownMenu = $('.header__nav__menu__list__item__dropdown');

    dropdownNav.mouseenter(function() {
        dropdownMenu.show();
    });
    dropdownNav.mouseleave(function() {
        dropdownMenu.hide();
    });
});

