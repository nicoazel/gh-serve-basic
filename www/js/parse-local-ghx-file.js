function parse_ghx(){
  var parser = new DOMParser();
  //var filepath = document.getElementById("upload_files").value;
  let filepath = "../../scripts/Division.ghx"
  console.log(filepath);
  var xmlDoc = parser.parseFromString(filepath,"application/xml");

  console.log(xmlDoc);
}
