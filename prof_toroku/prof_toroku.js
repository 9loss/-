document.getElementById("profileForm").addEventListener("submit", function (event) {
    event.preventDefault(); // デフォルトのフォーム送信を防止

    // 入力値を取得
    var username = document.getElementById("username").value;
    var grade = document.getElementById("grade").value;
    var hobbies = Array.from(document.querySelectorAll('input[name="hobby"]:checked')).map(checkbox => checkbox.value);
    var campus = document.querySelector('input[name="campus"]:checked').value;
    var profilePicture = document.getElementById("profilePicture").files[0];

    // 入力値のバリデーションなどの処理を行うことができます

    // プロフィール情報をサーバーに送信するための処理を実行することができます

    // 以下はデモとして、入力値をコンソールに表示する例です
    console.log("ユーザー名:", username);
    console.log("学年:", grade);
    console.log("趣味:", hobbies);
    console.log("キャンパス:", campus);
    console.log("プロフィール写真:", profilePicture);

    // フォーム送信時の処理
    document.getElementById("profileForm").addEventListener("submit", function (event) {
        event.preventDefault(); // フォームのデフォルトの送信を防止

        // フォームデータを取得
        var formData = new FormData(this);

        // フォームデータをサーバーに送信
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "register.php", true); // PHPスクリプトのパスに合わせて変更してください
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                // レスポンスの処理
                console.log(xhr.responseText);
                // フォーム送信後の追加の処理やリダイレクトなどをここに記述してください
            }
        };
        xhr.send(formData);
    });

});
