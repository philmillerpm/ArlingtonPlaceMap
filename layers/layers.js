var wms_layers = [];

var format_ArlingtonPlace_0 = new ol.format.GeoJSON();
var features_ArlingtonPlace_0 = format_ArlingtonPlace_0.readFeatures(json_ArlingtonPlace_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArlingtonPlace_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArlingtonPlace_0.addFeatures(features_ArlingtonPlace_0);
var lyr_ArlingtonPlace_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArlingtonPlace_0, 
                style: style_ArlingtonPlace_0,
                interactive: true,
    title: 'ArlingtonPlace<br />\
    <img src="styles/legend/ArlingtonPlace_0_0.png" /> 510<br />\
    <img src="styles/legend/ArlingtonPlace_0_1.png" /> 553<br />\
    <img src="styles/legend/ArlingtonPlace_0_2.png" /> 555<br />\
    <img src="styles/legend/ArlingtonPlace_0_3.png" /> 640<br />\
    <img src="styles/legend/ArlingtonPlace_0_4.png" /> <br />'
        });

lyr_ArlingtonPlace_0.setVisible(true);
var layersList = [lyr_ArlingtonPlace_0];
lyr_ArlingtonPlace_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'PIN': 'PIN', 'owner_name': 'owner_name', 'owner_na_1': 'owner_na_1', 'owner_addr': 'owner_addr', 'owner_ad_1': 'owner_ad_1', 'mailing_ad': 'mailing_ad', 'mailing__1': 'mailing__1', 'sale_amoun': 'sale_amoun', 'sale_valid': 'sale_valid', 'assessed_l': 'assessed_l', 'assessed_b': 'assessed_b', 'assessed_t': 'assessed_t', 'class_code': 'class_code', 'acres': 'acres', 'legal_desc': 'legal_desc', 'legal_de_1': 'legal_de_1', 'legal_de_2': 'legal_de_2', 'legal_de_3': 'legal_de_3', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_ArlingtonPlace_0.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'PIN': 'TextEdit', 'owner_name': 'TextEdit', 'owner_na_1': 'TextEdit', 'owner_addr': 'TextEdit', 'owner_ad_1': 'TextEdit', 'mailing_ad': 'TextEdit', 'mailing__1': 'TextEdit', 'sale_amoun': 'Range', 'sale_valid': 'TextEdit', 'assessed_l': 'TextEdit', 'assessed_b': 'TextEdit', 'assessed_t': 'TextEdit', 'class_code': 'TextEdit', 'acres': 'TextEdit', 'legal_desc': 'TextEdit', 'legal_de_1': 'TextEdit', 'legal_de_2': 'TextEdit', 'legal_de_3': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_ArlingtonPlace_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'PIN': 'no label', 'owner_name': 'no label', 'owner_na_1': 'no label', 'owner_addr': 'no label', 'owner_ad_1': 'no label', 'mailing_ad': 'no label', 'mailing__1': 'no label', 'sale_amoun': 'no label', 'sale_valid': 'no label', 'assessed_l': 'no label', 'assessed_b': 'no label', 'assessed_t': 'no label', 'class_code': 'no label', 'acres': 'no label', 'legal_desc': 'no label', 'legal_de_1': 'no label', 'legal_de_2': 'no label', 'legal_de_3': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_ArlingtonPlace_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});