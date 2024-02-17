$(document).ready(function () {

    //change active class for .catalog_item
    $('div.category_wrapper').on('click', 'div:not(div.category_item_active)', function () {
        $(this)
            .addClass('category_item_active').siblings().removeClass('category_item_active')
            .closest('section.practice').find('div.practice_wrapper').removeClass('practice_wrapper_active').eq($(this).index()).addClass('practice_wrapper_active');
    });
    
});