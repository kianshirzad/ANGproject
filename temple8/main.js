    $("#check").change(function() {
        if(this.checked) {
            $("header").css({ "height": "97vh" });
            $("#MobNavItems").show();
        }else{
            $("header").css({ "height": "80px"});
            $("#MobNavItems").hide();
        }
    });