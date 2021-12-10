/*game start*/
if(localStorage.length == 0){
    localStorage.setItem("money" , 0)
    localStorage.setItem("exp" , 0)
    localStorage.setItem("can" , 25)
    localStorage.setItem("hasar" , 5)
    localStorage.setItem("lvl" , 1)
    localStorage.setItem("dungeon_cart",0)
    localStorage.setItem("silah","yok")
    localStorage.setItem("zırh","yok")
    localStorage.setItem("a" , 0)
    localStorage.setItem("b" , 0)
    localStorage.setItem("c" , 0)
    localStorage.setItem("d" , 0)
    localStorage.setItem("cultivation" , 0)
    localStorage.setItem("arena" , 0)
    localStorage.setItem("title" , "yok")

}
/*değişkenler */
const icon = document.querySelectorAll(".icon")
const side = document.querySelectorAll(".side")
const button = document.querySelectorAll("button")
const gorev = document.querySelector("#gorev")
const moneyy = document.querySelector("#money")
const lvll = document.querySelector("#lvl")
const expp = document.querySelector("#exp")
const main = document.querySelector(".main")
const hasar = document.querySelector("#hasar")
const can = document.querySelector("#can")
const silah = document.querySelector("#silah")
const zırh = document.querySelector("#zırh")
const title = document.querySelector("#title")
const metin = document.querySelector("#metin")
const max_exp_= document.querySelector("#max_exp")
const dundeon_key_ = document.querySelector("#dungeon_key")
const cultivation_a = document.querySelector("#cultivation")
let a = 1;
//Side bar
icon.forEach(element => {
    element.addEventListener("click" , ()=>{
        if(element.className == "bx bx-coin icon"){
            if(side[1].className == "side side-close"){
                side[1].className = "side side-open"
           }else if(side[1].className == "side side-open"){
                side[1].className = "side side-close"
           }
        }else if(element.className == "bx bx-file icon"){
            if(side[0].className == "side side-close"){
                side[0].className = "side side-open"
            }else if(side[0].className == "side side-open"){
                side[0].className = "side side-close"
            }
        }
    })
});
/*function*/
/*görev sistemi*/
function time(i,time , money , exp){
    a = 0
    i = 0
    gorev.textContent = `kalan süre :  ${time-i} dk`
    const x = setInterval(()=>{
        ++i
        gorev.textContent = `kalan süre :  ${time-i} dk`
        if(i >= time){
            a = 1
            i = 0 
            gorev.textContent = `Lütfen görev şeçiniz ve görev bitmeden çıkmayınız`
            localStorage.setItem("money" ,  parseInt(localStorage.getItem("money")) + money)
            localStorage.setItem("exp" , parseInt(localStorage.getItem("exp")) + exp)
            window.location.reload()
            clearInterval(x)
        }
    },60000)
}
function dungeon(min , max,money,exp,g=0){
    a = 0
    const dungeon = document.querySelector(".dungeon")
    let can = Math.floor(Math.random() * (20*max)) + (10*min);
    let hasar = Math.floor(Math.random() * (10*max)) + (5*min);
    main.innerHTML = "";
    fight_can = localStorage.getItem("can")
    let i = 0
    const x = setInterval(()=>{
        i++
        if (fight_can <= 0){
            i = null
            main.innerHTML += "<p>Kaybettin<p>"      
            setTimeout(()=>{
                window.location.reload()
            },5000)   
            clearInterval(x)
        }
        if (can <= 0){
            i = null
            main.innerHTML += "<p>kazandın<p>"
            metin.className = "metin";
            metin.innerHTML= `
            <h1>Görev tamamlandı<h1>
            <p>${money} Gold kazandın<p>
            <p>${exp} exp kazandın<p>
            `
            localStorage.setItem("money" ,  parseInt(localStorage.getItem("money")) + money)
            localStorage.setItem("exp" , parseInt(localStorage.getItem("exp")) + exp)
            if(g == 1){
                localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
            }
            if(g == 2){
                localStorage.setItem("arena" , parseInt(localStorage.getItem("arena")) + 50);
                if(localStorage.getItem("arena") == 500){
                    localStorage.setItem("title" , "Asker")
                    localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + 5)
                    localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 10)
                }
                if(localStorage.getItem("arena") == 1000){
                    localStorage.setItem("title" , "Yüz başı")
                    localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + 5)
                    localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 10)
                }
                if(localStorage.getItem("arena") == 2500){
                    localStorage.setItem("title" , "General")
                    localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + 5)
                    localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 10)
                }
                if(localStorage.getItem("arena") == 5000){
                    localStorage.setItem("title" , "Baş General")
                    localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + 5)
                    localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 10)
                }
                if(localStorage.getItem("arena") == 7500){
                    localStorage.setItem("title" , "Ölümsüz general")
                    localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + 5)
                    localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 10)
                }
                if(localStorage.getItem("arena") == 10000){
                    localStorage.setItem("title" , "Kahraman")
                    localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + 5)
                    localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 10)
                }
                if(localStorage.getItem("arena") == 25000){
                    localStorage.setItem("title" , "Kral")
                    localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + 5)
                    localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 10)
                }
                if(localStorage.getItem("arena") == 50000){
                    localStorage.setItem("title" , "Tanrı")
                    localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + 5)
                    localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 10)
                }
                if(localStorage.getItem("arena") == 100000){
                    localStorage.setItem("title" , "Gerçek Tanrı")
                    localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + 5)
                    localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 10)
                }
                if(localStorage.getItem("arena") == 1000000){
                    localStorage.setItem("title" , "Sonsuz Tanrı")
                    localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + 50)
                    localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 100)
                }
            }
            setTimeout(()=>{
                window.location.reload()
            },5000)                 
            clearInterval(x)
        }
        if(i != null){
            if (i%2==1){
                fight_can -= hasar
                main.innerHTML += `<p>Yaratık saldırıyor ...${hasar} hasar aldın kalan canın ${fight_can}<p>`
            }else if(i%2==0){
                can -= parseInt(localStorage.getItem("hasar"))
                main.innerHTML += `<p>Saldırıyorsun ...${localStorage.getItem("hasar")} hasarverdin kalan canı ${can}<p>`
            }
        }
    },2000)
}
function start(){
    moneyy.textContent = `money : ${localStorage.getItem("money")}`
    expp.textContent = `exp : ${localStorage.getItem("exp")}`
    lvll.textContent = `lvl : ${localStorage.getItem("lvl")}`
    can.textContent = `can : ${localStorage.getItem("can")}`
    hasar.textContent = `hasar : ${localStorage.getItem("hasar")}`
    silah.textContent = `silah : ${localStorage.getItem("silah")}`
    zırh.textContent = `zırh : ${localStorage.getItem("zırh")}`
    cultivation_a.textContent = `iç enerji : ${localStorage.getItem("cultivation")}`
    max_exp_.textContent = `sonraki lvl için : ${max_exp}`
    dundeon_key_.textContent = `Dungeon key : ${localStorage.getItem("dungeon_cart")}`
    title.textContent = `title : ${localStorage.getItem("title")}`
}
function lvl(){
    max_exp = parseInt(localStorage.getItem("lvl")) * (25*localStorage.getItem("lvl"));
    if(localStorage.getItem("exp") >= max_exp){
        localStorage.setItem("lvl" , parseInt(localStorage.getItem("lvl")) + 1)
        localStorage.setItem("exp" , parseInt(localStorage.getItem("exp")) - max_exp)
        localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 5)
        localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar"))+ 1)
    }
}
function item(a,b,value,money){
        
    if (a == 1){
        localStorage.setItem("silah",b)
        localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + value)
    }
    if (a == 2){
        localStorage.setItem("zırh",b)
        localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + value)
    }
    localStorage.setItem("money",parseInt(localStorage.getItem("money")) - money)
}
function cultivation(value,money){
    localStorage.setItem("money",parseInt(localStorage.getItem("money")) - money)
    localStorage.setItem("cultivation",parseInt(localStorage.getItem("cultivation")) + value)
    localStorage.setItem("can" , parseInt(localStorage.getItem("can")) + 5)
    localStorage.setItem("hasar" , parseInt(localStorage.getItem("hasar")) + 1)
}

/* side panneller */
button.forEach(element => {
    element.addEventListener("click",()=>{
        /*görevler*/
        if (a == 1){
            if (element.id == 1){
                time(element,5 ,25,10)
            }
            if (element.id == 2){
                time(element,10 ,50,20)
            }
            if (element.id == 3){
                time(element,30 ,75,40)
            }
            if (element.id == 4){
                time(element,60 ,150,80)
            }
            if (element.id == 5){
                time(element,120 ,300,160)
            }
            if (element.id == 11 && localStorage.getItem("dungeon_cart") >= 1){
                dungeon(2,3 , 50,50)
                localStorage.setItem("dungeon_cart",parseInt(localStorage.getItem("dungeon_cart")) - 1)
            }
            if (element.id == 12 && localStorage.getItem("dungeon_cart") >= 1){
                dungeon(3,5 , 50,100)
                localStorage.setItem("dungeon_cart",parseInt(localStorage.getItem("dungeon_cart")) - 1)
            }
            if (element.id == 13 && localStorage.getItem("dungeon_cart") >= 1){
                dungeon(6,10 , 50,200)
                localStorage.setItem("dungeon_cart",parseInt(localStorage.getItem("dungeon_cart")) - 1)
            }
            if (element.id == 14 && localStorage.getItem("dungeon_cart") >= 1){
                dungeon(7,15 , 50,400)
                localStorage.setItem("dungeon_cart",parseInt(localStorage.getItem("dungeon_cart")) - 1)
            }
            if (element.id == 15 && localStorage.getItem("dungeon_cart") >= 1){
                dungeon(10,20 , 50,800)
                localStorage.setItem("dungeon_cart",parseInt(localStorage.getItem("dungeon_cart")) - 1)
            }
            if (element.id == 16 && localStorage.getItem("dungeon_cart") >= 1){
                dungeon(20,25 , 50,1600)
                localStorage.setItem("dungeon_cart",parseInt(localStorage.getItem("dungeon_cart")) - 1)
            }
            if (element.id == 31){
                dungeon(Math.floor(Math.random() * (25)) + (1),Math.floor(Math.random() * (50)) + (5) ,200,400,2)

            }
            //mağaza
            if (element.id == 21 && localStorage.getItem("money") >= 100){
                localStorage.setItem("money",parseInt(localStorage.getItem("money")) - 100)
                localStorage.setItem("dungeon_cart",parseInt(localStorage.getItem("dungeon_cart")) + 1)
                start()
            }
            //silah ve zırh
            if (element.id == 22 && localStorage.getItem("money") >= 100  && localStorage.getItem("a") == 0 ){
                item(1,"tahta kılıç",10,100)
                localStorage.setItem("a" , 1)
                start()
            }
            if (element.id == 23 && localStorage.getItem("money") >= 150  && localStorage.getItem("b") == 0){
                item(2,"başlangıç zırh seti",25,150)
                localStorage.setItem("b" , 1)
                start()
            }
            if (element.id == 24 && localStorage.getItem("money") >= 200  && localStorage.getItem("a") == 1){
                item(1,"demir kılıç",25,200)
                localStorage.setItem("a" , 2)
                start()
            }
            if (element.id == 25 && localStorage.getItem("money") >= 250  && localStorage.getItem("b") == 1){
                item(2,"demir zırh seti",50,250)
                localStorage.setItem("b" , 2)
                start()
            }
            if (element.id == 26 && localStorage.getItem("money") >= 500  && localStorage.getItem("a") == 2){
                item(1,"ejder katili kılıçı",50,500)
                localStorage.setItem("a" , 3)
                start()
            }
            if (element.id == 27 && localStorage.getItem("money") >= 600  && localStorage.getItem("b") == 2){
                item(2,"ejderha zırh seti",100,600)
                localStorage.setItem("b" , 3)
                start()
            }
            if (element.id == 28 && localStorage.getItem("money") >= 750  && localStorage.getItem("a") == 3){
                item(1,"kutsal kılıçı",100,750)
                localStorage.setItem("a" , 4)
                start()
            }
            if (element.id == 29 && localStorage.getItem("money") >= 1000  && localStorage.getItem("b") == 3){
                item(2,"kutsal zırh seti",250,1000)
                localStorage.setItem("b" , 4)
                start()
            }
            if (element.id == 99 && localStorage.getItem("money") >= 10000   && localStorage.getItem("a") == 4){
                item(1,"Tanrının Mızrağı",500,10000)
                localStorage.setItem("a" , 5)
                start()
            }
            if (element.id == 100 && localStorage.getItem("money") >= 25000  && localStorage.getItem("b") == 4){
                item(2,"Tanrının zırh eti",1000,25000)
                localStorage.setItem("b" , 5)
                start()
            }
            if (element.id == 101 &&localStorage.getItem("money") >= 100 && localStorage.getItem("d") == 1){
                cultivation(100,100)
                start()
            }
            if (element.id == 102 &&localStorage.getItem("money") >= 100000 && localStorage.getItem("a") == 5){
                item(1,"Gerçek Tanrının Mızrağı",1000,100000)
                start()
            }
            if (element.id == 103 &&localStorage.getItem("money") >= 250000 && localStorage.getItem("b") == 5){
                item(2,"Tanrının Zırh seti",2500,250000)
                start()
            }//Görevler
            if (element.id == 30){
                a = 0
                if(localStorage.getItem("c") == 1){
                    metin.className = "metin";
                    metin.innerHTML= `
                    <p>Lion krallığı Büyük orman...<p>
                    `
                    c = 0
                    metin.addEventListener("click",()=>{
                        c++
                        console.log(c)
                        if(c == 1){
                            metin.innerHTML= `
                            <h1>General Alex Walker</h1>
                            <p>Asker sonunda gelebildin uzun bir zamandır seni bekliyordum.Senin gibi bir tembel biri 
                            nasıl benim yardımçım olabilir halla aklım almıyor!</p>
                            `
                        }
                        if(c == 2){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>Özür dilerim General!</p>
                            `
                        }
                        if(c == 3){
                            metin.innerHTML= `
                            <h1>General Alex Walker</h1>
                            <p>Sana bir görevim var evlat son zamanlarda Ticaret şehrin'ne yakın yerlere barbarlar saldırıyor
                            Biran önce git ve barabarları öldür!</p>
                            `
                        }
                        if(c == 4){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>Emredersiniz General!</p>
                            `
                        }
                        if(c == 5){
                            localStorage.setItem("exp" , parseInt(localStorage.getItem("exp")) + 25);
                            metin.className = "metin";
                            metin.innerHTML= `
                            <h1>Görev tamamlandı<h1>
                            <p>25 exp kazandın<p>
                            `
                            localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
                            a = 1
                            window.location.reload();
                        }
                    })
                }
                if(localStorage.getItem("c") == 2){
                    dungeon(0.2,1 ,5,25,1)
                }
                if(localStorage.getItem("c") == 3){
                    dungeon(0.4,1 ,25,50,1)
                }
                if(localStorage.getItem("c") == 4){
                    metin.className = "metin";
                    metin.innerHTML= `
                    <p>Görevi yapıp kamp'a geri döndün<p>
                    `
                    c = 0
                    metin.addEventListener("click",()=>{
                        c++
                        console.log(c)
                        if(c == 1){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>General nerde asker?</p>
                            `
                        }
                        if(c == 2){
                            metin.innerHTML= `
                            <h1>Asker</h1>
                            <p>General ecele ile başkent'e gitti Efendinim</p>
                            `
                        }
                        if(c == 3){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>Sağol Asker</p>
                            `
                        }
                        if(c == 4){
                            metin.innerHTML= `
                            <h1>Ödül</h1>
                            <p>25 altın</p>
                            `
                        }if(c == 5){
                            localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
                            localStorage.setItem("money",parseInt(localStorage.getItem("money")) + 25);
                            a = 1
                            window.location.reload();
                        }
                    })
                }
                if(localStorage.getItem("c") == 5){
                    metin.className = "metin";
                    metin.innerHTML= `
                    <p>18 gün sonra General kamp'a döndü<p>
                    `
                    c = 0
                    metin.addEventListener("click",()=>{
                        c++
                        console.log(c)
                        if(c == 1){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>Hoş Geldiniz General!</p>
                            `
                        }
                        if(c == 2){
                            metin.innerHTML= `
                            <h1>General Alex Walker</h1>
                            <p>Hiç hoşbulmadım asker Hiç!</p>
                            `
                        }
                        if(c == 3){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>Ne oldu General?</p>
                            `
                        }
                        if(c == 4){
                            metin.innerHTML= `
                            <h1>General Alex Walker</h1>
                            <p>Ülkemiz Lu hanedanlığına savaş açmaya karar verdi. Dünyanın bir uçundaki ülkeye şavaş açtık asker</p>
                            `
                        }
                        if(c == 5){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>Ama bu şaçmalık biz barışcıl bir ülkeyiz başka bir ülkeye 1000 yıllardır şavaş açmadık ama neden şimdi?</p>
                            `
                        }
                        if(c == 6){
                            metin.innerHTML= `
                            <h1>General Alex Walker</h1>
                            <p>Lu hanedanlığını güçlenmesinden korkuyorlar ondan olabilir ama...Bilmiyorum asker ne diyceğimi bilmiyorum resmen bizi ölüme götürüyorlar,KAptaki askerlere söyle Hazırlansınlar savaş'a gdiyoruz</p>
                            `
                        }
                        if(c == 7){
                            metin.innerHTML= `
                            <h1>Ödül</h1>
                            <p>25 exp</p>
                            `
                        }if(c == 8){
                            localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
                            localStorage.setItem("exp",parseInt(localStorage.getItem("exp")) + 25);
                            a = 1
                            window.location.reload();
                        }
                    })
                }
                if(localStorage.getItem("c") == 6){
                    metin.className = "metin";
                    metin.innerHTML= `
                    <p>Askerleri topladın ve kamp'dan ayrılıp mir Şehrine doğru yola çıktınız mir şehrinden gemi ile Ordon ülkesinin altın şehrinde iniçeksiniz.<p>
                    <p>Yolda giderken onünüzü bir grup barbar kesiyor onları ez geç!</p>
                    `
                    metin.addEventListener("click",()=>{
                        a = 1
                        localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
                        window.location.reload();

                    })
                }
                if(localStorage.getItem("c") == 7){
                    dungeon(0.4,1 ,25,50,1)
                }
                if(localStorage.getItem("c") == 8){
                    dungeon(0.7,1 ,25,50,1)
                }
                if(localStorage.getItem("c") == 9){
                    dungeon(1,1 ,25,50,1)
                }
                if(localStorage.getItem("c") == 10){
                    metin.className = "metin";
                    metin.innerHTML= `
                    <p>Barbarları yendiniz ve Mir şehrine vardın ordan Dünyanın ortası ticaret yolunu kullarak Altın Şehre gidiceksiniz<p>
                    `
                    c = 0
                    metin.addEventListener("click",()=>{
                        c++
                        console.log(c)
                        if(c == 1){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>General Korkuyorum.</p>
                            `
                        }
                        if(c == 2){
                            metin.innerHTML= `
                            <h1>General Alex Walker</h1>
                            <p>Korkma evlat ölümden korkuluçak hiç bir şey yok.</p>
                            `
                        }
                        if(c == 3){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>Daha önce doğu ile ilgili bir şeyler okumuştum , orası nasıl bir yer general?</p>
                            `
                        }
                        if(c == 4){
                            metin.innerHTML= `
                            <h1>General Alex Walker</h1>
                            <p>Doğu tipi büyü kullanıyorlar yani büyüyü içlerinde depoluyorlar bu yüzden aşırı güçlüler ama onları dururabiliriz.</p>
                            `
                        }
                        if(c == 5){
                            metin.innerHTML= `
                            <h1>General Alex Walker</h1>
                            <p>Ne Kadar Taştan bedenleri ve dağları delicek kadar fiziksel güç'e sahip olsalarda bizim gibi büyüde usta değiller,Biliyorsun biz büyüyü doğadan aldığımız gibi kullanırız onlarla yakın dövüş'e girme yoksa senin ben bille kurtaramam!</p>
                            `
                        }
                        if(c == 6){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>Teşşekür ederim general</p>
                            `
                        }

                        if(c == 7){
                            metin.innerHTML= `
                            <h1>Ödül</h1>
                            <p>25 altın</p>
                            <p>100 exp</p>
                            `
                        }if(c == 8){
                            localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
                            localStorage.setItem("money",parseInt(localStorage.getItem("money")) + 25);
                            localStorage.setItem("exp",parseInt(localStorage.getItem("exp")) + 100);
                            a = 1
                            window.location.reload();
                        }
                    })
                }
                if(localStorage.getItem("c") ==11){
                    dungeon(1,1 ,25,50,1)
                }
                if(localStorage.getItem("c") ==12){
                    dungeon(1,1 ,50,25,1)
                }
                if(localStorage.getItem("c") == 13){
                    metin.className = "metin";
                    metin.innerHTML= `
                    <p>Yolda irili ufaklı bir çok deniz canlısı ile şavaştıktan sonra Sonunda Altın şehire vardınız<p>
                    `
                    c = 0
                    metin.addEventListener("click",()=>{
                        c++
                        if(c == 1){
                            metin.innerHTML= `
                            <h1>General Alex Walker</h1>
                            <p>Askerler Batı ile doğu arasındaki şavaş başlamıştır sizden tek bir istediğim var Ülkeniz için ölmeniz!</p>
                            `
                        }
                        if(c == 2){
                            metin.innerHTML= `
                            <h1>Askerler</h1>
                            <p>Emredersiniz general</p>
                            `
                        }
                        if(c == 3){
                            metin.innerHTML= `
                            <h1>Ödül</h1>
                            <p>100 gold</p>
                            `
                        }
                        if(c == 4){
                            localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
                            localStorage.setItem("money",parseInt(localStorage.getItem("money")) + 100);
                            a = 1
                            window.location.reload();
                        }
                    })
                }
                if(localStorage.getItem("c") == 14){
                    dungeon(1,1.5 ,10,50,1)
                }
                if(localStorage.getItem("c") == 15){
                    dungeon(1,1.5 ,10,50,1)
                }
                if(localStorage.getItem("c") == 16){
                    metin.className = "metin";
                    metin.innerHTML= `
                    <h1>General Alex Walker</h1>
                    <p>Asker Sana özel gizli bir görevim var bu görevi yaparsan eğer güçüne güç katıcaksın!<p>
                    `
                    c = 0
                    metin.addEventListener("click",()=>{
                        c++
                        if(c == 1){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>Ne yapmam gerek general ülkem için herşeye hazırım</p>
                            `
                        }
                        if(c == 2){
                            metin.innerHTML= `
                            <h1>General Alex Walker</h1>
                            <p>başlangıç klanını yamalaman gerikyor asker hazırlan sana bir harita vericem.</p>
                            `
                        }
                        if(c == 3){
                            metin.innerHTML= `
                            <h1>Ödül</h1>
                            <p>100 gold</p>
                            <p>500 exp</p>
                            `
                        }
                        if(c == 4){
                            localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
                            localStorage.setItem("money",parseInt(localStorage.getItem("money")) + 100);
                            localStorage.setItem("exp",parseInt(localStorage.getItem("exp")) + 500);
                            a = 1
                            window.location.reload();
                        }
                    })
                }
                if(localStorage.getItem("c") == 17){
                    dungeon(2,3 , 50,50,1)
                }
                if(localStorage.getItem("c") == 18){
                    dungeon(2,3 , 50,50,1)
                }
                if(localStorage.getItem("c") == 19){
                    dungeon(2,3 , 50,50,1)
                }
                if(localStorage.getItem("c") == 20){
                    dungeon(2,3 , 50,50,1)
                }
                if(localStorage.getItem("c") == 21){
                    metin.className = "metin";
                    metin.innerHTML= `
                    <p>Görevini tamamladın etrafta biraz turladın ve gözüne cultivation'a giriş diye bir kitap ilişti<p>
                    <p>Aldın ve okumaya başladın!</p>  
                    `
                    c = 0
                    metin.addEventListener("click",()=>{
                        c++
                        if(c == 1){
                            metin.innerHTML= `
                            <h1>Ödül</h1>
                            <p>50 gold</p>
                            <p>100 exp</p>
                            `
                        }
                        if(c == 2){
                            localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
                            localStorage.setItem("money",parseInt(localStorage.getItem("money")) + 50);
                            localStorage.setItem("exp",parseInt(localStorage.getItem("exp")) + 100);
                            localStorage.setItem("d" , 1)
                            a = 1
                            window.location.reload();
                        }
                    })
                }
                if(localStorage.getItem("c") == 22){
                    dungeon(2,3 , 50,100,1)
                }
                if(localStorage.getItem("c") == 23){
                    dungeon(2,3 , 50,100,1)
                }
                if(localStorage.getItem("c") == 24){
                    dungeon(2,3 , 50,100,1)
                }
                if(localStorage.getItem("c") == 25){
                    metin.className = "metin";
                    metin.innerHTML= `
                    <p>Yolda bir kaç asker grupu gördün onları yendin ve geri döndün<p>
                    `
                    c = 0
                    metin.addEventListener("click",()=>{
                        c++
                        if(c == 1){
                            metin.innerHTML= `
                            <h1>Ödül</h1>
                            <p>10 gold</p>
                            <p>250 exp</p>
                            `
                        }
                        if(c == 2){
                            localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
                            localStorage.setItem("money",parseInt(localStorage.getItem("money")) + 10);
                            localStorage.setItem("exp",parseInt(localStorage.getItem("exp")) + 250);
                            localStorage.setItem("d" , 1)
                            a = 1
                            window.location.reload();
                        }
                    })
                }
                if(localStorage.getItem("c") == 26){
                    metin.className = "metin";
                    metin.innerHTML= `
                    <h1>Sen</h1>
                    <p>General nerde?<p>
                    `
                    c = 0
                    metin.addEventListener("click",()=>{
                        c++
                        if(c == 1){
                            metin.innerHTML= `
                            <h1>Asker</h1>
                            <p>Genral ve büyük bir ordu ile klanlara saldırıyor onları güçten düşürmeye çalışıyor.</p>
                            `
                        }
                        if(c == 2){
                            metin.innerHTML= `
                            <h1>Sen</h1>
                            <p>General gelince bana haber et.</p>
                            `
                        }
                        if(c == 3){
                            metin.innerHTML= `
                            <h1>Asker </h1>
                            <p>emredersiniz!</p>
                            `
                        }
                        if(c == 4){
                            metin.innerHTML= `
                            <p>Generalin gelmesini bekledin ama general asla gelmedi general ve ordusu Zen Feng chi yu tarafından katledildi!</p>
                            `
                        }
                        if(c == 3){
                            metin.innerHTML= `
                            <h1>Ödül</h1>
                            <p>50 gold</p>
                            <p>250 exp</p>
                            `
                        }
                        if(c == 5){
                            localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
                            localStorage.setItem("money",parseInt(localStorage.getItem("money")) + 50);
                            localStorage.setItem("exp",parseInt(localStorage.getItem("exp")) + 250);
                            localStorage.setItem("d" , 1)
                            a = 1
                            window.location.reload();
                        }
                    })
                }
            }
        }
    })
});
lvl()
start()
if(localStorage.getItem("c")== 0){
    metin.className = "metin";
    metin.innerHTML= `
    <h1></h1>
    <p>Kimsenin bilmediği bir yerde...</p>
    `
    c = 0
    metin.addEventListener("click",()=>{
        c++
        if(c == 1){
            metin.innerHTML= `
            <h1>1-Numara</h1>
            <p>Lu hanedanlığı 475 yılında dünyanın en büyük devletlerinden biri haline geldi!
            Lu hanedanlığı Buzul dünyada gözcülerin varlığın ve antik dünya hakında çok şey öğrendiler
            Bu yüzden konsey toplandı Lu hanedanlığı durdurulmalı yoksa bu bizi riske atar.</p>
             `
        }
        if(c == 2){
            metin.innerHTML= `
            <h1>2-Numara</h1>
            <p>Bence artık insanları yok etmemizin zamanı geldi eminim evrende böyle istiyordur
            eğer insanları şimdi durdurmazsak ileride bizim varlığımız ve evreni tehilikeye atar</p>
             ` 
        }
        if(c == 3){
            metin.innerHTML= `
            <h1>1-Numara</h1>
            <p>Tüm insanlığı yok etmek evrene hakertir 2-Numara İnsanlık yaşamalı ama lu hanedanlığı değil
            onlar sınırı aştı!</p>
             ` 
        }
        if(c == 4){
            metin.innerHTML= `
            <h1>3-Numara</h1>
            <p>Dostlarım bizim görevimiz insanlığı gözlemek bundan fazlası değil eğer ileri gidersek
            Galaktik Konsey bizim varlığımıza son verme kararı alabilir.
            Açıkçası ben ölmek istemiyor,sizi bilmem.</p>
             ` 
        }
        if(c == 5){
            metin.innerHTML= `
            <h1>4-Numara</h1>
            <p>3-Numara'ya katılıyorum görevimiz dışına çıkmayalım insanlık risk oluştursaydı heralde
            Galaktik konsey harekete geçerti demeki insanlık henüz bir risk değil.</p>
             ` 
        }
        if(c == 6){
            metin.innerHTML= `
            <h1>1-Numara</h1>
            <p>O zaman bir oylama yapalım. .</p>
             ` 
        }
        if(c == 7){
            metin.innerHTML= `
            <h1>Not</h1>
            <p>Hikaye görevlerini görevler kısmından alabilisiniz</p>
            <p>Oyuna giriş ödülü olarak 2 dungeon key verileçektir lütfen onları başlangıç setini almadan kullanmayınız</p>
            <p>ve son olarak eşyaları marketten satın alabilirsiniz.</p>
            <p>Şimdiden iyi oyunlar dilir.</p>
             ` 
        }
        if(c == 8){
            localStorage.setItem("c" , parseInt(localStorage.getItem("c")) + 1);
            localStorage.setItem("dungeon_cart",parseInt(localStorage.getItem("dungeon_cart")) + 2);
            window.location.reload();
        }
    })
}
