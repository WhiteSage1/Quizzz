let taskai = 0
alert('Sveiki, ar pasiruošę atsakyti į kelis klausimus?');


function question1() {
    ats = prompt(`Įrašykite tinkamą atsakymo varianto numerį. (nuo 1 - 4)\n2+2=\n1) 1\n2) 2\n3) 3\n4) 4`);
    if (ats == 1 || ats == 2 || ats == 3 || ats == 4) {
        if (ats == 4) {
            taskai += 1
            question2()
        }  else {
            question2()
        }
    } else {
        alert('Neįrašėte vieno iš pateiktų atsakymo variantų! \nBandykite iš naujo!');
        question1()
    }     
}
question1()

function question2() {
    ats = prompt(`Įrašykite tinkamą atsakymo varianto numerį. (nuo 1 - 4)\nKiek elnių traukia Kalėdų Senelio roges?\n1) 7\n2) 9\n3) 11\n4) 13`);
    if (ats == 1 || ats == 2 || ats == 3 || ats == 4) {
        if (ats == 2) {
            taskai += 1
            question3()
        }  else {
            question3()
        }
    } else {
        alert('Neįrašėte vieno iš pateiktų atsakymo variantų! \nBandykite iš naujo!');
        question2()
    }
}

function question3() {
    ats = prompt(`Įrašykite tinkamą atsakymo varianto numerį. (nuo 1 - 4)\nKiek kainavo Kauno Kalėdų eglė?\n1) ~70 tūkst\n2) ~80 tūkst\n3) ~90 tūkst\n4) ~100 tūkst`);
    if (ats == 1 || ats == 2 || ats == 3 || ats == 4) {
        if (ats == 2) {
            taskai += 1
            question4()
        }  else {
            question4()
        }
    } else {
        alert('Neįrašėte vieno iš pateiktų atsakymo variantų! \nBandykite iš naujo!');
        question3()
    }
}

function question4() {
    ats = prompt(`Įrašykite tinkamą atsakymo varianto numerį. (nuo 1 - 4)\nJeigu bėgi maratone trečias ir aplenki antrą tai kelintas tu bėgi?\n1) Pirmas\n2) Antras\n3) Trečias\n4) Ketvirtas`);
    if (ats == 1 || ats == 2 || ats == 3 || ats == 4) {
        if (ats == 2) {
            taskai += 1
            question5()
        } else {
            question5()
        }
    } else {
        alert('Neįrašėte vieno iš pateiktų atsakymo variantų! \nBandykite iš naujo!');
        question4()
    }
}

function question5() {
    ats = prompt(`Įrašykite tinkamą atsakymo varianto numerį. (nuo 1 - 4)\nMarijos tėtis turi 5 dukras: Čača, Čeča, Čiča, Čoča… Koks penktos dukros vardas?\n1) Marija\n2) Dora\n3) Čuča\n4) Adelė`);
    if (ats == 1 || ats == 2 || ats == 3 || ats == 4) {
        if (ats == 1) {
            taskai += 1
            question6()
        } else {
            question6()
        }
    } else {
        alert('Neįrašėte vieno iš pateiktų atsakymo variantų! \nBandykite iš naujo!');
        question5()
    }
}

function question6() {
    ats = prompt(`Įrašykite tinkamą atsakymo varianto numerį. (nuo 1 - 4)\nVerslininkas nusipirko arklį už 10 eurų ir pardavė už 20 eurų. Jis tada vėl perpirko tą patį arklį už 30 eurų ir pardavė už 40 eurų. Koks bendras verslininko uždarbis už šiuos du sandorius?\n1) 50€\n2) 40€\n3) 30€\n4) 20€`);
    if (ats == 1 || ats == 2 || ats == 3 || ats == 4) {
        if (ats == 4) {
            taskai += 1
            question7()
        } else {
            question7()
        }
    } else {
        alert('Neįrašėte vieno iš pateiktų atsakymo variantų! \nBandykite iš naujo!');
        question6()
    }
}

function question7() {
    ats = prompt(`Įrašykite tinkamą atsakymo variantą.\nĮsivaizduok, kad esi pilotas. Pirmu reisu į Ameriką skrenda 328 žmonės, antru reisu į Ispaniją skrenda 18 žmonių daugiau. Atgal iš Ispanijos ir Amerikos skrenda tiek pat žmonių. Koks lėktuvo vairuotojo vardas?`);
    taskai += 1
    question8()
}

function question8() {
    ats = prompt(`Įrašykite tinkamą atsakymo varianto numerį. (nuo 1 - 4)\nKiek kiaušinių tuščiu skrandžiu gali suvalgyti žmogus?\n1) 1\n2) 2\n3) 3\n4) 4`);
    if (ats == 1 || ats == 2 || ats == 3 || ats == 4) {
        if (ats == 1) {
            taskai += 1
            question9()
        } else {
            question9()
        }
    } else {
        alert('Neįrašėte vieno iš pateiktų atsakymo variantų! \nBandykite iš naujo!');
        question8()
    }
}

function question9() {
    ats = prompt(`Įrašykite tinkamą atsakymo varianto numerį. (nuo 1 - 4)\nGrįžęs iš rūsio tėvas pasakoja:
– Mačiau rūsyje didelį voratinklį. Jame iš viso buvo 16 vorų ir musių. Iš viso suskaičiavau 102 kojas.
Kiek voratinklyje buvo vorų?\n1) 1\n2) 2\n3) 3\n4) 4`);
    if (ats == 1 || ats == 2 || ats == 3 || ats == 4) {
        if (ats == 3) {
            taskai += 1
            question10()
        } else {
            question10()
        }
    } else {
        alert('Neįrašėte vieno iš pateiktų atsakymo variantų! \nBandykite iš naujo!');
        question9()
    }
}

function question10() {
    ats = prompt(`Įrašykite tinkamą atsakymo varianto numerį. (nuo 1 - 4)\nViename seniai nuskendusiame laive archeologai rado skrynią ir 5 maišelius. Ir skrynioje, ir maišeliuose buvo monetos. Jie iš pradžių atidarė skrynią, tada pirmą maišelį, kuriame rado 450 monetų. Vėliau antrą maišelį, jame rado 300 monetų. Atidarę trečią maišelį, kuriame buvo 225 monetos, jie jau intuityviai nutuokė, kiek monetų yra ketvirtame ir penktame maišeliuose. Pamatę, jog ketvirtame maišelyje yra 180 monetų, jie jau tiksliai žinojo, kiek monetų bus paskutiniame maišelyje. Kiek monetų yra penktame maišelyje?\n1) 120\n2) 130\n3) 140\n4) 150`);
    if (ats == 1 || ats == 2 || ats == 3 || ats == 4) {
        if (ats == 4) {
            taskai += 1
            pabaiga()
        } else {
            pabaiga()
        }
    } else {
        alert('Neįrašėte vieno iš pateiktų atsakymo variantų! \nBandykite iš naujo!');
        question10()
    }
}

function pabaiga() {
    alert(`Atsakėte į visus klausimus!
Ar norite sužinoti kiek taškų surinkote?`)
    point()
}

function point() {
    alert("Surinkote\n" + taskai + "/10")
}