import "./css/home.css"
function Home() {
  return (
    <>
      <section className="slideContainer">
	<div className="slider-wrapper">
		<div className="slider">
			<img id="slide-1" src="./public/productsImages/slideImgs/1.jpg" alt="3Slide of the Book Lord Of the Rings" />
			<img id="slide-2" src="./public/productsImages/slideImgs/2.jpg" alt="Slide of the Comic Book Wolverine X" />
			<img id="slide-3" src="./public/productsImages/slideImgs/3.jpg" alt="Slide of the Book Animal Farm" />
		</div>
		<div className="slider-nav">
			<a href="#slide-1"></a>
			<a href="#slide-2"></a>
			<a href="#slide-3"></a>
		</div>
	</div>
</section>
    </>
  );
}

export default Home;
