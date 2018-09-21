export function wikiFetch(keyword, type) {
  switch(type) {
    case 'search': {
      let url = `https://zh.m.wikipedia.org/w/api.php?origin=*&gpssearch=${keyword}&srsearch=${keyword}&action=query&continue=&coprop=type|dim&format=json&generator=prefixsearch&gpslimit=24&gpsnamespace=0&list=search&pilimit=24&piprop=thumbnail&pithumbsize=120&prop=pageterms|pageimages|revisions|coordinates&redirects=1&rvprop=ids&srinfo=suggestion&srlimit=1&srnamespace=0&sroffset=0&srprop=&srwhat=text&wbptterms=description`
      return fetch(url).then(res => res.json())
    }

    case 'content': {
      let url = `https://zh.wikipedia.org/w/api.php?origin=*&page=${keyword}&action=mobileview&format=json&noheadings=true&prop=sections|text|lastmodified|lastmodifiedby|languagecount|id|protection|editable|displaytitle|thumb|description|image|revision|namespace&sectionprop=toclevel|line|anchor|level|number|fromtitle|index&sections=all&thumbwidth=640`
      return fetch(url).then(res => res.json())
    }

    default: {
      throw new Error('wrong fetch type')
    }
  }
}