export const titleCompaniesScrollMagic = () => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '.title'
    })
        .setClassToggle('.title', 'show')
        .addTo(controller);
}