$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "히가시노",size:50 },
   
    headers: { Authorization: "KakaoAK 236fe2947416052ad7044400f1de7e66" } 
})

    .done(function (msg) {
        let slidebox=$('.slidebox article')
        for(i=0;i<slidebox.length;i++){
       
        $('.slidebox article').eq(i).append("<img src='"  + msg.documents[i].thumbnail + "'/>"); 
        $('.slidebox article').eq(i).append("<strong>" + msg.documents[i].title + "</strong> <br>"); 
        $('.slidebox article').eq(i).append("<strong>" + msg.documents[i].price + "원</strong>");
       

        }
    });


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "요리",size:50 },
       
        headers: { Authorization: "KakaoAK 236fe2947416052ad7044400f1de7e66" } 
    })
    
        .done(function (msg) {
            let title2=$('.title2 article')
            for(i=0;i<title2.length;i++){
           
            $('.title2 article').eq(i).append("<img src='"  + msg.documents[i].thumbnail + "'/>"); 
            $('.title2 article').eq(i).append("<strong>" + msg.documents[i].title + "</strong> <br>"); 
            $('.title2 article').eq(i).append("<strong>" + msg.documents[i].price + "원</strong>");
           
    
            }
        });
       


        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "마스다 미리",size:50 },
           
            headers: { Authorization: "KakaoAK 236fe2947416052ad7044400f1de7e66" } 
        })
        
            .done(function (msg) {
                let title3=$('.title3 article')
                for(i=0;i<title3.length;i++){
               
                $('.title3 article').eq(i).append("<img src='"  + msg.documents[i].thumbnail + "'/>"); 
                $('.title3 article').eq(i).append("<strong>" + msg.documents[i].title + "</strong> <br>"); 
                $('.title3 article').eq(i).append("<strong>" + msg.documents[i].price + "원</strong>");
               
        
                }

                $.ajax({
                    method: "GET",
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    data: { query: "글쓰기",size:50 },
                   
                    headers: { Authorization: "KakaoAK 236fe2947416052ad7044400f1de7e66" } 
                })
                
                    .done(function (msg) {
                        let title4=$('.title4 article')
                        for(i=0;i<title4.length;i++){
                       
                        $('.title4 article').eq(i).append("<img src='"  + msg.documents[i].thumbnail + "'/>"); 
                        $('.title4 article').eq(i).append("<strong>" + msg.documents[i].title + "</strong> <br>"); 
                        $('.title4 article').eq(i).append("<strong>" + msg.documents[i].price + "원</strong>");
                       
                
                        }
                    });

                    $.ajax({
                        method: "GET",
                        url: "https://dapi.kakao.com/v3/search/book?target=title",
                        data: { query: "홍춘욱",size:50 },
                       
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
   