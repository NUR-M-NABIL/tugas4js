let frm = document.getElementById("karyawan");
 let statuspilihan = ["Menikah", "Belum"];
 let pilihstatus = `<option value=""> Pilih Status ----</option>`;
 for (let s in statuspilihan){
     pilihstatus += `<option value="${statuspilihan[s]}">${statuspilihan[s]}</option>`;
}
let jabatanpilihan = ["Manager", "Asisten Manager", "Staff"];
let pilihjabatan = `<option value=""> Pilih Jabatan ----</option>`;
for (let j in jabatanpilihan){
    pilihjabatan += `<option value="${jabatanpilihan[j]}">${jabatanpilihan[j]}</option>`;
}
frm.jabatan.innerHTML = pilihjabatan;
function masukan(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

     let statuspribadi;
     switch(status){
         case 'Menikah':  ; break;
         case 'Belum' :  ; break;
         default: statuspribadi = 0;

    } 
    let gapok;

    switch(jabatan){
        case 'Manager': gapok = 15000000; break;
        case 'Asisten Manager': gapok = 10000000; break;
        case 'Staff': gapok = 5000000; break;
        default: gapok = 0;
    }
    let tunjab = 0.15 * gapok;
    let bpjs = 0.10 * gapok;
    let tunkel = (status == 'Menikah') ? 0.20 * gapok : 0;
    // let tunkel;
    // if (status == 'Menikah') ?  0.20 * gapok : 0;
    // else if (status == 'Tidak') ? 0.0 + gapok : 0;
    // else tunkel = 0.1 * gapok;

    let togaji = gapok + tunjab + bpjs + tunkel;

swal(`<tr>
Nama Karyawan : ${nama}
Jabatan : ${produk}
Status : ${status}
Total Keseluruhan Gaji yang Didapat : ${togaji}
    
<tr>`);    
}
frm.status.innerHTML = pilihstatus;
function masukan(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

     let statuspribadi;
     switch(status){
         case 'Menikah':  ; break;
         case 'Belum' :  ; break;
         default: statuspribadi = 0;

    } 
    let gapok;

    switch(jabatan){
        case 'Manager': gapok = 15000000; break;
        case 'Asisten Manager': gapok = 10000000; break;
        case 'Staff': gapok = 5000000; break;
        default: gapok = 0;
    }
    let tunjab = 0.15 * gapok;
    let bpjs = 0.10 * gapok;
    let tunkel = (status == 'Menikah') ? 0.20 * gapok : 0;
    // let tunkel;
    // if (status == 'Menikah') ?  0.20 * gapok : 0;
    // else if (status == 'Tidak') ? 0.0 + gapok : 0;
    // else tunkel = 0.1 * gapok;

    let togaji = gapok + tunjab + bpjs + tunkel;

}