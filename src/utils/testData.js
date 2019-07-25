const data = [
  {
    campaign: "DE|SN|Longboard|Generisch",
    channel: "Search",
    clicks: 185,
    impressions: 8760
  },
  {
    campaign: "AT|SN|Snowboard|Generisch",
    channel: "Search",
    clicks: 203,
    impressions: 5966
  },
  {
    campaign: "DE | SP Gadgets",
    channel: "Search",
    clicks: 897,
    impressions: 15324
  },
  {
    campaign: "DE|SN|Snowboard|Brands",
    channel: "Search",
    clicks: 121,
    impressions: 3002
  },
  {
    campaign: "EN | SP Gadgets",
    channel: "Search",
    clicks: 259,
    impressions: 6738
  },
  {
    campaign: "AT|SN|Skullcandy",
    channel: "Search",
    clicks: 76,
    impressions: 712
  },
  {
    campaign: "AT|SN|Longboard|Generisch",
    channel: "Search",
    clicks: 189,
    impressions: 2683
  },
  {
    campaign: "AT|SN|Audio&Video|Brands",
    channel: "Search",
    clicks: 23,
    impressions: 800
  },
  {
    campaign: "AT|SN|Skate|Generisch",
    channel: "Search",
    clicks: 476,
    impressions: 6124
  },
  {
    campaign: "AT|SN|Snowboard|Brands",
    channel: "Search",
    clicks: 107,
    impressions: 995
  },
  {
    campaign: "DE|SN|Accessoires|Brands",
    channel: "Search",
    clicks: 156,
    impressions: 1699
  },
  {
    campaign: "DE|SN|Skullcandy",
    channel: "Search",
    clicks: 664,
    impressions: 5533
  },
  {
    campaign: "AT|SN|Skate|Brands",
    channel: "Search",
    clicks: 44,
    impressions: 671
  },
  {
    campaign: "DE|SN|Longboard|Generisch",
    channel: "Display",
    clicks: 9,
    impressions: 141
  },
  {
    campaign: "AT|SN|Snowboard|Generisch",
    channel: "Display",
    clicks: 798,
    impressions: 19014
  },

  {
    campaign: "DE | SP Gadgets",
    channel: "Display",
    clicks: 295,
    impressions: 3761
  },
  {
    campaign: "DE|SN|Snowboard|Brands",
    channel: "Display",
    clicks: 292,
    impressions: 98933
  },
  {
    campaign: "EN | SP Gadgets",
    channel: "Display",
    clicks: 28,
    impressions: 143
  },
  {
    campaign: "AT|SN|Skullcandy",
    channel: "Display",
    clicks: 122,
    impressions: 1138
  },
  {
    campaign: "AT|SN|Longboard|Generisch",
    channel: "Display",
    clicks: 4064,
    impressions: 164954
  },
  {
    campaign: "AT|SN|Audio&Video|Brands",
    channel: "Display",
    clicks: 912,
    impressions: 76522
  },
  {
    campaign: "AT|SN|Skate|Generisch",
    channel: "Display",
    clicks: 89,
    impressions: 4471
  },
  {
    campaign: "AT|SN|Snowboard|Brands",
    channel: "Display",
    clicks: 652,
    impressions: 27188
  },
  {
    campaign: "DE|SN|Accessoires|Brands",
    channel: "Display",
    clicks: 146,
    impressions: 389
  },
  {
    campaign: "DE|SN|Skullcandy",
    channel: "Display",
    clicks: 312,
    impressions: 642
  }
];

const option1 = "DE|SN|Longboard|Generisch";
const option2 = "Search";
const option3 = "AT|SN|Snowboard|Generisch";
// const option4 = "DE | SP Gadgets";
// const option5 = "DE|SN|Snowboard|Brands";
// const option6 = "EN | SP Gadgets";
// const option7 = "AT|SN|Skullcandy";
// const option8 = "AT|SN|Longboard|Generisch";
// const option9 = "AT|SN|Audio&Video|Brands";
// const option10 = "AT|SN|Skate|Generisch";
// const option11 = "AT|SN|Snowboard|Brands";
// const option12 = "DE|SN|Accessoires|Brands";
// const option13 = "DE|SN|Skullcandy";
// const option14 = "AT|SN|Skate|Brands";
// const option15 = "Display";

const eOptionsResult = [
  { label: "DE|SN|Longboard|Generisch" },
  { label: "Search" },
  { label: "AT|SN|Snowboard|Generisch" },
  { label: "Search" },
  { label: "DE | SP Gadgets" },
  { label: "Search" },
  { label: "DE|SN|Snowboard|Brands" },
  { label: "Search" },
  { label: "EN | SP Gadgets" },
  { label: "Search" },
  { label: "AT|SN|Skullcandy" },
  { label: "Search" },
  { label: "AT|SN|Longboard|Generisch" },
  { label: "Search" },
  { label: "AT|SN|Audio&Video|Brands" },
  { label: "Search" },
  { label: "AT|SN|Skate|Generisch" },
  { label: "Search" },
  { label: "AT|SN|Snowboard|Brands" },
  { label: "Search" },
  { label: "DE|SN|Accessoires|Brands" },
  { label: "Search" },
  { label: "DE|SN|Skullcandy" },
  { label: "Search" },
  { label: "AT|SN|Skate|Brands" },
  { label: "Search" },
  { label: "DE|SN|Longboard|Generisch" },
  { label: "Display" },
  { label: "AT|SN|Snowboard|Generisch" },
  { label: "Display" },
  { label: "DE | SP Gadgets" },
  { label: "Display" },
  { label: "DE|SN|Snowboard|Brands" },
  { label: "Display" },
  { label: "EN | SP Gadgets" },
  { label: "Display" },
  { label: "AT|SN|Skullcandy" },
  { label: "Display" },
  { label: "AT|SN|Longboard|Generisch" },
  { label: "Display" },
  { label: "AT|SN|Audio&Video|Brands" },
  { label: "Display" },
  { label: "AT|SN|Skate|Generisch" },
  { label: "Display" },
  { label: "AT|SN|Snowboard|Brands" },
  { label: "Display" },
  { label: "DE|SN|Accessoires|Brands" },
  { label: "Display" },
  { label: "DE|SN|Skullcandy" },
  { label: "Display" }
];

export default { data, option1, option2, option3, eOptionsResult };
