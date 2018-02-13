var Gritter = function () {

    $('#add-sticky').click(function () {

        var unique_id = $.gritter.add({
            title: 'This is a Sticky Notice!',
            text: 'Hover me to enable the Close Button. This note also contains a link example. Thank you so much to try Dashgum. Developed by <a href="#" style="color:#FFD777">Alvarez.is</a>.',
            image: 'assets/img/ui-sam.jpg',
            sticky: true,
            time: '',
            class_name: 'my-sticky-class'
        });
        setTimeout(function () {

            $.gritter.remove(unique_id, {
                fade: true,
                speed: 'slow'
            });

        }, 6000);

        return false;

    });
}();