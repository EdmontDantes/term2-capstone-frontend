let searchIt = (term) => (item) =>
  item.subject.toLowerCase().includes(term.toLowerCase())


export default searchIt;