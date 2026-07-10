const yearlyLinks = [
  [
    '2024',
    'https://docs.google.com/document/d/1UnsnUfEfHFEf6GVApo6ydvrMgK2deo5ZnI-iiNG8Yqs/edit?usp=sharing',
  ],
  [
    '2023',
    'https://docs.google.com/document/d/1HjTJSUMO9vCBdpO2QTSSATFvTlotyRVY3g0K62p1-4M/edit?usp=sharing',
  ],
  [
    '2020',
    'https://docs.google.com/document/d/10424TfeKT-Ij8DUgqdazQOr3FS-hSdwKhPPFfOljVFA/edit?usp=sharing',
  ],
  [
    '2019',
    'https://drive.google.com/file/d/1rHc92RARgVHFdqq82smiE-DrqSJE_DLY/view?usp=sharing',
  ],
  [
    '2018',
    'https://docs.google.com/document/d/1c7OA8L43kQp95lHCAzRERTxlOcWJKsICa6ldtZlAZmY/',
  ],
  ['2017', 'https://drive.google.com/open?id=0Bx4qozzLDP_7Y1o0N0I1bTNmTm8'],
  ['2016', 'https://drive.google.com/open?id=0Bx4qozzLDP_7cFRxQ1JDcFVIQzQ'],
  ['2015', 'https://drive.google.com/open?id=0Bx4qozzLDP_7NWx4bkxFVUVSQ0E'],
]

export default function Finalists() {
  return (
    <section id="currentwinners">
      <div className="title">FINALISTS</div>
      <br />
      <br />
      <h3>
        View the 2024-25 finalists this year{' '}
        <a
          href="https://docs.google.com/document/d/10rD7RwLhPH-HTpV26LjkLb5tVEJGVFr7HzcG90tteP4/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </h3>
      <br />
      <h3>
        See a full list of THINK winners from{' '}
        {yearlyLinks.map(([year, url], i) => (
          <span key={year}>
            <a href={url} target="_blank" rel="noreferrer">
              {year}
            </a>
            {i < yearlyLinks.length - 2
              ? ', '
              : i === yearlyLinks.length - 2
                ? ', and '
                : '.'}
          </span>
        ))}
      </h3>
    </section>
  )
}
