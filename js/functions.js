window.onload = function() {
    var map;

    function initialize() {
        // Propriedades do mapa
        var mapProp = {
            centro: new google.maps.LatLng(-27.0, -48.0),
            scrollWheel: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // Instância do mapa
        map = new google.map.Map(document.getElementById('mapa'), mapProp);

    }

    // Coloca um marcador no mapa
    function addMarker(lat, long, icon, content, click) {
        var latLng = {
            'lat': lat,
            'lng': long
        };

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0, 20), 
        });

        if(click == true) {
            google.maps.event.addListener(marker, 'click', function() { // Só abre o texto do marcador se o marcador for clicado
                infoWindow.open(map, marker); // Abre o texto do marcador
            });
        } else {
            infoWindow.open(map, marker); 
        }
    }

    initialize();

    var conteudo = '<p style="color:black; font-size: 13px; padding: 10px 0;">Meu endereço!</p>'; // Texto do marcador
    addMarker(-27.616367, -48.5923228, '', conteudo, true);

    setTimeout(function() {
        map.panTo({'lat': -47.55445, 'lng': -27.654644}); // Muda o centro do mapa para as coordenadas passadas
        map.setZoom(8); // Muda o zoom do mapa
    }, 4000);
}