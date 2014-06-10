(function(){
  var app = angular.module('locations', []);
  
  app.controller('geoData', function(){
    this.markers = markers;
  });
  
  app.controller('SelectController', function(){
    this.item = markers[0];
    this.select = function(item){
      this.item = item;
      var coord = [item.geometry.location.lat, item.geometry.location.lng];
      map.setView(coord);
      L.marker(coord).addTo(map);
    };
  });
  
  var markers = [
    {
      "name": "Los Angeles", 
      "reference": "CoQBfwAAADrOG2BjdQhkPNGdx7qvwf-_0giLH7MQ1BikB9BL3Qf2FgbUZpxLS9o8KYLwZV-1P8exQL_D3ZMF_TMCaVENq_ToM1Hysta-j4vC3G0mpG_By65irG4WuH9yLLJDoZSHz4V9rXtqFHSnypeHdIuu3I7_kzTvdw7byLBEEwFqnWCoEhAuZGySxzOaf2WB50vgsi1cGhTQBHVIqqR7HUwHatNZG6qyKI4Wcw", 
      "geometry": {
        "location": {
          "lat": 34.0522342, 
          "lng": -118.2436849
        }, 
        "viewport": {
          "northeast": {
            "lat": 34.3373061, 
            "lng": -118.1552891
          }, 
          "southwest": {
            "lat": 33.7036917, 
            "lng": -118.6681759
          }
        }
      }, 
      "vicinity": "Los Angeles", 
      "id": "7f7b7d8118ae8db8ed3f541159ac928c484d12ad", 
      "types": [
        "locality", 
        "political"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png"
    }, 
    {
      "rating": 4.5, 
      "name": "California Institute of Technology", 
      "reference": "CpQBgwAAAFIm6DvISDOjF0Oxuwrn00qEVq3zfagq9NVWt9vnMdVrC_LcruHw4IpWJkDd0Pn0TjGIqwafZQsCFBjE_oFPWZ2W768zX6btmTo7OGc3hq4NM8KmnF0vJScWB0t87zL-AW-P_Q5BDklq05wxrFhLp4V-gttImfw8N-0VGQj1KhzuHHMCWoqKzFWlcpbRP3exuBIQlizAmq7D6Wme7FMnE4wPwBoUVe0FTLCQ0R0CHVchla-rp_PaG6Q", 
      "geometry": {
        "location": {
          "lat": 34.137658, 
          "lng": -118.125269
        }
      }, 
      "vicinity": "1200 E California Blvd, Pasadena", 
      "photos": [
        {
          "photo_reference": "CnRqAAAAO1xQzPOcFNgyBf_fvk1MJ2h0hjQ0merRFMM9ooFtroK6GhPju3kCxKBx9w6btZ5OkslEaLdSt19_IXhczUZ3NJIcC9MoTymBIQ9652kTM2DFsYTv_Y6wASGMTeomWKql9GYwssjkcDtLvBSylr26hhIQlRBAf1I0uyhtevgKkzosfRoUMTRErBOday2deEvPrn0rhTBk7_A", 
          "width": 1600, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 1200
        }
      ], 
      "id": "8491cd4545b7381fd446cc1efa18aed68cf8ffaf", 
      "types": [
        "university", 
        "school", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/university-71.png"
    }, 
    {
      "rating": 4.5, 
      "name": "Hollywood Bowl", 
      "reference": "CnRvAAAA1eQhdjrNb1M5OBxDXTFUWhXwH0e8rkZzYMm-hi8dt_oCPjnrmTMdiPdDGCiY9UBYjQxjFHg3OZ9EuDoBg3Phjvca_nXcFkHvi-P9REYlzbJidwhsX6XYLfJJUArX6JV9Y82qyvzndd5n0a7U803LhRIQWay_KLSXXWo5n-emA96V-BoUvSxF_nOEn19CirMLfUwq7nNBToY", 
      "price_level": 3, 
      "geometry": {
        "location": {
          "lat": 34.112224, 
          "lng": -118.339128
        }
      }, 
      "vicinity": "2301 N Highland Ave, Los Angeles", 
      "photos": [
        {
          "photo_reference": "CnRnAAAAwIpZOksVAt2FH0mNJeC_bVY7ogaWcc4p0Cs8AMOIDn9wvhHGtIE9VJtd3WQc3Wjytb6qTAG1wqWn8t3igOj18EL_TyhuaRWXvFnk8uhFCoZoHYWkU-O79lDmRsuFXr8At4fJB_vGliE4kWGXxZS93BIQYZcF7ljIa8rIrdLfEQCWORoUCTruRhOSqCcIWX0ICQxl39OcjCo", 
          "width": 2048, 
          "html_attributions": [], 
          "height": 1838
        }
      ], 
      "id": "9e65272dbe3ce21c709736220f68ed1f7eddde5a", 
      "types": [
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png"
    }, 
    {
      "rating": 3.5, 
      "name": "Los Angeles International Airport", 
      "reference": "CpQBggAAAN-Ft__kmAxM9adbMCiBhEbt9II_tElBcDc009Xpob4D2BH9EjKQhV3KgJcaslNEQg-IN3TPqWOfArtT4G_Sr_k-DE6fdD7Tmoq7zmyjhG4U7J_oiY4nb3F9RsZXYhcFDMZLbnK_kmVdrxwO394ppxViTjxGH2Ke0tqn5cwlEztCG617_twGqNYz34n6vveNuBIQmK_NWbO-YWgwgOPBY-StXxoUIbMZII6sthCS4KGHQJoBZmaK7Eg", 
      "geometry": {
        "location": {
          "lat": 33.941589, 
          "lng": -118.40853
        }
      }, 
      "vicinity": "1 World Way, Los Angeles", 
      "photos": [
        {
          "photo_reference": "CpQBgwAAAIfeYqxtMi7xCZRnCbKCpZs-EOADapnLP81lf0pUQPxXnVHiuabRk7cmFxgZFJ9WYG5uJOxa0YKkdPUuVRCY_k23cf-G7-pr-b1OQrRJVgwOQRxrcSeiVOWwA3ReJoRsAwzedbFmc8-JZY4xGVY4eabsvQ4l_xxTypJDNCigiKpqsnsLjJJMMpCWWD-SC0aXPRIQm9zyQ1yle3O2lV7r3pbxeBoUgCDFC3qHtvyKzeKy3-8QZ63CHLE", 
          "width": 560, 
          "html_attributions": [], 
          "height": 420
        }
      ], 
      "id": "2b1ad644609c86ef8156eeec48a4675d580224d9", 
      "types": [
        "airport", 
        "transit_station", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/airport-71.png"
    }, 
    {
      "rating": 4.4, 
      "name": "Paramount Pictures", 
      "reference": "CoQBdAAAAMtzwFN1s1dSq7Na1sPObHFEsWQlmLSedzAAF0HOKK8OLM6hJGvyoyAi4TU9p9EqQ_5PdjhJ9YPdPCvjESMbGTw9vQEEO72VXsRswVEYwMyqbvf20Hc7XeUpw2Lr_prglj1gro8WU4ou7tYYK-pEskmEF13JDYaCEm9Vzzd8CVq2EhD-hhuy1YLE3NFKTH2r871oGhQZhibxqt4iVmxcjTK6WEIzsqxgCQ", 
      "geometry": {
        "location": {
          "lat": 34.085369, 
          "lng": -118.318986
        }
      }, 
      "opening_hours": {
        "open_now": false
      }, 
      "vicinity": "5555 Melrose Ave, Los Angeles", 
      "photos": [
        {
          "photo_reference": "CnRoAAAAQuZ95C_tkgQhUcTkdHD1vBcCoMPwoJ_1g6rCRGLq43o1C_TzlHda-jMdw3yMd7VADH98dGK4xk_YRhyM4Hvn1ZIrRCZn7O0tYwwReH3mNVsA3MkW3TFHqE1BJcIUbXtMO2iwp9BhOEgJS60Y6dlc4RIQSCOTLz9HtWjD9hbz1LeBPRoUAXV32Y_PEjjKaIVqxDave-ldWPQ", 
          "width": 768, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 1024
        }
      ], 
      "id": "e5d2d1f5bfdf0002f15d32257358f93269a2a472", 
      "types": [
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png"
    }, 
    {
      "rating": 4.1, 
      "name": "The California State University, Office of the Chancellor", 
      "reference": "CqQBnAAAABDYoK7Mn2kZIdUgWkw2bKWEQ3-zbTcczcRijsklCYwhgz5bKIm51hJ7XzUSoWcrCHuEecB5gx-LAZTZBNo7TLNAd4caEDvrRv0o0mqLyXmqRVilCZQobbg1YjebPaPQBUAneDw5B5pX8vVVu2HeoXu89t7FFw73gERnqOIj8xko49G19GV7E0IUzBfOXa7A5C_UtVgEpR3iKqtJopCL0zkSEBn3X0iELRJvUir6EOTXYuYaFDxON9pMxenN1icOwlVOzetfVjrS", 
      "geometry": {
        "location": {
          "lat": 33.764235, 
          "lng": -118.201306
        }
      }, 
      "opening_hours": {
        "open_now": false
      }, 
      "vicinity": "401 Golden Shore, Long Beach", 
      "photos": [
        {
          "photo_reference": "CqQBnwAAAJb_tmM07dWPG-O9gSWqn_4w6Gg_6k11y9JNmuUXLj0mDiyN7u4TZvKzoD9wMqDzt09R661Ha6cEA5Kt_-CMas568MU3EATbHyjfygyOiPpRJb8H8gAotbXbS04yCCHyW8XyZT47wzIy-NipuV23kPdai6V_snAFCIglAB1HzrNm9gm2lQWPQ5y9vaEFwZ7TJ66mtVKA5gYBXhS9qhS9z_sSEAPKOVu0Cxbl-3_hX2bxh1UaFHO4wkfwl17lpIZMM4UliG6M6-5y", 
          "width": 2048, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 1365
        }
      ], 
      "id": "dbdb37cfaa5aa3d000b360c45f7222a59ce49ec9", 
      "types": [
        "university", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/university-71.png"
    }, 
    {
      "rating": 4.5, 
      "name": "Hollywood Forever Cemetery", 
      "reference": "CoQBfAAAAI7oSBoZ7GAaUEUmT8bW0rEGhyfX-pVfCQKhv87VhDWRU9_wWwDYYS7xR5DIu3GgtEloB9vVYdFlRS4_aWoocRjChgTdMJuQljY-PymTu0A48fD1_iOYKr3XqytXyw7dCVvDs_11xx-zudZbRJQaXskKo1ypaOHiYMk3BhPXNBA6EhC3BIxPjX64mzVVeCLTDRoBGhSxsD_6MlqbFzDxCp9PZnyd9HurrQ", 
      "price_level": 0, 
      "geometry": {
        "location": {
          "lat": 34.090347, 
          "lng": -118.319877
        }
      }, 
      "opening_hours": {
        "open_now": false
      }, 
      "vicinity": "6000 Santa Monica Blvd, Los Angeles", 
      "photos": [
        {
          "photo_reference": "CoQBeQAAAF1lyGP13c0jFOotphg5n5tPCqRCj6K69Pjvqt_wNeE08TRi-bT_AQmJjegTXHjZformpWyVhFogOwli8M45AOuGJr8pIM0HSeZEcDaU_Vd3vA9mRDFllMWnAw7wK1mX1df6n1bbtwzLvdkaERzqi8RPKJtuqp7upTMIC8QaNQpFEhAElDhBHaE34JBZOZ2RPZR_GhSC-EpA0p3sz0sIg7Vu3BErDgOyWg", 
          "width": 1024, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 768
        }
      ], 
      "id": "ccf676f84b89c879e15ab6cc066aaede8c4604f8", 
      "types": [
        "cemetery", 
        "funeral_home", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png"
    }, 
    {
      "rating": 4.6, 
      "name": "STAPLES Center", 
      "reference": "CnRvAAAAvvbOEzDv5HBuKXnbtd1hyB65bVdW8wituECX8jtauUEL73cv-DeJMGauyuh2LHrGthCdn6g8rYBuf-MjNbfP6C5u6Kifg_xIIIqEL0d5Jvsnot5T7f56hacJy23phTTBlzGb7qdC3Y37nnFTP_qmoBIQI6GXQmiBoIEaYqsql79H9xoUBl4gFzEkpQ_IxNpYIsfqyR0Wh9Y", 
      "geometry": {
        "location": {
          "lat": 34.043018, 
          "lng": -118.267254
        }
      }, 
      "vicinity": "1111 S Figueroa St, Los Angeles", 
      "photos": [
        {
          "photo_reference": "CnRnAAAA9Zbx8tShw5b1DZE8-jvqYsq6wtUFDS8gFrCPbjuFM3DKt5sbe-C_g3yA7nx6M03F5Wilv65SA2YAI9Zea2VO8ulybvoryh31cOn8R2RIbbaHXGaWVtus6VLRP7BpHUruKO0HRy5DLkceajrxvbGuwhIQTdLKHoAxZejQqnyqz2LsthoUi191s9NA4nmsmpejje8vbI_pUHM", 
          "width": 420, 
          "html_attributions": [], 
          "height": 418
        }
      ], 
      "id": "1b48070b4cbc9c83dcbea13c23c4d47138be74df", 
      "types": [
        "stadium", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/stadium-71.png"
    }, 
    {
      "rating": 4.2, 
      "name": "Long Beach Airport", 
      "reference": "CoQBcwAAAOBqmSe-RMsaN8URIH358ORR3qoNOPzeoqw6jRy1pjNQTjEEKJi6HKmZpf9pLFAGl_Wp3q1u-VEzZhziVhl3ttJ3jgE8ATURRiv19WrkTksMNP2HuW3aQGygkEHRChBv5yYHO1HfO-0cxHC5cWUAJEqG-WCUGtLXkVpmypNvRLshEhB2QZ63wPoN7VDcfAY5VEkxGhR25oWe8AsHHXdwCX7XQ-ybBu-gYA", 
      "geometry": {
        "location": {
          "lat": 33.818323, 
          "lng": -118.144566
        }
      }, 
      "opening_hours": {
        "open_now": true
      }, 
      "vicinity": "4100 E Donald Douglas Dr, Long Beach", 
      "photos": [
        {
          "photo_reference": "CnRoAAAA4OskyDt2A1307ku0edtkThspIeztxeUaO55FdprfWUUcSHgJ4p9ygi2qlxCOEiR_Qv23APmAt6e5SMJbOe4lfj-cIjncGUzlNUmucPvpg2Qm8cP9lG_ADM4PjiXoCMM_jJPG73QgU70HVtTnSoIOdhIQlWSDD05Wk2poNwcX_GqlpRoUzqTlJZSQlitMY4ZK4mnWG8EKkPg", 
          "width": 2000, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 1125
        }
      ], 
      "id": "442a1ec5af8174bba26a58ea09c646fb0c6bc1f2", 
      "types": [
        "airport", 
        "transit_station", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/airport-71.png"
    }, 
    {
      "rating": 4.6, 
      "name": "Disney California Adventure Park", 
      "reference": "CpQBgQAAAJoY1AN12BtTPblrZozzWIIDHUrdYCKjkZOGWM2Uy7UAOnyoF7uLefmj11M7Hkct5kkgYGizbW-Nq3jt0XYovPKMGl17-0smjMwsnZOU1YiRP9lnTolX7YlrZk9w71n2QhHC6Z1b6AXeA14ASKh_jQ_C1eWt9V0t7B01TH94eQpo_QioJLve6CE-t6sJ0vH9thIQx-2lA8omE935GoIVKtiN1RoUllFiklUo3p23cCu8F6jjApLIh40", 
      "geometry": {
        "location": {
          "lat": 33.805876, 
          "lng": -117.91949
        }
      }, 
      "vicinity": "1313 Disneyland Dr, Anaheim", 
      "photos": [
        {
          "photo_reference": "CnRoAAAA3zH-nJ7cjAt082WUFQyLMknk2x-icatgJgIny_4LGqiZmv59lHe01qKoXca2iORoMWI8n7mqfdKr6qYeQz0senVtx8GAOB4bslMxhy7KgaLJ8cTCLDHohDyExWQe_JdbWpkebH2VeLKae_zQy_FBRxIQpVyX13z-tkVdtI438SLchRoU7eycSaeA2kA6b-jmVxYcp9kPQEE", 
          "width": 960, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 720
        }
      ], 
      "id": "01200d9384aa0c644ae333178f6802e76f07e0ef", 
      "types": [
        "amusement_park", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png"
    }, 
    {
      "rating": 3.9, 
      "name": "Sony Pictures Entertainment", 
      "reference": "CoQBfQAAAKE3eDF58PSevYVFtF_3t1npRTUrv1fbNzMcLsfuFWAFT9MvRqZMewZFmRyJUQuwjXlGznRrvAvZwWOD8He7qNuBRfkBJYnAAuRe34RL-htzB1i9qdlSZ4QzpctPZ7K_OkfcJEUp1rMUabpVn8WGKSkpC6Ck-Red9rEGlGHHvlPSEhDI6UrLB1qOrAdf2pHF_iT8GhTraYUkQGNMtFevv6_3D6BgMySM4g", 
      "geometry": {
        "location": {
          "lat": 34.017767, 
          "lng": -118.401217
        }
      }, 
      "opening_hours": {
        "open_now": false
      }, 
      "vicinity": "10202 W Washington Blvd, Culver City", 
      "photos": [
        {
          "photo_reference": "CoQBfQAAAOui9ZyKMMJNSdTd1_nz2vl_8rgFiJo9yTpf3OLOanG_nkpry50hQFHNL1cqhTY5l1yh0Dp_pvNhHJ8p9R15HifhWRQqt9AC7dOOcG13oBeY7a-wT1zkBytqQ4wzCPVDEMNsvQbTEyNLqbmFUmIfUJHTS4l_-4xZo8BM8sK8LGwOEhAQSJmmduuD4a3DAD9r_eHfGhRIuENEB-WBx5xwU5v49_KbCGULUA", 
          "width": 816, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 488
        }
      ], 
      "id": "4b17c212773021c439cdc3753ac7a8e65bac710e", 
      "types": [
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png"
    }, 
    {
      "rating": 4.5, 
      "name": "Universal Studios Hollywood", 
      "reference": "CoQBfQAAAPbFFWXJxF37cRemIEOtrNzrhD3QH0nnW_B0fp8NTvPfqEyqMgQP9A1y9SSiF7KyH3PQ78JrX31RiGIRV2SDVpCU-F-Td-bdoi30GHeJRD67vWyyK4VpPrJcEN1TwXGPvlIqy1LsDXrp062Fgtu29fVNoWHwWeYwrjSdj9OLK9StEhBlNstAfx4TLqBCqE9gm8Z_GhSHeElgmR_550txBOQldXwskNjveg", 
      "geometry": {
        "location": {
          "lat": 34.138117, 
          "lng": -118.353378
        }
      }, 
      "vicinity": "100 Universal City Plaza, Universal City", 
      "photos": [
        {
          "photo_reference": "CnRoAAAA_hPCv0z8fDqztyaGwVMiCMiMr3TTZAOC_JZY75ZOG4ZO9rlqdvySpL8WZTZLq4bXR2UbcHvYbUa4_fLfshPCpvJwa9EFg5DZ1onXXO6pEX1PJPwywyp-7nwpsThqowc9JU9ZXXpfLYL18SZVlMhStxIQ7qmoYrvdEZDkSEKGZcjeGBoU7MooUhU2IfirDfZjVLHIOSZHwus", 
          "width": 949, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 1265
        }
      ], 
      "id": "4f55afe8d73fc6ad2666f3f3f7fbdd185482bab0", 
      "types": [
        "amusement_park", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png"
    }, 
    {
      "rating": 4, 
      "name": "Hollywood Roosevelt Hotel", 
      "reference": "CoQBegAAAMimGsclx7vesnfExDfWpX3AF9s9jgmtu6Ur6t0gh0GQNjoQq9JraG23chPL_EU7gMRl4Jau9bdDMmc0ujpVlGmlrzyCfUsTs7plm4LYxiGSHjLPGa0EHVOVCRXlYunBIHJFBwc4uKiJE5Xhy-B29_87fFe8aq9y9EAt4OEx-FoSEhDzDEvnnJqSKNAzqgs7BgVAGhSn8jrwt2cnpFUI5-2zCRDbW6Cwsw", 
      "geometry": {
        "location": {
          "lat": 34.101372, 
          "lng": -118.341799
        }
      }, 
      "opening_hours": {
        "open_now": true
      }, 
      "vicinity": "7000 Hollywood Blvd, Los Angeles", 
      "photos": [
        {
          "photo_reference": "CnRnAAAAG9V5Qsj52apO-Y4e-I7zNt0jKJA6zheaOFu5z2lxmHMDXXQfp_N_2tSnDtOFhxKxyftFJRa5budrpIoVt6il6zXz9xFX_Hkw6bk6CTekpotKm4oQz9uAInXxD4Uq6lLtBCZYJ66F0f6XeATQE2aHkhIQPd_lWHE6VUBo9joqyYibjhoUrcLaveFRAp-E0gehPhPfDHalLj8", 
          "width": 344, 
          "html_attributions": [], 
          "height": 500
        }
      ], 
      "id": "18f6d605056a36ad7fadc96fb111ff85afd7ccb8", 
      "types": [
        "lodging", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png"
    }, 
    {
      "rating": 4.3, 
      "name": "Walt Disney Concert Hall", 
      "reference": "CoQBegAAAHH3L9WnPZKt8BjW6ZD8pD6Gd99ZvCS0tr-dXYsEQKAWJkQSyoe0x6G1RbySSQ8GcOoXAVW_LM8XqtKy6F1vqy7Id32K8GFsXMWs3pW44vjndifwmvFxlfp4GRcPbeCpY-YcD_0Ojl6dx58adrf4FG2u5lAk__k01PpfdQQTSgSmEhAO4yt3VhGdKmvZkldDZ9RBGhS7BKpln18wW1aOvGt-hBuzOt7Xfg", 
      "geometry": {
        "location": {
          "lat": 34.055345, 
          "lng": -118.249845
        }
      }, 
      "vicinity": "111 S Grand Ave, Los Angeles", 
      "photos": [
        {
          "photo_reference": "CoQBeQAAALAamd0mgZ8ogyxm_QwWcmtJkItbb9_l3JD_ZSGy6UWkgVPU55Hp1QHukMhe5uAKpXfW3mhsZJtZbq-oX4UuNECsYdzL7oHBjKYOshpSIJtLcKsZbTDqnM0-RNkPmp8w1h6VCTsDKHxwtFGtjBlJw5m4hfGYnEOQkUn4tgEwnihjEhCTpBaBzV1MdDXLZtvufTDOGhQGYTYZSaoOBgqELrFCaCpqNjlC-g", 
          "width": 662, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 1024
        }
      ], 
      "id": "5cf64f5eb238d7e3740c59a49938ceb7c5b08646", 
      "types": [
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png"
    }, 
    {
      "rating": 4.2, 
      "name": "California State University Northridge", 
      "reference": "CpQBhwAAABHoIjJdO1YtGc9z2kiXHKoEenn76U_8re4b6chzL2Ti61ZWggnWFAvFhLw080zS9LbEHnNNoO-7FzM-kTKclPSEvG3lbmUTLppVkRnbrU4QVJ0iTmQKgWEFkR0MyWpb9f06w8dU5Ul7jqE7cx1QUPRDq4_XOAEJawK6XcoE65UPUSO3vtgGoe2i8IJ2Z6pH3xIQTFosGd3bCU9vHUcAuVCtixoU6L8L-oHZpb1aTlb6ARuc5OcAyPU", 
      "geometry": {
        "location": {
          "lat": 34.240714, 
          "lng": -118.529285
        }
      }, 
      "opening_hours": {
        "open_now": false
      }, 
      "vicinity": "18111 Nordhoff Street, Northridge", 
      "photos": [
        {
          "photo_reference": "CnRnAAAAIqSPFJNyqS8h_zlMJFrT0g4MZWQHVFiwaUA5dfXf_xceFMVW653DKolBDWBryXUweXHZuIZPBabq__LP-4bDVzNv4J9Fr13ESaUD5qI-iQ0AZkJ411rO7h600CXV0t14JxxAYjypFXKwyazTzjiUIRIQEDP_Sfb_FSwK5YnU7BB2RhoUtWOGjc8BE93wUuvkZ8uvuqWOVs4", 
          "width": 400, 
          "html_attributions": [], 
          "height": 266
        }
      ], 
      "id": "55b726ca2a85e8a5a84ef951247ff9600a638d46", 
      "types": [
        "university", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/university-71.png"
    }, 
    {
      "rating": 4.3, 
      "name": "Bob Hope Airport", 
      "reference": "CoQBcQAAAJ2Un-WyMDvkXAjvwrTUyRoVvbTQEo6XpJTJ-hWxNeylJPbCEfMcxNbZ9j7UfPFH4TDGEkxMRLM6CL4BgyvUvI90XV8Tc-JXHwUrsNn9Y40zn4B-j5lafMVziQXurjm2yr5s8LoXniFczd7e1yHIhdwyeBpsWeI-uVbArY7GHZ9nEhDVhqsyxbAWK3aU8LSG0hsFGhTCFte6fnsMgHIXmqR9JFT3dXPL-w", 
      "geometry": {
        "location": {
          "lat": 34.198312, 
          "lng": -118.357404
        }
      }, 
      "vicinity": "2627 N Hollywood Way, Burbank", 
      "photos": [
        {
          "photo_reference": "CoQBcgAAAGzCGjxgaA8Efiq0LwK8GIZq7fQstFKl4gm9cyvmA1qgo9abkNb_Je2df0fxQW4KY4I-54FbLIRyNBjnuV0J_6CHYVK1ycedm03ZdnGYVWvaaU2GS0b10XabTKI-Dk3jrBUprxjH-WOcctAdUFWPNzZPEDXim0z1pqpm8MvxFiwLEhBZAjHvhoccXSOoHF341_FXGhSCPF3bQbmbQROJbne2E_2VefcTGg", 
          "width": 1224, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 1632
        }
      ], 
      "id": "b4b5949fbb9292bcc8ea6cb46fc50bd8db34d0ce", 
      "types": [
        "airport", 
        "transit_station", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/airport-71.png"
    }, 
    {
      "rating": 4.8, 
      "name": "The Getty", 
      "reference": "CnRrAAAAa2i_ahZ-wMATS8KKr2v8hpf7X4L-INEQqCgvdUm2Li8XGBgjdLbe1R5Skrc8Ad1CbWl2esULjUyYkyMxXFgIO0oMIW32APGpuoT9dJQ1bUewW0r2m4_n4v0YlWgRRYgtRVjrRLd50W3429AKiEUkXhIQfpSCwaO2i8AtQVoLuJSgHRoU6ZQumkZonZkZUadEcTWfxLHsqtc", 
      "geometry": {
        "location": {
          "lat": 34.078036, 
          "lng": -118.474095
        }
      }, 
      "vicinity": "1200 Getty Center Dr, Los Angeles", 
      "photos": [
        {
          "photo_reference": "CoQBcQAAAA7g7pyT6hLtFqtrnUL62KyKrkA6KGIP5TNo6h31Sx9WltyqK5lddt3YDOst7lmlzoIvEZyYqtP2QQICF2PblfhdobvvjVpTBWxzhDLhPjt09WcESVCvKc5zBtueeBU3XqlDjEbEo5luz9ANV9JABkot9FVZwXSYt0cm43FE7PnwEhApS8GFlNEvteubFD8ADtriGhRzLAilsYYP9v-Y_vFhAEOk4l7Nog", 
          "width": 2048, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 1365
        }
      ], 
      "id": "fa3746aa58dbe6b08524746937b2b1c68e09c3a0", 
      "types": [
        "museum", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png"
    }, 
    {
      "rating": 4.3, 
      "name": "Occidental College", 
      "reference": "CoQBdAAAAEX6_USvw-2mKG6SG_MQNphR83sGMZw6k4LFBODifBSL563Svh04LvdovXXF5UWZ72c25cPizmV4rmHv7XqNXOFsofoNO5M0KD1lA-USOtFoo8pK5uu8Tr5zj02GOP82uJ7y3Dxk1W0erE15JhNS-HYQVfUbexyoXkVLR4VB-UUHEhDYFixoqsxwzAZLB7zMybNWGhS4OTkskJ7x7wmuQecEXCifNqItpQ", 
      "geometry": {
        "location": {
          "lat": 34.126615, 
          "lng": -118.212392
        }
      }, 
      "vicinity": "1600 Campus Rd, Los Angeles", 
      "photos": [
        {
          "photo_reference": "CnRoAAAAtr-uC9sIC7XuWHabWpT6pt21CWQVMvaJiOicaQkwGM9TAorBXdeVSHVB8V1-P7tYesPam1KhsV3W8NP3-SnCbhw2zxPMbx-80JMPLO1kiwoUQdCOlKQzCgjdBr7JMm7kY2cypCioCBDG2q1_FlLBWhIQVaYcvvtQAI7ZBwfDPvEZrBoUcMsRu0ldpB0y74My8FD8JXyoD0I", 
          "width": 1632, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 1224
        }
      ], 
      "id": "f0b0d423592ee7383f868766e3e7658e19db5b12", 
      "types": [
        "school", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png"
    }, 
    {
      "rating": 4.6, 
      "name": "Griffith Park", 
      "reference": "CnRuAAAAOeGaVF5GKymFbUWrRlmMGzAG5RM6jF7SoHoT6TYGeor7JSyhG5IyMTnrrJ40anzK7d2xXAhnGeXAThyJqcicqr_fo1yVk3mFkCeQbBiRDZ1dAHuJtB20W6CT50sLTcp8vhcqIg3cCbmdnNIaJ2Z6jRIQniYw20U-b0EuVl47adoJrBoUacBTxNGBtxE4JXhBosz6Spa5YaA", 
      "price_level": 0, 
      "geometry": {
        "location": {
          "lat": 34.136554, 
          "lng": -118.2942
        }
      }, 
      "opening_hours": {
        "open_now": true
      }, 
      "vicinity": "4730 Crystal Springs Dr, Los Angeles", 
      "photos": [
        {
          "photo_reference": "CnRoAAAAaRDRjWPKKiR7zOn66ymTpmavFy_JSf4xuoE2ZhorivU60mTPxg2PMny3PG7WRTAsl-T79O7GeGLt__EfUlOWnVXXme7uJ_4yIXOG1_wo9SHxPih01sR2dfL97s_ZeTGJBd9pmJWtryUfv2kmU3hGDxIQGcdZlOrlMjp8Kh_7EnvLrhoU4CN_zMPWUl9kTYMTI2Fm6E2VQ1c", 
          "width": 980, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 735
        }
      ], 
      "id": "05c6ca02daa5dd710749f5a0d76de488faef8b4c", 
      "types": [
        "park", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png"
    }, 
    {
      "rating": 4.5, 
      "name": "The Getty Villa", 
      "reference": "CoQBcQAAAGa1Ui4AkCFgJicEYwUqX77Z3mwDZcAmT29dRb-TshJ8gto7T6osrtUE0KWW2DqN_jdirxwE1ZpDxWWa84Aa1Flr4bZ1mVT2QwsoEVPIDI5a0CRc55psil9yOJNFMQ63-ryGsOOtU743CumaYDTzrNPo3FHReDjBe76ImPKA_w--EhAF6n5YivZHjXHdMyeIZMeLGhQ03v-zvzcFMiqVFyMuNIdhpG1EKQ", 
      "price_level": 2, 
      "geometry": {
        "location": {
          "lat": 34.045886, 
          "lng": -118.564861
        }
      }, 
      "opening_hours": {
        "open_now": false
      }, 
      "vicinity": "17985 Pacific Coast Hwy, Pacific Palisades", 
      "photos": [
        {
          "photo_reference": "CoQBcgAAAA797HZta588ptVvRRZ-wPvNsaVNKcwT7u1mpBrfjd4cq2rRk1UFQ5_6CQgBHslMtX21VjKIYJSbVqRLK8eSTwsur7H0m5ZESpMLI5pf9Y6vC2Rz9QVIFRjkvEdZ3CuQBF0uBb9mlkyvvNO7BEmC-h5eht_G0Xnv3KdYaZ9O7AlEEhCXSogsWt0lG5XwSbqhJmV2GhSZnCOHFOBtPoHVaxRwgKk1y027zw", 
          "width": 1632, 
          "html_attributions": [
            "From a Google User"
          ], 
          "height": 976
        }
      ], 
      "id": "44d6d4e8a6afe5f00b99c26970bc8ab8d327505e", 
      "types": [
        "museum", 
        "establishment"
      ], 
      "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png"
    }
  ];
})();