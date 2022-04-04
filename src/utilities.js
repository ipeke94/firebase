export const collectionDocsIDS = (document) => {
  return { id: document.id, ...document.data() };
};
