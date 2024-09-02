function carrossel() {
    return (
        <>
            <div className="carrossel bd-example">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img className="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=Primeiro Slide" alt="Primeiro Slide [800x300]" src="img1.png" data-holder-rendered="true" />
                        </div>
                        <div className="carousel-item active">
                            <img className="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Segundo Slide" alt="Segundo Slide [800x300]" src="img2.png" data-holder-rendered="true" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Terceiro Slide" alt="Terceiro Slide [800x300]" src="img3.png" data-holder-rendered="true" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default carrossel;