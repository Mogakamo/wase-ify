(function() {

    var __hs_cta_json = {"css":"a#cta_button_2643334_new {\n    -webkit-font-smoothing: antialiased !important;\ncursor: pointer !important;\n-moz-user-select: none !important;\n-webkit-user-select: none !important;\n-o-user-select: none !important;\nuser-select: none !important;\ndisplay: inline-block !important;\nfont-weight: normal !important;\ntext-align: center !important;\ntext-decoration: none !important;\n-moz-transition: all .4s ease !important;\n-webkit-transition: all .4s ease !important;\n-o-transition: all .4s ease !important;\nbackground: rgb(53,116,227) !important;\nborder-radius: 6px !important;\nborder-width: 0px !important;\ncolor: rgb(255,255,255) !important;\nfont-family: sans-serif !important;\nheight: auto !important;\ntransition: all .4s ease !important;\npadding: 6px 18px !important;\ntext-shadow: none !important;\nwidth: auto !important;\nfont-size: 24px !important;\nline-height: 1.5em !important;\n\n    \n  }\n\na#cta_button_2643334_new:hover {\nbackground: rgb(58,127,249) !important;\ncolor: rgb(255,255,255) !important;\n}\n\na#cta_button_2643334_new:active, #cta_button_2643334_new:active:hover {\nbackground: rgb(42,92,181) !important;\ncolor: rgb(244,244,244) !important;\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_2643334_f32bf756-425b-4155-95a9-d5f75008963f\" class=\"cta_button\" href=\"https://blog.apruve.com/cs/c/?cta_guid=f32bf756-425b-4155-95a9-d5f75008963f&signature=AAH58kEMMEKjNW7PwwgZ-Dm86DG2fhXyVw&placement_guid=8bd70bef-3037-4ad9-ab29-c2b833cb82d4&click=68610f4d-d5dd-47f3-889f-5ea4bcb2dfcb&hsutk=c7a00000144616601df001753a0699c9&canon=https%3A%2F%2Fblog.apruve.com%2F15-must-have-ecommerce-api-features-for-your-ecommerce-site&utm_referrer=https%3A%2F%2Fwww.google.com%2F&portal_id=2643334&redirect_url=APefjpHfqI_KlC1Ybf2gkupzphGBEY692UYphISPEygz71GAHt2zXW23wLU2LvyB4sDY9UJfxrju3Y3MP3dXNmsTG6KF_7IhgN0eRFqewMTRR-MHQhc_mrNFZ2CZm2GgfhNeJUzPHCtVJq0owkcBZQnEs7Fd-BNsaw\"  cta_dest_link=\"https://get.apruve.com/payments/?utm_source=blog\"><img id=\"hs-cta-img-8bd70bef-3037-4ad9-ab29-c2b833cb82d4\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Payments built Around Your Business: Create a customizable B2B digital payment program with Apruve\" height=\"250\" width=\"970\" src=\"/hs-fs/hub/2643334/hub_generated/resized/311589ef-59b6-4db1-a318-ff057de6865f.jpeg\" /></a>","is_image":true,"placement_element_class":"hs-cta-8bd70bef-3037-4ad9-ab29-c2b833cb82d4","raw_html":"<a id=\"cta_button_2643334_f32bf756-425b-4155-95a9-d5f75008963f\" class=\"cta_button \" href=\"https://blog.apruve.com/cs/c/?cta_guid=f32bf756-425b-4155-95a9-d5f75008963f&signature=AAH58kEMMEKjNW7PwwgZ-Dm86DG2fhXyVw&placement_guid=8bd70bef-3037-4ad9-ab29-c2b833cb82d4&click=68610f4d-d5dd-47f3-889f-5ea4bcb2dfcb&hsutk=c7a00000144616601df001753a0699c9&canon=https%3A%2F%2Fblog.apruve.com%2F15-must-have-ecommerce-api-features-for-your-ecommerce-site&utm_referrer=https%3A%2F%2Fwww.google.com%2F&portal_id=2643334&redirect_url=APefjpHfqI_KlC1Ybf2gkupzphGBEY692UYphISPEygz71GAHt2zXW23wLU2LvyB4sDY9UJfxrju3Y3MP3dXNmsTG6KF_7IhgN0eRFqewMTRR-MHQhc_mrNFZ2CZm2GgfhNeJUzPHCtVJq0owkcBZQnEs7Fd-BNsaw\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://get.apruve.com/payments/?utm_source=blog\" title=\"Payments built Around Your Business: Create a customizable B2B digital payment program with Apruve\">New call-to-action</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('8bd70bef-3037-4ad9-ab29-c2b833cb82d4');
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
    window._hsq.push(['trackCtaView', '8bd70bef-3037-4ad9-ab29-c2b833cb82d4', 'f32bf756-425b-4155-95a9-d5f75008963f']);
    

}());
