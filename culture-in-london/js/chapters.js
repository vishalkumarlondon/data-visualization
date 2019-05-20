var chapters = {
    'start': {
        bearing: 0,
        center: [-0.128435, 51.506938],
        zoom: 11.5,
        pitch: 0
    },
    'fitzrovia': {
        bearing: 27,
        center: [-0.138,51.519],
        zoom: 14.9,
        pitch: 45,
        speed: 0.5
    },
    'mayfair': {
        bearing: 20,
        center: [-0.145,51.509],
        zoom: 14.9,
        pitch: 45,
        speed: 0.5
    },
    'soho': {
        bearing: 0,
        center: [-0.126,51.511],
        zoom: 14.9,
        pitch: 45,
        speed: 0.5
    },
    'gloucester': {
        bearing: 45,
        center: [-0.183,51.496],
        zoom: 14.9,
        pitch: 20,
        speed: 0.5
    },
    'shoreditch': {
        duration: 6000,
        center: [-0.074,51.522],
        bearing: 0,
        zoom: 14.02,
        pitch: 0
    },
    'london-bridge': {
        bearing: 90,
        center: [-0.100, 51.503],
        zoom: 13.5,
        speed: 0.6,
        pitch: 40
    },
    'deptford': {
        bearing: 90,
        center: [-0.021,51.478],
        zoom: 13.25
    },
    'dalston': {
        duration: 6000,
        bearing: -30,
        center: [-0.059,51.544],
        zoom: 13.5,
        pitch: 20
    }
};

// ****************************************** // 
// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);

    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];

        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};
 
// ****************************************** //
var activeChapterName = 'start';
// var activeChapterName = 'fitzrovia';

function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;
 
    map.flyTo(chapters[chapterName]);
 
    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');
 
    activeChapterName = chapterName;
}
 
function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 20;
}