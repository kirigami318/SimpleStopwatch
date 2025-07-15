const display = document.getElementById("timer");
let timer = null;
let waktuMulai = 0;
let elapsedTime = 0;
let jalan = false;

function tombolMulai(){
    if (!jalan){
        start();
        jalan=true;
    }
    else{
        stop();
        jalan=false;
    }
}

function start(){
    waktuMulai = Date.now()-elapsedTime;
    timer = setInterval(update, 10);
    console.log(timer);
    console.log(waktuMulai)
    document.getElementById("mulai").innerHTML="Stop";
}

function stop(){
    clearInterval(timer);
    elapsedTime = Date.now()-waktuMulai;
    jalan=false
    document.getElementById("mulai").innerHTML="Play";
}

function update(){
    const waktuIni = Date.now();
    elapsedTime = waktuIni - waktuMulai;

    let jam = Math.floor(elapsedTime/(1000*60*60));
    let menit = Math.floor(elapsedTime/(1000*60)%60);
    let detik = Math.floor(elapsedTime/1000%60);

    jam = String(jam).padStart(2,"0");
    menit = String(menit).padStart(2,"0");
    detik = String(detik).padStart(2,"0");

    display.textContent = jam+":"+menit+":"+detik;
}

function ulangi(){
    clearInterval(timer);
    mulai=0;
    elapsedTime=0;
    jalan=false;
    display.textContent="00:00:00"
    document.getElementById("mulai").innerHTML="Play";
}
