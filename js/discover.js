const moonImages = [
  "./images/newmoon.png",
  "./images/waxing-crescent.png",
  "./images/first-quarter.png",
  "./images/waxing-gibbous.png",
  "./images/fullmoon.png",
  "./images/waning-gibbous.png",
  "./images/third-quarter.png",
  "./images/waning-crescent.png",
];

let loadedCount = 0;

moonImages.forEach((src) => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    loadedCount++;
    if (loadedCount === moonImages.length) {
      // همه عکس‌ها لود شدن ✅
      document.getElementById("loader").classList.add("fade-out");
      setTimeout(() => {
        document.getElementById("loader").remove();
        document.querySelector(".main").classList.add("show");
      }, 500);
    }
  };
});

$(document).ready(function () {
  const images = [
    {
      src: "./images/newmoon.png",
      descriptionhead: "New Moon",
      descriptionparagraph:
        "Children of the New Moon love trying out new things, new trends, new places. To others, it seems like you are always overflowing with an abundance of exciting new ideas, to the point where it can be hard to keep up with your vitality and enthusiasm. You have that childlike innocence, wonder, and curiosity, which most people lose as they mature. All of this means that you are extraordinarily creative - the quintessential “ideas person”. On top of that, since you’re always so certain about what you want, you’re someone with a strong personality and drive.",
    },
    {
      src: "./images/waxing-crescent.png",
      descriptionhead: "Waxing Crescent",
      descriptionparagraph:
        "Children of the Waxing Crescent tend to be similar to those born under the New Moon - you are adventurous, joyous and full of curiosity. But there one key difference: you tend to be more timid and conservative when it comes to taking risks and trying new things. In fact, you have a tendency to cling to the past and stay in your comfort zone. Being relatively weak in energy, your instinct is to ensure your own security above all. It is absolutely crucial for a child of the Waxing Crescent to learn to be more independent and courageous.",
    },
    {
      src: "./images/first-quarter.png",
      descriptionhead: "First Quarter",
      descriptionparagraph:
        "As an individual born under the First Quarter Moon, you have never doubted that you are the protagonist of your own life. You are a person of action who loves a good challenge - the more difficult a challenge is, the more excited you get, and the better you perform. You want to achieve things, not necessarily for the sense of accomplishment or to be praised by others, but simply because you cannot fathom any other way of living.",
    },
    {
      src: "./images/waxing-gibbous.png",
      descriptionhead: "Waxing Gibbous",
      descriptionparagraph:
        "Individuals born under this Moon are predisposed to be caring, nurturing, and calming. You likely excel at developing relationships with other people, guiding them and inspiring them to reach new heights in their lives. If you put in the time and effort, you can easily surround yourself with people who love you, or at least respect you. On the flip side, this also means that you are acutely aware of your own potential - specifically, your own potential to achieve perfection. Tragically, even though you can be an amazing mentor and guide to others, that same impulse transforms into perfectionism when it comes to yourself.",
    },
    {
      src: "./images/fullmoon.png",
      descriptionhead: "Full Moon",
      descriptionparagraph:
        "For a child of the Full Moon, the most crucial key to success is the ability to balance your inner contradictions. You need to be able to ride with the flow of your natural energy cycles, instead of fighting it all the way, or letting it take control of you completely. If you can master the art of maintaining an active equilibrium between emotions and logic, between your dark side and your bright side, between the external and the internal - that’s when you know that you have awakened to the full potential of a Full Moon child.",
    },
    {
      src: "./images/waning-gibbous.png",
      descriptionhead: "Waning Gibbous",
      descriptionparagraph:
        "If you were born under the Waning Gibbous Moon, you may be driven by the desire to understand and explain - but you also need to learn to be more accepting of the fact that not all people have the desire to listen, and that doesn’t necessarily make them inferior to you - it could be that they already have a deeper or different understanding of the topic. Or perhaps it’s simply not the right time. Other people may find you frustrating if you lecture them and talk down to them in a patronizing way. No matter how good your intentions are.",
    },
    {
      src: "./images/third-quarter.png",
      descriptionhead: "Third Quarter",
      descriptionparagraph:
        "Children of the Third Quarter Moon hold onto the past out of love. You have a quality about you that seems slow, almost frozen in time. While you have no fear of the present or future, you tend to get deeply attached to things, people, places - and while that means you’re exceedingly talented at finding meaning and happiness in life, even the smallest things, this tendency can also prevent you from moving on when you need to.",
    },
    {
      src: "./images/waning-crescent.png",
      descriptionhead: "Waning Crescent",
      descriptionparagraph:
        "Your deep insights can make you seem mystical, like you exist in a different dimension from other people. Combined with your tendency to have unconventional hobbies, behaviour, and opinions, this can make you somewhat of a loner. Many people may find you too eccentric to relate to on a deeper level, even if they appreciate your wisdom and advice. Your best bet is to find people who are just as imaginative as you are, and who appreciate you in your entire glorious, weird self.",
    },
  ];

  let currentIndex = 0;

  function updateContent() {
    const currentImage = images[currentIndex];

    $("#myImage").fadeOut(500, function () {
      // This function is called after the fadeOut completes
      $(this).attr("src", currentImage.src).fadeIn(500);
    });

    $(".description-container h1, .description-container p").fadeOut(
      500,
      function () {
        // This function is called after the fadeOut completes
        $(this).text(currentImage.descriptionhead).fadeIn(500);
        $(".description-container p")
          .text(currentImage.descriptionparagraph)
          .fadeIn(500);
      }
    );
  }

  $("#nextButton").click(function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateContent();
  });

  $("#prevButton").click(function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateContent();
  });

  // Initial content update
  updateContent();
});
