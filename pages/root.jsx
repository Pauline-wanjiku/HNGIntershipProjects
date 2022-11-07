import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <div className="links">
        <div>
          <a href="https://twitter.com/pauline__Shiko" id="twitter_link">
            Twitter Link
          </a>
        </div>
        <div>
          <a href="https://training.zuri.team/" id="btn__zuri">
            Zuri Team
          </a>
        </div>
        <div>
          <a href="http://books.zuri.team" id="books">
            Zuri Books
          </a>
        </div>
        <div>
          <a href="https://books.zuri.team" id="book__python">
            Python Books
          </a>
        </div>
        <div>
          <a href="https://background.zuri.team" id="pitch">
            Background Check for coder
          </a>
        </div>
        <div>
          <a href="https://books.zuri.team/design-rules" id="book__design">
            Design Books
          </a>
        </div>
              <div>
                  {/* <a href="/contact" id="contact">Contact</a> */}
          <Link to="/contact" id="contact">
            contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Links;
