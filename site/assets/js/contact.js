(() => {
  "use strict";
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const labels = {
    review: "Insurance review", benefitscare: "BenefitsCare for SME",
    benefits: "Employee Benefits (Life & Medical)", business: "Business Insurance",
    personal: "Personal Insurance", claims: "Claims support", portal: "Benefits portal"
  };
  const topics = {
    business: { premises: "Premises and equipment", people: "Workforce cover", liability: "Liability cover", trade: "Trade and project risks" },
    personal: { motor: "Motor insurance", travel: "Travel insurance", home: "Home insurance" },
    portal: { access: "Existing member - portal access help" }
  };
  const catalogueTopics = document.querySelector('#insurance-topics');
  if (catalogueTopics) Object.assign(topics, JSON.parse(catalogueTopics.textContent));
  const plans = { starter: "Starter", flex: "Flex", premier: "Premier" };
  const params = new URLSearchParams(location.search);
  const intent = form.elements.intent;
  const initialIntent = Object.hasOwn(labels, params.get("intent")) ? params.get("intent") : "review";
  intent.value = initialIntent;
  const requestedPlan = params.get("plan");
  const plan = Object.hasOwn(plans, requestedPlan) ? plans[requestedPlan] : "";
  const requestedTopic = params.get("topic");
  const topicSelect = form.elements.topic;
  function refreshTopics() {
    const options = topics[intent.value] || {};
    topicSelect.replaceChildren(new Option('Not sure yet / general enquiry', ''));
    for (const [key, label] of Object.entries(options)) topicSelect.add(new Option(label, key));
    form.querySelector('[data-topic-field]').hidden = !Object.keys(options).length;
    topicSelect.value = intent.value === initialIntent && Object.hasOwn(options, requestedTopic) ? requestedTopic : '';
  }
  refreshTopics();
  const context = form.querySelector("[data-enquiry-context]");
  const status = form.querySelector("[data-form-status]");
  const clean = (value, limit) => String(value || "").trim().slice(0, limit);
  const selection = () => intent.value === 'benefitscare' && initialIntent === 'benefitscare' && plan ? `BenefitsCare for SME ${plan}` : (topics[intent.value] || {})[topicSelect.value] || '';
  function updateContext() {
    status.textContent = "";
    const selected = selection();
    context.hidden = !selected;
    context.textContent = selected ? `Your selection: ${selected}` : "";
    const prompts = {
      benefitscare: "Approximate team size, preferred benefits and start or renewal date.",
      benefits: "Workforce size, current programme and priorities for your next renewal.",
      business: "Your business activities, cover priorities and renewal date.",
      personal: "The cover you need and your preferred start or renewal date.",
      claims: "The type of claim and the help you need. Leave out sensitive documents.",
      portal: "Your team size and the portal features you would like to discuss.",
      review: "Your priorities and any start or renewal date."
    };
    form.elements.need.placeholder = prompts[intent.value] || prompts.review;
  }
  updateContext();
  intent.addEventListener("change", () => { refreshTopics(); updateContext(); });
  topicSelect.addEventListener('change', updateContext);
  form.addEventListener("input", () => {
    form.elements.name.setCustomValidity("");
    status.textContent = "";
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    const name = clean(form.elements.name.value, 80);
    form.elements.name.setCustomValidity(name ? "" : "Enter your name to start your enquiry.");
    if (!form.reportValidity()) return;
    const area = labels[intent.value] || labels.review;
    const chosen = selection();
    const subject = `${chosen || area} enquiry from ${name.replace(/[\r\n]/g, " ")}`;
    const body = [
      "Hello Inspro,", "", "I would like help with the enquiry below.", `Service: ${area}`,
      ...(chosen ? [`Selected cover or topic: ${chosen}`] : []), "",
      `Name: ${name}`, `Email: ${clean(form.elements.email.value,160)}`,
      `Company: ${clean(form.elements.company.value,120) || "Not provided"}`,
      `Phone: ${clean(form.elements.phone.value,40) || "Not provided"}`, "",
      clean(form.elements.need.value,1200) || "Please help me understand the next steps and information needed.",
      "", "Thank you."
    ].join("\n");
    const mailto = `mailto:helpdesk@inspro.com.sg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      window.location.assign(mailto);
      status.textContent = "Opening your email app. Review your enquiry and send it from there.";
    } catch {
      status.textContent = "Your browser could not open an email app. Email helpdesk@inspro.com.sg or call +65 6448 7707.";
    }
  });
  form.querySelector('button[type="submit"]').disabled = false;
})();
