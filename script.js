/* Background & Font */
body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: #333;
  margin: 0;
  padding: 0;
}

/* Container Card */
.container {
  max-width: 500px;
  margin: 50px auto;
  background: #fff;
  padding: 30px 20px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

/* Heading */
h1 {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 600;
}

/* Dropdown & Button */
select, button {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
}

button {
  background: #2575fc;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

button:hover {
  background: #6a11cb;
}

/* Subject Rows */
.subject {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  padding: 8px 12px;
  background: #f1f1f1;
  border-radius: 8px;
}

.subject span {
  flex: 1;
  font-weight: 500;
  color: #333;
}

.subject select {
  flex: 0.5;
}

/* GPA Result */
#result {
  text-align: center;
  margin-top: 20px;
  font-size: 22px;
  font-weight: 600;
  color: #6a11cb;
}

/* Responsive Mobile */
@media (max-width: 600px) {
  .container {
    margin: 20px 10px;
    padding: 20px 15px;
  }

  .subject {
    flex-direction: column;
    align-items: flex-start;
  }

  .subject select {
    width: 100%;
    margin-top: 5px;
  }
}
