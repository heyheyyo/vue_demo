
$(document).ready(function() {
    $('body').on('click', '.help-cat-title:not(.active)', function() {
        $('.help-cat-title').removeClass('active');
        $(this).addClass('active');
        $('.help-cat').removeClass('active');
        $('.'+$(this).data('target')).addClass('active');
    });

    $('body').on('click', '.help-cat-title.active', function() {
        $('.help-cat-title').removeClass('active');
        $('.help-cat').removeClass('active');
    });

    $('body').on('click','.go-to',function() {
        window.location = "/policies";
    });

    $('body').on('click', '#ask', function(event) {
        event.stopPropagation();
        if (!$('.contact-option').hasClass('active')) {
            $('.contact-option').addClass('active');
            $('.contact-area-bg').addClass('active');
            $('body').css('overflow', 'hidden');
        } else {
            $('.contact-option').removeClass('active');
            $('.contact-area-bg').removeClass('active');
            $('body').css('overflow', 'auto');
            $('.contact-option button.active').removeClass('active');
            $('.contact-option button.unactive').removeClass('unactive');
            $('.contact-option br').show();
            $('.contact-textarea').removeClass('active');
            $('.contact-send-area').removeClass('active');
        }
    });

    var data = {
        menu: [
            { sub_title: '如何成為會員？', anwser: '進入StayTuned網站後，點擊頁面右上角「註冊」或「登入」按鈕就可以申請會員。<br>加入會員有兩種方式：<br>(1) 點擊「註冊」，填寫資料後按下「註冊」，並到電子信箱開通帳號，即可成為會員。<br>(2) 點擊「登入」，直接用 Facebook、Google 帳號登入成為會員。' },
            { sub_title: '如何修改個人資料與密碼？', anwser: '進入StayTuned網站後，點擊頁面右上角「註冊」或「登入」按鈕就可以申請會員。<br>加入會員有兩種方式：<br>(1) 點擊「註冊」，填寫資料後按下「註冊」，並到電子信箱開通帳號，即可成為會員。<br>(2) 點擊「登入」，直接用 Facebook、Google 帳號登入成為會員。' },
            { sub_title: '忘記自己的帳號密碼怎麼辦？', anwser: '登入後，於網頁右上角，點擊大頭貼圖像→「使用者專區」頁面最下方，你將會看到「修改密碼」，點擊後輸入舊密碼及欲更新密碼，按下確認修改按鈕即可。' },
            2: '請按下StayTuned頁面右上角的「登入」，你將會看到一個「忘記密碼?」的按鍵，點擊後，系統將會引導你重新設定新的密碼。',
            3: '消費者：<br>1.  將喜歡的商品加到購物車慢慢欣賞<br>2.  與設計師或朋友在 StayTuned 上互相追蹤成為好友，分享彼此的愛好<br>3.  定期收到StayTuned電子報，得到第一手設計商品資訊<br>設計師：<br>1.  輕易透過社群知道消費者喜歡的商品<br>2.  媒合配對製衣廠商，減少成本，輕鬆創業',
            4: '是。為了保障買賣雙方的權益，需要成為會員才能在StayTuned上購買商品，這樣也才能保障你所有購買的相關權益。',
            5: '不需要。加入StayTuned會員完全免費。', 
            //設計師相關問題
            6: '登入後，於網頁右上角，點擊大頭貼圖像→選擇「成為設計師」，點選後填寫相關資訊後，即可成為設計師。',
            7: '登入後，於網頁右上角，點擊大頭貼圖像→選擇「前往設計師後台」，你將在上方列表中看到「商品列表」，點選後即可檢視你要查詢的商品。',
            8: '登入後，於網頁右上角，點擊大頭貼圖像→選擇「前往設計師後台」，你將在上方列表中看到「商品列表」，點選「+新增商品」輸入商品相關資訊後即可上架你的商品。',
            9: '登入後，於網頁右上角，點擊大頭貼圖像→選擇「前往設計師後台」，你將在上方列表中看到「商品列表」，點選後即可編輯你要修改的商品。',
            10: '我們提供「集資預售」方式。<br>登入後，於網頁右上角，點擊大頭貼圖像→選擇「前往設計師後台」，你將在上方列表中看到「預售列表」，點選後即可新增預售案件。<br>收費方式為12%平台管理費用+17%倉儲管理費用+20%預售管理費用。<br>了解更多詳情請至預售條款。',
            //廠商相關問題
            11: '登入後，於網頁右上角，點擊大頭貼圖像→選擇「前往廠商後台」，你將在上方列表中看到「媒合列表」，點選後即可選擇你想合作的對象進行媒合。',
            12: '不會。加入StayTuned廠商完全免費。<br>你也可以根據你的需求付費選擇升級你的會員功能。<br>升級收費方式有兩種：美金25元/月、美金85元/月。',
            13: '合約完成、確認商品無誤並扣除相關費用後，你可以在15個工作天(不含六日及國定假日)之內透過E-Wallet收到你的款項。',
            14: '一旦合約成立，在依照合約內容完成工作之前皆不可任意終止合約。',
            15: '設計師與你皆可以主動尋找合作對象，一旦預售案成立，你的訂單內容數量只會增加不會減少，而且訂單成立後一定是由你來承接此筆訂單。',
            //商品及品牌搜尋
            16: '進入StayTuned首頁後，於上方列表中點選「商城」按鈕，你可以根據「男性」、「女性」、「中性」之分類來瀏覽商品。你也可以透過搜尋關鍵字的方式，在網頁最上方的搜尋欄中找到你想要的商品。',
            17: '進入StayTuned首頁後，於上方列表中點選「商城」按鈕，你可以下拉選單進入「熱門商品」查看。',
            18: '進入StayTuned首頁後，於上方列表中點選「商城」按鈕，你可以下拉選單進入「最新商品」查看。',
            19: '進入StayTuned首頁後，於上方列表中點選「設計師列表」，進入頁面後你可以直接查看設計師品牌，也可以透過搜尋關鍵字的方式，在「搜尋設計師」的搜尋欄中找到你想要的品牌。',
            //購買與訂單
            20: '1.  線上刷卡(信用卡)<br>StayTuned網站利用PayPal、Stripe及綠界科技ECPay執行第三方線上支付功能。<br>2.  超商代碼繳費<br>',
            21: '商品的細節頁面中會明確註明商品運送的國內、外收費方式。',
            22: 'StayTuned網站提供的金流服務，是使用PayPal、Stripe及綠界科技ECPay進行刷卡服務，符合國際安全標準並獲得台灣與世界銀行及信用卡公司認證標準，你可以放心使用。',
            23: '會的。依照不同的信用卡別及銀行，匯率轉換過程中可能產生匯差，而不同銀行可能也會產生海外交易手續費用。',
            24: '登入後，於網頁右上角，點擊「我的訂單」，進入頁面後即可找到你要尋找的訂單，並點擊進入訂單頁面，看更多詳細內容。',
            25: '商品的細節頁面中會明確註明購買對象。<br>(使用StayTuned倉儲管理之對象為官方認證商家，商品及服務品質經過嚴格把關，而商品運輸時間的準確性及安全性高)<br>',
            26: '登入後，於網頁右上角，點擊「我的訂單」，進入頁面後即可點選「取消訂單」按鈕。<br>注意：若已出貨則無法取消訂單。',
            //配送取貨
            27: '商品的細節頁面中會明確註明商品國內、外運送方式。',
            28: '商品的細節頁面中會明確註明商品運送的國內、外收費方式。',
            29: '若逾期或未至門市取貨時，商品視同退貨並寄回商家或StayTuned倉儲管理中心，訂單亦自動取消無法重新配送，請重新下單訂購。',
            30: '是的，我們接受其他國家的消費者至本網站進行選購。',
            31: '商品的細節頁面中會明確註明商品運送方式，依照不同的運送方式，收到商品的時間亦會隨之變動。',
            32: '統一發票並不會隨商品附寄予消費者。消費者收到商品後，可在7天鑑賞期之內確認商品無誤或申請退貨，而訂單在已結單的情況下，統一發票才會寄送予消費者。',
            //退貨退款
            33: '不能。我們全面採用只退不換的方式，若有換貨需求，請在退貨後重新下單訂購。',
            34: '商品的細節頁面中會明確註明是否提供國外商品的退貨服務，但若是使用StayTuned倉儲管理的商品皆可進行國外退貨。',
            35: '退貨內容物包含退貨商品及退貨單。請確認退貨商品的包裝完整性(包含吊牌、配件)，退貨商品沾有粉妝、使用過的髒污或味道、吊牌已剪、下水或修改者不予退回。詳細退貨條件及注意事項請參閱「StayTuned退貨退款政策與流程」。',
            36: '可以。我們接受部分退貨的申請，但組合商品退貨需整組退還，恕不接受部分商品退貨。',
            37: '在確認收到你的商品並且無誤後，系統將於10個工作天內(不含六日及國定假日)完成退款。',
            38: '訂單產生且與StayTuned相關之手續費退款時將予以退還，而其他單位(包括：商家、銀行)則依照各單位的方式進行。',
            39: '在確認收到你的商品並且無誤後，系統將於10個工作天內(不含六日及國定假日)完成退款。',
            40: '統一發票的寄送是建立在訂單已結單的情況下，基於以上原則，並不會有辦理退貨時，發票找不到的情況發生。詳細統一發票規定請參閱【配送取貨】中的常見問題。',
            //e-wallet
            41: '登入後，於網頁右上角，點擊大頭貼圖像→「個人資訊」頁面最下方，你可以點選「E-Wallet」中查看更多資訊。',
            42: '可以。要求提現前，請先指定一個有效的銀行帳戶，指定帳戶之名稱及個人資料得與留存於E-Wallet之名字(或名稱)及個人資料一致，才能進行提現。E-Wallet相關疑慮請參閱StayTuned E-Wallet服務使用條款。',
            43: '在上述提供之資料檢驗完成後，我們將於10個工作天內(不含六日及國定假日)撥付款項予你。',
            44: '提現金額達1,000元以上不必支付任何手續費，但提現金額不達1,000元者，須收取15元手續費。'
        ]

    }

    $('body').on('click', '.help-cat a', function() {
        $('#answer').modal('show');
        $('.modal-title').text('');
        $('.modal-body').text('');
        var text = $(this).text();
        var _id = $(this).data('id');
        var answers = {
            //會員相關問題
            0: '進入StayTuned網站後，點擊頁面右上角「註冊」或「登入」按鈕就可以申請會員。<br>加入會員有兩種方式：<br>(1) 點擊「註冊」，填寫資料後按下「註冊」，並到電子信箱開通帳號，即可成為會員。<br>(2) 點擊「登入」，直接用 Facebook、Google 帳號登入成為會員。',
            1: '登入後，於網頁右上角，點擊大頭貼圖像→「使用者專區」頁面最下方，你將會看到「修改密碼」，點擊後輸入舊密碼及欲更新密碼，按下確認修改按鈕即可。',
            2: '請按下StayTuned頁面右上角的「登入」，你將會看到一個「忘記密碼?」的按鍵，點擊後，系統將會引導你重新設定新的密碼。',
            3: '消費者：<br>1.  將喜歡的商品加到購物車慢慢欣賞<br>2.  與設計師或朋友在 StayTuned 上互相追蹤成為好友，分享彼此的愛好<br>3.  定期收到StayTuned電子報，得到第一手設計商品資訊<br>設計師：<br>1.  輕易透過社群知道消費者喜歡的商品<br>2.  媒合配對製衣廠商，減少成本，輕鬆創業',
            4: '是。為了保障買賣雙方的權益，需要成為會員才能在StayTuned上購買商品，這樣也才能保障你所有購買的相關權益。',
            5: '不需要。加入StayTuned會員完全免費。', 
            //設計師相關問題
            6: '登入後，於網頁右上角，點擊大頭貼圖像→選擇「成為設計師」，點選後填寫相關資訊後，即可成為設計師。',
            7: '登入後，於網頁右上角，點擊大頭貼圖像→選擇「前往設計師後台」，你將在上方列表中看到「商品列表」，點選後即可檢視你要查詢的商品。',
            8: '登入後，於網頁右上角，點擊大頭貼圖像→選擇「前往設計師後台」，你將在上方列表中看到「商品列表」，點選「+新增商品」輸入商品相關資訊後即可上架你的商品。',
            9: '登入後，於網頁右上角，點擊大頭貼圖像→選擇「前往設計師後台」，你將在上方列表中看到「商品列表」，點選後即可編輯你要修改的商品。',
            10: '我們提供「集資預售」方式。<br>登入後，於網頁右上角，點擊大頭貼圖像→選擇「前往設計師後台」，你將在上方列表中看到「預售列表」，點選後即可新增預售案件。<br>收費方式為12%平台管理費用+17%倉儲管理費用+20%預售管理費用。<br>了解更多詳情請至預售條款。',
            //廠商相關問題
            11: '登入後，於網頁右上角，點擊大頭貼圖像→選擇「前往廠商後台」，你將在上方列表中看到「媒合列表」，點選後即可選擇你想合作的對象進行媒合。',
            12: '不會。加入StayTuned廠商完全免費。<br>你也可以根據你的需求付費選擇升級你的會員功能。<br>升級收費方式有兩種：美金25元/月、美金85元/月。',
            13: '合約完成、確認商品無誤並扣除相關費用後，你可以在15個工作天(不含六日及國定假日)之內透過E-Wallet收到你的款項。',
            14: '一旦合約成立，在依照合約內容完成工作之前皆不可任意終止合約。',
            15: '設計師與你皆可以主動尋找合作對象，一旦預售案成立，你的訂單內容數量只會增加不會減少，而且訂單成立後一定是由你來承接此筆訂單。',
            //商品及品牌搜尋
            16: '進入StayTuned首頁後，於上方列表中點選「商城」按鈕，你可以根據「男性」、「女性」、「中性」之分類來瀏覽商品。你也可以透過搜尋關鍵字的方式，在網頁最上方的搜尋欄中找到你想要的商品。',
            17: '進入StayTuned首頁後，於上方列表中點選「商城」按鈕，你可以下拉選單進入「熱門商品」查看。',
            18: '進入StayTuned首頁後，於上方列表中點選「商城」按鈕，你可以下拉選單進入「最新商品」查看。',
            19: '進入StayTuned首頁後，於上方列表中點選「設計師列表」，進入頁面後你可以直接查看設計師品牌，也可以透過搜尋關鍵字的方式，在「搜尋設計師」的搜尋欄中找到你想要的品牌。',
            //購買與訂單
            20: '1.  線上刷卡(信用卡)<br>StayTuned網站利用PayPal、Stripe及綠界科技ECPay執行第三方線上支付功能。<br>2.  超商代碼繳費<br>',
            21: '商品的細節頁面中會明確註明商品運送的國內、外收費方式。',
            22: 'StayTuned網站提供的金流服務，是使用PayPal、Stripe及綠界科技ECPay進行刷卡服務，符合國際安全標準並獲得台灣與世界銀行及信用卡公司認證標準，你可以放心使用。',
            23: '會的。依照不同的信用卡別及銀行，匯率轉換過程中可能產生匯差，而不同銀行可能也會產生海外交易手續費用。',
            24: '登入後，於網頁右上角，點擊「我的訂單」，進入頁面後即可找到你要尋找的訂單，並點擊進入訂單頁面，看更多詳細內容。',
            25: '商品的細節頁面中會明確註明購買對象。<br>(使用StayTuned倉儲管理之對象為官方認證商家，商品及服務品質經過嚴格把關，而商品運輸時間的準確性及安全性高)<br>',
            26: '登入後，於網頁右上角，點擊「我的訂單」，進入頁面後即可點選「取消訂單」按鈕。<br>注意：若已出貨則無法取消訂單。',
            //配送取貨
            27: '商品的細節頁面中會明確註明商品國內、外運送方式。',
            28: '商品的細節頁面中會明確註明商品運送的國內、外收費方式。',
            29: '若逾期或未至門市取貨時，商品視同退貨並寄回商家或StayTuned倉儲管理中心，訂單亦自動取消無法重新配送，請重新下單訂購。',
            30: '是的，我們接受其他國家的消費者至本網站進行選購。',
            31: '商品的細節頁面中會明確註明商品運送方式，依照不同的運送方式，收到商品的時間亦會隨之變動。',
            32: '統一發票並不會隨商品附寄予消費者。消費者收到商品後，可在7天鑑賞期之內確認商品無誤或申請退貨，而訂單在已結單的情況下，統一發票才會寄送予消費者。',
            //退貨退款
            33: '不能。我們全面採用只退不換的方式，若有換貨需求，請在退貨後重新下單訂購。',
            34: '商品的細節頁面中會明確註明是否提供國外商品的退貨服務，但若是使用StayTuned倉儲管理的商品皆可進行國外退貨。',
            35: '退貨內容物包含退貨商品及退貨單。請確認退貨商品的包裝完整性(包含吊牌、配件)，退貨商品沾有粉妝、使用過的髒污或味道、吊牌已剪、下水或修改者不予退回。詳細退貨條件及注意事項請參閱「StayTuned退貨退款政策與流程」。',
            36: '可以。我們接受部分退貨的申請，但組合商品退貨需整組退還，恕不接受部分商品退貨。',
            37: '在確認收到你的商品並且無誤後，系統將於10個工作天內(不含六日及國定假日)完成退款。',
            38: '訂單產生且與StayTuned相關之手續費退款時將予以退還，而其他單位(包括：商家、銀行)則依照各單位的方式進行。',
            39: '在確認收到你的商品並且無誤後，系統將於10個工作天內(不含六日及國定假日)完成退款。',
            40: '統一發票的寄送是建立在訂單已結單的情況下，基於以上原則，並不會有辦理退貨時，發票找不到的情況發生。詳細統一發票規定請參閱【配送取貨】中的常見問題。',
            //e-wallet
            41: '登入後，於網頁右上角，點擊大頭貼圖像→「個人資訊」頁面最下方，你可以點選「E-Wallet」中查看更多資訊。',
            42: '可以。要求提現前，請先指定一個有效的銀行帳戶，指定帳戶之名稱及個人資料得與留存於E-Wallet之名字(或名稱)及個人資料一致，才能進行提現。E-Wallet相關疑慮請參閱StayTuned E-Wallet服務使用條款。',
            43: '在上述提供之資料檢驗完成後，我們將於10個工作天內(不含六日及國定假日)撥付款項予你。',
            44: '提現金額達1,000元以上不必支付任何手續費，但提現金額不達1,000元者，須收取15元手續費。'
        }

        for (i in answers) { 
            if (_id == i) {
                $('.modal-title').text(text)
                $('.modal-body').append(answers[i]);
            }
        }
    });
});