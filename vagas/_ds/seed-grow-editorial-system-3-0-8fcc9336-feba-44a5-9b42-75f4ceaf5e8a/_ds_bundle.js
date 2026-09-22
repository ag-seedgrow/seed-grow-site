/* @ds-bundle: {"format":4,"namespace":"SeedGrowEditorialSystem_8fcc93","components":[{"name":"L001EditorialCover","sourcePath":"components/layouts/L001EditorialCover.jsx"},{"name":"L002EditorialStory","sourcePath":"components/layouts/L002EditorialStory.jsx"},{"name":"L003HeroStatistic","sourcePath":"components/layouts/L003HeroStatistic.jsx"},{"name":"L004MagazineSplit","sourcePath":"components/layouts/L004MagazineSplit.jsx"},{"name":"L005InsightGrid","sourcePath":"components/layouts/L005InsightGrid.jsx"},{"name":"L006ImageFirst","sourcePath":"components/layouts/L006ImageFirst.jsx"},{"name":"L007EditorialComparison","sourcePath":"components/layouts/L007EditorialComparison.jsx"},{"name":"L008QuotePage","sourcePath":"components/layouts/L008QuotePage.jsx"},{"name":"L009Timeline","sourcePath":"components/layouts/L009Timeline.jsx"},{"name":"L010ImageData","sourcePath":"components/layouts/L010ImageData.jsx"},{"name":"L011EditorialList","sourcePath":"components/layouts/L011EditorialList.jsx"},{"name":"L012EditorialManifesto","sourcePath":"components/layouts/L012EditorialManifesto.jsx"},{"name":"PhotoPlaceholder","sourcePath":"components/layouts/PhotoPlaceholder.jsx"},{"name":"P01HeroHeadline","sourcePath":"components/post-layouts/P01HeroHeadline.jsx"},{"name":"P02FullBackground","sourcePath":"components/post-layouts/P02FullBackground.jsx"},{"name":"P03TypographyOnly","sourcePath":"components/post-layouts/P03TypographyOnly.jsx"},{"name":"P04Editorial","sourcePath":"components/post-layouts/P04Editorial.jsx"},{"name":"P05KeywordFocus","sourcePath":"components/post-layouts/P05KeywordFocus.jsx"},{"name":"P06ImageCutOut","sourcePath":"components/post-layouts/P06ImageCutOut.jsx"},{"name":"P07MinimalPoster","sourcePath":"components/post-layouts/P07MinimalPoster.jsx"},{"name":"P08MagazineCover","sourcePath":"components/post-layouts/P08MagazineCover.jsx"},{"name":"P09CarouselLayout","sourcePath":"components/post-layouts/P09CarouselLayout.jsx"},{"name":"P10InsightCard","sourcePath":"components/post-layouts/P10InsightCard.jsx"},{"name":"PostCallout","sourcePath":"components/post/PostCallout.jsx"},{"name":"PostFooter","sourcePath":"components/post/PostFooter.jsx"},{"name":"PostLabel","sourcePath":"components/post/PostLabel.jsx"}],"sourceHashes":{"components/layouts/L001EditorialCover.jsx":"ba5049b58505","components/layouts/L002EditorialStory.jsx":"ea28265e4a16","components/layouts/L003HeroStatistic.jsx":"1036ae6801c2","components/layouts/L004MagazineSplit.jsx":"ab4343a4d89b","components/layouts/L005InsightGrid.jsx":"df3c549c9cc7","components/layouts/L006ImageFirst.jsx":"069e0c910294","components/layouts/L007EditorialComparison.jsx":"fb1f7b2f53bc","components/layouts/L008QuotePage.jsx":"d64739eb5440","components/layouts/L009Timeline.jsx":"14dc3d0d27ce","components/layouts/L010ImageData.jsx":"cc28207c327a","components/layouts/L011EditorialList.jsx":"4c98d08f6be3","components/layouts/L012EditorialManifesto.jsx":"23fb518de692","components/layouts/PhotoPlaceholder.jsx":"10c0709bb916","components/post-layouts/P01HeroHeadline.jsx":"4ca590fcb8b0","components/post-layouts/P02FullBackground.jsx":"f650cf7e2b82","components/post-layouts/P03TypographyOnly.jsx":"3367c389c6fb","components/post-layouts/P04Editorial.jsx":"cb993fbc2f0e","components/post-layouts/P05KeywordFocus.jsx":"4c31d0ba4665","components/post-layouts/P06ImageCutOut.jsx":"c2202031d4f1","components/post-layouts/P07MinimalPoster.jsx":"313150dad0ed","components/post-layouts/P08MagazineCover.jsx":"88d634a2fea5","components/post-layouts/P09CarouselLayout.jsx":"5cea824b6810","components/post-layouts/P10InsightCard.jsx":"898e839c7611","components/post/PostCallout.jsx":"e86f22728de3","components/post/PostFooter.jsx":"41b1a06347f4","components/post/PostLabel.jsx":"85ccbe5ade62"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SeedGrowEditorialSystem_8fcc93 = window.SeedGrowEditorialSystem_8fcc93 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/layouts/L001EditorialCover.jsx
try { (() => {
function L001EditorialCover({
  kicker = 'SEED GROW / TRENDS',
  headline = 'The quiet return of ',
  highlight = 'attention',
  headlineEnd = '',
  atmosphere = 'light',
  imageLabel = 'Full-bleed photography'
}) {
  const dark = atmosphere === 'dark';
  const wrap = {
    width: 1080,
    height: 1350,
    position: 'relative',
    background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
  };
  return React.createElement('div', {
    style: wrap
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      opacity: 0.65
    }
  }, kicker), React.createElement('div', {
    style: {
      flex: 1,
      position: 'relative',
      marginTop: 32
    }
  }, React.createElement(PhotoPlaceholderFallback, {
    dark,
    imageLabel
  })), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)',
      margin: '32px 0 0',
      maxWidth: 900
    }
  }, headline, React.createElement('em', {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-primary)'
    }
  }, highlight), headlineEnd));
}
function PhotoPlaceholderFallback({
  dark,
  imageLabel
}) {
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: dark ? 'linear-gradient(160deg,#1a2b27,#03302f)' : 'linear-gradient(160deg,#d9decb,#c7cdb5)',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-muted-dark)' : 'var(--text-muted-light)',
      padding: 16,
      border: `1px dashed ${dark ? 'var(--rule-dark)' : 'var(--rule-light)'}`,
      margin: 16
    }
  }, imageLabel));
}
Object.assign(__ds_scope, { L001EditorialCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L001EditorialCover.jsx", error: String((e && e.message) || e) }); }

// components/layouts/L002EditorialStory.jsx
try { (() => {
function L002EditorialStory({
  kicker = 'CONTEXT',
  headline = 'Why this matters now',
  body = 'A short paragraph that frames the story and invites the reader further into the narrative.',
  accent = 'yellow-green',
  atmosphere = 'light',
  imageLabel = 'Relevant photography'
}) {
  const dark = atmosphere === 'dark';
  const accentColor = accent === 'cayenne' ? 'var(--cayenne-500)' : 'var(--yellow-green-500)';
  const wrap = {
    width: 1080,
    height: 1350,
    background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
  };
  return React.createElement('div', {
    style: wrap
  }, React.createElement('div', {
    style: {
      width: 40,
      height: 4,
      background: accentColor,
      marginBottom: 24
    }
  }), React.createElement('div', {
    style: {
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      opacity: 0.65,
      marginBottom: 12
    }
  }, kicker), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-snug)',
      margin: '0 0 24px',
      maxWidth: 760
    }
  }, headline), React.createElement('div', {
    style: {
      flex: 1,
      position: 'relative',
      minHeight: 500
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: dark ? 'linear-gradient(160deg,#1a2b27,#03302f)' : 'linear-gradient(160deg,#d9decb,#c7cdb5)',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-muted-dark)' : 'var(--text-muted-light)',
      padding: 16,
      border: `1px dashed ${dark ? 'var(--rule-dark)' : 'var(--rule-light)'}`,
      margin: 16
    }
  }, imageLabel))), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-normal)',
      maxWidth: 640,
      marginTop: 24,
      opacity: 0.85
    }
  }, body));
}
Object.assign(__ds_scope, { L002EditorialStory });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L002EditorialStory.jsx", error: String((e && e.message) || e) }); }

// components/layouts/L003HeroStatistic.jsx
try { (() => {
function L003HeroStatistic({
  kicker = 'RESEARCH',
  stat = '73%',
  suffix = '',
  headline = 'of teams now ship weekly',
  support = 'Based on a survey of 1,200 product teams across 40 countries.',
  quote = '',
  quoteSource = '',
  atmosphere = 'dark'
}) {
  const dark = atmosphere === 'dark';
  const wrap = {
    width: 1080,
    height: 1350,
    background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
  };
  return React.createElement('div', {
    style: wrap
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      opacity: 0.65
    }
  }, kicker), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-stat-giant)',
      lineHeight: 0.9,
      letterSpacing: 'var(--ls-tight)'
    }
  }, stat, React.createElement('span', {
    style: {
      fontSize: '0.35em',
      verticalAlign: 'super'
    }
  }, suffix))), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-snug)',
      margin: '0 0 16px',
      maxWidth: 760
    }
  }, headline), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-normal)',
      maxWidth: 640,
      opacity: 0.75,
      marginBottom: quote ? 32 : 0
    }
  }, support), quote && React.createElement('div', {
    style: {
      borderLeft: `3px solid var(--accent-primary)`,
      paddingLeft: 24,
      margin: '16px 0'
    }
  }, React.createElement('p', {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-quote)',
      lineHeight: 1.3,
      margin: 0
    }
  }, '“', quote, '”'), quoteSource && React.createElement('p', {
    style: {
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      opacity: 0.6,
      marginTop: 12
    }
  }, quoteSource)));
}
Object.assign(__ds_scope, { L003HeroStatistic });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L003HeroStatistic.jsx", error: String((e && e.message) || e) }); }

// components/layouts/L004MagazineSplit.jsx
try { (() => {
function L004MagazineSplit({
  headline = 'The comeback of physical retail',
  body = 'Digital-native brands are opening stores again — not to sell, but to be remembered.',
  imageRatio = 0.6,
  imagePosition = 'left',
  atmosphere = 'light',
  imageLabel = 'Large photography'
}) {
  const dark = atmosphere === 'dark';
  const wrap = {
    width: 1080,
    height: 1350,
    background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: imagePosition === 'left' ? 'column' : 'column-reverse',
    boxSizing: 'border-box'
  };
  const imgH = Math.round(1350 * imageRatio);
  return React.createElement('div', {
    style: wrap
  }, React.createElement('div', {
    style: {
      height: imgH,
      position: 'relative',
      background: dark ? 'linear-gradient(160deg,#1a2b27,#03302f)' : 'linear-gradient(160deg,#d9decb,#c7cdb5)',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-muted-dark)' : 'var(--text-muted-light)',
      padding: 16,
      border: `1px dashed ${dark ? 'var(--rule-dark)' : 'var(--rule-light)'}`,
      margin: 16
    }
  }, imageLabel)), React.createElement('div', {
    style: {
      height: 1350 - imgH,
      padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-snug)',
      margin: '0 0 16px'
    }
  }, headline), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-normal)',
      opacity: 0.75,
      margin: 0
    }
  }, body)));
}
Object.assign(__ds_scope, { L004MagazineSplit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L004MagazineSplit.jsx", error: String((e && e.message) || e) }); }

// components/layouts/L005InsightGrid.jsx
try { (() => {
function L005InsightGrid({
  headline = 'What we learned',
  items = [{
    label: '01',
    text: 'Attention is the scarcest resource, not money.'
  }, {
    label: '02',
    text: 'Short-form is a habit, not a strategy.'
  }, {
    label: '03',
    text: 'Communities outperform campaigns.'
  }],
  atmosphere = 'light'
}) {
  const dark = atmosphere === 'dark';
  const wrap = {
    width: 1080,
    height: 1350,
    background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
  };
  return React.createElement('div', {
    style: wrap
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      margin: '0 0 48px'
    }
  }, headline), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-evenly'
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'flex-start',
      borderTop: `1px solid ${dark ? 'var(--rule-dark)' : 'var(--rule-light)'}`,
      paddingTop: 20
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--accent-primary)',
      minWidth: 70
    }
  }, it.label), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-normal)',
      margin: 0,
      maxWidth: 780
    }
  }, it.text)))));
}
Object.assign(__ds_scope, { L005InsightGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L005InsightGrid.jsx", error: String((e && e.message) || e) }); }

// components/layouts/L006ImageFirst.jsx
try { (() => {
function L006ImageFirst({
  headline = 'Built for the next generation',
  atmosphere = 'dark',
  imageLabel = 'Dominant photography'
}) {
  const dark = atmosphere === 'dark';
  const wrap = {
    width: 1080,
    height: 1350,
    position: 'relative',
    fontFamily: 'var(--font-body)',
    boxSizing: 'border-box',
    background: dark ? 'linear-gradient(160deg,#1a2b27,#03302f)' : 'linear-gradient(160deg,#d9decb,#c7cdb5)'
  };
  return React.createElement('div', {
    style: wrap
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      top: 32,
      left: 32,
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--cream-100)',
      opacity: 0.7,
      border: '1px dashed rgba(244,245,236,0.4)',
      padding: 12
    }
  }, imageLabel), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(3,48,47,0.85), rgba(3,48,47,0) 55%)'
    }
  }), React.createElement('h1', {
    style: {
      position: 'absolute',
      left: 'var(--slide-margin)',
      right: 'var(--slide-margin)',
      bottom: 'var(--slide-margin-bottom)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-tight)',
      color: 'var(--cream-100)',
      margin: 0
    }
  }, headline));
}
Object.assign(__ds_scope, { L006ImageFirst });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L006ImageFirst.jsx", error: String((e && e.message) || e) }); }

// components/layouts/L007EditorialComparison.jsx
try { (() => {
function L007EditorialComparison({
  headline = 'Then vs. now',
  left = {
    label: 'BEFORE',
    text: 'Campaigns planned a quarter ahead, one channel at a time.'
  },
  right = {
    label: 'NOW',
    text: 'Always-on content, shaped by real-time signals.'
  },
  atmosphere = 'light'
}) {
  const dark = atmosphere === 'dark';
  const wrap = {
    width: 1080,
    height: 1350,
    background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
  };
  const ruleColor = dark ? 'var(--rule-dark)' : 'var(--rule-light)';
  const col = (side, accent) => React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      paddingTop: 32
    }
  }, React.createElement('span', {
    style: {
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: accent
    }
  }, side.label), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-snug)',
      margin: 0
    }
  }, side.text));
  return React.createElement('div', {
    style: wrap
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      margin: '0 0 24px'
    }
  }, headline), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      borderTop: `1px solid ${ruleColor}`
    }
  }, col(left, 'var(--yellow-green-500)'), React.createElement('div', {
    style: {
      width: 1,
      background: ruleColor,
      margin: '32px 48px'
    }
  }), col(right, 'var(--cayenne-500)')));
}
Object.assign(__ds_scope, { L007EditorialComparison });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L007EditorialComparison.jsx", error: String((e && e.message) || e) }); }

// components/layouts/L008QuotePage.jsx
try { (() => {
function L008QuotePage({
  quote = 'Brands don’t need more channels. They need a point of view.',
  source = 'Seed Grow, Editorial Team',
  atmosphere = 'dark'
}) {
  const dark = atmosphere === 'dark';
  const wrap = {
    width: 1080,
    height: 1350,
    background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)',
    textAlign: 'center'
  };
  return React.createElement('div', {
    style: wrap
  }, React.createElement('p', {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 'var(--fs-quote)',
      lineHeight: 'var(--lh-snug)',
      maxWidth: 820,
      margin: 0
    }
  }, '“', quote, '”'), React.createElement('div', {
    style: {
      width: 40,
      height: 3,
      background: 'var(--accent-primary)',
      margin: '40px 0 24px'
    }
  }), source && React.createElement('p', {
    style: {
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      opacity: 0.6,
      margin: 0
    }
  }, source));
}
Object.assign(__ds_scope, { L008QuotePage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L008QuotePage.jsx", error: String((e && e.message) || e) }); }

// components/layouts/L009Timeline.jsx
try { (() => {
function L009Timeline({
  headline = 'How we got here',
  steps = [{
    label: '2019',
    text: 'Idea sketched on a napkin.'
  }, {
    label: '2021',
    text: 'First 1,000 customers.'
  }, {
    label: '2023',
    text: 'Series A, international expansion.'
  }, {
    label: '2026',
    text: 'Category leader.'
  }],
  atmosphere = 'light'
}) {
  const dark = atmosphere === 'dark';
  const wrap = {
    width: 1080,
    height: 1350,
    background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
  };
  const lineColor = dark ? 'var(--rule-dark)' : 'var(--rule-light)';
  return React.createElement('div', {
    style: wrap
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      margin: '0 0 56px'
    }
  }, headline), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      paddingLeft: 32
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      left: 6,
      top: 8,
      bottom: 8,
      width: 1,
      background: lineColor
    }
  }), steps.map((s, i) => React.createElement('div', {
    key: i,
    style: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      left: -32,
      top: '50%',
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--accent-primary)',
      transform: 'translateY(-50%)'
    }
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      opacity: 0.6
    }
  }, s.label), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      margin: '4px 0 0',
      maxWidth: 720
    }
  }, s.text)))));
}
Object.assign(__ds_scope, { L009Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L009Timeline.jsx", error: String((e && e.message) || e) }); }

// components/layouts/L010ImageData.jsx
try { (() => {
function L010ImageData({
  stat = '2.4x',
  caption = 'more engagement on carousel posts vs. single images',
  atmosphere = 'dark',
  imageLabel = 'Photography'
}) {
  const dark = atmosphere === 'dark';
  const wrap = {
    width: 1080,
    height: 1350,
    position: 'relative',
    fontFamily: 'var(--font-body)',
    boxSizing: 'border-box',
    background: dark ? 'linear-gradient(160deg,#1a2b27,#03302f)' : 'linear-gradient(160deg,#d9decb,#c7cdb5)'
  };
  return React.createElement('div', {
    style: wrap
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 32,
      left: 32,
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--cream-100)',
      opacity: 0.7,
      border: '1px dashed rgba(244,245,236,0.4)',
      padding: 12
    }
  }, imageLabel), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(3,48,47,0.9), rgba(3,48,47,0.1) 60%)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      left: 'var(--slide-margin)',
      right: 'var(--slide-margin)',
      bottom: 'var(--slide-margin-bottom)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-stat-secondary)',
      color: 'var(--cream-100)',
      lineHeight: 0.95
    }
  }, stat), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--cream-200)',
      maxWidth: 640,
      marginTop: 16
    }
  }, caption)));
}
Object.assign(__ds_scope, { L010ImageData });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L010ImageData.jsx", error: String((e && e.message) || e) }); }

// components/layouts/L011EditorialList.jsx
try { (() => {
function L011EditorialList({
  headline = 'Five things to try this quarter',
  items = ['Publish behind-the-scenes, not just polished output.', 'Turn one insight into five formats.', 'Reply publicly before you post again.', 'Let a stat replace a paragraph.', 'End every series with a point of view.'],
  atmosphere = 'light'
}) {
  const dark = atmosphere === 'dark';
  const wrap = {
    width: 1080,
    height: 1350,
    background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
  };
  return React.createElement('div', {
    style: wrap
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      margin: '0 0 56px',
      maxWidth: 760
    }
  }, headline), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    }
  }, items.slice(0, 5).map((t, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'baseline'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      color: 'var(--accent-primary)',
      minWidth: 40
    }
  }, String(i + 1).padStart(2, '0')), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      margin: 0,
      maxWidth: 760
    }
  }, t)))));
}
Object.assign(__ds_scope, { L011EditorialList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L011EditorialList.jsx", error: String((e && e.message) || e) }); }

// components/layouts/L012EditorialManifesto.jsx
try { (() => {
function L012EditorialManifesto({
  headline = 'Stop making content. ',
  highlight = 'Start making meaning.',
  atmosphere = 'dark',
  logo = 'auto'
}) {
  const dark = atmosphere === 'dark';
  const logoSrc = logo === 'auto' ? dark ? '../../assets/logo-light.png' : '../../assets/logo-dark.png' : logo;
  const wrap = {
    width: 1080,
    height: 1350,
    background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
  };
  return React.createElement('div', {
    style: wrap
  }, React.createElement('div', {}), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)',
      margin: 0,
      maxWidth: 880
    }
  }, headline, React.createElement('em', {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-primary)'
    }
  }, highlight)), React.createElement('img', {
    src: logoSrc,
    alt: 'Seed Grow',
    style: {
      height: 40,
      width: 'auto',
      objectFit: 'contain',
      alignSelf: 'flex-start'
    }
  }));
}
Object.assign(__ds_scope, { L012EditorialManifesto });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/L012EditorialManifesto.jsx", error: String((e && e.message) || e) }); }

// components/layouts/PhotoPlaceholder.jsx
try { (() => {
function PhotoPlaceholder({
  label = 'Photography',
  dark = false,
  style = {}
}) {
  const base = {
    position: 'relative',
    overflow: 'hidden',
    background: dark ? 'linear-gradient(160deg,#1a2b27,#03302f)' : 'linear-gradient(160deg,#d9decb,#c7cdb5)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    ...style
  };
  const labelStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    color: dark ? 'var(--text-muted-dark)' : 'var(--text-muted-light)',
    padding: 16,
    border: `1px dashed ${dark ? 'var(--rule-dark)' : 'var(--rule-light)'}`,
    margin: 16
  };
  return React.createElement('div', {
    style: base
  }, React.createElement('span', {
    style: labelStyle
  }, label));
}
Object.assign(__ds_scope, { PhotoPlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layouts/PhotoPlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/post/PostCallout.jsx
try { (() => {
function PostCallout({
  kind = 'stat',
  value = '3.2x',
  text = 'more saves on carousel posts vs. single images',
  source = '',
  dark = false
}) {
  const textColor = dark ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const ruleColor = dark ? 'var(--rule-dark)' : 'var(--rule-light)';
  return React.createElement('div', {
    style: {
      borderTop: `2px solid var(--accent-primary)`,
      paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      color: textColor,
      maxWidth: 720
    }
  }, kind === 'stat' && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-stat-secondary)',
      lineHeight: 0.95
    }
  }, value), kind === 'quote' && React.createElement('p', {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-quote)',
      lineHeight: 1.3,
      margin: 0
    }
  }, '“', value, '”'), kind === 'cta' && React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--fs-subtitle)',
      margin: 0,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)'
    }
  }, value), text && React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      opacity: 0.75,
      margin: 0,
      maxWidth: 600
    }
  }, text), source && React.createElement('p', {
    style: {
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      opacity: 0.55,
      margin: 0
    }
  }, source));
}
Object.assign(__ds_scope, { PostCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post/PostCallout.jsx", error: String((e && e.message) || e) }); }

// components/post/PostFooter.jsx
try { (() => {
function PostFooter({
  handle = '@seedgrow',
  website = 'seedgrow.co',
  dark = false,
  logo = 'auto'
}) {
  const logoSrc = logo === 'auto' ? dark ? '../../assets/logo-light.png' : '../../assets/logo-dark.png' : logo;
  const textColor = dark ? 'var(--text-muted-dark)' : 'var(--text-muted-light)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, React.createElement('img', {
    src: logoSrc,
    alt: 'Seed Grow',
    style: {
      height: 24,
      width: 'auto',
      objectFit: 'contain'
    }
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: textColor,
      display: 'flex',
      gap: 16
    }
  }, React.createElement('span', {}, handle), React.createElement('span', {}, website)));
}
Object.assign(__ds_scope, { PostFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post/PostFooter.jsx", error: String((e && e.message) || e) }); }

// components/post-layouts/P05KeywordFocus.jsx
try { (() => {
function P05KeywordFocus({
  keyword = 'Focus.',
  dark = true
}) {
  return React.createElement('div', {
    style: {
      width: 1080,
      height: 1350,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-stat-giant)',
      lineHeight: 0.9,
      letterSpacing: 'var(--ls-tight)',
      margin: 0,
      textAlign: 'center'
    }
  }, keyword), React.createElement('div', {
    style: {
      position: 'absolute',
      bottom: 'var(--slide-margin-bottom)',
      left: 'var(--slide-margin)',
      right: 'var(--slide-margin)'
    }
  }, React.createElement(__ds_scope.PostFooter, {
    dark
  })));
}
Object.assign(__ds_scope, { P05KeywordFocus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post-layouts/P05KeywordFocus.jsx", error: String((e && e.message) || e) }); }

// components/post-layouts/P07MinimalPoster.jsx
try { (() => {
function P07MinimalPoster({
  label = 'Insight',
  headline = 'Less, but better.',
  dark = false
}) {
  return React.createElement('div', {
    style: {
      width: 1080,
      height: 1350,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      opacity: 0.5
    }
  }, label), React.createElement('div', {}), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-subtitle)',
      margin: 0,
      maxWidth: 500
    }
  }, headline), React.createElement(__ds_scope.PostFooter, {
    dark
  }));
}
Object.assign(__ds_scope, { P07MinimalPoster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post-layouts/P07MinimalPoster.jsx", error: String((e && e.message) || e) }); }

// components/post-layouts/P08MagazineCover.jsx
try { (() => {
function P08MagazineCover({
  masthead = 'SEED GROW',
  issueLabel = 'ISSUE 04 — GROWTH',
  headline = 'The new rules of attention',
  imageLabel = 'Full-bleed cover photography'
}) {
  return React.createElement('div', {
    style: {
      width: 1080,
      height: 1350,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      position: 'relative',
      background: 'linear-gradient(160deg,#1a2b27,#03302f)',
      color: 'var(--text-on-dark)',
      padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 32,
      left: 32,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      opacity: 0.6,
      border: '1px dashed rgba(244,245,236,0.4)',
      padding: 10
    }
  }, imageLabel), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(3,48,47,0.85), rgba(3,48,47,0) 50%)'
    }
  }), React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 32,
      letterSpacing: '0.02em'
    }
  }, masthead), React.createElement('span', {
    style: {
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      opacity: 0.7
    }
  }, issueLabel)), React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-tight)',
      margin: 0,
      maxWidth: 900
    }
  }, headline), React.createElement(__ds_scope.PostFooter, {
    dark: true
  })));
}
Object.assign(__ds_scope, { P08MagazineCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post-layouts/P08MagazineCover.jsx", error: String((e && e.message) || e) }); }

// components/post/PostLabel.jsx
try { (() => {
function PostLabel({
  text = 'Branding',
  accent = 'yellow-green',
  dark = false
}) {
  const accentColor = accent === 'cayenne' ? 'var(--cayenne-500)' : 'var(--yellow-green-500)';
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      border: `1px solid ${dark ? 'var(--rule-dark)' : 'var(--rule-light)'}`,
      padding: '8px 16px'
    }
  }, React.createElement('span', {
    style: {
      width: 6,
      height: 6,
      background: accentColor,
      borderRadius: '50%'
    }
  }), text);
}
Object.assign(__ds_scope, { PostLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post/PostLabel.jsx", error: String((e && e.message) || e) }); }

// components/post-layouts/P01HeroHeadline.jsx
try { (() => {
function P01HeroHeadline({
  label = 'Framework',
  headline = 'Distribution is the product now',
  dark = true,
  imageLabel = 'Small supporting image'
}) {
  return React.createElement('div', {
    style: {
      width: 1080,
      height: 1350,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
    }
  }, React.createElement(__ds_scope.PostLabel, {
    text: label,
    dark
  }), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'calc(var(--fs-headline) * 1.05)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)',
      margin: '32px 0',
      maxWidth: 920
    }
  }, headline), React.createElement('div', {
    style: {
      width: 280,
      height: 200,
      alignSelf: 'flex-end',
      background: dark ? 'linear-gradient(160deg,#1a2b27,#03302f)' : 'linear-gradient(160deg,#d9decb,#c7cdb5)',
      display: 'flex',
      alignItems: 'flex-end',
      border: `1px dashed ${dark ? 'var(--rule-dark)' : 'var(--rule-light)'}`
    }
  }, React.createElement('span', {
    style: {
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      opacity: 0.7,
      padding: 10
    }
  }, imageLabel)), React.createElement(__ds_scope.PostFooter, {
    dark
  }));
}
Object.assign(__ds_scope, { P01HeroHeadline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post-layouts/P01HeroHeadline.jsx", error: String((e && e.message) || e) }); }

// components/post-layouts/P02FullBackground.jsx
try { (() => {
function P02FullBackground({
  label = 'Case',
  headline = 'One campaign. Four markets. One point of view.',
  imageLabel = 'Full-bleed photography'
}) {
  return React.createElement('div', {
    style: {
      width: 1080,
      height: 1350,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      position: 'relative',
      background: 'linear-gradient(160deg,#1a2b27,#03302f)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 32,
      left: 32,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--cream-100)',
      opacity: 0.6,
      border: '1px dashed rgba(244,245,236,0.4)',
      padding: 10
    }
  }, imageLabel), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(3,48,47,0.9), rgba(3,48,47,0.05) 60%)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      left: 'var(--slide-margin)',
      right: 'var(--slide-margin)',
      top: 'var(--slide-margin)'
    }
  }, React.createElement(__ds_scope.PostLabel, {
    text: label,
    dark: true
  })), React.createElement('div', {
    style: {
      position: 'absolute',
      left: 'var(--slide-margin)',
      right: 'var(--slide-margin)',
      bottom: 'var(--slide-margin-bottom)',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--cream-100)',
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-tight)',
      margin: 0
    }
  }, headline), React.createElement(__ds_scope.PostFooter, {
    dark: true
  })));
}
Object.assign(__ds_scope, { P02FullBackground });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post-layouts/P02FullBackground.jsx", error: String((e && e.message) || e) }); }

// components/post-layouts/P03TypographyOnly.jsx
try { (() => {
function P03TypographyOnly({
  label = 'Opinion',
  headline = 'Nobody wants your funnel.',
  subheadline = 'They want a reason to care.',
  body = 'Marketing spent a decade optimizing steps. The next decade rewards brands with something to say.',
  dark = false
}) {
  return React.createElement('div', {
    style: {
      width: 1080,
      height: 1350,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)',
      gap: 32
    }
  }, React.createElement(__ds_scope.PostLabel, {
    text: label,
    dark
  }), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-tight)',
      margin: 0,
      maxWidth: 820
    }
  }, headline), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-subtitle)',
      margin: 0,
      maxWidth: 640,
      opacity: 0.85
    }
  }, subheadline), React.createElement('p', {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-normal)',
      margin: 0,
      maxWidth: 600,
      opacity: 0.7
    }
  }, body), React.createElement('div', {
    style: {
      position: 'absolute'
    }
  }), React.createElement('div', {
    style: {
      marginTop: 'auto'
    }
  }, React.createElement(__ds_scope.PostFooter, {
    dark
  })));
}
Object.assign(__ds_scope, { P03TypographyOnly });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post-layouts/P03TypographyOnly.jsx", error: String((e && e.message) || e) }); }

// components/post-layouts/P04Editorial.jsx
try { (() => {
function P04Editorial({
  label = 'Strategy',
  lines = ['Strategy is not', 'a document.', "It's a decision", 'you keep making.'],
  dark = false
}) {
  return React.createElement('div', {
    style: {
      width: 1080,
      height: 1350,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
    }
  }, React.createElement(__ds_scope.PostLabel, {
    text: label,
    dark
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      margin: '24px 0'
    }
  }, lines.map((l, i) => React.createElement('h1', {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-tight)',
      margin: 0,
      alignSelf: i % 2 ? 'flex-end' : 'flex-start',
      textAlign: i % 2 ? 'right' : 'left'
    }
  }, l))), React.createElement(__ds_scope.PostFooter, {
    dark
  }));
}
Object.assign(__ds_scope, { P04Editorial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post-layouts/P04Editorial.jsx", error: String((e && e.message) || e) }); }

// components/post-layouts/P06ImageCutOut.jsx
try { (() => {
function P06ImageCutOut({
  label = 'Product',
  headline = 'Built to be seen',
  imageLabel = 'Cut-out image, overlapping the headline',
  dark = false
}) {
  return React.createElement('div', {
    style: {
      width: 1080,
      height: 1350,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      position: 'relative',
      background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      top: 'var(--slide-margin)',
      left: 'var(--slide-margin)'
    }
  }, React.createElement(__ds_scope.PostLabel, {
    text: label,
    dark
  })), React.createElement('div', {
    style: {
      position: 'absolute',
      top: 180,
      right: 60,
      width: 420,
      height: 640,
      background: dark ? 'linear-gradient(160deg,#1a2b27,#03302f)' : 'linear-gradient(160deg,#d9decb,#c7cdb5)',
      border: `1px dashed ${dark ? 'var(--rule-dark)' : 'var(--rule-light)'}`,
      display: 'flex',
      alignItems: 'flex-end',
      zIndex: 2
    }
  }, React.createElement('span', {
    style: {
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      opacity: 0.7,
      padding: 10
    }
  }, imageLabel)), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-tight)',
      margin: 0,
      maxWidth: 760,
      position: 'relative',
      zIndex: 1
    }
  }, headline));
}
Object.assign(__ds_scope, { P06ImageCutOut });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post-layouts/P06ImageCutOut.jsx", error: String((e && e.message) || e) }); }

// components/post-layouts/P09CarouselLayout.jsx
try { (() => {
function P09CarouselLayout({
  label = 'Framework',
  headline = 'Step 02 — Define the narrative',
  slideIndex = 1,
  slideCount = 5,
  dark = false
}) {
  return React.createElement('div', {
    style: {
      width: 1080,
      height: 1350,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement(__ds_scope.PostLabel, {
    text: label,
    dark
  }), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8
    }
  }, Array.from({
    length: slideCount
  }).map((_, i) => React.createElement('span', {
    key: i,
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: i === slideIndex ? 'var(--accent-primary)' : dark ? 'var(--rule-dark)' : 'var(--rule-light)'
    }
  })))), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-headline)',
      lineHeight: 'var(--lh-tight)',
      margin: 0,
      maxWidth: 820
    }
  }, headline), React.createElement(__ds_scope.PostFooter, {
    dark
  }));
}
Object.assign(__ds_scope, { P09CarouselLayout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post-layouts/P09CarouselLayout.jsx", error: String((e && e.message) || e) }); }

// components/post-layouts/P10InsightCard.jsx
try { (() => {
function P10InsightCard({
  label = 'Insight',
  kind = 'stat',
  value = '3.2x',
  text = 'more saves on carousel posts vs. single images',
  dark = true
}) {
  return React.createElement('div', {
    style: {
      width: 1080,
      height: 1350,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      background: dark ? 'var(--bg-editorial-dark)' : 'var(--bg-editorial-light)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'var(--slide-margin) var(--slide-margin) var(--slide-margin-bottom)'
    }
  }, React.createElement(__ds_scope.PostLabel, {
    text: label,
    dark
  }), React.createElement(__ds_scope.PostCallout, {
    kind,
    value,
    text,
    dark
  }), React.createElement(__ds_scope.PostFooter, {
    dark
  }));
}
Object.assign(__ds_scope, { P10InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post-layouts/P10InsightCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.L001EditorialCover = __ds_scope.L001EditorialCover;

__ds_ns.L002EditorialStory = __ds_scope.L002EditorialStory;

__ds_ns.L003HeroStatistic = __ds_scope.L003HeroStatistic;

__ds_ns.L004MagazineSplit = __ds_scope.L004MagazineSplit;

__ds_ns.L005InsightGrid = __ds_scope.L005InsightGrid;

__ds_ns.L006ImageFirst = __ds_scope.L006ImageFirst;

__ds_ns.L007EditorialComparison = __ds_scope.L007EditorialComparison;

__ds_ns.L008QuotePage = __ds_scope.L008QuotePage;

__ds_ns.L009Timeline = __ds_scope.L009Timeline;

__ds_ns.L010ImageData = __ds_scope.L010ImageData;

__ds_ns.L011EditorialList = __ds_scope.L011EditorialList;

__ds_ns.L012EditorialManifesto = __ds_scope.L012EditorialManifesto;

__ds_ns.PhotoPlaceholder = __ds_scope.PhotoPlaceholder;

__ds_ns.P01HeroHeadline = __ds_scope.P01HeroHeadline;

__ds_ns.P02FullBackground = __ds_scope.P02FullBackground;

__ds_ns.P03TypographyOnly = __ds_scope.P03TypographyOnly;

__ds_ns.P04Editorial = __ds_scope.P04Editorial;

__ds_ns.P05KeywordFocus = __ds_scope.P05KeywordFocus;

__ds_ns.P06ImageCutOut = __ds_scope.P06ImageCutOut;

__ds_ns.P07MinimalPoster = __ds_scope.P07MinimalPoster;

__ds_ns.P08MagazineCover = __ds_scope.P08MagazineCover;

__ds_ns.P09CarouselLayout = __ds_scope.P09CarouselLayout;

__ds_ns.P10InsightCard = __ds_scope.P10InsightCard;

__ds_ns.PostCallout = __ds_scope.PostCallout;

__ds_ns.PostFooter = __ds_scope.PostFooter;

__ds_ns.PostLabel = __ds_scope.PostLabel;

})();
