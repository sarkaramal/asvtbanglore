$(function () {
 "use strict";
var header = $('header');
var headerHeight = header.height();
var main_content = $('#main_content');
main_content.css('padding-top',headerHeight + 20 + "px");

var backtoactivity = $('#backtoactivity');

backtoactivity.on("click",function () {
     window.history.back();
}  
);




/*USER INITIAL DATA  */
/*this id should come from otp varification  */

//localStorage.setItem("userId", "160437");

var userId = "160437";
//var userId1 = localStorage.getItem("userId");
var id = window.location.href.split("#")[1];
var url = window.location.href;


alert(id);
getUserDetails(userId);






function getUserDetails(uesrId) {
   //var url = "http://asvtbangalore.com/ASVT/API/index.php?q=getUserData&clientid=" + userId;
    var url = "dummy/exampleuser.json"
   $.get(url,function (data,status) {
      if (data["status"] == "success") {
        
          createTable(data);
      }
   });
}


function createTable(data) {
    
   var user =data["data"]["value"];
   var table = $('#user_data_table');
   var image1 = $('#image1');
   var image2 = $('#image2');
image1.attr("src",user[0]["full_length_photo_file_name"]);
image2.attr("src",user[0]["full_face_photo_file_name"]);
   for(var i=0;i<user.length;i++){
       var stringHtml = '<tr><td>User Id</td><td>'+user[i]["id"]+'</td>';
stringHtml += '<tr><td>Name</td><td>'+user[i]["name"]+'</td>';
stringHtml += '<tr><td>DOB</td><td>'+user[i]["dob"]+'</td>';
stringHtml += '<tr><td>TOB</td><td>'+user[i]["time_of_birth"]+'</td>';

stringHtml += '<tr><td>Height</td><td>'+user[i]["height_feet"]+'" '+ user[i]["height_inches"]+'</td>';

stringHtml += '<tr><td>Weight</td><td>'+user[i]["weight_kgs"]+'</td>';
stringHtml += '<tr><td>Place of Birth</td><td>'+user[i]["place_of_birth"]+'</td>';

stringHtml += '<tr><td>Gothra</td><td>'+user[i]["gothra"]+'</td>';
stringHtml += '<tr><td>Education Qualification</td><td>'+user[i]["qualification"]+'</td>';

stringHtml += '<tr><td>Profession</td><td>'+user[i]["profession"]+'</td>';
stringHtml += '<tr><td>Company</td><td>'+user[i]["company_name"]+'</td>';
stringHtml += '<tr><td>Company Type</td><td>'+user[i]["company_type"]+'</td>';

stringHtml += '<tr><td>Business</td><td>'+user[i]["business_name"]+'</td>';
stringHtml += '<tr><td>Business Type</td><td>'+user[i]["business_type"]+'</td>';

stringHtml += '<tr><td>Brother Married</td><td>'+user[i]["married_brother"]+'</td>';
stringHtml += '<tr><td>Brother Unmarried</td><td>'+user[i]["unmarried_brother"]+'</td>';

stringHtml += '<tr><td>Sister Married</td><td>'+user[i]["married_sister"]+'</td>';
stringHtml += '<tr><td>Sister Unmarried</td><td>'+user[i]["unmarried_sisterr"]+'</td>';

stringHtml += '<tr><td>Secondary Contact Name</td><td>'+user[i]["main_contact_full_name"]+'</td>';
stringHtml += '<tr><td>Secondary Contact no</td><td>'+user[i]["main_contact_num"]+'</td>';

stringHtml += '<tr><td>Primary Contact Name</td><td>'+user[i]["alternate_contact_full_name"]+'</td>';
stringHtml += '<tr><td>Primary Contact no</td><td>'+user[i]["alternate_contact_num"]+'</td>';

stringHtml += '<tr><td>P.Spuse can be Older By</td><td>'+user[i]["spouse_can_be_older_by"]+'</td>';
stringHtml += '<tr><td>P.Spuse can be Younger By</td><td>'+user[i]["spouse_can_be_younger_by"]+'</td>';

stringHtml += '<tr><td>Married Before</td><td>'+user[i]["have_married_before"]+'</td>';
stringHtml += '<tr><td>Are you OK to marry a divorcee/ widow/spinster?</td><td>'+user[i]["okay_to_marry_divorcee_widow_spinster"]+'</td>';

stringHtml += '<tr><td>Matching Ganna (Janampatri)</td><td>'+user[i]["have_married_before"]+'</td>';
stringHtml += '<tr><td>Marry in same Gotra?</td><td>'+user[i]["will_marry_in_same_gotra"]+'</td>';

stringHtml += '<tr><td>Are you Manglik?</td><td>'+user[i]["is_manglik"]+'</td>';
stringHtml += '<tr><td>Marry a Manglik?</td><td>'+user[i]["will_marry_manglink"]+'</td>';

stringHtml += '<tr><td>Place of Residence after Marriage</td><td>'+user[i]["is_manglik"]+'</td>';
stringHtml += '<tr><td>Marry a Manglik?</td><td>'+user[i]["place_of_resid_after_marriage"]+'</td>';
stringHtml += '<tr><td>Father\'s Full Name</td><td>'+user[i]["father_full_name"]+'</td>';
stringHtml += '<tr><td>Mother\'s Full Name</td><td>'+user[i]["mother_full_name"]+'</td>';


stringHtml += '<tr><td>Are you based in Bangalore?</td><td>'+user[i]["located_in_bangalore"]+'</td>';

   }
   table.append(stringHtml);
}


});