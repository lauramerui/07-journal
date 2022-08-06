//traer informacion del state y procesarla

// export const myGetters = ( state ) => {
//return state
// }

//función que devuelve otra función
export const getEntriesByTerm = ( state ) => ( term ) => {
    
    if ( term.length === 0 ) return state.entries

    return state.entries.filter( entry => entry.text.toLowerCase().includes(term.toLowerCase()))
}

export const getEntryById = ( state ) => ( id = '' ) => {
     
    const entry = state.entries.find( entry => entry.id === id)

    if(!entry) return //regresa undefined
    // console.log(entry)
    // console.log({...entry})
    return {...entry} 

    // return state.entries.filter( entry => entry.id === id)[0]
}