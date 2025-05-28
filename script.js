// Data siswa per kelas
const siswaPerKelas = {
    "1A": ["Ahmad", "Fatimah", "Ali"],
    "1B": ["Aisyah", "Hassan", "Zainab"],
    "2A": ["Bilal", "Maryam", "Ibrahim"],
    "2B": ["Khalid", "Sarah", "Yusuf"]
};

document.addEventListener('DOMContentLoaded', () => {
    const kelasSelect = document.getElementById('kelas');
    const siswaSelect = document.getElementById('siswa');
    const form = document.getElementById('penilaianForm');

    kelasSelect.addEventListener('change', () => {
        const kelasTerpilih = kelasSelect.value;

        // Reset siswa dropdown
        siswaSelect.innerHTML = '<option value="" disabled selected>Pilih siswa</option>';

        if (kelasTerpilih && siswaPerKelas[kelasTerpilih]) {
            siswaPerKelas[kelasTerpilih].forEach(namaSiswa => {
                const option = document.createElement('option');
                option.value = namaSiswa;
                option.textContent = namaSiswa;
                siswaSelect.appendChild(option);
            });
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const penguji = form.penguji.value;
        const kelas = form.kelas.value;
        const siswa = form.siswa.value;
        const surat = form.surat.value;
        const keterangan = form.keterangan.value.trim();

        if (!penguji || !kelas || !siswa || !surat || !keterangan) {
            alert("Mohon lengkapi semua data!");
            return;
        }

        // Contoh aksi setelah submit: tampilkan data di alert
        alert(
            `Data Penilaian:\n` +
            `Penguji: ${penguji}\n` +
            `Kelas: ${kelas}\n` +
            `Siswa: ${siswa}\n` +
            `Surat: ${surat}\n` +
            `Catatan: ${keterangan}`
        );

        // Reset form setelah submit
        form.reset();
        siswaSelect.innerHTML = '<option value="" disabled selected>Pilih kelas dulu</option>';
    });
});
