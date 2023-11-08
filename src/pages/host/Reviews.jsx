

export default function Reviews() {
  return (
    <div className="reviews style">
      <h2>Your reviews <span>last <b>30 days</b></span></h2>

      <div className="rating">
        <h3>5.0  overall rating</h3>

        <div className="progresses">
          <div className="row">
            <p>5 stars</p>
            <div className="progress"></div>
            <p>100%</p>
          </div>

          <div className="row">
            <p>5 stars</p>
            <div className="progress"></div>
            <p>100%</p>
          </div>

          <div className="row">
            <p>5 stars</p>
            <div className="progress"></div>
            <p>100%</p>
          </div>

          <div className="row">
            <p>5 stars</p>
            <div className="progress"></div>
            <p>100%</p>
          </div>

          <div className="row">
            <p>5 stars</p>
            <div className="progress"></div>
            <p>100%</p>
          </div>
        </div>
      </div>

      <div className="review">
        <h2>Reviews (2)</h2>

        <div className="iconStars">

        </div>

        <div className="data">
          <h2>Elliot <span>December 1, 2022</span></h2>
        </div>
        <p>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
        <hr />
        <div className="iconStars">

        </div>

        <div className="data">
          <h2>Elliot <span>December 1, 2022</span></h2>
        </div>

        <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>

        <hr />
      </div>
    </div>
  )
}
