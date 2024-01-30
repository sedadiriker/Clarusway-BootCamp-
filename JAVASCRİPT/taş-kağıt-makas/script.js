
let devam 
let döngü = 1
let pc1_skor = 0
let pc2_skor = 0

do{
    alert('Taş Kağıt Makas Oyunu başlıyor!!!')
    alert(3)
    alert(2)
    alert(1)

    while(döngü < 4) {
        const condition = ['Taş', 'Kağıt', 'Makas']

        let selectPC_1 = condition[Math.round(Math.random() * 2)] 
        let selectPC_2 = condition[Math.round(Math.random() * 2)] 
        
        if (selectPC_1 === 'Taş' && selectPC_2 === 'Makas' ||
            selectPC_1 === 'Makas' && selectPC_2 === 'Kağıt' ||
            selectPC_1 === 'Kağıt' && selectPC_2 === 'Taş') {
            pc1_skor += 1;
        } else if (selectPC_1 === 'Makas' && selectPC_2 === 'Taş' ||
            selectPC_1 === 'Kağıt' && selectPC_2 === 'Makas' ||
            selectPC_1 === 'Taş' && selectPC_2 === 'Kağıt') {
            pc2_skor += 1;
        }

        alert(`Seda = ${selectPC_1} skor:${pc1_skor} --- Deniz = ${selectPC_2} skor:${pc2_skor}`);
        döngü++
    }
        if(pc1_skor > pc2_skor) {
            alert(`Kazanan Seda Skor : ${pc1_skor}`)
        }else if(pc1_skor < pc2_skor) {
            alert(`Kazanan Deniz Skor : ${pc2_skor}`)
        }else{
            alert(`Sonuç berabere Seda: ${pc1_skor}  Deniz: ${pc2_skor}`)
        }

        devam = prompt('Oyun tekrar başlasın mı?')
        döngü= 1
        pc1_skor =0
        pc2_skor=0
        
}while (devam === 'evet');

if(devam === 'hayır') {
    alert('Hoşçakal!');
}



