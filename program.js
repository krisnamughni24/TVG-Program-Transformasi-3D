// Impor package Node.js yang diperlukan
const { app, BrowserWindow } = require("electron");

// Fungsi untuk membuat window utama
function createMainWindow() {
    // Buat instance window baru
    const w = new BrowserWindow({
        width: 1280,
        height: 640
    });

    // Hilangkan menu bar dari window aplikasi
    w.removeMenu();

    // Muat file index.html di dalam window aplikasi
    w.loadFile("src/index.html");
}

// Jika aplikasi terdeteksi dijalankan, buat window utama
app.whenReady().then(createMainWindow);

// Tangani jika aplikasi dibuka lagi setelah terbuka
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});

// Keluar dari aplikasi jika semua window telah tertutup (kecuali pada platform macOS)
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})