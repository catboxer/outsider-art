const setupTags = genres =>{
    const allTags ={}

    genres.forEach(genre => {
        genre.data.style.forEach(tag=>{
            if(allTags[tag]){
                allTags[tag]=allTags[tag]+1
            } else {
                allTags[tag]=1
            }
        })
   })
  const alphaTags = Object.entries(allTags).sort((a, b) => {
      const [firstStyle] = a
      const [secondStyle] = b
      return firstStyle.localeCompare(secondStyle)
  })
    return alphaTags
}

export default setupTags