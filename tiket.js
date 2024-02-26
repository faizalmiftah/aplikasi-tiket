alert('Aplikasi Tiket Studio')

const nama = prompt("Masukkan Nama Anda");
const usia = prompt("Masukkan Usia Anda");

if(usia > 13){
    const studio = prompt("Silahkan pilih studio A, B, atau C")
    if(studio == 'A' ){
        alert(`Tiket ${nama}, Studio A, Umur ${usia}`);
    }else if(studio == 'B' ){
        alert(`Tiket ${nama}, Studio B, Umur ${usia}`);
    }else if(studio == 'C' ){
        alert(`Tiket ${nama}, Studio C, Umur ${usia}`);
    }else {
        alert("Studio tidak valid, silahkan pilih studio A, B, atau C");
    }
} else {
    alert("Maaf, Anda tidak boleh masuk studio karena umur Anda kurang dari atau sama dengan 13 tahun.");
}
 