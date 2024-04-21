$(document).ready(function () {
    $(".passwordVisibility").change(function () { 
        if(this.checked) {
            $(".password").prop('type', 'text');
        }else {
            $(".password").prop('type', 'password');
        }
    });
});