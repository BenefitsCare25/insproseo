import { navigationLabel } from './navigation-labels.js?v=20261011-navigation-1';

const labels = {
  home: ["Why Inspro","BenefitsCare for SME","Your benefits portal","Travel cover","Start a conversation"],
  care: ["Compare plans","Optional benefits","Scheme features","Employee & HR tools","Quotation details"],
  benefits: ["Everyday care","Hospital cover","Life & accident","Flex & wellness","Employee & HR tools","Your policy year"],
  business: ["Business packages","Property & operations","Money & crime","Liability & professional","People & travel","Marine & trade"],
  catalogue: ["People & travel","Property & projects","Liability","Marine & trade","Package or specialist?"],
  medical: ["Prepare your brief","MOM requirements"],
  bonds: ["Application steps","Bond requirements"],
  personal: ["Travel","Motor","Home","Personal accident","Domestic helper","Lifestyle cover"],
  travel: ["Personal travel quotes","Before you buy","Business travel"],
  motor: ["Vehicle & driver","Renewal questions"],
  house: ["What to protect","Owner or tenant?"],
  accident: ["Cover & activities","Common questions"],
  helper: ["Medical, accident & bond","MOM requirements"],
  groupMedical: ["Benefit questions","Programme options","Common questions"],
  wic: ["Employer duties","Your declarations","Common questions"],
  liability: ["Your activities","Limits & terms","Common questions"],
  professional: ["Your services","Claims & continuity","Common questions"],
  claims: ["What to do first","Benefits programme","Common questions"],
  about: ["Our vision","Our mission","Core values (TACT)","How we help","Company verification"],
  employerGuide: ["Compare four covers","Build your brief","Employer questions"],
  checklist: ["Gather documents","What has changed?","Compare the details","Confirm next steps"],
  privacy: ["Your enquiry","Email & telephone","Sensitive information","Cookies & storage","External websites","Notice updates"],
};

export const topics = Object.fromEntries(Object.entries(labels).map(([key, values]) => [key, values.map(navigationLabel)]));
