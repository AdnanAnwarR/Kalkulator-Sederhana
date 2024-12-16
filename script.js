function tombol1() {
  var txt1 = document.getElementById("text1").value;
  if (txt1 == "") {
    console.log("txt kosong");
    var satu = document.getElementById("tombol1").value;
    console.log(satu);
    if (
      satu == "tambah" ||
      satu == "kurang" ||
      satu == "bagi" ||
      satu == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += satu;
    }
  } else {
    var satu = document.getElementById("tombol1").value;

    txt1 += satu;
  }
  console.log(txt1);
  document.getElementById("text1").value = txt1;
}
function tombol2() {
  var txt1 = document.getElementById("text1").value;
  if (txt1 == "") {
    console.log("txt kosong");
    var dua = document.getElementById("tombol2").value;
    if (dua == "tambah" || dua == "kurang" || dua == "bagi" || dua == "kali") {
      alert("simbol");
    } else {
      txt1 += dua;
    }
  } else {
    var dua = document.getElementById("tombol2").value;
    txt1 += dua;
  }
  document.getElementById("text1").value = txt1;
}
function tombol3() {
  var txt1 = document.getElementById("text1").value;
  if (txt1 == "") {
    console.log("txt kosong");
    var tiga = document.getElementById("tombol3").value;
    if (
      tiga == "tambah" ||
      tiga == "kurang" ||
      tiga == "bagi" ||
      tiga == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += tiga;
    }
  } else {
    var tiga = document.getElementById("tombol3").value;
    txt1 += tiga;
  }
  document.getElementById("text1").value = txt1;
}
function tomboltambah1() {
  var txt1 = document.getElementById("text1").value;
  if (txt1 == "") {
    console.log("txt kosong");
    var tambah = document.getElementById("tomboltambah").value;
    if (
      tambah == "tambah" ||
      tambah == "kurang" ||
      tambah == "bagi" ||
      tambah == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += "+";
    }
  } else {
    var tambah = document.getElementById("tomboltambah").value;
    var array_text = txt1.split("");
    var length = txt1.length - 1;
    if (
      array_text[length] == "/" ||
      array_text[length] == "*" ||
      array_text[length] == "+" ||
      array_text[length] == "-"
    ) {
      alert("ini simbol");
      return false;
    }

    txt1 += "+";
  }
  document.getElementById("text1").value = txt1;
}
function tombol4() {
  var txt1 = document.getElementById("text1").value;

  var empat = document.getElementById("tombol4").value;
  if (txt1 == "") {
    console.log("txt kosong");

    if (
      empat == "tambah" ||
      empat == "kurang" ||
      empat == "bagi" ||
      empat == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += empat;
    }
  } else {
    txt1 += empat;
  }
  document.getElementById("text1").value = txt1;
}
function tombol5() {
  var txt1 = document.getElementById("text1").value;

  var lima = document.getElementById("tombol5").value;
  if (txt1 == "") {
    console.log("txt kosong");

    if (
      lima == "tambah" ||
      lima == "kurang" ||
      lima == "bagi" ||
      lima == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += lima;
    }
  } else {
    txt1 += lima;
  }
  document.getElementById("text1").value = txt1;
}
function tombol6() {
  var txt1 = document.getElementById("text1").value;

  var enam = document.getElementById("tombol6").value;
  if (txt1 == "") {
    console.log("txt kosong");

    if (
      enam == "tambah" ||
      enam == "kurang" ||
      enam == "bagi" ||
      enam == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += enam;
    }
  } else {
    txt1 += enam;
  }
  document.getElementById("text1").value = txt1;
}
function tombolkurang1() {
  var txt1 = document.getElementById("text1").value;
  if (txt1 == "") {
    console.log("txt kosong");
    var kurang = document.getElementById("tombokurang").value;
    if (
      kurang == "tambah" ||
      kurang == "kurang" ||
      kurang == "bagi" ||
      kurang == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += "-";
    }
  } else {
    var kurang = document.getElementById("tombolkurang").value;
    var array_text = txt1.split("");
    var length = txt1.length - 1;
    if (
      array_text[length] == "/" ||
      array_text[length] == "*" ||
      array_text[length] == "+" ||
      array_text[length] == "-"
    ) {
      alert("ini simbol");
      return false;
    }

    txt1 += "-";

    /*console.log(array_text);
        console.log(array_text[i]);
        console.log('i adadlah : ',i)*/
  }
  document.getElementById("text1").value = txt1;
}
function tombol7() {
  var txt1 = document.getElementById("text1").value;

  var tujuh = document.getElementById("tombol7").value;
  if (txt1 == "") {
    console.log("txt kosong");

    if (
      tujuh == "tambah" ||
      tujuh == "kurang" ||
      tujuh == "bagi" ||
      tujuh == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += tujuh;
    }
  } else {
    txt1 += tujuh;
  }
  document.getElementById("text1").value = txt1;
}
function tombol8() {
  var txt1 = document.getElementById("text1").value;

  var delapan = document.getElementById("tombol8").value;
  if (txt1 == "") {
    console.log("txt kosong");

    if (
      delapan == "tambah" ||
      delapan == "kurang" ||
      delapan == "bagi" ||
      delapan == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += delapan;
    }
  } else {
    txt1 += delapan;
  }
  document.getElementById("text1").value = txt1;
}
function tombol9() {
  var txt1 = document.getElementById("text1").value;
  if (txt1 == "") {
    console.log("txt kosong");
    var sembilan = document.getElementById("tombol9").value;
    if (
      sembilan == "tambah" ||
      sembilan == "kurang" ||
      sembilan == "bagi" ||
      sembilan == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += sembilan;
    }
  } else {
    var sembilan = document.getElementById("tombol9").value;
    // var array_text = [];
    // for (var i = 0; i < txt1.length; i++) {
    // 	array_text.push(txt1[i])

    // }console.log(array_text);
    // if(array_text[txt1.length] == sembilan){
    // 	alert('ini simbol');
    // }else{*/
    txt1 += sembilan;
    // }
  }
  document.getElementById("text1").value = txt1;
}
function tombolx1() {
  var txt1 = document.getElementById("text1").value;
  if (txt1 == "") {
    console.log("txt kosong");
    var kali = document.getElementById("tombolx").value;
    if (
      kali == "tambah" ||
      kali == "kurang" ||
      kali == "bagi" ||
      kali == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += "*";
    }
  } else {
    var kali = document.getElementById("tombolx").value;
    var array_text = txt1.split("");
    var length = txt1.length - 1;
    if (
      array_text[length] == "/" ||
      array_text[length] == "*" ||
      array_text[length] == "+" ||
      array_text[length] == "-"
    ) {
      alert("ini simbol");
      return false;
    }
    txt1 += "*";
  }
  document.getElementById("text1").value = txt1;
}
function tombol0() {
  var txt1 = document.getElementById("text1").value;
  if (txt1 == "") {
    console.log("txt kosong");
    var nol = document.getElementById("tombol0").value;
    if (nol == "tambah" || nol == "kurang" || nol == "bagi" || nol == "kali") {
      alert("simbol");
    } else {
      txt1 += nol;
    }
  } else {
    var nol = document.getElementById("tombol0").value;
    /*var array_text = [];
        for (var i = 0; i < txt1.length; i++) {
            array_text.push(txt1[i])

        }console.log(array_text);
        if(array_text[txt1.length] == nol){
            alert('ini simbol');
        }else{*/
    txt1 += nol;
    /*}*/
  }
  document.getElementById("text1").value = txt1;
}
function tombolbagi1() {
  var txt1 = document.getElementById("text1").value;
  if (txt1 == "") {
    console.log("txt kosong");
    var bagi = document.getElementById("tombolbagi").value;
    if (
      bagi == "tambah" ||
      bagi == "kurang" ||
      bagi == "bagi" ||
      bagi == "kali"
    ) {
      alert("simbol");
    } else {
      txt1 += "/";
    }
  } else {
    var bagi = document.getElementById("tombolbagi").value;
    var array_text = txt1.split("");
    var length = txt1.length - 1;

    if (
      array_text[length] == "/" ||
      array_text[length] == "*" ||
      array_text[length] == "+" ||
      array_text[length] == "-"
    ) {
      alert("ini simbol");

      return false;
    }

    txt1 += "/";
  }

  document.getElementById("text1").value = txt1;
}
function hasilbtn() {
  var txt1 = document.getElementById("text1").value;
  var array_text = txt1.split("");
  var hasil = 0;
  var length = txt1.length - 1;
  var number1 = 0;
  var number2 = 0;
  var hasil = 0;
  var symbol;
  if (
    array_text[length] == "/" ||
    array_text[length] == "*" ||
    array_text[length] == "+" ||
    array_text[length] == "-"
  ) {
    alert("terakhir simbol");
    return false;
  } else {
    for (var i = 0; i <= array_text.length; i++) {
      console.log("iterasi ke ", i);
      if (Number(array_text[i]) || array_text[i] == 0) {
        if (symbol) {
          number2 += array_text[i];
        } else {
          number1 += array_text[i];
        }
      } else {
        if (symbol == "+") {
          number1 = Number(number1) + Number(number2);
        }
        if (symbol == "-") {
          number1 = Number(number1) - Number(number2);
        }
        if (symbol == "*") {
          number1 = Number(number1) * Number(number2);
        }
        if (symbol == "/") {
          number1 = Number(number1) / Number(number2);
        }
        var number2 = 0;
        if (array_text[i] == "+") {
          symbol = "+";
        }
        if (array_text[i] == "-") {
          symbol = "-";
        }
        if (array_text[i] == "*") {
          symbol = "*";
        }
        if (array_text[i] == "/") {
          symbol = "/";
        }
      }
    }
    alert("hasil = " + number1);
    for (i = 0; i < array_text.length; i++) {
      if (typeof array_text[i] === "number") {
        hasil += array_text[i];
      } else {
        if (array_text[i] == "+") {
          hasil += hasil + 0;
        }

        if (array_text[i] == "-") {
          hasil += hasil - 0;
        }
        if (array_text[i] == "/") {
          hasil += hasil / 1;
        }
        if (array_text[i] == "*") {
          hasil += hasil * 1;
        }
      }
    }
    console.log(hasil);
  }
}

/*function hasilbtn() {
    var txt1 = document.getElementById("text1").value;*/

/*try {
        var hasil = eval(txt1);
        alert("" + hasil);
        } catch (error) {
        alert("salah");
    }*/
/*}*/

function tombolhapus1() {
  document.getElementById("text1").value = "";
}
