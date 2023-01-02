// active mobile menu on click bars icon 
let bars = jQuery('.mobile-menu-icon');
let mobileMenu = jQuery('.header-area .menu-area');
bars.click(function() {
    mobileMenu.slideToggle();
    jQuery('body').toggleClass("no-scroll");
})


function menubarResize() {
    // Media screen max width 991px 
    if (matchMedia('only screen and (max-width: 991px)').matches) {
        // append mobile menu on header
        jQuery('.header-area .header').append(mobileMenu);
    }
    // Media screen max width 991px 
    if (matchMedia('only screen and (min-width: 992px)').matches) {
        // append mobile menu on header
        jQuery('.header-area .header-right-area').prepend(mobileMenu);
        mobileMenu.removeAttr('style');
    }
}

menubarResize();
jQuery(window).resize(function() {
    menubarResize()
})


// ben select option
let benSelect = jQuery('.ben-dropdown select');
benSelect.click(function() {
    jQuery(benSelect).parent().toggleClass('active');
})

jQuery(document).click(function(e) {
    if (!e.target.closest('.ben-dropdown')) {
        benSelect.parent().removeClass('active');
    }
})

// hide all ben item except first one
if (matchMedia('only screen and (max-width: 991px)').matches) {
    jQuery('.beneficiaries-items .beneficiaries-item:not(:first-child)').hide()
    benSelect.change(function() {
        let value = jQuery(this).val();
        jQuery('.beneficiaries-items .beneficiaries-item').hide()
        jQuery(`.beneficiaries-items .beneficiaries-item.${value}`).show()
    })
}

// ben popup show on click button
const benReadMoreBtn = jQuery('.beneficiaries-page .ben-btn');
const benCloseBtn = jQuery('.ben-popup .close');
const benPopup = jQuery('.ben-popup');

benReadMoreBtn.click(function() {
    benPopup.show().addClass('active').css("display", "flex");
    jQuery('body').addClass("no-scroll");
})

benCloseBtn.click(function() {
    benPopup.hide().removeClass('active');
    jQuery('body').removeClass("no-scroll");
})