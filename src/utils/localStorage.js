export const loadInstallApps = () => {
    try{
        const data = localStorage.getItem('installed')
        return data? JSON.parse(data): []
    } catch (err) {
        console.log(err)
        return []
    }
}


export const updatedInstallAppList = product => {
    const installed = loadInstallApps()
    try{
        const isDuplicate = installed.some(p => p.id  === product.id)
        if(isDuplicate) return alert('Already added in wishlist')
            const updatedWishlist = [...installed, product]
        localStorage.setItem('installed', JSON.stringify(updatedWishlist))
    } catch (err){
        console.log(err)
    }

}


export const removeFromWishlist = id => {
    const wishlist = loadInstallApps()

    try{
        const updatedWishlist = wishlist.filter(p=>p.id !== id)
        localStorage.setItem('installed', JSON.stringify(updatedWishlist))
    } catch (err) {
        console.log(err)
    }
}

