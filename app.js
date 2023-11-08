// Assignment # 43-48
// JAVASCRIPT

// 1. Show an alert box on click on a link

// function utho(){
//     alert("Utho Ghar Jao")
// }  //DONE


// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user

// function purchase(){
//     alert("Thank you for purchasing this phone!")
// }   //DONE

// 3. Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted.
// var rowcount = document.getElementsByClassName("rowcount")
// function rowCheck(){
//     for(var i=0;i<rowcount.length;i++){
//         rowcount[i].innerHTML = i
//     }
// }
// rowCheck();

// function delRow(rowNum){
//     var row = document.getElementById("row"+rowNum)
//     row.innerHTML = "";
//     rowCheck();
// }//DONE


// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// function changeIMG(ele, flag) {
//     if (flag == 'enter') {
//         ele.src = "https://steamuserimages-a.akamaihd.net/ugc/909046337463491130/AF58A14BD541F9572D8DD3F665F271F6CEEA4F6A/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
//     }
//     else{
//         ele.src = "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m3-f80-f82-portraet/bmw-m3-f80-di-01.jpg"
//     }
// }   //DONE

// 5. Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browser

// function counter(change){
//     var count = document.getElementById("count")
//     var value = Number(count.value)
//     if(change == 'inc'){
//         count.value = value+1
//     }
//     else{
//         count.value = value-1
//     }
// }   //DONE

// Assignment # 43-48 DONE


// Assignment # 49-52
// 1. Create a signup form and display form data in your web 
// page on submission


// function submitForm(){
//     var username = document.getElementById("username")
//     var password = document.getElementById("password")
//     var email = document.getElementById("email")

//     document.write("<h1>Username: "+username.value)
//     document.write("<h1>Email: "+email.value)
//     document.write("<h1>Password: "+password.value)

// }  //DONE

// function seeMore(ele){
//     var desc = document.getElementById("desc")
//     var card = document.getElementById("card")
//     var defaultText = desc.innerHTML
//     if(ele.innerHTML === "See more"){
//         var defaultText = desc.innerHTML;
//         desc.innerHTML = `<b>Description: </b>Presenting the 2016 Chevrolet Camaro SS, an American muscle car that embodies raw
//         power, striking design, and exhilarating performance. The Camaro SS is a symbol of Chevrolet's
//         dedication to crafting iconic performance vehicles that leave an indelible mark on automotive history.
//         Under the hood, the 2016 Camaro SS boasts a potent 6.2-liter V8 engine, delivering an adrenaline-pumping
//         horsepower that propels the car with authority. Its responsive handling, rear-wheel-drive configuration,
//         and precision engineering ensure an exceptional driving experience, whether you're cruising the highways
//         or conquering the track`
//         card.style.height = "800px"
//         ele.innerHTML = "See less"
//     }
//     else {
//         desc.innerHTML = `<b>Description: </b>Presenting the 2016 Chevrolet Camaro SS, an American muscle car that embodies raw
//         power, striking design, and exhilarating performance. The Camaro SS is a symbol of Chevrolet's
//         dedication to  ....`
//         card.style.height = "520px"
//         ele.innerHTML = "See more"
//     }
// }  //DONE

// 3. In previous assignment you have created a tabular data 
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row

// var rowcount = document.getElementsByClassName("rowcount")
// function rowCheck() {
//     for (var i = 0; i < rowcount.length; i++) {
//         rowcount[i].innerHTML = i
//     }
// }
// rowCheck();

// function delRow(rowNum) {
//     var row = document.getElementById("row" + rowNum)
//     row.innerHTML = "";
//     rowCheck();
// }

// function addRow() {
//     var studentName = document.getElementById("studentName")
//     var studentClass = document.getElementById("studentClass")
//     var tableBody = document.getElementById("tableBody")
//     console.log(studentName, studentClass)
//     tableBody.innerHTML += '<tr id="row'+(rowcount.length)+'"'+'><td class="rowcount"></td><td>'+studentName.value+'</td><td>'+studentClass.value+'</td><td><button onclick="delRow('+rowcount.length+')">Delete</button></td></tr >'
//     rowCheck()
// }  //DONE

// Assignment # 49-52 DONE
