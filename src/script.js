const sampleCube = document.getElementById("cube");
const cubeDepthOffset = window.getComputedStyle(sampleCube).getPropertyValue("--transform-depth-offset");
// const cubeDepthOffset = sampleCube.getPropert
const appliedTransformations = [];

// Fungsi general untuk menerapkan matriks transformasi ke elemen kubus sampel
function applyTransformation({ description, matrix }) {
    // Populasikan syntax transformasi CSS matrix3d()
    let matrix3dValue = "matrix3d(";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            matrix3dValue += matrix[j][i];
            if (i !== 3 || j !== 3) {
                matrix3dValue += ", ";
            }
        }
    }
    matrix3dValue += ")";
    console.log(matrix3dValue);

    // Tambahkan ke array transformasi yang diterapkan
    appliedTransformations.push(matrix3dValue);
    // Terapkan array transformasi ke elemen kubus sampel
    sampleCube.style.transform = cubeDepthOffset + " " + appliedTransformations.reverse().join(" ");

    // Tambahkan ke list transformasi yang diterapkan
    const stackOfAppliedTransformations = document.getElementById("stackOfAppliedTransformations");
    const elementToBeAppended = document.createElement("li");
    elementToBeAppended.textContent = description;
    stackOfAppliedTransformations.appendChild(elementToBeAppended);
}

// Fungsi pengambil nilai untuk mengurangi repetisi
function getValueById(id) {
    return document.getElementById(id).value;
}

//#region Fungsi-fungsi transformasi
// Fungsi translasi
function translate() {
    const x = getValueById("translateX");
    const y = getValueById("translateY");
    const z = getValueById("translateZ");

    return {
        description: `Translasi (${x}px, ${y}px, ${z}px)`,
        matrix: [
            [1, 0, 0, x],
            [0, 1, 0, y],
            [0, 0, 1, z],
            [0, 0, 0, 1]
        ]
    };
}

// Fungsi rotasi
function rotate() {

    return {
        description: ``,
        matrix: [
            [],
            [],
            [],
            []
        ]
    }
}

// Fungsi penskalaan
function scale() {
    
    return {
        description: ``,
        matrix: [
            [],
            [],
            [],
            []
        ]
    }
}

// Fungsi shearing
function shear() {
    
    return {
        description: ``,
        matrix: [
            [],
            [],
            [],
            []
        ]
    }
}
//#endregion

// Fungsi untuk menghubungkan event klik tombol dengan penerapan transformasi
function bind(buttonId, transformationFunction) {
    document.getElementById(buttonId).addEventListener("click", () => {
        applyTransformation(transformationFunction());
    });
}

bind("applyTranslate", translate);