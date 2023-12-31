import noImage from "../assets/no-image-placeholder.webp"

const imgCropper = (url: string) => {
    if (!url) return noImage;
    let modUrl = url.split("/media/")
    modUrl.splice(1, 0, "media/crop/600/400")
    return modUrl.join("/")
}

export default imgCropper;