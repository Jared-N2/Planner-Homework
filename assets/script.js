// var today = moment();
// $("#currentDay").text(today.format("MMM Do, YYYY, H: mm"));
//https://stackoverflow.com/questions/34625764/moment-js-dynamically-update-time-in-seconds
var update = function() {
    document.getElementById("datetime")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);
//when user logs in they see the date ad current time
//use moment to display current date and time
//the backgrounds for the timeblocks need to change color based on time
//use moment to check current time and compare it to see IF the induividual timeblocks have passed
//when they enter info into timeblock, it needs to be saved to local storage
//on load, we need to see local storage to see list
//loop through local storage and display info
// function allStorage() {

// var values = [],
//     keys = Object.keys(localStorage),
//     i = keys.length;

// while ( i-- ) {
//     values.push( localStorage.getItem(keys[i]) );
// }

// return values;}
//and a clear list button 



// var string = "this0"
// var string1 = "this1"
// var string2 = "this2"
// var string3 = "this3"

// for (let i = 0; i < 4; i++) {
//     if( "this" + i == string2){
//         console.log("HOT DOG")
//     }
//     console.log("this" + i)

// }

// if(parseInt(moment().format("h")) <=  ){
//     document.getElementById("text9").classList.add("past")
// }
function startSchedule() {
    $(".input-group").each(function () {
      var id = $(this).attr("id");
      var formControl= localStorage.getItem(id);
      if (formControl != null) {
        $(this).find(".form-control").val(formControl);
      }
    });
  }
  console.log('hello')
  startSchedule();

var saveBtn = $(".input-group-append");
saveBtn.on("click", function () {
  var hour = $(this).parent().attr("id");
  var formControl= $(this).siblings(".form-control").val();
  localStorage.setItem(hour, JSON.stringify(formControl));
  console.log('hello.pt2')
});

switch (parseInt(moment().format("h"))) {
    case 9:
        for (let i = 0; i < 9; i++) {
            document.getElementById("text0").classList.add("present")
            document.getElementById("text" + i).classList.add("future")
        }
        break;

    case 10:
        for (let i = 0; i < 9; i++) {
            if (i < 1) {
                document.getElementById("text" + i).classList.add("past")
            } else {
                document.getElementById("text" + i).classList.add("future")
                document.getElementById("text1").classList.add("present")
                document.getElementById("text1").classList.remove("future")
            }
        }
        break;

    case 11:
        for (let i = 0; i < 9; i++) {
            if (i < 2) {
                document.getElementById("text" + i).classList.add("past")
            } else {
                document.getElementById("text" + i).classList.add("future")
                document.getElementById("text2").classList.add("present")
                document.getElementById("text2").classList.remove("future")
            }
        }
        break;

    case 12:
        for (let i = 0; i < 9; i++) {
            if (i < 3) {
                document.getElementById("text" + i).classList.add("past")
            } else {
                document.getElementById("text" + i).classList.add("future")
                document.getElementById("text3").classList.add("present")
                document.getElementById("text3").classList.remove("future")
            }
        }
        break;

        case 1:
        for (let i = 0; i < 9; i++) {
            if (i < 4) {
                document.getElementById("text" + i).classList.add("past")
            } else {
                document.getElementById("text" + i).classList.add("future")
                document.getElementById("text4").classList.add("present")
                document.getElementById("text4").classList.remove("future")
            }
        }
        break;

        case 2:
        for (let i = 0; i < 9; i++) {
            if (i < 5) {
                document.getElementById("text" + i).classList.add("past")
            } else {
                document.getElementById("text" + i).classList.add("future")
                document.getElementById("text5").classList.add("present")
                document.getElementById("text5").classList.remove("future")
            }
        }
        break;
        case 3:
        for (let i = 0; i < 9; i++) {
            if (i < 6) {
                document.getElementById("text" + i).classList.add("past")
            } else {
                document.getElementById("text" + i).classList.add("future")
                document.getElementById("text6").classList.add("present")
                document.getElementById("text6").classList.remove("future")
            }
        }
        break;
        case 4:
        for (let i = 0; i < 9; i++) {
            if (i < 7) {
                document.getElementById("text" + i).classList.add("past")
            } else {
                document.getElementById("text" + i).classList.add("future")
                document.getElementById("text7").classList.add("present")
                document.getElementById("text7").classList.remove("future")
            }
        }
        break;

        case 5:
        for (let i = 0; i < 9; i++) {
            if (i < 8) {
                document.getElementById("text" + i).classList.add("past")
            } else {
                document.getElementById("text" + i).classList.add("future")
                document.getElementById("text8").classList.add("present")
                document.getElementById("text8").classList.remove("future")
            }
        }
        break;

    default:
        break;
}


document.getElementById("btn").addEventListener("click", function () {
    console.log(document.getElementById("text2").value)
})