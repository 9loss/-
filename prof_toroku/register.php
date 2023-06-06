<?php
// データベースへの接続（自分の設定に置き換えてください）
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("データベースへの接続に失敗しました: " . $conn->connect_error);
}

// フォームデータの取得
$username = $_POST['username'];
$grade = $_POST['grade'];
$hobbies = implode(", ", $_POST['hobby']);
$campus = $_POST['campus'];
$profilePicture = $_FILES['profilePicture']['name'];

// プロフィール写真のアップロード
$targetDir = "uploads/";
$targetFile = $targetDir . basename($_FILES["profilePicture"]["name"]);
move_uploaded_file($_FILES["profilePicture"]["tmp_name"], $targetFile);

// データベースにデータを挿入
$sql = "INSERT INTO profiles (username, grade, hobbies, campus, profile_picture)
        VALUES ('$username', '$grade', '$hobbies', '$campus', '$profilePicture')";

if ($conn->query($sql) === TRUE) {
    echo "プロフィールが正常に登録されました";
} else {
    echo "エラー: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
