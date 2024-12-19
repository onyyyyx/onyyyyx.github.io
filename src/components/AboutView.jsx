import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

function AboutView(props) {
  const authorPfolio = (
    <a
      href="https://noctyris.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Onyx
    </a>
  );

  return (
    <>
      <header>
        <div className="top-header">
          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;sky&nbsp;</span>
            <span aria-hidden="true" className="hover-text">
              &nbsp;sky&nbsp;
            </span>
          </button>
          <p
            role="button"
            style={{ width: ".8rem", textAlign: "center" }}
            id="about"
            onClick={() => props.setAbout(false)}
          >
            &#x2715;
          </p>
        </div>
      </header>
      <main className="about">
        <div className="icons">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div>
          <p>Made by {authorPfolio}</p>
          <p>Images taken by {authorPfolio}</p>
        </div>
        <legend>Telescope during calibration</legend>

        <img src="/images/telescope.webp" id="scope" />
        <p>Source code avaviable on <a href="https://github.com/noctyris/sky" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </main>
    </>
  );
}

export default AboutView;
