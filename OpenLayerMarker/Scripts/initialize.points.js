
function add_map_point(lat, lng) {
    var vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')),
            })]
        }),
        style: new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.5, 0.5],
                anchorXUnits: "fraction",
                anchorYUnits: "fraction",
                src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg"
            })
        })
    });
    map.addLayer(vectorLayer);
}


function initializePoints() {
    //activeClickable();
    add_map_point(33.896889, -118.221221);
    add_map_point(33.893889, -118.211221);
    add_map_point(33.892889, -118.221221);
    add_map_point(33.896889, -118.211221);
    //add_map_circle(32.53521, 51.7295);

}
