const HomePage = () => {
  return (
    <div>
      <h1>Wheel of Buckets</h1>
        <div class="about">
          <img src="assets/homepage_bingo.jpg" alt="https://greengateimages.com/products/new-years-resolutions-39957?srsltid=AfmBOoqN2KQUFvkvHiXtwDA1RPnguIvkaZox59fqVj0ibTvaKe7RmOLB&variant=42844065366172" class="aboutPic"/>
          <div className="about_text">
            <h2>About</h2>
            <p>This is the paragraph text that sits under the header. It can be as long
      as you want and will wrap naturally. his is the paragraph text that sits under the header. It can be as long
      as you want and will wrap naturally.</p>
          </div>
        </div>
        <div>
          <div class="instructions">
            <h2>How to use the wheel</h2>
            <p>This is the paragraph text that sits under the header. It can be as long
      as you want and will wrap naturally.</p>
      <ul class="button_list">
        <li>
          <a href="/createBuckets" class="button">Create Buckets</a>
        </li>
        <li>
          <a href="/spinWheel" class="button">Spin the Wheel</a>
        </li>
      </ul>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
