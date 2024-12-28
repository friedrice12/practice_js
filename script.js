function changeBackgroundColor() {
    const colors = ['#f0f8ff', '#ffcccb', '#d1e7dd', '#fff3cd', '#e2e3e5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }