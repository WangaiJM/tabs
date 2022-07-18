const btns = document.querySelectorAll(".btn");
const tabs = document.querySelectorAll(".tab");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    let num = index + 1;

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    const tab = document.querySelector(`#tab-${num}`);
    tab.classList.add("active");
  });
});
