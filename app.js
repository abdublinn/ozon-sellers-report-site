const REPORT_PATH = "./%D0%A1%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%D1%8B/ozon_sellers_fullmetrics_march2026.md";

const sellerColors = {
  "Уютная логика": "#c44d25",
  "Нонтон": "#1a6aa8",
  "Правила мебели": "#0d8a6a",
  "Диван босс": "#8a5cf6",
  "Бест": "#c4910f",
  "Много мебели": "#b44f6b"
};

const sellers = [
  { name: "Уютная логика", grossRevenue: 437.8, netRevenue: 411.5, unitsK: 33.3, sku: 694, revenuePerSkuK: 631, avgPrice: 17354, minPrice: 13487, promoDiscount: 15.0, buyout: 94.0, missedSales: 0.5, impressionsM: 189.9, searchViewsM: 46.8, productViewsM: 10.9, impressionToOrder: 0.02, searchToCart: 0.26, cardToCart: 5.84, promoDays: 99.8, adDays: 68.6, adCostM: 71.9, noAdsShare: 17.2, drrOrders: 16.4, drrBuyout: 17.47 },
  { name: "Нонтон", grossRevenue: 362.1, netRevenue: 335.0, unitsK: 29.6, sku: 1000, revenuePerSkuK: 362, avgPrice: 19252, minPrice: 17474, promoDiscount: 85.0, buyout: 92.5, missedSales: 5.4, impressionsM: 288.0, searchViewsM: 58.2, productViewsM: 17.5, impressionToOrder: 0.01, searchToCart: 0.18, cardToCart: 5.18, promoDays: 99.8, adDays: 60.8, adCostM: 55.8, noAdsShare: 5.5, drrOrders: 15.4, drrBuyout: 16.65 },
  { name: "Правила мебели", grossRevenue: 297.5, netRevenue: 256.2, unitsK: 29.2, sku: 1000, revenuePerSkuK: 298, avgPrice: 19575, minPrice: 17486, promoDiscount: 32.0, buyout: 86.1, missedSales: 7.2, impressionsM: 162.7, searchViewsM: 44.9, productViewsM: 10.9, impressionToOrder: 0.02, searchToCart: 0.15, cardToCart: 4.75, promoDays: 98.4, adDays: 33.9, adCostM: 33.6, noAdsShare: 0.6, drrOrders: 11.3, drrBuyout: 13.13 },
  { name: "Диван босс", grossRevenue: 126.6, netRevenue: 113.3, unitsK: 4.1, sku: 334, revenuePerSkuK: 379, avgPrice: 36157, minPrice: 32455, promoDiscount: 3.1, buyout: 89.5, missedSales: 0.0, impressionsM: 64.9, searchViewsM: 8.6, productViewsM: 3.9, impressionToOrder: 0.01, searchToCart: 0.18, cardToCart: 4.04, promoDays: 98.6, adDays: 84.0, adCostM: 13.0, noAdsShare: 12.4, drrOrders: 10.3, drrBuyout: 11.45 },
  { name: "Бест", grossRevenue: 58.0, netRevenue: 52.1, unitsK: 2.3, sku: 1000, revenuePerSkuK: 58, avgPrice: 33568, minPrice: 32940, promoDiscount: 25.6, buyout: 89.8, missedSales: 0.0, impressionsM: 16.1, searchViewsM: 5.8, productViewsM: 0.7, impressionToOrder: 0.07, searchToCart: 0.06, cardToCart: 5.44, promoDays: 99.7, adDays: 33.0, adCostM: 3.0, noAdsShare: 9.2, drrOrders: 5.2, drrBuyout: 5.81 },
  { name: "Много мебели", grossRevenue: 50.0, netRevenue: 45.5, unitsK: 1.9, sku: 373, revenuePerSkuK: 134, avgPrice: 30951, minPrice: 29098, promoDiscount: 4.1, buyout: 90.9, missedSales: 0.0, impressionsM: 22.9, searchViewsM: 4.4, productViewsM: 1.4, impressionToOrder: 0.01, searchToCart: 0.16, cardToCart: 5.02, promoDays: 97.7, adDays: 76.7, adCostM: 4.1, noAdsShare: 7.7, drrOrders: 8.3, drrBuyout: 9.14 }
];

const priceSegments = [
  { key: "under5", label: "До 5 тыс.", values: [2.9, 5.4, 13.4, 0.1, 0.3, 0.2] },
  { key: "5to10", label: "5-10 тыс.", values: [18.5, 18.3, 14.2, 0.8, 3.2, 0.3] },
  { key: "10to20", label: "10-20 тыс.", values: [44.6, 45.1, 31.8, 5.1, 17.2, 16.3] },
  { key: "20to50", label: "20-50 тыс.", values: [33.9, 24.5, 36.7, 80.1, 65.5, 75.7] },
  { key: "above50", label: "Свыше 50 тыс.", values: [0.1, 6.7, 3.9, 13.9, 13.9, 7.5] }
];

const segmentColors = ["#e95b2b", "#f39c54", "#ffd166", "#49a078", "#2f5d8a"];

const comparisonMetrics = [
  { key: "grossRevenue", label: "Заказано, млн ₽", format: (value) => `${value.toFixed(1)} млн ₽` },
  { key: "netRevenue", label: "Чистая выручка, млн ₽", format: (value) => `${value.toFixed(1)} млн ₽` },
  { key: "revenuePerSkuK", label: "Выручка на SKU, тыс. ₽", format: (value) => `${value.toFixed(0)} тыс. ₽` },
  { key: "avgPrice", label: "Средняя цена, ₽", format: formatRubles },
  { key: "buyout", label: "Выкуп, %", format: (value) => `${value.toFixed(1)}%` },
  { key: "promoDiscount", label: "Скидка за счет акций, %", format: (value) => `${value.toFixed(1)}%` }
];

const funnelMetrics = [
  { key: "impressionToOrder", label: "Показ → заказ", format: (value) => `${value.toFixed(2)}%` },
  { key: "searchToCart", label: "Поиск/каталог → корзина", format: (value) => `${value.toFixed(2)}%` },
  { key: "cardToCart", label: "Карточка → корзина", format: (value) => `${value.toFixed(2)}%` }
];

const concentrationProfiles = [
  { name: "Уютная логика", sku: 694, top10: 13.4, top20: 22.8, top50: 43.9, top100: 65.2, assortment50: 8.9, assortment80: 24.4, assortment90: 38.8 },
  { name: "Нонтон", sku: 1000, top10: 10.8, top20: 17.9, top50: 32.8, top100: 47.9, assortment50: 10.9, assortment80: 32.1, assortment90: 46.5 },
  { name: "Правила мебели", sku: 1000, top10: 8.9, top20: 13.4, top50: 22.9, top100: 33.7, assortment50: 21.2, assortment80: 57.7, assortment90: 76.5 },
  { name: "Диван босс", sku: 334, top10: 21.5, top20: 34.9, top50: 62.5, top100: 83.7, assortment50: 10.5, assortment80: 26.0, assortment90: 40.4 },
  { name: "Бест", sku: 1000, top10: 4.4, top20: 7.4, top50: 14.7, top100: 24.1, assortment50: 31.0, assortment80: 67.4, assortment90: 82.9 },
  { name: "Много мебели", sku: 373, top10: 26.6, top20: 36.7, top50: 56.3, top100: 74.5, assortment50: 10.5, assortment80: 33.0, assortment90: 51.2 }
];

const drrCohorts = [
  { label: "0–0,5%", conversion: 0.045, ordersShare: 13.8, sku: 1703, avgPrice: 24229, buyout: 90.5, note: "Органика / минимальная реклама" },
  { label: "0,5–5%", conversion: 0.027, ordersShare: 13.5, sku: 988, avgPrice: 23692, buyout: 89.6, note: "Мягкое рекламное давление" },
  { label: "5–10%", conversion: 0.017, ordersShare: 16.4, sku: 572, avgPrice: 23031, buyout: 90.3, note: "Рабочая рекламная зона" },
  { label: "10–15%", conversion: 0.014, ordersShare: 19.3, sku: 383, avgPrice: 22215, buyout: 90.9, note: "Максимальный объем заказов" },
  { label: "15–20%", conversion: 0.014, ordersShare: 12.4, sku: 242, avgPrice: 20502, buyout: 91.8, note: "Конверсия перестает расти" },
  { label: "20–25%", conversion: 0.014, ordersShare: 10.1, sku: 168, avgPrice: 16922, buyout: 92.6, note: "Рост выкупа, но не конверсии" },
  { label: "25–30%", conversion: 0.010, ordersShare: 6.8, sku: 128, avgPrice: 17588, buyout: 92.0, note: "Убывающая отдача" },
  { label: ">30%", conversion: 0.010, ordersShare: 7.8, sku: 217, avgPrice: 17111, buyout: 92.4, note: "Показы покупаются, заказы — уже хуже" }
];

const state = {
  comparisonMetric: comparisonMetrics[0].key,
  highlightedSegment: priceSegments[3].key,
  funnelMetric: funnelMetrics[2].key
};

init();

async function init() {
  renderHeroStats();
  renderMetricOverview();
  renderSectionNav();
  renderComparisonControls();
  renderSegmentControls();
  renderFunnelControls();
  renderComparisonChart();
  renderSegmentChart();
  renderScatterChart();
  renderFunnelChart();
  await renderFullReport();
  renderConcentrationChart();
  renderDrrChart();
  installActiveNavObserver();
}

function formatRubles(value) {
  return `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
}

function renderHeroStats() {
  const container = document.getElementById("hero-stats");
  const totalGross = sellers.reduce((sum, item) => sum + item.grossRevenue, 0);
  const totalNet = sellers.reduce((sum, item) => sum + item.netRevenue, 0);
  const totalSku = sellers.reduce((sum, item) => sum + item.sku, 0);
  const weightedBuyout = sellers.reduce((sum, item) => sum + item.grossRevenue * item.buyout, 0) / sellers.reduce((sum, item) => sum + item.grossRevenue, 0);
  const stats = [
    { value: `${totalGross.toFixed(1)} млн ₽`, label: "Совокупная брутто-выручка выборки" },
    { value: `${totalNet.toFixed(1)} млн ₽`, label: "Оценка чистой выручки после выкупа" },
    { value: `${weightedBuyout.toFixed(1)}%`, label: "Средневзвешенный выкуп по выборке" },
    { value: `${totalSku.toLocaleString("ru-RU")} SKU`, label: "SKU в выгрузке по шести селлерам" }
  ];

  container.innerHTML = "";
  stats.forEach((item) => {
    const card = document.createElement("article");
    card.className = "hero-stat";
    card.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
    container.append(card);
  });
}

function renderMetricOverview() {
  const container = document.getElementById("metric-grid");
  const cards = [
    { value: "Лидер по нетто", label: "Уютная логика • 411,5 млн ₽", text: "Самый крупный игрок выборки по брутто и по выручке после поправки на выкуп." },
    { value: "Риск возвратов", label: "Правила мебели • 86,1% выкуп", text: "Самое слабое значение выкупа и самые большие потери на возвратах среди шести селлеров." },
    { value: "Самый концентрированный портфель", label: "Много мебели • 26,6% выручки в топ-10", text: "Портфель зависит от небольшого числа SKU, поэтому сильнее подвержен риску локомотивов." },
    { value: "Лучшая рекламная экономика", label: "Бест • 5,81% ДРР к выкупам", text: "Самая экономная рекламная модель в выборке, но с ограниченным масштабом трафика." }
  ];

  container.innerHTML = "";
  cards.forEach((cardData) => {
    const article = document.createElement("article");
    article.innerHTML = `<strong>${cardData.value}</strong><span>${cardData.label}</span><p>${cardData.text}</p>`;
    container.append(article);
  });
}

function renderSectionNav() {
  const container = document.getElementById("section-nav");
  const sections = [
    { href: "#overview", label: "Обзор" },
    { href: "#charts", label: "Графики" },
    { href: "#insight-charts", label: "11.4 и 14.3" },
    { href: "#about", label: "Александр Борисович" },
    { href: "#report", label: "Полный отчет" }
  ];

  container.innerHTML = "";
  sections.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    container.append(link);
  });
  container.querySelector('a[href="#insight-charts"]')?.remove();
}

function renderComparisonControls() {
  renderButtons("metric-switcher", comparisonMetrics, "comparisonMetric", renderComparisonChart);
}

function renderSegmentControls() {
  renderButtons("segment-highlight", priceSegments, "highlightedSegment", renderSegmentChart);
}

function renderFunnelControls() {
  renderButtons("funnel-switcher", funnelMetrics, "funnelMetric", renderFunnelChart);
}

function renderButtons(containerId, items, stateKey, onClick) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  items.forEach((item) => {
    const button = document.createElement("button");
    button.textContent = item.label;
    button.className = item.key === state[stateKey] ? "active" : "";
    button.addEventListener("click", () => {
      state[stateKey] = item.key;
      [...container.children].forEach((child, index) => child.classList.toggle("active", items[index].key === item.key));
      onClick();
    });
    container.append(button);
  });
}

function renderComparisonChart() {
  const svg = document.getElementById("comparison-chart");
  svg.innerHTML = "";
  const metric = comparisonMetrics.find((item) => item.key === state.comparisonMetric);
  const values = sellers.map((seller) => seller[metric.key]);
  const maxValue = Math.max(...values) * 1.12;
  const width = 960;
  const height = 420;
  const margin = { top: 24, right: 26, bottom: 86, left: 84 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const slotWidth = innerWidth / sellers.length;
  const barWidth = slotWidth - 22;

  addAxis(svg, { width, height, margin, maxValue, tickCount: 5, label: metric.label });

  sellers.forEach((seller, index) => {
    const value = seller[metric.key];
    const x = margin.left + index * slotWidth + 12;
    const y = margin.top + innerHeight - (value / maxValue) * innerHeight;
    const rect = createSvg("rect", { x, y, width: barWidth, height: (value / maxValue) * innerHeight, rx: 14, fill: sellerColors[seller.name] });
    installSvgTooltip(rect, `<strong>${seller.name}</strong><br>${metric.label}: ${metric.format(value)}`);
    svg.append(rect);
    svg.append(textNode(x + barWidth / 2, height - 28, seller.name, "seller-label", "middle"));
    svg.append(textNode(x + barWidth / 2, y - 10, metric.format(value), "tick-label", "middle", 13));
  });

  renderSellerLegend(document.getElementById("comparison-legend"));
}

function renderSegmentChart() {
  const svg = document.getElementById("segment-chart");
  svg.innerHTML = "";
  const width = 960;
  const height = 420;
  const margin = { top: 18, right: 24, bottom: 82, left: 84 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const rowHeight = innerHeight / sellers.length - 12;

  addPercentageGrid(svg, { width, height, margin, label: "% от суммы заказов" });

  sellers.forEach((seller, sellerIndex) => {
    const y = margin.top + sellerIndex * (innerHeight / sellers.length) + 6;
    let currentX = margin.left;
    priceSegments.forEach((segment, segmentIndex) => {
      const value = segment.values[sellerIndex];
      const segmentWidth = (value / 100) * innerWidth;
      const rect = createSvg("rect", { x: currentX, y, width: segmentWidth, height: rowHeight, rx: 10, fill: segmentColors[segmentIndex], opacity: segment.key === state.highlightedSegment ? 1 : 0.35 });
      installSvgTooltip(rect, `<strong>${seller.name}</strong><br>${segment.label}: ${value.toFixed(1)}%`);
      svg.append(rect);
      currentX += segmentWidth;
    });
    svg.append(textNode(margin.left - 12, y + rowHeight / 2 + 5, seller.name, "seller-label", "end"));
  });
}

function renderScatterChart() {
  const svg = document.getElementById("scatter-chart");
  svg.innerHTML = "";
  const width = 960;
  const height = 420;
  const margin = { top: 24, right: 30, bottom: 70, left: 76 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxX = Math.max(...sellers.map((seller) => seller.adCostM)) * 1.15;
  const maxY = Math.max(...sellers.map((seller) => seller.netRevenue)) * 1.12;

  addScatterGrid(svg, { width, height, margin, maxX, maxY });

  sellers.forEach((seller) => {
    const x = margin.left + (seller.adCostM / maxX) * innerWidth;
    const y = margin.top + innerHeight - (seller.netRevenue / maxY) * innerHeight;
    const radius = 8 + (seller.buyout - 85) * 1.2;
    const circle = createSvg("circle", { cx: x, cy: y, r: radius, fill: sellerColors[seller.name], opacity: 0.82, stroke: "#fffaf2", "stroke-width": 3 });
    installSvgTooltip(circle, `<strong>${seller.name}</strong><br>Рекламные расходы: ${seller.adCostM.toFixed(1)} млн ₽<br>Нетто-выручка: ${seller.netRevenue.toFixed(1)} млн ₽<br>Выкуп: ${seller.buyout.toFixed(1)}%`);
    svg.append(circle);
    svg.append(textNode(x + radius + 8, y + 4, seller.name, "tick-label", "start", 13));
  });
}

function renderFunnelChart() {
  const svg = document.getElementById("funnel-chart");
  svg.innerHTML = "";
  const metric = funnelMetrics.find((item) => item.key === state.funnelMetric);
  const width = 960;
  const height = 420;
  const margin = { top: 18, right: 24, bottom: 82, left: 84 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(...sellers.map((seller) => seller[metric.key])) * 1.18;

  addAxis(svg, { width, height, margin, maxValue, tickCount: 5, label: metric.label });

  sellers.forEach((seller, index) => {
    const value = seller[metric.key];
    const slotWidth = innerWidth / sellers.length;
    const centerX = margin.left + slotWidth * index + slotWidth / 2;
    const topWidth = slotWidth * 0.62;
    const bottomWidth = slotWidth * 0.28;
    const yTop = margin.top + innerHeight - (value / maxValue) * innerHeight;
    const polygon = createSvg("polygon", {
      points: [
        [centerX - topWidth / 2, yTop],
        [centerX + topWidth / 2, yTop],
        [centerX + bottomWidth / 2, margin.top + innerHeight],
        [centerX - bottomWidth / 2, margin.top + innerHeight]
      ].map((point) => point.join(",")).join(" "),
      fill: sellerColors[seller.name],
      opacity: 0.86
    });
    installSvgTooltip(polygon, `<strong>${seller.name}</strong><br>${metric.label}: ${metric.format(value)}`);
    svg.append(polygon);
    svg.append(textNode(centerX, height - 28, seller.name, "seller-label", "middle"));
  });
}

function renderConcentrationChart() {
  const svg = document.getElementById("concentration-chart");
  const summary = document.getElementById("concentration-summary");
  if (!svg || !summary) return;
  svg.innerHTML = "";
  summary.innerHTML = "";

  const width = 960;
  const height = 470;
  const margin = { top: 28, right: 34, bottom: 72, left: 74 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  addPercentAxes(svg, { width, height, margin, xLabel: "Доля ассортимента, нужная для достижения порога выручки", yLabel: "Доля суммы заказов" });

  svg.append(createSvg("line", {
    x1: margin.left,
    y1: height - margin.bottom,
    x2: width - margin.right,
    y2: margin.top,
    stroke: "rgba(33, 22, 13, 0.25)",
    "stroke-dasharray": "8 8"
  }));
  svg.append(textNode(width - margin.right - 8, margin.top + 18, "Идеально равномерный портфель", "tick-label", "end", 13));

  concentrationProfiles.forEach((profile) => {
    const points = buildConcentrationPoints(profile).map((point) => ({
      x: margin.left + (point.x / 100) * innerWidth,
      y: margin.top + innerHeight - (point.y / 100) * innerHeight,
      label: point.label
    }));
    const path = createSvg("path", {
      d: points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" "),
      fill: "none",
      stroke: sellerColors[profile.name],
      "stroke-width": 3.2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    });
    installSvgTooltip(path, `<strong>${profile.name}</strong><br>Топ-10 SKU: ${profile.top10.toFixed(1)}% выручки<br>Для 90% заказов нужен ${profile.assortment90.toFixed(1)}% ассортимента`);
    svg.append(path);

    points.forEach((point) => {
      const dot = createSvg("circle", { cx: point.x, cy: point.y, r: 4.5, fill: sellerColors[profile.name], stroke: "#fffaf2", "stroke-width": 2 });
      installSvgTooltip(dot, `<strong>${profile.name}</strong><br>${point.label}`);
      svg.append(dot);
    });
  });

  const mostConcentrated = [...concentrationProfiles].sort((a, b) => b.top10 - a.top10)[0];
  const mostEven = [...concentrationProfiles].sort((a, b) => b.assortment90 - a.assortment90)[0];
  const mostBalanced = concentrationProfiles.find((profile) => profile.name === "Уютная логика");
  [
    `Самая высокая концентрация: ${mostConcentrated.name} — ${mostConcentrated.top10.toFixed(1)}% выручки в топ-10 SKU`,
    `Самое равномерное распределение: ${mostEven.name} — для 90% заказов нужен ${mostEven.assortment90.toFixed(1)}% ассортимента`,
    `Здоровый баланс портфеля: ${mostBalanced.name} — 24,4% ассортимента дают 80% заказов`
  ].forEach((text) => summary.append(buildSummaryPill(text)));

  renderLegendInto(summary);
}

function renderDrrChart() {
  const svg = document.getElementById("drr-chart");
  const summary = document.getElementById("drr-summary");
  if (!svg || !summary) return;
  svg.innerHTML = "";
  summary.innerHTML = "";

  const width = 960;
  const height = 470;
  const margin = { top: 28, right: 86, bottom: 88, left: 86 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxConversion = 0.05;
  const maxOrdersShare = 20;
  const slotWidth = innerWidth / drrCohorts.length;

  for (let tick = 0; tick <= 5; tick += 1) {
    const y = margin.top + innerHeight - (tick / 5) * innerHeight;
    svg.append(createSvg("line", { x1: margin.left, x2: width - margin.right, y1: y, y2: y, class: "chart-grid-line" }));
    svg.append(textNode(margin.left - 14, y + 5, `${((maxConversion / 5) * tick).toFixed(3)}%`, "tick-label", "end", 13));
    svg.append(textNode(width - margin.right + 14, y + 5, `${((maxOrdersShare / 5) * tick).toFixed(1)}%`, "tick-label", "start", 13));
  }

  svg.append(createSvg("line", { x1: margin.left, x2: width - margin.right, y1: height - margin.bottom, y2: height - margin.bottom, class: "chart-grid-line strong" }));
  svg.append(textNode(margin.left, 18, "Конверсия показа в заказ", "axis-label", "start", 13));
  svg.append(textNode(width - margin.right, 18, "Доля заказов в когорте", "axis-label", "end", 13));

  const linePoints = [];
  drrCohorts.forEach((cohort, index) => {
    const x = margin.left + slotWidth * index + slotWidth / 2;
    const barHeight = (cohort.ordersShare / maxOrdersShare) * innerHeight;
    const barY = margin.top + innerHeight - barHeight;
    const bar = createSvg("rect", { x: x - slotWidth * 0.26, y: barY, width: slotWidth * 0.52, height: barHeight, rx: 12, fill: index === 0 ? "rgba(13, 138, 106, 0.72)" : "rgba(26, 106, 168, 0.32)" });
    installSvgTooltip(bar, `<strong>${cohort.label}</strong><br>Доля заказов: ${cohort.ordersShare.toFixed(1)}%<br>SKU: ${cohort.sku.toLocaleString("ru-RU")}<br>${cohort.note}`);
    svg.append(bar);
    const pointY = margin.top + innerHeight - (cohort.conversion / maxConversion) * innerHeight;
    linePoints.push([x, pointY]);
    svg.append(textNode(x, height - margin.bottom + 28, cohort.label, "seller-label", "middle", 13));
    svg.append(textNode(x, barY - 10, `${cohort.ordersShare.toFixed(1)}%`, "tick-label", "middle", 12));
  });

  svg.append(createSvg("path", {
    d: linePoints.map((point, index) => `${index === 0 ? "M" : "L"} ${point[0]} ${point[1]}`).join(" "),
    fill: "none",
    stroke: "#c44d25",
    "stroke-width": 4,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));

  drrCohorts.forEach((cohort, index) => {
    const x = margin.left + slotWidth * index + slotWidth / 2;
    const y = margin.top + innerHeight - (cohort.conversion / maxConversion) * innerHeight;
    const dot = createSvg("circle", { cx: x, cy: y, r: 6, fill: "#c44d25", stroke: "#fffaf2", "stroke-width": 3 });
    installSvgTooltip(dot, `<strong>${cohort.label}</strong><br>Конверсия показ → заказ: ${cohort.conversion.toFixed(3)}%<br>Выкуп: ${cohort.buyout.toFixed(1)}%<br>Средняя цена: ${formatRubles(cohort.avgPrice)}`);
    svg.append(dot);
    svg.append(textNode(x, y - 14, `${cohort.conversion.toFixed(3)}%`, "tick-label", "middle", 12));
  });

  [
    "Лучшая конверсия — органика 0–0,5%: 0,045%",
    "Максимум объема заказов — когорта 10–15%: 19,3%",
    "После 15% ДРР реклама почти перестает улучшать конверсию, но продолжает стоить дороже"
  ].forEach((text) => summary.append(buildSummaryPill(text)));
}

function buildConcentrationPoints(profile) {
  return [
    { x: 0, y: 0, label: "0% ассортимента → 0% заказов" },
    { x: (10 / profile.sku) * 100, y: profile.top10, label: `Топ-10 SKU → ${profile.top10.toFixed(1)}% заказов` },
    { x: (20 / profile.sku) * 100, y: profile.top20, label: `Топ-20 SKU → ${profile.top20.toFixed(1)}% заказов` },
    { x: (50 / profile.sku) * 100, y: profile.top50, label: `Топ-50 SKU → ${profile.top50.toFixed(1)}% заказов` },
    { x: (Math.min(100, profile.sku) / profile.sku) * 100, y: profile.top100, label: `Топ-100 SKU → ${profile.top100.toFixed(1)}% заказов` },
    { x: profile.assortment50, y: 50, label: `${profile.assortment50.toFixed(1)}% ассортимента дают 50% заказов` },
    { x: profile.assortment80, y: 80, label: `${profile.assortment80.toFixed(1)}% ассортимента дают 80% заказов` },
    { x: profile.assortment90, y: 90, label: `${profile.assortment90.toFixed(1)}% ассортимента дают 90% заказов` },
    { x: 100, y: 100, label: "100% ассортимента → 100% заказов" }
  ].sort((a, b) => a.x - b.x);
}

function buildSummaryPill(text) {
  const pill = document.createElement("div");
  pill.className = "summary-pill";
  pill.textContent = text;
  return pill;
}

function renderLegendInto(container) {
  sellers.forEach((seller) => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `<span class="legend-dot" style="background:${sellerColors[seller.name]}"></span>${seller.name}`;
    container.append(item);
  });
}

function renderSellerLegend(container) {
  container.innerHTML = "";
  renderLegendInto(container);
}

function addAxis(svg, { width, height, margin, maxValue, tickCount, label }) {
  const innerHeight = height - margin.top - margin.bottom;
  for (let index = 0; index <= tickCount; index += 1) {
    const value = (maxValue / tickCount) * index;
    const y = margin.top + innerHeight - ((value / maxValue) * innerHeight);
    svg.append(createSvg("line", { x1: margin.left, x2: width - margin.right, y1: y, y2: y, class: "chart-grid-line" }));
    svg.append(textNode(margin.left - 14, y + 5, simplifyNumber(value), "tick-label", "end", 13));
  }
  svg.append(createSvg("line", { x1: margin.left, x2: margin.left, y1: margin.top, y2: height - margin.bottom, class: "chart-grid-line strong" }));
  svg.append(createSvg("line", { x1: margin.left, x2: width - margin.right, y1: height - margin.bottom, y2: height - margin.bottom, class: "chart-grid-line strong" }));
  svg.append(textNode(margin.left, 18, label, "axis-label", "start", 13));
}

function addPercentageGrid(svg, { width, height, margin, label }) {
  [0, 20, 40, 60, 80, 100].forEach((value) => {
    const x = margin.left + ((width - margin.left - margin.right) * value) / 100;
    svg.append(createSvg("line", { x1: x, x2: x, y1: margin.top, y2: height - margin.bottom, class: "chart-grid-line" }));
    svg.append(textNode(x, height - margin.bottom + 28, `${value}%`, "tick-label", "middle", 13));
  });
  svg.append(textNode(margin.left, 18, label, "axis-label", "start", 13));
}

function addScatterGrid(svg, { width, height, margin, maxX, maxY }) {
  [0, 0.25, 0.5, 0.75, 1].forEach((ratio) => {
    const y = margin.top + (height - margin.top - margin.bottom) * (1 - ratio);
    const x = margin.left + (width - margin.left - margin.right) * ratio;
    svg.append(createSvg("line", { x1: margin.left, x2: width - margin.right, y1: y, y2: y, class: "chart-grid-line" }));
    svg.append(createSvg("line", { x1: x, x2: x, y1: margin.top, y2: height - margin.bottom, class: "chart-grid-line" }));
    svg.append(textNode(margin.left - 14, y + 5, `${(maxY * ratio).toFixed(0)} млн`, "tick-label", "end", 13));
    svg.append(textNode(x, height - margin.bottom + 28, `${(maxX * ratio).toFixed(0)} млн`, "tick-label", "middle", 13));
  });
  svg.append(textNode(margin.left, 18, "Ось Y: нетто-выручка", "axis-label", "start", 13));
  svg.append(textNode(width - margin.right, height - 18, "Ось X: рекламные расходы", "axis-label", "end", 13));
}

function addPercentAxes(svg, { width, height, margin, xLabel, yLabel }) {
  [0, 20, 40, 60, 80, 100].forEach((value) => {
    const x = margin.left + ((width - margin.left - margin.right) * value) / 100;
    const y = margin.top + (height - margin.top - margin.bottom) - ((height - margin.top - margin.bottom) * value) / 100;
    svg.append(createSvg("line", { x1: x, x2: x, y1: margin.top, y2: height - margin.bottom, class: value === 0 ? "chart-grid-line strong" : "chart-grid-line" }));
    svg.append(createSvg("line", { x1: margin.left, x2: width - margin.right, y1: y, y2: y, class: value === 0 ? "chart-grid-line strong" : "chart-grid-line" }));
    svg.append(textNode(x, height - margin.bottom + 28, `${value}%`, "tick-label", "middle", 13));
    svg.append(textNode(margin.left - 14, y + 5, `${value}%`, "tick-label", "end", 13));
  });
  svg.append(textNode(margin.left, 18, yLabel, "axis-label", "start", 13));
  svg.append(textNode(width - margin.right, height - 18, xLabel, "axis-label", "end", 13));
}

function textNode(x, y, text, className, anchor, size = 14) {
  const node = createSvg("text", { x, y, class: className, "text-anchor": anchor, "font-size": String(size) });
  node.textContent = text;
  return node;
}

function simplifyNumber(value) {
  if (value >= 1000) return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(value);
  if (value >= 100) return value.toFixed(0);
  if (value >= 10) return value.toFixed(1);
  return value.toFixed(2);
}

function createSvg(tag, attributes) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function installSvgTooltip(node, html) {
  let tooltip = null;
  node.addEventListener("mouseenter", () => {
    tooltip = document.getElementById("tooltip-template").content.firstElementChild.cloneNode(true);
    tooltip.innerHTML = html;
    document.body.append(tooltip);
  });
  node.addEventListener("mousemove", (event) => {
    if (!tooltip) return;
    tooltip.style.left = `${event.clientX + 16}px`;
    tooltip.style.top = `${event.clientY + 16}px`;
  });
  node.addEventListener("mouseleave", () => {
    tooltip?.remove();
    tooltip = null;
  });
}

async function renderFullReport() {
  const reportContent = document.getElementById("report-content");
  try {
    const response = await fetch(REPORT_PATH);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    reportContent.innerHTML = "";
    parseMarkdown(markdown).forEach((node) => reportContent.append(node));
    normalizeReportStructure(reportContent);
    injectReportCharts(reportContent);
    renderReportToc(reportContent);
  } catch (error) {
    reportContent.innerHTML = `
      <h3>Не удалось загрузить markdown-отчет</h3>
      <p>Сайт ожидает запуск через локальный HTTP-сервер. Используйте <code>./start-site.ps1</code> или <code>python -m http.server 4173</code> из корня проекта.</p>
      <p>Файл отчета: <code>Селлеры/ozon_sellers_fullmetrics_march2026.md</code></p>
    `;
  }
}

function normalizeReportStructure(reportContent) {
  const title = reportContent.querySelector("h1");
  if (title) title.textContent = "Анатомия мебельного Ozon";

  [...reportContent.querySelectorAll("h2, h3")].forEach((heading) => {
    heading.textContent = heading.textContent.replace(/^(\d+)((?:\.\d+)*)/, (_, major, suffix) => {
      const map = { "10": "14", "11": "10", "12": "11", "13": "12", "14": "13" };
      return `${map[major] || major}${suffix || ""}`;
    });
  });
}

function injectReportCharts(reportContent) {
  const concentrationHeading = findReportHeading(reportContent, "10.4");
  if (concentrationHeading && !document.getElementById("concentration-chart")) {
    concentrationHeading.insertAdjacentElement("afterend", buildEmbeddedChartCard({
      kicker: "10.4",
      title: "Интерпретация: насколько равномерно распределены продажи",
      note: "Линии показывают, какая доля ассортимента нужна, чтобы закрыть 10%, 20%, 50%, 80%, 90% и 100% заказов.",
      intro: "Корректная версия графика показывает профиль концентрации продаж и отклонение от равномерного портфеля, а не просто долю топовых SKU.",
      svgId: "concentration-chart",
      summaryId: "concentration-summary",
      viewBox: "0 0 960 470",
      ariaLabel: "Насколько равномерно распределены продажи"
    }));
  }

  const drrHeading = findReportHeading(reportContent, "13.3");
  if (drrHeading && !document.getElementById("drr-chart")) {
    drrHeading.insertAdjacentElement("afterend", buildEmbeddedChartCard({
      kicker: "13.3",
      title: "Сравнение: конверсия показа в заказ по когортам ДРР",
      note: "Столбцы показывают долю заказов, линия — конверсию показа в заказ. Так видно и объем, и качество когорты.",
      intro: "Здесь разделены два разных смысла: где лежит основной объем заказов и в каких когортах действительно выше эффективность рекламы.",
      svgId: "drr-chart",
      summaryId: "drr-summary",
      viewBox: "0 0 960 470",
      ariaLabel: "Конверсия показа в заказ по когортам ДРР"
    }));
  }
}

function findReportHeading(reportContent, prefix) {
  return [...reportContent.querySelectorAll("h2, h3")].find((heading) => heading.textContent.trim().startsWith(prefix));
}

function buildEmbeddedChartCard({ kicker, title, note, intro, svgId, summaryId, viewBox, ariaLabel }) {
  const wrapper = document.createElement("div");
  wrapper.className = "report-embedded-chart";
  wrapper.innerHTML = `
    <div class="chart-card">
      <div class="card-head">
        <div>
          <p class="card-kicker">${kicker}</p>
          <h3>${title}</h3>
        </div>
        <div class="card-note">${note}</div>
      </div>
      <p class="report-embed-intro">${intro}</p>
      <div class="chart-wrap">
        <svg id="${svgId}" viewBox="${viewBox}" role="img" aria-label="${ariaLabel}"></svg>
      </div>
      <div class="chart-summary" id="${summaryId}"></div>
    </div>
  `;
  return wrapper;
}

function renderReportToc(contentElement) {
  const tocContainer = document.getElementById("report-toc");
  tocContainer.innerHTML = "";
  const title = document.createElement("h3");
  title.textContent = "Навигация по отчету";
  const nav = document.createElement("nav");
  [...contentElement.querySelectorAll("h2, h3")].forEach((heading, index) => {
    const id = `report-heading-${index + 1}`;
    heading.id = id;
    const link = document.createElement("a");
    link.href = `#${id}`;
    link.textContent = heading.textContent;
    nav.append(link);
  });
  tocContainer.append(title, nav);
}

function parseMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const nodes = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (/^```/.test(line.trim())) {
      index += 1;
      const codeLines = [];
      while (index < lines.length && !/^```/.test(lines[index].trim())) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += 1;
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.textContent = codeLines.join("\n");
      pre.append(code);
      nodes.push(pre);
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      nodes.push(document.createElement("hr"));
      index += 1;
      continue;
    }

    if (/^\|/.test(line)) {
      const tableLines = [];
      while (index < lines.length && /^\|/.test(lines[index])) {
        tableLines.push(lines[index]);
        index += 1;
      }
      nodes.push(buildTable(tableLines));
      continue;
    }

    if (/^> /.test(line)) {
      const quoteLines = [];
      while (index < lines.length && /^> /.test(lines[index])) {
        quoteLines.push(lines[index].replace(/^> /, ""));
        index += 1;
      }
      const blockquote = document.createElement("blockquote");
      blockquote.innerHTML = inlineMarkdown(quoteLines.join(" "));
      nodes.push(blockquote);
      continue;
    }

    if (/^### /.test(line)) {
      const h3 = document.createElement("h3");
      h3.innerHTML = inlineMarkdown(line.slice(4));
      nodes.push(h3);
      index += 1;
      continue;
    }

    if (/^## /.test(line)) {
      const h2 = document.createElement("h2");
      h2.innerHTML = inlineMarkdown(line.slice(3));
      nodes.push(h2);
      index += 1;
      continue;
    }

    if (/^# /.test(line)) {
      const h1 = document.createElement("h1");
      h1.innerHTML = inlineMarkdown(line.slice(2));
      nodes.push(h1);
      index += 1;
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const list = document.createElement("ol");
      while (index < lines.length && /^\d+\.\s/.test(lines[index])) {
        const item = document.createElement("li");
        item.innerHTML = inlineMarkdown(lines[index].replace(/^\d+\.\s/, ""));
        list.append(item);
        index += 1;
      }
      nodes.push(list);
      continue;
    }

    if (/^- /.test(line)) {
      const list = document.createElement("ul");
      while (index < lines.length && /^- /.test(lines[index])) {
        const item = document.createElement("li");
        item.innerHTML = inlineMarkdown(lines[index].slice(2));
        list.append(item);
        index += 1;
      }
      nodes.push(list);
      continue;
    }

    const paragraphLines = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^```/.test(lines[index].trim()) &&
      !/^---+$/.test(lines[index].trim()) &&
      !/^\|/.test(lines[index]) &&
      !/^> /.test(lines[index]) &&
      !/^#{1,3} /.test(lines[index]) &&
      !/^\d+\.\s/.test(lines[index]) &&
      !/^- /.test(lines[index])
    ) {
      paragraphLines.push(lines[index]);
      index += 1;
    }
    const paragraph = document.createElement("p");
    paragraph.innerHTML = inlineMarkdown(paragraphLines.join(" "));
    nodes.push(paragraph);
  }

  return nodes;
}

function inlineMarkdown(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function buildTable(lines) {
  const rows = lines.map((line) => line.split("|").slice(1, -1).map((cell) => cell.trim()));
  const wrapper = document.createElement("div");
  wrapper.className = "table-wrap";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  rows.forEach((cells, rowIndex) => {
    if (rowIndex === 1 && cells.every((cell) => /^-+$/.test(cell.replace(/:/g, "")))) {
      return;
    }
    const tr = document.createElement("tr");
    cells.forEach((cell) => {
      const element = rowIndex === 0 ? document.createElement("th") : document.createElement("td");
      element.innerHTML = inlineMarkdown(cell);
      tr.append(element);
    });
    if (rowIndex === 0) thead.append(tr);
    else tbody.append(tr);
  });

  table.append(thead, tbody);
  wrapper.append(table);
  return wrapper;
}

function installActiveNavObserver() {
  const sections = [...document.querySelectorAll("main > section[id]")];
  const links = [...document.querySelectorAll(".section-nav a")];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 });

  sections.forEach((section) => observer.observe(section));
}
