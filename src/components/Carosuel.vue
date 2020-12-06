<template>

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img style="width:100%; height:20%;" src="img/slider-image-1.jpg" alt="">
                <div class="carousel-caption d-none d-md-block">
                    <h5 style="color: blue;">First slide label</h5>
                    <p style="color: black;">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img style="width:100%; height:20%;" src="img/slider-image-2.jpg" alt="">
                <div class="carousel-caption d-none d-md-block">
                    <h5 style="color: blue;">First slide label</h5>
                    <p style="color: black;">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img style="width:100%; height:20%;" src="img/slider-image-3.jpg" alt="">
                <div class="carousel-caption d-none d-md-block">
                    <h5 style="color: blue;">First slide label</h5>
                    <p style="color: black;">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
export default {
  name: "Carosuel",
};
</script>

<style scoped>
</style>