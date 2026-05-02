var wms_layers = [];

var format_bgd_admbnda_adm1_bbs_20201113_0 = new ol.format.GeoJSON();
var features_bgd_admbnda_adm1_bbs_20201113_0 = format_bgd_admbnda_adm1_bbs_20201113_0.readFeatures(json_bgd_admbnda_adm1_bbs_20201113_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bgd_admbnda_adm1_bbs_20201113_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bgd_admbnda_adm1_bbs_20201113_0.addFeatures(features_bgd_admbnda_adm1_bbs_20201113_0);
var lyr_bgd_admbnda_adm1_bbs_20201113_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bgd_admbnda_adm1_bbs_20201113_0, 
                style: style_bgd_admbnda_adm1_bbs_20201113_0,
                popuplayertitle: 'bgd_admbnda_adm1_bbs_20201113',
                interactive: true,
    title: 'bgd_admbnda_adm1_bbs_20201113<br />\
    <img src="styles/legend/bgd_admbnda_adm1_bbs_20201113_0_0.png" /> Barisal<br />\
    <img src="styles/legend/bgd_admbnda_adm1_bbs_20201113_0_1.png" /> Chittagong<br />\
    <img src="styles/legend/bgd_admbnda_adm1_bbs_20201113_0_2.png" /> Dhaka<br />\
    <img src="styles/legend/bgd_admbnda_adm1_bbs_20201113_0_3.png" /> Khulna<br />\
    <img src="styles/legend/bgd_admbnda_adm1_bbs_20201113_0_4.png" /> Mymensingh<br />\
    <img src="styles/legend/bgd_admbnda_adm1_bbs_20201113_0_5.png" /> Rajshahi<br />\
    <img src="styles/legend/bgd_admbnda_adm1_bbs_20201113_0_6.png" /> Rangpur<br />\
    <img src="styles/legend/bgd_admbnda_adm1_bbs_20201113_0_7.png" /> Sylhet<br />' });

lyr_bgd_admbnda_adm1_bbs_20201113_0.setVisible(true);
var layersList = [lyr_bgd_admbnda_adm1_bbs_20201113_0];
lyr_bgd_admbnda_adm1_bbs_20201113_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_bgd_admbnda_adm1_bbs_20201113_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_bgd_admbnda_adm1_bbs_20201113_0.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'no label', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'inline label - always visible', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_bgd_admbnda_adm1_bbs_20201113_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});