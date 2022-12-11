let result =() =>{
    var name =document.getElementById("name").value;
    var clas = parseInt(document.getElementById("clas").value);
    var eng = parseInt(  document.getElementById("eng").value);
    var urdu =  parseInt(document.getElementById("urdu").value);
    var math = parseInt( document.getElementById("math").value);
    var chem =parseInt( document.getElementById("chem").value);
    var phy =  parseInt(document.getElementById("phy").value);

    if (eng >100 ||urdu >100 ||math >100 ||chem >100 ||phy >100) {
        alert("Correct the Value ")
    }

    var obt = eng+urdu+math+chem+phy;
    var per =obt/500*100;

    if (per >=80) {
        document.getElementById("grade").innerHTML ="A one"
    }
    else if (per >=70) {
        document.getElementById("grade").innerHTML ="A"
    }
    else if (per >=60) {
        document.getElementById("grade").innerHTML ="B"
    }
    else if (per >=50) {
        document.getElementById("grade").innerHTML ="C"
    }
    if (per <40) {
        document.getElementById("grade").innerHTML ="F"
    }

 document.getElementById("obt").innerHTML =obt;
document.getElementById("per").innerHTML =per;
document.getElementById("name1").innerHTML =name;
document.getElementById("class").innerHTML =clas;
}