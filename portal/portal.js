const frame = document.querySelector("iframe");
document.querySelectorAll("[data-framework]").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-framework]")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    frame.src = "./" + button.dataset.framework + "/";
    frame.title = button.textContent + " interactive demo";
    document.getElementById("status").textContent =
      button.textContent + " selected. Each switch loads a fresh demo.";
  });
});
