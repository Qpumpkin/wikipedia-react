import axios from 'axios'

async function get(url) {
  try {
    let res = await axios.get(url)
    return new Promise((resolve, reject) => {
      if (res.status === 200) resolve(res.data)
      else reject(res)
    })
  } catch (err) {
    return Promise.reject('服务器错误：' + JSON.stringify(err))
  }
} 

export function wikiFetch(keyword, type, params = {}) {
  switch(type) {
    case 'search': {
      const url = `https://zh.m.wikipedia.org/w/api.php?origin=*&gpssearch=${keyword}&srsearch=${keyword}&action=query&continue=&coprop=type|dim&format=json&generator=prefixsearch&gpslimit=24&gpsnamespace=0&list=search&pilimit=24&piprop=thumbnail&pithumbsize=120&prop=pageterms|pageimages|revisions|coordinates&redirects=1&rvprop=ids&srinfo=suggestion&srlimit=1&srnamespace=0&sroffset=0&srprop=&srwhat=text&wbptterms=description`
      return fetch(url).then(res => res.json())
    }

    case 'content': {
      const url = `https://zh.wikipedia.org/w/api.php?origin=*&page=${keyword}&action=mobileview&format=json&noheadings=true&prop=sections|text|lastmodified|lastmodifiedby|languagecount|id|protection|editable|displaytitle|thumb|description|image|revision|namespace&sectionprop=toclevel|line|anchor|level|number|fromtitle|index&sections=all&thumbwidth=640`
      return fetch(url, params).then(res => res.json())
    }

    case 'random': {
      const url = `https://zh.wikipedia.org/w/api.php?origin=*&action=query&exchars=525&exintro=1&exlimit=8&explaintext=&format=json&generator=random&grnfilterredir=nonredirects&grnlimit=8&grnnamespace=0&pilimit=8&piprop=thumbnail&pithumbsize=640&prop=extracts%7Cpageterms%7Cpageimages%7Cpageprops%7Crevisions&rvprop=ids&wbptterms=description` 
      return get(url)
    }

    default: {
      throw new Error('wrong fetch type')
    }
  }
}