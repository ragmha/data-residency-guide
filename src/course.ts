export const parts = [
  { title: 'Why sovereignty', pages: ['why-sovereignty', 'residency-vs-sovereignty'] },
  { title: 'What GHE.com gives you', pages: ['ghe-com', 'data-map', 'copilot'] },
  { title: 'Contracts and law', pages: ['dpa', 'regulations'] },
  { title: 'Adopt with confidence', pages: ['readiness', 'migrate', 'faq'] },
];

export const chapters = parts.flatMap((part, partIndex) => part.pages.map((id, index) => ({
  id, kind: 'lesson', part: partIndex + 1, partTitle: part.title,
  number: `${partIndex + 1}.${index + 1}`,
  path: `part-${partIndex + 1}/${index + 1}-${id}`,
})));

export function coursePath(id: string) {
  if (id === 'start') return '';
  if (id === 'sources') return 'sources';
  const chapter = chapters.find(entry => entry.id === id);
  if (!chapter) throw new Error(`Unknown course page: ${id}`);
  return chapter.path;
}
