body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(to bottom, #ffd6e0, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
}

.container {
  text-align: center;
}

.envelope {
  position: relative;
  width: 320px;
  height: 220px;
  margin: auto;
  perspective: 800px;
}

.back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ff8fab;
  border-radius: 8px;
}

.front {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ff6f91;
  clip-path: polygon(0 0, 100% 0, 50% 65%);
}

.top {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ff4d6d;
  clip-path: polygon(0 0, 50% 50%, 100% 0);
  transform-origin: top;
  transition: transform 1s ease;
}

.letter {
  position: absolute;
  width: 90%;
  height: 85%;
  background: white;
  top: 100%;
  left: 5%;
  padding: 18px;
  border-radius: 6px;
  box-sizing: border-box;
  transition: all 1s ease;
  opacity: 0;
}

.envelope.open .top {
  transform: rotateX(180deg);
}

.envelope.open .letter {
  top: -20px;
  opacity: 1;
}

button {
  margin-top: 25px;
  padding: 12px 25px;
  border: none;
  background: #ff4d6d;
  color: white;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
}
