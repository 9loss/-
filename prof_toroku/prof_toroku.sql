CREATE TABLE profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  grade INT NOT NULL,
  hobbies TEXT NOT NULL,
  campus VARCHAR(255) NOT NULL,
  profile_picture VARCHAR(255) NOT NULL
);
