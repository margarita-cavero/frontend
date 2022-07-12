export const aboutMeScrollMagic = () => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '.sticky1'
    })
        .setClassToggle('.aboutMe', 'show')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky2'
    })
        .setClassToggle('.s', 'show2')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky3'
    })
        .setClassToggle('.s', 'show3')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky3'
    })
        .setClassToggle('.o', 'show4')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky4'
    })
        .setClassToggle('.o', 'show5')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky4'
    })
        .setClassToggle('.b', 'show6')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky5'
    })
        .setClassToggle('.b', 'show7')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky5'
    })
        .setClassToggle('.r', 'show8')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky6'
    })
        .setClassToggle('.r', 'show9')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky6'
    })
        .setClassToggle('.e', 'show10')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky7'
    })
        .setClassToggle('.e', 'show11')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky7'
    })
        .setClassToggle('.mi', 'show12')
        .addTo(controller);
};