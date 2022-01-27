$(function () {
    $.get("./sub_txt/txt1.txt", function (data) {
      $("#tmpBox").html(data);
    })

    $.ajax({
                    method: "GET",
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    data: { query: "글쓰기"},
                   
                    headers: { Authorization: "KakaoAK 236fe2947416052ad7044400f1de7e66" } 
                })
                
                    .done(function (msg) {
                        let title5=$('.title5 article')
                        for(i=0;i<title5.length;i++){
                       
                        $('.title5 article').eq(i).append("<img src='"  + msg.documents[i].thumbnail + "'/>"); 
                        $('.title5 article').eq(i).append("<strong>" + msg.documents[i].title + "</strong> <br>"); 
                        $('.title5 article').eq(i).append("<strong>" + msg.documents[i].price + "원</strong>");
                       
                
                        }
                    });
                      });