$(function(){
  var php = "php/drupal stack";
  var ruby = "ruby/rails stack";
  var java = "java/android stack";
  var css = "css/design stack";
  var csharp = "c#/.net stack";

  $("form#survey").submit(function(event){
    event.preventDefault();

    var name = $("form input#usr").val();
    var age = parseInt($("#age").val());
    var design = parseInt($("#gender").val());
    var gender = $("input:radio[name=gender]:checked").val();
    var os = parseInt($("#os").val());

    if (design === 1){
      $("#result").text("Hello " + name + ", your suggested stack is " + css + ".");
    } else if ((design === 2) && (age <= 30) && (gender ==="1") && (os === 2)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + java + ".");
    } else if ((design === 2) && (age <= 30) && (gender ==="1") && (os === 1)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + csharp + ".");
    } else if ((design === 2) && (age <= 30) && (gender ==="1") && (os === 3)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + ruby + ".");
    } else if ((design === 2) && (age <= 30) && (gender ==="1") && (os === 4)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + php + ".");
    } else if ((design === 2) && (age <=30) && (gender ==="2") && (os === 1)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + csharp + ".");
    } else if ((design === 2) && (age <=30) && (gender ==="2") && (os === 2)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + java + ".");
    } else if ((design === 2) && (age <=30) && (gender ==="2") && (os === 3)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + ruby + ".");
    } else if ((design === 2) && (age <=30) && (gender ==="2") && (os === 4)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + php + ".");
    } else if ((design === 2) && ( 30 < age <= 50) && (gender ==="1")) {
      $("#result").text("Hello " + name + ", your suggested stack is " + php + ".");
    } else if ((design === 2) && ( 30 < age <= 50) && (gender ==="2")) {
      $("#result").text("Hello " + name + ", your suggested stack is " + ruby + ".");
    } else if (((design === 2) &&　(age > 50) && (gender === 2)) || (os === 3)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + ruby + ".");
    } else if (((design === 2) &&　(age > 50) && (gender === 1)) || (os === 1)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + csharp + ".");
    } else if (((design === 2) &&　(age > 50) && (gender === 2)) || (os ===2)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + java + ".");
    } else if (((design === 2) &&　(age > 50) && (gender === 2)) || (os ===4)) {
      $("#result").text("Hello " + name + ", your suggested stack is " + php + ".");
    };
  });
});
