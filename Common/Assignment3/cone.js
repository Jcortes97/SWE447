var gl = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );
    cone = new Cone(gl, 7)
    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    render();
}

function render() {
    cone.render();
}

window.onload = init;
