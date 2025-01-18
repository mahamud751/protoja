import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="mil-p-0-90">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="mil-center">
            <h2 className="mil-up mil-mb-30">
              Ready to bring your ideas to life? I'm here to help
            </h2>
            <div className="mil-up">
              <Link href="/contact" className="mil-btn mil-sm-btn">
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
