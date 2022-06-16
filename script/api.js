// REST DATA 위치를 지정해주는 곳
fetch("http://127.0.0.1:5000/data")
    .then((response) => response.json())
    .then((data) => {
        function mydata_get_key_and_value(x, y){
            const get_key_and_value = data[x];
            return JSON.stringify(get_key_and_value[y]);
        }

        for (var i in data) {
            //카드 div 생성
            const card = document.createElement('div');
            //카드 div class 설정
            card.setAttribute("class", "card");
            card.setAttribute('id', i)

            //img logo
            const img = document.createElement('img');
            img.setAttribute("class", "cardLogo");

            //h1에 넣을 지자체
            let h1Text = mydata_get_key_and_value(i, "municipality").substring(1, mydata_get_key_and_value(i, "municipality").length - 1)

            let address = ""
            if (h1Text === "중구") {
                address = "joun.png"
            } else if (h1Text === "동구") {
                address = "dong.png"
            } else if (h1Text === "미추홀구") {
                address = "michu.png"
            } else if (h1Text === "연수구") {
                address = "yeon.png"
            } else if (h1Text === "남동구") {
                address = "namd.png"
            } else if (h1Text === "부평구") {
                address = "bupy.png"
            } else if (h1Text === "계양구") {
                address = "geyon.png"
            } else if (h1Text === "서구") {
                address = "seog.png"
            }

            let imgAddress = ("img/" + address)

            //if문 넣어서 이미지
            img.setAttribute("src", imgAddress);
            img.setAttribute("alt", "logo");
            card.appendChild( img );

            //h1 생성
            const cardH1 = document.createElement('h1');
            //h1에 넣을 거 생성
            const cardH1Text = document.createTextNode( h1Text );
            // 텍스트 값을 cardh1에 자식으로 추가
            cardH1.appendChild( cardH1Text );
            card.appendChild( cardH1 );

            /** const cardMore = document.createElement('a');
             cardMore.setAttribute("class", "more");
             const cardMoreText = document.createTextNode("1000명을 기준으로 평가");
             cardMore.appendChild(cardMoreText);
             card.appendChild( cardMore );**/

                //dl 생성
            const cardDl = document.createElement('dl');
            card.appendChild( cardDl );

            //List Deco용 div 생성
            const cardListDeco = document.createElement('div');
            //List Deco용 div class 설정
            cardListDeco.setAttribute("class", "listDeco");
            cardDl.appendChild( cardListDeco );

            // 범죄발생률
            let humanDanger = mydata_get_key_and_value(i, "average_danger")
            let humanResult = ""
            let humanColor = ""
            let humanText = ""
            let humanYear = mydata_get_key_and_value(i, "danger_year") + "년 자료에 기반한 데이터"

            if (humanDanger === '0') {
                humanResult = '데이터 없음'
                humanColor = "background: #a6a6a6"
                humanText = '없음'
                humanYear = '데이터 없음'
            } else if (parseInt(humanDanger) < 37.605) {
                humanResult = humanResult + humanDanger + "명"
                humanColor = "background: #7cb3ff"
                humanText = '적음'
            } else if (parseInt(humanDanger) > 37.605) {
                humanResult = humanResult + humanDanger + "명"
                humanColor = "background: #FF3F14"
                humanText = '많음'
            }
            //0.8425

            const articleDtATextResult = document.createTextNode( humanResult);


            //List Deco용 div 생성
            const articleType = document.createElement('div');
            //List Deco용 div class 설정
            articleType.setAttribute("class", "articleTypeA");
            articleType.setAttribute("style", humanColor);
            cardListDeco.appendChild( articleType );

            const articleTypeA = document.createElement('a');
            articleType.appendChild( articleTypeA );
            const articleTypeText = document.createTextNode( humanText );
            articleTypeA.appendChild( articleTypeText);

            const listDecoDt = document.createElement('dt');
            cardListDeco.appendChild( listDecoDt );
            const articleDtA = document.createElement('a');
            const articleDtAText = document.createTextNode('범죄 발생률 : ');

            articleDtA.appendChild(articleDtAText);
            articleDtA.appendChild(articleDtATextResult);
            cardListDeco.appendChild(articleDtA)

            const listDecoDd = document.createElement('dd');
            const listDecoDdText = document.createTextNode( humanYear );
            listDecoDd.appendChild( listDecoDdText );
            cardListDeco.appendChild( listDecoDd );


            // CCTV
            let cctvNumber = mydata_get_key_and_value(i, "cctv_num")
            let floatCctvNumber = parseFloat(cctvNumber)
            let cctvResult = ""
            let cctvColor = ""
            let cctvText = ""

            if (floatCctvNumber < 0.00) {
                cctvResult = '데이터 없음'
                cctvColor = "background: #a6a6a6"
                cctvText = '없음'
            } else if (floatCctvNumber < 0.84) {
                cctvResult = cctvResult + cctvNumber + "대"
                cctvColor = "background: #FF3F14"
                cctvText = '적음'
            } else if (floatCctvNumber > 0.84) {
                cctvResult = cctvResult + cctvNumber + "대"
                cctvColor = "background: #7cb3ff"
                cctvText = '많음'
            }

            //2번째 요소
            const cardListDecoTWO = document.createElement('div');
            //List Deco용 div class 설정
            cardListDecoTWO.setAttribute("class", "listDeco");
            cardDl.appendChild( cardListDecoTWO );

            const articleTypeTWO = document.createElement('div');
            //List Deco용 div class 설정
            articleTypeTWO.setAttribute("class", "articleTypeA");
            articleTypeTWO.setAttribute("style", cctvColor);
            cardListDecoTWO.appendChild( articleTypeTWO );

            const articleTypeATWO = document.createElement('a');
            articleTypeTWO.appendChild( articleTypeATWO );
            const articleTypeTextTWO = document.createTextNode( cctvText );
            articleTypeATWO.appendChild( articleTypeTextTWO);

            const listDecoDtTWO = document.createElement('dt');
            cardListDecoTWO.appendChild( listDecoDtTWO );
            const articleDtATWO = document.createElement('a');
            const articleDtATextTWO = document.createTextNode('설치된 CCTV : ');
            const articleDtATextResultTWO = document.createTextNode(mydata_get_key_and_value(i, "cctv_num") + " 대");
            articleDtATWO.appendChild(articleDtATextTWO);
            articleDtATWO.appendChild(articleDtATextResultTWO);
            cardListDecoTWO.appendChild(articleDtATWO)

            const listDecoDdTWO = document.createElement('dd');
            const listDecoDdTextTWO = document.createTextNode(mydata_get_key_and_value(i, "cctv_year") + "년 자료에 기반한 데이터");
            listDecoDdTWO.appendChild( listDecoDdTextTWO );
            cardListDecoTWO.appendChild( listDecoDdTWO );

            document.body.appendChild( card );
        }

        const footer = document.createElement('footer');
        const footerMyName = document.createTextNode('ⓒ 2022 2018141009 A 김원정');
        footer.appendChild(footerMyName);

        document.body.appendChild( footer );
    })
    .catch(() => {
        const card = document.createElement('div');
        //카드 div class 설정
        card.setAttribute("class", "card");

        //h1 생성
        const cardH1 = document.createElement('h1');
        //h1에 넣을 거 생성
        const cardH1Text = document.createTextNode('⚠️ 서버 오류');
        // 텍스트 값을 cardh1에 자식으로 추가
        cardH1.appendChild( cardH1Text );
        card.appendChild( cardH1 );

        const cardA = document.createElement('div');
        cardA.setAttribute('class', 'info');
        const cardAtag = document.createElement('a');
        const cardAtagText = document.createTextNode('데이터 서버에 연결되지 않았습니다.');
        cardAtag.setAttribute('class', 'datafail')
        cardAtag.appendChild(cardAtagText);
        cardA.appendChild(cardAtag);
        card.appendChild(cardA);

        document.body.appendChild( card );

        const footer = document.createElement('footer');
        const footerText = document.createTextNode('ⓒ 2022 2018141009 A 김원정');
        footer.appendChild(footerText);
        document.body.appendChild( footer );
    })