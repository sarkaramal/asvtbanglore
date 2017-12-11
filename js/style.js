$(function () {
 "use strict";
var header = $('header');
var headerHeight = header.height();
var main_content = $('#main_content');
main_content.css('padding-top',headerHeight + 20 + "px");


var navMenu = $('#menu'),
    nav = $('nav'),
    backNav = $('#nav_back');

var onClick = function () {
 
   var current = nav.css('margin-left'),
   val = '0%',
   layer = 'block';
   if(current == '0px'){
       val = '-70%';
       layer = 'none';
   }
   
    nav.animate({'margin-left': [val]}, {
        duration: 700
    });
    
}



navMenu.click(onClick);
backNav.click(onClick);


/*USER INITIAL DATA  */
/*this id should come from otp varification  */

localStorage.setItem("userId", "160437");
//localStorage.removeItem("userId");

var userId = localStorage.getItem("userId");

getUserDetailsWelcome("160437");
var profileActivity = $('#profileActivity');

profileActivity.on("click",function (e) {
   
   window.location.href = "profile.html#" + userId;
   
});

var logout = $('#logout');

logout.on("click",function (e) {
   localStorage.removeItem("userId");
   window.location.href = "../index.html"
   
});


var profileName = $('#profile #name');
var loginTime = $('#profile #time');
   
getAllGroomData();



function getUserDetailsWelcome(uesrId) {
   var url = "http://asvtbangalore.com/ASVT/API/index.php?q=getUserData&clientid=" + userId;
     var url = "dummy/exampleuser.json"
   $.get(url,function (data,status) {
      if (data["status"] == "success") {
         var name = data["data"]["value"][0]["name"];
          profileName.text(name);
      }
   });
}

var date = new Date();
loginTime.text(date.toLocaleString('en-US'));





function getAllGroomData(uesrId) {
   //var url = "http://asvtbangalore.com/ASVT/API/index.php?q=getAllGroomData";
   
   var url = "dummy/bride.json"
   $.get(url,function (data,status) {
      if (data["status"] == "success") {
         setAlllist(data);
      }
   });
   
   
}








function setAlllist(data) {
//alert("hi");
var user = data["data"]["value"]

var list = $('#profile_list');


for(var i= 0; i< user.length;i++){
   
   var id = user[i]["id"],
   name = user[i]["name"],
   gothra = user[i]["gothra"],
   dob = user[i]["dob"],
   quali = user[i]["qualification"],
   address = user[i]["address"];
  
   

  var  stringHtml = '<div class="profile_list_row clear">';
               stringHtml +='  <div class="profile_data">';
                  stringHtml += '<a href="profile.html#"'+ id;
                 stringHtml +='"><span class="name">'+ name +'</span></a></br>';
                   stringHtml +='<span class="gutro">';
                    stringHtml +='  Gotro : '+ gothra +' DOB: 27/06/1994</span></br>';
                     stringHtml +='  '+ quali+'</br>';
                    stringHtml +='  '+address+'</br>  ';                                         
                    stringHtml +='</div>  ';                                    
                 stringHtml +=' </div>';  
                 
        list.append(stringHtml); 
     }                            
}


function setAlllistBackup(data) {
//alert("hi");
var user = data["data"]["value"]

var list = $('#profile_list');

for(var i= 0; i< user.length;i++){
   
   var id = user[i]["id"],
   name = user[i]["name"],
   gothra = user[i]["gothra"],
   dob = user[i]["dob"],
   quali = user[i]["qualification"],
   address = user[i]["address"];
   

  var  stringHtml = '<div class="profile_list_row clear">';
          stringHtml +='  <div class="profile_image"> ';
              stringHtml +='  <img src="../img/user-default.png" alt="">  ';             
               stringHtml +=' </div> ';
               stringHtml +='  <div class="profile_data">';
                 stringHtml +='     <span class="name">'+ name +'</span></br>';
                   stringHtml +='<span class="gutro">';
                    stringHtml +='  Gotro : '+ gothra +' DOB: 27/06/1994</span></br>';
                     stringHtml +='  '+ quali+'</br>';
                    stringHtml +='  '+address+'</br>  ';                                         
                    stringHtml +='</div>  ';                                    
                 stringHtml +=' </div>';  
                 
        list.append(stringHtml); 
     }                            
}
});