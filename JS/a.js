document.addEventListener('DOMContentLoaded', function() {

  function getRandomQuote() {

      const quotes = [
        {
          "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
   {
          "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
   {
          "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
   {
          "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
   {
          "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
   {
          "quote":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"},
   {
          "quote":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.","author":"Michael Jordan"},
   {
          "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},
   {
          "quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth"},
   {
          "quote":"Definiteness of purpose is the starting point of all achievement.","author":"W. Clement Stone"},
   {
          "quote":"We must balance conspicuous consumption with conscious capitalism.","author":"Kevin Kruse"},
   
   


      ];

         
      const randomIndex = Math.floor(Math.random() * quotes.length);//lưu trữ 1 số nguyên ngẫu nhiên
      const randomQuote = quotes[randomIndex];//đưa ra vị trí ngẫu nhiên của số nguyên ngẫu nhiên

      document.getElementById("text").textContent = randomQuote.text;//lấy tham chiếu của phần tử
      document.getElementById("author").textContent = "-" + randomQuote.author;
  }
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    
  ];

  
  const color = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[color];
            document.body.style.color = colors[color];

  getRandomQuote();

  document.getElementById("new-quote").addEventListener("click", function() {
      getRandomQuote();
      
  });
});

  
  

