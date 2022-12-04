import { dataAcc, dataEnglish, dataFooter, dataViet } from "./fakeData.js";

// Accordions

const acco = document.querySelector(".faq-question__box");
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const renderAcco = dataAcc.map((item) => {
  return `<article class="faq-question-item">
  <div class="faq-question__div" >
    <h4 class="faq-question text-faq text-md"> ${item.question}</h4>
    <i class="bi bi-plus-circle" ></i>
  </div>
  <p class="faq-answer text-faq text-md" >
    <span>${item.answer}</span>
  </p>
  </article>`;
});
// acco.innerHTML = renderAcco;
acco.insertAdjacentHTML("beforeend", renderAcco);

$$(".faq-question__div").forEach((acco) => {
  acco.addEventListener("click", (e) => {
    console.log(e.target);
    $$(".faq-answer").forEach((ans) => {
      if (
        e.target.nextElementSibling !== ans &&
        ans.classList.contains("show")
      ) {
        ans.classList.remove("show");
        $$(".faq-question__div").forEach((acco) => {
          acco.classList.remove("show");
        });
      }
    });

    const panel = acco.nextElementSibling;
    panel.classList.toggle("show");
    acco.classList.toggle("show");
  });
});

// Separate

$$("section").forEach((item) => {
  item.insertAdjacentHTML("afterend", `<div class="separate"></div>`);
});

// Language

$(".nav-right__lang").addEventListener("click", () => {
  $(".nav-right__lang ul").classList.toggle("show");
});

$$(".lang-item").forEach((item) =>
  item.addEventListener("click", (e) => {
    $(".nav-right__lang span").innerText = e.target.innerText;
    if ($(".nav-right__lang span").innerText === "Tiếng Việt") {
      $(".nav-right__login").innerText = "Đăng nhập";
      $(".showcase h1").innerText = dataViet.showCaseTitle;
      $(".showcase h4").innerText = dataViet.showCaseDes;
      $(".showcase p").innerText = dataViet.showCaseGmail;
      $(".showcase button").innerText = dataViet.showCaseButton;
      $(".showcase input").setAttribute(
        "placeholder",
        dataViet.showCasePlacehoder
      );
      $(".netflix-tvl h2").innerText = dataViet.netflixTvTitle;
      $(".netflix-tvl p").innerText = dataViet.netflixTvDes;
      $(".netflix-offlinel h2").innerText = dataViet.netflixOff;
      $(".netflix-offlinel p").innerText = dataViet.netflixOffDes;
      $(".netflix-everywhere h2").innerText = dataViet.netflixEvery;
      $(".netflix-everywhere p").innerText = dataViet.netflixEveryDes;
      $(".netflix-everywhere p").innerText = dataViet.netflixEveryDes;
      $(".netflix-offlinel2 h2").innerText = dataViet.netflixChild;
      $(".netflix-offlinel2 p").innerText = dataViet.netflixChildDes;
      $(".netflix-offlinel3 h2").innerText = dataViet.netflixAndroid;
      $(".netflix-offlinel3 p").innerText = dataViet.netflixAndroidDes;
      $(".netflix-offlinel3 a").innerText = dataViet.netflixAndroidBtn;
      $(".faq h2").innerText = dataViet.netflixAccoTitle;
      for (let i = 0; i < $$(".faq-answer").length; i++) {
        ([...$$(".faq-question")][i].innerText = dataAcc[i].question) &&
          ([...$$(".faq-answer span")][i].innerText = dataAcc[i].answer);
      }
    } else {
      $(".nav-right__login").innerText = "Sign In";
      $(".showcase h1").innerText = dataEnglish.showCaseTitle;
      $(".showcase h4").innerText = dataEnglish.showCaseDes;
      $(".showcase p").innerText = dataEnglish.showCaseGmail;
      $(".showcase button").innerText = dataEnglish.showCaseButton;
      $(".showcase input").setAttribute(
        "placeholder",
        dataEnglish.showCasePlacehoder
      );
      $(".netflix-tvl h2").innerText = dataEnglish.netflixTvTitle;
      $(".netflix-tvl p").innerText = dataEnglish.netflixTvDes;
      $(".netflix-offlinel h2").innerText = dataEnglish.netflixOff;
      $(".netflix-offlinel p").innerText = dataEnglish.netflixOffDes;
      $(".netflix-everywhere h2").innerText = dataEnglish.netflixEvery;
      $(".netflix-everywhere p").innerText = dataEnglish.netflixEveryDes;
      $(".netflix-everywhere p").innerText = dataEnglish.netflixEveryDes;
      $(".netflix-offlinel2 h2").innerText = dataEnglish.netflixChild;
      $(".netflix-offlinel2 p").innerText = dataEnglish.netflixChildDes;
      $(".netflix-offlinel3 h2").innerText = dataEnglish.netflixAndroid;
      $(".netflix-offlinel3 p").innerText = dataEnglish.netflixAndroidDes;
      $(".netflix-offlinel3 a").innerText = dataEnglish.netflixAndroidBtn;
      $(".faq h2").innerText = dataEnglish.netflixAccoTitle;
      for (let i = 0; i < $$(".faq-answer").length; i++) {
        ([...$$(".faq-question")][i].innerText = dataAcc[i].questionEnglish) &&
          ([...$$(".faq-answer span")][i].innerText = dataAcc[i].answerEnglish);
      }
    }
  })
);

// Footer

$(".footer-wrapper").innerHTML = dataFooter.map((item) => {
  return `<ul class="footer-list">
          <a href=""><li class="footer-list-item">${item.line1}</li></a>
          <a href=""><li class="footer-list-item">${item.line2}</li></a>
          <a href=""><li class="footer-list-item">${item.line3}</li></a>
          <a href=""><li class="footer-list-item">${item.line4}</li></a>
        </ul>`;
});
