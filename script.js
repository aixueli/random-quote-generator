const quotes = [
    {
      quote: "「自分が信じた道を、後悔しないように頑張っていきたい」",
      author: "堂本光一"
    },
    {
      quote: "「努力は必ず報われるわけではない。でも、努力しなくても何も始まらない」",
      author: "堂本光一"
    },
    {
      quote: "「やりたいことをやるためには、やりたくないこともやらなければいけない」",
      author: "堂本光一"
    },
    {
      quote: "「人のために生きるのではなく、自分のために生きたい」",
      author: "堂本光一"
    },
    {
      quote: "「小さな一歩でも、それが大きな変化を生むことがある」",
      author: "堂本光一"
    },
    {
        quote: "「過去にこだわるより、未来を見据えて先に進むべきだ」",
        author: "堂本光一"
      },
      {
        quote: "「限界を決めるのは自分自身だ」",
        author: "堂本光一"
      },
      {
        quote: "「夢は見るだけでなく、実現するために行動しなければならない」",
        author: "堂本光一"
      }
  ];
  
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");
  const newQuoteBtn = document.getElementById("new-quote");
  
  newQuoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.textContent = `"${quote.quote}"`;
    authorText.textContent = `- ${quote.author}`;
  });
  