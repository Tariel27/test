function updateContent() {
  const elements = document.getElementsByClassName("i18nelement");
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const k = element.getAttribute("data-i18n");
    element.innerHTML = i18next.t(k);
  }
}

async function i18Loader() {
  const langs = ["kg", "ru"];
  const jsons = await Promise.all(
    langs.map((l) =>
      fetch("simple_i18n/translations/" + l + ".json").then((r) => r.json())
    )
  );
  const res = langs.reduce((acc, l, idx) => {
    acc[l] = { translation: jsons[idx] };
    return acc;
  }, {});
  await i18next.init({
    lng: "ru",
    debug: true,
    resources: res,
  });
  updateContent();
  i18next.on("languageChanged", () => {
    updateContent();
  });
}

function setLanguage(language) {
  i18next.changeLanguage(language);
}

i18Loader();