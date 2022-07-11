export const openImageScrollMagic = () => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '.riendo',
    })
        .setClassToggle('.riendo', 'show')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky'
    })
        .setClassToggle('.riendo', 'show2')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sticky3'
    })
        .setClassToggle('.riendo', 'show3')
        .addTo(controller);
};