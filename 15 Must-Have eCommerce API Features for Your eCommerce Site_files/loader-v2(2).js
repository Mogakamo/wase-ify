(function() {

    var __hs_cta_json = {"css":"a#cta_button_2643334_78427433-68df-4d4b-b656-b79e13bd8d02 {\n  cursor:pointer; \n}\na#cta_button_2643334_78427433-68df-4d4b-b656-b79e13bd8d02:hover {\n}\na#cta_button_2643334_78427433-68df-4d4b-b656-b79e13bd8d02:active, #cta_button_2643334_78427433-68df-4d4b-b656-b79e13bd8d02:active:hover {\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_2643334_78427433-68df-4d4b-b656-b79e13bd8d02\" class=\"cta_button\" href=\"https://blog.apruve.com/cs/c/?cta_guid=78427433-68df-4d4b-b656-b79e13bd8d02&signature=AAH58kEqN3rbffnxy8Z5guw4F5tAJsxVeg&placement_guid=f8804dbb-c068-405e-b64e-9631cf4e7152&click=26fe8f08-6313-422b-b1de-d60391d0a028&hsutk=c7a00000156e1443174501753a0699c9&canon=https%3A%2F%2Fblog.apruve.com%2F15-must-have-ecommerce-api-features-for-your-ecommerce-site&utm_referrer=https%3A%2F%2Fwww.google.com%2F&portal_id=2643334&redirect_url=APefjpGYggHdfnRc1JX5UKae59oR9R9eWh1jvRQ_Uc4xImmfeMaLtpUbxnGN3YzSmRYxEv-BuED2X8UyHeQ_XAyksfN85e4O8ky9LqU9hrxyAJ16T3Y01Ur5sLwAzOCBiw0WCcGcEt3C8lZDKXPcqSrvfJyjG_J0PQ\"  target=\"_blank\"  cta_dest_link=\"https://b2b.apruve.com/ecommerce-buyers-guide-for-distributors\"><img id=\"hs-cta-img-f8804dbb-c068-405e-b64e-9631cf4e7152\" class=\"hs-cta-img cta-primary\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Download\" src=\"https://cdn2.hubspot.net/hubshot/18/01/11/65752bc2-baa3-44d3-8f3e-d70c143296cd.png\" /></a>","is_image":false,"placement_element_class":"hs-cta-f8804dbb-c068-405e-b64e-9631cf4e7152","raw_html":"<a id=\"cta_button_2643334_78427433-68df-4d4b-b656-b79e13bd8d02\" class=\"cta_button cta-primary\" href=\"https://blog.apruve.com/cs/c/?cta_guid=78427433-68df-4d4b-b656-b79e13bd8d02&signature=AAH58kEqN3rbffnxy8Z5guw4F5tAJsxVeg&placement_guid=f8804dbb-c068-405e-b64e-9631cf4e7152&click=26fe8f08-6313-422b-b1de-d60391d0a028&hsutk=c7a00000156e1443174501753a0699c9&canon=https%3A%2F%2Fblog.apruve.com%2F15-must-have-ecommerce-api-features-for-your-ecommerce-site&utm_referrer=https%3A%2F%2Fwww.google.com%2F&portal_id=2643334&redirect_url=APefjpGYggHdfnRc1JX5UKae59oR9R9eWh1jvRQ_Uc4xImmfeMaLtpUbxnGN3YzSmRYxEv-BuED2X8UyHeQ_XAyksfN85e4O8ky9LqU9hrxyAJ16T3Y01Ur5sLwAzOCBiw0WCcGcEt3C8lZDKXPcqSrvfJyjG_J0PQ\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://b2b.apruve.com/ecommerce-buyers-guide-for-distributors\" title=\"Download\">Download</a>"};
    var __hs_cta = {};

    __hs_cta.drop = function() {
        var is_legacy = document.getElementById('hs-cta-ie-element') && true || false,
            html = __hs_cta_json.image_html,
            tags = __hs_cta.getTags(),
            is_image = __hs_cta_json.is_image,
            parent, _style;

        if (!is_legacy && !is_image) {
            parent = (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]);

            _style = document.createElement('style');
            parent.insertBefore(_style, parent.childNodes[0]);
            try {
                default_css = ".hs-cta-wrapper p, .hs-cta-wrapper div { margin: 0; padding: 0; }";
                cta_css = default_css + " " + __hs_cta_json.css;
                // http://blog.coderlab.us/2005/09/22/using-the-innertext-property-with-firefox/
                _style[document.all ? 'innerText' : 'textContent'] = cta_css;
            } catch (e) {
                // addressing an ie9 issue
                _style.styleSheet.cssText = cta_css;
            }
            
            html = __hs_cta_json.raw_html;

        }
         

        for (var i = 0; i < tags.length; ++i) {

            var tag = tags[i];
            var images = tag.getElementsByTagName('img');
            var cssText = "";
            var align = "";
            for (var j = 0; j < images.length; j++) {
                align = images[j].align;
                images[j].style.border = '';
                images[j].style.display = '';
                cssText = images[j].style.cssText;
            }

            if (align == "right") {
                tag.style.display = "block";
                tag.style.textAlign = "right";
            } else if (align == "middle") {
                tag.style.display = "block";
                tag.style.textAlign = "center";
            }

            tag.innerHTML = html.replace('/*hs-extra-styles*/', cssText);
            tag.style.visibility = 'visible';
            tag.setAttribute('data-hs-drop', 'true');
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('f8804dbb-c068-405e-b64e-9631cf4e7152');
        }

        return tags;
    };

    __hs_cta.getTags = function() {
        var allTags, check, i, divTags, spanTags,
            tags = [];
            if (document.getElementsByClassName) {
                allTags = document.getElementsByClassName(__hs_cta_json.placement_element_class);
                check = function(ele) {
                    return (ele.nodeName == 'DIV' || ele.nodeName == 'SPAN') && (!ele.getAttribute('data-hs-drop'));
                };
            } else {
                allTags = [];
                divTags = document.getElementsByTagName("div");
                spanTags = document.getElementsByTagName("span");
                for (i = 0; i < spanTags.length; i++) {
                    allTags.push(spanTags[i]);
                }
                for (i = 0; i < divTags.length; i++) {
                    allTags.push(divTags[i]);
                }

                check = function(ele) {
                    return (ele.className.indexOf(__hs_cta_json.placement_element_class) > -1) && (!ele.getAttribute('data-hs-drop'));
                };
            }
            for (i = 0; i < allTags.length; ++i) {
                if (check(allTags[i])) {
                    tags.push(allTags[i]);
                }
            }
        return tags;
    };

    // need to do a slight timeout so IE has time to react
    setTimeout(__hs_cta.drop, 10);
    
    window._hsq = window._hsq || [];
    window._hsq.push(['trackCtaView', 'f8804dbb-c068-405e-b64e-9631cf4e7152', '78427433-68df-4d4b-b656-b79e13bd8d02']);
    

}());
