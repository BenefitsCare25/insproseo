(() => {
  "use strict";

  const form = document.querySelector("[data-review-starter]");
  const output = document.querySelector("[data-review-output]");
  if (!form || !output) return;

  const title = output.querySelector("[data-review-title]");
  const summary = output.querySelector("[data-review-summary]");
  const list = output.querySelector("[data-review-list]");
  const contactIntent = document.querySelector("[data-contact-intent]");

  const details = {
    business: {
      title: "Prepare for a business insurance review",
      summary: "Useful context helps the first conversation focus on operational risks and current cover.",
      items: ["Current policy schedule", "Renewal date", "Business activities and premises", "Recent operational changes", "Questions about limits or exclusions"]
    },
    benefits: {
      title: "Prepare for an employee benefits review",
      summary: "Share the shape of your workforce and where the current programme needs attention.",
      items: ["Current benefits schedule", "Employee headcount", "Renewal date", "Claims or administration concerns", "Planned workforce changes"]
    },
    personal: {
      title: "Prepare for a personal insurance review",
      summary: "Start with what you want protected and any insurance you already have.",
      items: ["Current policies, if any", "Upcoming renewal dates", "Assets or people to protect", "Recent household changes", "Questions about cover or claims"]
    },
    claims: {
      title: "Prepare to discuss an existing claim",
      summary: "The exact documents depend on the claim, but these details provide a useful starting point.",
      items: ["Policy number", "Date and summary of the incident", "Photos, reports or receipts", "Insurer correspondence", "Questions about the next step"]
    }
  };

  const render = (key) => {
    const selected = details[key] || details.business;
    title.textContent = selected.title;
    summary.textContent = selected.summary;
    list.replaceChildren(...selected.items.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    }));
    if (contactIntent) contactIntent.value = key;
    output.dataset.intent = key;
  };

  form.addEventListener("change", (event) => {
    if (event.target.name === "review-intent") render(event.target.value);
  });

  const initial = form.querySelector("input[name='review-intent']:checked");
  render(initial?.value || "business");
})();
