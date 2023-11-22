var belanja = parseInt(prompt("Masukan Total Belanja"))

document.write(`Anda Belanja = ${belanja}`)
if(belanja < 100000){
  document.write(`Anda Tidak mendapatkan Diskon`)
}
else if(belanja > 100000){
   diskon = belanja * 10 / 100
  document.write(`Anda Mendapatkan Diskon 10% dan total bayar menjadi ${belanja - diskon}`)
}else if(belanja > 200000){
   diskon = belanja * 25 / 100
  document.write(`Anda mendapatkan diskon 25% dan total bayar menjadi ${belanja - diskon}`)
}