// Header carousel
$(document).ready(function () {
  $(".header_carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
// Gallery carousel
$(document).ready(function () {
  $(".gallery_carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: $(".gallery_left"),
    nextArrow: $(".gallery_right"),
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
        centerMode: false,
      },
    ],
  });
});
// Video carousel
$(document).ready(function () {
  $(".video_block_carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    prevArrow: $(".video_left"),
    nextArrow: $(".video_right"),
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
        centerMode: false,
      },
    ],
  });
});

// Navigation active
// var navItems = document.querySelectorAll(".nav_links a");
// for (var i = 0; i < navItems.length; i++) {
//   if (navItems[i].href == window.location.href) {
//     navItems[i].className = "active_nav_menu";
//     console.log("window.location.href", window.location.href);
//     console.log(navItems[i].href);
//   }
// }

// Mobile menu wrpper
function toggleMenu() {
  var element = document.querySelector(".nav_mob_menu");
  element.classList.toggle("mob_menu_wrapper");
}

// Tabs
const { Tablist } = jolty;
Tablist.initAll();

// Image animation
let lastScrollTop = 0;
$(window).on("scroll", function () {
  let st = $(this).scrollTop();
  let wrapperTop = $(".about_description").offset().top;
  let wrapperHeight = $(".about_description").outerHeight();
  if (st > wrapperTop - $(window).height() && st < wrapperTop + wrapperHeight) {
    if (st > lastScrollTop) {
      $(".shere_chat_img").css("bottom", "0%");
    } else {
      $(".shere_chat_img  ").css("bottom", "-25%");
    }
  }
  lastScrollTop = st;
});

// Card prize toggler
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(
    ".premium_card_button, .active_premium_card_button"
  );
  let priceTag = document.querySelector(".premuim_card_price");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) =>
        btn.classList.remove("active_premium_card_button")
      );
      this.classList.add("active_premium_card_button");
      switch (this.textContent) {
        case "1 Год":
          priceTag.textContent = "19 990 ₽";
          break;
        case "2 Года":
          priceTag.textContent = "37 990 ₽";
          break;
        case "3 Года":
          priceTag.textContent = "49 990 ₽";
          break;
      }
    });
  });
});

// Questions form
let currentElementToShow = 0;
const formElements = document.querySelector(".form-item");
const formElements2 = document.querySelector(".form-item2");
const formContainer = document.querySelector(".form_container");
function toggleForm() {
  formElements.style.opacity = "1";
  formElements2.style.opacity = "1";
  formContainer.style.display = "block";
  formContainer.style.opacity = "1";
}

// Aditional content
const menuContent = [
  {
    title: "РЕГИСТРАТОР",
    list: [
      "Автоматическая регистрация аккаунтов",
      "Добавление стороних смс сервисов",
    ],
    price: "50 000 ₽",
  },
  {
    title: "КЛОНЕР ЧАТОВ",
    list: [
      "Сбор истории чатов",
      "Добавление стороних смс сервисов",
      "Возможность выбрать пользователей для клонирования",
      "Постинг истории по интервалам или как в оригинале",
      "Замена слов в истории",
    ],
    price: "20 000 ₽",
  },
  {
    title: "КЛОННЕР КАНАЛОВ",
    list: [
      "Автономное наполнение каналов",
      "Добавление стороних смс сервисов",
      "Замена ключевых слов + Выгрузка видео ",
      "Клоннер старых постов ",
      "Исключение нежелательного контента и добавление своего ",
      "Многопоточная работа (наполняйте сотни каналов одновременно)",
    ],

    price: "6 000 ₽",
  },
  {
    title: "ПЕРЕХВАТЧИК",
    list: [
      "Перехват сообщений по ключевым словам",
      "Работа в реальном времени",
      "Автозамена слов ",
      "Многопоточная работа (Перехватывайте горячих лидов с сотни чатов и каналов)",
    ],
    price: "25 000 ₽",
  },
  {
    title: "ПЕРЕСЫЛЬЩИК",
    list: [
      "Пересылка входящих сообщений с  аккаунтов в реальном времени",
      "Пересылка сообщений в ЛС, чат или канал",
      "Возможность пересылать старые непрочитанные сообщения  ",
      "Имитация статуса “Печатает” для пользователей",
    ],
    price: "25 000 ₽",
  },
  {
    title: "РЕПОРТЕР",
    list: [
      "Возможность заблокировать канал или чат ",
      "Возможность заблокировать пользователя или бота",
      "Жалобы через инвайтинг в чаты",
      "Многопоточная работа",
    ],
    price: "10 000 ₽",
  },
  {
    title: "ИНВАЙТ ЧЕРЕЗ АДМИНОВ",
    list: [
      "Автодобавление администраторов ",
      "Автоудаление администраторов",
      "Увеличенные лимиты на инвайт",
      "Инвайт по ID и Username",
      "Многопоточная работа",
    ],
    price: "15 000 ₽",
  },
  {
    title: "НАКРУТКА РЕАКЦИЙ",
    list: ["Многопоточная работа"],
    price: "15 000 ₽",
  },
  {
    title: "ДУБЛИКАТОР",
    list: [
      "Дублирование сессии аккаунтов (Позволяет одновременно использовать аккаунт в нескольких разных модулях)",
      "Возможность закрыть старую сессию",
      "Многопоточная работа",
    ],
    price: "20 000 ₽",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".moduls_wrapper_menu_item");
  const contentContainer = document.querySelector(".content-container");
  const aditionalContenCprice = document.querySelector(
    ".aditional_conten_price"
  );
  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      updateContent(index);
    });
    item.addEventListener("mouseover", () => {
      updateContent(index);
    });
  });

  function updateContent(index) {
    const data = menuContent[index];
    contentContainer.innerHTML = `
          <h3>${data.title}</h3>
          <div class="additional_content_list">
              <ul>
                  ${data.list.map((item) => `<li><p>${item}</p></li>`).join("")}
              </ul>
          </div>
      `;
    aditionalContenCprice.innerHTML = `${data.price}`;

    menuItems.forEach((item) => item.classList.remove("active_menu_item"));
    menuItems[index].classList.add("active_menu_item");
  }
});
