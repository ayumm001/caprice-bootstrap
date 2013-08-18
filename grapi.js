jQuery(document).ready( function() {
        $("#btn_1").click(function(){
            alert($('#search').val());
            //send_post($('#search').val());
            send_post();
        });
});

//function send_post(searchShop) {
//  var url = getGurunaviUrl(searchShop);

function send_post() {
  var request = new XMLHttpRequest();
  request.open("GET","sample.xml", true);
  request.send(null);
  request.onreadystatechange = function() {
    if (1==1) {
      //受信完了時の処理
    //  alert("OK!!");
	 // shopName="";
     // xmlData = request.responseXML;
     // shopName = xmlData.getElementsByTagName("name");
     // $("result").innerHTML = shopName;

		var xmlData = request.responseXML;
		nameListTags = xmlData.getElementsByTagName("name");
		addressListTags = xmlData.getElementsByTagName("address");
		opentimeListTags = xmlData.getElementsByTagName("opentime");

		nameLen = nameListTags.length;	// 登録されているユーザー数
		resultText = "";	// データの内容を表示するための変数
		for(i=0; i<nameLen; i++){
			name = nameListTags[i].firstChild.nodeValue;
			address = addressListTags[i].firstChild.nodeValue;
			opentime = opentimeListTags[i].firstChild.nodeValue;
			resultText = resultText + name + " : " + address + ":" + opentime + "<br>";
		}
		
		$("result").innerHTML = resultText;
		}else{
		$("result").innerHTML = "<b>Loading...</b>";
		alert("404");
    }
  }
}

//ぐるなびデータアクセスURL作成
function getGurunaviUrl(searchshop) {
    var gurunaviApi = "http://api.gnavi.co.jp/ver1/RestSearchAPI/";
    var gurunaviKey = "e867b1095216585a4e84ee6925863e76";
    var queri = gurunaviApi + "?keyid=" + gurunaviKey +
        "&pref=PREF13" +
        "&name=" + searchshop;
    return queri;
}